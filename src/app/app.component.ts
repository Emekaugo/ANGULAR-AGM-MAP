import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'My first AGM project';
  lat = 6.5244;
  lng = 3.3792;
  type = 'hybrid';
}
