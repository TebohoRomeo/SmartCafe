import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv-templates',
  templateUrl: './cv-templates.page.html',
  styleUrls: ['./cv-templates.page.scss'],
})
export class CvTemplatesPage implements OnInit {
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
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  previewCv(){
    this.router.navigate(['/cv-preview'])
  }

}
