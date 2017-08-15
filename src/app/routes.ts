import { Routes } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';

export const appRoutes: Routes = [
  {
    path: 'signup',
    component:  SignupFormComponent
  },
  {
    path: 'login',
    component:  LoginFormComponent
  },
  {
    path: 'chat',
    component:  ChatRoomComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
]
