import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninfComponent } from './signinf.component';

describe('SigninfComponent', () => {
  let component: SigninfComponent;
  let fixture: ComponentFixture<SigninfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
