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
          { name: 'Checkbox', path: '/components/checkbox' },
          { name: 'Datepicker', path: '/components/datepicker' },
          { name: 'Dialog', path: '/components/dialog' },
          { name: 'Dropdowns', path: '/components/dropdown' },
          { name: 'Expansion Panel', path: '/components/expansion' },
          { name: 'Inputs', path: '/components/input' },
          { name: 'Links', path: '/components/link' },
          { name: 'Loading', path: '/components/loading' },
          { name: 'Mini Expansion Panel', path: '/components/miniexpansion' },
          { name: 'Navigation', path: '/components/nav' },
          { name: 'Radio Button', path: '/components/radio' },
          { name: 'Snackbar', path: '/components/snackbar' },
          { name: 'Slider', path: '/components/slider' },
          { name: 'Tables', path: '/components/table' },
          { name: 'Tabs', path: '/components/tab' },
          { name: 'Text Areas', path: '/components/textarea' },
          { name: 'Tooltips', path: '/components/tooltip' }
        ]
      },
      {
        title: 'Style',
        links: [
          //   { name: 'Overview', path: '/style' },
          { name: 'Persona', path: '/style/persona' },
          { name: 'Icons', path: '/style/icon' },
          { name: 'Type', path: '/style/font' },
          { name: 'Colors', path: '/style/color' }
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
