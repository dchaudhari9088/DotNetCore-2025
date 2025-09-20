import { Component, signal, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav',
  imports: [FormsModule, CommonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
protected creds: any = {};
protected isloogedin = signal(false);
@ViewChild('loginForm') protected loginForm : any | undefined;
constructor( protected accountService: AccountService) {
  
}

  login() {
    console.log('Login attempted with', this.creds);
    // Implement login logic here
    this.accountService.login(this.creds).subscribe(response => {
      console.log('Login successful', response);
      this.loginForm?.resetForm();
    }, error => {
      console.error('Login failed', error.message);
    });
  }
  logout() {
    console.log('Logged out');
    this.accountService.logout();
  }
}
