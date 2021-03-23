import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reginput',
  templateUrl: './reginput.component.html',
  styleUrls: ['./reginput.component.less']
})
export class ReginputComponent implements OnInit {

  constructor() { }
  public checkuserpass:number = 0;
  public checkphonenum:number = 0;
  public regcheckphone:any = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
  public regcheckuserpass:any = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;

  public resum:number = 0;
  public reresum:number = 0;
  public people:any= {
    phone:'',
    userpass:'',
    reuserpass:''
  }

  ngOnInit(): void {
  }

  check(){
    // console.log(e.target.value);
    // console.log('shiyx ');
    if(this.people.reuserpass==''){
      this.reresum = 3;
    }else{
      if( this.people.userpass ==this.people.reuserpass){
        this.resum = 0;
        this.reresum = 1;
      }else{
        this.resum = 1;
        this.reresum = 2;
      }
    }
      
  }
  checkphone(){
     // console.log("触发函数可用执行");
   if(this.people.phone==''){
    this.checkphonenum = 3;
   }else{
    if(this.regcheckphone.test(this.people.phone)){
      this.checkphonenum = 1;
      
  }else{
    this.checkphonenum = 2;
    
  }
   }
      
  }

  checkuser(){
    if(this.people.userpass==''){
      this.checkuserpass = 3;
     }else{
      if(this.regcheckuserpass.test(this.people.userpass)){
        this.checkuserpass = 1;
        
    }else{
      this.checkuserpass = 2;
      
    }
     }         
  }

  do(){
    console.log("这个按钮可以的");
    
  }



}
