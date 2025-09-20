import { Injectable, signal } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { User } from '../../types/user';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public currentUser= signal<User | null>(null);
  constructor(private http : HttpClient){
    
  }

  baseUrl = 'http://localhost:5223/api/';

  login(creds: any){
    return this.http.post<User>(this.baseUrl + 'account/login', creds)
    .pipe(
      tap((user: User) => {
        this.currentUser.set(user);
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  logout(){
    this.currentUser.set(null);
    localStorage.removeItem('user');
  }
  
}
