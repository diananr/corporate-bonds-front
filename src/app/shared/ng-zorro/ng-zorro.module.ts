import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NzFormModule,
  NzInputModule,
  NzButtonModule,
  NzDropDownModule,
  NzSelectModule,
  NzNotificationModule,
  NzPaginationModule,
  NzTableModule,
  NzModalModule,
  NzSwitchModule,
  NzInputNumberModule,
  NzSpinModule,
  NzTimePickerModule,
  NzTabsModule,
  NzToolTipModule,
} from 'ng-zorro-antd';

import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import {
  UserOutline,
  ClockCircleOutline,
  MailOutline,
  LockOutline,
  CreditCardOutline,
  FacebookOutline,
  InstagramOutline,
  StarFill,
  DownOutline,
  CameraOutline,
  SmallDashOutline,
  InfoCircleOutline,
} from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [
  UserOutline,
  ClockCircleOutline,
  MailOutline,
  LockOutline,
  CreditCardOutline,
  FacebookOutline,
  InstagramOutline,
  StarFill,
  DownOutline,
  CameraOutline,
  SmallDashOutline,
  InfoCircleOutline
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzDropDownModule,
    NzSelectModule,
    NzNotificationModule,
    NzPaginationModule,
    NzTableModule,
    NzModalModule,
    NzSwitchModule,
    NzInputNumberModule,
    NzSpinModule,
    NzTimePickerModule,
    NzTabsModule,
    NzToolTipModule
  ],
  exports:[
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzDropDownModule,
    NzSelectModule,
    NzNotificationModule,
    NzPaginationModule,
    NzTableModule,
    NzModalModule,
    NzSwitchModule,
    NzInputNumberModule,
    NzSpinModule,
    NzTimePickerModule,
    NzTabsModule,
    NzToolTipModule
  ],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class NgZorroModule { }
