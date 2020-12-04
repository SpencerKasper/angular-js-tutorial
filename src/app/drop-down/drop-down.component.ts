import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent {
  dropDownItems: Array<string | number> = [1,2,3,4,5,6,7,8,9];
  @Input() isOpen: boolean;

  constructor() {
    this.isOpen = false;
  }

  public toggle(): void {
    console.log('Toggle before: ', this.isOpen);
    this.isOpen = !this.isOpen;
    console.log('Toggle after: ', this.isOpen);
  }

  public handleItemSelect(event: MouseEvent, item: string | number): void {
    console.log('item: ', item);
    this.toggle();
  }
}
