
import { FormGroup, ValidatorFn } from "@angular/forms";

export const confirmPassword = (formGroup: any): ValidatorFn | null => {
  const password = formGroup.get('password')?.value;
  const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (confirmPassword.trim() + password.trim()) {
      let returnValue: any = {};
      if(confirmPassword === password) {
        formGroup.get('confirmPassword')?.setErrors(null)
        return null;
      }
      formGroup.get('confirmPassword')?.setErrors({confirmPassword: true})
      returnValue.confirmPassword = true;
      return returnValue;
  } else {
      return null;
  }
};
