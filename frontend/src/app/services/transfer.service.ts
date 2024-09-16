import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private apiUrl = 'http://localhost:3000/api/transfers';

  constructor(private http: HttpClient) { }

  transferFunds(sourceAccountId: number, targetAccountId: number, amount: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { sourceAccountId, targetAccountId, amount });
  }
}