import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//在路由模块内引入组件

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogininputComponent } from './components/login/logininput/logininput.component';
import { ReginputComponent } from './components/login/reginput/reginput.component';
import { WriterComponent } from './components/writer/writer.component';
import { AdminComponent } from './components/admin/admin.component';
import { PersonmComponent } from './components/admin/personm/personm.component';
import { ArticleComponent } from './components/admin/article/article.component';
import { SystemComponent } from './components/admin/system/system.component';


const routesa: Routes = [
  { path:'home' ,component : HomeComponent },
  { path:'login' ,component:LoginComponent ,
        children:[
          { path:'loginin' ,component:LogininputComponent},
          { path:'regin' ,component:ReginputComponent},
          { path:'**' ,redirectTo:'loginin'},

        ]},
   { path:'writer' ,component : WriterComponent },
   { path:'admin' ,component : AdminComponent,
        children:[
          { path:'personm',component:PersonmComponent},
          { path:'article',component:ArticleComponent},
          { path:'system',component:SystemComponent},
          { path:'**',redirectTo:'personm'},
        ] },
  { path:'**' ,redirectTo :'home'}
  // 这里花了六个小时产生的问题，警告一下自己
];

@NgModule({
  imports: [RouterModule.forRoot(routesa)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
