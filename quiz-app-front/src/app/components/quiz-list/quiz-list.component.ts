import { Component } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { QuizLogService } from '../../services/quiz-log.service';

// component
import { QuizPageComponent } from '../../pages/quiz-page/quiz-page.component';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [CommonModule, NgFor, QuizPageComponent],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.css',
})
export class QuizListComponent {
  // constructor to inject the FetchDataService
  constructor(
    private fetchDataService: FetchDataService,
    private router: Router,
    private quizLogService: QuizLogService,
  ) {}

  // define a variable to store the quizzes
  quizzes: any[] = [];

  // fetch the quizzes from the service
  ngOnInit() {
    this.fetchDataService.getQuizzes().subscribe(
      (data: any[]) => {
        this.quizzes = data;
      },
      (error) => {
        console.error('Error fetching quizzes: ', error);
      }
    );
  }

  // send the quiz id to the server and navigate to the quiz page
  startQuiz(quizId: number) {
    this.fetchDataService.getQuestions(quizId).subscribe(
      (data: any) => {
        QuizPageComponent.questions = data; // store the questions in the static variable
        // Set Quiz ID for the quiz log
        this.quizLogService.setQuizID(quizId);
        // navigate to the quiz page
        this.router.navigateByUrl('/quiz');
      },
      (error) => {
        console.error('Error fetching questions: ', error);
      }
    );
  }
}
