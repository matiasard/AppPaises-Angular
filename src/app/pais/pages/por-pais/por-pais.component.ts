import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino.trim();

    if (this.termino.length != 0) {
      console.log(this.termino);
      this.paisService.buscarPais(this.termino).subscribe(
        (paises) => {
          // this.hayError = false;
          console.log(paises);
          this.paises = paises;
        },
        (error: any) => {
          this.hayError = true;
          this.paises = [];
        }
      );
    }
  }

  sugerencia(termino: string) {
    this.hayError = false;
    //todo: crear sugerencia
  }
}
