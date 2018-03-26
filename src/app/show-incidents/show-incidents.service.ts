import { Injectable } from '@angular/core';
import {incidents, locationIds} from '../../js/fake-api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class ShowIncidentsService {

  constructor() { }
  getIncidents():Observable<any>{
    return Observable.of(incidents).map(o => JSON.stringify(o));
  }

  getLocations():Observable<any>{
    return Observable.of(locationIds).map(o => JSON.stringify(o));
  } 
}
