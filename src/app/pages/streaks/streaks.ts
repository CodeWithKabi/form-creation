import { Component, computed } from '@angular/core';
import { TaskService } from '../../shared/services/task';

@Component({
  selector: 'app-streaks',
  imports: [],
  templateUrl: './streaks.html',
  styleUrl: './streaks.scss',
})
export class Streaks {

  constructor(public taskService: TaskService) {}

  completedDays = computed(() => {
    return new Set(
      this.taskService.tasks()
        .filter(task => task.completed && task.completedAt)
        .map(task => task.completedAt!.split('T')[0])
    );
  });

  get totalActiveDays(): number {
    return this.completedDays().size;
  }
}