
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  SettingsService,
  UserSettings
} from '../../shared/services/settings';
import { NotificationService } from '../../shared/services/notification';

@Component({
  selector: 'app-settings',
  imports: [FormsModule],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {

  settings: UserSettings;

  constructor(
    public settingsService: SettingsService,
    private notificationService: NotificationService
  ) {
    this.settings = { ...this.settingsService.settings() };
    this.settingsService.applyTheme();
  }

  saveSettings(): void {
    this.settingsService.saveSettings(this.settings);

    this.notificationService.show(
      'Settings saved successfully!',
      'success'
    );
  }

  resetSettings(): void {
    this.settingsService.resetSettings();

    this.settings = { ...this.settingsService.settings() };

    this.notificationService.show(
      'Settings restored to default!',
      'success'
    );
  }
}
