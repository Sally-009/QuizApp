import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-choices',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './choices.component.html',
  styleUrl: './choices.component.css'
})
export class ChoicesComponent {

  constructor() {}

  // get the current question number from the parent component
  @Input() questionNum: number = 0;

  choices: string[] = [];
  isCorrects: boolean[] = [];
}
