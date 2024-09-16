import { Component } from '@angular/core';
import { TransferService } from '../../services/transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  sourceAccountId: number;
  targetAccountId: number;
  amount: number;
  message: string;

  constructor(private transferService: TransferService) { }

  onTransfer(): void {
    this.transferService.transferFunds(this.sourceAccountId, this.targetAccountId, this.amount)
      .subscribe(
        res => this.message = 'Transfer successful!',
        err => this.message = `Error: ${err.error}`
      );
  }
}