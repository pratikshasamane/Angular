import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parenttochild',
  templateUrl: './parenttochild.component.html',
  styleUrls: ['./parenttochild.component.css'],
})
export class ParenttochildComponent {
  @Input() datafromparent: string = '';

  @Input() item: { Uname: string; email: string } = {
    Uname: '',
    email: '',
  };
}
