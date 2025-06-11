import { Component, signal, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "./components/sidebar/sidebar";
import { Main } from "./components/main/main";
import { CommonModule } from '@angular/common';
import { Nav } from "./components/nav/nav";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Main, CommonModule, Nav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'menu';

  split: boolean = false;

  toggleSplited() {
    this.split = this.split ? false : true;
  }
}
