import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactDisksComponent } from './compact-disks.component';

describe('CompactDisksComponent', () => {
  let component: CompactDisksComponent;
  let fixture: ComponentFixture<CompactDisksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompactDisksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompactDisksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
