import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['../styles.component.scss']
})
export class ColorsComponent implements OnInit {
  colorVariables = {
    colorGroup: [
      {
        title: 'Primary Colors',
        colors: [
          { name: 'Primary - Light', var: '$rvt-primary-color-light', cssvar: '--rvt-primary-color-light', color: '#877CC7', info: '' },
          { name: 'Primary', var: '$rvt-primary-color', cssvar: '--rvt-primary-color', color: '#585096', info: '' },
          { name: 'Primary - Dark', var: '$rvt-primary-color-dark', cssvar: '--rvt-primary-dark', color: '#292868', info: '' },
          { name: 'Accent', var: '$rvt-accent-color', cssvar: '--rvt-accent-color', color: '#E7AA39', info: 'Location' }
        ]
      },
      {
        title: 'Text Colors',
        colors: [
          { name: 'White', var: '$rvt-white', cssvar: '--rvt-white', color: '#FFFFFF', info: 'Reverse Text' },
          { name: 'Gray 900', var: '$rvt-neutral-900', cssvar: '--rvt-neutral-900', color: '#192239', info: 'Primary Text' },
          { name: 'Gray 600', var: '$rvt-neutral-600', cssvar: '--rvt-neutral-600', color: '#394059', info: 'Icons' },
          { name: 'Gray 400', var: '$rvt-neutral-400', cssvar: '--rvt-neutral-400', color: '#6B7280', info: 'Inputs' },
          { name: 'Disabled', var: '$rvt-disabled-text-color', cssvar: '--rvt-disabled-text-color', color: '#BCC0C9', info: 'Disabled text' },
          { name: 'Invalid', var: '$rvt-warning-color', cssvar: '--rvt-warning-color', color: '#C72929', info: 'Warning Messages, Invalid' }
        ]
      },
      {
        title: 'Neutral Colors',
        colors: [
          { name: 'White', var: '$rvt-white', cssvar: '--rvt-white', color: '#FFFFFF', info: 'Background' },
          { name: 'Gray 50', var: '$rvt-neutral-50', cssvar: '--rvt-neutral-50', color: '#F7F7F7', info: ' ' },
          { name: 'Gray 100', var: '$rvt-neutral-100', cssvar: '--rvt-neutral-100', color: '#EBEBEC', info: 'Menu/Divider' },
          { name: 'Gray 200', var: '$rvt-neutral-200', cssvar: '--rvt-neutral-200', color: '#CBCED5', info: '' },
          { name: 'Gray 300', var: '$rvt-neutral-300', cssvar: '--rvt-neutral-300', color: '#ADB3BE', info: '' },
          { name: 'Gray 400', var: '$rvt-neutral-400', cssvar: '--rvt-neutral-400', color: '#6B7280', info: 'Inputs' },
          { name: 'Gray 600', var: '$rvt-neutral-600', cssvar: '--rvt-neutral-600', color: '#394059', info: 'Icons' },
          { name: 'Gray 900', var: '$rvt-neutral-900', cssvar: '--rvt-neutral-900', color: '#192239', info: 'Primary Text' }
        ]
      },
      {
        title: 'Basic Data Colors',
        colors: [
          { name: 'Green', var: '$rvt-good-color', cssvar: '--rvt-good-color', color: '#26A54A', info: 'Good' },
          { name: 'Yellow', var: '$rvt-insufficient-color', cssvar: '--rvt-insufficient-color', color: '#F3E31D', info: 'Insufficient' },
          { name: 'Red', var: '$rvt-bad-color', cssvar: '--rvt-bad-color', color: '#C72929', info: 'Bad, Negative' }
        ]
      },
      {
        title: 'Advanced Data Colors',
        colors: [
          { name: 'data-good', var: '$rvt-data-good', cssvar: '--rvt-data-good', color: '#2CBC66', info: '' },
          { name: 'data-good-light', var: '$rvt-data-good-light', cssvar: '--rvt-data-good-light', color: '#8DAD52', info: '' },
          { name: 'data-warn', var: '$rvt-data-warn', cssvar: '--rvt-data-warn', color: '#FAC155', info: '' },
          { name: 'data-warn-dark', var: '$rvt-warn-dark', cssvar: '--rvt-warn-dark', color: '#EC6F3E', info: '' },
          { name: 'data-bad', var: '$rvt-data-bad', cssvar: '--rvt-data-bad', color: '#DD4141', info: '' },
          { name: 'data-accent-1', var: '$rvt-data-accent-1', cssvar: '--rvt-data-accent-1', color: '#3379CB', info: '' },
          { name: 'data-accent-1-dark', var: '$rvt-data-accent-1-dark', cssvar: '--rvt-data-accent-1-dark', color: '#064A66', info: '' },
          { name: 'data-accent-2', var: '$rvt-data-accent-2', cssvar: '--rvt-data-accent-2', color: '#F69943', info: '' },
          { name: 'data-accent-3', var: '$rvt-data-accent-3', cssvar: '--rvt-data-accent-3', color: '#008BA9', info: '' },
          { name: 'data-accent-3-dark', var: '$rvt-data-accent-3-dark', cssvar: '--rvt-data-accent-3-dark', color: '#006398', info: '' },
          { name: 'data-accent-4', var: '$rvt-data-accent-4', cssvar: '--rvt-data-accent-4', color: '#AC3E82', info: '' },
          { name: 'data-accent-4-dark', var: '$rvt-data-accent-4-dark', cssvar: '--rvt-data-accent-4-dark', color: '#504F8E', info: '' }
        ]
      }
    ]
  };

  constructor() {}

  ngOnInit() {}
}
