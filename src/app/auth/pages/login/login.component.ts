import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent  {

  public form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  public login(): void {
    console.log(this.form.value);
    const {email, password} = this.form.value;

    this.authService.login(email, password)
      .subscribe(response => {
        console.log(response);
      });
    // this.router.navigateByUrl('/dashboard');
  }
}
