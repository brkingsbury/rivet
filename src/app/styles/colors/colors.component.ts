import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['../styles.component.scss']
})
export class ColorsComponent implements OnInit {
  newColors = {
    colorGroup: [
      {
        title: 'Primary Colors',
        colors: [
          {
            name: 'Primary',
            var: '--rvt-color-primary',
            use: 'Used to draw the users attention to an action or section'
          },
          { name: 'Primary - Light', var: '--rvt-color-primary-light', color: 'hsl(249, 40%, 63%)', use: '' },
          { name: 'Primary - Dark', var: '--rvt-color-primary-dark', color: 'hsl(241, 44%, 28%)', use: '' },
          { name: 'Accent', var: '--rvt-color-accent', use: 'Designating where the user is / Current Location' }
        ]
      },
      {
        title: 'Text Colors',
        colors: [
          { name: 'Text', var: '--rvt-color-text', use: 'Text on light backgrounds' },
          { name: 'Text - Contrast', var: '--rvt-color-text-contrast', use: 'Text on dark backgrounds' },
          { name: 'Text - Label', var: '--rvt-color-text-label', use: 'Form labels' },
          { name: 'Text - Disabled', var: '--rvt-color-text-disabled', use: 'Disabled Text' },
          { name: 'Invalid', var: '--rvt-color-invalid', use: 'Invalid text such as inputs' }
        ]
      },
      {
        title: 'Neutral Colors',
        colors: [
          { name: 'Neutral Light', var: '--rvt-color-neutral-light', use: 'Background' },
          { name: 'Neutral 1', var: '--rvt-color-neutral-1', use: '' },
          { name: 'Neutral 2', var: '--rvt-color-neutral-2', use: '' },
          { name: 'Neutral 3', var: '--rvt-color-neutral-3', use: '' },
          { name: 'Neutral 4', var: '--rvt-color-neutral-4', use: '' },
          { name: 'Neutral 5', var: '--rvt-color-neutral-5', use: '' },
          { name: 'Neutral 6', var: '--rvt-color-neutral-6', use: '' },
          { name: 'Neutral 7', var: '--rvt-color-neutral-7', use: '' },
          { name: 'Neutral Dark', var: '--rvt-color-neutral-dark', use: '' }
        ]
      },
      {
        title: 'Simple Data Colors',
        colors: [
          { name: 'Good', var: '--rvt-color-good', use: '' },
          { name: 'Warn', var: '--rvt-color-warn', use: '' },
          { name: 'Bad', var: '--rvt-color-bad', use: '' }
        ]
      },
      {
        title: 'Advanced Data Colors',
        colors: [
          { name: 'Data Good 1', var: '--rvt-color-data-good-1', use: '' },
          { name: 'Data Good 2', var: '--rvt-color-data-good-2', use: '' },
          { name: 'Data Warn 1', var: '--rvt-color-data-warn-1', use: '' },
          { name: 'Data Warn 2', var: '--rvt-color-data-warn-2', use: '' },
          { name: 'Data Bad', var: '--rvt-color-data-bad', use: '' },
          { name: 'Data Accent 1a', var: '--rvt-color-data-accent-1a', use: '' },
          { name: 'Data Accent 1b', var: '--rvt-color-data-accent-1b', use: '' },
          { name: 'Data Accent 2', var: '--rvt-color-data-accent-2', use: '' },
          { name: 'Data Accent 3a', var: '--rvt-color-data-accent-3a', use: '' },
          { name: 'Data Accent 3b', var: '--rvt-color-data-accent-3b', use: '' },
          { name: 'Data Accent 4a', var: '--rvt-color-data-accent-4a', use: '' },
          { name: 'Data Accent 4b', var: '--rvt-color-data-accent-4b', use: '' }
        ]
      }
    ]
  };

