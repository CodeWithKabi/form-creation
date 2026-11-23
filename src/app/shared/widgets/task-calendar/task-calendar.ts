
import { Component, signal, computed } from '@angular/core';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-calendar',
  imports: [],
  templateUrl: './task-calendar.html',
  styleUrl: './task-calendar.scss',
})
export class TaskCalendar {

  constructor(public taskService: TaskService) {}

  // Store selected date
  selectedDate = signal<string | null>(null);

  // Store currently displayed month
  currentDate = signal(new Date());

  // Get current month
  get month(): number {
    return this.currentDate().getMonth();
  }

  // Get current year
  get year(): number {
    return this.currentDate().getFullYear();
  }

  // Get month name
  get monthName(): string {
    return this.currentDate().toLocaleString('default', {
      month: 'long'
    });
  }

  // Today's date
  today = new Date();

  // Check whether a date is today
  isToday(date: number): boolean {
    return (
      date === this.today.getDate() &&
      this.month === this.today.getMonth() &&
      this.year === this.today.getFullYear()
    );
  }

  // Calculate total days in current month
  daysInMonth = computed(() => {
    return new Date(
      this.year,
      this.month + 1,
      0
    ).getDate();
  });

  // Find starting weekday
  startingDay = computed(() => {
    return new Date(
      this.year,
      this.month,
      1
    ).getDay();
  });

  // Generate calendar dates
  calendarDays = computed(() => {
    return [
      ...Array(this.startingDay()).fill(null),

      ...Array.from(
        { length: this.daysInMonth() },
        (_, index) => index + 1
      )
    ];
  });

  // Format date as YYYY-MM-DD
  formatDate(date: number): string {
    return [
      this.year,
      String(this.month + 1).padStart(2, '0'),
      String(date).padStart(2, '0')
    ].join('-');
  }

  // Check whether tasks exist on a date
  hasTasks(date: number): boolean {
    const formattedDate = this.formatDate(date);

    return this.taskService.tasks().some(
      task => task.dueDate === formattedDate
    );
  }

  // Select a date
  selectDate(date: number): void {
    this.selectedDate.set(this.formatDate(date));
  }

  // Check selected date
  isSelectedDate(date: number): boolean {
    return this.selectedDate() === this.formatDate(date);
  }

  // Get tasks for selected date
  selectedTasks = computed(() => {
    return this.taskService.tasks().filter(
      task => task.dueDate === this.selectedDate()
    );
  });

  // Previous month
  previousMonth(): void {
    this.currentDate.update(date =>
      new Date(
        date.getFullYear(),
        date.getMonth() - 1,
        1
      )
    );

    this.selectedDate.set(null);
  }

  // Next month
  nextMonth(): void {
    this.currentDate.update(date =>
      new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        1
      )
    );

    this.selectedDate.set(null);
  }
  goToToday(): void {
  this.currentDate.set(new Date());

  this.selectedDate.set(
    this.formatDate(new Date().getDate())
  );
}

}
