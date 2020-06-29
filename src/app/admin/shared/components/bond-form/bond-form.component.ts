import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

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
      valorNominal: ['',[Validators.required]],
      valorComercial: ['',[Validators.required]],
      numAnios: ['',[Validators.required]],
      tipoAnio: ['360',[Validators.required]],
      frecuenciaPago: ['',[Validators.required]],
      tipoTasa: ['',[Validators.required]],
      montoTasa: ['',[Validators.required]],
      tasaDescontada: ['',[Validators.required]],
      prima: ['',[Validators.required]],
      estructuracion: ['',[Validators.required]],
      colocacion: ['',[Validators.required]],
      flotacion: ['',[Validators.required]],
      cavali: ['',[Validators.required]],
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

  onSubmit(){
    if(this.bondFG.valid){
      console.log('values', this.bondFG.value);
    } else {
      console.log('invalid form');
    }
  }

  cancelRequest(){
  }
}
