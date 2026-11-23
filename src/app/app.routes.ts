import { Routes } from '@angular/router';

import { Login } from './login/login';
import { Register } from './register/register';
import { MainLayout } from './layout/main-layout/main-layout';
import {Overview } from "./pages/overview/overview"
import {AddTask} from "./pages/add-task/add-task"
import { MyTasks } from './pages/my-tasks/my-tasks';
import { PendingTasks } from './pages/pending-tasks/pending-tasks';
import { CompletedTasks } from './pages/completed-tasks/completed-tasks';
import { Streaks } from './pages/streaks/streaks';
import { Calendar } from './pages/calendar/calendar';
import { History } from './pages/history/history';
import { Statistics } from './pages/statistics/statistics';
import { Settings } from './pages/settings/settings';




export const routes: Routes = [
  {
    path: 'login',
    component: Login
  },
  {
    path: 'register',
    component: Register
  },
  {
    path: 'dashboard',
    component: MainLayout,
    children: [
  { path: 'overview', component: Overview },
  { path: 'add-task', component: AddTask },
  { path: 'my-tasks', component: MyTasks },
  { path: 'pending-tasks', component: PendingTasks },
  { path: 'completed-tasks', component: CompletedTasks },
  { path: 'streaks', component: Streaks },
  { path: 'calendar', component: Calendar },
  { path: 'history', component: History },
  { path: 'statistics', component: Statistics },
  { path: 'settings', component: Settings },
  { path: '', redirectTo: 'overview', pathMatch: 'full' }
]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];