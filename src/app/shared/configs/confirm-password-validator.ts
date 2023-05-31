import { AbstractControl } from '@angular/forms';
export class ConfirmPasswordValidator {

  static MatchPassword(control: AbstractControl): void {
    const password = control.get('newpassword')?.value;
    const confirmPassword = control.get('confirmpassword')?.value;
    if (password !== confirmPassword) {
      control.get('confirmpassword')?.setErrors({ ConfirmPassword: true });
    }
  }
}
