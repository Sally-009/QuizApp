import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// components
import { EmailInputComponent } from '../../components/email-input/email-input.component';
import { PswdInputComponent } from '../../components/pswd-input/pswd-input.component';
import { LoginButtonComponent } from '../../components/login-button/login-button.component';
import { RegisterButtonComponent } from '../../components/register-button/register-button.component';
import e from 'express';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    EmailInputComponent,
    PswdInputComponent,
    LoginButtonComponent,
    RegisterButtonComponent,
    FormsModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  constructor(private http: HttpClient, private router: Router) {}

  // ** Make it a service method later
  // For debugging purposes, hardcoding the email and password
  email: string = 'skojima@atu.edu';
  password: string = 'skojima';

  submitLogin(email: string, password: string) {
    const userData = {email, password};
    this.http.post<any>('http://localhost:3000/login', userData).subscribe(
      (response) => {
        console.log('Login response:', response);
        if (response.success) {
          console.log('Login successful');
          this.router.navigate(['/quiz-select']);
        } else {
          console.log('Login failed:', response.error);
          // Show error message to user
        }
      },
      (error) => {
        console.error('Error logging in:', error);
        // Show error message to user
      }
    );
  }
}
