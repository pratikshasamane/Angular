import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotesServicesService } from 'src/app/services/notes-services.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // template: ` <nav class="navbar navbar-expand-lg py-3">
  //   <div class="container d-flex justify-content-center">
  //     <a class="navbar-brand" href="#">
  //       <i class="fas fa-book icon-color"></i> Keep notes
  //     </a>
  //   </div>

  //   <button
  //     [routerLink]="['/login']"
  //     mat-raised-button
  //     color="primary"
  //     class="btn-link logout-btn"
  //     *ngIf="notesService.isLoggedIn()"
  //   >
  //     Logout
  //   </button>
  // </nav>`,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public router: Router,
    public notesService: NotesServicesService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem('accessToken')) {
      this.isAuthenticate = true;
    }
  }

  public isAuthenticate = false;

  profile() {
    window.location.href = '/profile';
  }
  logout_ref() {
    this.isAuthenticate = false;
    localStorage.clear();
    window.location.href = '/login';
  }
  login() {
    window.location.href = '/login';
  }
  register() {
    window.location.href = '/register';
  }
}
