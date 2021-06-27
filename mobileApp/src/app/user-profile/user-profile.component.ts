import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  username: string;
  component: string;
  sub: any;
  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe((params) => {
      this.component = params['page'];
      this.username = params['username'];
    });
  }

  search() {
    this.router.navigate(['/search']);
  }
}
