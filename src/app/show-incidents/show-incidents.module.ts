import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentsComponent } from './components/incidents.component';
import { ShowIncidentsService } from './show-incidents.service';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [IncidentsComponent],
  exports:[IncidentsComponent],
  providers:[ShowIncidentsService]
})
export class ShowIncidentsModule { }
