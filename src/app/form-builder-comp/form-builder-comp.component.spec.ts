import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderCompComponent } from './form-builder-comp.component';

describe('FormBuilderCompComponent', () => {
  let component: FormBuilderCompComponent;
  let fixture: ComponentFixture<FormBuilderCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
