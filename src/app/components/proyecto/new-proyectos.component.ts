import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';


@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit{
  nombre: string;
  descripcion: string;
  imgService: any;
  activatedRouter: any;

  constructor(private proyectosS: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyectos = new Proyectos(this.nombre, this.descripcion, this.imgService);
    this.proyectosS.img = this.imgService.url
    this.proyectosS.save(proyectos).subscribe(
      data => {
        alert("Proyecto se creó correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Ya existe este Proyecto");
        this.router.navigate(['']);
      }
    )
  }
  uploadImage($event: any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "project-" + id;
    this.imgService.uploadImage($event, name)
  }

}
