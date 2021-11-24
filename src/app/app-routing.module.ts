import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CastegoryBasedComponent } from './castefory-based/castegory-based/castegory-based.component';
import { GreenFertilizerComponent } from './green-fertilizer/green-fertilizer/green-fertilizer.component';

const routes: Routes = [
  {path:'', component:CastegoryBasedComponent},
  {path:'categoryBased', component:GreenFertilizerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
