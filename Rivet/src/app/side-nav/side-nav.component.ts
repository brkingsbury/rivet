import { Component, OnInit } from '@angular/core';
import { RouterState } from '@angular/router';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    sideNavConfig = {
        expandableObj: [
            {
                title: 'Material Components',
                links: [
                    { name: 'Checkboxes', path: '/components', section: 'checkbox' },
                    { name: 'Datepicker', path: '/components', section: 'datepicker' },
                    { name: 'Dialog', path: '/components', section: 'dialog' },
                    { name: 'Dropdowns', path: '/components', section: 'dropdown' },
                    { name: 'Event Picker', path: '/components', section: 'eventPicker'},
                    { name: 'Radio Buttons', path: '/components', section: 'radio' },
                    { name: 'Tables', path: '/components', section: 'table' },
                    { name: 'Tabs', path: '/components', section: 'tab' },
                    { name: 'Text Inputs', path: '/components', section: 'matInput' }
                ]
            },
            {
                title: 'Rivet Components',
                links: [
                    { name: 'Buttons', path: '/components', section: 'button' },
                    { name: 'Expansion Panel', path: '/components', section: 'expansion' },
                    { name: 'Loading', path: '/components', section: 'loading' },
                    { name: 'Navigation', path: '/components', section: 'nav' },
                    { name: 'Text Areas', path: '/components', section: 'txtArea' },
                    { name: 'Custom Text Inputs', path: '/components', section: 'rvtInput' }
                ]
            }
        ]
        // numberedObj: [
        //     {
        //         label: '1',
        //         title: 'Design',
        //         path: '/design',
        //         links: [
        //             { name: 'Icons', path: '/design', section: 'icon' },
        //             { name: 'Font Styles', path: '/design', section: 'font' },
        //             { name: 'Colors', path: '/design', section: 'color' }
        //         ]
        //     },
        //     {
        //         label: '2',
        //         title: 'Accessibility',
        //         path: '/accessibility',
        //         links: []
        //     },
        //     {
        //         label: '3',
        //         title: 'Changelog',
        //         path: '/changelog',
        //         links: [
        //             { name: 'Versions', path: '/changelog', section: 'version' },
        //             { name: 'Roadmap', path: '/changelog', section: 'roadmap' }
        //         ]
        //     }
        // ]
    };

    expand(section) {
        section.expanded = !section.expanded;
    }

    constructor() { }

    ngOnInit() {
    }

}
