import { Component } from '@angular/core';
import { TaskCalendar } from '../../shared/widgets/task-calendar/task-calendar';

@Component({
  selector: 'app-calendar',
  imports: [TaskCalendar],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
})
export class Calendar {}