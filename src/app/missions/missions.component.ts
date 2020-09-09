import { Component, OnInit } from '@angular/core';
import { MissionsService } from '../services/missions.service';
import { SharedDataService } from '../services/shared-data.service';
import { Mission } from '../interfaces/mission';
import { Router } from '@angular/router';
import { SelectableSettings } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
 })
export class MissionsComponent implements OnInit {

  public gridData: Mission[] = [];
  public isDataAvailable: boolean = false;
  public selectedItem;
  public mode = 'single';
  public selectableSettings: SelectableSettings;
  constructor(private missionService: MissionsService, private sharedService: SharedDataService, private _router: Router) 
  { 
    this.setSelectableSettings();
  }

  ngOnInit(): void {
     
    this.missionService.getMissions().subscribe(data => {
      this.gridData = data;
      this.isDataAvailable = true;
    });

  }

  setSelectableSettings(): void
  {
    this.selectableSettings = {
      checkboxOnly: false,
      mode: 'single'
    };
  }

  selectionChange(e)
  {
    this.selectedItem = e.selectedRows[0].dataItem;
    this.sharedService.changeMessage(this.selectedItem);
    this._router.navigate(['missions/details']);
  }

}
