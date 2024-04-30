import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SHA256 } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient, ) { }

  // register user
  registerUser(userDetails: any) {
    // Hash the password
    const hashedPassword = SHA256(userDetails.password).toString();
    // set user data
    const userData = { email: userDetails.email, password: hashedPassword };

    // send POST request to register user
    return this.httpClient.post('http://localhost:3000/users', userData);
  }

}
