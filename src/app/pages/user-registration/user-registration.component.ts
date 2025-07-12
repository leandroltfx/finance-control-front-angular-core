import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

import { UserRegistrationService } from './acl/service/user-registration.service';
import { UserRegistrationProxyService } from './acl/proxy/user-registration-proxy.service';
import { UserRegistrationAdapterService } from './acl/adapter/user-registration-adapter.service';

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
    NzTypographyModule,
    NzNotificationModule
  ],
  providers: [
    UserRegistrationService,
    UserRegistrationProxyService,
    UserRegistrationAdapterService
  ],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent implements OnInit {

  protected passwordVisible: boolean = false;
  protected userRegistrationForm!: FormGroup;
  protected userNameMinLength: number = 3;
  protected userNameMaxLength: number = 30;
  protected emailMaxLength: number = 100;
  protected passwordMinLength: number = 8;
  protected passwordMaxLength: number = 100;

  private patternUserName: RegExp = /^\S+$/;
  private patternEmail: RegExp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly userRegistrationService: UserRegistrationService
  ) { }

  public ngOnInit(): void {
    this.userRegistrationForm = this.buildUserRegistrationForm();
  }

  protected registerUser(): void {
    if (this.userRegistrationForm.valid) {
      this.userRegistrationService.registerUser(
        {
          userName: this.userRegistrationForm.controls['userName'].value,
          email: this.userRegistrationForm.controls['email'].value,
          password: this.userRegistrationForm.controls['password'].value
        }
      );
    }
  }

  private buildUserRegistrationForm(): FormGroup {
    return this.formBuilder.group({
      userName: [null, [Validators.required, Validators.pattern(this.patternUserName), Validators.minLength(this.userNameMinLength), Validators.maxLength(this.userNameMaxLength)]],
      email: [null, [Validators.required, Validators.pattern(this.patternEmail), Validators.maxLength(this.emailMaxLength)]],
      password: [null, [Validators.required, Validators.minLength(this.passwordMinLength), Validators.maxLength(this.passwordMaxLength)]]
    });
  }

}
