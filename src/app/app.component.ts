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
      { name: 'author', content: this.owner },
      { name: 'description', content: 'Professional website of ' + this.owner },
      { name: 'keywords', content: 'CV, curriculum, projects, portfolio' }
    ]);
  }
}
