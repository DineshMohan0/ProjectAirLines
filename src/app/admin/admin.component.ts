import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone : true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  flightForm: FormGroup;
  successMessage: string | null = null
  constructor(private fb: FormBuilder,private r:Router) {
    this.flightForm = this.fb.group({
      flightNumber: ['', Validators.required],
      from: ['', Validators.required],
      to: ['', Validators.required],
      depart: ['', Validators.required],
      arrive: ['', Validators.required],
      duration: ['', Validators.required],
      cabin: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.flightForm.valid) {
       console.log('Flight Added!', this.flightForm.value);
       this.successMessage = 'Flight added successfully!';
    //   alert('Flight added successfully!');
    } else {
      alert('Form is invalid');
      this.successMessage = null;
    }
  }

  navigate(){
    this.r.navigate(['/home']);

  }
}
