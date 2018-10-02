#!/usr/bin/env node

const { capitalize } = require("lodash");
const acro = require("acron");

function lgtm() {
    return acro("lgtm").map(capitalize).join(" ");
}

console.log(lgtm());
