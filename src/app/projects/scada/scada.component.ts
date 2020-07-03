import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-scada',
  templateUrl: './scada.component.html',
  styleUrls: ['./scada.component.scss', '../../../assets/common_styles/projects.scss'],
})
export class ScadaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("The webpage you are accessing is still under development; however you are allowed to see ongoing work.");
  }
}