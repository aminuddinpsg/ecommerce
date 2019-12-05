import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private cartSource: BehaviorSubject<number>;
  public cartCount: Observable<number>;

  constructor() { 
    this.cartSource = new BehaviorSubject<number>(0);
    this.cartCount = this.cartSource.asObservable();
  }

  public updateCount(count:number){
    this.cartSource.next(count);
  }
}
