import { Component, OnInit } from '@angular/core';

import { HttprequestService } from '../../../services/httprequest.service';


@Component({
  selector: 'app-logininput',
  templateUrl: './logininput.component.html',
  styleUrls: ['./logininput.component.less']
})
export class LogininputComponent implements OnInit {

  constructor(public axios:HttprequestService) { }

  public peopleinfo:any = {
    phone:"",
    code:""
  }

  ngOnInit(): void {
   // console.log(this.peopleinfo);
  }
  
  doSubmit(){
      // alert('验证码发送成功');
      // if(this.peopleinfo.code == ''){
      //   alert('验证码发送成功')
      // }
      
      if(this.peopleinfo.code ==''&&this.peopleinfo.phone!=''){
        setTimeout(() => {
          alert('验证码发送成功')
        }, 1000);
        let api = "http://localhost:5000/users/sendCode";
        let data = {'phone':this.peopleinfo.phone};
        this.axios.axiosPost(api,data).then((res:any)=>{
          // alert('验证码发送成功');
         
          this.peopleinfo.code = res.data.res[0].code;
        })

      }
  }

  do(){
    if(this.peopleinfo.code !=''&&this.peopleinfo.phone!=''){
      let api = "http://localhost:5000/users/codePhoneLogin";
      let data = {"phone":this.peopleinfo.phone,"code" :this.peopleinfo.code };
      this.axios.axiosPost(api,data).then((res:any)=>{
        console.log(res);
      })
    }
  }

}
