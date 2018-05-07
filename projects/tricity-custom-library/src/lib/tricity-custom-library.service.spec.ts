import { TestBed, inject } from '@angular/core/testing';

import { TricityCustomLibraryService } from './tricity-custom-library.service';

describe('TricityCustomLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TricityCustomLibraryService]
    });
  });

  it('should be created', inject([TricityCustomLibraryService], (service: TricityCustomLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
