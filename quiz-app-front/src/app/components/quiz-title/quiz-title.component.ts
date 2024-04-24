import { Component } from '@angular/core';
@Component({
  selector: 'app-quiz-title',
  standalone: true,
  imports: [],
  templateUrl: './quiz-title.component.html',
  styleUrl: './quiz-title.component.css',
})
export class QuizTitleComponent {
  // Title of the quiz
  title = 'Quiz Title';
}
