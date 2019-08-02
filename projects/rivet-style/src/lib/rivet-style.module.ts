import { CommonModule, registerLocaleData } from '@angular/common';
import localeFrCA from '@angular/common/locales/fr-CA';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import { MaterialComponentModule } from './material-component-module';
import { RivetExpansionPanelComponent } from './rivet-expansion-panel/expansion-panel.component';
import { RivetStyleComponent } from './rivet-style.component';

registerLocaleData(localeFrCA, 'fr-CA');

@NgModule({
  imports: [CommonModule, MaterialComponentModule, FormsModule, ReactiveFormsModule],
  declarations: [RivetStyleComponent, RivetExpansionPanelComponent],
  exports: [RivetStyleComponent, RivetExpansionPanelComponent]
})
export class RivetStyleModule {}
