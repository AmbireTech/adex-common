"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryData = exports.AllCountries = void 0;
const i18n_iso_countries_1 = require("i18n-iso-countries");
const en_json_1 = __importDefault(require("i18n-iso-countries/langs/en.json"));
(0, i18n_iso_countries_1.registerLocale)(en_json_1.default);
const CountryNames = (0, i18n_iso_countries_1.getNames)('en');
exports.AllCountries = Object.keys(CountryNames)
    .map((key) => {
    const alpha3code = (0, i18n_iso_countries_1.alpha2ToAlpha3)(key);
    if (!alpha3code)
        return null;
    return {
        code: alpha3code,
        name: Array.isArray(CountryNames[key]) ? CountryNames[key][0] : CountryNames[key]
    };
})
    .filter((c) => c !== null);
exports.CountryData = (() => {
    const data = new Map();
    Object.values(exports.AllCountries).forEach(({ code, name }) => {
        data.set(code, { name });
    });
    return data;
})();
