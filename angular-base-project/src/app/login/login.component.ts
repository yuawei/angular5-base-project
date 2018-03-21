import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './user';

@Component({
  styleUrls: ['./login.component.scss'],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.createForm();
  }

  loginForm: FormGroup;
  formSubmitted = false;
  errorMessage: string;
  user: User;
  createForm() {
    this.loginForm = this.fb.group({
      guid: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.loginForm.valueChanges
        .filter(data => this.loginForm.valid)
        .subscribe(data => console.log(JSON.stringify(data)));
  }

  onSubmit(event: Event) {
    this.formSubmitted = true;
    this.errorMessage = '';
    event.preventDefault();
    if (this.loginForm.valid) {
      this.user = new User(
        this.loginForm.value.guid,
        this.loginForm.value.password,
      );
      this.loginService.authenticate(this.user).subscribe(
        (response) => {
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.log(error);
          this.errorMessage = error.error;
        }
      );
    }
  }
}
