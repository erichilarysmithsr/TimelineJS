"use strict";
let datafire = require('datafire');

let google_tasks = require('@datafire/google_tasks').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => google_tasks.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
