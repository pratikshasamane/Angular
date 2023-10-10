import { Component, OnInit } from '@angular/core';
import { NotesServicesService } from 'src/app/services/notes-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  name: string;
  email: string;

  constructor(private _noteservice: NotesServicesService) {}

  ngOnInit(): void {
    this._noteservice.getUser().subscribe(
      (res: any) => {
        console.log(res);

        this.name = res.name;
        this.email = res.email;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
