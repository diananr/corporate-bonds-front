import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NotificationUtil } from 'src/app/core/utils/notification.util';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  public signupFG: FormGroup;
  public loading: boolean;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private notification: NotificationUtil,
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

      this.authService.signup(signupRequest).subscribe(
        (response: any) => {
          if(response.data) {
            this.notification.success('', 'Registro exitoso!');
            this.router.navigateByUrl('/auth');
          }
          this.loading = false;
        },
        (error: HttpErrorResponse) => {
          this.loading = false;
          this.notification.error('','Error');
        }
      );
    } else{
      this.notification.warning('','Formulario Inválido');
    }
  }

}
