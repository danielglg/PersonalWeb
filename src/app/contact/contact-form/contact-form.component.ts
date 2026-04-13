import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { MessageService } from 'primeng/api';
import { Message } from './message';

import { MailService } from './mail.service';

@Component({
  selector: 'app-contact-form',
  standalone: false,
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  model: Message = new Message("", "", "", "");
  submitted = false;
  isSending = false;

  constructor(
    private mailService: MailService,
    private messageService: MessageService
  ) { }

  onSubmit() {
    if (this.isSending) {
      return;
    }

    this.isSending = true;
    this.sendEmail();
  }

  /**
   * Sends by e-mail the information introduced in the form.
   */
  sendEmail() {
    this.mailService
      .sendMail(this.model)
      .pipe(finalize(() => this.isSending = false))
      .subscribe({
        next: () => {
          this.submitted = true;
          this.messageService.add({
            severity: 'success',
            summary: 'Message sent',
            detail: `Thanks ${this.model.name}, your message was sent successfully.`
          });
        },
        error: (err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Could not send message',
            detail: err?.message || 'Please try again later.'
          });
        }
      });
  }
}
