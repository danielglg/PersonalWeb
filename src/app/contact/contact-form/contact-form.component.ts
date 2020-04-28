import { Component, OnInit, Input } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  model: Message = new Message("", "", "", "");

  constructor() { }

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.sendEmail();
  }

  /**
   * Send the information introduced in the form by e-mail.
   * Only alerting for now.
   */
  sendEmail() {
    const allInfo = `Hello ${this.model.name},\nyour e-mail has been submitted!`;
    alert(allInfo);
  }

}
