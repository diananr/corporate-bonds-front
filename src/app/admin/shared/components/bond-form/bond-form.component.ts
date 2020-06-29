import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Flow } from '../../models/flow';
@Component({
  selector: 'bond-form',
  templateUrl: './bond-form.component.html',
  styleUrls: ['./bond-form.component.scss']
})
export class BondFormComponent implements OnInit {
  @Input() public method: string;

  public bondFG: FormGroup;
  public paramsHandler: Subscription;
  public bondId: number;
  public bondSubscription: Subscription;
  public loading: boolean;

  public flowList: Flow[] = [];
  public valoresFlujoEmisor = [];
  public valoresFlujoBonista = [];
  public tasaTIREmisor: number = 0;
  public tasaTCEAEmisor: number = 0;
  public tasaTIRBonista: number = 0;
  public tasaTREABonista: number = 0;

  public tipoDeFrecuencias = [
    {label: 'Diaria', value: 360},
    {label: 'Mensual', value: 30},
    {label: 'Bimestral', value: 60},
    {label: 'Trimestral', value: 90},
    {label: 'Cuatrimestral', value: 120},
    {label: 'Semestral', value: 180},
    {label: 'Anual', value: 1},
  ]


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
      this.initRouteParamsListener();
  }

  reset(){
    this.bondFG = this.fb.group({
      id: [],
      metodoPago: ['Frances',[Validators.required]],
      tipoMoneda: ['PEN',[Validators.required]],
      valorNominal: [1000,[Validators.required]],
      valorComercial: [1050,[Validators.required]],
      numAnios: [3,[Validators.required]],
      tipoAnio: ['360',[Validators.required]],
      frecuenciaPago: [180,[Validators.required]],
      tipoTasa: ['Efectiva',[Validators.required]],
      montoTasa: [9,[Validators.required]],
      tasaDescontada: [6,[Validators.required]],
      prima: [1,[Validators.required]],
      estructuracion: [0.45,[Validators.required]],
      colocacion: [0.25,[Validators.required]],
      flotacion: [0.15,[Validators.required]],
      cavali: [0.50,[Validators.required]],
    });
    this.loading = false;
  }

  ngOnInit() {
    this.reset();
  }

  getBond(){
  }

  initRouteParamsListener(): void {
    this.paramsHandler = this.route.queryParams
      .subscribe(params => {
        this.bondId = params.bondId;
        if (this.bondId) this.getBond();
      });
  }

  calculateFlow()
  {
    var data = Object.assign({}, this.bondFG.value);
    var nPeriodosPorAnio = Number(data.tipoAnio) / data.frecuenciaPago;
    var nTotalDePeriodos = nPeriodosPorAnio * data.numAnios;

    var tasaTEA;
    if(data.tipoTasa == 'Nominal'){
      tasaTEA = Math.pow( (1 + (data.montoTasa / 360)),360) - 1
    } else {
      tasaTEA = data.montoTasa;
    }
    tasaTEA = tasaTEA / 100;

    var tasaTEP = Math.pow(1 + tasaTEA, data.frecuenciaPago / Number(data.tipoAnio)) - 1;
    var tasaDiscountP = Math.pow(1 + data.tasaDescontada, data.frecuenciaPago / Number(data.tipoAnio)) - 1;

    var costosInicialesEmisor =
      data.valorComercial *
      ((data.estructuracion + data.colocacion + data.flotacion + data.cavali)  / 100);
    var costosInicialesBonista =
    data.valorComercial *
    ((data.flotacion + data.cavali)  / 100);
    console.log("observado", costosInicialesBonista)

    var firstFlow = new Flow();
    firstFlow.costosInicialesEmisor = -costosInicialesEmisor;
    firstFlow.costosInicialesBonista = costosInicialesBonista;
    firstFlow.flujoEmisor = data.valorComercial - costosInicialesEmisor;
    firstFlow.flujoBonista = -data.valorComercial - costosInicialesBonista;
    this.valoresFlujoEmisor.push(-firstFlow.flujoEmisor);
    this.valoresFlujoBonista.push(firstFlow.flujoBonista);
    console.log("mirando", firstFlow);
    this.flowList.push(firstFlow);

    for(var i = 1; i <= nTotalDePeriodos; i++){
      console.log("mirando", i);
      var flujo = new Flow();
      flujo.valorNominal = i == 1 ? data.valorNominal : this.flowList[i-1].valorNominal - this.flowList[i-1].amortizacion;
      flujo.cupon = tasaTEP * flujo.valorNominal;

      var potencia = Math.pow(1+tasaTEP,nTotalDePeriodos - i + 1);
      flujo.cuota = flujo.valorNominal * (tasaTEP * potencia / (potencia - 1));
      flujo.amortizacion = flujo.cuota - flujo.cupon;

      flujo.cuponExcel = -data.valorNominal * tasaTEP;
      if (i==nTotalDePeriodos ) flujo.prima = -data.prima * data.valorNominal / 100;
      flujo.flujoEmisor = i < nTotalDePeriodos
        ? flujo.cuponExcel
        : -data.valorNominal + flujo.cuponExcel + flujo.prima;
      flujo.flujoBonista = -flujo.flujoEmisor

      this.valoresFlujoEmisor.push(-flujo.flujoEmisor);
      this.valoresFlujoBonista.push(flujo.flujoBonista);
      this.flowList.push(flujo);
    }

    this.tasaTIREmisor = this.IRRCalc(this.valoresFlujoEmisor);
    this.tasaTIRBonista = this.IRRCalc(this.valoresFlujoBonista);
    console.log("mirando", this.valoresFlujoBonista);
    this.tasaTCEAEmisor = this.calculateTCEA(this.tasaTIREmisor / 100, data.tipoAnio, data.frecuenciaPago);
    this.tasaTREABonista = this.calculateTREA(this.tasaTIRBonista / 100, data.tipoAnio, data.frecuenciaPago);
  }


  calculateTCEA(IRR, diasPorAnio, diasPorPeriodo){
    return (Math.pow(IRR + 1 , diasPorAnio / diasPorPeriodo) - 1)*100;
  }

  calculateTREA(IRR, diasPorAnio, diasPorPeriodo){
    return (Math.pow(IRR + 1 , diasPorAnio / diasPorPeriodo) - 1)*100;
  }

  IRRCalc(CArray) {
    var min = 0.0;
    var max = 1.0;
    do {
      var guest = (min + max) / 2;
      var NPV = 0;
      for (var j = 0; j < CArray.length; j++) {
        NPV += CArray[j] / Math.pow((1 + guest), j);
      }
      if (NPV > 0) {
        min = guest;
      } else {
        max = guest;
      }
    } while (Math.abs(NPV) > 0.000001);
    return guest * 100;
  }

  onSubmit(){
    if(this.bondFG.valid){
      this.calculateFlow();
    } else {
      console.log('invalid form');
    }
  }

  cancelRequest(){
  }
}
