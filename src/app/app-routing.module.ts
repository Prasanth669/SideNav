import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlansComponent } from './plans/plans.component';

const routes: Routes =  [
  {path:'home', component:HomeComponent,pathMatch:'full'},
  {path:'features', component:FeaturesComponent,pathMatch:'full'},
   {path:'plans', component:PlansComponent,pathMatch:'full'},
  {path:'Login', component:LoginComponent,pathMatch:'full'}
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
