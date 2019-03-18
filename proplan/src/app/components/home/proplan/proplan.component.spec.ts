import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProplanComponent } from './proplan.component';

describe('ProplanComponent', () => {
  let component: ProplanComponent;
  let fixture: ComponentFixture<ProplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
