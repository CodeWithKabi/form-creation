
import { Injectable, signal } from '@angular/core';

export interface UserSettings {
  name: string;
  email: string;
  defaultPriority: string;
  theme: 'light' | 'dark';
  compactMode: boolean;
}

const defaultSettings: UserSettings = {
  name: 'Task Manager User',
  email: '',
  defaultPriority: 'Medium',
  theme: 'light',
  compactMode: false
};

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings = signal<UserSettings>(this.loadSettings());

  private loadSettings(): UserSettings {
    const saved = localStorage.getItem('userSettings');

    if (saved) {
      try {
        return { ...defaultSettings, ...JSON.parse(saved) };
      } catch {
        return { ...defaultSettings };
      }
    }

    return { ...defaultSettings };
  }

  saveSettings(newSettings: UserSettings): void {
    this.settings.set({ ...newSettings });

    localStorage.setItem(
      'userSettings',
      JSON.stringify(newSettings)
    );

    this.applyTheme();
  }

  updateSettings(partialSettings: Partial<UserSettings>): void {
    this.saveSettings({
      ...this.settings(),
      ...partialSettings
    });
  }

  resetSettings(): void {
    this.saveSettings({ ...defaultSettings });
  }

  applyTheme(): void {
    document.documentElement.setAttribute(
      'data-theme',
      this.settings().theme
    );
  }
  constructor() {
  this.applyTheme();
}
}
