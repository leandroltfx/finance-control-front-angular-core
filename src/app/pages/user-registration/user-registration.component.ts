import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,

    NzCardModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    NzTypographyModule
  ],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent implements OnInit {

  passwordVisible: boolean = false;
  userRegistrationForm!: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.userRegistrationForm = this._buildUserRegistrationForm();
  }

  registerUser(): void {
    if (this.userRegistrationForm.valid) {
      console.log('registerUser', this.userRegistrationForm.value);
    }
  }

  private _buildUserRegistrationForm(): FormGroup {
    return this._formBuilder.group({
      userName: null,
      email: null,
      password: null
    });
  }

}
