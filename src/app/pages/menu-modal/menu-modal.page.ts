import { Component, OnInit } from '@angular/core';
import { NavController, Platform, ToastController, ModalController, IonContent } from '@ionic/angular';


@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.page.html',
  styleUrls: ['./menu-modal.page.scss'],
})
export class MenuModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
