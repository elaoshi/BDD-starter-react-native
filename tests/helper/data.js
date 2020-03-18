// Author : Eric
// Version : 1.0.2

var fs = require("fs");

export default (jdata, tag) => {
  var arrFound = jdata.casedetails.filter(function(item) {
    return item.name == tag;
  });
  return arrFound;
};
