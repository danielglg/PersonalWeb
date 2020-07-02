import { Component, OnInit } from '@angular/core';
import { ProfessionalProfileModule } from './professional-profile.module';

import { ProfessionalProfileService } from './professional-profile.service';

import { Course } from './course.model'
import { SkillCategory } from './skill-categories.model'

@Component({
  selector: 'app-professional-profile',
  templateUrl: './professional-profile.component.html',
  styleUrls: ['./professional-profile.component.scss', '../../assets/common_styles/projects.scss'],
  providers: [
    ProfessionalProfileService
  ]
})
export class ProfessionalProfileComponent implements OnInit {

  courses: Course[];
  courseTablecols: any[];

  softwareEngSkills: SkillCategory[];

  displayModal: boolean;

  constructor(private profileService: ProfessionalProfileService) { }

  ngOnInit(): void {

    this.profileService.getCourses()
      .subscribe(resp => {
          this.courses = resp;
        }
      );

    this.courseTablecols = [
      { field: 'date', header: 'Date', width: '10%' },
      { field: 'timespan', header: 'Duration', width: '10%' },
      { field: 'title', header: 'Name', width: '45%' },
      { field: 'provider', header: 'Provider', width: '35%' }
    ];

    this.profileService.getSoftwareEngineeringSkills()
    .subscribe(resp => {
        this.softwareEngSkills = resp;
      }
    );

    alert("The webpage you are accessing is still under development; however you are allowed to see ongoing work.");

  }

  showModalDialog() {
    this.displayModal = true;
  }

}
