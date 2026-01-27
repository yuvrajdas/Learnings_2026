import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent , HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req)
        let modiReq = req.clone({
            setHeaders: {
                authorization: 'jwt test token '
            }
        })
        return next.handle(modiReq);
    }
}