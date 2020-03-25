import { CommonModule, registerLocaleData } from '@angular/common';
import localeFrCA from '@angular/common/locales/fr-CA';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MaterialComponentModule } from './material-component-module';
import { RivetAccordionGroupComponent } from './rivet-accordion-group/rivet-accordion-group.component';
import { RivetDrawerComponent } from './rivet-drawer/rivet-drawer.component';
import { RivetExpansionPanelComponent } from './rivet-expansion-panel/expansion-panel.component';
import { RivetHelperComponent } from './rivet-input-helper/rivet-input-helper.component';
import { RivetLabelComponent } from './rivet-input-label/rivet-input-label.component';
import { RivetInputComponent } from './rivet-input/rivet-input.component';
import { RivetMiniExpansionPanelComponent } from './rivet-mini-expansion-panel/rivet-mini-expansion-panel.component';
import { RivetStyleComponent } from './rivet-style.component';
import { RivetTileComponent } from './rivet-tile/rivet-tile.component';
import { RivetSlideToggleComponent } from './rivet-toggle/rivet-slide-toggle.component';
import { RvtTooltipDirective } from './rivet-tooltip/rivet-tooltip.directive';

registerLocaleData(localeFrCA, 'fr-CA');

@NgModule({
    imports: [CommonModule, MaterialComponentModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule],
    declarations: [
        RivetStyleComponent,
        RivetExpansionPanelComponent,
        RivetInputComponent,
        RivetHelperComponent,
        RivetLabelComponent,
        RvtTooltipDirective,
        RivetMiniExpansionPanelComponent,
        RivetAccordionGroupComponent,
        RivetDrawerComponent,
        RivetSlideToggleComponent,
        RivetTileComponent
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
        RivetDrawerComponent,
        RivetSlideToggleComponent,
        RivetTileComponent
    ]
})
export class RivetStyleModule { }
