import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HereComponent } from './components/here/here.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {path:'contact',component:ContactComponent},
  {path:'home',component:HereComponent},
  {path:'about',component:AboutComponent},
  /* {path:'here',component:HereComponent}, */
/*   {path:'',component:HereComponent}, */
  {path:'**',component:TestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
