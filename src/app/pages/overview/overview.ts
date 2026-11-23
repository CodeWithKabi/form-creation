
import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../shared/services/task';
import { SettingsService } from '../../shared/services/settings';
@Component({
  selector: 'app-overview',
  imports: [RouterLink],
  templateUrl: './overview.html',
  styleUrl: './overview.scss',
})
export class Overview {
constructor(
  public taskService: TaskService,
  public settingsService: SettingsService
) {}
  totalTasks = computed(() => this.taskService.totalTasks());

  completedTasks = computed(() => this.taskService.completedTasks());

  pendingTasks = computed(() => this.taskService.pendingTasks());

  progressPercentage = computed(() => {
    const total = this.totalTasks();

    if (total === 0) {
      return 0;
    }

    return Math.round((this.completedTasks() / total) * 100);
  });

  recentTasks = computed(() =>
    [...this.taskService.tasks()]
      .sort((a, b) => b.id - a.id)
      .slice(0, 5)
  );
}
