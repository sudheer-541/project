import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  alertSuccess(){
    Swal.fire("Transaction Successful","","success")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
