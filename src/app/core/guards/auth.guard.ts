import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(private jwt: JwtService, private router: Router){}

  canActivate(): any {
    let token = this.jwt.getToken();
    if (token) return true;
    this.router.navigateByUrl('/auth');
  }
}
