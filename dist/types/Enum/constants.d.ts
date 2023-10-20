export declare enum Headers {
    providerApiKey = 'X-API-KEY',
    openRTBVersion = 'X-OPENRTB-VERSION'
}
export declare enum QueryParams {
    providerApiKey = 'apiKey',
    openRTBVersion = 'openRTBversion'
}
export declare enum SupportedORTBVersions {
    v2_5 = '2.5',
    v2_6 = '2.6'
}
export declare enum ViewEventType {
    impression = 'IMPRESSION',
    click = 'CLICK'
}
export declare enum RequestEventType {
    request = 0,
    loss = 1,
    win = 2,
    bill = 3,
    mngrLoad = 4,
    mngrImpression = 5,
    mngrClick = 6
}
export declare enum TimeInSeconds {
    hour = 3600,
    day = 86400,
    week = 604800,
    month = 2592000,
    year = 31536000
}
