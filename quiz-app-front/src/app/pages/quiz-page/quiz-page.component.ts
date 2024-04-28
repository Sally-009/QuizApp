import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';

// import services
import { FetchDataService } from '../../fetch-data.service';
import { SubmitAnswerService } from '../../submit-answer.service';
import { ScoreService } from '../../score.service';

@Component({
  selector: 'app-quiz-page',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.css',
})
export class QuizPageComponent {
  constructor(
    private fetchDataService: FetchDataService,
    private submitAnswerService: SubmitAnswerService,
    private router: Router,
    private scoreService: ScoreService
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

    this.scoreService.resetScore();

    // get choices
    this.getChoices();

    this.totalQuestionNumber = this.quizQuestions.length;

    console.log('Question IDs:', this.questionIDs);
    console.log('Questions:', this.quizQuestions);
    console.log('Images:', this.questionImages);
    console.log('Total Questions:', this.totalQuestionNumber);
    console.log('Today:', this.today);
  }

  // Post user answer to the server and validate the answer
  onClickSubmit() {
    // Post user answer to the server and validate
    this.submitAnswerService
      .sendAnswer(this.questionIDs[this.currentQuestionNumber], this.userChoice)
      .subscribe(
        (isCorrect: boolean) => {
          this.isCorrect = isCorrect;

          // Update score if the answer is correct
          if (this.isCorrect) {
            this.scoreService.addScore(1);
          }

          // Increment the current question number
          this.currentQuestionNumber += 1;

          // Reset user choice
          this.userChoice = '';

          // Check if the quiz is finished
          if (this.currentQuestionNumber === this.totalQuestionNumber) {
            console.log('Quiz finished! Final Score:', this.scoreService.getScore());
            // Navigate to the results page
            this.router.navigateByUrl('/result');
          } else {
            // Get choices for the next question
            this.getChoices();
          }
        },
        (error) => {
          console.error('Error checking answer: ', error);
        }
      );
  }

  getChoices(){
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
  }
}
