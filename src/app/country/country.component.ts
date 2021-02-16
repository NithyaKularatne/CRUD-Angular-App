import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/countries';
import { AddCountryService } from '../shared/addcountry.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { AddcountryComponent } from './addcountry/addcountry.component';
import { NotificationService } from '../shared/notifications.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
})

export class CountryComponent implements OnInit {
  COUNTRY_DATA : Countries[]=[];
  displayedColumns: string[] = ['id','countryName', 'continent', 'president','operation'];
  dataSource = new MatTableDataSource<Countries>(this.COUNTRY_DATA) ;

  constructor( private dialog: MatDialog, private service:AddCountryService ,  private notificationService: NotificationService) { }

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
    dialogConfig.width = "30%";
    let dialogref = this.dialog.open(AddcountryComponent,dialogConfig);

    dialogref.afterClosed().subscribe(result => {
      setTimeout( () => {this.getAllData() }, 1000 );
    });

    this.getAllData()
  }

  public delete(id : number){
 
    this.service.deleteCountry(id).subscribe(
      data=>{
        console.log(data)
        console.debug("deleted succesfully");
        this.getAllData();
        this.notificationService.success("Country Deleted Successfully!")
      },
      error => {
        console.log(error)
        this.notificationService.warn("Error Occured!")
      }
    )   
  }

  public edit(elm: Countries){
    this.service.populateForm(elm)
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "30%";
    let dialogref = this.dialog.open(AddcountryComponent,dialogConfig);

    dialogref.afterClosed().subscribe(result => {
      this.getAllData()
    });   
  }

  public delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
