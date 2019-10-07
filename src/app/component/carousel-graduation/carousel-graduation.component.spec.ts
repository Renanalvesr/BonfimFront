import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselGraduationComponent } from './carousel-graduation.component';

describe('CarouselGraduationComponent', () => {
  let component: CarouselGraduationComponent;
  let fixture: ComponentFixture<CarouselGraduationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselGraduationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselGraduationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
