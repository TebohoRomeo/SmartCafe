import { IonicModule } from '@ionic/angular';
import { SignPadComponent } from './sign-pad/sign-pad.component';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SignaturePadModule } from 'angular2-signaturepad';

const components = [
  SignPadComponent
];

@NgModule({
  declarations: [...components],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  imports: [
    IonicModule,
    CommonModule,
    SignaturePadModule
  ],
  exports: [...components],
})
export class ComponentsModule { }