import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-theme-editor',
  templateUrl: './theme-editor.component.html',
  styleUrls: ['../app.component.scss']
})
export class ThemeEditorComponent implements OnInit {
  @Input() drawerStatus: boolean;
  @Output() drawer: boolean;

  h = 0;
  s = 0;
  l = 0;
  curVar = '';

  selectedColor = '';

  clrVars = [
    {
      name: 'Primary',
      varName: '--rvt-color-primary',
      h: 247,
      s: 30,
      l: 45,
      edited: false,
      tempH: 0,
      tempS: 0,
      tempL: 0
    },
    // {
    //   name: 'Primary Light',
    //   varName: '--rvt-color-primary-light',
    //   h: 249,
    //   s: 40,
    //   l: 63,
    //   edited: false,
    //   tempH: 0,
    //   tempS: 0,
    //   tempL: 0
    // },
    // {
    //   name: 'Primary Dark',
    //   varName: '--rvt-color-primary-dark',
    //   h: 241,
    //   s: 44,
    //   l: 28,
    //   edited: false,
    //   tempH: 0,
    //   tempS: 0,
    //   tempL: 0
    // },
    {
      name: 'Accent',
      varName: '--rvt-color-accent',
      h: 39,
      s: 78,
      l: 56,
      edited: false,
      tempH: 0,
      tempS: 0,
      tempL: 0
    },
    {
      name: 'Neutral - Dark',
      varName: '--rvt-color-neutral-dark',
      h: 223,
      s: 39,
      l: 16,
      edited: false,
      tempH: 0,
      tempS: 0,
      tempL: 0
    }
  ];

  selectClr(clr) {
    this.curVar = clr.varName;
    const clrObj = this.clrVars.find(name => name.varName === this.curVar);
    const index = this.clrVars.indexOf(clrObj);
    if (clr.edited === false) {
      // if color is not edited, set selected to default hsl
      this.h = clr.h;
      this.s = clr.s;
      this.l = clr.l;
      this.selectedColor = 'hsl(' + this.h + ', ' + this.s + '%, ' + this.l + '%)';
    } else {
      // if color is edited, set selected to temp hsl
      this.h = this.clrVars[index].tempH;
      this.s = this.clrVars[index].tempS;
      this.l = this.clrVars[index].tempL;
      this.selectedColor = 'hsl(' + this.h + ', ' + this.s + '%, ' + this.l + '%)';
    }
  }

  update() {
    const clrObj = this.clrVars.find(name => name.varName === this.curVar);
    const index = this.clrVars.indexOf(clrObj);
    this.clrVars[index].edited = true;
    this.clrVars[index].tempH = this.h;
    this.clrVars[index].tempS = this.s;
    this.clrVars[index].tempL = this.l;
    this.selectedColor = 'hsl(' + this.h + ', ' + this.s + '%, ' + this.l + '%)';
    document.documentElement.style.setProperty(this.curVar + '-h', this.h + '');
    document.documentElement.style.setProperty(this.curVar + '-s', this.s + '%');
    document.documentElement.style.setProperty(this.curVar + '-l', this.l + '%');
  }
  reset() {
    const clrObj = this.clrVars.find(name => name.varName === this.curVar);
    const index = this.clrVars.indexOf(clrObj);
    this.clrVars[index].edited = false;
    this.h = this.clrVars[index].h;
    this.s = this.clrVars[index].s;
    this.l = this.clrVars[index].l;
    this.selectedColor = 'hsl(' + this.h + ', ' + this.s + '%, ' + this.l + '%)';
    document.documentElement.style.setProperty(this.curVar + '-h', this.h + '');
    document.documentElement.style.setProperty(this.curVar + '-s', this.s + '%');
    document.documentElement.style.setProperty(this.curVar + '-l', this.l + '%');
  }

  closeDrawer() {
    this.drawerStatus = false;
    this.drawer = this.drawerStatus;
  }
  ngOnInit() {
    this.drawerStatus = false;
  }
}
