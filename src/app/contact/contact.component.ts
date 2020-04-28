import { Component, OnInit, Input } from '@angular/core';
import { ContactModule } from './contact.module';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
