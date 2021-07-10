import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import data from 'src/assets/json/users.json';
import {Utilts} from '../utils'

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
  }[];
  sub: any;
  date: number;
  month: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.activatedRoute.queryParams.subscribe((params) => {
      this.date = params['date'];
      this.month = params['month'];

      this.userInfo = data.filter((item) => {
        if (
          item.dob.split('/')[0] == String(this.date) &&
          item.month == this.month
        ) {
          return item;
        }
      });
    });
  }

  home() {
    this.router.navigate(['/login']);
  }

  loadAllData() {
    this.userInfo = data;
  }

  findRandom() {
    // console.log(this.getRandomInt(0,data.length));
    this.router.navigate(['/user'], {
      queryParams: {
        page: 'resultProfile',
        userInfo: JSON.stringify(data[Utilts.getRandomInt(0,data.length)]),
      },
    });
  }

  getInfo(user) {
    this.router.navigate(['/user'], {
      queryParams: {
        page: 'resultProfile',
        userInfo: JSON.stringify(user),
      },
    });
  }
}
