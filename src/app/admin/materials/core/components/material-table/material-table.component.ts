import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { CRUD } from 'src/app/core/constants/general.constant';
import { MaterialService } from 'src/app/core/services/material.service';

@Component({
  selector: 'material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.scss']
})
export class MaterialTableComponent implements OnInit {
  public materials: any[];
  public isVisible: boolean = false;
  public method = CRUD;
  public materialSubscription: Subscription;
  public loading: boolean = false;

  constructor(
    private materialService: MaterialService,
    private router: Router
  ) {
    this.materialSubscription = this.materialService.listenerRefreshMaterialList()
    .subscribe(status => {
      if (status) {
        this.getMaterials();
      }
      this.hideModal();
    });
  }

  reset(){
    this.materials = [];
    this.loading = false;
  }

  getMaterials(){
    /* this.loading = true; */
    this.materials = [
      {
        id: 1,
        type: 'Cartón',
        name: 'Caja de tele',
        weight: '5',
        price: 0.90,
        total: 4.5
      },
      {
        id: 1,
        type: 'Cartón',
        name: 'Caja de tele',
        weight: '5',
        price: 0.90,
        total: 4.5
      }
    ]
    /* this.materialService.readMaterials().subscribe(
      (response: any)=>{
        this.loading = false;
        this.materials = response.data;
      },
      (error: HttpErrorResponse)=>{
        this.loading = false;
        throw error;
      }
    ) */
  }

  ngOnInit() {
    this.reset();
    this.getMaterials();
  }

  showModal(): void {
    this.materialService.resetMaterialForm();
    this.isVisible = true;
  }

  hideModal(): void {
    this.isVisible = false;
  }

  edit(materialId: number){
    this.router.navigate(['/materials/edit'], { queryParams: { materialId } });
  }

  delete(materialId: number){
    this.materialService.deleteMaterial(materialId).subscribe(
      (response: any)=>{
        this.getMaterials();
      },
      (error: any)=>{
        console.log('error', error);
      }
    )
  }
}
