import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { Users } from 'src/app/users';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css'],
})
export class CreateUpdateComponent implements OnInit {
  selectedUser: Users = {
    firstname: '',
    lastname: '',
    email: '',
    isActive: true,
  };

  constructor(
    private _userService: UsersServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  isUpdating = false;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const userId = params['id'];
      if (userId) {
        this.isUpdating = true;
        this.getUser(userId);
      }
    });
  }

  getUser(id: number) {
    this._userService.getUserById(id).subscribe(
      (data) => {
        this.selectedUser = data;
      },
      (error) => {
        console.log('Error present', error);
      }
    );
  }

  onSubmit() {
    if (this.isUpdating) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }

  updateUser() {
    this._userService.updateUser(this.selectedUser).subscribe(
      (response) => {
        console.log('User updated successfully', response);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Having errors', error);
      }
    );
  }

  createUser() {
    this._userService.createUser(this.selectedUser).subscribe(
      (response) => {
        console.log('User created successfully', response);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Having errors', error);
      }
    );
  }
}
