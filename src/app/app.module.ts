import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponentModule, RivetStyleModule } from 'rivet-style';
import { AppComponent } from './app.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ComponentsComponent, ComplianceComponent, ComplianceDialogComponent } from './components/components.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DialogComponent, DialogComponentDialogComponent } from './components/dialog/dialog.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NavComponent } from './components/nav/nav.component';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';
import { TableBasicExampleComponent } from './components/tables/table-example';
import { TablesComponent } from './components/tables/tables.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TextAreasComponent } from './components/text-areas/text-areas.component';
import { HomeComponent } from './home/home.component';
import { AccessibilityComponent } from './patterns/accessibility/accessibility.component';
import { PatternsComponent } from './patterns/patterns.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ColorsComponent } from './styles/colors/colors.component';
import { FontStylesComponent } from './styles/font-styles/font-styles.component';
import { IconsComponent } from './styles/icons/icons.component';
import { StylesComponent } from './styles/styles.component';
import { TestingComponent } from './testing/testing.component';
import { PerformanceComponent } from './patterns/performance/performance.component';
import { SliderComponent } from './components/slider/slider.component';
import { StructureComponent } from './patterns/structure/structure.component';
import { PersonaComponent } from './styles/persona/persona.component';
import { AuthService } from '../../projects/rivet-style/src/lib/rivet-services/unique-name-validator';
import { SnackbarComponent, Snackbar2Component } from './components/snackbar/snackbar.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'style', component: StylesComponent },
  { path: 'style/icon', component: IconsComponent },
  { path: 'style/font', component: FontStylesComponent },
  { path: 'style/color', component: ColorsComponent },
  { path: 'style/persona', component: PersonaComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'components/checkbox', component: CheckboxComponent },
  { path: 'components/datepicker', component: DatepickerComponent },
  { path: 'components/dialog', component: DialogComponent },
  { path: 'components/dropdown', component: DropdownComponent },
  { path: 'components/input', component: InputsComponent },
  { path: 'components/radio', component: RadioButtonsComponent },
  { path: 'components/table', component: TablesComponent },
  { path: 'components/tab', component: TabsComponent },
  { path: 'components/textarea', component: TextAreasComponent },
  { path: 'components/button', component: ButtonsComponent },
  { path: 'components/loading', component: LoadingComponent },
  { path: 'components/nav', component: NavComponent },
  { path: 'components/expansion', component: ExpansionPanelComponent },
  { path: 'components/slider', component: SliderComponent },
  { path: 'components/snackbar', component: SnackbarComponent },
  { path: 'changelog', component: ChangelogComponent },
  { path: 'patterns', component: PatternsComponent },
  { path: 'patterns/a11y', component: AccessibilityComponent },
  { path: 'patterns/performance', component: PerformanceComponent },
  { path: 'patterns/structure', component: StructureComponent },
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
    TextAreasComponent,
    PerformanceComponent,
    SliderComponent,
    StructureComponent,
    PersonaComponent,
    SnackbarComponent,
    Snackbar2Component,
    ComplianceComponent,
    ComplianceDialogComponent
  ],
  entryComponents: [DialogComponent, DialogComponentDialogComponent, Snackbar2Component, ComplianceDialogComponent],
  imports: [
    BrowserAnimationsModule,
    RivetStyleModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialComponentModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    }),
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
