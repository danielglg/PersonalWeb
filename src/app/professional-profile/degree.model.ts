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
    public subjects: Subject[];

    constructor(
        public data: any
      ) {
          this.subjects = data.map(
            (subject: Subject) => new Subject(subject.part, subject.title, subject.credits, subject.duration, subject.type)
          );
      }

    public toString = (): string => {
        return `Degree subjects)`;
    }
}

@Injectable({
  providedIn: 'root'
})
export class DegreeAdapter implements ModelAdapter<Degree> {
  adapt(object: any): Degree {
    return new Degree(
        object.data
    );
  }
}



