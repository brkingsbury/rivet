import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-colors',
    templateUrl: './colors.component.html',
    styleUrls: ['../design.component.scss']
})
export class ColorsComponent implements OnInit {
    colors = [
        { name: 'Primary - Light', var: '$rvt-primary-color-light', color: '#877CC7', info: '' },
        { name: 'Primary', var: '$rvt-primary-color', color: '#585096', info: '' },
        { name: 'Primary - Dark', var: '$rvt-primary-color-dark', color: '#292868', info: '' },
        { name: 'Accent', var: '$rvt-accent-color', color: '#E7AA39', info: 'Location' }
    ];

    grayColors = [
        { name: 'Gray 50', var: '$rvt-neutral-50', color: '#F7F7F7', info: ' ' },
        { name: 'Gray 100', var: '$rvt-neutral-100', color: '#EBEBEC', info: 'Menu/Divider' },
        { name: 'Gray 200', var: '$rvt-neutral-200', color: '#CBCED5', info: 'Disabled' },
        { name: 'Gray 300', var: '$rvt-neutral-300', color: '#ADB3BE', info: '' },
        { name: 'Gray 400', var: '$rvt-neutral-400', color: '#6B7280', info: 'Inputs' },
        { name: 'Gray 600', var: '$rvt-neutral-600', color: '#394059', info: 'Icons' },
        { name: 'Gray 900', var: '$rvt-neutral-900', color: '#192239', info: 'Primary Text' }
    ];

    chartColors = [
        { name: 'Green', var: '$rvt-good-color', color: '#26A54A', info: 'Good' },
        { name: 'Yellow', var: '$rvt-insufficient-color', color: '#F3E31D', info: 'Insufficient' },
        { name: 'Red', var: '$rvt-bad-color', color: '#C72929', info: 'Bad' },
    ];

    constructor() { }

    ngOnInit() {
    }

}
