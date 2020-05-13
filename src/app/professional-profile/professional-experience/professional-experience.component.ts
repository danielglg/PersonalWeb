import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss']
})
export class ProfessionalExperienceComponent implements OnInit {

  amadeusItems: MenuItem[];
  ericssonItems: MenuItem[];
  nokiaItems: MenuItem[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.amadeusItems = [
      {label: 'EMV', icon: 'pi pi-refresh', routerLink: ['/projects/payments/emv']},
      {label: 'AAO', icon: 'pi pi-refresh', routerLink: ['/projects/payments/acquiring']}
    ];
    this.ericssonItems = [
      {label: 'SAPC', icon: 'pi pi-refresh', routerLink: ['/projects/networks/pcrf']},
    ];
    this.nokiaItems = [
      {label: 'VPP', icon: 'pi pi-refresh', routerLink: ['/projects/video/personalization']},
    ];
  }

  goToProjects(projectName: string) {
    if ( projectName == 'payments') {
      this.router.navigateByUrl('/projects/payments');
    }
    else if ( projectName == 'networks') {
      this.router.navigateByUrl('/projects/networks');
    }
    else if ( projectName == 'video') {
      this.router.navigateByUrl('/projects/video');
    }
}

}
