import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

import { Button } from '../shared/components/button/button';
import {AppInput} from"../shared/components/input/input"


@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink,Button,AppInput],//allows us to use [(ngModel)] and routing
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  isLoggedIn: boolean = false;
  showPassword: boolean = false;
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  get isValidEmail(): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }

  constructor(private router: Router) {}

  clearError(): void {
    this.errorMessage = '';
  }

  login(): void {
    this.errorMessage = '';
    const storedUser = localStorage.getItem('user');

    if (!storedUser) {
      this.errorMessage =
        'No registered user found. Please register first.';
      return;
    }

    try {
      const user = JSON.parse(storedUser);

      if (
        this.email === user.email &&
        this.password === user.password
      ) {
        this.isLoggedIn = true;
        this.router.navigate(['/dashboard'], {
          state: { name: user.name },
        });
      } else {
        this.errorMessage = 'Invalid email or password';
      }
    } catch {
      this.errorMessage =
        'Saved login information could not be read. Please register again.';
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
}
