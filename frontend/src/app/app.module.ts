import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { TransferService } from './services/transfer.service';

@NgModule({
  declarations: [
    AppComponent,
    TransferComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }