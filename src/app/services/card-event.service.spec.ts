import { TestBed } from '@angular/core/testing';

import { CardEventService } from '../services/card-event.service';

describe('CardEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardEventService = TestBed.get(CardEventService);
    expect(service).toBeTruthy();
  });
});
