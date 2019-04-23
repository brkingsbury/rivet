import { Component, OnInit, Input } from '@angular/core';
import { versions } from '../changelog/versions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  versions = versions;

  constructor() {}

  ngOnInit() {}
}
