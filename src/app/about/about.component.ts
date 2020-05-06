import { Component, OnInit } from '@angular/core';

import { ChartInfoService } from './chart-info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [ChartInfoService]
})
export class AboutComponent implements OnInit {

  dataLanguages: any;
  dataSectors: any;
  dataDevelopment: any;
  data: any;

  constructor(private chartInfoService: ChartInfoService) {

    this.dataLanguages   = this.chartInfoService.getLanguages();
    this.dataSectors     = this.chartInfoService.getSectors();
    this.dataDevelopment = this.chartInfoService.getDevelopment();
    this.data            = this.chartInfoService.getRandomData();
  }

  ngOnInit(): void {
  }

}
