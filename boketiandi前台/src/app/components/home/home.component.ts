import { Component, OnInit } from '@angular/core';
import {tableData} from '../../../assets/article';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() { }
  pager = {
    total: 20,
    pageIndex: 1,
    pageSize: 5
  };
  preLink = '<span class="icon-arrow-left"></span>';
  nextLink = '<span class="icon-arrow-right"></span>';

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

     
    this.pager.pageIndex = current;
    this.xuanran = this.pageData(this.pager.pageIndex,4,this.tableData);

   console.log(this.xuanran); 
   
    
  }
  ngOnInit(): void {
    console.log(this.pageData(1,4,this.tableData));
       
    this.xuanran =  this.pageData(1,4,this.tableData);
 
  }


  


}
