import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Country } from '../app.component';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddCountryService {

  baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    countryName: new FormControl(''),
    continent: new FormControl(''),
    president: new FormControl('')
  });

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      countryName: '',
      continent: '',
      president: ''
    });
  }

  public createCountry(country:JSON){

    let url = `${this.baseUrl}/addCountry`
    return this.http.post(url, country);
  }

  public countryInfo(){
    let url = `${this.baseUrl}/getCountryList`
    return this.http.get(url);
  }

  public deleteCountry(id:number){
    let url = `${this.baseUrl}/deleteCountryById/${id}`
    return this.http.delete(url);
  }

  public updateCountry(country:any){
    let url = `${this.baseUrl}/updateCountryById/${country.id}`
    return this.http.put(url,country);
  }  

  public populateForm(country: Country) {
    console.log(country)
    this.form.controls['id'].setValue(country.id)
    this.form.patchValue(country);
  }

}
