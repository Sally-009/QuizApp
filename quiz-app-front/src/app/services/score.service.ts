import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor() { }

  score: number = 0;

  getScore(): number {
    return this.score;
  }

  addScore(points: number): void {
    this.score += points;
  }

  resetScore(): void {
    this.score = 0;
  }
}
