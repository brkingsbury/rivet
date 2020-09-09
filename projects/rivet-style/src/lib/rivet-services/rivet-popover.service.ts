import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RivetPopoverService {
  currentPopover = '';

  trigger(id) {
    this.currentPopover = id;
    console.log(this.currentPopover);
  }
}
