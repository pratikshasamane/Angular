import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  name = 'from login component';
  swtichcs = 'Switch Case';
  text_color = 'blue';
  show = true;

  dynamic_text_color = 'white';
  dynamic_bg_color = 'lightblue';

  updateColor() {
    this.dynamic_text_color = 'yellow';
    this.dynamic_bg_color = 'purple';
  }
  buttonClick(name: any) {
    alert(name);
  }
  getValue(name: string) {
    console.warn(name);
  }
  displayvalue = '';
  getInputValue(val: any) {
    // console.log(val);
    this.displayvalue = val;
  }
  count = 0;
  counter(type: string) {
    // console.log(this.count++);

    type == 'add' ? this.count++ : this.count--;
  }

  forloop = 'For Loop';
  users = ['pratiksha', 'ganu', 'devi', 'pihu', 'pari'];

  usersDetails = [
    {
      name: 'pihu',
      email: 'pihu@gmail.com',
    },
    { name: 'naval', email: 'naval@gmail.com' },
    { name: 'devi', email: 'devi@gmail.com' },
  ];
  usersDetailsNested = [
    {
      name: 'pihu',
      email: 'pihu@gmail.com',
      petname: ['tanya', 'nmah', 'ukshs'],
    },
    {
      name: 'naval',
      email: 'naval@gmail.com',
      petname: ['tonya', 'pilyaa', 'sonyaa'],
    },
    {
      name: 'devi',
      email: 'devi@gmail.com',
      petname: ['llks', 'sshhs', 'kksks'],
    },
  ];
}
