import { Component } from '@angular/core';
import { UserListComponent } from '../../components/user-list/user-list.component';
import { QuizListComponent } from '../../components/quiz-list/quiz-list.component';
import { LogoutButtonComponent } from '../../components/logout-button/logout-button.component';
import { QuizLogComponent } from '../../components/quiz-log/quiz-log.component';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [UserListComponent, QuizListComponent, LogoutButtonComponent, QuizLogComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

}
