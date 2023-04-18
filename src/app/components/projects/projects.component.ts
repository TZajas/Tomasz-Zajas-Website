import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
    constructor(@Inject(DOCUMENT) private document: Document) { }

    safe_campus = {
      name : "Safe Campus",
      desc : "Android application that allows user to alert previously added contacts with a pre-set message and current location with the click of a button. Made using Java and Android Studio",
      vid : "https://www.youtube.com/embed/G5pLbGvhgb0"
    }

    wired_in = {
      name : "WiredIn",
      desc : "LinkedIn like application specially catered for software engineers. Made as part of a group project using PHP, MySQL, and Bootstrap.",
      vid : "https://www.youtube.com/watch?v=LVlDSzbrH5M"
    }

    dogs_ceo = {
      name : "Dogs CEO API",
      desc : "Angular Project that demonstrates understanding APIs and the Angular Framework",
      vid : "https://www.youtube.com/watch?v=LVlDSzbrH5M"
    }


    wiredIn() {
      this.document.location.href = 'https://github.com/Dawid33/CS4116'
    }

    safeCampus() {
      this.document.location.href = 'https://github.com/TZajas/CS4084-App-Dev';
    }

    dogsCEO() {
      this.document.location.href = 'https://github.com/TZajas/Dogs-Ceo-API-Project';
    }
}
