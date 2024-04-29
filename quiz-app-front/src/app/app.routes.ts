import { Routes } from '@angular/router';

// Page Components
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { QuizSelectPageComponent } from './pages/quiz-select-page/quiz-select-page.component';
import { QuizPageComponent } from './pages/quiz-page/quiz-page.component';
import { ResultPageComponent } from './pages/result-page/result-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Top page
  { path: 'login', component: LoginPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'quiz-select', component: QuizSelectPageComponent },
  { path: 'quiz', component: QuizPageComponent },
  { path: 'result', component: ResultPageComponent },
];
