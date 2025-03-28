import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-seatselection',
  standalone: true,
  imports: [],
  templateUrl: './seatselection.component.html',
  styleUrl: './seatselection.component.css'
})
export class SeatselectionComponent implements OnInit { 
  flightDetails: any;
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToreg() {
    this.router.navigate(['/register']);
  }
  constructor(private route: ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.flightDetails = params;
      console.log(this.flightDetails); // Use this to display flight details on the seat selection page
    });
  }
  paynow()
  {
    this.router.navigate(['/payment']);
  }

}
