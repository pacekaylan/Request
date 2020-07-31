import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
 
declare var H: any;

@Component({
  selector: 'app-geofences',
  templateUrl: './geofences.component.html',
  styleUrls: ['./geofences.component.scss']
})


export class GeofencesComponent implements OnInit {
  private platform: any;

  @ViewChild("map")
  public mapElement: ElementRef;

  public constructor() {
      this.platform = new H.service.Platform({
          //"app_id": "aBrLgzMMR4t6NlP1Umqu",
          //"app_code": "h_1-lvFesMtYWz2TRMSjPcwiB_2RT6YAtAGPwzCxIaM",
          "apikey": "h_1-lvFesMtYWz2TRMSjPcwiB_2RT6YAtAGPwzCxIaM"
      });
  }

  public ngOnInit() { }

  public ngAfterViewInit() {
      let defaultLayers = this.platform.createDefaultLayers();
      let map = new H.Map(
          this.mapElement.nativeElement,
          defaultLayers.vector.normal.map,
          {
              zoom: 10,
              center: { lat: 34.978711, lng: -92.026214 }
          }
      );

      var ui = H.ui.UI.createDefault(map, defaultLayers);
  }

}