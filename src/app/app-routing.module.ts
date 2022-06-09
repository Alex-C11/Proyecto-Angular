import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSchoolComponent } from './components/create-school/create-school.component';
import { ListSchoolComponent } from './components/list-school/list-school.component';
import { CreatePlaceComponent } from './components/create-place/create-place.component';
import { ListPlaceComponent } from './components/list-place/list-place.component';

const routes: Routes = [
  {path:'list-school',component:ListSchoolComponent},
  {path:'add-school',component:CreateSchoolComponent},
  {path:'list-place',component:ListPlaceComponent},
  {path:'add-place',component:CreatePlaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
