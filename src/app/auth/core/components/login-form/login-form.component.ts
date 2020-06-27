import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginFG: FormGroup;
  public loading: boolean;

  constructor(
    private fb: FormBuilder,
  ) { }

  reset(){
    this.loading = false;
    this.loginFG = this.fb.group({
      email: ['',[Validators.email]],
      password: ['',[Validators.required]],
    })
  }

  ngOnInit() {
    this.reset();
  }

  onLogin(){
    if(this.loginFG.valid){
      const loginRequest = {
        email: (this.loginFG.value.email).toLowerCase(),
        password: this.loginFG.value.password
      }

      this.loading = true;
    } else{
    }
  }

}
