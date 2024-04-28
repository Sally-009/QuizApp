import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ScoreService } from '../services/score.service';

@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.css',
})
export class ResultPageComponent {
  constructor(private scoreService: ScoreService, private router: Router) {}

  score: number = this.scoreService.getScore();

  goToHome(): void {
    this.router.navigate(['/quiz-select']);
  }
}
