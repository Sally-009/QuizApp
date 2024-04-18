import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-choices',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './choices.component.html',
  styleUrl: './choices.component.css'
})
export class ChoicesComponent {
    // choices of the question
    // ** modify it to data-bind the choices from the parent component later
    choices = ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'];
}
