"use strict";
let datafire = require('datafire');

let postmarkapp_server = require('@datafire/postmarkapp_server').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let serverConfigurationResponse = await Promise.all([].map(item => postmarkapp_server.getCurrentServerConfiguration({
      'X-Postmark-Server-Token': "",
    }, context)));
    return serverConfigurationResponse;
  },
});
