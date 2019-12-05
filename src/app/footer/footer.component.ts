import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public message: string;
  public currentDate:Date;

  constructor() {
    this.currentDate = new Date();
    this.message = 'Copyright &copy; DHL Online Bazzar - ';
  }

  ngOnInit() {
  }

}
