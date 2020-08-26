"use strict";
let datafire = require('datafire');

let google_youtube = require('@datafire/google_youtube').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => google_youtube.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
