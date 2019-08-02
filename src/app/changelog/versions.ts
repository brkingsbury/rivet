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
    version: '0.3.5',
    date: '8/1/2019',
    note: 'Expansion panel configurations, import dependency',
    updates: [
      {
        category: 'Rivet package',
        bullets: [
          'Import Hammerjs dependency to app-module so projects that utilize Rivet do not need to import Hammerjs when needed'
        ]
      },
      {
        category: 'Components',
        bullets: ['Does not show delete button for the expansion panels if not delete callbacks where passed in']
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
