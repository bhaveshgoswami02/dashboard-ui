import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsMigrationComponent } from './tools-migration.component';

describe('ToolsMigrationComponent', () => {
  let component: ToolsMigrationComponent;
  let fixture: ComponentFixture<ToolsMigrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsMigrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
