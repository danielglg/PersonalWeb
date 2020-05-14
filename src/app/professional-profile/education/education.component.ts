import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  cols: any[];

  constructor() { }

  ngOnInit(): void {

    this.cols = [
      { field: 'subject', header: 'Subject' },
      { field: 'category', header: 'Category' },
      { field: 'credits', header: 'Credits/Time' }
    ];
  }

}
