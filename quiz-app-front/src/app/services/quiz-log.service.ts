import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizLogService {

  constructor(private httpClient: HttpClient) { }

  // Variables
  private userID: number = 0;
  private quizID: number = 0;
  private dateTaken: string = '';
  private score: number = 0;

  // Getters
  getUserID(): number {
    return this.userID;
  }
  getQuizID(): number {
    return this.quizID;
  }
  getDateTaken(): string {
    return this.dateTaken;
  }
  getScore(): number {
    return this.score;
  }

  // Setters
  setUserID(id: number): void {
    this.userID = id;
  }
  setQuizID(id: number): void {
    this.quizID = id;
  }
  setDateTaken(date: string): void {
    this.dateTaken = date;
  }
  setScore(score: number): void {
    this.score = score;
  }

  // post quiz log to the server
  sendQuizLog(): Observable<any> {
    const quizLogData = {
      UserID: this.userID,
      QuizID: this.quizID,
      DateTaken: this.dateTaken
        ? new Date(this.dateTaken).toISOString().slice(0, 19).replace('T', ' ')
        : null,
      Score: this.score,
    };

    return this.httpClient.post('http://localhost:3000/quizLog', quizLogData);
  }

}
