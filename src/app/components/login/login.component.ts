import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public loginForm : FormGroup = new FormGroup({
      email : new FormControl(null, [Validators.required, Validators.email ]) ,
      password : new FormControl(null, [Validators.required, Validators.minLength(4)])
    })

  submit(){
    console.log(this.loginForm)
  }
}

