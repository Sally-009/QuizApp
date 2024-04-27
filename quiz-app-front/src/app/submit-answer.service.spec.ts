import { TestBed } from '@angular/core/testing';

import { SubmitAnswerService } from './submit-answer.service';

describe('SubmitAnswerService', () => {
  let service: SubmitAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
