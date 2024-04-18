import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-title',
  standalone: true,
  imports: [],
  templateUrl: './quiz-title.component.html',
  styleUrl: './quiz-title.component.css'
})
export class QuizTitleComponent {
    // title of the quiz
    // ** modify it to data-bind the title from the parent component later
    title = 'Quiz Title Here';
}
