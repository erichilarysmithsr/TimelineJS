"use strict";
let datafire = require('datafire');

let mailchimp = require('@datafire/mailchimp').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let aPI_health_status = await Promise.all([].map(item => mailchimp.getPing({}, context)));
    return aPI_health_status;
  },
});
