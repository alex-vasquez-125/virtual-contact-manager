import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ContactService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
