import { Component, OnInit } from '@angular/core';
import { MissionsService } from '../services/missions.service';
import { Mission } from '../interfaces/mission';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit {

  public gridData: Mission[] = [];
  public selectedItem;
  constructor(private missionService: MissionsService) { }

  ngOnInit(): void {
     
    this.missionService.getMissions().subscribe(data => {
      this.gridData = data;
    });

  }

  selectionChange(e)
  {
    this.selectedItem = e.selectedRows[0].dataItem;
  }

}
