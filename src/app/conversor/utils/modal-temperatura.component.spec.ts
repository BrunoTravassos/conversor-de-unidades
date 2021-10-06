import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTemperaturaComponent } from './modal-temperatura.component';

describe('ModalTemperaturaComponent', () => {
  let component: ModalTemperaturaComponent;
  let fixture: ComponentFixture<ModalTemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTemperaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
