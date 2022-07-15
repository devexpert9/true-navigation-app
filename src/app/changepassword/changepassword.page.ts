import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public showPassword: boolean = false;
  public showHide(): void
  {
      this.showPassword = !this.showPassword;
  }
  public showPassword1: boolean = false;
    public showHide1(): void
    {
        this.showPassword1 = !this.showPassword1;
    }
    public showPassword2: boolean = false;
    public showHide2(): void
    {
        this.showPassword2 = !this.showPassword2;
    }
}
