import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  newUser(event: any) {
    event.preventDefault();
    this.router.navigate(['/createUpdate']);
  }

  backtoHome(event: any) {
    event.preventDefault();
    this.router.navigate(['/']);
  }
}
