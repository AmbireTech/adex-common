export { Alpha3Code } from 'i18n-iso-countries'

export enum Headers {
    providerApiKey = 'X-API-KEY',
    openRTBVersion = 'X-OPENRTB-VERSION',
    uiAuth = 'X-UI-AUTH'
}

export enum QueryParams {
    providerApiKey = 'apiKey',
    openRTBVersion = 'openRTBversion'
}

export enum SupportedORTBVersions {
    v2_5 = '2.5',
    v2_6 = '2.6'
}

export enum ViewEventType {
    impression = 'IMPRESSION',
    click = 'CLICK'
}

export enum RequestEventType {
    request,
    loss,
    win,
    bill,
    mngrLoad,
    mngrImpression,
    mngrClick
}

export enum TimeInSeconds {
    hour = 3600,
    day = 86400,
    week = 604800,
    month = 2592000, // 30 days
    year = 31536000
}
