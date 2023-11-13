import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from 'src/app/core/models/convenio';


@Injectable({
  providedIn: 'root'
})
export class ConvenioService {
 
  private url : string = 'http://localhost:9090/api/CONVENIO';

  constructor(private http: HttpClient) { }

  listar(): Observable <Convenio[]>{
    return this.http.get<Convenio[]>(this.url + '/listConvenio');
  }
  crear(convenio: Convenio): Observable<any>{
    return this.http.post<string>(this.url +'/addConvenio' , convenio);
  }

  editar(convenio: Convenio) {
    return this.http.put(this.url, convenio);
  }

  eliminar(id: number): Observable<any> {
    return this.http.delete(this.url + '/deleteConvenio' + id);
  }

  IDconvenio(id: Convenio) {
    this.http.get(this.url + '/' + id);
  }
}

