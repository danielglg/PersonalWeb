import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-video-personalization',
  templateUrl: './video-personalization.component.html',
  styleUrls: ['./video-personalization.component.scss', '../../../assets/common_styles/projects.scss'],
})
export class VideoPersonalizationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("The webpage you are accessing is still under development; however you are allowed to see ongoing work.");
  }
}