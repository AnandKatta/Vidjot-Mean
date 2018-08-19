import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import {map} from 'rxjs/operators'
import 'rxjs/add/operator/map'
import {Http ,Response} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import {IVidjot} from "../app/Interfaces/IVidjot";

@Injectable()
export class VidjotService {

  constructor(private httpClient:HttpClient) { }

  GetVidjot():Observable<any>
  {
    return this.httpClient.get("http://localhost:5200/ABOUT",{responseType:'text'}).map((res:any)=>
    {
     return res;
    }
    );
    // {'withCredentials': true, responseType: 'text'}
  }
PostVidjotIdeas(objVidjotIdea:IVidjot):Observable<any>
{
return this.httpClient.post("http://localhost:5200/PostIdeas",objVidjotIdea).map((x:any)=>
{
 return  x
});

}
GetVidjotIdeas():any
{
  return  this.httpClient.get("http://localhost:5200/GetIdeas").map(response=> 
{
 // let objVidjot=<IVidjot>{}
 // objVidjot.Date=response.Date;
 // objVidjot.Details= response.Details;
//  objVidjot.Title = response.Title;

  return <IVidjot>response;
})
}

GetVidjotIdea(Id:String):any
{
  
 return  this.httpClient.get("http://localhost:5200/GetIdea/"+Id).map(response=>{
  return <IVidjot>response;
  })

}

PutVidjotIdea(objVidjotIdea:IVidjot):Observable<any>
{
  return this.httpClient.put("http://localhost:5200/PutIdea",objVidjotIdea,{responseType:'text'}).map(response=>
  {
    return  response;
  })
}

DeleteVidjotIdea(ID:String):Observable<any>{
 return  this.httpClient.delete("http://localhost:5200/DeleteIdea/"+ID,{responseType:'text'}).map(response=>
  {
    return response;
  })
}
}
