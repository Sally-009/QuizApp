import { Component } from '@angular/core';

// import components
import { ChoicesComponent } from '../../components/choices/choices.component';

@Component({
  selector: 'app-quiz-page',
  standalone: true,
  imports: [ChoicesComponent],
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.css',
})
export class QuizPageComponent {
  // static variable to store question data (from quiz-list.component.ts)
  static questions: any;

  // Variables for quiz content
  quizQuestions: string[] = [];
  questionImages: string[] = []; // Add http://localhost:4200/public/ to the beginning of the URL
  quizChoices: string[][] = [];

  // variables for user answer and audit
  today: Date = new Date();
  score: number = 0;
  userAnswer: string = '';

  // variables for quiz progress
  currentQuestionNumber: number = 0;
  totalQuestionNumber: number = 0;

  ngOnInit() {
    console.log('Today:', this.today);

    // Initialize variables
    this.quizQuestions = QuizPageComponent.questions.map(
      (question: { QuestionText: any; }) => question.QuestionText
    );
    this.questionImages = QuizPageComponent.questions.map(
      (question: { QuestionImageURL: any; }) => question.QuestionImageURL
    );

    this.totalQuestionNumber = this.quizQuestions.length;

    console.log('Quiz questions:', this.quizQuestions);
    console.log('Question images:', this.questionImages);
  }
}
