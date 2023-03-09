import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectoComponent implements OnInit {
  Proyectos: Proyectos[] = []; 

  constructor(
    private proyectosS: ProyectosService, 
    private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectosS();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectosS(): void{
    this.proyectosS.lista().subscribe(
      data =>{
        this.Proyectos = data;
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.proyectosS.delete(id).subscribe(
        data => {
          this.cargarProyectosS();
        }, err => {
          alert("No se pudo eliminar proyecto")
        }
      )
    }
  }
}
