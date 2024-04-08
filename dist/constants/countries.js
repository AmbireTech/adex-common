"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllCountries = void 0;
const i18n_iso_countries_1 = require("i18n-iso-countries");
const CountryNames = (0, i18n_iso_countries_1.getNames)('en');
exports.AllCountries = Object.keys(CountryNames)
    .map(key => {
    const alpha3code = (0, i18n_iso_countries_1.alpha2ToAlpha3)(key);
    if (!alpha3code)
        return null;
    return {
        code: alpha3code,
        name: Array.isArray(CountryNames[key]) ? CountryNames[key][0] : CountryNames[key],
    };
})
    .filter((c) => c !== null);
