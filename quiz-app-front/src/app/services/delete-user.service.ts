import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {

  constructor(
    private http: HttpClient,
  ) { }

  // Send a DELETE request to the server
  deleteUser(userID: string): Observable<any> {
    return this.http.delete(`http://localhost:3000/users/${userID}`);
  }
}
