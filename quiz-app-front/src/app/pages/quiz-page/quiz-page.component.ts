import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

// import services
import { FetchDataService } from '../../fetch-data.service';
import { SubmitAnswerService } from '../../submit-answer.service';

@Component({
  selector: 'app-quiz-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.css',
})
export class QuizPageComponent {
  constructor(
    private fetchDataService: FetchDataService,
    private submitAnswerService: SubmitAnswerService
  ) {}

  // static variable to store question data (from quiz-list.component.ts)
  static questions: any;

  // Variables for quiz content
  questionIDs: number[] = [];
  quizQuestions: string[] = [];
  questionImages: string[] = []; // Add http://localhost:3000/ to the beginning of the URL
  quizChoices: string[][] = [];

  // variables for user answer and audit
  today: Date = new Date();
  score: number = 0;
  userChoice: string = '';
  isCorrect: Boolean = false;

  // variables for quiz progress
  currentQuestionNumber: number = 0;
  totalQuestionNumber: number = 0;

  ngOnInit() {
    // Initialize variables
    this.questionIDs = QuizPageComponent.questions.map(
      (question: { QuestionID: any }) => question.QuestionID
    );
    this.quizQuestions = QuizPageComponent.questions.map(
      (question: { QuestionText: any }) => question.QuestionText
    );
    this.questionImages = QuizPageComponent.questions.map(
      (question: { QuestionImageURL: any }) => question.QuestionImageURL
    );

    // get choices
    this.fetchDataService
      .getAnswers(this.questionIDs[this.currentQuestionNumber])
      .subscribe(
        (data: any) => {
          this.quizChoices = data.map(
            (choice: { AnswerText: string }) => choice.AnswerText
          );
          console.log('Choices:', this.quizChoices);
        },
        (error) => {
          console.error('Error fetching answers: ', error);
        }
      );

    this.totalQuestionNumber = this.quizQuestions.length;

    console.log('Question IDs:', this.questionIDs);
    console.log('Questions:', this.quizQuestions);
    console.log('Images:', this.questionImages);
    console.log('Total Questions:', this.totalQuestionNumber);
    console.log('Today:', this.today);
  }

  // Post user answer to the server and validate the answer
  onClickSubmit() {
    // Post user answer to the server

    this.isCorrect = this.submitAnswerService.sendAnswer(
      this.questionIDs[this.currentQuestionNumber],
      this.userChoice
    );

    if (this.isCorrect) {
      this.score = this.submitAnswerService.updateScore(this.score, 1);
    }
    // Check if the quiz is finished
    if (this.currentQuestionNumber === this.totalQuestionNumber) {
      console.log('Quiz finished');
      // Navigate to the results page
    }

    // Increment the current question number
    this.currentQuestionNumber += 1;

    // Reset user choice
    this.userChoice = '';
  }
}
