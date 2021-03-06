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
      { field: 'date', header: 'Date', width: '8%' },
      { field: 'timespan', header: 'Duration', width: '8%' },
      { field: 'title', header: 'Name', width: '42%' },
      { field: 'provider', header: 'Provider', width: '32%' },
      { field: 'category', header: 'Category', width: '10%' }
    ];

    this.profileService.getSoftwareEngineeringSkills()
    .subscribe(resp => {
        this.softwareEngSkills = resp;
      }
    );

  }

  showModalDialog() {
    this.displayModal = true;
  }

  getSkillsByLevel(skillCategory: SkillCategory , level: string ) {
    return skillCategory.skills.filter(skill => skill.level === level);
  }

}
