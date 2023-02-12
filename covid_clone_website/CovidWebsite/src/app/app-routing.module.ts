import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"about",
    component:AboutUsComponent
  },
  {
    path:"gallary",
    component:GallaryComponent
  },
  {
    path:"contact-us",
    component:ContactUsComponent
  },
  {
    path:"services",
    component:ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
