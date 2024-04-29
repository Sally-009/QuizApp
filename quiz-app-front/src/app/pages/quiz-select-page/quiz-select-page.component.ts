import { Component } from '@angular/core';
import { QuizListComponent } from '../../components/quiz-list/quiz-list.component';
import { LogoutButtonComponent } from '../../components/logout-button/logout-button.component';
@Component({
  selector: 'app-quiz-select-page',
  standalone: true,
  imports: [QuizListComponent, LogoutButtonComponent],
  templateUrl: './quiz-select-page.component.html',
  styleUrl: './quiz-select-page.component.css',
})
export class QuizSelectPageComponent {}
