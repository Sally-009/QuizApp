import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterService } from '../../services/register.service';
@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
})
export class RegisterPageComponent {
  constructor(
    private router: Router,
    private registerService: RegisterService,
  ) {}

  // user details
  userDetails = {
    email: '',
    password: '',
  };

  // error message
  errorMsg: string = '';

  // register user
  onClickRegister() {
    console.log('User details: ', this.userDetails);

    // send POST request to register user
    this.registerService.registerUser(this.userDetails).subscribe(
      (data: any) => {
        console.log('Registration successful: ', data);

        // Navigate to login page
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error registering user: ', error);

        // Set error message
        this.errorMsg = error.error.message;
      }
    );
  }
}
