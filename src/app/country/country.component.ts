import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/countries';
import { AddCountryService } from '../shared/addcountry.service';

import { MatTableDataSource } from '@angular/material/table';


import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AddcountryComponent } from './addcountry/addcountry.component';


// @NgModule({
  
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     FormsModule,
//     MatTableModule,
//     MatDialogModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule,
//     MatInputModule
//   ],
  

// })


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  // imports: [
  //   BrowserModule,
  //   BrowserAnimationsModule,
  //   FormsModule,
  //   MatTableModule,
  //   MatDialogModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatButtonModule,
  //   MatInputModule
})
export class CountryComponent implements OnInit {
  COUNTRY_DATA : Countries[]=[];
  displayedColumns: string[] = ['id','countryName', 'continent', 'president','operation'];
  dataSource = new MatTableDataSource<Countries>(this.COUNTRY_DATA) ;

  constructor( private dialog: MatDialog, private service:AddCountryService ) { }

  ngOnInit(): void {
    this.getAllData();
  }

  public getAllData(){
    let resp = this.service.countryInfo();
    resp.subscribe(report=>this.dataSource.data=report as Countries[])
  }

  public goToAddCountry(){

    this.service.initializeFormGroup()
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    let dialogref = this.dialog.open(AddcountryComponent,dialogConfig);

    dialogref.afterClosed().subscribe(result => {
      this.getAllData()
    });


    
  }

  public delete(id : number){
    // this.route.navigate(['./addCountry']);
    
  // this.dataSource.data = this.dataSource.data.filter(i => i !== elem)
    // let resp = this.service.deleteCountry(elm.id);
    // resp.subscribe(report=>this.dataSource.data=report as Countries[])
  
    this.service.deleteCountry(id).subscribe(
      data=>{
        console.log(data)
        console.debug("deleted succesfully");
        this.getAllData();
      },
      error => console.log(error)
    )

    
  }

  public edit(elm: Countries){
    // this.route.navigate(['./addCountry']);
    // this.dataSource.data = this.dataSource.data.filter(i => i !== elm)
    
  }



  // public edit(elm: Countries){
  //   <td mat-cell *matCellDef="let element; let idx = index"> {{ idx + 1 }} 
  //   // this.dataSource.data = this.dataSource.data
  //   // .filter(i => i !== elm)
  //   // .map((i, idx) => (i.position = (idx + 1), i)); // Update the position
    
  // }

  


}
