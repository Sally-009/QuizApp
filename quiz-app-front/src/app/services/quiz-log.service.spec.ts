import { TestBed } from '@angular/core/testing';

import { QuizLogService } from './quiz-log.service';

describe('QuizLogService', () => {
  let service: QuizLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
