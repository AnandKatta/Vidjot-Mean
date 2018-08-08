import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import {AppComponent} from './app.component'

const route:Routes=
[
  {path:"",component:AppComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(route
    )
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {
  
 }
