import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SHA256 } from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  userID: number = 0;

  login(email: string, password: string) {
    // Hash the password
    const hashedPassword = SHA256(password).toString();
    // set user data
    const userData = { email, hashedPassword };

    // send a post request to the server
    return this.http.post<any>('http://localhost:3000/login', userData);
  }

  setUserID(id: number) {
    this.userID = id;
  }

  getUserID(): number {
    return this.userID;
  }
}
