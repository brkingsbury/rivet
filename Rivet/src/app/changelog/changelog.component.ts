import { Component, OnInit } from '@angular/core';
import { versions } from './versions';

@Component({
    selector: 'app-changelog',
    templateUrl: './changelog.component.html',
    styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent implements OnInit {
    versions = versions;

    constructor() { }

    ngOnInit() {
    }

}
