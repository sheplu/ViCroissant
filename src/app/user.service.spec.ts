import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
    service.getUsers().then(users => {
      this.users = users
    });
    expect(this.users).toBe(JSON);
  }));
});
