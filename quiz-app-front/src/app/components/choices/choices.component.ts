import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FetchDataService } from '../../fetch-data.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-choices',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './choices.component.html',
  styleUrl: './choices.component.css',
})
export class ChoicesComponent {

  constructor(private fetchDataService: FetchDataService) {}

  // get the current question number from the parent component
  @Input() questionNum: number = 0;

  choices: string[][] = [];

  ngOnInit() {
    // Initialize variables
    this.fetchDataService.getAnswers(this.questionNum).subscribe(
      (data: any) => {
        this.choices = data.map(
          (choice: { AnswerText: string }) => choice.AnswerText
        );
        console.log('Choices:', this.choices);
      },
      (error) => {
        console.error('Error fetching answers: ', error);
      }
    );
  }
}
