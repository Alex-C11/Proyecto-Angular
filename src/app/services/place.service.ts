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
    'Authorization':'bearer'+localStorage.getItem('token')
  })

  constructor(private http:HttpClient) { }

  baseurl='http://127.0.0.1:8000/api/auth/';
  //baseurl='http://champions-fia.herokuapp.com/api/';

  //metodo GET
  GetPlaces():Observable<Place>{
    return this.http.get<Place>(this.baseurl+'places/',{headers:this.reqHeader});
  }
  //metodo POST
  CreatePlace(place:Place):Observable<Place>{
    return this.http.post(this.baseurl+'places/',place,{headers:this.reqHeader});
  }

  //metodo DELETE
  DeletePlace(id:number){
    return this.http.delete(this.baseurl+'places/'+id+'/');
  }

  UpdatePlace(id:number,place:Place){
    return this.http.put(this.baseurl+'places/'+id+'/',place,{headers:this.reqHeader});
  }

}
