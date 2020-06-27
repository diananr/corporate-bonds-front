import { Injectable } from "@angular/core";
import { ApiService } from './api.service';
import { Subject, Observable } from 'rxjs';
import { Sale } from 'src/app/admin/shared/models/sale';

@Injectable()
export class SaleService {

  private subjectSaleList = new Subject<any>();
  private subjectSaleForm = new Subject<any>();

  constructor(public api: ApiService){}

  createSale(sale: Sale){
    return this.api.post('api/sale', sale);
  }

  readSaleById(saleId: number){
    return this.api.get(`api/sale/${saleId}`);
  }

  readSales(){
    return this.api.get('api/sale/all');
  }

  updateSale(sale: Sale){
    return this.api.put('api/sale', sale);
  }

  deleteSale(saleId: number){
    return this.api.delete(`api/sale/${saleId}`);
  }

  refreshSaleList(status: boolean) {
    this.subjectSaleList.next({ status });
  }

  listenerRefreshSaleList(): Observable<any> {
    return this.subjectSaleList.asObservable();
  }

  resetSaleForm() {
    this.subjectSaleForm.next(true);
  }

  listenerResetSaleForm(): Observable<any> {
    return this.subjectSaleForm.asObservable();
  }
}