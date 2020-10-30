import { FormGroup, Validators, FormControl } from '@angular/forms';

import { FunctionsService } from './../../functions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  forgotForm: FormGroup;

  constructor(private fun: FunctionsService) {
    this.forgotForm = new FormGroup({
      email: new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.minLength(6)] }),
    })
  }

  ngOnInit() {
  }


  onSubmit() {
    if (!this.forgotForm.valid) {
      this.fun.presentToast('Wrong Input!');
      return false;
    }
    if (this.fun.validateEmail(this.forgotForm.value.email)) {
      this.fun.presentToast('Verification mail sent');
      this.fun.navigate('authenticate/reset');
    }
    else {
      this.fun.presentToast('Invalid Email!');
    }
  }

}
