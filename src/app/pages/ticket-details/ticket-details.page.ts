import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular'
@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.page.html',
  styleUrls: ['./ticket-details.page.scss'],
})
export class TicketDetailsPage implements OnInit {
  selectVar: number;
  activeVariation: string;

  constructor(private animationController: AnimationController) { }

  ngOnInit() {
    this.activeVariation = 'size';
  }

  changeVar (size: number) {
    this.selectVar = size;
  }

}
