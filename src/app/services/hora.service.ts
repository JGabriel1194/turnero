import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class HoraService {

  constructor(private http: HttpService) { }

  GetHora(){
    return this.http.get('horas');
  }
}
