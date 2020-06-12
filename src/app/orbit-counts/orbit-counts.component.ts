import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  satelliteTypes: string[] = [
    "Space Debris", "Communication", "Probe", "Positioning", "Space Station", "Telescope"
  ];


  constructor() { }

  ngOnInit() {
  }

  getCountOfType(type: string) {
    return this.satellites.filter( 
      (satellite) => satellite.type.toLowerCase() === type.toLowerCase()
    ).length;
  }
}
