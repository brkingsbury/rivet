import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss']
})
export class StylesComponent implements OnInit {

    neutrals = [
        '#192239', '#394059', '#6B7280', '#ADB3BE', '#CBCED5', '#EBEBEC', '#F7F7F7'
    ];

    primary = [
        '#292868', '#585096', '#877CC7'
    ];

    accent = [
        '#E7AA39'
    ];

    data = [
        '#064A66', '#006398', '#3379CB', '#008BA9', '#2C8C66', '#8DAD52', '#FAC155',
        '#F69943', '#EC6F3E', '#DD4141', '#AC3E82', '#504F8E'
    ];

    constructor() { }

  ngOnInit() {}
}
