import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public message: string;
  constructor() {
    this.message = 'Copyright &copy; DHL Online Bazzar - 03/12/2019';
  }

  ngOnInit() {
  }

}
