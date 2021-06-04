import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  /**
   * Funcion para obtener los datos
   * @param serviceName Nombre del servicio
   */
  get(serviceName: string){
    const url = `${environment.apiUrl}/api/${serviceName}`;
    return this.http.get(url);
  }

  /**
   * Funcion para insertar datos
   * @param serviceName Nombre del servicio
   * @param data Data
   */
  post(serviceName:string, data: any){
    const url = `${environment.apiUrl}/api/${serviceName}`
    return this.http.post(url,data);
  }

  /**
   * Funcion para actualizar datos
   * @param serviceName Nombre del servicio
   * @param data Data
   */
  put(serviceName:string, data: any){
    const url = `${environment.apiUrl}/api/${serviceName}`
    return this.http.put(url,data);
  }

  /**
   * Funcion para eliminar un registro
   * @param serviceName Nombre del servicio
   */
  delete(serviceName:string){
    const url = `${environment.apiUrl}/api/${serviceName}`
    return this.http.delete(url);
  }
}
