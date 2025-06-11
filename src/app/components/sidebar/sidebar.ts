import { CommonModule } from '@angular/common';
import { Component, output, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

  split: boolean = false;
  splitedOut = output<boolean>();
  items = [
    {
      linkName: 'Intro',
      icon: 'fa-regular fa-lightbulb',
      routerLink: 'intro'
    },

    {
      linkName: 'Docs',
      icon: 'fa-regular fa-file-lines',
      routerLink: 'docs',
    },

    {
      linkName: 'Tutorials',
      icon: 'fa-solid fa-code',
      routerLink: 'tutorials',
    },

    {
      linkName: 'Sandbox',
      icon: 'fa-solid fa-hourglass-half',
      routerLink: 'sandbox',
    },
    {
      linkName: 'Example',
      icon: 'fa-solid fa-diamond',
      routerLink: 'example'
    }
  ]
  toggleSplit() {
    this.split = this.split ? false : true;
    this.splitedOut.emit(this.split);
  }
}
