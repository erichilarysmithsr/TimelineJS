"use strict";
let datafire = require('datafire');

let facebook = require('@datafire/facebook').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => facebook.application.get({
      application: "",
    }, context)));
    return result;
  },
});
