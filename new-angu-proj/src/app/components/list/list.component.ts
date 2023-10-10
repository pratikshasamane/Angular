import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/services/users-service.service';
import { Users } from 'src/app/users';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public users: Users[];
  public searchResult: Users[];

  constructor(
    private _userService: UsersServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this._userService.getUser().subscribe(
      (data: Users[]) => {
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteUser(id: number) {
    this._userService.deleteUser(id).subscribe(
      (data) => {
        this.router.navigate(['/']);
        console.log('User deleted successfully', data);
        this.users = this.users.filter((user) => user._id !== id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  doUpdate(user: Users) {
    this.router.navigate([`/createUpdate/${user._id}`]);
  }

  searchValue: String = '';

  doSearch(searchValue: string) {
    this._userService.searchByEmail(searchValue).subscribe(
      (data: Users[]) => {
        this.searchResult = data;
        console.log(this.searchResult);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSearchInputChange(inputValue: string) {
    if (!inputValue) {
      // Display default list when search input is empty
      this.searchResult = [];
    }
  }
  shouldDisplayDefaultList(): boolean {
    // Return true if the search input is empty or if the search result is empty
    return !this.searchResult || Object.keys(this.searchResult).length === 0;
  }
}
