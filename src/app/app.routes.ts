
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DummyComponent } from './dummy/dummy.component';
import { SeatselectionComponent } from './seatselection/seatselection.component';
import { SupportComponent } from './support/support.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';


export const routes: Routes = [   
    { path: 'register', component: RegisterComponent },   
    { path: 'login', component: LoginComponent },   
    { path: 'home', component: HomeComponent }, 
    {path: 'admin', component: AdminComponent} ,
    {path: 'dummy', component: DummyComponent},
    {path: 'seatselection', component: SeatselectionComponent},
    {path: 'support', component:SupportComponent},
    {path: 'about', component:AboutUsComponent},
    {path: 'payment',component:PaymentComponent},
     { path: '', component: HomeComponent}
 ];