  // ---- Below is Deprecated ----
  colorVariables = {
    colorGroup: [
      {
        title: 'Primary Colors',
        colors: [
          {
            name: 'Primary - Light',
            var: '$rvt-primary-color-light',
            cssvar: '--rvt-primary-color-light',
            color: '#877CC7',
            info: ''
          },
          { name: 'Primary', var: '$rvt-primary-color', cssvar: '--rvt-primary-color', color: '#585096', info: '' },
          {
            name: 'Primary - Dark',
            var: '$rvt-primary-color-dark',
            cssvar: '--rvt-primary-dark',
            color: '#292868',
            info: ''
          },
          { name: 'Accent', var: '$rvt-accent-color', cssvar: '--rvt-accent-color', color: '#E7AA39', info: 'Location' }
        ]
      },
      {
        title: 'Text Colors',
        colors: [
          { name: 'White', var: '$rvt-white', cssvar: '--rvt-white', color: '#FFFFFF', info: 'Reverse Text' },
          {
            name: 'Gray 900',
            var: '$rvt-neutral-900',
            cssvar: '--rvt-neutral-900',
            color: '#192239',
            info: 'Primary Text'
          },
          { name: 'Gray 600', var: '$rvt-neutral-600', cssvar: '--rvt-neutral-600', color: '#394059', info: 'Icons' },
          { name: 'Gray 400', var: '$rvt-neutral-400', cssvar: '--rvt-neutral-400', color: '#6B7280', info: 'Inputs' },
          // tslint:disable-next-line: max-line-length
          {
            name: 'Disabled',
            var: '$rvt-disabled-text-color',
            cssvar: '--rvt-disabled-text-color',
            color: '#BCC0C9',
            info: 'Disabled text'
          },
          {
            name: 'Invalid',
            var: '$rvt-warning-color',
            cssvar: '--rvt-warning-color',
            color: '#C72929',
            info: 'Warning Messages, Invalid'
          }
        ]
      },
      {
        title: 'Neutral Colors',
        colors: [
          { name: 'White', var: '$rvt-white', cssvar: '--rvt-white', color: '#FFFFFF', info: 'Background' },
          { name: 'Gray 50', var: '$rvt-neutral-50', cssvar: '--rvt-neutral-50', color: '#F7F7F7', info: ' ' },
          {
            name: 'Gray 100',
            var: '$rvt-neutral-100',
            cssvar: '--rvt-neutral-100',
            color: '#EBEBEC',
            info: 'Menu/Divider'
          },
          { name: 'Gray 200', var: '$rvt-neutral-200', cssvar: '--rvt-neutral-200', color: '#CBCED5', info: '' },
          { name: 'Gray 300', var: '$rvt-neutral-300', cssvar: '--rvt-neutral-300', color: '#ADB3BE', info: '' },
          { name: 'Gray 400', var: '$rvt-neutral-400', cssvar: '--rvt-neutral-400', color: '#6B7280', info: 'Inputs' },
          { name: 'Gray 600', var: '$rvt-neutral-600', cssvar: '--rvt-neutral-600', color: '#394059', info: 'Icons' },
          {
            name: 'Gray 900',
            var: '$rvt-neutral-900',
            cssvar: '--rvt-neutral-900',
            color: '#192239',
            info: 'Primary Text'
          }
        ]
      },
      {
        title: 'Basic Data Colors',
        colors: [
          { name: 'Green', var: '$rvt-good-color', cssvar: '--rvt-good-color', color: '#26A54A', info: 'Good' },
          {
            name: 'Yellow',
            var: '$rvt-insufficient-color',
            cssvar: '--rvt-insufficient-color',
            color: '#F3E31D',
            info: 'Insufficient'
          },
          { name: 'Red', var: '$rvt-bad-color', cssvar: '--rvt-bad-color', color: '#C72929', info: 'Bad, Negative' }
        ]
      },
      {
        title: 'Advanced Data Colors',
        colors: [
          { name: 'data-good', var: '$rvt-data-good', cssvar: '--rvt-data-good', color: '#2CBC66', info: '' },
          {
            name: 'data-good-light',
            var: '$rvt-data-good-light',
            cssvar: '--rvt-data-good-light',
            color: '#8DAD52',
            info: ''
          },
          { name: 'data-warn', var: '$rvt-data-warn', cssvar: '--rvt-data-warn', color: '#FAC155', info: '' },
          { name: 'data-warn-dark', var: '$rvt-warn-dark', cssvar: '--rvt-warn-dark', color: '#EC6F3E', info: '' },
          { name: 'data-bad', var: '$rvt-data-bad', cssvar: '--rvt-data-bad', color: '#DD4141', info: '' },
          {
            name: 'data-accent-1',
            var: '$rvt-data-accent-1',
            cssvar: '--rvt-data-accent-1',
            color: '#3379CB',
            info: ''
          },
          {
            name: 'data-accent-1-dark',
            var: '$rvt-data-accent-1-dark',
            cssvar: '--rvt-data-accent-1-dark',
            color: '#064A66',
            info: ''
          },
          {
            name: 'data-accent-2',
            var: '$rvt-data-accent-2',
            cssvar: '--rvt-data-accent-2',
            color: '#F69943',
            info: ''
          },
          {
            name: 'data-accent-3',
            var: '$rvt-data-accent-3',
            cssvar: '--rvt-data-accent-3',
            color: '#008BA9',
            info: ''
          },
          {
            name: 'data-accent-3-dark',
            var: '$rvt-data-accent-3-dark',
            cssvar: '--rvt-data-accent-3-dark',
            color: '#006398',
            info: ''
          },
          {
            name: 'data-accent-4',
            var: '$rvt-data-accent-4',
            cssvar: '--rvt-data-accent-4',
            color: '#AC3E82',
            info: ''
          },
          {
            name: 'data-accent-4-dark',
            var: '$rvt-data-accent-4-dark',
            cssvar: '--rvt-data-accent-4-dark',
            color: '#504F8E',
            info: ''
          }
        ]
      }
    ]
  };

  constructor() {}

  ngOnInit() {}
}
