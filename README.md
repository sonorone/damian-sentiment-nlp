# About this project

This project allows you to perform sentiment analysis using MeaningCloud API.

## Getting started

### Environment variables
There must be .env file in the root folder with the below variables. API_KEY comes from MeaningCloud's developer account.

```API_KEY=123123123123
PORT=8080
LANGUAGE=en
MODEL=damianModel
```
### Building the project

Run `npm install` to install dependencies.

#### PROD configuration

Run `npm run build:prod` to compile the code.
Next `npm start` to run the web server and serve the /dist folder

#### DEV configuration

Run `npm run build:dev` to compile the code and run the webpack dev server.
Next `npm start` to run the web server