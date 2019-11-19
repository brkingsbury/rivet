import { Component, NgModule } from '@angular/core';
import { MatSelect, MatFormFieldModule, MatInputModule, MatFormFieldControl } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['../components.component.scss']
})

export class DropdownComponent {
  isTsA = false;
  isTsB = false;
  dropChoices = ['One', 'Two', 'Three'];
  selected = 'Two';
}
