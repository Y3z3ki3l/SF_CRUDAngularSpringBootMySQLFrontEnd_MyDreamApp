import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/Modelo/Servicio';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  servicios:Servicio[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getServicios()
    .subscribe(data=>{
      this.servicios=data;
    })
  }

}
