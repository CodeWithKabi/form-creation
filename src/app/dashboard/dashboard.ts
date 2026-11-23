import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from '../shared/components/button/button';
@Component({
  selector: 'app-dashboard',
  imports: [Button],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
constructor(private router: Router) {
   const storedUser=localStorage.getItem("user");
  if(storedUser){
    const user=JSON.parse(storedUser)
    this.name=user.name
  }
}
// name: string = history.state.name || '';
name:string="";

logout(): void {


  this.router.navigate(['/login']);
}

}
