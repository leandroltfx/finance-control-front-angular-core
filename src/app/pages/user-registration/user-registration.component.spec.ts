import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDefinition } from '@ant-design/icons-angular';
import { UserOutline, LockOutline, MailOutline } from '@ant-design/icons-angular/icons';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

import { UserRegistrationComponent } from './user-registration.component';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;

  const icons: IconDefinition[] = [UserOutline, LockOutline, MailOutline];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,

        NzCardModule,
        NzFormModule,
        NzIconModule.forRoot(icons),
        NzInputModule,
        NzButtonModule,
        NzTypographyModule,

        UserRegistrationComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('deve iniciar o formulário de cadastro de usuário com os campos userName, email e password definidos e com valor null', () => {

      component.ngOnInit();

      expect(component['userRegistrationForm'].controls['userName']).toBeDefined();
      expect(component['userRegistrationForm'].controls['email']).toBeDefined();
      expect(component['userRegistrationForm'].controls['password']).toBeDefined();

      expect(component['userRegistrationForm'].controls['userName'].value).toBeNull();
      expect(component['userRegistrationForm'].controls['email'].value).toBeNull();
      expect(component['userRegistrationForm'].controls['password'].value).toBeNull();
    });
  });

  describe('buildUserRegistrationForm', () => {
    it('deve construir o formulário para cadastro de usuário com os campos userName, email e password definidos e com valor null', () => {

      component['userRegistrationForm'] = component['buildUserRegistrationForm']();

      expect(component['userRegistrationForm'].controls['userName']).toBeDefined();
      expect(component['userRegistrationForm'].controls['email']).toBeDefined();
      expect(component['userRegistrationForm'].controls['password']).toBeDefined();

      expect(component['userRegistrationForm'].controls['userName'].value).toBeNull();
      expect(component['userRegistrationForm'].controls['email'].value).toBeNull();
      expect(component['userRegistrationForm'].controls['password'].value).toBeNull();
    });
  });
});
