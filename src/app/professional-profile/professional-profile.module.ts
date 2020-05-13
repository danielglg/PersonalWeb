import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {SplitButtonModule} from 'primeng/splitbutton';

import { ProfessionalProfileComponent } from './professional-profile.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { LanguagesComponent } from './languages/languages.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [ProfessionalProfileComponent, ProfessionalExperienceComponent, LanguagesComponent, EducationComponent],
  imports: [
    CommonModule,
    PanelModule,
    CardModule,
    SplitButtonModule
  ],
  exports: [
    ProfessionalProfileComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProfessionalProfileModule { }
