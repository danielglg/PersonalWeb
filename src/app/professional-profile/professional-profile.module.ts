import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TableModule} from 'primeng/table';

import { ProfessionalProfileComponent } from './professional-profile.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { LanguagesComponent } from './languages/languages.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [ProfessionalProfileComponent, ProfessionalExperienceComponent, LanguagesComponent, EducationComponent],
  imports: [
    CommonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    SplitButtonModule,
    TableModule
  ],
  exports: [
    ProfessionalProfileComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProfessionalProfileModule { }
