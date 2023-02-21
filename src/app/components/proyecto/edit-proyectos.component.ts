import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit{
  proyectos: Proyectos = null;

  constructor(
    private proyectosS: ProyectosService,
    private activatedRouter: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.proyectosS.detail(id).subscribe(
        data => {
          this.proyectos = data;
        }, err => {
          alert("Error al editar");
          this.router.navigate(['']);
        }
      )
    }

    onUpdate(){
      const id = this.activatedRouter.snapshot.params['id'];
      this.proyectosS.update(id, this.proyectos).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al editar el Proyecto");
          this.router.navigate(['']);
        }
      )
    }

}
