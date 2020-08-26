import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.scss']
})
export class MissionDetailsComponent implements OnInit {

  selectedMessage: any;

  constructor(private sharedService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedService.currentMessage.subscribe(message => (this.selectedMessage = message));
  }

}
