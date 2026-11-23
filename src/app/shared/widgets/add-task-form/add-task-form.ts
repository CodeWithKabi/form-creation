
import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
import { Button } from "../../components/button/button";
import { AppInput } from "../../components/input/input";
import { FormsModule } from '@angular/forms';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'app-add-task-form',
  imports: [Button, AppInput, FormsModule],
  templateUrl: './add-task-form.html',
  styleUrl: './add-task-form.scss',
})
export class AddTaskForm {
  taskTitle: string = '';
  description: string = '';
  dueDate: string = '';
  priority: string = 'Medium';

  @Output() taskCreated = new EventEmitter<Task>();

  constructor(public settingsService: SettingsService) {
    this.priority = this.settingsService.settings().defaultPriority;
  }

  saveTask(): void {
    const newTask: Task = {
      id: Date.now(),
      title: this.taskTitle,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      completed: false,
      completedAt: null
    };

    this.taskCreated.emit(newTask);

    this.taskTitle = '';
    this.description = '';
    this.dueDate = '';

    this.priority = this.settingsService.settings().defaultPriority;
  }
}
