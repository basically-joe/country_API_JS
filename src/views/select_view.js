const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe("Countries:list-loaded", (event) => {
    const allCountries = event.detail;
    this.populate(allCountries);
  });
};

SelectView.prototype.populate = function (allCountriesData) {
  allCountriesData.forEach((country, index) => {
    const option = document.createElement("option");
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  })
};

module.exports = SelectView
