import { Component,computed } from '@angular/core';
import { TaskService } from '../../shared/services/task';

@Component({
  selector: 'app-completed-tasks',
  imports: [],
  templateUrl: './completed-tasks.html',
  styleUrl: './completed-tasks.scss',
})
export class CompletedTasks {

  constructor(public taskService: TaskService) {}

  get completedTasks() {
    return this.taskService.tasks().filter(task => task.completed);
  }

    progressPercentage = computed(() => {
    const total = this.taskService.totalTasks();

    if (total === 0) {
      return 0;
    }

    return Math.round(
      (this.taskService.completedTasks() / total) * 100
    );
  });
}