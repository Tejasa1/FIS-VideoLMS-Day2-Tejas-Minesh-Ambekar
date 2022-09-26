import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';
import { DisplayComponent } from './display/display.component';
import { InsertComponent } from './insert/insert.component';
import { LeadActorComponent } from './lead-actor/lead-actor.component';
import { RatingComponent } from './rating/rating.component';

const routes: Routes = [

  {path:"display", component:DisplayComponent},
  {path:"insert", component:InsertComponent},
  {path:"rating", component:RatingComponent},
  {path:"delete", component:DeleteComponent},
  {path:"lead-actor", component:LeadActorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
