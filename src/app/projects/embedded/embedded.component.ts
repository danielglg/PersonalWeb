import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-embedded',
  templateUrl: './embedded.component.html',
  styleUrls: ['./embedded.component.scss', '../../../assets/common_styles/projects.scss'],
})
export class EmbeddedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("The webpage you are accessing is still under development; however you are allowed to see ongoing work.");
  }
}