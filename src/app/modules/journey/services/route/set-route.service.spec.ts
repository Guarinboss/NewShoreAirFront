import { TestBed } from '@angular/core/testing';

import { SetRouteService } from './set-route.service';

describe('SetRouteService', () => {
  let service: SetRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
