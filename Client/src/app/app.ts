import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject,  OnInit, signal } from '@angular/core';
import { single } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
private http =inject(HttpClient);
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
  }
}
