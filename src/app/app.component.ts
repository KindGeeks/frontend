import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kind Geeks';
  projects: Array<{ name: string, subtitle: string, description: string }> = [
    {
      name: 'Project A',
      subtitle: 'What is the scope of project A',
      description: `Notice that the card width in this example have been set to 20rem,
      otherwise it will try to fill the current container/row where the card is.`
    },
    {
      name: 'Project B',
      subtitle: 'What is the scope of project B',
      description: `Notice that the card width in this example have been set to 20rem,
      otherwise it will try to fill the current container/row where the card is.`
    },
    {
      name: 'Project C',
      subtitle: 'What is the scope of project C',
      description: `Notice that the card width in this example have been set to 20rem,
      otherwise it will try to fill the current container/row where the card is.`
    },
  ];
}
