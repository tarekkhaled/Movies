"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = void 0;

const checkAPI = require('./src/utilites');

const moviesRouter = require('./src/resources/movies/movies.routers');

const express = require('express');

const helmet = require('helmet');

const app = express();
/** for getting data in req.body */

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
/** some secure */

app.use(helmet());
app.use(checkAPI);
app.use('/movies', moviesRouter);

const start = () => {
  app.listen(3000, () => {
    console.log('Server is now listening to port 3000 :)');
  });
};

exports.start = start;
