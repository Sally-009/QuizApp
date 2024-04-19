import { Component } from '@angular/core';
import { UserListComponent } from '../../components/user-list/user-list.component';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [UserListComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

}
