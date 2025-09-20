import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject,  OnInit, signal } from '@angular/core';
import { single } from 'rxjs';
import {Nav} from "../layouts/nav/nav";
import { AccountService } from '../core/services/account-service';

@Component({
  selector: 'app-root',
  imports: [Nav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
private http =inject(HttpClient);
private accountService = inject(AccountService);
 protected readonly title = signal('Client');
 protected members = signal<any>([]);
  //protected readonly title = "client"

  
  ngOnInit(): void {
   this.http.get('http://localhost:5223/api/Members').subscribe(data => {
      this.members.set( data);
      console.log(data);
   }, 
   error => {
      console.error('There was an error!', error);
   }  
   );
   this.setCurrentUser();
  }
   setCurrentUser() {
      const user= localStorage.getItem('user');
      if(!user){
        return 
      }
      this.accountService.currentUser.set(JSON.parse(user));
   }
}
