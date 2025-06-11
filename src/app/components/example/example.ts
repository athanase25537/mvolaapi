import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  imports: [CommonModule],
  templateUrl: './example.html',
  styleUrl: './example.scss'
})
export class Example {

  headers = {
    "Accept": "*/*",
    "Authorization": "Bearer {access_token}",
    "Version": "1.0",
    "X-CorrelationID": "x_correlation_id", 
    "UserLanguage": "FR",
    "UserAccountIdentifier": "msisdn;{app_num}", 
    "partnerName": "partner_name",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache"
  }

  payload = {
    "amount": "500",
    "currency": "Ar",
    "descriptionText": "testenvoie",
    "requestingOrganisationTransactionReference": "TEST-APIMVOLA",
    "requestDate": "2025-06-10T14:30:00.000+0300",
    "originalTransactionReference": "12345",
    "debitParty": [{"key": "msisdn", "value": "0343500004"}],
    "creditParty": [{"key": "msisdn", "value": "03435000003"}],
    "metadata": [{"key": "partnerName", "value": "applicationtest"}]
  }
}
