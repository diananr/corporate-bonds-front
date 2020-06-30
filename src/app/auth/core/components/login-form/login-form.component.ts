import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { NotificationUtil } from 'src/app/core/utils/notification.util';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginFG: FormGroup;
  public loading: boolean;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private localStorage: LocalStorageService,
    private notification: NotificationUtil,
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

      this.authService.login(loginRequest).subscribe(
        (response: any) => {
          this.localStorage.save('userLogged', response);
          this.notification.success('', 'Bienvenidx a BonoCorp');
          this.router.navigateByUrl('/admin');
          this.loading = false;
        },
        (error: HttpErrorResponse) => {
          this.loading = false;
          this.notification.error('', 'Error');
        }
      );
    } else{
      this.notification.warning('', 'Invalid form');
    }
  }

}
