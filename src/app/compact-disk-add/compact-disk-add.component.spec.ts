import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactDiskAddComponent } from './compact-disk-add.component';

describe('CompactDiskAddComponent', () => {
  let component: CompactDiskAddComponent;
  let fixture: ComponentFixture<CompactDiskAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompactDiskAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompactDiskAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
