import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-video-hevc',
  templateUrl: './video-hevc.component.html',
  styleUrls: ['./video-hevc.component.scss', '../../../assets/common_styles/projects.scss'],
})
export class VideoHevcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert("The webpage you are accessing is still under development; however you are allowed to see ongoing work.");
  }
}