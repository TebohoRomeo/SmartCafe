import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  listEvents = [
    {
      imlk: '../../../assets/img/model_1.png'
    },
    {
      imlk: '../../../assets/img/model_1.png'
    },
    {
      imlk: '../../../assets/img/model_4.png'
    },
    {
      imlk: '../../../assets/img/model_1.png'
    },
    {
      imlk: '../../../assets/img/model_1.png'
    },
    {
      imlk: '../../../assets/img/model_4.png'
    },
    {
      imlk: '../../../assets/img/model_4.png'
    },
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToEvents() {
    this.router.navigate(['/ticket-details'])
  }

}
