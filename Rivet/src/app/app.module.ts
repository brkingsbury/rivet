import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponentModule, RivetStyleModule } from 'rivet-style';
import { AccessibilityComponent } from './accessibility/accessibility.component';
import { AppComponent } from './app.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ComponentsComponent } from './components/components.component';
import { DialogComponent, DialogComponentDialogComponent } from './components/dialog/dialog.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NavComponent } from './components/nav/nav.component';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';
import { TableBasicExampleComponent } from './components/tables/table-example';
import { TablesComponent } from './components/tables/tables.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ColorsComponent } from './design/colors/colors.component';
import { DesignComponent } from './design/design.component';
import { FontStylesComponent } from './design/font-styles/font-styles.component';
import { IconsComponent } from './design/icons/icons.component';
import { PatternsComponent } from './design/patterns/patterns.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TestingComponent } from './testing/testing.component';
import { TopNavComponent } from './top-nav/nav.component';
import { EventPickerComponent, EventPickerDialogComponent } from './components/event-picker/event-picker.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'design', component: DesignComponent },
    { path: 'components', component: ComponentsComponent },
    { path: 'changelog', component: ChangelogComponent },
    { path: 'accessibility', component: AccessibilityComponent },
    { path: 'testing', component: TestingComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        TopNavComponent,
        DesignComponent,
        ComponentsComponent,
        HomeComponent,
        AccessibilityComponent,
        ChangelogComponent,
        CheckboxComponent,
        ButtonsComponent,
        ColorsComponent,
        IconsComponent,
        FontStylesComponent,
        TestingComponent,
        DropdownComponent,
        TabsComponent,
        NavComponent,
        DialogComponent,
        DialogComponentDialogComponent,
        ExpansionPanelComponent,
        SideNavComponent,
        TablesComponent,
        TableBasicExampleComponent,
        LoadingComponent,
        PatternsComponent,
        RadioButtonsComponent,
        EventPickerComponent,
        EventPickerDialogComponent,
        DatepickerComponent
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
