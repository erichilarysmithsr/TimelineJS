"use strict";
let datafire = require('datafire');

let google_blogger = require('@datafire/google_blogger').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => google_blogger.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
