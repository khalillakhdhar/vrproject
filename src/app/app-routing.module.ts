import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TesteComponent } from './teste/teste.component';

const routes: Routes = [
  {path:'dashboard',component:LayoutComponent,children:
[
  {path:"teste",component:TesteComponent}
],

}, 
  {path:'',component:LoginComponent},
  {path:"signup",component:SignupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
