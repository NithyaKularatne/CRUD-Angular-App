import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddCountryService {

  constructor(private http:HttpClient) { }

  form: FormGroup = new FormGroup({
    $id: new FormControl(null),
    countryName: new FormControl(''),
    continent: new FormControl(''),
    president: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      $id: null,
      countryName: '',
      continent: '',
      president: ''
    });
  }

  public createCountry(country:JSON){
    console.log(country)
    return this.http.post("http://localhost:8080/addCountry", country);

  }

  public countryInfo(){
  return this.http.get("http://localhost:8080/getCountryList");
  }

  public deleteCountry(id:number){
    return this.http.delete("http://localhost:8080/deleteCountryById/"+id);
    }

}
