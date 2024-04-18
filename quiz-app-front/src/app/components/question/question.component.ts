import { Component } from '@angular/core';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  // question text
  // ** modify it to data-bind the question from the parent component later
  questionText = 'Question here: What is the capital of France?';
}
