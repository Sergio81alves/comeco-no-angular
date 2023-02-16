import { TestBed } from '@angular/core/testing';

import { AdicionandoService } from './adicionando.service';

describe('AdicionandoService', () => {
  let service: AdicionandoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdicionandoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
