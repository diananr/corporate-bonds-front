import { NgModule, ErrorHandler } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { JwtService } from './jwt.service';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { GlobalErrorHandler } from './global-error-handler.service';
import { MaterialService } from './material.service';
import { SaleService } from './sale.service';

@NgModule({
	providers: [
		LocalStorageService,
		JwtService,
		ApiService,
		AuthService,
		MaterialService,
		SaleService,
		{provide: ErrorHandler, useClass: GlobalErrorHandler}
	]
})
export class ServiceModule { }
