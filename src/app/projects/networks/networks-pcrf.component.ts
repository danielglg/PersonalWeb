import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-networks-pcrf',
  templateUrl: './networks-pcrf.component.html',
  styleUrls: ['./networks-pcrf.component.scss', '../../../assets/common_styles/projects.scss'],
})
export class NetworksPcrfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("The webpage you are accessing is still under development; however you are allowed to see ongoing work.");
  }
}