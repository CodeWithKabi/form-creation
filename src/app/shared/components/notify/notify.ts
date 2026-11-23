
import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-notify',
  imports: [],
  templateUrl: './notify.html',
  styleUrl: './notify.scss',
})
export class Notify {

  constructor(public notificationService: NotificationService) {}

}
