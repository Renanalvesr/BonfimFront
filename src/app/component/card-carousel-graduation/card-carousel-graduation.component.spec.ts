import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCarouselGraduationComponent } from './card-carousel-graduation.component';

describe('CardCarouselGraduationComponent', () => {
  let component: CardCarouselGraduationComponent;
  let fixture: ComponentFixture<CardCarouselGraduationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCarouselGraduationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCarouselGraduationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
