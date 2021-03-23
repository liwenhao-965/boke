import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritedComponent } from './writed.component';

describe('WritedComponent', () => {
  let component: WritedComponent;
  let fixture: ComponentFixture<WritedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
