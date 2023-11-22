import { Component } from '@angular/core';
import { ConvenioService } from '../services/convenio.service';
import { Convenio } from 'src/app/core/models/convenio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-convenio',
  templateUrl: './registrar-convenio.component.html',
  styleUrls: ['./registrar-convenio.component.css']
})

export class RegistrarConvenioComponent {
  
  nuevoConvenio: Convenio = new Convenio();

  constructor(private convenioService: ConvenioService) { }

  registrarConvenio() {
    this.convenioService.crear(this.nuevoConvenio).subscribe(response => {
      console.log('Convenio registrado exitosamente', response);
      // Puedes realizar alguna acción adicional después de registrar el convenio, como redireccionar o actualizar la lista de convenios.
     
    },
    (error) => {console.log(error)}
    );
  }

  }

