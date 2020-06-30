import { Injectable } from "@angular/core";
import { ApiService } from './api.service';

@Injectable()
export class AuthService {

	constructor(public api: ApiService){}

	login(request: any)
	{
		return this.api.post('api/auth/login', request);
	}

	signup(request: any)
	{
		return this.api.post('api/auth/signup', request);
	}

	createBond(request: any)
	{
		return this.api.post('api/bond/create', request);
	}

	getBondsByUser()
	{
		var userId = JSON.parse(localStorage.getItem('userLogged')).id;
		return this.api.get(`api/bond/byUser/${userId}`);
	}
}
