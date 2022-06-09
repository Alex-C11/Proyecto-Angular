import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from 'src/app/models/place.model';
import { PlaceService } from 'src/app/services/place.service';

@Component({
  selector: 'app-list-place',
  templateUrl: './list-place.component.html',
  styleUrls: ['./list-place.component.css']
})
export class ListPlaceComponent implements OnInit {
  placeList:any=[];
  constructor(public placeService:PlaceService, private router:Router) { }

  ngOnInit(): void {
    this.loadPlaces();
  }

  loadPlaces(){
    return this.placeService.GetPlaces().subscribe((data:{})=>{this.placeList=data;

    });
  }
  deletePlaces(id:number){
    this.placeService.deletePlaces(id).subscribe((data:{})=>{this.loadPlaces();

    });

  }

  oneEdit(place:Place){
    console.log(place);
    this.placeService.selectPlace=Object.assign({},place);
    this.router.navigate(["/add-place"]);
  }
}
