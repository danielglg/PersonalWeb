import { Component, OnInit, Input } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
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
