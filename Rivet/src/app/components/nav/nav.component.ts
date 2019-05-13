import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['../components.component.scss', '../../side-nav/side-nav.component.scss']
})
export class NavComponent implements OnInit {
    isTs = false;

  sideNavConfig = {
    expandableObj: [
      {
        title: 'Material Components',
        links: [
          { name: 'Checkboxes', path: '/components', section: 'checkbox' },
          { name: 'Dialog', path: '/components', section: 'dialog' },
          { name: 'Dropdowns', path: '/components', section: 'dropdown' },
          { name: 'Tables', path: '/components', section: 'table' },
          { name: 'Tabs', path: '/components', section: 'tab' },
          { name: 'Text Inputs', path: '/components', section: 'matInput' }
        ]
      },
      {
        title: 'Rivet Components',
        links: [
          { name: 'Buttons', path: '/components', section: 'button' },
          { name: 'Expansion Panel', path: '/components', section: 'expansion' },
          { name: 'Navigation', path: '/components', section: 'nav' },
          { name: 'Text Areas', path: '/components', section: 'txtArea' },
          { name: 'Custom Text Inputs', path: '/components', section: 'rvtInput' }
        ]
      }
    ],
    numberedObj: [
      {
        label: '1',
        title: 'Design',
        path: '/design',
        links: [
          { name: 'Icons', path: '/design', section: 'icon' },
          { name: 'Font Styles', path: '/design', section: 'font' },
          { name: 'Colors', path: '/design', section: 'color' }
        ]
      },
      {
        label: '2',
        title: 'Accessibility',
        path: '/accessibility',
        links: []
      },
      {
        label: '3',
        title: 'Changelog',
        path: '/changelog',
        links: [
          { name: 'Versions', path: '/changelog', section: 'version' },
          { name: 'Roadmap', path: '/changelog', section: 'roadmap' }
        ]
      }
    ]
  };

  navLinks = [
    { label: 'Home', path: '#' },
    { label: 'Components', path: '#' },
    { label: 'Design', path: '#' },
    { label: 'Accessibility', path: '#' },
    { label: 'Changelog', path: '#' }
  ];

  expand(section) {
    section.expanded = !section.expanded;
  }

  constructor() {}

  ngOnInit() {}
}
