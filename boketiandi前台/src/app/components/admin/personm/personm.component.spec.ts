import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonmComponent } from './personm.component';

describe('PersonmComponent', () => {
  let component: PersonmComponent;
  let fixture: ComponentFixture<PersonmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
