# Angular CRUD Application

This project is an Angular Material themed application generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0. 

## Introduction

Rest API endpoint is created with spring boot and H2 database is used. This is an App which displays the Countries added to a database in tabular format. The app allows users to view the countries, add/create new countries to the database (and are displayed in the ui also), update countries and delete.

## functionalities

* Angular Material themed build
    * The application is built using Angular material components

* Angular Material Table implementation
    * The countries are displayed in tabular format using an Angular Material Table. When a new country is added, it gets added right belo the bottom most row in the existing table. There are 5 columns of the table:
        * **ID** - to identify each country
        * **Country Name** - name of the country
        * **Continent** - continent to which the country belongs to
        * **President** - name of the president of each country
        * **Operation** - when a country is added to the table, this column gives to buttons with options **edit** and **delete**, which provide the same functionality.

* Angular Material Snackbars
    * When a new country is created successfully, or when the creation fails, and when a deletion occurs successfully or when the deletion fails, a snackbar displays the respective message.

* Angular Material Dialog
    * When adding a new country or when updating an existing country a Dialog box appears with the required form to fill. In the case of a new country the form appears blank. In the case of updating a country, the form contain the already filled information in editable format.

## Basic UI instructions

* The existing countries are displayed when the app is launched.
* To add a new country - press the button **Add New Country** on top left corner
* To update a country - press the button **Edit** in the column: **Operation** in the respective row of the country that needs to be updated, and edit the form that pops up.
* To delete a country - press the button **Delete** in the column: **Operation** in the respective row of the country that needs to be deleted.

## Netlify Deployment

This app has been deployed on netlify for you to see it in action. Navigate to [Netlify Deployment](https://trusting-swanson-20abdf.netlify.app/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

