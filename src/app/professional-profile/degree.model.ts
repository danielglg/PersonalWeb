import { Injectable } from "@angular/core";
import { ModelAdapter } from "../model-adapter";

export class Subject {
    constructor(
        public part: number,
        public title: string,
        public credits: number,
        public duration: string,
        public type: string
      ) {}
}

export class Degree {
    public title: string;
    public entity: string;
    public centre: string;
    public subjects: Subject[];

    constructor(
      title: string,
      entity: string,
      centre: string,
      data: any
      ) {
          this.title = title;
          this.entity = entity;
          this.centre = centre;
          this.subjects = data.map(
            (subject: Subject) => new Subject(subject.part, subject.title, subject.credits, subject.duration, subject.type)
          );
      }
}

@Injectable({
  providedIn: 'root'
})
export class DegreeAdapter implements ModelAdapter<Degree> {
  adapt(object: any): Degree {
    return new Degree(
      object.title,
      object.entity,
      object.centre,
      object.data
    );
  }
}



