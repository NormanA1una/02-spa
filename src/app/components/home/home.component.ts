import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  longText =
    'Esta es una App de Heroes, elaborada para practicar sobre la construccion de sitios web utilizando Angular, Angular Material y TailwindCSS';
}
