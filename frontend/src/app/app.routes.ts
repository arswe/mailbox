import { Routes } from '@angular/router';
import { MasterComponent } from './layouts/master/master.component';
import { ComposeComponent } from './pages/compose/compose.component';
import { LoginComponent } from './pages/login/login.component';
import { MessageComponent } from './pages/message/message.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'message', component: MessageComponent },
      { path: 'compose', component: ComposeComponent },
    ],
  },
];