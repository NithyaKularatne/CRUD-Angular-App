import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/notifications.service';

import { AddCountryService} from '../../shared/addcountry.service';
import { CountryComponent } from '../country.component';


@Component({
  selector: 'app-addcountry',
  templateUrl: './addcountry.component.html',
  styleUrls: ['./addcountry.component.css']
})
export class AddcountryComponent implements OnInit {

  constructor(public service: AddCountryService , public dialogRef: MatDialogRef<CountryComponent> ,  private http:HttpClient ,  private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.service.countryInfo()
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('id')?.value){

        this.service.createCountry(this.service.form.value)
        .subscribe(resp => {

           console.log('createCountry Response: '+resp)
           this.notificationService.success("Country Created Successfully!")

        }, error => {
          // the errorMessage will be passed here in this "error" variable
           console.log(error)
           this.notificationService.warn("Country Creation Failed!")

        });
    
      }
        
      else{
        console.log("Updating Country");
        this.service.updateCountry(this.service.form.value)
        .subscribe(resp => {

          console.log(resp)
          this.notificationService.success("Country Updated Successfully!")

       }, error => {
         // the errorMessage will be passed here in this "error" variable
          console.log(error)
          this.notificationService.warn("Country Update Failed!")

       });

      }

      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
    }

    
  }
  
  onClose() {
   console.log( this.service.form.controls['id'].value)
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
