import { Component } from '@angular/core';

// import components
import { QuizTitleComponent } from '../../components/quiz-title/quiz-title.component';
import { QuizProgressComponent } from '../../components/quiz-progress/quiz-progress.component';
import { QuestionComponent } from '../../components/question/question.component';
import { ChoicesComponent } from '../../components/choices/choices.component';
import { SubmitButtonComponent } from '../../components/submit-button/submit-button.component';

@Component({
  selector: 'app-quiz-page',
  standalone: true,
  imports: [QuizTitleComponent, QuizProgressComponent, QuestionComponent, ChoicesComponent, SubmitButtonComponent],
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.css'
})
export class QuizPageComponent {


}
