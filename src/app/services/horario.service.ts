import { Injectable } from '@angular/core';
import { Horario } from '../models/horario.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(private http: HttpService) { }

  GetHorario(){
    return this.http.get('horarios');
  }
  GetHorarioByDiaId(diaId:string, faseId:string){
    return this.http.get(`horarios/dia/${diaId}/fase/${faseId}`);
  }
  GetHorarioEstado(diaId:string,faseId:string){
    return this.http.get(`horarios/estado/${diaId}/fase/${faseId}`);
  }
  PutHorario(horarioID:string,data:Horario){
    return this.http.put(`horarios/${horarioID}`,data);
  }
}
