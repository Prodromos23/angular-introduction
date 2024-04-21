import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from 'src/app/shared/interfaces/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [ReactiveFormsModule,MatFormFieldModule,MatInputModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  userService = inject(UserService);

  registrationStatus:{
    success: boolean,
    message: string
  } = {success: false, message: 'Not attempted yet'};
  registerAnotherUser(){
    this.form.reset()
    this.registrationStatus = {success: false, message: 'Not attempted yet'}
  }

  // OnSubmit for the button
  onSubmit(value: any) {
    console.log(value);
    const user = this.form.value as User
    delete user['confirmPassword']

    this.userService.registerUser(user).subscribe( {
      next: (response) => {
        console.log('Registered user: ', response.msg);
        this.registrationStatus = {
          success: true,
          message: response.msg
        }

      },
      error: (response) => {
        const message = response.error.msg
        console.log('Error registering user: ', message);
        this.registrationStatus = {
          success: false,
          message // same as message:message
        }
      }
    });
  }
  
  
  form = new FormGroup({
    givenName : new FormControl('',Validators.required),
    surName : new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(4)]),
    confirmPassword: new FormControl('',[Validators.required,Validators.minLength(4)])
  },
    // overall function for checking password 
   this.passwordConfirmValidator
  );
  // overall validator | two fields should be the same | the argument for the function is the form itself
  passwordConfirmValidator(form:FormGroup) {
    if (form.get('password')?.value !== form.get('confirmPassword')?.value) {
      
      form.get('confirmPassword')?.setErrors({ 'passwordMismatch': true });
      return { 'passwordMismatch': true }
    }
    return {};
  }



}
