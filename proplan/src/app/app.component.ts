import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proplan';
public isMenuToggled = false;
  public menuClick() {
    this.isMenuToggled = !this.isMenuToggled;
  }
}
