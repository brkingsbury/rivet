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
    'amount',
    'arrange',
    'auditsearch',
    'batch-processor',
    'beginning',
    'bell',
    'business-admin',
    'calculator',
    'caret-down',
    'caret-left',
    'caret-right',
    'caret-up',
    'chart',
    'check',
    'child',
    'clock',
    'critical-illness',
    'datepicker',
    'db-timer-tasks',
    'delete',
    'disability-insurance',
    'down-outlinearrow',
    'edit',
    'education',
    'end',
    'estimate',
    'exclamation1',
    'exclamation2',
    'family',
    'file',
    'graph',
    'help',
    'life-insurance',
    'locked',
    'logging',
    'logout',
    'long-term-care-insurance',
    'menu-close',
    'menu-hamburger',
    'more',
    'move-down',
    'move-up',
    'naviplan-activity',
    'next',
    'pdf',
    'person',
    'presentation',
    'previous',
    'purchase',
    'radio-unchecked',
    'radio-checked',
    'radio-unchecked-h',
    'radio-checked-h',
    'radio-read-only',
    'reassignclients',
    'reporteditor',
    'reset',
    'resync',
    'retirement',
    'search',
    'settings',
    'site-manager',
    'star',
    'subtract',
    'sync',
    'teams',
    'templates',
    'unlocked',
    'up-outlinearrow',
    'worddoc',
    'xml-store'
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

  constructor() { }

  ngOnInit() { }
}
