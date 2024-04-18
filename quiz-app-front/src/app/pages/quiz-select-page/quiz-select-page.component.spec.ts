import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSelectPageComponent } from './quiz-select-page.component';

describe('QuizSelectPageComponent', () => {
  let component: QuizSelectPageComponent;
  let fixture: ComponentFixture<QuizSelectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizSelectPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizSelectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
