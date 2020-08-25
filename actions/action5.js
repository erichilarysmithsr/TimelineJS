"use strict";
let datafire = require('datafire');

let google_tagmanager = require('@datafire/google_tagmanager').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => google_tagmanager.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
