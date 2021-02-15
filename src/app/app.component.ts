import { Component } from '@angular/core';

export interface Country {
  id: number;
  countryName: string;
  continent: string;
  president: string;
}

const COUNTRY_DATA: Country[] = [
  {id: 1, countryName: 'USA', continent:'North America', president: 'Joe Biden'},
  {id: 2, countryName: 'Sri Lanka', continent:'Asia', president: 'Gotabaya Rajapakse'},
  {id: 3, countryName: 'Canada', continent:'North America', president: 'Justin Trudeau'},

];

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
