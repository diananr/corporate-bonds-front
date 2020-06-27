import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent implements OnInit {
  @Input() public method: string;

  public materialFG: FormGroup;
  public paramsHandler: Subscription;
  public materialId: number;
  public materialSubscription: Subscription;
  public loading: boolean;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
      this.initRouteParamsListener();
  }

  reset(){
    this.materialFG = this.fb.group({
      id: [],
      name: ['',[Validators.required]],
    });
    this.loading = false;
  }

  ngOnInit() {
    this.reset();
  }

  getMaterial(){
  }

  initRouteParamsListener(): void {
    this.paramsHandler = this.route.queryParams
      .subscribe(params => {
        this.materialId = params.materialId;
        if (this.materialId) this.getMaterial();
      });
  }

  onSubmit(){
    if(this.materialFG.valid){
    } else {
      console.log('invalid form');
    }
  }

  cancelRequest(){
  }
}
