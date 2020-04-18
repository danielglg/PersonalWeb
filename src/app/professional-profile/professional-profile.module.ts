import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalProfileComponent } from './professional-profile.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { LanguagesComponent } from './languages/languages.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [ProfessionalProfileComponent, ProfessionalExperienceComponent, LanguagesComponent, EducationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProfessionalProfileComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProfessionalProfileModule { }
