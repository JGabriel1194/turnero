import { Injectable } from '@angular/core';
import { Estudiante } from '../models/estudiante.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private http: HttpService) { }

  GetEstudiantes(){
    return this.http.get('estudiantes');
  }

  SearchByCedula(cedula:string){
    return this.http.get(`estudiantes/${cedula}`);
  }

  PutEstudiante(estudianteId:string, data:Estudiante){
    return this.http.put(`estudiantes/${estudianteId}`,data);
  }
}
