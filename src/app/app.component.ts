import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'AGM project';
  latitude: number;
  longitude: number;
  zoom: number;
  arrow: string;
  imgHeight: number;
  fontSize: string;
  mapHeight: number;
  mapWidth: number;
  mapSize: string;
  mapBorder: string;
  border: number;
  color: number;
  constructor() {

  }

  ngOnInit() {
    this.setCurrentLocation();
    this.arrow = '\u2186'
    this.imgHeight = 100;
    this.mapHeight = 500;
    this.mapWidth = 900;
    this.border = 15;
    this.fontSize = `font-size: ${this.imgHeight}px;`;
    this.mapSize = `height: ${this.mapHeight}px; width: ${this.mapWidth}px;`;
    this.mapBorder = `border: solid ${this.border}px rgb(184, 31, 214); background-color: rgba(200, 245, 250);`;
    this.color = 200;
    console.log(this.fontSize);

  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 6;
      });
    }
  }
  setHeight(size): void {
    console.log(size);

    this.imgHeight -= (2 * +size);
    this.mapHeight += (30 * +size);
    
    this.fontSize = `font-size: ${this.imgHeight}px;`
    this.mapSize = `height: ${this.mapHeight}px; width: ${this.mapWidth}px;`;
    
   



  }

  setWidth(size): void {
    this.mapWidth += (60 * +size);
    this.mapSize = `height: ${this.mapHeight}px; width: ${this.mapWidth}px;`;

  
  }
  setZoom(size): void {
    this.zoom += (0.5 * +size);
    this.color += (10 * +size);
    this.border -= (1 * +size)
    this.mapBorder = `border: solid ${this.border}px rgb(184, 31, 214);
    background-color: rgba(${this.color % 255}, ${(this.color * 2) % 255}, ${(this.color * 1.5) % 255});`
 
  }
}