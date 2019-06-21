import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class TopNavComponent implements OnInit {

    navLinks = [
        { label: 'Home', path: '/home' },
        { label: 'Components', path: '/components' },
        { label: 'Design', path: '/design' },
        { label: 'Accessibility', path: '/accessibility' },
        { label: 'Changelog', path: '/changelog' }
    ];

  constructor() { }

  ngOnInit() {
  }

}
