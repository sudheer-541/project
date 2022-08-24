import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceiverComponent } from './receiver/receiver.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {path: 'receiver',component: ReceiverComponent},
  {path: 'transaction',component: TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
