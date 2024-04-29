import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// services
import { LoginService } from '../services/login.service';

// components
import { RegisterButtonComponent } from '../../components/register-button/register-button.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RegisterButtonComponent, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {

  constructor(
    private router: Router,
    private loginService: LoginService,
  ) {}

  // initialize variables
  email: string = '';
  password: string = '';
  errorMsg: string = '';

  submitLogin() {

    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        console.log('Login response:', response);
        if (response) {
          console.log('Login successful');
          // Store user ID
          this.loginService.setUserID(response.userID);

          // if the user is admin, navigate to the admin page
          if (response.isAdmin) {
            this.router.navigateByUrl('/admin');
            return;
          }else{
          // Navigate to the quiz select page
          this.router.navigateByUrl('/quiz-select');
          }
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
