import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['../styles.component.scss']
})
export class IconsComponent implements OnInit {
  alert = false;
  icons = [
    'add',
    'exclamation1',
    'arrange',
    'amount',
    'caret-down',
    'caret-left',
    'caret-right',
    'caret-up',
    'bell',
    'beginning',
    'business-admin',
    'calculator',
    'chart',
    'life-insurance',
    'help',
    'file',
    'graph',
    'family',
    'education',
    'end',
    'edit',
    'disability-insurance',
    'delete',
    'datepicker',
    'person',
    'check',
    'sync',
    'locked',
    'long-term-care-insurance',
    'purchase',
    'menu-close',
    'menu-hamburger',
    'more',
    'next',
    'pdf',
    'presentation',
    'previous',
    'resync',
    'reporteditor',
    'worddoc',
    'unlocked',
    'subtract',
    'settings',
    'search',
    'retirement',
    'reset',
    'critical-illness',
    'child',
    'clock',
    'estimate',
    'exclamation2',
    'move-down',
    'move-up',
    'star',
    'auditsearch',
    'reassignclients',
    'templates',
    'logout'
  ];

  copyText(icoInput) {
    icoInput.select();
    document.execCommand('copy');
    icoInput.setSelectionRange(0, 0);
    this.alert = icoInput;
    setTimeout(() => {
      this.alert = false;
    }, 2000);
  }

  constructor() {}

  ngOnInit() {}
}
