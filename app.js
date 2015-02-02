/* jshint node: true */

"use strict";

var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var routes = require("./routes/index");
var users = require("./routes/users");
var auth = require("./environment");
var marvelMiddle = require("./server/marvelMiddle")

var app = express();

process.env.MARVEL_PUBLIC = process.env.MARVEL_PUBLIC || auth.MARVEL_PUBLIC;
process.env.MARVEL_SECRET = process.env.MARVEL_SECRET || auth.MARVEL_SECRET;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hjs");

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + "/public/favicon.ico"));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(marvelMiddle);

app.use("/", routes);
app.use("/users", users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render("error", {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
        message: err.message,
        error: {}
    });
});

module.exports = app;

// var debug = require("debug")("express-webpack");

// app.set("port", process.env.PORT || 3000);

// var server = app.listen(app.get("port"), function() {
//   debug("Express server listening on port " + server.address().port);
// });
