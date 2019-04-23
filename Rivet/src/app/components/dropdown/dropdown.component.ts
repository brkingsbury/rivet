import { Component, OnInit, NgModule } from '@angular/core';
import { MatSelect, MatFormFieldModule, MatInputModule, MatFormFieldControl } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['../components.component.scss']
})
@NgModule({
  imports: [MatSelect, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule]
})
export class DropdownComponent implements OnInit {
  dropChoices = ['One', 'Two', 'Three'];
  selected = 'Two';

  constructor() {}

  ngOnInit() {}
}
