import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class HttprequestService {

  constructor() { }
  axiosGet(api:any){
             return new Promise((resolve)=>{
               axios.get(api).then((response)=>{
                 resolve(response)
               })
             })
  }

  axiosPost(api:any,data:any){
    return new Promise((resolve)=>{
      axios.post(api,data).then((request)=>{
        resolve(request)
      })
    })

  }
}
