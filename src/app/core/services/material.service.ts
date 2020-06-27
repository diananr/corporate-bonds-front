import { Injectable } from "@angular/core";
import { ApiService } from './api.service';
import { Material } from 'src/app/admin/shared/models/material';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class MaterialService {

  private subjectMaterialList = new Subject<any>();
  private subjectMaterialForm = new Subject<any>();

  constructor(public api: ApiService){}

  createMaterial(material: Material){
    return this.api.post('api/material', material);
  }

  readMaterialById(materialId: number){
    return this.api.get(`api/material/${materialId}`);
  }

  readMaterials(){
    return this.api.get('api/material/all');
  }

  updateMaterial(material: Material){
    return this.api.put('api/material', material);
  }

  deleteMaterial(materialId: number){
    return this.api.delete(`api/material/${materialId}`);
  }

  refreshMaterialList(status: boolean) {
    this.subjectMaterialList.next({ status });
  }

  listenerRefreshMaterialList(): Observable<any> {
    return this.subjectMaterialList.asObservable();
  }

  resetMaterialForm() {
    this.subjectMaterialForm.next(true);
  }

  listenerResetMaterialForm(): Observable<any> {
    return this.subjectMaterialForm.asObservable();
  }
}