import { Component } from '@angular/core';
import { TaskService } from '../../shared/services/task';

@Component({
  selector: 'app-pending-tasks',
  imports: [],
  templateUrl: './pending-tasks.html',
  styleUrl: './pending-tasks.scss',
})
export class PendingTasks {

  constructor(public taskService: TaskService) {}

  get pendingTasks() {
    return this.taskService.tasks().filter(task => !task.completed);
  }

}