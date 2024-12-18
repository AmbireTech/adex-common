import { Alpha3Code, alpha2ToAlpha3, getNames, registerLocale } from 'i18n-iso-countries'
import enLang from 'i18n-iso-countries/langs/en.json'

registerLocale(enLang)
const CountryNames = getNames('en')

export const AllCountries: Array<{ code: Alpha3Code; name: string }> = Object.keys(CountryNames)
    .map((key) => {
        const alpha3code = alpha2ToAlpha3(key)
        if (!alpha3code) return null

        return {
            code: alpha3code as Alpha3Code,
            name: Array.isArray(CountryNames[key]) ? CountryNames[key][0] : CountryNames[key]
        }
    })
    .filter((c: { code: Alpha3Code; name: string } | null) => c !== null) as Array<{
    code: Alpha3Code
    name: string
}>

export const CountryData: Map<Alpha3Code, { name: string }> = (() => {
    const data: Map<Alpha3Code, { name: string }> = new Map()
    Object.values(AllCountries).forEach(({ code, name }) => {
        data.set(code, { name })
    })

    return data
})()
