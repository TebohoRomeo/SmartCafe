import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFileModalPageRoutingModule } from './add-file-modal-routing.module';

import { AddFileModalPage } from './add-file-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFileModalPageRoutingModule
  ],
  declarations: [AddFileModalPage]
})
export class AddFileModalPageModule {}
