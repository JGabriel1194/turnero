import { Component, OnInit } from '@angular/core';
import { Dia } from 'src/app/models/dia.model';
import { Estudiante } from 'src/app/models/estudiante.model';
import { Horario } from 'src/app/models/horario.model';
import { DiaService } from 'src/app/services/dia.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { HorarioService } from 'src/app/services/horario.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  estudiantes: Estudiante[] = [];
  cedula: string = '';
  horarios: Horario[] = [];
  dias: Dia[] = [];
  hora:string = '';
  constructor(
    private estudianteService: EstudianteService,
    private horarioService: HorarioService,
    private diaService: DiaService
    ) { }

  ngOnInit(): void {
    this.GetDias();
  }

  SearchCedula(){
    this.estudianteService.SearchByCedula(this.cedula).subscribe(
      (res: any) => {
        if(res){
          this.estudiantes = res;
        }
      }
    )
  }

  GetDias(){
    this.diaService.GetDias().subscribe(
      (res: any) => {
        if(res){
          this.dias = res;
        }
      }
    )
  }

  DiaChange(id:string){
    this.horarioService.GetHorarioEstado(id,this.estudiantes[0].fase_id).subscribe(
      (res:any) => {
        if(res){
          this.horarios = res;
        }
      }
    )
  }

  GuardarHorario(data:Estudiante){
    if(this.hora != ''){
      data.horario_id = this.hora;
      this.estudianteService.PutEstudiante(data.id,data).subscribe(
        (res: any) => {
          this.UpdateHorario(this.hora);
        }
      )
    }
  }

  UpdateHorario(id:string){
    let resultado: Horario = new Horario;
    this.horarios.forEach(horario => {
      if(horario.id = id){
        resultado = horario
      }
    });
    if(resultado){
      resultado.cantidad = resultado.cantidad - 1;
      if(resultado.cantidad == 0){
        resultado.estado = false
      }
      this.horarioService.PutHorario(this.hora,resultado).subscribe(
        (res:any)=>{
          if(res){
            this.SearchCedula();
          }
        }
      )
    }
  }

  Salir(){
    this.estudiantes = [];
    this.cedula = '';
  }
}
