import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { AddCountryService} from '../../shared/addcountry.service';
import { CountryComponent } from '../country.component';


@Component({
  selector: 'app-addcountry',
  templateUrl: './addcountry.component.html',
  styleUrls: ['./addcountry.component.css']
})
export class AddcountryComponent implements OnInit {

  constructor(public service: AddCountryService , public dialogRef: MatDialogRef<CountryComponent> ,  private http:HttpClient) { }

  ngOnInit(): void {
    this.service.countryInfo()
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('$id')?.value){

        this.service.createCountry(this.service.form.value)
        .subscribe(resp => {

          console.log(resp)
    
        }, error => {
          // the errorMessage will be passed here in this "error" variable
          console.log(error)
    
        });
    
        console.log("null");
      }
        
      else{
        console.log("not null");
        // this.service.updateEmployee(this.service.form.value);
      }
      

      console.log(this.service.form.value)


      this.service.form.reset();
      this.service.initializeFormGroup();
      console.log('Wadaaaaaaaaaaaa')
      // this.notificationService.success(':: Submitted successfully');
      this.onClose();
    }

    
  }
  
  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    // this.notificationService.success(':: Submitted successfully');
  }

}
