import { EmitterVisitorContext } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrls: ['./childtoparent.component.css'],
})
export class ChildtoparentComponent {
  @Output() updatedatafromchild = new EventEmitter<string>();
}
