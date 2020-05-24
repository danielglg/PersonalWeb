import { Component, OnInit } from '@angular/core';
import { ProfessionalProfileService } from '../professional-profile.service';

import { Degree, Subject } from './../degree.model'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  providers: [
    ProfessionalProfileService
  ]
})
export class EducationComponent implements OnInit {

  masterDegree: Degree;
  masterSubjects: Subject[];

  bachelorDegree: Degree;
  bachelorSubjects: Subject[];

  subjectTablecols: any[];

  constructor(private profileService: ProfessionalProfileService) {}

  ngOnInit(): void {

    this.profileService.getMasterDegree()
      .subscribe(resp => {
          this.masterDegree = resp;
          this.masterSubjects = this.masterDegree.subjects;
        }
      );

    this.profileService.getBachelorDegree()
      .subscribe(resp => {
          this.bachelorDegree = resp;
          this.bachelorSubjects = this.bachelorDegree.subjects;
        }
      );

    this.subjectTablecols = [
      { field: 'title', header: 'Subject', width: '60%' },
      { field: 'type', header: 'Type', width: '20%' },
      { field: 'credits', header: 'Credits/Time', width: '20%' }
    ];

  }

}
