import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss', '../../../assets/common_styles/projects.scss'],
})
export class OthersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("The webpage you are accessing is still under development; however you are allowed to see ongoing work.");
  }
}