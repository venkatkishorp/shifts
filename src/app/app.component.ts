import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loginStatus: boolean = false;
  userName: string = '';

  onReceiveName(name: string): void {
    this.userName = name;
    this.loginStatus = true;
  }
}
