import { Component, OnInit } from '@angular/core';
import { CRUD } from 'src/app/core/constants/general.constant';

@Component({
  selector: 'app-edit-sale-view',
  templateUrl: './edit-sale-view.component.html',
  styleUrls: ['./edit-sale-view.component.scss']
})
export class EditSaleViewComponent implements OnInit {
  public method = CRUD;

  constructor() { }

  ngOnInit() {
  }
}
