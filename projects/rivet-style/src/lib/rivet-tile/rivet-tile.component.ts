import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'rvt-tile',
    templateUrl: './rivet-tile.component.html',
    styleUrls: ['./rivet-tile.component.scss']
})
export class RivetTileComponent implements OnInit {

    @Output() tileSelect = new EventEmitter();
    @Output() tileEdit = new EventEmitter();
    @Output() tileDelete = new EventEmitter();
    @Input() config = {
        isSelected: false,
        editText: undefined,
        deleteText: 'Are you sure you want to delete?',
        cancelBtnText: 'Cancel',
        deleteBtnText: 'Delete'
    };

    deleting = false;

    editTile() {
        this.tileEdit.emit();
    }

    selectTile() {
        this.tileSelect.emit();
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

    constructor() { }

    ngOnInit(): void { }

}
