import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'; //导入router服务


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router) { }
  showLoading = false;
  ngOnInit(): void {
  }
  onSearch(term:any) {
    console.log(term);
}

toggleLoading() {
  this.showLoading = true;

  setTimeout(() => {
        this.showLoading = false;
        this.router.navigate(['/login'])
    }, 1000);
}

toreg(){
  this.router.navigate(['/writer'])
  
}



}
