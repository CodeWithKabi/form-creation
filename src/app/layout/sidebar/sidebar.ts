import { Component } from '@angular/core';
import {RouterLink,RouterLinkActive} from "@angular/router";
import { SettingsService } from '../../shared/services/settings';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  constructor(public settingsService: SettingsService,
    private router: Router
  ) {}
menuItems = [
  { label: 'Dashboard', path: '/dashboard/overview', icon: '🏠' },
  { label: 'Add Task', path: '/dashboard/add-task', icon: '➕' },
  { label: 'My Tasks', path: '/dashboard/my-tasks', icon: '📋' },
  { label: 'Pending Tasks', path: '/dashboard/pending-tasks', icon: '⏳' },
  { label: 'Completed Tasks', path: '/dashboard/completed-tasks', icon: '✅' },
  { label: 'Streaks', path: '/dashboard/streaks', icon: '🔥' },
  { label: 'Calendar', path: '/dashboard/calendar', icon: '📅' },
  { label: 'History', path: '/dashboard/history', icon: '🕘' },
  { label: 'Statistics', path: '/dashboard/statistics', icon: '📊' },
  { label: 'Settings', path: '/dashboard/settings', icon: '⚙️' },
];
logout(): void {
  this.router.navigate(['/login']);
}
}
