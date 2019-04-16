import { CommonModule, registerLocaleData } from '@angular/common';
import localeFrCA from '@angular/common/locales/fr-CA';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentModule } from './material-component-module';
import { RivetCardComponent } from './rivet-card/rivet-card.component';
import { RivetExpansionPanelComponent } from './rivet-expansion-panel/expansion-panel.component';
import { RivetStyleComponent } from './rivet-style.component';

registerLocaleData(localeFrCA, 'fr-CA');

@NgModule({
  imports: [CommonModule, MaterialComponentModule, FormsModule, ReactiveFormsModule],
  declarations: [
    RivetStyleComponent,
    RivetCardComponent,
    RivetExpansionPanelComponent
  ],
  exports: [
    RivetStyleComponent,
    RivetCardComponent,
    RivetExpansionPanelComponent
  ]
})
export class RivetStyleModule {}
