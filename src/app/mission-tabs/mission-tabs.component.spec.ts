import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionTabsComponent } from './mission-tabs.component';

describe('MissionTabsComponent', () => {
  let component: MissionTabsComponent;
  let fixture: ComponentFixture<MissionTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
