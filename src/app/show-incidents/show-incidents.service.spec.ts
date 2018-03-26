import { TestBed, inject } from '@angular/core/testing';

import { ShowIncidentsService } from './show-incidents.service';

describe('ShowIncidentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowIncidentsService]
    });
  });

  it('should be created', inject([ShowIncidentsService], (service: ShowIncidentsService) => {
    expect(service).toBeTruthy();
  }));
});
