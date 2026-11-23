
import { Component } from '@angular/core';
import { TaskService } from '../../shared/services/task';
import { NotificationService } from '../../shared/services/notification';
import { Task } from '../../shared/models/task';
import { SettingsService } from '../../shared/services/settings';
@Component({
  selector: 'app-my-tasks',
  imports: [],
  templateUrl: './my-tasks.html',
  styleUrl: './my-tasks.scss',
})
export class MyTasks {
 constructor(
  public taskService: TaskService,
  private notificationService: NotificationService,
  public settingsService: SettingsService
) {}

  toggleTask(task: Task): void {
  const wasCompleted = task.completed;

  this.taskService.completeTask(task.id);

  if (wasCompleted) {
    this.notificationService.show(
      'Task moved to pending!',
      'info'
    );
  } else {
    this.notificationService.show(
      'Task completed successfully!',
      'success'
    );
  }
}
}
