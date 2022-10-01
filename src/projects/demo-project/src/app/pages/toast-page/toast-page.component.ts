import { Component, OnInit } from '@angular/core';
import { FdsToastService } from 'projects/fds-components/src/lib/toast/toast.service';

@Component({
  selector: 'app-toast-page',
  templateUrl: './toast-page.component.g.html',
  styleUrls: ['./toast-page.component.scss']
})
export class ToastPageComponent implements OnInit {

  constructor(public toastService: FdsToastService) { }

  ngOnInit(): void {
  }

}
