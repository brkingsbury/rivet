
// ---------------------- Changelog template
// {
//     version: 'X.X.X',
//     date: 'X/X/XXXX',
//     note: 'Brief Summary of changes',
//     updates: [
//         {
//             category: 'Components',
//             bullets: [
//                 'Item 1 of component changes',
//                 'Item 2 of component changes'
//             ]
//         },
//         {
//             category: 'Design',
//             bullets: [
//                 'You dont have to use all 3 categories'
//             ]
//         },
//         {
//             category: 'Library - Updated documentation for:',
//             bullets: [
//                 'Something'
//             ]
//         },
//     ]
// }
// -------------------------------------------

export const versions = [
    {
        version: '0.1.27',
        date: '3/25/2019',
        note: 'datepicker + eventpicker',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Datepicker added to documentation',
                    'Event-picker added to documentation'
                ]
            }
        ]
    },
    {
        version: '0.1.25',
        date: '2/27/2019',
        note: 'npm package updates',
        updates: [
            {
                category: 'General',
                bullets: [
                    'Getting packages up to date'
                ]
            }
        ]
    },
    {
        version: '0.1.24',
        date: '2/26/2019',
        note: 'Icon naming changes to prevent tarheel style conflicts',
        updates: [
            {
                category: 'Icon',
                bullets: [
                    'Naming change from rvt-icon-*  to rivet-icon-*'
                ]
            }
        ]
    },
    {
        version: '0.1.22',
        date: '12/18/2018',
        note: 'Radio buttons, minor fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Material Component - Radio Buttons',
                    'Adjustment to delete overlay styling (in expandable line item)'
                ]
            },
            {
                category: 'Design',
                bullets: [
                    'Disabled color is now $rvt-neutral-200'
                ]
            }
        ]
    },
    {
        version: '0.1.21',
        date: '12/13/2018',
        note: 'Color variables, minor styling fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Fix to standard button color styles',
                    'Fix to delete overlay styling (in expandable line item)'
                ]
            },
            {
                category: 'Design',
                bullets: [
                    'New color variables'
                ]
            }
        ]
    },
    {
        version: '0.1.19',
        date: '12/4/2018',
        note: 'Nav update, delete overlay, divider styles',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Rivet Component - Side Nav styles fixed',
                    'Rivet Component - Delete overlay added to expandable line item',
                    'HR tag styles updated'
                ]
            }
        ]
    },
    {
        version: '0.1.16',
        date: '11/28/2018',
        note: 'Loading patterns, Tables, Nav',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Material component - Tables',
                    'Rivet Component - Loading Section',
                    'Rivet Component - Loading Buttons',
                    'Rivet Component - Side Nav'
                ]
            },
            {
                category: 'Library - updated documentation for:',
                bullets: [
                    'Tables',
                    'Loading',
                    'Side Nav'
                ]
            }
        ]
    },
    {
        version: '0.1.13',
        date: '11/19/2018',
        note: 'Dialogs + Expansion Panel',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Material component - Dialogs',
                    'Rivet Component - Expansion Panel'
                ]
            },
            {
                category: 'Library - updated documentation for:',
                bullets: [
                    'Dialogs',
                    'Expansion Panel'
                ]
            }
        ]
    },
    {
        version: '0.1.10',
        date: '11/13/2018',
        note: 'Tabs Update',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Material component - Tabs',
                    'Styling for top nav'
                ]
            },
            {
                category: 'Library - updated documentation for:',
                bullets: [
                    'Tabs: Content and Numbered Content',
                    'Navigation Tabs'
                ]
            }
        ]
    },
    {
        version: '0.1.9',
        date: '11/8/2018',
        note: 'Checkbox Update',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Material component - Checkboxes (switched from Rivet component)',
                ]
            },
            {
                category: 'Library - updated documentation for:',
                bullets: [
                    'Checkboxes - added indeterminate styling + updated spec sheet'
                ]
            }
        ]
    },
    {
        version: '0.1.8',
        date: '11/7/2018',
        note: 'Dropdown styling, Changelog template, minor library improvements',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Material component - Select/Dropdown added',
                ]
            },
            {
                category: 'Library - updated documentation for:',
                bullets: [
                    'Dropdowns',
                    'Changelog - home page now automatically pulls in latest version',
                    'Roadmap - updated prioritization and estimate for component type'
                ]
            }
        ]
    },
    {
        version: '0.1.0',
        date: '11/1/2018',
        note: 'Updated to Angular v7',
        updates: [
            {
                category: 'Design',
                bullets: [
                    'import to styles changed to: @import rivetTheme',
                    'stylePreprocessorOptions added to angular.json file'
                ]
            }
        ]
    },
    {
        version: '0.0.13',
        date: '10/24/2018',
        note: 'Includes the icon font and checkbox component as well as some minor styling adjustments to various components.',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Rivet Checkbox',
                    'Button styles updated for use with icons'
                ]
            },
            {
                category: 'Design',
                bullets: [
                    'Rivet icon font - simply add a span with the correct class for a standalone icon!'
                ]
            },
            {
                category: 'Library - updated documentation for:',
                bullets: [
                    'Checkboxes', 'Icons', 'Colors - now with material theme reference'
                ]
            }
        ]
    },
    {
        version: '0.0.9',
        date: '9/28/2018',
        note: 'Includes the base styles for color and type styles, as well as styling for inputs and buttons',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Rivet buttons - custom styled buttons that include primary, secondary, standard and text',
                    'Material Inputs - style overrides to match the Rivet theme'
                ]
            },
            {
                category: 'Design',
                bullets: [
                    'Rivet theme - a custom angular material theme to apply across all components',
                    'Type Styles - Font family, size and weight applied to standard elements'
                ]
            },
            {
                category: 'Library - updated documentation for:',
                bullets: [
                    'Buttons', 'Inputs + textareas', 'Text Styles', 'Colors'
                ]
            }
        ]
    }
];
