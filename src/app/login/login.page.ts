import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
public showPassword: boolean = false;
    public showHide(): void
    {
        this.showPassword = !this.showPassword;
    }
}
