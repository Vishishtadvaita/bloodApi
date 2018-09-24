"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const rp = require('request-promise');

const restService = express();

restService.use(
    bodyParser.urlencoded({
        extended: true
    })
);

restService.use(bodyParser.json());

restService.get("/home", function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.json([{
            "name": "A+",
            "value": "8",
            "ABP": "true",
            "ABN": "true",
            "AP": "true",
            "AN": "false",
            "BP": "false",
            "BN": "false",
            "OP": "false",
            "ON": "false"
        },
        {
            "name": "A-",
            "value": "5",
            "ABP": "true",
            "ABN": "true",
            "AP": "true",
            "AN": "true",
            "BP": "false",
            "BN": "false",
            "OP": "false",
            "ON": "false"
        },
        {
            "name": "AB+",
            "value": "4",
            "ABP": "true",
            "ABN": "false",
            "AP": "flase",
            "AN": "false",
            "BP": "false",
            "BN": "false",
            "OP": "false",
            "ON": "false"
        },
        {
            "name": "AB-",
            "value": "4",
            "ABP": "true",
            "ABN": "false",
            "AP": "flase",
            "AN": "false",
            "BP": "false",
            "BN": "false",
            "OP": "false",
            "ON": "false"
        },
        {
            "name": "O+",
            "value": "4",
            "ABP": "true",
            "ABN": "false",
            "AP": "true",
            "AN": "false",
            "BP": "true",
            "BN": "false",
            "OP": "true",
            "ON": "false"
        },
        {
            "name": "O-",
            "value": "2",
            "ABP": "true",
            "ABN": "true",
            "AP": "true",
            "AN": "true",
            "BP": "true",
            "BN": "true",
            "OP": "true",
            "ON": "true"
        },
        {
            "name": "B+",
            "value": "8",
            "ABP": "true",
            "ABN": "false",
            "AP": "flase",
            "AN": "false",
            "BP": "true",
            "BN": "false",
            "OP": "false",
            "ON": "false"
        },
        {
            "name": "B-",
            "value": "12",
            "value": "8",
            "ABP": "true",
            "ABN": "true",
            "AP": "flase",
            "AN": "false",
            "BP": "true",
            "BN": "true",
            "OP": "false",
            "ON": "false"
        },
    ]);
});




restService.listen(process.env.PORT || 8000, function() {
    console.log("Server up and listening");
});