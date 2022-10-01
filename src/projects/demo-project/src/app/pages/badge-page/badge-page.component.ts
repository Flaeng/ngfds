import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge-page',
  templateUrl: './badge-page.component.g.html',
  styleUrls: ['./badge-page.component.scss']
})
export class BadgePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alert(message: string): void {
    window.alert(message);
  }

}