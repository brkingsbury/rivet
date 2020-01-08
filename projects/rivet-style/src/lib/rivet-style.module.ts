import { CommonModule, registerLocaleData } from '@angular/common';
import localeFrCA from '@angular/common/locales/fr-CA';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import { MaterialComponentModule } from './material-component-module';
import { RivetExpansionPanelComponent } from './rivet-expansion-panel/expansion-panel.component';
import { RivetInputComponent } from './rivet-input/rivet-input.component';
import { RivetHelperComponent } from './rivet-input-helper/rivet-input-helper.component';
import { RivetLabelComponent } from './rivet-input-label/rivet-input-label.component';
import { RivetStyleComponent } from './rivet-style.component';
import { RvtTooltipDirective } from './rivet-tooltip/rivet-tooltip.directive';
import { RivetMiniExpansionPanelComponent } from './rivet-mini-expansion-panel/rivet-mini-expansion-panel.component';
import { RivetAccordionGroupComponent } from './rivet-accordion-group/rivet-accordion-group.component';
import { RivetDrawerComponent } from './rivet-drawer/rivet-drawer.component';

registerLocaleData(localeFrCA, 'fr-CA');

@NgModule({
  imports: [CommonModule, MaterialComponentModule, FormsModule, ReactiveFormsModule],
  declarations: [
    RivetStyleComponent,
    RivetExpansionPanelComponent,
    RivetInputComponent,
    RivetHelperComponent,
    RivetLabelComponent,
    RvtTooltipDirective,
    RivetMiniExpansionPanelComponent,
    RivetAccordionGroupComponent,
    RivetDrawerComponent
  ],
  exports: [
    RivetStyleComponent,
    RivetExpansionPanelComponent,
    RivetInputComponent,
    RivetHelperComponent,
    RivetLabelComponent,
    RvtTooltipDirective,
    RivetMiniExpansionPanelComponent,
    RivetAccordionGroupComponent,
    RivetDrawerComponent
  ]
})
export class RivetStyleModule {}
