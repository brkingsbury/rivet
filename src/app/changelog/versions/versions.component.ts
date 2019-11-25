import { Component } from '@angular/core';

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
    version: '4.1.1',
    date: '11/25/2019',
    note: 'Drawer fix',
    updates: [
      {
        category: 'Components',
        bullets: ['Fixed flashing animation of drawer on render']
      }
    ]
  },
  {
    version: '4.1.0',
    date: '11/21/2019',
    note: 'Angular Upgrade',
    updates: [
      {
        category: 'Rivet package',
        bullets: ['Upgrade Rivet to Angular 9 rc2']
      },
      {
        category: 'Components',
        bullets: ['Added generic drawer component for Essentials']
      }
    ]
  },
  {
    version: '4.0.2',
    date: '11/12/2019',
    note: 'Polyfill style fix',
    updates: [
      {
        category: 'Rivet package',
        bullets: ['Fix broken link to CSS variable polyfil style']
      }
    ]
  },
  {
    version: '4.0.1',
    date: '11/8/2019',
    note: 'Allow for using button styles outside of Angular app',
    updates: [
      {
        category: 'Rivet package',
        bullets: ['Removed dependency on Angular Material from buttonStyles.scss']
      }
    ]
  },
  {
    version: '4.0.0',
    date: '11/8/2019',
    note: 'CSS Variables',
    updates: [
      {
        category: 'Rivet package',
        bullets: [
          'Breaking change for legacy browsers unless you add the rvtPolyfill',
          'Updated variables to use CSS Custom Properties',
          'Added polyfill for legacy browser CSS Custom Property support'
        ]
      },
      {
        category: 'Style',
        bullets: ['Added CSS Variable column']
      }
    ]
  },
  {
    version: '3.5.9',
    date: '11/11/2019',
    note: 'Adding some extra padding in expanded expansion panel',
    updates: [
      {
        category: 'Components',
        bullets: ['Add padding in expanded expansion panel']
      }
    ]
  },
  {
    version: '3.5.8',
    date: '11/8/2019',
    note: 'Release version',
    updates: [
      {
        category: 'Library',
        bullets: ['Release branch cut to support Guided Retirement']
      }
    ]
  },
  {
    version: '0.5.8',
    date: '11/7/2019',
    note: 'Allow translations in expansion panel',
    updates: [
      {
        category: 'Components',
        bullets: ['Remove hard coded strings in expansion panel', 'see documentation page for implementation details']
      }
    ]
  },
  {
    version: '0.5.7',
    date: '11/5/2019',
    note: 'Adjust rivet expansion panel',
    updates: [
      {
        category: 'Components',
        bullets: ['Clean up to use detectChanges when calling outside of angular and update documentation.']
      }
    ]
  },
  {
    version: '0.5.6',
    date: '11/4/2019',
    note: 'Adjust tooltips',
    updates: [
      {
        category: 'Components',
        bullets: [
          'Assign max width of 300px to tooltips',
          'Adjust tooltip placement logic to get around flexbox issues'
        ]
      }
    ]
  },
  {
    version: '0.5.5',
    date: '11/3/2019',
    note: 'Make expanded state an input',
    updates: [
      {
        category: 'Components',
        bullets: [
          'Make expansion panel component expanded property an @Input so we can expand the panel programmatically'
        ]
      }
    ]
  },
  {
    version: '0.5.4',
    date: '11/1/2019',
    note: 'Adjust tooltip anchor',
    updates: [
      {
        category: 'Components',
        bullets: ['Adjusted Rivet tooltips to render on AfterViewInit to prevent getting lost in Material components']
      }
    ]
  },
  {
    version: '0.5.3',
    date: '10/29/2019',
    note: 'Convert Radio Buttons to SVG and refactor icon approach',
    updates: [
      {
        category: 'Design',
        bullets: [
          'Radio buttons are now made from SVG icons',
          '!IMPORTANT: anyone referencing icons through a unicode character in css will have to update those references',
          'see icon documentation page for details on atypical icon use'
        ]
      }
    ]
  },
  {
    version: '0.5.2',
    date: '10/22/2019',
    note: 'Update Expansion Panels',
    updates: [
      {
        category: 'Components',
        bullets: ['Disable buttons on input flag and removed unused formgroups on the expansion panel.']
      }
    ]
  },
  {
    version: '0.5.0',
    date: '10/22/2019',
    note: 'Add Rivet Tooltips',
    updates: [
      {
        category: 'Components',
        bullets: ['Add all new Rivet tooltip directive', 'Use tooltips for mouseover or manually triggered events']
      }
    ]
  },
  {
    version: '0.4.2',
    date: '10/17/2019',
    note: 'Fixed radio styles for other browsers, compliance checks',
    updates: [
      {
        category: 'Components',
        bullets: ['Updated radio styles to work in all browsers', 'Added keyboard focus styles into base components']
      },
      {
        category: 'Library',
        bullets: ['Checkboxes and radio buttons are now verified to be accessible']
      }
    ]
  },
  {
    version: '0.4.1',
    date: '10/15/2019',
    note: 'Updating the rivet expansion delete overlay',
    updates: [
      {
        category: 'Components',
        bullets: ['Rivet expansion delete overlay to overlay the expanded fields.']
      },
      {
        category: 'Documentation',
        bullets: ['Updated rivet expansion documentation to include attributes']
      }
    ]
  },
  {
    version: '0.4.0',
    date: '10/14/2019',
    note: 'New radio button, fixed pagination bug',
    updates: [
      {
        category: 'Components',
        bullets: ['Added Rivet radio button', 'Fixed icon references for table pagination']
      },
      {
        category: 'Documentation',
        bullets: ['Updated checkbox documentation to include attributes']
      }
    ]
  },
  {
    version: '0.3.20',
    date: '10/11/2019',
    note: 'More expansion panel updates',
    updates: [
      {
        category: 'Rivet package',
        bullets: [
          'Delay the automatic opening of the expansion panel when the flag is set.' +
            ' Does not affect default behavior only on hideExpansionContent.'
        ]
      }
    ]
  },
  {
    version: '0.3.19',
    date: '10/9/2019',
    note: 'More expansion panel fixes and checkbox styles',
    updates: [
      {
        category: 'Rivet package',
        bullets: ['Add input to prevent the expansion panel from collapsing.']
      },
      {
        category: 'Styles',
        bullets: ['Adjust font styles in labels above checkboxes']
      }
    ]
  },
  {
    version: '0.3.18',
    date: '10/9/2019',
    note: 'Configurable expansion panel',
    updates: [
      {
        category: 'Rivet package',
        bullets: [
          'Added an optional input binding that allows you to hide the expanded button and section, defaulted to show.'
        ]
      }
    ]
  },
  {
    version: '0.3.17',
    date: '10/9/2019',
    note: 'Updated table styles and color variables',
    updates: [
      {
        category: 'Components',
        bullets: ['Fixed table hover styles', 'Added required input styles']
      },
      {
        category: 'Styles',
        bullets: ['Added data color variables']
      }
    ]
  },
  {
    version: '0.3.16',
    date: '10/7/2019',
    note: 'Added mini expansion panel and accordion group',
    updates: [
      {
        category: 'Rivet package',
        bullets: [
          'Added advicent-rivet-mini-expansion-panel',
          'Added advicent-rivet-accordion-group',
          'both components can be found under components/mini expansion panel'
        ]
      }
    ]
  },
  {
    version: '0.3.13',
    date: '9/23/2019',
    note: 'Icon font builder added, build process updated',
    updates: [
      {
        category: 'Rivet package',
        bullets: [
          'Add icon-font-generator as a dependency',
          'Moved all icon svgs to rivet-icon folder',
          'Added Handlebars template to facilitate icon style build',
          'Added "build_icons" step to build_lib script'
        ]
      }
    ]
  },
  {
    version: '0.3.10',
    date: '9/09/2019',
    note: 'Library updates, Snackbar added',
    updates: [
      {
        category: 'Components',
        bullets: ['Snackbar component added']
      },
      {
        category: 'Library',
        bullets: ['Added new accessibility compliance badge', 'Sketch files added to component documentation']
      }
    ]
  },
  {
    version: '0.3.8',
    date: '8/27/2019',
    note: 'New Icons, Updated styles',
    updates: [
      {
        category: 'Components',
        bullets: ['Updated table styles']
      },
      {
        category: 'Styles',
        bullets: [
          'Added new icons: up-outlinearrow , down-outlinearrow',
          'Added 700 font weight to Nunito Sans font',
          'Updated Persona with elevation guidelines'
        ]
      }
    ]
  },
  {
    version: '0.3.7',
    date: '8/22/2019',
    note: 'Disabled ViewEncapsulation for Rivet expansion panel component.',
    updates: [
      {
        category: 'Rivet package',
        bullets: ['Disabled ViewEncapsulation for Rivet expansion panel component.']
      }
    ]
  },
  {
    version: '0.3.6',
    date: '8/2/2019',
    note: 'Updated Hammerjs to be a dependency of Rivet-Style and added it as a bundled dependency.',
    updates: [
      {
        category: 'Rivet package',
        bullets: [
          'Moved Hammerjs to dependency from peer dependency.',
          'Added Hammerjs as a bundled dependency to Rivet-Style package.'
        ]
      }
    ]
  },
  {
    version: '0.3.5',
    date: '8/1/2019',
    note: 'Updated expansion panel configurations, import needed dependency',
    updates: [
      {
        category: 'Rivet package',
        bullets: [
          'Import Hammerjs dependency to app-module so projects that utilize Rivet do not need to import Hammerjs when needed'
        ]
      },
      {
        category: 'Components',
        bullets: ['Expansion panels dos not show the delete button if no delete callbacks where passed in']
      }
    ]
  },
  {
    version: '0.3.4',
    date: '8/1/2019',
    note: 'Hammerjs added, new icon, fixed styles',
    updates: [
      {
        category: 'Rivet package',
        bullets: ['Added Hammerjs dependency to Rivet package']
      },
      {
        category: 'Components',
        bullets: ['Fixed buttons not having a set font causing browser defaults', 'Fixed icon button resizing']
      },
      {
        category: 'Styles',
        bullets: ['Added logout icon to icon font']
      }
    ]
  },
  {
    version: '0.2.14',
    date: '7/16/2019',
    note: 'Added icons',
    updates: [
      {
        category: 'Styles',
        bullets: ['Added following icons: moveup, movedown, star, auditsearch, reassignclients and templates']
      }
    ]
  },
  {
    version: '0.2.12',
    date: '5/30/2019',
    note: 'Update tab and input styles',
    updates: [
      {
        category: 'Components',
        bullets: ['Update to tabs and inputs to account for material overrides']
      },
      {
        category: 'Library',
        bullets: ['Split up parts into separate pages to improve performance and navigation']
      }
    ]
  },
  {
    version: '0.2.10',
    date: '5/3/2019',
    note: 'New checkboxes and slider. Library parts split into separate pages.',
    updates: [
      {
        category: 'Components',
        bullets: [
          'New Rivet version of checkboxes, material version is being deprecated',
          'Slider has been added to library'
        ]
      },
      {
        category: 'Library',
        bullets: ['Split up parts into separate pages to improve performance and navigation']
      }
    ]
  },
  {
    version: '0.2.9',
    date: '4/29/2019',
    note: 'Update to color variables + bug fixes',
    updates: [
      {
        category: 'Components',
        bullets: [
          'Radio & Checkbox styles updated',
          'Disabled & Invalid color variables added to components',
          'Component styles cleaned up'
        ]
      }
    ]
  },
  {
    version: '0.2.8',
    date: '4/24/2019',
    note: 'Delete overlay styling',
    updates: [
      {
        category: 'Style',
        bullets: ['Moved delete overlay styling into a shared overlay stylesheet']
      }
    ]
  },
  {
    version: '0.2.7',
    date: '4/22/2019',
    note: 'Expansion panel add button configurability',
    updates: [
      {
        category: 'Components',
        bullets: ['Expansion panel: Make add button optional']
      }
    ]
  },
  {
    version: '0.2.6',
    date: '4/18/2019',
    note: 'Migrate event picker out of Rivet and into NaviPlanWeb',
    updates: [
      {
        category: 'Components',
        bullets: ['Migrate event picker component out of Rivet', 'Update side navigation and example component']
      }
    ]
  },
  {
    version: '0.2.5',
    date: '4/18/2019',
    note: 'Expansion panel validation',
    updates: [
      {
        category: 'Components',
        bullets: [
          'Expansion panel: Add optional form input for validation',
          'Expansion panel: Small styling fix on Close button'
        ]
      }
    ]
  },
  {
    version: '0.2.4',
    date: '4/16/2019',
    note: 'Update the side navigation',
    updates: [
      {
        category: 'Library',
        bullets: [
          'Removed custom text inputs from the side navigation',
          'Rearrange the side navigation options to reflect what is on the page'
        ]
      }
    ]
  },
  {
    version: '0.2.3',
    date: '4/16/2019',
    note: 'Migrate currency and percentage input directives out of Rivet and into NaviPlanWeb',
    updates: [
      {
        category: 'Components',
        bullets: ['Migrate currency input directive out of Rivet', 'Migrate percentage input directive out of Rivet']
      }
    ]
  },
  {
    version: '0.2.2',
    date: '4/16/2019',
    note: 'IE Bug fix, New Variables',
    updates: [
      {
        category: 'Components',
        bullets: ['Fixed style bugs for tabs in IE11', 'Expansion panel tab focus fixed']
      },
      {
        category: 'Style',
        bullets: [
          'New variables for base component styles: rvt-disabled-color, rvt-disabled-text-color, rvt-invalid-color'
        ]
      },
      {
        category: 'Library',
        bullets: ['Uncommented code in polyfill.ts for proper Rivet functionality in IE']
      }
    ]
  },
  {
    version: '0.2.0',
    date: '4/11/2019',
    note: 'Theme override support',
    updates: [
      {
        category: 'Design',
        bullets: [
          'Allows rvt color variables to be overridden for branding purposes.',
          'Created rvt-core() mixin that sets the Angular Material Theme.'
        ]
      }
    ]
  },
  {
    version: '0.1.31',
    date: '04/10/2018',
    note: 'Expansion panel fixes',
    updates: [
      {
        category: 'Components',
        bullets: [
          'Expansion panel: Disallow enter press from expanding/collapsing',
          'Expansion panel: Fix issue with height on initial load',
          'Expansion panel: Minor styling fix'
        ]
      }
    ]
  },
  {
    version: '0.1.29',
    date: '4/02/2019',
    note: 'Rivet restyle',
    updates: [
      {
        category: 'Components',
        bullets: [
          'Button styles updated to new pattern. rvt-btn-standard has been removed. Use rvt-btn-secondary/rvt-btn-text instead.'
        ]
      },
      {
        category: 'Library',
        bullets: [
          'New and improved site!',
          'Components are now all under one page, but still organized by Material or Rivet',
          'Various improvements to enhance ease of use'
        ]
      }
    ]
  },
  {
    version: '0.1.27',
    date: '3/25/2019',
    note: 'datepicker + eventpicker',
    updates: [
      {
        category: 'Components',
        bullets: ['Datepicker added to documentation', 'Event-picker added to documentation']
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
        bullets: ['Getting packages up to date']
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
        bullets: ['Naming change from rvt-icon-*  to rivet-icon-*']
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
        bullets: ['Disabled color is now $rvt-neutral-200']
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
        bullets: ['Fix to standard button color styles', 'Fix to delete overlay styling (in expandable line item)']
      },
      {
        category: 'Design',
        bullets: ['New color variables']
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
        bullets: ['Tables', 'Loading', 'Side Nav']
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
        bullets: ['Material component - Dialogs', 'Rivet Component - Expansion Panel']
      },
      {
        category: 'Library - updated documentation for:',
        bullets: ['Dialogs', 'Expansion Panel']
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
        bullets: ['Material component - Tabs', 'Styling for top nav']
      },
      {
        category: 'Library - updated documentation for:',
        bullets: ['Tabs: Content and Numbered Content', 'Navigation Tabs']
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
        bullets: ['Material component - Checkboxes (switched from Rivet component)']
      },
      {
        category: 'Library - updated documentation for:',
        bullets: ['Checkboxes - added indeterminate styling + updated spec sheet']
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
        bullets: ['Material component - Select/Dropdown added']
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
    note:
      'Includes the icon font and checkbox component as well as some minor styling adjustments to various components.',
    updates: [
      {
        category: 'Components',
        bullets: ['Rivet Checkbox', 'Button styles updated for use with icons']
      },
      {
        category: 'Design',
        bullets: ['Rivet icon font - simply add a span with the correct class for a standalone icon!']
      },
      {
        category: 'Library - updated documentation for:',
        bullets: ['Checkboxes', 'Icons', 'Colors - now with material theme reference']
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
        bullets: ['Buttons', 'Inputs + textareas', 'Text Styles', 'Colors']
      }
    ]
  }
];

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['../changelog.component.scss']
})
export class VersionsComponent {
  versions = versions;
}
