import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import {AppComponent} from './app.component'
import {LandingComponentComponent} from "./landing-component/landing-component.component"
import {AboutComponent} from "./about/about.component";
import {AddIdeaComponent} from "./add-idea/add-idea.component"
import {IdeaListComponent} from "./idea-list/idea-list.component"
const route:Routes=
[
  {path:"",component:LandingComponentComponent},
  {
    path:"About",component:AboutComponent
  },
  {
    path:"Addidea",component:AddIdeaComponent
  },
  {
    path:"Ideas",component:IdeaListComponent
  }
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
