# AuthApp

## AuthApp README

This app is an example about angular framework, Its functionality is to simulate to login and sign up forms with fields validations, and using JWT to generate authorization to be in logged views using a nodejs server [auth-back-nodejs](https://github.com/emmanueltamburini/auth-back-nodejs) to serve the api from this app.

You can check final result [here](https://neon-sopapillas-57da02.netlify.app). This app use a server in railway, this is a paid platform, so it is possible that the server is off if you want to try, you can contact to me to on this sever, if you want to try it (if you have a problem with url please notice to emmanueltamburini@gmail.com)

### Getting started

Run `npm install` to install all dependencies of the app.

You must to run the nodejs server [auth-back-nodejs](https://github.com/emmanueltamburini/auth-back-nodejs) in that project you can find a readme file explains how to run it.

After that you have to configure the baseUrl in the environment files (src/environment/environment.ts and src/environment/environment.prod.ts) with the path of the nodejs server.

Follow angular step to serve the app.

## Angular README

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
