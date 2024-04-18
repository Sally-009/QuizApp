import { Component } from '@angular/core';

// components
import { EmailInputComponent } from '../../components/email-input/email-input.component';
import { PswdInputComponent } from '../../components/pswd-input/pswd-input.component';
import { LoginButtonComponent } from '../../components/login-button/login-button.component';
import { RegisterButtonComponent } from '../../components/register-button/register-button.component';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [EmailInputComponent, PswdInputComponent, LoginButtonComponent, RegisterButtonComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
