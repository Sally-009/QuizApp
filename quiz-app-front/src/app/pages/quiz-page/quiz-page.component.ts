import { Component } from '@angular/core';

// import components
import { QuestionComponent } from '../../components/question/question.component';
import { ChoicesComponent } from '../../components/choices/choices.component';

@Component({
  selector: 'app-quiz-page',
  standalone: true,
  imports: [QuestionComponent, ChoicesComponent],
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.css',
})
export class QuizPageComponent {
  // Variables for quiz content
  quizTitle: string = '';
  quizQuestions: string[] = [];
  quizChoices: string[] = [];
  isCorrects: boolean[] = [];

  // variables for user answer and audit
  today: Date = new Date();
  score: number = 0;
  userAnswer: string = '';

  // variables for quiz progress
  currentQuestionNumber: number = 0;
  totalQuestionNumber: number = 0;
}
