import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/admin/shared/models/sale';
import { CRUD } from 'src/app/core/constants/general.constant';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'sale-table',
  templateUrl: './sale-table.component.html',
  styleUrls: ['./sale-table.component.scss']
})
export class SaleTableComponent implements OnInit {
  public sales: Sale[];
  public isVisible: boolean = false;
  public method = CRUD;
  public saleSubscription: Subscription;
  public loading: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    /* this.saleSubscription = this.saleService.listenerRefreshSaleList()
    .subscribe(status => {
      if (status) {
        this.getSales();
      }
      this.hideModal();
    }); */
  }

  reset(){
    this.sales = [];
    this.loading = false;
  }

  getSales()
  {
    this.authService.getBondsByUser().subscribe(
      (response: any)=>{
        this.loading = false;
        this.sales = response;
      },
      (error: any)=>{
        this.loading = false;
      }
    )
  }

  ngOnInit() {
    this.reset();
    this.getSales();
  }

  showModal(): void {
    /* this.saleService.resetSaleForm(); */
    this.isVisible = true;
  }

  hideModal(): void {
    this.isVisible = false;
  }

  edit(saleId: number){
    this.router.navigate(['/sales/edit'], { queryParams: { saleId } });
  }

  delete(saleId: number){
    /* this.saleService.deleteSale(saleId).subscribe(
      (response: any)=>{
        this.getSales();
      },
      (error: any)=>{
        console.log('error', error);
      }
    ) */
  }
}
