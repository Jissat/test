import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isCollapsed = false;
  visibility = false;

  aboutMe() {
    this.visibility = true;
  }

  close() {
    this.visibility = false;
  }
}
