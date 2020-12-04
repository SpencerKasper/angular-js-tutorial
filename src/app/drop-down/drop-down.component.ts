import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent {

  @Input() isOpen: boolean;

  constructor() {
    this.isOpen = false;
  }

  public toggle(): void {
    console.log('Toggle before: ', this.isOpen);
    this.isOpen = !this.isOpen;
    console.log('Toggle after: ', this.isOpen);
  }

}
