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
      tipoMoneda: ['',[Validators.required]],
      valorNominal: [0,[Validators.required]],
      valorComercial: [0,[Validators.required]],
      numAnios: [0,[Validators.required]],
      tipoAnio: ['360',[Validators.required]],
      frecuenciaPago: [0,[Validators.required]],
      tipoTasa: ['',[Validators.required]],
      montoTasa: [0,[Validators.required]],
      tasaDescontada: [0,[Validators.required]],
      prima: [0,[Validators.required]],
      estructuracion: [0,[Validators.required]],
      colocacion: [0,[Validators.required]],
      flotacion: [0,[Validators.required]],
      cavali: [0,[Validators.required]],
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

  calculateFlow(){
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
      data.valorComercial +
      ((data.flotacion / 100) * data.valorComercial) +
      ((data.cavali / 100) * data.valorComercial);

    var firstFlow = new Flow();
    firstFlow.costosInicialesEmisor = -costosInicialesEmisor;
    firstFlow.costosInicialesBonista = costosInicialesBonista;
    firstFlow.flujoEmisor = data.valorComercial + costosInicialesEmisor;
    this.flowList.push(firstFlow);

    for(var i = 1; i <= nTotalDePeriodos; i++){
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

      this.flowList.push(flujo);
    }
  }

  onSubmit(){
    if(this.bondFG.valid){
      console.log('values', this.bondFG.value);
      this.calculateFlow();
    } else {
      console.log('invalid form');
    }
  }

  cancelRequest(){
  }
}
