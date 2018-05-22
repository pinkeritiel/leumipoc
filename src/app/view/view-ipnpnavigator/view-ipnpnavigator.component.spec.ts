import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIpnpnavigatorComponent } from './view-ipnpnavigator.component';

describe('ViewIpnpnavigatorComponent', () => {
  let component: ViewIpnpnavigatorComponent;
  let fixture: ComponentFixture<ViewIpnpnavigatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIpnpnavigatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIpnpnavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
