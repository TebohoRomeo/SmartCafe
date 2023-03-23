import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Plugins
import { HttpClientModule } from '@angular/common/http';

// import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentScanner } from '@ionic-native/document-scanner/ngx';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HomePageModule } from './home/home.module';

import { SignPadComponent } from './components/sign-pad/sign-pad.component';

@NgModule({
  declarations: [AppComponent, ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  imports: [
    HttpClientModule,
     BrowserModule,
     HomePageModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    FormBuilder, FileOpener, DocumentScanner,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
