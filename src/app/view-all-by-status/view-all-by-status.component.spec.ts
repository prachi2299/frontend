import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllByStatusComponent } from './view-all-by-status.component';

describe('ViewAllByStatusComponent', () => {
  let component: ViewAllByStatusComponent;
  let fixture: ComponentFixture<ViewAllByStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllByStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
