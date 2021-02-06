import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  owner = 'Daniel Gómez-Lobo García';

  public constructor(private titleService: Title, private meta: Meta ) {
    this.setTitle(this.owner);
    this.setMeta();
  }

  private setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  private setMeta() {
    this.meta.addTags([
      // Page
      { name: 'language', content: 'en' },
      { name: 'lang', content: 'en' },

      // Summary
      { name: 'title', content: this.owner + '- Professional Website' },
      { name: 'keywords', content: 'engineer, developer, software, professional, CV, curriculum, portfolio, projects, telecommunication, payment, video, sound, embedded, systems, agile' },
      { name: 'description', content: 'Professional website of ' + this.owner + '. Experience in telecommunications, payments, video, sound, embedded systems and agile methodologies.' },
      { name: 'subject', content: 'software engineering, CV, portfolio, profile, curriculum, projects' },
      { name: 'classification', content: 'software engineer, telecommunication, payment, video, embedded, systems, agile' },


      // Authoring
      { name: 'author', content: this.owner },
      { name: 'designer', content: this.owner },
      { name: 'publisher', content: this.owner },
      { name: 'copyright', content: this.owner },
      { name: 'organization', content: this.owner },

      // Audience
      { name: 'distribution', content: 'global' },
      { name: 'rating', content: 'general' },

      // Social Networks
      { name: 'og:title', content: this.owner + ' - Professional Website' },
      { name: 'og:url', content: 'https://danielglg.github.io/PersonalWeb/' },
      { name: 'og:image', content: 'https://danielglg.github.io/PersonalWeb/assets/img/Daniel_Gomez_Lobo_Garcia.jpg' },
      { name: 'og:type', content: 'website' },
      { name: 'og:description', content: 'Professional website of ' + this.owner + '. Experience in telecommunications, payments, video, sound, embedded systems and agile methodologies.' },

    ]);
  }
}
