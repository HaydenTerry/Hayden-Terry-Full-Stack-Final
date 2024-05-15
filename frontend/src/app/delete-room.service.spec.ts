import { TestBed } from '@angular/core/testing';

import { deleteRoomService } from './delete-room.service';

describe('DeleteRoomService', () => {
  let service: deleteRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(deleteRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
