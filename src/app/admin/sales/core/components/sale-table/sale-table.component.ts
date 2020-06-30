import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/admin/shared/models/sale';
import { CRUD } from 'src/app/core/constants/general.constant';
import { Subscription } from 'rxjs';
/* import { SaleService } from 'src/app/core/services/sale.service';
 */import { Router } from '@angular/router';

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
    /* private saleService: SaleService, */
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

  getSales(){
    /* this.loading = true; */
    this.sales = localStorage.getItem('listaDeBonos')
      ? JSON.parse(localStorage.getItem('listaDeBonos'))
      : [];

    /* this.sales = [
      {
        id:1,
        valorComercial: '3000',
        frecuenciaPago: 'Trimestral',
        montoTasa:'5.00%',
        tasaTIRBonista: '3.70%',
        tasaTCEAEmisor: '3.80%'
      },
      {
        id:2,
        valorComercial: '5000',
        frecuenciaPago: 'Cuatrimestral',
        montoTasa:'7.00%',
        tasaTIRBonista: '5.10%',
        tasaTCEAEmisor: '4.40%'
      }
    ]
 */
    /* this.saleService.readSales().subscribe(
      (response: any)=>{
        this.loading = false;
        this.sales = response.data;
      },
      (error: any)=>{
        this.loading = false;
      }
    ) */
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
