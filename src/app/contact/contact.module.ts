import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ContactFormComponent } from './contact-form/contact-form.component';

import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ContactComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ContactModule { }
