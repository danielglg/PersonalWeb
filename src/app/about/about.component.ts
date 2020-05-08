import { Component, OnInit } from '@angular/core';

import { ChartInfoService } from './chart-info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [ChartInfoService]
})
export class AboutComponent implements OnInit {

  timerId: any;
  trial;

  dataLanguages: any;
  dataSectors: any;
  dataDevelopment: any;
  data: any;

  constructor(private chartInfoService: ChartInfoService) {

    this.trial = 0;

    this.dataLanguages   = this.chartInfoService.getLanguages();
    this.dataSectors     = this.chartInfoService.getSectors();
    this.dataDevelopment = this.chartInfoService.getDevelopment();
    this.data            = this.chartInfoService.getRandomData();
  }

  ngOnInit(): void {
    this.timerId = setInterval( () => {this.changeAttentionGetter()} , 3000);
  }

  changeAttentionGetter() {
    const messages = [
      'Are you interested in knowing how excellent software factories work?',
      'Have you ever wondered what is under the hood of ...',
      '...telecommunication, audiovisual, electronic or payment systems?',
      'Do global minds inspire you?'
    ];

    const text = messages[this.trial];

    this.trial++;
    this.trial = this.trial % messages.length;

    document.getElementById('attention-getter-text').innerHTML = text;
  }

}
