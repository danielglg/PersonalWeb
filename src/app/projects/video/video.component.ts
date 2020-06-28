import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss', '../../../assets/common_styles/projects.scss'],
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("The webpage you are accessing is still under development; however you are allowed to see ongoing work.");
  }
}