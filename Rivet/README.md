# Rivet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Development server

Run `npm run package` first to manually package rivet-style, since the node servers are not referenced directly.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

cd .\projects\rivet-style\
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
If you want this component to be directly accessible by consumers of the library include it in the exports of
\projects\rivet-style\src\public_api.ts
\projects\rivet-style\src\lib\rivet-style.module.ts

## Package

After modifying the library, to consume the changes in the sample app. update the version in .\projects\rivet-style\package.json
Run `npm run package` to build the library project and then package the dist folder for consumption.
Run 'npm install --save rivet-style-x.x.x.tgz to pull in the changes into the root application

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
