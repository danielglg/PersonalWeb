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
        label: 'About',
        routerLink: ['/about']
      },
      {
        label: 'CV',
        routerLink: ['/cv']
      },
      {
        label: 'Projects',
        items: [
          {
            label: 'Payments',
            routerLink: ['/projects/payments'],
            items: [
              {
                label: 'EMV',
                routerLink: ['/projects/payments/emv']
              },
              {
                label: 'Acquiring',
                routerLink: ['/projects/payments/acquiring']
              }
            ]
          },
          {
            label: 'Networks',
            routerLink: ['/projects/networks'],
            items: [
              {
                label: 'PCRF',
                routerLink: ['/projects/networks/pcrf']
              }
            ]
          },
          {
            label: 'Video',
            routerLink: ['/projects/video'],
            items: [
              {
                label: 'Personalization Platform',
                routerLink: ['/projects/video/personalization']
              },
              {
                label: 'HEVC Streams',
                routerLink: ['/projects/video/hevc']
              }
            ]
          },
          {
            label: 'Embedded systems',
            routerLink: ['/projects/embedded']
          },
          {
            label: 'Supervisory control and data acquisition',
            routerLink: ['/projects/scada']
          },
          {
            label: 'Others',
            routerLink: ['/projects/others']
          }
        ]
      },
      {
        label: 'Contact',
        routerLink: ['/contact']
      }
  ];
  }

}
