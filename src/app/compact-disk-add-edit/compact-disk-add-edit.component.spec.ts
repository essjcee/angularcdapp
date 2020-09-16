import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactDiskAddEditComponent } from './compact-disk-add-edit.component';

describe('CompactDiskAddEditComponent', () => {
  let component: CompactDiskAddEditComponent;
  let fixture: ComponentFixture<CompactDiskAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompactDiskAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompactDiskAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
