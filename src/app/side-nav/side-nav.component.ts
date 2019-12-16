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
        title: 'Getting Started',
        links: [
          { name: 'Designer Toolkit', path: '/getting-started/designers' },
          { name: 'Developer Toolkit', path: '/getting-started/developers' },
          { name: 'Contribute', path: '/getting-started/contribute' }
        ]
      },
      {
        title: 'Components',
        links: [
          { name: 'Buttons', path: '/components/button' },
          { name: 'Checkbox', path: '/components/checkbox' },
          { name: 'Datepicker', path: '/components/datepicker' },
          { name: 'Dialog', path: '/components/dialog' },
          { name: 'Drawers', path: '/components/drawer' },
          { name: 'Dropdowns', path: '/components/dropdown' },
          { name: 'Expansion Panel', path: '/components/expansion' },
          { name: 'Inputs', path: '/components/input' },
          { name: 'Links', path: '/components/link' },
          { name: 'Loading', path: '/components/loading' },
          { name: 'Mini Expansion Panel', path: '/components/miniexpansion' },
        //   { name: 'Navigation', path: '/components/nav' },
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
          { name: 'Persona', path: '/style/persona' },
          { name: 'Icons', path: '/style/icon' },
          { name: 'Type', path: '/style/font' },
          { name: 'Colors', path: '/style/color' }
        ]
      },
      {
        title: 'Patterns',
        links: [
          { name: 'Accessibility', path: '/patterns/a11y' },
          { name: 'Performance', path: '/patterns/performance' },
          { name: 'Structure', path: '/patterns/structure' },
          { name: 'Validation & Errors', path: '/patterns/errors' }
        ]
      },
      {
        title: 'Changelog',
        links: [
          { name: 'Versions', path: '/changelog/versions' },
          { name: 'Roadmap', path: '/changelog/roadmap' }
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

  constructor() { }

  ngOnInit() { }
}
