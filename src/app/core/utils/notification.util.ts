import { Injectable } from "@angular/core";
import { NzNotificationService } from 'ng-zorro-antd';

@Injectable()
export class NotificationUtil{

    constructor(private notification: NzNotificationService){}

    success(content: string, title: string){
        this.notification.create('success', title, content);
    }

    error(content: string, title: string){
        this.notification.create('error', title, content);
    }

    info(content: string, title: string){
        this.notification.create('info', title, content);
    }

    warning(content: string, title: string){
        this.notification.create('warning', title, content);
    }
}