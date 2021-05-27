import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberMaintenanceComponent } from './member-maintenance.component';

describe('MemberMaintenanceComponent', () => {
  let component: MemberMaintenanceComponent;
  let fixture: ComponentFixture<MemberMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
