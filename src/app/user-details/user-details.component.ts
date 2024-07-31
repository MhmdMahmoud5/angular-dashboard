import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const userId = +params['id'];
      this.fetchUserDetails(userId);
    });
  }

  fetchUserDetails(id: number) {
    this.userService.getUserDetails(id).subscribe((response: any) => {
      this.user = response.data;
    });
  }

  navigateBack() {
    this.router.navigate(['/']);
  }
}
