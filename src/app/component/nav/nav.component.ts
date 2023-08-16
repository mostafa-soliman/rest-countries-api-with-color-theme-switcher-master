import { Component, OnInit } from '@angular/core';
import { GetFligsService } from './../../services/get-fligs.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  darkMode: boolean = false;

  constructor(private getFligs: GetFligsService) {}

  ngOnInit(): void {}

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    const body = document.querySelector('body');

    if (this.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
