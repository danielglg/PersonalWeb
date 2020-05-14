import { Component, OnInit } from '@angular/core';
import { ProfessionalProfileModule } from './professional-profile.module';

@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.scss', '../../assets/common_styles/projects.scss']
})
export class ProfessionalProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
