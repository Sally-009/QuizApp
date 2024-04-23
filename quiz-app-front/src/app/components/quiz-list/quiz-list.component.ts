import { Component } from '@angular/core';
import { FetchDataService } from '../../fetch-data.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-quiz-list',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './quiz-list.component.html',
  styleUrl: './quiz-list.component.css',
})
export class QuizListComponent {
  // constructor to inject the FetchDataService
  constructor(private fetchDataService: FetchDataService) {}

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
}
