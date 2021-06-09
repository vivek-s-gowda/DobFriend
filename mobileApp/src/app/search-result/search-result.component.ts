import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  userInfo = [
    { name: 'Vivek', dob: '30/05/1998', isLiked: false },
    { name: 'Vivek', dob: '30/05/1998', isLiked: false },
    { name: 'Vivek', dob: '30/05/1998', isLiked: false },
    { name: 'Vivek', dob: '30/05/1998', isLiked: false },
    { name: 'Vivek', dob: '30/05/1998', isLiked: false },
    { name: 'Vivek', dob: '30/05/1998', isLiked: false },
  ];
  constructor(private router: Router) {}

  ngOnInit() {}

  home(){
    this.router.navigate(['/login'])
  }
}
