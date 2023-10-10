import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-angular-app';
  /* Data to child  */
  datatoChild: string = ' Im coming from parent side (parent to child)';

  userDetails: any = [
    {
      Uname: 'broce',
      email: 'broce@test.com',
    },
    {
      Uname: 'jhon',
      email: 'jhon@test.com',
    },
    {
      Uname: 'peter',
      email: 'peter@test.com',
    },
    {
      Uname: 'alisa',
      email: 'anc@test.com',
    },
  ];

  updatedata(item: string) {
    console.log(item);
  }
}
