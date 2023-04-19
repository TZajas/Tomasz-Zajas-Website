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
      desc : "Android application that allows user to alert previously added contacts with a pre-set message and current location with the click of a button. Made using Java and Android Studio.",
      vid : "https://www.youtube.com/embed/G5pLbGvhgb0"
    }

    wired_in = {
      name : "WiredIn",
      desc : "LinkedIn like application specially catered for software engineers. Made as part of a group project using PHP, MySQL, and Bootstrap.",
      vid : "https://www.youtube.com/watch?v=LVlDSzbrH5M"
    }

    dogs_ceo = {
      name : "Dogs CEO API",
      desc : "Angular project that demonstrates understanding of APIs, HTTPS requests and, the Angular Framework.",
      vid : "https://www.youtube.com/watch?v=LVlDSzbrH5M"
    }

    qca_calc = {
      name : "QCA Calculator",
      desc : "Angular application which calculates grades based on the University of Limerick's (QCA) Quality Credit Average system.",
      vid : "https://www.youtube.com/embed/FWnLsB3XRBo",
      web_link : "https://qca-calculator.web.app/grades"
    }


    wired_in_link() {
      this.document.location.href = 'https://github.com/Dawid33/CS4116'
    }

    safe_campus_link() {
      this.document.location.href = 'https://github.com/TZajas/CS4084-App-Dev';
    }

    dogs_api_link() {
      this.document.location.href = 'https://github.com/TZajas/Dogs-Ceo-API-Project';
    }

    qca_calc_link() {
      this.document.location.href = 'https://qca-calculator.web.app/grades';
    }
}
