import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

// const TOKEN_HEADER='Authorization';



@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    constructor(private  login:LoginService) { }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        //add the jwt token (localStroage) request
        let autReq=req;
        const token=this.login.getToken();
        console.log("chal raha he ki nhi ye");
        if(token!=null)
        {
           autReq=autReq.clone({setHeaders:{Authorization:`Bearer ${token}`},

        });
        }
        return next.handle(autReq);

    }
    
}

export const authInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
    },
];



