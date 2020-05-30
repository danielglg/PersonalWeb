import { Injectable } from "@angular/core";
import { ModelAdapter } from "../model-adapter";

export class Skill {
    constructor(
        public name: string,
        public level: string,
        public comment?: string
      ) {}
}

export class SkillCategory {
    public category: string;
    public skills: Skill[];

    constructor(
        category: string,
        skills: any
      ) {
          this.category = category;
          this.skills = skills.map(
            (skill: Skill) => new Skill(skill.name, skill.level, skill.comment)
          );
      }
}

@Injectable({
    providedIn: 'root'
  })
  export class SkillCategoriesAdapter implements ModelAdapter<SkillCategory> {
    adapt(object: any): SkillCategory {
      console.log(object);
      return new SkillCategory( object.category, object.skills );
    }
  }
