import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

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

    constructor(private _loginService:LoginServiceService, private _router:Router){}

  submit(){
    console.log(this.loginForm)
    this._loginService.login(this.loginForm.value).subscribe(
      (data:any) => {
        sessionStorage.setItem('token', data.token)
        this._router.navigateByUrl('/dashboard')
      },
      (err:any) => {
        alert('server error')
      }
    )
  }
}

