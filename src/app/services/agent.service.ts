import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import {Observable, throwError} from 'rxjs';
//import {catchError, retry} from 'rxjs/operator';
import {Agent} from '../interfaces/agent';

@Injectable({
  providedIn: 'root'
})

export class AgentsService {

  constructor(private http:HttpClient) { 

  }
      public getAgents()
        {          
          
          return this.http.get<Agent[]>('https://rardevapi.azurewebsites.net/api');
        
        }
  
}
