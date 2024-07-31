import { ChangeDetectionStrategy, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  currentPage = 1;
  totalPages = 0;
  isLoading = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.fetchUsers(this.currentPage);
  }

  fetchUsers(page: number) {
    this.isLoading = true;
    this.userService.getUsers(page).subscribe((response) => {
      this.users = response.data;
      this.totalPages = response.total_pages;
      this.cdr.markForCheck();
      console.log(this.users);
      this.isLoading = false;

    });
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchUsers(this.currentPage);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchUsers(this.currentPage);
    }
  }

  navigateToUserDetails(userId: number) {
    this.router.navigate(['/user', userId]);
  }

  onSearch(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value.trim();
    console.log(`Searching for user ID: ${searchTerm}`);

    if (searchTerm) {
      this.users = this.users.filter((user) => user.id.toString().includes(searchTerm));
      this.totalPages = Math.ceil(this.users.length);
      this.currentPage = 1;
      this.cdr.markForCheck();
    } else {
      this.fetchUsers(this.currentPage);
    }
  }
}
