import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizProgressComponent } from './quiz-progress.component';

describe('QuizProgressComponent', () => {
  let component: QuizProgressComponent;
  let fixture: ComponentFixture<QuizProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
