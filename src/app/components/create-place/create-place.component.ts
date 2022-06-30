import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Place } from 'src/app/models/place.model';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-create-place',
  templateUrl: './create-place.component.html',
  styleUrls: ['./create-place.component.css']
})
export class CreatePlaceComponent implements OnInit {

  constructor(public placeService:PlaceService,
    private router:Router) { }

  ngOnInit(): void {
  }

  submitForm(schoolForm:NgForm){
    console.log(schoolForm.value)
    if(schoolForm.value.id==null){
      this.placeService.CreatePlace(schoolForm.value)
      .subscribe((response)=>{
        this.router.navigate(["/list-place"]);
      });
    }else{
      this.placeService.UpdatePlace(schoolForm.value.id,schoolForm.value)
      .subscribe((response)=>{
        this.router.navigate(["/list-place"]);
      });
    }
    this.resetForm(schoolForm);
  }

  resetForm(schoolForm:NgForm){
    if(schoolForm!=null){
      schoolForm.reset();
      this.placeService.selectPlace=new Place();
    }
  }

}
