import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
    constructor(@Inject(DOCUMENT) private document: Document) { }

    wiredIn() {
      this.document.location.href = 'https://stackoverflow.com';
    }

    safeCampus() {
      this.document.location.href = 'https://stackoverflow.com';
    }
}
