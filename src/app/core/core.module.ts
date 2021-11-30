import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { VeterinaryInfoComponent } from '../module/veterinary-info/veterinary-info.component'
import { VeterinaryListComponent } from '../module/veterinary-list/veterinary-list.component'

import { Error404Component } from './components/error-404/error-404.component'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'

@NgModule({
  declarations: [NavBarComponent, Error404Component],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        redirectTo: '/veterinary',
        pathMatch: 'full'
      },
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
      {
        path: '**',
        component: Error404Component,
      },
    ]),
  ],
  exports: [NavBarComponent],
})
export class CoreModule { }
