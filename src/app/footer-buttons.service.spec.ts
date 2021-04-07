import { TestBed } from '@angular/core/testing';

import { FooterButtonsService } from './footer-buttons.service';

describe('FooterButtonsService', () => {
  let service: FooterButtonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
