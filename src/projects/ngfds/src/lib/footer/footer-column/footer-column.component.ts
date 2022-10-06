import { Component, OnInit, Optional } from '@angular/core';
import { FooterComponent } from '../footer.component';

@Component({
  selector: 'fds-footer-column',
  templateUrl: './footer-column.component.html',
  styleUrls: ['./footer-column.component.css']
})
export class FooterColumnComponent implements OnInit {

  constructor(
    @Optional() private parent: FooterComponent
  ) { 
    parent.columns.push(this);
  }

  ngOnInit(): void {
    parent
  }

}
