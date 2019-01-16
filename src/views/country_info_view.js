const PubSub = require('../helpers/pub_sub.js');

const CountryInfoView = function (container) {
  this.container = container;
}

CountryInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('SelectedCountry:info-ready', (event) => {
    console.log(event);
    const countryInfo = event.detail;
    this.render(countryInfo);
  })
};

CountryInfoView.prototype.render = function (country) {
  this.container.innerHTML = '';

  const countryName = document.createElement('h2');
  countryName.textContent = country.name;
  this.container.appendChild(countryName);

  const countryRegion = document.createElement('p');
  countryRegion.textContent = country.region;
  this.container.appendChild(countryRegion);

  const img = document.createElement('img');
  img.classList.add("medium-image");
  img.src = country.flag;
  this.container.appendChild(img);
  return img;

};

CountryInfoView.prototype.createCountryList = function (countries) {
  const list = document.createElement('ul');

  countries.forEach((country) => {
    const listItem = document.createElement('li')
    listItem.textContent = country;
    list.appendChild(listItem);
  });
  return list
};

module.exports = CountryInfoView;
