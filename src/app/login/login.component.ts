// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
//  import { FormsModule } from '@angular/forms';
//  import { ReactiveFormsModule } from '@angular/forms';
// @Component({
//   selector: 'app-login',
//   standalone: true,
//   templateUrl: './login.component.html',
//   imports: [FormsModule,ReactiveFormsModule],
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginFormGroup: FormGroup = new FormGroup({
//     email: new FormControl<string>('', [Validators.required, Validators.email]),
//     password: new FormControl<string>('', [Validators.required]),
//   });
 
//   constructor(private userService: UserService, private router: Router) { }
 
//   ngOnInit(): void { }
 
//   loginUser() {
//     const { email, password } = this.loginFormGroup.value;
//     this.userService.login(email, password)
//       .subscribe((user: any) => {
//         if (user) {
//           this.router.navigate(['/home']);
//         } else {
//           alert("Invalid Credentials");
//         }
//       });
//   }

//   navigateToAdminPage() { this.router.navigate(['/admin']); }
// }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service'; // Make sure to import your service
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [FormsModule,ReactiveFormsModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) {
    this.loginFormGroup = this.fb.group({
      email: [''],
      password: [''],
      isAdmin: [false] // Added field for admin check
    });
  }

  login() { const { email, password, isAdmin } = this.loginFormGroup.value;
   if (isAdmin)
     { if (email === 'admin@123.com' && password === 'Admin123') 
    { this.router.navigate(['/admin']); 

    } 
    else { alert("Invalid Admin Credentials"); 

    } } 
    else { this.userService.login(email, password).subscribe((user: any) => { if (user) { this.router.navigate(['/home']); 

    } else { alert("Invalid User Credentials"); } }); } }
}
