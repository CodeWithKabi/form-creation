import { Component } from '@angular/core';
import { AddTaskForm } from '../../shared/widgets/add-task-form/add-task-form';
import { TaskService } from '../../shared/services/task';
import { Task } from '../../shared/models/task';
import { NotificationService } from '../../shared/services/notification';

@Component({
  selector: 'app-add-task',
  imports: [AddTaskForm],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss',
})
export class AddTask {

  constructor(
    public taskService: TaskService,
    public notificationService: NotificationService
  ) {}

  onTaskCreated(task: Task): void {
    this.taskService.addNewTask(task);

    this.notificationService.show(
      'Task added successfully!',
      'success'
    );
  }
}