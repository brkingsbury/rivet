import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  @Input() isSelected = false;
  @Input() isDisabled = false;

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
    } else {
        this.tileSelect.emit();
    }

    // ? not a great pattern, but if we don't define a tileSelect event handler, then we have some default logic to handle tile selection,
    // ? else the defined handler is responsible for toggling the tile through `@Input() isSelected`. This is necessary for handling
    // ? tile selection dependent on async calls
    if (this.tileSelect.observers.length === 0) {
      this.isSelected = !this.isSelected;
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
