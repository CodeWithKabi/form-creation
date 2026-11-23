
import { Injectable, signal } from '@angular/core';

export interface Notification {
  id: number;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications = signal<Notification[]>([]);

  private nextId = 1;

  show(
    message: string,
    type: Notification['type'] = 'success'
  ): void {

    const id = this.nextId++;

    const newNotification: Notification = {
      id,
      message,
      type
    };

    this.notifications.update(current => [
      ...current,
      newNotification
    ]);

    // Automatically remove after 3 seconds
    setTimeout(() => {
      this.remove(id);
    }, 3000);
  }

  remove(id: number): void {
    this.notifications.update(current =>
      current.filter(notification => notification.id !== id)
    );
  }
}
