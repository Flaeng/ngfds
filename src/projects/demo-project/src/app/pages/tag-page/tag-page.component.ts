import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.g.html',
  styleUrls: ['./tag-page.component.scss'],
})
export class TagPageComponent implements OnInit {
  ngOnInit(): void {}

  alert(message: string): void {
    window.alert(message);
  }
}
