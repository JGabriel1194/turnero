import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DiaService {

  constructor(private http: HttpService) { }

  GetDias(){
    return this.http.get('dias');
  }
}
