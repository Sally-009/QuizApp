import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-progress',
  standalone: true,
  imports: [],
  templateUrl: './quiz-progress.component.html',
  styleUrl: './quiz-progress.component.css'
})
export class QuizProgressComponent {
    // progress of the quiz
    // ** modify it to data-bind the progress from the parent component later
    currentQuestionNumber = 1;
    totalQuestionNumber = 10;
}
