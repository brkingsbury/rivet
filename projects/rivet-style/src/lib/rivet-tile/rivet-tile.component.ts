import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'rvt-tile',
    templateUrl: './rivet-tile.component.html',
    styleUrls: ['./rivet-tile.component.scss']
})
export class RivetTileComponent {

    @Output() tileSelect = new EventEmitter();
    @Output() tileEdit = new EventEmitter();
    @Output() tileDelete = new EventEmitter();

    @Input() config = {
        isSelected: false,
        isDisabled: false,
        editText: undefined,
        deleteText: 'Are you sure you want to delete?',
        cancelBtnText: 'Cancel',
        deleteBtnText: 'Delete'
    };

    @Input() control: FormControl;

    deleting = false;
    editTile() {
        this.tileEdit.emit();
    }

    selectTile() {
      if (this.control && !this.control.disabled) {
        this.control.setValue(!this.control.value);
      } else {
        this.tileSelect.emit();
        this.config.isSelected = !this.config.isSelected;
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
