import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-mission-tabs',
  templateUrl: './mission-tabs.component.html',
  styleUrls: ['./mission-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MissionTabsComponent implements OnInit {
  //dynamic tabs
  public navLinks: any[] = [
    { label: 'Missions', path: 'missions' },
    { label: 'Agents', path: 'agents' },
    { label: 'GeoFences', path: 'geofences' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
