import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: any){
    const router = this.injector.get(Router);

    if(error instanceof HttpErrorResponse){
        if(error.error.data){
            const message = error.error.data.error;

            if(message.indexOf('TOKEN') > -1) {
                localStorage.clear();
                router.navigate(['/auth']);
            }
        }
    }
  }
}
