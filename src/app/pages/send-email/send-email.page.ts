import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.page.html',
  styleUrls: ['./send-email.page.scss'],
})
export class SendEmailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // write email sending code below
  async sendEmail() {
     await alert('No email');
  }

}
