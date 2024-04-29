import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { FetchDataService } from '../../services/fetch-data.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-quiz-log',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-log.component.html',
  styleUrl: './quiz-log.component.css',
})
export class QuizLogComponent {
  constructor(
    private fetchDataService: FetchDataService,
    private loginService: LoginService
  ) {}

  // quiz logs
  quizLogs: any[] = [];

  // fetch quiz logs
  ngOnInit() {
    this.fetchDataService.getQuizLog(this.loginService.getUserID()).subscribe(
      (data: any[]) => {
        this.quizLogs = data;
        console.log('Quiz logs: ', this.quizLogs);
      },
      (error) => {
        console.error('Error fetching quiz logs: ', error);
      }
    );
  }

}
