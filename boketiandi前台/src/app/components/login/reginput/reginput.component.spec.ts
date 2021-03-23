import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReginputComponent } from './reginput.component';

describe('ReginputComponent', () => {
  let component: ReginputComponent;
  let fixture: ComponentFixture<ReginputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReginputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReginputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
