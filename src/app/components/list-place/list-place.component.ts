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
  dataList:any=[];

  constructor(public placeService:PlaceService,private router:Router) { }

  ngOnInit(): void {
    this.onList();
  }

  onList(){
    return this.placeService.GetPlaces().subscribe((data:{})=>{
      this.dataList=data;
      console.log(data);
    });
  }

  onDelete(id:number){
    this.placeService.DeletePlace(id).subscribe((response)=>{
      this.onList();
    });
  }

  onEdit(place:Place){
    console.log(place);
    this.placeService.selectPlace=Object.assign({},place);
    this.router.navigate(["/add-place"]);
  }

}
