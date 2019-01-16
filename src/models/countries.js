const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Countries = function () {
  this.text = null;
}

Countries.prototype.getData = function () {
  const request = new RequestHelper("https://restcountries.eu/rest/v2/all");
  request.get((data) => {
    this.text = data;
    console.log("Here's the data you've saves in model", this.text);
    PubSub.publish("Countries:list-loaded", this.text)
  })
};

module.exports = Countries;
