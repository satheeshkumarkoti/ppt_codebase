import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatewizardComponent } from './createwizard.component';

describe('CreatewizardComponent', () => {
  let component: CreatewizardComponent;
  let fixture: ComponentFixture<CreatewizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatewizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatewizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
