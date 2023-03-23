import { Component, OnInit } from '@angular/core';
import { NavController, Platform, ToastController, ModalController, IonContent } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(private modalCtrl: ModalController,
    private router: Router) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
  
  goToWriteCvProfile() {
    this.modalCtrl.dismiss();
    setTimeout(() => {
      this.router.navigate(['/write-cv-profile']);
    }, 1300);
  }

  goToSendEmail() {
    this.modalCtrl.dismiss();
    setTimeout(() => {
      this.router.navigate(['/send-email']);
    }, 1300);
  }

  goToCv(){
    this.modalCtrl.dismiss();
    setTimeout(() => {
      this.router.navigate(['/cv-templates']);
    }, 1300);
  }

  goToCertifyDocs() {
    this.modalCtrl.dismiss();
    setTimeout(() => {
      this.router.navigate(['/ceretify-documents']);
    }, 1300);
  }

  goToLetter() {
    this.modalCtrl.dismiss();
    setTimeout(() => {
      this.router.navigate(['/letter'])
    }, 1300);
  }

  goToSignDocs(){
    this.modalCtrl.dismiss();
    setTimeout(() => {
      this.router.navigate(['/sign-document']);
    }, 1200);
  }

  goToInvoice() {
    this.modalCtrl.dismiss();
    setTimeout(() => {
      this.router.navigate(['/invoice']);
    }, 1200);
  }

  goToScanner() {
    this.modalCtrl.dismiss();
    setTimeout(() => {
      this.router.navigate(['/scanner']);
    }, 1300);
  }

}
