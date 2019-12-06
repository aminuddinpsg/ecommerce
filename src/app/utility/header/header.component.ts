import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title: string;
  public fullName: string;
  private sharedService: SharedService;
  public count: number;

  constructor(sharedService: SharedService) {
    this.title = "DHL E-Commerce";
    this.fullName = "Cj";
    this.sharedService = sharedService;
  }

  ngOnInit() {
    this.sharedService.cartCount.subscribe((count:number) => {
      this.count = count;
    })
  }

}
