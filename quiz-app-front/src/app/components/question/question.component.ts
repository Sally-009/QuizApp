import { Component } from '@angular/core';
import { FetchDataService } from '../../fetch-data.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  // question text
  // ** modify it to data-bind the question from the parent component later
  questionText = 'Question here: What is the capital of France?';

  // constructor to inject the FetchDataService
  constructor(private fetchDataService: FetchDataService) {}

  // get questions data
  quizID : number = 1;
  questions : any[] = [];

  // fetch the questions from the service ... *ID=1 for now
  ngOnInit() {
    this.fetchDataService.getQuestions(this.quizID).subscribe(
      (data: any[]) => {
        this.questions = data;
      },
      (error) => {
        console.error('Error fetching questions: ', error);
      }
    );
  }
}
