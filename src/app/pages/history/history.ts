
import { Component, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TaskService } from '../../shared/services/task';

@Component({
  selector: 'app-history',
  imports: [DatePipe ],
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class History {

  constructor(public taskService: TaskService) {}

  // Get only completed tasks
  completedTasks = computed(() => {
    return this.taskService.tasks().filter(
      task => task.completed === true
    );
  });

  // Count completed tasks
  totalCompleted = computed(() => {
    return this.completedTasks().length;
  });

}
