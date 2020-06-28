import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-payments-acquiring',
  templateUrl: './payments-acquiring.component.html',
  styleUrls: ['./payments-acquiring.component.scss', '../../../assets/common_styles/projects.scss'],
})
export class PaymentsAcquiringComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("The webpage you are accessing is still under development; however you are allowed to see ongoing work.");
  }
}