"use strict";
let datafire = require('datafire');

let google_analytics = require('@datafire/google_analytics').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => google_analytics.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
