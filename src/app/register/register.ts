import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {Button} from "../shared/components/button/button";
import {AppInput} from "../shared/components/input/input"
// import { Auth } from '../services/auth';
@Component({
  selector: 'app-register',
  
  imports: [FormsModule,RouterLink,Button,AppInput],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  name:string="";
  email:string="";
  password:string="";
  confirmPassword:string="";

  successMessage :string="";
  emailTouched:boolean=false;

  get isValidEmail(): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
}
  register():void{
   if( this.password !==this.confirmPassword){
    return
   }
   const user={
    name:this.name,
    email:this.email,
    password: this.password
   }

  const storedUser= localStorage.setItem("user",JSON.stringify(user));

   this.successMessage="Registration Successful";
   console.log(storedUser);
  }
 
}