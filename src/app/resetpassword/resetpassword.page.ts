import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

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
}
