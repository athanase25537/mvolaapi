import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-docs',
  imports: [CommonModule],
  templateUrl: './docs.html',
  styleUrl: './docs.scss'
})
export class Docs {

  bodyExample = {
    "amount": "5000",
    "currency": "Ar",
    "descriptionText": "Paiement Facture",
    "requestingOrganisationTransactionReference": "1234567890",
    "requestDate": "2023-06-01T12:00:00.000Z",
    "originalTransactionReference": "REF123456",
    "debitParty": [{"key": "msisdn", "value": "0343500000"}],
    "creditParty": [{"key": "msisdn", "value": "0343700000"}],
    "metadata": [
      { "key": "partnerName", "value": "MaSociete" },
      { "key": "fc", "value": "USD" },
      { "key": "amountFc", "value": "1" }
    ]
  }

  responseExample = {
      "status": "pending",
      "serverCorrelationId": "abc123",
      "notificationMethod": "callback",
    }

  callbackExample = {
    "transactionStatus": "completed",
    "serverCorrelationId": "421a22a2...",
    "transactionReference": "641235",
    "requestDate": "2021-02-24T03:28:00.567Z",
  }

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
}
