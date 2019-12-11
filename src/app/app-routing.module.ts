import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './Servicio/list/list.component';
import { AddComponent } from './Servicio/add/add.component';
import { EditComponent } from './Servicio/edit/edit.component';


const routes: Routes = [
  {path:'list', component:ListComponent},
  {path:'add',  component:AddComponent},
  {path:'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
