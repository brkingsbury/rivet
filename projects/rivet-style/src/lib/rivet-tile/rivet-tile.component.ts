import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

// ? mutually exclusive tile states, hook into state for animations and classes, see:
// ? https://angular.io/guide/animations#defining-animations-and-attaching-them-to-the-html-template
// todo: export type as well
export type TileState = 'Disabled' | 'Pending' | 'Selected' | 'Unselected';

@Component({
  selector: 'rvt-tile',
  templateUrl: './rivet-tile.component.html',
  styleUrls: ['./rivet-tile.component.scss']
})
export class RivetTileComponent {

  @Input() config = {
    editText: undefined,
    cancelBtnText: 'Cancel',
    deleteBtnText: 'Delete',
    deleteText: 'Are you sure you want to delete?'
  };

  @Input() control: FormControl;
  @Input() state: TileState = 'Unselected';

  @Output() tileSelect = new EventEmitter();
  @Output() tileEdit = new EventEmitter();
  @Output() tileDelete = new EventEmitter();

  public deleting = false;

  editTile() {
    this.tileEdit.emit();
  }

  selectTile() {
    if (this.control && !this.control.disabled) {
        this.control.setValue(!this.control.value);
    }

    // ? not a great pattern, but if we don't define a tileSelect event handler, then we have some default logic to handle tile selection,
    // ? else the defined handler is responsible for toggling the tile through `@Input() isSelected`. This is necessary for handling
    // ? tile selection dependent on async calls
    if (this.tileSelect.observers.length === 0) {
      this.state = this.state === 'Selected' ? 'Unselected' : 'Selected';
    } else {
      this.tileSelect.emit();
    }
  }

  deleteTile() {
    this.deleting = true;
  }

  confirmDelete() {
    this.deleting = false;
    this.tileDelete.emit();
  }

  cancelDelete() {
    this.deleting = false;
  }
}
