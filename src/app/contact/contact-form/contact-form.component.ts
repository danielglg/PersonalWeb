import { Component, OnInit, Input } from '@angular/core';
import { Message } from './message';

import { MailService } from './mail.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  model: Message = new Message("", "", "", "");

  constructor(private mailService: MailService) { }

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.sendEmail();
  }

  /**
   * Sends by e-mail the information introduced in the form.
   * TODO: does not inform the user about errors; enhance MailService and inform through UI.
   */
  sendEmail() {
    this.mailService.sendMail(this.model);

    const allInfo = `Hello ${this.model.name},
    \nyour e-mail has been submitted.
    If this process didn't find issues, you should have received an email in your inbox.`;
    alert(allInfo);
  }
}
