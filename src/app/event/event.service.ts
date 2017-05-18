import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { EventDetail } from './model/event.interface';

@Injectable()

export class EventService{
    private eventsFetchUrl="../api/json/events/events.json";
    constructor(private _http:Http){
    }

    getEventsDetail(date:Date):Observable<EventDetail[]>{
        return this._http.get(this.eventsFetchUrl)
        .map((response:Response) => response.json())
        .do(data => console.log('All '+JSON.stringify(data)))
        .catch(this.handleError);
    }
    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json() || 'Server Error');
    }
}