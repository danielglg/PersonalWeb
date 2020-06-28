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
    // TODO: change alert.
    const allInfo = `Hello ${this.model.name},\nsorry, your e-mail cannot be submitted!
    The server side for mailing is not available yet,
    please send your e-mail to cuax@hotmail.es`;
    alert(allInfo);
  }

}
