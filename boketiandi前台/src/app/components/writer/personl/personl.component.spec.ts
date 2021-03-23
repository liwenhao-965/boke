import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonlComponent } from './personl.component';

describe('PersonlComponent', () => {
  let component: PersonlComponent;
  let fixture: ComponentFixture<PersonlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
