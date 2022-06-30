import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlaceComponent } from './components/create-place/create-place.component';
import { CreateSchoolComponent } from './components/create-school/create-school.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListPlaceComponent } from './components/list-place/list-place.component';
import { ListSchoolComponent } from './components/list-school/list-school.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'list-school',component:ListSchoolComponent,canActivate:[AuthGuard]},
  {path:'add-school',component:CreateSchoolComponent,},
  {path:'list-place',component:ListPlaceComponent,canActivate:[AuthGuard]},
  {path:'add-place',component:CreatePlaceComponent},
  //{path:'add-school/id',component:CreateSchoolComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
