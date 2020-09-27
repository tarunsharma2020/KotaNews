import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
//import { error } from 'util';
// import{DbsecurityService}from '../../Services/dbsecurity.service';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl: string = "";  UserId: string = "";Appid:string="";
  EntityId: string = "";TokenId="";
  
    constructor(private _http: HttpClient) {        
          this.baseUrl = "http://localhost:57080/";
  }

  UploadImage(formdata): Observable<any> { 
      
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    const httpOptions = { headers: headers };
      return this._http.post<any>(this.baseUrl+ 'api/NEWs/UploadImages',formdata,httpOptions);
  }

  UploadMultipleImage(formdata:FormData): Observable<any> {
      
    let headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Accept', 'application/json');
  const httpOptions = { headers: headers };
    return this._http.post<any>(this.baseUrl+ 'api/NEWs/UploadImages',formdata,httpOptions);
  }

 

  
  showImages(): Observable<any> {
  const headers = new HttpHeaders().set('content-type', 'application/json');
  return this._http.post<any>(this.baseUrl + 'api/NEWs/showImages', {
      headers 
  });
}

}