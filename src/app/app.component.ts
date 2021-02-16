import { Component } from '@angular/core';

export interface Country {
  id: number;
  countryName: string;
  continent: string;
  president: string;
}

const COUNTRY_DATA: Country[] = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui';
  displayedColumns: string[] = ['id', 'countryName', 'continent', 'president'];
  dataSource = COUNTRY_DATA;
}
