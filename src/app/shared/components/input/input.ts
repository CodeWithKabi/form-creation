import { Component, Input, Output, EventEmitter } from '@angular/core';
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class AppInput {

  @Input() label:string="";
  @Input() type:string="";
  @Input() placeholder:string ="";
  @Input () errorMessage:string="";
  @Input() value:string="";
  // value: string = '';

  @Input() required:boolean=false;
   touched:boolean=false

  @Output() valueChange=new EventEmitter <string>();
  @Output() touchedChange=new EventEmitter <boolean>();

  get isValidEmail():boolean{
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value)
  }
}
