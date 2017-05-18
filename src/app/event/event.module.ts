import { NgModule } from '@angular/core';
import { DatepickerModule } from 'ng2-bootstrap';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EventComponent } from './event.component';
import { EventService } from './event.service';
@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    DatepickerModule.forRoot()],
  declarations:[EventComponent],
  providers:[EventService]
})
export class EventModule {}