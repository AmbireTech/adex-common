"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignStatus = exports.ReviewStatus = exports.RateLimitType = exports.AdUnitType = exports.CampaignType = exports.EventType = void 0;
var EventType;
(function (EventType) {
    EventType["CLICK"] = "CLICK";
    EventType["IMPRESSION"] = "IMPRESSION";
})(EventType = exports.EventType || (exports.EventType = {}));
var CampaignType;
(function (CampaignType) {
    CampaignType[CampaignType["DSP"] = 0] = "DSP";
    CampaignType[CampaignType["ZK"] = 1] = "ZK";
})(CampaignType = exports.CampaignType || (exports.CampaignType = {}));
var AdUnitType;
(function (AdUnitType) {
    AdUnitType[AdUnitType["Banner"] = 0] = "Banner";
    AdUnitType[AdUnitType["Video"] = 1] = "Video";
    AdUnitType[AdUnitType["Audio"] = 2] = "Audio";
    AdUnitType[AdUnitType["Native"] = 3] = "Native";
    AdUnitType[AdUnitType["Pmp"] = 4] = "Pmp";
})(AdUnitType = exports.AdUnitType || (exports.AdUnitType = {}));
var RateLimitType;
(function (RateLimitType) {
    RateLimitType["ip"] = "ip";
    RateLimitType["uid"] = "uid";
})(RateLimitType = exports.RateLimitType || (exports.RateLimitType = {}));
var ReviewStatus;
(function (ReviewStatus) {
    ReviewStatus[ReviewStatus["inQue"] = 0] = "inQue";
    ReviewStatus[ReviewStatus["inReview"] = 1] = "inReview";
    ReviewStatus[ReviewStatus["awaitingUserChanges"] = 2] = "awaitingUserChanges";
    ReviewStatus[ReviewStatus["approved"] = 3] = "approved";
    ReviewStatus[ReviewStatus["declined"] = 4] = "declined";
})(ReviewStatus = exports.ReviewStatus || (exports.ReviewStatus = {}));
var CampaignStatus;
(function (CampaignStatus) {
    CampaignStatus[CampaignStatus["created"] = 0] = "created";
    CampaignStatus[CampaignStatus["inReview"] = 1] = "inReview";
    CampaignStatus[CampaignStatus["ready"] = 2] = "ready";
    CampaignStatus[CampaignStatus["active"] = 3] = "active";
    CampaignStatus[CampaignStatus["paused"] = 4] = "paused";
    CampaignStatus[CampaignStatus["closedByUser"] = 5] = "closedByUser";
    CampaignStatus[CampaignStatus["expired"] = 6] = "expired";
    CampaignStatus[CampaignStatus["exhausted"] = 7] = "exhausted";
    CampaignStatus[CampaignStatus["draft"] = 8] = "draft";
    CampaignStatus[CampaignStatus["rejected"] = 9] = "rejected";
})(CampaignStatus = exports.CampaignStatus || (exports.CampaignStatus = {}));
