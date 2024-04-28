import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SubmitAnswerService {
  constructor(private httpClient: HttpClient) {}

  // Post user answer to the server and validate the answer ... boolean
  sendAnswer(questionID: number, userAnswer: string): Observable<boolean> {
    const answerData = { QuestionID: questionID, UserAnswer: userAnswer };

    // Post user answer to the server
    return this.httpClient
      .post('http://localhost:3000/validate', answerData)
      .pipe(
        map((data: any) => {
          console.log('Answer:', data);
          return data.isCorrect;
        }),
        catchError((error: any) => {
          console.error('Error posting answer: ', error);
          return of(false);
        })
      );
  }

  updateScore(score: number, scoreToAdd: number) {
    return score + scoreToAdd;
  }
}
