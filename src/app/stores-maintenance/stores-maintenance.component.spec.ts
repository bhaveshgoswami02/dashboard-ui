import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresMaintenanceComponent } from './stores-maintenance.component';

describe('StoresMaintenanceComponent', () => {
  let component: StoresMaintenanceComponent;
  let fixture: ComponentFixture<StoresMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
