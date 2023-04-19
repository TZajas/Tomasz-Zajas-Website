import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  skills_first = ['Angular', 'Java', 'PHP'];
  skills_second = ['MySQL', 'C#', 'ADO'];

  about = "Hey there! My name is Tomasz Zajas and I am a 3rd year Computer Systems student at the University of Limerick. I love web technologies! Currently I am learning Django and React.";

}
