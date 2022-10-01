import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-header-page',
  templateUrl: './portal-header-page.component.g.html',
  styleUrls: ['./portal-header-page.component.scss']
})
export class PortalHeaderPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alert(message: string): void {
    window.alert(message);
  }

}
