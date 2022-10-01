import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-function-link-page',
  templateUrl: './function-link-page.component.g.html',
  styleUrls: ['./function-link-page.component.scss']
})
export class FunctionLinkPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alert(message: string): void {
    window.alert(message);
  }

}
