import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../models/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  selectPlace:Place=new Place();
  reqHeader=new HttpHeaders({
    'Content-Type':'aplication/json',
  })
  constructor(private http:HttpClient) { }
  baseurl='http://127.0.0.1:8000/api/';
  //metodo get
  GetPlaces():Observable<Place>{
    return this.http.get<Place>(this.baseurl+'places/');
  }

  CreatePlaces(place:Place):Observable<Place>{
    return this.http.post(this.baseurl+'places/',place,{headers:this.reqHeader});
  }

  deletePlaces(id:number){
    return this.http.delete(this.baseurl+'places/'+id+'/');
  }

  UpdatePlaces(id:number,){
    return this.http.put(this.baseurl+'places/'+id+'/',{headers:this.reqHeader});
  }
}
