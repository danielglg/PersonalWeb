import { Injectable } from "@angular/core";
import { ModelAdapter } from "../model-adapter";

export class Course {
    constructor(
        public title: string,
        public date: number,
        public timespan: string,
        public provider: string,
        public category: string
      ) {}
}

@Injectable({
    providedIn: 'root'
  })
  export class CourseAdapter implements ModelAdapter<Course> {
    adapt(object: any): Course {
      return new Course(
        object.title,
        object.date,
        object.timespan,
        object.provider,
        object.category
      );
    }
  }
