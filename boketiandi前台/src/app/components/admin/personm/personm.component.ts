import { Component, OnInit, OnChanges,SimpleChanges,Input } from '@angular/core';
import {peopleimage } from '../../../../assets/article'

@Component({
  selector: 'app-personm',
  templateUrl: './personm.component.html',
  styleUrls: ['./personm.component.less']
})
export class PersonmComponent implements OnInit,OnChanges {

  constructor() { }
  @Input()  people:any[]= peopleimage;
  peopleindex:number = 0;
  @Input() peoplesum:number = 0;
  xuanran:any[]=[];
  pager = {
    total: 12,
    pageIndex: 1,
    pageSize: 6
  };

  ngOnInit(): void {
    console.log(this.people[0]);
    
    this.xuanran = this.pageData(1,6,this.people)
    console.log(this.xuanran);
    
  }
  onPageIndexChange(e:any){
        this.pager.pageIndex = e;
        this.xuanran = this.pageData(this.pager.pageIndex,this.pager.pageSize,this.people)
        this.peopleindex = e;
  }
 

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

  //删除功能。
  delete(e:number){
      this.xuanran.splice(e,1);  
      this.peoplesum = this.peopleindex*6 +e;
      console.log(this.peoplesum);
      this.people.splice(this.peoplesum,1);
      
  }

  ngOnChanges(changes:SimpleChanges) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // this.people.splice(this.peoplesum,1)
    // console.log(changes['peoplesum']);
  
  }

}   
