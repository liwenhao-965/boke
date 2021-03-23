import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'; //导入router服务

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }
  public sumb:number = 0;
  ngOnInit(): void {
  }

  switch(){
       if(this.sumb == 0 ){
        this.sumb = 1;
       }
  }

  reswitch(){
    this.sumb = 0;
  }
  toadmin(){
    this.router.navigate(['/admin'])
  }

}
