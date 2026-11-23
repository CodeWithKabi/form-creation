import { Component,Input,Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input()text:string="";
  @Input() disabled: boolean = false;
  @Output() buttonClick=new EventEmitter<void>();
}
