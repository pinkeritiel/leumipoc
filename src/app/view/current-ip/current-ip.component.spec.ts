import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentIpComponent } from './current-ip.component';

describe('CurrentIpComponent', () => {
  let component: CurrentIpComponent;
  let fixture: ComponentFixture<CurrentIpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentIpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
