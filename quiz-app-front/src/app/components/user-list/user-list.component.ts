import { Component } from '@angular/core';
import { FetchDataService } from '../../pages/services/fetch-data.service';
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
  constructor(private fetchDataService: FetchDataService) {}

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
}
