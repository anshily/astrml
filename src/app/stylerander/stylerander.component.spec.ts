import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleranderComponent } from './stylerander.component';

describe('StyleranderComponent', () => {
  let component: StyleranderComponent;
  let fixture: ComponentFixture<StyleranderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleranderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleranderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
