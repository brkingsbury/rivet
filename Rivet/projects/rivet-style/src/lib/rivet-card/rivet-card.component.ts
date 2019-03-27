import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'advicent-rivet-card',
  templateUrl: './rivet-card.component.html',
  styleUrls: ['./rivet-card.component.css']
})
export class RivetCardComponent implements OnInit {
  @Input() header: string;
  @Input() footer: string;

  constructor() { }

  ngOnInit() {
  }

}
