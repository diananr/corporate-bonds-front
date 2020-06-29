import { Injectable } from "@angular/core";
import { ApiService } from './api.service';

@Injectable()
export class AuthService {

	constructor(public api: ApiService){}

	login(request: any){
		return this.api.post('auth/login', request);
	}

	signup(request: any){
		return this.api.post('auth/signup', request);
	}
}