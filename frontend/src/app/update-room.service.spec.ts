import { TestBed } from '@angular/core/testing';

import { UpdateRoomService } from './update-room.service';

describe('UpdateRoomService', () => {
  let service: UpdateRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
