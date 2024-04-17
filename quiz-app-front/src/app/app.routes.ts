import { Routes } from '@angular/router';

// Page Components
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { QuizSelectPageComponent } from './quiz-select-page/quiz-select-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { ResultPageComponent } from './result-page/result-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'quiz-select', component: QuizSelectPageComponent },
  { path: 'quiz', component: QuizPageComponent },
  { path: 'result', component: ResultPageComponent },
];
