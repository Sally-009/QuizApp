import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubmitAnswerService {

  constructor(private httpClient: HttpClient) { }

  // Post user answer to the server and validate the answer ... boolean
  sendAnswer(questionID: number, userAnswer: string): boolean {

    const answerData = { QuestionID: questionID, UserAnswer: userAnswer };

    // Post user answer to the server
    this.httpClient
      .post('http://localhost:3000/validate', answerData,)
      .subscribe(
        (data: any) => {
          console.log('Answer:', data);
          if (data.isCorrect) {
            console.log('Correct!');
            return true;
          } else {
            console.log('Incorrect!');
            return false;
          }
        },
        (error) => {
          console.error('Error posting answer: ', error);
          return false;
        }
      );

      return false;
  }

  updateScore(score :number, scoreToAdd: number) {

    return score + scoreToAdd;
  }
}
