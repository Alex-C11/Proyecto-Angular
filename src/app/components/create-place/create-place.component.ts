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

  constructor(public placeService:PlaceService, private router:Router) { }

  ngOnInit(): void {

  }

  submitForm(placeForm:NgForm){
    console.log(placeForm)
    if(placeForm.value.id==null){
      this.placeService.CreatePlaces(placeForm.value).subscribe((response)=>{
        this.router.navigate(["/list-place"]);
      });
    }else{
      this.placeService.UpdatePlaces(placeForm.value.id.placeForm).subscribe((Response)=>{
        this.router.navigate(["/list-place"]);
      })
    }
    this.placeService.CreatePlaces(placeForm.value).subscribe((response)=>{
      this.router.navigate(["/list-place"]);
    });
    this.resetForm(placeForm);
  }

  resetForm(placeForm:NgForm){
    if(placeForm!=null){
      placeForm.reset();
      this.placeService.selectPlace=new Place();
    }
  }
}
