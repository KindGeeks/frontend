# KindGeeks - Frontend

# Docker

## Build

```
docker build -t kindgeeks/frontend .
```

## Dev

Runs a dev server on url: http://localhost:4200

```
docker run -it --rm -p 4200:4200 -v `pwd`/:/data kindgeeks/frontend
```

## Prod

Creates an ng package in the /dist folder

```
docker run --rm -v `pwd`/:/data kindgeeks/frontend ng build --prod
```

## Run

```
docker-compose up
```

## Debug

```
docker run -it --rm -p 4200:4200 -v `pwd`/:/data --entrypoint /bin/sh kindgeeks/frontend
```

# Angular 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
