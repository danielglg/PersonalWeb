import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Degree, DegreeAdapter } from './degree.model'
import { Course, CourseAdapter } from './course.model'
import { SkillCategory, SkillCategoriesAdapter } from './skill-categories.model'




@Injectable()
export class ProfessionalProfileService {

  private urlMasterDegree = 'assets/data/master_degree.json';
  private urlBachelorDegree = 'assets/data/bachelor_degree.json';
  private urlCourses = 'assets/data/courses.json';
  private urlSoftwareEngineeringSkills = 'assets/data/software_engineering_tools.json';

  constructor(private httpClient: HttpClient,
              private degreeAdapter: DegreeAdapter,
              private courseAdapter: CourseAdapter,
              private skillCategoriesAdapter: SkillCategoriesAdapter)
              {}

  getMasterDegree(): Observable<Degree> {
    return this.httpClient.get<Degree>(this.urlMasterDegree)
            .pipe(
              map(response => this.degreeAdapter.adapt(response ) )
            );

  }

  getBachelorDegree(): Observable<Degree> {
    return this.httpClient.get<Degree>(this.urlBachelorDegree)
            .pipe(
              map(response => this.degreeAdapter.adapt(response ) )
            );

  }

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.urlCourses)
            .pipe(
              map( (response: any[]) => response.map( item => this.courseAdapter.adapt(item) ) )
            );

  }

  getSoftwareEngineeringSkills(): Observable<SkillCategory[]> {
    return this.httpClient.get<SkillCategory[]>(this.urlSoftwareEngineeringSkills)
            .pipe(
              map( (response: any) => response.map( item => this.skillCategoriesAdapter.adapt(item) ) )
            );
  }

}
