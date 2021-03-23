import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { from } from 'rxjs';
import {tableData} from '../../../assets/article';

@Component({
  selector: 'app-pageend',
  templateUrl: './pageend.component.html',
  styleUrls: ['./pageend.component.less']
})
export class PageendComponent implements OnInit {

 

  constructor() { };


  pager = {
    total: 306,
    pageIndex: 5,
    pageSize: 10
  };
  preLink = '<span class="icon-arrow-left"></span>';
  nextLink = '<span class="icon-arrow-right"></span>';

    paginationOptions:any =  {
    currentPage: 1, // 当前页
    pageSize: 10, // 展示页数
    pageSizes: [10, 20, 30, 40] // 可选择展示页数 数组
  }
  tableData:any[] = tableData;
  xuanran:any[]=[];

  
  pageData:any=(number:any,pageSize:any,data:any)=>{
    const pageList = [];
    const start = (pageSize*number) - pageSize;
    const end = pageSize * number;
    for(let i = start;i < end; i++){
       pageList.push(data[i])
    }
    const list=pageList.filter(item=>item);
    return list
  }
  
  onChange(current:any) {

 
    this.paginationOptions.currentPage = current;
    this.xuanran = this.pageData(this.paginationOptions.currentPage,9,this.tableData);

   
    
  }



  ngOnInit(): void {
    // this.pageData(1,10,this.tableData)
       console.log(this.pageData(1,9,this.tableData));
       
   this.xuanran =  this.pageData(1,9,this.tableData);

    
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

   
    
  }



  

}
