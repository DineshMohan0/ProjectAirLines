import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router} from '@angular/router';
import { SupportComponent } from '../support/support.component';

interface Flight {
  from: string;
  to: string;
  date: string;
  price: string;
  flightId: number;

  departureDate: string;
  returnDate: string;

}interface Flight {
  from: string;
  to: string;
  date: string;
  price: string;
  flightId: number;

  departureDate: string;
  returnDate: string;

}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule,SupportComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  departureDate!: string;
  returnDate!: string;
  from!: string;
  to!: string;
  flights:Flight[] = []; // to store filtered flights
  loading: boolean = false;

   // Default array of flight details (replace this with your actual data)
   defaultFlights: Flight[] = [
    {
      from: 'New York',
      to: 'London',
      departureDate: '2025-02-10', // Date format updated to yyyy-mm-dd
      returnDate: '2025-02-17', // Date format updated to yyyy-mm-dd
      price: '$500',
      flightId: 1,
      date: ''
    },
    {
      from: 'London',
      to: 'New York',
      departureDate: '2025-02-17', // Date format updated to yyyy-mm-dd
      returnDate: '2025-02-24', // Date format updated to yyyy-mm-dd
      price: '$450',
      flightId: 2,
      date: ''
    },
    {
      from: 'Paris',
      to: 'Berlin',
      departureDate: '2025-02-14', // Date format updated to yyyy-mm-dd
      returnDate: '2025-02-21', // Date format updated to yyyy-mm-dd
      price: '$200',
      flightId: 3,
      date: ''
    },
    {
      from: 'Berlin',
      to: 'Paris',
      departureDate: '2025-02-21', // Date format updated to yyyy-mm-dd
      returnDate: '2025-02-28', // Date format updated to yyyy-mm-dd
      price: '$180',
      flightId: 4,
      date: ''
    }
  ];

  // Store departure and return date in an array
  selectedFlightDetails: string[] = [];

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToreg() {
    this.router.navigate(['/register']);
  }

  // Function to handle the search
  search() {
    this.loading = true;

    // Push departure and return details into the selectedFlightDetails array
    this.selectedFlightDetails = [this.departureDate, this.returnDate];

    // Now, filter the flights based on the from/to location
    this.flights = this.defaultFlights.filter(flight => 
      flight.from.toLowerCase() === this.from.toLowerCase() && 
      flight.to.toLowerCase() === this.to.toLowerCase() &&

      (this.departureDate ? flight.departureDate === this.departureDate : true) &&(this.returnDate ? flight.returnDate === this.returnDate : true)
    );


    
    // Stop the loading spinner after the search is completed
    this.loading = false;
  }

  trackById(index: number, flight: any): number {
    return flight.flightId;
  }
  constructor(private router: Router) {}
  goToSeatSelection(flight: any): void {
    this.router.navigate(['/seatselection'], {
      queryParams: {
        from: flight.from,
        to: flight.to,
        date: flight.date,
        price: flight.price,
        departureDate: flight.departureDate,
        returnDate: flight.returnDate

      }
    });
  }

}
// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [FormsModule, CommonModule, ReactiveFormsModule],
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   departureDate: string = '2025-01-17';
//   returnDate: string = '2025-01-18';
//   from: string = '';
//   to: string = '';
//   loading: boolean = false;
//   flights: Array<any> = [];
 
//   async search() {
//     this.loading = true;
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     this.flights = [
//       {
//         id: 1,
//         from: 'Bangkok (DMK)',
//         to: 'Singapore (SIN)',
//         date: 'Thu 12 Feb',
//         price: 'INR 4,392'
//       },
//       {
//         id: 2,
//         from: 'Bangkok (DMK)',
//         to: 'Singapore (SIN)',
//         date: 'Thu 12 Feb',
//         price: 'INR 4,392'
//       }
//     ];
//     this.loading = false;
//   }
 
//   // trackBy function to optimize the rendering of the list
//   trackById(index: number, flight: any): number {
//     return flight.id;
//   }
// }


