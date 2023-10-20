'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.TimeInSeconds =
    exports.RequestEventType =
    exports.ViewEventType =
    exports.SupportedORTBVersions =
    exports.QueryParams =
    exports.Headers =
        void 0
var Headers
;(function (Headers) {
    Headers['providerApiKey'] = 'X-API-KEY'
    Headers['openRTBVersion'] = 'X-OPENRTB-VERSION'
})((Headers = exports.Headers || (exports.Headers = {})))
var QueryParams
;(function (QueryParams) {
    QueryParams['providerApiKey'] = 'apiKey'
    QueryParams['openRTBVersion'] = 'openRTBversion'
})((QueryParams = exports.QueryParams || (exports.QueryParams = {})))
var SupportedORTBVersions
;(function (SupportedORTBVersions) {
    SupportedORTBVersions['v2_5'] = '2.5'
    SupportedORTBVersions['v2_6'] = '2.6'
})((SupportedORTBVersions = exports.SupportedORTBVersions || (exports.SupportedORTBVersions = {})))
var ViewEventType
;(function (ViewEventType) {
    ViewEventType['impression'] = 'IMPRESSION'
    ViewEventType['click'] = 'CLICK'
})((ViewEventType = exports.ViewEventType || (exports.ViewEventType = {})))
var RequestEventType
;(function (RequestEventType) {
    RequestEventType[(RequestEventType['request'] = 0)] = 'request'
    RequestEventType[(RequestEventType['loss'] = 1)] = 'loss'
    RequestEventType[(RequestEventType['win'] = 2)] = 'win'
    RequestEventType[(RequestEventType['bill'] = 3)] = 'bill'
    RequestEventType[(RequestEventType['mngrLoad'] = 4)] = 'mngrLoad'
    RequestEventType[(RequestEventType['mngrImpression'] = 5)] = 'mngrImpression'
    RequestEventType[(RequestEventType['mngrClick'] = 6)] = 'mngrClick'
})((RequestEventType = exports.RequestEventType || (exports.RequestEventType = {})))
var TimeInSeconds
;(function (TimeInSeconds) {
    TimeInSeconds[(TimeInSeconds['hour'] = 3600)] = 'hour'
    TimeInSeconds[(TimeInSeconds['day'] = 86400)] = 'day'
    TimeInSeconds[(TimeInSeconds['week'] = 604800)] = 'week'
    TimeInSeconds[(TimeInSeconds['month'] = 2592000)] = 'month'
    TimeInSeconds[(TimeInSeconds['year'] = 31536000)] = 'year'
})((TimeInSeconds = exports.TimeInSeconds || (exports.TimeInSeconds = {})))
