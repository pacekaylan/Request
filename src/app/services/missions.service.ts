import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError, retry } from 'rxjs/operators';
import { Mission } from '../interfaces/mission';

//import { Mission } from '../interfaces/mission'

@Injectable({
  providedIn: 'root'
})
export class MissionsService {

  constructor(private http: HttpClient) {

    
   }

   public getMissions()
    {
      //var response = this.http.get<Mission[]>('https://localhost:44375/api/missions').subscribe( data =>
      //{
      //  console.log(data);
      //  return data;
      //});
      return this.http.get<Mission[]>('https://localhost:44375/api/missions');
      
    }
  
}
