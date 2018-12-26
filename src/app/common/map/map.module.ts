import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { MapComponent } from './map.component';
import { MapService } from './map.service';
import { CamelizePipe } from 'ngx-pipes';

@NgModule({
  declarations: [
    MapComponent
  ],

  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDW9tFSqG2mA0ym2NluRBVGZ6tPr8xbwRM'
    }),
    CommonModule
  ],
  providers: [
    MapService,
    CamelizePipe
  ]
})
export class MapModule { }
