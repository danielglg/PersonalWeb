import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  dataLanguages: any;
  dataSectors: any;
  dataDevelopment: any;
  data: any;

  constructor() {
    this.dataLanguages = {
      labels: ['C++','Python','Java', 'Others'],
      datasets: [
          {
              data: [57, 18, 15, 10],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      };

    this.dataSectors = {
      labels: ['Video','Networks','Payments', 'Others'],
      datasets: [
          {
              data: [38.46, 15.38, 30.77, 15.38],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      };

    this.dataDevelopment = {
      labels: ['Backend','Frontend','Devops','Signal/data processing','Other'],
      datasets: [
          {
              data: [60, 10, 10, 10, 10],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      };


    this.data = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
      };
  }

  ngOnInit(): void {
  }

}
