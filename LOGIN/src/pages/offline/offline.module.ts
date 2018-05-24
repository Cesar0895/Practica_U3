import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OffLine } from './offline';

@NgModule({
  declarations: [
    OffLine,
  ],
  imports: [
    IonicPageModule.forChild(OffLine),
  ],
})
export class OfflinePageModule {}
