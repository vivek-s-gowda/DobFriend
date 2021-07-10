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
  facebook:string;
  sub: any;
  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe((params) => {
      this.component = params['page'];
      this.username = params['username'];
      if(this.component == "resultProfile")
      {
        this.username = JSON.parse(params['userInfo']).name;
        this.facebook = JSON.parse(params['userInfo']).fblink;
        console.log(this.username)
      }
      console.log(params)
    });
  }

  search() {
    this.router.navigate(['/search']);
  }

  openChat() {
    this.router.navigate(['/chat'],{queryParams:{username:this.username}});
  }
}
