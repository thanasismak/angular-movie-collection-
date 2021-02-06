import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  constructor() { }
  public validateSearchText(searchText: string): ValidatorFn {
    const regex = new RegExp("^[a-zA-Z0-9]");
    return (control: AbstractControl): ValidationErrors | null => {
      const valid = regex.test(control.value);
      if (!control.value)
      return {searchText: false} //incorrect

      if ((control.value.length > 2) && (valid)){
        return null
      }
      else {
        return {searchText: false}
      }
    }
  }
}
