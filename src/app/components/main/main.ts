import { CommonModule } from '@angular/common';
import { Sidebar } from './../sidebar/sidebar';
import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})

export class Main {
  
  splitedMain = input.required<boolean>();

}
