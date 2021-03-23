import { NgModule } from '@angular/core';
//注入http请求服务依赖
import { HttprequestService } from './services/httprequest.service';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
//引入Material组件UI
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule} from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { CardModule } from 'ng-devui/card';
import { TextareaModule } from 'ng-devui/textarea';
//引入DevUI部分组件依赖angular动画，需要引入animations模块
import { DevUIModule } from 'ng-devui';
import { HomeComponent } from './components/home/home.component';
import { PageendComponent } from './components/pageend/pageend.component';
import { PanelComponent } from './components/panel/panel.component';

//表单双向绑定
import { FormsModule } from '@angular/forms';


import {NgxImageCompressService} from 'ngx-image-compress';
// import { UploadModule } from 'ng-devui/upload'; 文件上传有问题
import { TextInputModule } from 'ng-devui/text-input';
import { PanelModule } from 'ng-devui';
import { BadgeModule } from 'ng-devui/badge';
import { LoginComponent } from './components/login/login.component';
import { LogininputComponent } from './components/login/logininput/logininput.component';
import { ReginputComponent } from './components/login/reginput/reginput.component';
import { WriterComponent } from './components/writer/writer.component';
import { PersonlComponent } from './components/writer/personl/personl.component';
import { WritedComponent } from './components/writer/writed/writed.component';
import { AdminComponent } from './components/admin/admin.component';
import { PersonmComponent } from './components/admin/personm/personm.component';
import { ArticleComponent } from './components/admin/article/article.component';
import { SystemComponent } from './components/admin/system/system.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageendComponent,
    PanelComponent,
    LoginComponent,
    LogininputComponent,
    ReginputComponent,
    WriterComponent,
    PersonlComponent,
    WritedComponent,
    AdminComponent,
    PersonmComponent,
    ArticleComponent,
    SystemComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSliderModule,
    DevUIModule,
    TextareaModule,
    PanelModule,
    TextInputModule,
    BadgeModule,
    MatInputModule,
    FormsModule,
    CardModule
  ],
  providers: [NgxImageCompressService,HttprequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
