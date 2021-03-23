import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-writed',
  templateUrl: './writed.component.html',
  styleUrls: ['./writed.component.less']
})
export class WritedComponent implements OnInit {

  imgsrc = 'https://c.staticblitz.com/assets/client/components/SideMenu/blitz_logo-11cebad97cad4b50bc955cf72f532d1b.png';
 
  constructor(
    public _d: DomSanitizer // 图片路径转换使用，使用见HMTL文件
  ) { }

  fileChange(e:any) {
    const file = e.srcElement.files[0]; // 获取图片这里只操作一张图片
    this.imgsrc = window.URL.createObjectURL(file); // 获取上传的图片临时路径
  }
  

  ngOnInit(): void {
  }

}
