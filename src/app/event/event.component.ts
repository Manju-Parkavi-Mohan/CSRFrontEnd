import { Component } from '@angular/core';

import { EventDetail } from './model/event.interface';
import { EventService } from './event.service';
import { AppService } from '../app.service';
@Component({
  moduleId: module.id,
  styleUrls: ['event.component.css'],
  templateUrl: 'event.component.html'
})
export class EventComponent {
  events:EventDetail[];
  date:Date=new Date();
  errorMessage:string;
  constructor(private _eventService:EventService, private _commonService: AppService){
  }

  ngOnInit(){
    this._commonService.hideLoader();
    console.log(this.date);
    this._eventService.getEventsDetail(new Date("2017-03-17"))
    .subscribe(event=>{this.events=event,console.log(this.events)},error=>{this.errorMessage=error,console.log(this.errorMessage)})
  }
}
