import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators';
import { Mission } from '../interfaces/mission';
import {MissionDetail} from '../interfaces/missiondetail';

//import { Mission } from '../interfaces/mission'

@Injectable({
  providedIn: 'root'
})
export class MissionsService {

  constructor(private http: HttpClient) {

   }

   public getMissions()
    {
      return this.http.get<Mission[]>('https://localhost:44375/api/missions');
      //return this.http.get<Mission[]>('https://rardevapi.azurewebsites.net/api/missions');
      
    }

    public getMissionDetails(ID: number)
    {
      return this.http.get<MissionDetail>('https://localhost:44375/api/missions/' + ID)
      //return this.http.get<Missiondetail[]>('https://rardevapi.azurewebsites.net/api/missions/{ID}');
    }
  
}
