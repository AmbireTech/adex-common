export declare enum NoBidReasonCode {
    UnknownError = 0,
    TechnicalError = 1,
    InvalidRequest = 2,
    KnownWebSpider = 3,
    SuspectedNonHumanTraffic = 4,
    CloudDataCenterOrProxyIP = 5,
    UnsupportedDevice = 6,
    BlockedPublisherOrSite = 7,
    UnmatchedUser = 8,
    DailyReaderCapMet = 9,
    DailyDomainCapMet = 10
}
export declare enum LossReasonCode {
    BidWon = 0,
    InternalError = 1,
    ImpressionOpportunityExpired = 2,
    InvalidBidResponse = 3,
    InvalidDealID = 4,
    InvalidAuctionID = 5,
    InvalidAdvertiserDomain = 6,
    MissingMarkup = 7,
    MissingCreativeID = 8,
    MissingBidPrice = 9,
    MissingMinimumCreativeApprovalData = 10,
    BidBelowAuctionFloor = 100,
    BidBelowDealFloor = 101,
    LostToHigherBid = 102,
    LostToBidForPMPDeal = 103,
    BuyerSeatBlocked = 104,
    CreativeFilteredUnknownReason = 200,
    CreativeFilteredPendingProcessing = 201,
    CreativeFilteredDisaproved = 202,
    CreativeFilteredSizeNotAllowed = 203,
    CreativeFilteredIncorrectFormat = 204,
    CreativeFilteredAdvertiserExclusions = 205,
    CreativeFilteredAppBundleExclusions = 206,
    CreativeFilteredNotSecure = 207,
    CreativeFilteredLanguageExclusions = 208,
    CreativeFilteredCategoryExclusions = 209,
    CreativeFilteredAttributeExclusions = 210,
    CreativeFilteredAdTypeExclusions = 211,
    CreativeFilteredAnimationTooLong = 212,
    CreativeFilteredNotAllowedInPMPDeal = 213
}
