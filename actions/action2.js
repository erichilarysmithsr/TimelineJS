"use strict";
let datafire = require('datafire');

let yellowpages = require('@datafire/yellowpages').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => yellowpages.search.get({
      'User-Agent': "Chrome",
      term: "",
      searchloc: "",
    }, context)));
    return result;
  },
});
