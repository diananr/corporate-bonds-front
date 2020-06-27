import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { JwtService } from "./jwt.service";
import { Observable } from "rxjs/";

@Injectable()
export class ApiService {
	private backendUrl: string;

	constructor(private jwt: JwtService, private http: HttpClient) {
		this.backendUrl = environment.backendUrl;
	}

	private appendAuthorizationHeader(headers: HttpHeaders, formaData?:boolean): HttpHeaders{
		headers = headers || new HttpHeaders();

		if (!formaData) {
			headers = headers.append('Content-Type', 'application/json');
		}
		headers = headers.append('Access-Control-Allow-Origin', '*');

		let token = this.jwt.getToken();
		if( token && token != ''){
			headers = headers.append('Authorization', `${this.jwt.getToken()}`);
		}
		return headers;
	}

	public get(path: string, options?: { params?: HttpParams, headers?: HttpHeaders }): Observable<any>{
		options = options || {};
		options.headers = this.appendAuthorizationHeader(options.headers);
		return this.http.get(`${this.backendUrl}${path}`, { params: options.params, headers: options.headers });
	}

	public post(path: string, body?: any, options?: { params?: HttpParams, headers?: HttpHeaders }): Observable<any>{
		options = options || {};
		options.headers = this.appendAuthorizationHeader(options.headers);
		return this.http.post(`${this.backendUrl}${path}`, body, { params: options.params, headers: options.headers });
	}

	public put(path: string, body?: any, options?: { params?: HttpParams, headers?: HttpHeaders }): Observable<any>{
		options = options || {};
		options.headers = this.appendAuthorizationHeader(options.headers);
		return this.http.put(`${this.backendUrl}${path}`, body, { params: options.params, headers: options.headers });
	}

	public patch(path: string, body?: any, options?: { params?: HttpParams, headers?: HttpHeaders }): Observable<any>{
		options = options || {};
		options.headers = this.appendAuthorizationHeader(options.headers);
		return this.http.patch(`${this.backendUrl}${path}`, body, { params: options.params, headers: options.headers });
	}

	public delete(path: string, options?: { params?: HttpParams, headers?: HttpHeaders }): Observable<any>{
		options = options || {};
		options.headers = this.appendAuthorizationHeader(options.headers);
		return this.http.delete(`${this.backendUrl}${path}`, { params: options.params, headers: options.headers });
	}
}
