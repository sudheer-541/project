import {Routes} from '@angular/router';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { TransactionComponent } from './transaction/transaction.component';
const routes:Routes=[
    {
        path:'sender',
        component: SenderComponent
    },
    {
        path: 'receiver',
        component: ReceiverComponent
    },
    {
        path: 'transaction',
        component: TransactionComponent
    }
];
export default routes;