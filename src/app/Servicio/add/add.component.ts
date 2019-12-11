import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Servicio } from 'src/app/Modelo/Servicio';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  public servicio: Servicio;
  constructor(private router:Router, private service:ServiceService) {
    this.servicio = new Servicio();
  }

  ngOnInit() {
  }

  Guardar(){
    console.log(this.servicio);
    this.service.createService(this.servicio)
    .subscribe(data=>{
      alert("Servicio agregado con exito!...");
      this.router.navigate(["list"])
    })
  }

}
