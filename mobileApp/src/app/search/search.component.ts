import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  sub: any;
  constructor(private router: Router, public activatedRoute: ActivatedRoute) {}
  months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];
  date: number = 1;
  month: string = 'JAN';
  ngOnInit() {
    // this.sub = this.activatedRoute.queryParams.subscribe((params) => {
    //   console.log(params['page'])
    // });
  }
  home() {
    this.router.navigate(['/login']);
  }
  search() {
    this.router.navigate(['/result'], { queryParams:{date:this.date,month:this.month}});
  }
}
