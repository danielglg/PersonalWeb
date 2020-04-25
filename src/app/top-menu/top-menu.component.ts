import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'About'
      },
      {
        label: 'CV'
      },
      {
        label: 'Projects',
        items: [
          {
            label: 'Payments',
            items: [
              {label: 'EMV'},
              {label: 'Acquiring'}
            ]
          },
          {
            label: 'Networks',
            items: [
              {label: 'PCRF Balancer'}
            ]
          },
          {
            label: 'Video',
            items: [
              {label: 'Personalization Platform'}
            ]
          },
          {
            label: 'Embedded systems'
          }
        ]
      },
      {
        label: 'Contact'
      }
  ];
  }

}
