import { RequestMethod } from '@angular/http';
export class ErrorResponse {
    Method: RequestMethod;
    Message: string;
    Url: string;
    Status: number;
    StatusText: string;
}
