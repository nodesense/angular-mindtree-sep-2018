# Clone Repo

    git clone https://github.com/nodesense/angular-mindtree-sep-2018

    cd angular-mindtree-sep-2018

    npm install

    ng serve

# App Module
    ng g component components/home
    ng g component components/contact
    ng g component components/about
    ng g component components/header
    ng g component components/footer
    ng g component components/not-found

# Shared module
    ng  g module shared

    ng g component shared/components/address
    ng g component shared/components/like
    ng g directive shared/directives/highlight
    ng g pipe shared/pipes/power
    ng g pipe shared/pipes/sort
    ng g pipe shared/pipes/filter
    ng g service shared/services/data

    ng g interface shared/models/address

# Cart Module

    ng g module cart
    ng g component cart/components/cart
    ng g component cart/components/cart-summary
    ng g component cart/components/checkout
    ng g service cart/services/cart
    ng g class cart/models/cart-item




# ProductApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
