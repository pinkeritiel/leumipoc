import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIpnpkyc1Component } from './view-ipnpkyc1.component';

describe('ViewIpnpkyc1Component', () => {
  let component: ViewIpnpkyc1Component;
  let fixture: ComponentFixture<ViewIpnpkyc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIpnpkyc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIpnpkyc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
