import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SHA256 } from 'crypto-js';

// components
import { RegisterButtonComponent } from '../../components/register-button/register-button.component';
import e from 'express';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RegisterButtonComponent, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  constructor(private http: HttpClient, private router: Router) {}

  // initialize variables
  email: string = '';
  password: string = '';

  // error message
  errorMsg: string = '';

  // ** Make it a service method later
  submitLogin() {
    // set variable and Hash the password ... change this to component later
    const email = this.email;
    const hashedPassword = SHA256(this.password).toString();

    const userData = { email, hashedPassword };

    this.http.post<any>('http://localhost:3000/login', userData).subscribe(
      (response) => {
        console.log('Login response:', response);
        if (response) {
          // Navigate to the quiz select page
          console.log('Login successful');
          this.router.navigateByUrl('/quiz-select');
        } else {
          console.log('Login failed:', response);
          // Show error message to user
          this.errorMsg = 'Login failed';
        }
      },
      (error) => {
        console.error('Error logging in:', error);
        // Show error message to user
        this.errorMsg = error.error.message;
      }
    );
  }
}
