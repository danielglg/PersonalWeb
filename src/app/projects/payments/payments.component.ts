import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss', '../../../assets/common_styles/projects.scss'],
})
export class PaymentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("The webpage you are accessing is still under development; however you are allowed to see ongoing work.");
  }
}