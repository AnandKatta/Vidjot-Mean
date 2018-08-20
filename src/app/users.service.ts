import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Iusers} from "./Interfaces/Iusers";




// import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
// //import {map} from 'rxjs/operators'
// import 'rxjs/add/operator/map'
// import {Http ,Response} from '@angular/http'
// import {Observable} from 'rxjs/Observable';
// import {IVidjot} from "../app/Interfaces/IVidjot";
@Injectable()
export class UsersService {

  constructor(private httpclient:HttpClient) { }

  PostUserData(obj:Iusers):Observable<any>
  {
   return  this.httpclient.post("http://localhost:5200/Login/PostData",obj).map((response)=>
  {
    return response;
  })
  }

}
