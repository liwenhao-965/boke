import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'; //导入router服务

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {

  constructor(public router:Router) { }

  toperson(){
    this.router.navigate(['admin/personm']);
  }
  toarticle(){
    this.router.navigate(['admin/article']);
  }
  tosystem(){
    this.router.navigate(['admin/system']);
  }

  ngOnInit(): void {
  }

}
