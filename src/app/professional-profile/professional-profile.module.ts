import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {TooltipModule} from 'primeng/tooltip';
import {TabsModule} from 'primeng/tabs';
import {MessageService} from 'primeng/api';

import { ProfessionalProfileComponent } from './professional-profile.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { LanguagesComponent } from './languages/languages.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    ProfessionalProfileComponent,
    ProfessionalExperienceComponent,
    LanguagesComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    SplitButtonModule,
    TableModule,
    AccordionModule,
    DialogModule,
    ToastModule,
    TooltipModule,
    TabsModule
  ],
  exports: [
    ProfessionalProfileComponent
  ],
  providers: [
    MessageService
  ]
})
export class ProfessionalProfileModule { }
