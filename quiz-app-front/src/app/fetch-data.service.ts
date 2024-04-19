import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  // baseURLs (endpoints)
  private userURL = 'http://localhost:3000/users';

  // constructor
  constructor(private http: HttpClient) {}

  // fetch user data
  getUsers(): Observable<any> {
    return this.http.get(this.userURL);
  }
}
