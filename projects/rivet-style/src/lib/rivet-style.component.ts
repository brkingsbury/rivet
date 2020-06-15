import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'advicent-rivet-style',
    template: ``,
    styleUrls: [
        './styles/polyfill.scss',
        './styles/typeStyles.scss',
        './styles/rivetTheme.scss',
        './styles/buttonStyles.scss',
        './styles/cardStyles.scss',
        './styles/inputStyles.scss',
        './styles/checkboxStyles.scss',
        './styles/iconStyles.scss',
        './styles/tabStyles.scss',
        './styles/navStyles.scss',
        './styles/dialogStyles.scss',
        './styles/tableStyles.scss',
        './styles/loadingStyles.scss',
        './styles/radioStyles.scss',
        './styles/overlayStyles.scss',
        './styles/snackbarStyles.scss',
        './styles/tooltipStyles.scss',
        './styles/sliderStyles.scss',
        './styles/datepickerStyles.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class RivetStyleComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
