import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSchoolComponent } from './components/create-school/create-school.component';
import { ListSchoolComponent } from './components/list-school/list-school.component';
import { EditSchoolComponent } from './components/edit-school/edit-school.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SchoolService } from './services/school.service';
import { PlaceService } from './services/place.service';
import { CreatePlaceComponent } from './components/create-place/create-place.component';
import { ListPlaceComponent } from './components/list-place/list-place.component';
import { EditPlaceComponent } from './components/edit-place/edit-place.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateSchoolComponent,
    ListSchoolComponent,
    EditSchoolComponent,
    CreatePlaceComponent,
    ListPlaceComponent,
    EditPlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SchoolService, PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
