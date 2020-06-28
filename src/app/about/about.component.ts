import { Component, OnInit, OnDestroy } from '@angular/core';

import { ChartInfoService } from './chart-info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [ChartInfoService]
})
export class AboutComponent implements OnInit, OnDestroy {

  timerId: any;
  attentionCatcherIdx;

  dataLanguages: any;
  dataSectors: any;
  dataDevelopment: any;
  data: any;

  constructor(private chartInfoService: ChartInfoService) {

    this.attentionCatcherIdx = 0;

    this.dataLanguages   = this.chartInfoService.getLanguages();
    this.dataSectors     = this.chartInfoService.getSectors();
    this.dataDevelopment = this.chartInfoService.getDevelopment();
    this.data            = this.chartInfoService.getRandomData();
  }

  ngOnInit(): void {
    alert("The webpage you are accessing is still under development; however you are allowed to see ongoing work.");
    this.timerId = setInterval( () => {this.changeAttentionGetter()} , 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timerId);
  }

  changeAttentionGetter() {
    const messages = [
      'Are you interested in knowing how excellent software factories work?',
      'Have you ever wondered what is under the hood of ...',
      '...telecommunication, audiovisual, electronic or payment systems?',
      'Do global minds inspire you?'
    ];

    const text = messages[this.attentionCatcherIdx];

    this.attentionCatcherIdx++;
    this.attentionCatcherIdx = this.attentionCatcherIdx % messages.length;

    document.getElementById('attention-getter-text').innerHTML = text;
  }

}
