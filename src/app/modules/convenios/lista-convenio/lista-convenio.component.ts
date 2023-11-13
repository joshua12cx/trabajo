import { Component, OnInit } from '@angular/core';
import { Convenio } from 'src/app/core/models/convenio';
import { ConvenioService } from '../services/convenio.service';

@Component({
  selector: 'app-lista-convenio',
  templateUrl: './lista-convenio.component.html',
  styleUrls: ['./lista-convenio.component.css']
})
export class ListaConvenioComponent implements OnInit {
  convenios: Convenio[] = [];

  constructor(private convenioService: ConvenioService) { }

  ngOnInit(): void {
    this.convenioService.listar().subscribe(data => {
      this.convenios = data;
      console.log(data);
    });
  }

  Eliminar(id: number) {
    this.convenioService.eliminar(id).subscribe(() => {
      // Aquí puedes realizar alguna acción después de eliminar el documento, si es necesario.
      // Por ejemplo, puedes actualizar la lista de documentos.
      this.convenioService.listar().subscribe(data => {
        this.convenios = data;
        console.log(data);
      });
    });
  }
}