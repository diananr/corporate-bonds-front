import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { SaleService } from 'src/app/core/services/sale.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sale } from 'src/app/admin/shared/models/sale';
import { CRUD } from 'src/app/core/constants/general.constant';

@Component({
  selector: 'sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.scss']
})
export class SaleFormComponent implements OnInit {
  @Input() public method: string;

  public saleFG: FormGroup;
  public saleId: number;
  public loading: boolean;

  public paramsHandler: Subscription;
  public saleSubscription: Subscription;

  constructor(private fb: FormBuilder, private saleService: SaleService,
    private route: ActivatedRoute, private router: Router) {
      this.initRouteParamsListener();
      this.saleSubscription = this.saleService.listenerRefreshSaleList()
      .subscribe(status=>{
        this.reset();
      });
  }

  reset(){
    this.saleFG = this.fb.group({
      id: [],
      name: ['',[Validators.required]],
      images: ['',[Validators.required]],
      price: ['',[Validators.required]],
      discount: ['',[Validators.required]],
      stock: ['',[Validators.required]],
      link: ['',[Validators.required]],
      status: [false,[Validators.required]],
      iconName: ['', [Validators.required]],
    });
    this.loading = false;
  }

  ngOnInit() {
    this.reset();
  }

  getMaterial(){
    this.saleService.readSaleById(this.saleId).subscribe(
      (response: any)=>{
        this.saleFG.patchValue(response.data);
      },
      (error: any)=>{
        console.log('error', error);
      }
    )
  }

  initRouteParamsListener(): void {
    this.paramsHandler = this.route.queryParams
      .subscribe(params => {
        this.saleId = params.saleId;
        if (this.saleId) this.getMaterial();
      });
  }

  onSubmit(){
    if(this.saleFG.valid){
      let sale: Sale = Object.assign({},this.saleFG.value);
      let request: Observable<any>;

      this.loading = true;
      if(this.method == CRUD.CREATE){
        request = this.saleService.createSale(sale)
      } else {
        request = this.saleService.updateSale(sale)
      }

      request.subscribe(
        (response: any)=>{
          if (this.method == CRUD.CREATE) this.saleService.refreshSaleList(true);
          if (this.method == CRUD.UPDATE) this.router.navigate(['/sales']);
          this.loading = false;
        },
        (error: any)=>{
          this.loading = false;
        }
      );
    } else {
      console.log('invalid form');
    }
  }

  cancelRequest(){
    if(this.method == CRUD.CREATE){
      this.saleService.refreshSaleList(false);
    } else {
      this.router.navigate(['/sales']);
    }
  }

}
