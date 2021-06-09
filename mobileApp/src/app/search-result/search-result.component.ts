import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from 'src/assets/json/users.json';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  userInfo: {
    name: string;
    dob: string;
    fblink: string;
    instaid: string;
    month: string;
    gender: string;
  }[] = data;
  constructor(private router: Router) {}

  ngOnInit() {}

  home() {
    this.router.navigate(['/login']);
  }
}
