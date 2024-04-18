import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PswdInputComponent } from './pswd-input.component';

describe('PswdInputComponent', () => {
  let component: PswdInputComponent;
  let fixture: ComponentFixture<PswdInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PswdInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PswdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
