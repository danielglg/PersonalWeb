import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {CardModule} from 'primeng/card';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    CardModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
