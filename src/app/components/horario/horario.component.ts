import { Component, OnInit } from '@angular/core';
import { Dia } from 'src/app/models/dia.model';
import { Hora } from 'src/app/models/hora.models';
import { Horario } from 'src/app/models/horario.model';
import { DiaService } from 'src/app/services/dia.service';
import { HoraService } from 'src/app/services/hora.service';
import { HorarioService } from 'src/app/services/horario.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss']
})
export class HorarioComponent implements OnInit {

  dias: Dia[] = [];
  horas: Hora[] = [];
  horarios: Horario[] = [];

  constructor(
    private diaService: DiaService,
    private horaService: HoraService,
    private horarioService: HorarioService) { }
  

  ngOnInit(): void {
    this.GetDias();
    //this.GetHoras();
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
  GetHoras(){
    this.horaService.GetHora().subscribe(
      (res: any) => {
        if(res){
          this.horas = res;
        }
      }
    )
  }

  GetHorarios(diaId:string, faseId:string){
    this.horarioService.GetHorarioByDiaId(diaId,faseId).subscribe(
      (res: any) => {
        if(res){
          this.horarios = res;
        }
      }
    )
  }

  UpdateCantidad(horario:Horario,event:any){
    if(event.target.value.length > 0){
      horario.cantidad = event.target.value;
      this.horarioService.PutHorario(horario.id,horario).subscribe(
        (res: any) => {
          if(res){
            this.GetHorarios(horario.dia_id, horario.fase_id);
          }
        }
      )
    }
  }

  UpdateEstado(horario:Horario,event:any){
    horario.estado = event.currentTarget.checked;
    this.horarioService.PutHorario(horario.id,horario).subscribe(
      (res: any) => {
        if(res){
          this.GetHorarios(horario.dia_id, horario.fase_id);
        }
      }
    )
  }
}
