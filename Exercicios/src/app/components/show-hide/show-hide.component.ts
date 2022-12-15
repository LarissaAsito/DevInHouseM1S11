import { Component } from '@angular/core';

@Component({
  selector: 'app-show-hide',
  templateUrl: './show-hide.component.html',
  styleUrls: ['./show-hide.component.scss']
})
export class ShowHideComponent {
  showModal: boolean = false;
}
