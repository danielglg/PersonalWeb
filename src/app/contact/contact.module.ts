import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    ToastModule
  ],
  providers: [MessageService],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
