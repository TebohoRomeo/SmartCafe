import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Platform, ToastController, ModalController, IonContent } from '@ionic/angular';
import { TopupPage } from '../pages/topup/topup.page';
import { CreatePage } from '../pages/create/create.page';
import { MenuModalPage } from '../pages/menu-modal/menu-modal.page';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('triggerElement', {read: ElementRef, static: true}) triggerElement: ElementRef;
  @ViewChild(IonContent, {read: ElementRef, static: true}) contentArea: IonContent;

  private observer: IntersectionObserver;
  slideOpt = {
    initialSlide: 0,
    speed: 300,
  };

  constructor(private navCtrl: NavController,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private router: Router,
    private renderer: Renderer2) { }

  ngOnInit() {
    // this.goToCreate();
  }

  async topUpModal() {
    const modal = await this.modalCtrl.create({
      component: TopupPage,
      cssClass: 'modal-radius',
      // mode: 'ios',
      breakpoints: [1, 0.5],
      initialBreakpoint: 0.5,
      handle: false,
    });

    return await modal.present();
  }

  goToInvoice() {
    this.router.navigate(['/invoice']);
  }

  async menuModal() {
    const modal = await this.modalCtrl.create({
      component: MenuModalPage,
      cssClass: 'small-modal',
      mode: 'ios',
      // breakpoints: [0, 0.9], // Breakpoints can be changes to modify the modal reach height
      // initialBreakpoint: 0.9, // ''
      // handle: true,
    });
    return await modal.present();
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToBookings() {
    this.router.navigate(['/bookings']);
  }

  goToCertifyDocs() {
    this.router.navigate(['/ceretify-documents']);
  }

  goToSignDocs(){
    this.router.navigate(['/sign-document']);
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }

  goToSendEmail() {
    this.router.navigate(['/send-email']);
  }

  goToCv(){
    this.router.navigate(['/cv-templates']);
  }
  goToLetter() {
    this.router.navigate(['/letter'])
  }

  async goToCreate() {
    const modal = await this.modalCtrl.create({
      component: CreatePage,
      cssClass: 'modal-radius',
      mode: 'ios',
      breakpoints: [0, 0.9], // Breakpoints can be changes to modify the modal reach height
      initialBreakpoint: 0.9, // ''
      handle: false,
    });
    return await modal.present();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  handleScroll(ev) {
    console.log(ev, 'this the ev');
  }
}
