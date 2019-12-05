import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: User[];
  private http:HttpClient;

  constructor(http:HttpClient) {
    this.http = http;
  }

  public getProducts(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');  
  }

  public getProductById(id:number): Observable<User> {
    return this.http.get<User>('http://localhost:3000/users/'+id);  
  }

  public save(user:User){
    return this.http.post<User>('http://localhost:3000/users', user);  
  }

}
