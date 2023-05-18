import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-mobile',
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.css'],
})
export class NavbarMobileComponent {
  desplegar = false;

  constructor(private router: Router) {}

  buscarHeroe(termino: string) {
    this.router.navigate(['/busquedaHeroe', termino]);
  }

  verResultado(termino: string) {
    this.router.navigate(['/busquedaHeroe', termino]);
  }
}
