import { Component } from '@angular/core';
import {RouterOutlet} from"@angular/router"
import {Sidebar} from "../sidebar/sidebar"
import { Notify } from '../../shared/components/notify/notify';
@Component({
  selector: 'app-main-layout',
  imports: [Sidebar,RouterOutlet,Notify],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
