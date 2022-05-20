import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [],
})
export class PorCapitalComponent implements OnInit {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino.trim();

    if (this.termino.length != 0) {
      console.log(this.termino);
      this.paisService.buscarCapital(this.termino).subscribe(
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
