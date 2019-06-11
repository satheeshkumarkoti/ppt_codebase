import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqfreezephaseComponent } from './reqfreezephase.component';

describe('ReqfreezephaseComponent', () => {
  let component: ReqfreezephaseComponent;
  let fixture: ComponentFixture<ReqfreezephaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqfreezephaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqfreezephaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
