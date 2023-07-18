import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formapp',
  templateUrl: './formapp.component.html',
  styleUrls: ['./formapp.component.css'],
})
export class FormappComponent {
  userdata: any = {};
  displayprop = true;
  showHead() {
    this.displayprop = !this.displayprop;
  }
  getData(data: NgForm) {
    console.log(data);
    this.userdata = data;
  }
}
