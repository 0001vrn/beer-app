import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Headers, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { ErrorResponse } from './model/error-response.model';

@Injectable()
export class CustomHttpService extends Http {

  constructor(backend: XHRBackend, options: RequestOptions) {
    super(backend, options);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    let errorResponse = new ErrorResponse();
    if(typeof url === 'string'){
      if(!options){
        options = { headers: new Headers() };
      }
    } else{
      errorResponse.Method = url.method;
    }
    if(!navigator.onLine){
      //show loader
      if(errorResponse.Method == RequestMethod.Put || errorResponse.Method == RequestMethod.Post || errorResponse.Method == RequestMethod.Delete){
        //show error dialog
      }
    }
    else{
      let thisDuplicate = this;
      return super.request(url, options).catch((res: Response) => {
        if(res != undefined){
          //error callback
          //log here
        }

        return Observable.throw(res);
      });
    }
    

  }

}
