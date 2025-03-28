import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-payment',
  imports:[CommonModule,FormsModule],
  templateUrl: './payment.component.html',
  standalone:true,
  styleUrls: ['./payment.component.css'],
 
})
export class PaymentComponent {
  selectedMethod: string = '';  // Track selected payment method
  amount: number = 100;  // Payment amount
  pin!: number;  // User PIN
  isPaymentConfirmed: boolean = false; // Track payment confirmation
  isPinEntered: boolean = false; // Track PIN entry status
  correctPin: number = 1234; // Dummy correct PIN, replace with actual logic
 
 
 
 
  // When payment button is clicked
  onPaymentButtonClick() {
    this.isPaymentConfirmed = true;
  }
 
  // When the PIN is submitted
  onPinSubmit() {
    console.log('Entered PIN:', this.pin);  // Log entered PIN
    console.log('Correct PIN:', this.correctPin);  // Log correct PIN
 
    const enteredPin = Number(this.pin);  // Convert entered PIN to a number
 
    if (enteredPin === this.correctPin) {
      this.isPinEntered = true;
      console.log("PIN matched");
    } else {
      alert('Incorrect PIN. Please try again.');
    }
  }
 
  // Models for the different payment methods
  creditCard = {
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  };
 
  paypal = {
    email: ''
  };
 
  googlePay = {
    email: ''
  };
  // Regular expression patterns
  cardNumberPattern = /^[0-9]{16}$/;
  cvvPattern = /^[0-9]{3}$/;
  emailPattern = /^[a-zA-Z0-9._-]+@[a-zA0-9.-]+\.[a-zA-Z]{2,6}$/;
 
  // Method to handle form submission
  onSubmit() {
    if (this.selectedMethod === 'credit-card') {
      if (this.validateCreditCard()) {
        console.log('Processing Credit Card:', this.creditCard);
        // Call your payment API or service here
      }
    } else if (this.selectedMethod === 'paypal') {
      if (this.validatePayPal()) {
        console.log('Processing PayPal:', this.paypal);
        // Call your PayPal API or service here
      }
    } else if (this.selectedMethod === 'google-pay') {
      if (this.validateGooglePay()) {
        console.log('Processing Google Pay:', this.googlePay);
        // Call your Google Pay API or service here
      }
    }
  }
 
  // Credit Card validation
  validateCreditCard(): boolean {
    return this.isCardNumberValid() && this.isExpiryDateValid() && this.isCvvValid();
  }
 
  // PayPal validation
  validatePayPal(): boolean {
    return this.isPaypalEmailValid();
  }
 
  // Google Pay validation
  validateGooglePay(): boolean {
    return this.isGooglePayEmailValid();
  }
 
  // Helper methods for field validation
  isCardNumberValid(): boolean {
    return this.cardNumberPattern.test(this.creditCard.cardNumber);
  }
 
  isCvvValid(): boolean {
    return this.cvvPattern.test(this.creditCard.cvv);
  }
 
  isExpiryDateValid(): boolean {
    // Ensure expiryDate is not empty and is a valid string in the format YYYY-MM
    return typeof this.creditCard.expiryDate === 'string' && this.creditCard.expiryDate.trim() !== '' && /^\d{4}-\d{2}$/.test(this.creditCard.expiryDate);
  }
 
 
  isPaypalEmailValid(): boolean {
    return this.emailPattern.test(this.paypal.email);
  }
 
  isGooglePayEmailValid(): boolean {
    return this.emailPattern.test(this.googlePay.email);
  }
 
  // Updated form validation
  isFormValid(): boolean {
    // Ensure strict boolean return by checking for empty strings or invalid conditions
    if (this.selectedMethod === 'credit-card') {
      return this.isCardNumberValid() && this.isExpiryDateValid() && this.isCvvValid();
    } else if (this.selectedMethod === 'paypal') {
      return this.isPaypalEmailValid();
    } else if (this.selectedMethod === 'google-pay') {
      return this.isGooglePayEmailValid();
    }
    return false;  // Return false if no payment method is selected
  }
 
}