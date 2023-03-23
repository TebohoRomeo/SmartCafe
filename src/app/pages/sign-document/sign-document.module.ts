import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignDocumentPageRoutingModule } from './sign-document-routing.module';

import { SignDocumentPage } from './sign-document.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignDocumentPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SignDocumentPage]
})
export class SignDocumentPageModule {}
