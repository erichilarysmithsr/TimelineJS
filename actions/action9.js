"use strict";
let datafire = require('datafire');

let instagram = require('@datafire/instagram').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let usersInfoResponse = await Promise.all([].map(item => instagram.users.search.get({
      q: "",
    }, context)));
    return usersInfoResponse;
  },
});
