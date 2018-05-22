import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIpnpdetailsComponent } from './view-ipnpdetails.component';

describe('ViewIpnpdetailsComponent', () => {
  let component: ViewIpnpdetailsComponent;
  let fixture: ComponentFixture<ViewIpnpdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIpnpdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIpnpdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
