import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { StarModule } from '../shared/components/star/star.module'
import { AppPipeModule } from '../shared/pipe/app-pipe.module'
import { VeterinaryInfoComponent } from './veterinary-info/veterinary-info.component'
import { VeterinaryListComponent } from './veterinary-list/veterinary-list.component';

@NgModule({
  declarations: [
    VeterinaryListComponent,
    VeterinaryInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    StarModule,
    AppPipeModule,
    RouterModule.forChild([
      {
        path: 'veterinary',
        component: VeterinaryListComponent,
      },
      {
        path: 'veterinary/info',
        component: VeterinaryInfoComponent,
      },
      {
        path: 'veterinary/info/:id',
        component: VeterinaryInfoComponent,
      },
    ]),
  ],
  exports: [
    VeterinaryListComponent,
    VeterinaryInfoComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VeterinaryModule { }
