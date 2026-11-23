
import { Component, computed } from '@angular/core';
import { TaskService } from '../../shared/services/task';

@Component({
  selector: 'app-statistics',
  imports: [],
  templateUrl: './statistics.html',
  styleUrl: './statistics.scss',
})
export class Statistics {

  constructor(public taskService: TaskService) {}

  // Completion percentage
  completionPercentage = computed(() => {
    const total = this.taskService.totalTasks();

    if (total === 0) return 0;

    return Math.round(
      (this.taskService.completedTasks() / total) * 100
    );
  });

  // Completed and pending task counts
  completedCount = computed(() =>
    this.taskService.completedTasks()
  );

  pendingCount = computed(() =>
    this.taskService.pendingTasks()
  );

  // Priority distribution
  lowPriorityTasks = computed(() =>
    this.taskService.tasks().filter(
      task => task.priority === 'Low'
    ).length
  );

  mediumPriorityTasks = computed(() =>
    this.taskService.tasks().filter(
      task => task.priority === 'Medium'
    ).length
  );

  highPriorityTasks = computed(() =>
    this.taskService.tasks().filter(
      task => task.priority === 'High'
    ).length
  );

  // Weekly productivity: last 7 days
  weeklyStats = computed(() => {
    const today = new Date();

    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date(today);

      date.setDate(today.getDate() - (6 - index));

      const count = this.taskService.tasks().filter(task => {
        if (!task.completedAt) return false;

        const completedDate = new Date(task.completedAt);

        return (
          completedDate.getDate() === date.getDate() &&
          completedDate.getMonth() === date.getMonth() &&
          completedDate.getFullYear() === date.getFullYear()
        );
      }).length;

      return {
        label: date.toLocaleDateString('en', {
          weekday: 'short'
        }),
        date: date.getDate(),
        count
      };
    });
  });

  // Maximum weekly count for chart scaling
  maxWeeklyCount = computed(() => {
    return Math.max(
      1,
      ...this.weeklyStats().map(day => day.count)
    );
  });

  // Monthly productivity: last 6 months
  monthlyStats = computed(() => {
    const today = new Date();

    return Array.from({ length: 6 }, (_, index) => {
      const date = new Date(
        today.getFullYear(),
        today.getMonth() - (5 - index),
        1
      );

      const count = this.taskService.tasks().filter(task => {
        if (!task.completedAt) return false;

        const completedDate = new Date(task.completedAt);

        return (
          completedDate.getMonth() === date.getMonth() &&
          completedDate.getFullYear() === date.getFullYear()
        );
      }).length;

      return {
        label: date.toLocaleDateString('en', {
          month: 'short'
        }),
        count
      };
    });
  });

  maxMonthlyCount = computed(() => {
    return Math.max(
      1,
      ...this.monthlyStats().map(month => month.count)
    );
  });

  // Most productive day in the displayed week
  mostProductiveDay = computed(() => {
    const days = this.weeklyStats();

    return days.reduce((best, current) =>
      current.count > best.count ? current : best
    );
  });

  // Total tasks completed with recorded timestamps
  recordedCompletions = computed(() => {
    return this.taskService.tasks().filter(
      task => task.completed && !!task.completedAt
    ).length;
  });

}
