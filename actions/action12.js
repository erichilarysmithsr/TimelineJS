"use strict";
let datafire = require('datafire');

let tumblr = require('@datafire/tumblr').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => tumblr.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
