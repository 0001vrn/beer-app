import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Headers, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { ErrorResponse } from './model/error-response.model';
import { HttpStatusCodes } from './enums/http-status-codes.enum';

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
      if(errorResponse.Method == RequestMethod.Put || errorResponse.Method == RequestMethod.Post || errorResponse.Method == RequestMethod.Delete){
        console.log('Data not Saved or Network Problem');
      }
    }
    else{
      let thisDuplicate = this;
      return super.request(url, options).catch((res: Response) => {
        if(res != undefined){
          errorResponse.Message = res.json()["message"] ? res.json()["message"] : (res.json() ? res.json().message : res.json());
          errorResponse.Url = res.url;
          errorResponse.Status = res.status;
          errorResponse.StatusText = res.statusText;
          console.log(res);
          thisDuplicate.errorCallback(errorResponse);
        }

        return Observable.throw(res);
      });
    }
    

  }

  private errorCallback(errorResponse: ErrorResponse) {
    let title: string;
    let message: string;
    let isUndefinedOrEmpty = function isUndefinedOrEmpty(value: any): boolean {
        if (typeof value === 'string' && (value == undefined || value == ''))
            return true;
        else if (value == undefined)
            return true;
        return false;

    };
    if (!isUndefinedOrEmpty(errorResponse)) {
        switch (errorResponse.Status) {
            case HttpStatusCodes.Unauthorized: {
                title = 'Error';
                message = isUndefinedOrEmpty(errorResponse.Message) ? 'You do not have the appropriate permission(s).' : errorResponse.Message;
                break;
            }
            case HttpStatusCodes.Forbidden:
            case HttpStatusCodes.PreconditionFailed: {
                title = 'Error';
                message = isUndefinedOrEmpty(errorResponse.Message) ? 'Error' : errorResponse.Message;
                break;
            }
            case HttpStatusCodes.NotFound:
            case HttpStatusCodes.RequestTimeout:
            case HttpStatusCodes.InternalServerError: {
                title = 'Error';
                message = 'Something went wrong. Please Try again. ';
                break;
            }
            case HttpStatusCodes.Conflict: {
                title = errorResponse.StatusText;
                message = isUndefinedOrEmpty(errorResponse.Message) ? 'Error' : errorResponse.Message;
                break;
            }
            case HttpStatusCodes.BadGateway:
            case HttpStatusCodes.ServiceUnavailable:
            case HttpStatusCodes.GatewayTimeout: {
                if (errorResponse.Method === RequestMethod.Put) {
                    title = 'Error';
                    message = 'Something went wrong. Please Try again. ';
                }
                break;

            }
            default:
                {
                    break;
                }
        }
        if (!isUndefinedOrEmpty(title) && !isUndefinedOrEmpty(message))
            console.log(`title: ${title} , message: ${message}`);
    }
}

}
