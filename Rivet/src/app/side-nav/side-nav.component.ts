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
          { name: 'Checkboxes', path: '/components', section: 'checkbox' },
          { name: 'Datepicker', path: '/components', section: 'datepicker' },
          { name: 'Dialog', path: '/components', section: 'dialog' },
          { name: 'Dropdowns', path: '/components', section: 'dropdown' },
          { name: 'Inputs', path: '/components', section: 'input' },
          { name: 'Radio Buttons', path: '/components', section: 'radio' },
          { name: 'Tables', path: '/components', section: 'table' },
          { name: 'Tabs', path: '/components', section: 'tab' },
          { name: 'Text Areas', path: '/components', section: 'textArea' },
          { name: 'Buttons', path: '/components', section: 'button' },
          { name: 'Expansion Panel', path: '/components', section: 'expansion' },
          { name: 'Loading', path: '/components', section: 'loading' },
          { name: 'Navigation', path: '/components', section: 'nav' }
        ]
      },
      {
        title: 'Style',
        links: [
          { name: 'Icons', path: '/style', section: 'icon' },
          { name: 'Font Styles', path: '/style', section: 'font' },
          { name: 'Color Variables', path: '/style', section: 'color' }
        ]
      },
      {
        title: 'Patterns',
        links: [{ name: 'Accessibility', path: '/patterns', section: '' }]
      },
      {
        title: 'Changelog',
        links: [
          { name: 'Roadmap', path: '/changelog', section: 'roadmap' },
          { name: 'Versions', path: '/changelog', section: 'version' }
        ]
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
