import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-networks',
  templateUrl: './networks.component.html',
  styleUrls: ['./networks.component.scss', '../../../assets/common_styles/projects.scss'],
})
export class NetworksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("The webpage you are accessing is still under development; however you are allowed to see ongoing work.");
  }
}