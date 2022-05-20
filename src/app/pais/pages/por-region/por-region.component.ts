import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  pais: Country[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  getClassCSS(param: string): string {
    return param == this.regionActiva ? 'btn-primary' : 'btn-outline-primary';
  }

  activarRegion(region: string) {
    if (this.regionActiva == region) {
      return;
    }

    this.regionActiva = region;
    this.pais = [];

    this.paisService
      .buscarPorRegion(this.regionActiva)
      .subscribe((resp) => (this.pais = resp));
  }
}
