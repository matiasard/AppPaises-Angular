import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(
    private paisService: PaisService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    //* Forma 1: con switchMap
    // this.activatedRoute.params
    //   .pipe(
    //     switchMap(({ id }) => this.paisService.buscarPaisPorId(id)),
    //     tap(console.log)
    //   )
    //   .subscribe((pais) => (this.pais = pais[0]));

    //* Forma 2: usando 2 subscribe
    this.activatedRoute.params.subscribe(({ id }) => {
      this.paisService.buscarPaisPorId(id).subscribe((pais) => {
        this.pais = pais[0];
        console.log(this.pais);
      });
    });
  }
}
