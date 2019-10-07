import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Output() cursorStatus = new EventEmitter();

  sideNavConfig = {
    expandableObj: [
      {
        title: 'Components',
        links: [
          //   { name: 'Overview', path: '/components' },
          { name: 'Buttons', path: '/components/button' },
          { name: 'Links', path: '/components/link' },
          { name: 'Inputs', path: '/components/input' },
          { name: 'Dropdowns', path: '/components/dropdown' },
          { name: 'Radio Button', path: '/components/radio' },
          { name: 'Checkbox', path: '/components/checkbox' },
          { name: 'Datepicker', path: '/components/datepicker' },
          { name: 'Dialog', path: '/components/dialog' },
          { name: 'Tables', path: '/components/table' },
          { name: 'Tabs', path: '/components/tab' },
          { name: 'Snackbar', path: '/components/snackbar' },
          { name: 'Text Areas', path: '/components/textarea' },
          { name: 'Slider', path: '/components/slider' },
          { name: 'Expansion Panel', path: '/components/expansion' },
          { name: 'Mini Expansion Panel', path: '/components/miniexpansion' },
          { name: 'Loading', path: '/components/loading' },
          { name: 'Navigation', path: '/components/nav' }
        ]
      },
      {
        title: 'Style',
        links: [
          //   { name: 'Overview', path: '/style' },
          { name: 'Persona', path: '/style/persona' },
          { name: 'Icons', path: '/style/icon' },
          { name: 'Font Styles', path: '/style/font' },
          { name: 'Color Variables', path: '/style/color' }
        ]
      },
      {
        title: 'Patterns',
        links: [
          //   { name: 'Overview', path: '/patterns' },
          { name: 'Accessibility', path: '/patterns/a11y' },
          { name: 'Performance', path: '/patterns/performance' },
          { name: 'Structure', path: '/patterns/structure' }
        ]
      },
      {
        title: 'Changelog',
        links: [{ name: 'Roadmap', path: '/changelog/roadmap' }, { name: 'Versions', path: '/changelog/versions' }]
      }
    ]
  };

  expand(section) {
    section.expanded = !section.expanded;
  }

  toggleCursor() {
    this.cursorStatus.emit();
  }

  constructor() {}

  ngOnInit() {}
}
