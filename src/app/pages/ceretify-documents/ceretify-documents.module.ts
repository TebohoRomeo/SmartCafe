import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeretifyDocumentsPageRoutingModule } from './ceretify-documents-routing.module';

import { CeretifyDocumentsPage } from './ceretify-documents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CeretifyDocumentsPageRoutingModule
  ],
  declarations: [CeretifyDocumentsPage]
})
export class CeretifyDocumentsPageModule {}
