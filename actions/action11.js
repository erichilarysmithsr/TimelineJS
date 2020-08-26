"use strict";
let datafire = require('datafire');

let twitter = require('@datafire/twitter').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => twitter.direct_messages({}, context)));
    return result;
  },
});
