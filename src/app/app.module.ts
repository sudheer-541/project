import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { TransactionComponent } from './transaction/transaction.component';
import { Routes } from '@angular/router';
import appRoutes from './routerConfig';

const routes: Routes=[
  {path: 'sender', component:SenderComponent },
  {path: 'receiver', component:ReceiverComponent },
  {path: 'transaction', component:TransactionComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SenderComponent,
    ReceiverComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
