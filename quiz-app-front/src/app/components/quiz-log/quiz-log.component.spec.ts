import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizLogComponent } from './quiz-log.component';

describe('QuizLogComponent', () => {
  let component: QuizLogComponent;
  let fixture: ComponentFixture<QuizLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizLogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
