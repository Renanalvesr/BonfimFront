import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduationButtonComponent } from './graduation-button.component';

describe('GraduationButtonComponent', () => {
  let component: GraduationButtonComponent;
  let fixture: ComponentFixture<GraduationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraduationButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraduationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
