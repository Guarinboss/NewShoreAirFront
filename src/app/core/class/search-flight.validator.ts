import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const validateDifferent: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const origin = control.get("origin")
    const destination = control.get("destination")
  
    return origin?.value != destination?.value
      ? null
      : { isEqual: true }
  }