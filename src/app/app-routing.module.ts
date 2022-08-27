import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { MainAdminComponent } from './admin/main-admin/main-admin.component';


import { NoticeComponent } from './admin/notice/notice.component';
import { WeatherComponent } from './admin/weather/weather.component';


const routes: Routes = [
  {
    path:'auth',
    component:AuthComponent
  },
  {
    path:'',
    canActivate: [AuthGuard],
    component: MainAdminComponent,
    children:[
      // {
      //     path:'tiempo',
      //     component: WeatherComponent
      // },
      // {
      //   path:'noticia',
      //   component: NoticeComponent
      // },
    ]
  },
  {
    path:'**',
    redirectTo: '/auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
