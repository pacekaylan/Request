import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { MissionsService } from '../services/missions.service';
import { MissionDetail } from '../interfaces/missiondetail';
import { JsonPipe } from '@angular/common';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';


@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.scss']
})
export class MissionDetailsComponent implements OnInit {

  public isDataAvailable: boolean = false;
  public missionDetailData: MissionDetail;
  public min: Date = new Date(1917, 0, 1);
  public max: Date = new Date(2020, 4, 31);

  public missionDetails: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    startDate: new FormControl(new Date()),
    completed: new FormControl(),
    createdDate: new FormControl(new Date()),
    completedDate: new FormControl(new Date()),
    notes: new FormControl(),
    description: new FormControl()
  });

  selectedMessage: any;
  
  constructor(private sharedService: SharedDataService, private missionService: MissionsService) { }

  ngOnInit(): void {
    this.sharedService.currentMessage.subscribe(message => (this.selectedMessage = message));
    this.missionService.getMissionDetails(this.selectedMessage.id).subscribe(data => {
      this.missionDetailData = data;


      this.missionDetails.patchValue({
        id: this.missionDetailData.id, 
        name: this.missionDetailData.name,
        startDate: this.convertJsonDate(this.missionDetailData.startDate),
        completed: this.missionDetailData.completed,
        createdDate: this.convertJsonDate(this.missionDetailData.createdDate),
        completedDate: this.convertJsonDate(this.missionDetailData.completedDate),
        notes: this.missionDetailData.notes,
        description: this.missionDetailData.description
      });

      this.isDataAvailable = true;
    });

  }

  public editForm(): void {
      this.missionDetails.markAllAsTouched();
  }

  public clearForm(): void {
      this.missionDetails.reset();
  }

  public convertJsonDate(date): Date {
    const transformedDate: Date = new Date(date);
    var year = parseInt(transformedDate.toISOString().substring(0, 4));
    var month = parseInt(transformedDate.toISOString().substring(6, 7));
    var day = parseInt(transformedDate.toISOString().substring(9, 10));

    return new Date(year, month, day); 

  }
 
  encapsulation: ViewEncapsulation.None
}
