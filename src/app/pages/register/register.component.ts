import { Component, OnInit } from '@angular/core';
import { faEye, faEyeSlash, faLock} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faLock = faLock;
  passwordView: boolean;
  isValid: boolean;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.passwordView = false;
    this.isValid = false;
  }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, Validators.minLength(11)]],
      birth: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      check: [null, [Validators.required]],
    });
  }


  onSubmit(): any {
    this.isValid = true;
    console.log(this.isValid);
    if (!this.registerForm.valid) {
      console.log(this.registerForm.valid);
      return;
    }
    console.log(this.registerForm.value);
  }

  showPassword(): any {
    this.passwordView = !this.passwordView;
  }
}
