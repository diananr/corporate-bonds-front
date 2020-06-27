import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  public signupFG: FormGroup;
  public loading: boolean;

  constructor(
    private fb: FormBuilder,
  ) { }

  reset(){
    this.loading = false;
    this.signupFG = this.fb.group({
      name: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.email]],
      password: ['',[Validators.required]],
    })
  }

  ngOnInit() {
    this.reset();
  }

  onSignup(){
    if(this.signupFG.valid){
      const signupRequest = {
        name: this.signupFG.value.name,
        lastName: this.signupFG.value.lastName,
        email: (this.signupFG.value.email).toLowerCase(),
        password: this.signupFG.value.password
      }
      this.loading = true;
    } else{
    }
  }

}
