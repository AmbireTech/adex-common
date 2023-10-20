'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.LossReasonCode = exports.NoBidReasonCode = void 0
var NoBidReasonCode
;(function (NoBidReasonCode) {
    NoBidReasonCode[(NoBidReasonCode['UnknownError'] = 0)] = 'UnknownError'
    NoBidReasonCode[(NoBidReasonCode['TechnicalError'] = 1)] = 'TechnicalError'
    NoBidReasonCode[(NoBidReasonCode['InvalidRequest'] = 2)] = 'InvalidRequest'
    NoBidReasonCode[(NoBidReasonCode['KnownWebSpider'] = 3)] = 'KnownWebSpider'
    NoBidReasonCode[(NoBidReasonCode['SuspectedNonHumanTraffic'] = 4)] = 'SuspectedNonHumanTraffic'
    NoBidReasonCode[(NoBidReasonCode['CloudDataCenterOrProxyIP'] = 5)] = 'CloudDataCenterOrProxyIP'
    NoBidReasonCode[(NoBidReasonCode['UnsupportedDevice'] = 6)] = 'UnsupportedDevice'
    NoBidReasonCode[(NoBidReasonCode['BlockedPublisherOrSite'] = 7)] = 'BlockedPublisherOrSite'
    NoBidReasonCode[(NoBidReasonCode['UnmatchedUser'] = 8)] = 'UnmatchedUser'
    NoBidReasonCode[(NoBidReasonCode['DailyReaderCapMet'] = 9)] = 'DailyReaderCapMet'
    NoBidReasonCode[(NoBidReasonCode['DailyDomainCapMet'] = 10)] = 'DailyDomainCapMet'
})((NoBidReasonCode = exports.NoBidReasonCode || (exports.NoBidReasonCode = {})))
var LossReasonCode
;(function (LossReasonCode) {
    LossReasonCode[(LossReasonCode['BidWon'] = 0)] = 'BidWon'
    LossReasonCode[(LossReasonCode['InternalError'] = 1)] = 'InternalError'
    LossReasonCode[(LossReasonCode['ImpressionOpportunityExpired'] = 2)] =
        'ImpressionOpportunityExpired'
    LossReasonCode[(LossReasonCode['InvalidBidResponse'] = 3)] = 'InvalidBidResponse'
    LossReasonCode[(LossReasonCode['InvalidDealID'] = 4)] = 'InvalidDealID'
    LossReasonCode[(LossReasonCode['InvalidAuctionID'] = 5)] = 'InvalidAuctionID'
    LossReasonCode[(LossReasonCode['InvalidAdvertiserDomain'] = 6)] = 'InvalidAdvertiserDomain'
    LossReasonCode[(LossReasonCode['MissingMarkup'] = 7)] = 'MissingMarkup'
    LossReasonCode[(LossReasonCode['MissingCreativeID'] = 8)] = 'MissingCreativeID'
    LossReasonCode[(LossReasonCode['MissingBidPrice'] = 9)] = 'MissingBidPrice'
    LossReasonCode[(LossReasonCode['MissingMinimumCreativeApprovalData'] = 10)] =
        'MissingMinimumCreativeApprovalData'
    LossReasonCode[(LossReasonCode['BidBelowAuctionFloor'] = 100)] = 'BidBelowAuctionFloor'
    LossReasonCode[(LossReasonCode['BidBelowDealFloor'] = 101)] = 'BidBelowDealFloor'
    LossReasonCode[(LossReasonCode['LostToHigherBid'] = 102)] = 'LostToHigherBid'
    LossReasonCode[(LossReasonCode['LostToBidForPMPDeal'] = 103)] = 'LostToBidForPMPDeal'
    LossReasonCode[(LossReasonCode['BuyerSeatBlocked'] = 104)] = 'BuyerSeatBlocked'
    LossReasonCode[(LossReasonCode['CreativeFilteredUnknownReason'] = 200)] =
        'CreativeFilteredUnknownReason'
    LossReasonCode[(LossReasonCode['CreativeFilteredPendingProcessing'] = 201)] =
        'CreativeFilteredPendingProcessing'
    LossReasonCode[(LossReasonCode['CreativeFilteredDisaproved'] = 202)] =
        'CreativeFilteredDisaproved'
    LossReasonCode[(LossReasonCode['CreativeFilteredSizeNotAllowed'] = 203)] =
        'CreativeFilteredSizeNotAllowed'
    LossReasonCode[(LossReasonCode['CreativeFilteredIncorrectFormat'] = 204)] =
        'CreativeFilteredIncorrectFormat'
    LossReasonCode[(LossReasonCode['CreativeFilteredAdvertiserExclusions'] = 205)] =
        'CreativeFilteredAdvertiserExclusions'
    LossReasonCode[(LossReasonCode['CreativeFilteredAppBundleExclusions'] = 206)] =
        'CreativeFilteredAppBundleExclusions'
    LossReasonCode[(LossReasonCode['CreativeFilteredNotSecure'] = 207)] =
        'CreativeFilteredNotSecure'
    LossReasonCode[(LossReasonCode['CreativeFilteredLanguageExclusions'] = 208)] =
        'CreativeFilteredLanguageExclusions'
    LossReasonCode[(LossReasonCode['CreativeFilteredCategoryExclusions'] = 209)] =
        'CreativeFilteredCategoryExclusions'
    LossReasonCode[(LossReasonCode['CreativeFilteredAttributeExclusions'] = 210)] =
        'CreativeFilteredAttributeExclusions'
    LossReasonCode[(LossReasonCode['CreativeFilteredAdTypeExclusions'] = 211)] =
        'CreativeFilteredAdTypeExclusions'
    LossReasonCode[(LossReasonCode['CreativeFilteredAnimationTooLong'] = 212)] =
        'CreativeFilteredAnimationTooLong'
    LossReasonCode[(LossReasonCode['CreativeFilteredNotAllowedInPMPDeal'] = 213)] =
        'CreativeFilteredNotAllowedInPMPDeal'
})((LossReasonCode = exports.LossReasonCode || (exports.LossReasonCode = {})))
