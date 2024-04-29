import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  // baseURLs (endpoints)
  private userURL = 'http://localhost:3000/users';
  private quizURL = 'http://localhost:3000/quizzes';
  private questionsURL = 'http://localhost:3000/questions';
  private answersURL = 'http://localhost:3000/choices';
  private lastLoginURL = 'http://localhost:3000/lastLogin';
  private quizLogURL = 'http://localhost:3000/quizLog';

  // constructor
  constructor(private http: HttpClient) {}

  // fetch user data
  getUsers(): Observable<any> {
    return this.http.get(this.userURL);
  }

  // fetch quiz data
  getQuizzes(): Observable<any> {
    return this.http.get(this.quizURL);
  }

  // fetch quiz data by id
  getQuestions(id: number): Observable<any> {
    return this.http.get(`${this.questionsURL}/${id}`);
  }

  getAnswers(id: number): Observable<any> {
    return this.http.get(`${this.answersURL}/${id}`);
  }

  getLastLogin(userID: number): Observable<any> {
    return this.http.get(`${this.lastLoginURL}/${userID}`);
  }

  getQuizLog(userID: number): Observable<any> {
    return this.http.get(`${this.quizLogURL}/${userID}`);
  }
}
