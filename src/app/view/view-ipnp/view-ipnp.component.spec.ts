import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIpnpComponent } from './view-ipnp.component';

describe('ViewIpnpComponent', () => {
  let component: ViewIpnpComponent;
  let fixture: ComponentFixture<ViewIpnpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIpnpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIpnpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
