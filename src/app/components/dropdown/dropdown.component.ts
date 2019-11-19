import { Component, NgModule } from '@angular/core';
import { MatFormFieldModule, MatFormFieldControl } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
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
