import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-page',
  templateUrl: './alert-page.component.g.html',
  styleUrls: ['./alert-page.component.scss']
})
export class AlertPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alert(message: string): void {
    window.alert(message);
  }

}
