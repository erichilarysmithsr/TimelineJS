"use strict";
let datafire = require('datafire');

let postmarkapp_account = require('@datafire/postmarkapp_account').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let extendedServerInfo = await Promise.all([].map(item => postmarkapp_account.getServerInformation({
      'X-Postmark-Account-Token': "",
      serverid: 0,
    }, context)));
    return extendedServerInfo;
  },
});
