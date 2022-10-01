import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-page',
  templateUrl: './pagination-page.component.g.html',
  styleUrls: ['./pagination-page.component.scss']
})
export class PaginationPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alert(message: string): void {
    window.alert(message);
  }

}
