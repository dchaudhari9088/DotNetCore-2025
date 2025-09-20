import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-regiter',
  imports: [FormsModule],
  templateUrl: './regiter.html',
  styleUrl: './regiter.css'
})
export class Regiter {

  protected creds: RegisterDto = {displayName: '', email: '', password: ''};
  constructor() {}

  register() {
    console.log('Login attempted with', this.creds);
    // Implement login logic here
  }
  cancel() {
    console.log('Login cancelled');
    // Implement cancel logic here
  }

}

 class RegisterDto {
    displayName: string = '';
    email: string = '';
    password: string = '';
}
