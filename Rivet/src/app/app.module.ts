import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponentModule, RivetStyleModule } from 'rivet-style';
import { AppComponent } from './app.component';

import { AccessibilityComponent } from './patterns/accessibility/accessibility.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ColorsComponent } from './styles/colors/colors.component';
import { ComponentsComponent } from './components/components.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DialogComponent, DialogComponentDialogComponent } from './components/dialog/dialog.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { EventPickerComponent, EventPickerDialogComponent } from './components/event-picker/event-picker.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { FontStylesComponent } from './styles/font-styles/font-styles.component';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './styles/icons/icons.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NavComponent } from './components/nav/nav.component';
import { PatternsComponent } from './patterns/patterns.component';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { StylesComponent } from './styles/styles.component';
import { TableBasicExampleComponent } from './components/tables/table-example';
import { TablesComponent } from './components/tables/tables.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TestingComponent } from './testing/testing.component';
import { TextAreasComponent } from './components/text-areas/text-areas.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'styles', component: StylesComponent },
    { path: 'components', component: ComponentsComponent },
    { path: 'changelog', component: ChangelogComponent },
    { path: 'patterns', component: PatternsComponent },
    { path: 'testing', component: TestingComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        AccessibilityComponent,
        ButtonsComponent,
        ChangelogComponent,
        CheckboxComponent,
        ColorsComponent,
        ComponentsComponent,
        DatepickerComponent,
        DialogComponent,
        DialogComponentDialogComponent,
        DropdownComponent,
        EventPickerComponent,
        EventPickerDialogComponent,
        ExpansionPanelComponent,
        FontStylesComponent,
        HomeComponent,
        IconsComponent,
        InputsComponent,
        LoadingComponent,
        NavComponent,
        PatternsComponent,
        RadioButtonsComponent,
        SideNavComponent,
        StylesComponent,
        TablesComponent,
        TableBasicExampleComponent,
        TabsComponent,
        TestingComponent,
        TextAreasComponent
    ],
    entryComponents: [DialogComponent, DialogComponentDialogComponent, EventPickerComponent, EventPickerDialogComponent],
    imports: [
        BrowserAnimationsModule,
        RivetStyleModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialComponentModule,
        RouterModule.forRoot(appRoutes, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled'}),
        BrowserAnimationsModule,
        MatExpansionModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
