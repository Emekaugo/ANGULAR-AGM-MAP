import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-direction',
  templateUrl: './map-direction.component.html',
  styleUrls: ['./map-direction.component.scss'],
})
export class MapDirectionComponent implements OnInit {
  public lat = 6.799448;
  public lng = 3.979021;

  public origin: any;
  public destination: any;

  constructor() {}

  ngOnInit() {
    this.getDirection();
  }

  getDirection() {
    this.origin = { lat: 6.4478, lng: 3.4723 };
    this.destination = { lat: 6.998, lng: 3.4737 };
  }
}
