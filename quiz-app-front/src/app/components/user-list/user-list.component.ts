import { Component } from '@angular/core';
import { FetchDataService } from '../../services/fetch-data.service';
import { DeleteUserService } from '../../services/delete-user.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  // constructor to inject the FetchDataService
  constructor(
    private fetchDataService: FetchDataService
    , private deleteUserService: DeleteUserService,
  ) {}

  // fetch the users from the service
  users: any[] = [];

  ngOnInit() {
    // fetch the users
    this.fetchDataService.getUsers().subscribe(
      (data: any[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users: ', error);
      }
    );
  }

  // delete user
  deleteUser(userID: string) {
    // send DELETE request to delete user
    this.deleteUserService.deleteUser(userID).subscribe(
      (data: any) => {
        console.log('User deleted: ', data);

        // remove the user from the list
        this.users = this.users.filter((user) => user._id !== userID);
      },
      (error) => {
        console.error('Error deleting user: ', error);
      }
    );
  }
}
