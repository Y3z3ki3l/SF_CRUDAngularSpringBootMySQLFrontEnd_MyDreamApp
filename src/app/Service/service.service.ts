import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Servicio } from "../Modelo/Servicio";

/*
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    //'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiJ0ZXN0MiIsImxldmVsIjoxLCJpYXQiOjE1NTYyMDU0OTMsImV4cCI6MTU1NjI5MTg5M30.luqbDb-sSLxsX0LKFTaF6NTYDO4tS6kCI8V_d9pizmA'
    })
};
*/

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // persona:Persona[];
  servicio:Servicio[];
  constructor( private http:HttpClient ) { }

  Url='http://localhost:8080/my_dream_app/servicios';

  getServicios(){
    console.log(this.Url);
    return this.http.get<Servicio[]>(this.Url);
  }

  createService(servicio:Servicio){
    console.log(this.Url);
    return this.http.post<Servicio>(this.Url, servicio);
  }

}
