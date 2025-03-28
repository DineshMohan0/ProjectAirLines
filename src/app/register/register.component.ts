
import { Component, OnInit } from '@angular/core';
import { UserDto } from '../models/user.interface';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterLink],
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationFormGroup: FormGroup = new FormGroup({
    id: new FormControl<number>(+''),
 
    firstName: new FormControl<string>('', [Validators.required]),
    lastName: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl<string>('', [Validators.required]),
    phoneNumber: new FormControl<string>('', [Validators.required]),
    dob: new FormControl<string>('', [Validators.required])
  });
 
  addOrPut = false;
 
  constructor(private userService: UserService, private router: Router) { }
 
  ngOnInit(): void {
  }
 
  registerUser() {
    if (this.registrationFormGroup.value.password !== this.registrationFormGroup.value.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
 
    this.userService.register(this.registrationFormGroup.value)
      .subscribe((user: any) => {
        alert("User Registered Successfully");
        this.router.navigate(['/login']);
      });
  }
  // Method to navigate to the login page
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}