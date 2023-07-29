import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnChanges {

  cardType: string = 'Login';
  userId: string = '';
  userPassword: string = '';
  confirmedPassword: string = '';
  passwordValidated: boolean = true;
  users: any[] = [
    {
      userId: 'venkat',
      userName: 'Venkat Kishor',
      userPassword: 'venkat123'
    }
  ];
  loginException: boolean = false;
  loginExceptionMessage: string = '';
  userName: string = '';

  @Output() name = new EventEmitter<string>();

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.userId);
  }

  /**
   * This method is used to toggle from Login Mode to Sign Up Mode
   */
  signUpUser(): void {
    this.userId = '';
    this.userPassword = '';
    this.cardType = 'Signup';
  }

  backToLogin(): void {
    this.userId = '';
    this.userPassword = '';
    this.cardType = 'Login';
  }

  /**
   * This method is used to add a user 
   */
  addUser(): void {
    this.users.push(
      {
        userId: this.userId,
        userPassword: this.userPassword,
        userName: this.userName
      }
    );

    this.userId = '';
    this.userPassword = '';
    this.cardType = 'Login';
  }

  /**
   * This method is used to validate if user login is correct and navigate to the home page
   */
  onUserLogin(): void {
    const userExists = this.users.findIndex(e => e.userId === this.userId && e.userPassword === this.userPassword);

    if (userExists !== -1) {
      this.name.emit(this.users[userExists].userName);
      // this.router.navigateByUrl('home');
    }
    else {
      this.loginException = true;
      this.loginExceptionMessage = 'Invalid user credentials!!';

      setTimeout(() => {
        this.loginException = false;
        this.loginExceptionMessage = '';
      }, 3000);
    }
  }

  /**
   * This methis used to validate the confirm password field
   */
  validateConfirmedPassword(): void {
    console.log(this.userId);
    if (this.confirmedPassword === this.userPassword) {
      this.loginException = false;
      this.loginExceptionMessage = '';
    }
    else {
      this.loginException = true;
      this.loginExceptionMessage = 'The passwords don\'t match!!';
    }
  }
}
