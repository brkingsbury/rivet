import { CommonModule, registerLocaleData } from '@angular/common';
import localeFrCA from '@angular/common/locales/fr-CA';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponentModule } from './material-component-module';
import { RivetCardComponent } from './rivet-card/rivet-card.component';
import { RivetCurrencyInputDirective } from './rivet-currency-input/rivet-currency-input.directive';
import { RivetExpansionPanelComponent } from './rivet-expansion-panel/expansion-panel.component';
import { RivetPercentageInputDirective } from './rivet-percentage-input/rivet-percentage-input.directive';
import { RivetStyleComponent } from './rivet-style.component';

registerLocaleData(localeFrCA, 'fr-CA');

@NgModule({
  imports: [CommonModule, MaterialComponentModule, FormsModule, ReactiveFormsModule],
  declarations: [
    RivetStyleComponent,
    RivetCardComponent,
    RivetExpansionPanelComponent,
    RivetCurrencyInputDirective,
    RivetPercentageInputDirective
  ],
  exports: [
    RivetStyleComponent,
    RivetCardComponent,
    RivetExpansionPanelComponent,
    RivetCurrencyInputDirective,
    RivetPercentageInputDirective
  ]
})
export class RivetStyleModule {}
