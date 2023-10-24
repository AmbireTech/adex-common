"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gender = exports.IPLocationService = exports.ConnectionType = exports.DeviceType = exports.LocationType = exports.IQGMediaRating = exports.ContentContext = exports.VolumeNormalizationMode = exports.FeedType = exports.ContentDeliveryMethod = exports.CompanionType = exports.ProductionQuality = exports.StartDelay = exports.PlaybackCessationMode = exports.PlaybackMethod = exports.VideoPlacementType = exports.Protocol = exports.VideoLinearity = exports.APIFramework = exports.ExpandableDirection = exports.AdPosition = exports.CreativeAttribute = exports.BannerAdType = void 0;
var BannerAdType;
(function (BannerAdType) {
    BannerAdType[BannerAdType["XHTMLTextAd"] = 1] = "XHTMLTextAd";
    BannerAdType[BannerAdType["XHTMLBannerAd"] = 2] = "XHTMLBannerAd";
    BannerAdType[BannerAdType["JavaScriptAdTag"] = 3] = "JavaScriptAdTag";
    BannerAdType[BannerAdType["Iframe"] = 4] = "Iframe";
})(BannerAdType = exports.BannerAdType || (exports.BannerAdType = {}));
var CreativeAttribute;
(function (CreativeAttribute) {
    CreativeAttribute[CreativeAttribute["AudioAdAutoPlay"] = 1] = "AudioAdAutoPlay";
    CreativeAttribute[CreativeAttribute["AudioAdUserInitiated"] = 2] = "AudioAdUserInitiated";
    CreativeAttribute[CreativeAttribute["ExpandableAutomatic"] = 3] = "ExpandableAutomatic";
    CreativeAttribute[CreativeAttribute["ExpandableUserInitiatedClick"] = 4] = "ExpandableUserInitiatedClick";
    CreativeAttribute[CreativeAttribute["ExpandableUserInitiatedRollover"] = 5] = "ExpandableUserInitiatedRollover";
    CreativeAttribute[CreativeAttribute["InBannerVideoAdAutoPlay"] = 6] = "InBannerVideoAdAutoPlay";
    CreativeAttribute[CreativeAttribute["InBannerVideoAdUserInitiated"] = 7] = "InBannerVideoAdUserInitiated";
    CreativeAttribute[CreativeAttribute["Pop"] = 8] = "Pop";
    CreativeAttribute[CreativeAttribute["ProvocativeImagery"] = 9] = "ProvocativeImagery";
    CreativeAttribute[CreativeAttribute["ShakyFlashingImagery"] = 10] = "ShakyFlashingImagery";
    CreativeAttribute[CreativeAttribute["Surveys"] = 11] = "Surveys";
    CreativeAttribute[CreativeAttribute["TextOnly"] = 12] = "TextOnly";
    CreativeAttribute[CreativeAttribute["UserInteractive"] = 13] = "UserInteractive";
    CreativeAttribute[CreativeAttribute["WindowsDialogOrAlertStyle"] = 14] = "WindowsDialogOrAlertStyle";
    CreativeAttribute[CreativeAttribute["HasAudioOnOffButton"] = 15] = "HasAudioOnOffButton";
    CreativeAttribute[CreativeAttribute["AdProvidesSkipButton"] = 16] = "AdProvidesSkipButton";
    CreativeAttribute[CreativeAttribute["AdobeFlash"] = 17] = "AdobeFlash";
})(CreativeAttribute = exports.CreativeAttribute || (exports.CreativeAttribute = {}));
var AdPosition;
(function (AdPosition) {
    AdPosition[AdPosition["Unknown"] = 0] = "Unknown";
    AdPosition[AdPosition["AboveTheFold"] = 1] = "AboveTheFold";
    AdPosition[AdPosition["Deprecated"] = 2] = "Deprecated";
    AdPosition[AdPosition["BelowTheFold"] = 3] = "BelowTheFold";
    AdPosition[AdPosition["Header"] = 4] = "Header";
    AdPosition[AdPosition["Footer"] = 5] = "Footer";
    AdPosition[AdPosition["Sidebar"] = 6] = "Sidebar";
    AdPosition[AdPosition["FullScreen"] = 7] = "FullScreen";
})(AdPosition = exports.AdPosition || (exports.AdPosition = {}));
var ExpandableDirection;
(function (ExpandableDirection) {
    ExpandableDirection[ExpandableDirection["Left"] = 1] = "Left";
    ExpandableDirection[ExpandableDirection["Right"] = 2] = "Right";
    ExpandableDirection[ExpandableDirection["Up"] = 3] = "Up";
    ExpandableDirection[ExpandableDirection["Down"] = 4] = "Down";
    ExpandableDirection[ExpandableDirection["FullScreen"] = 5] = "FullScreen";
})(ExpandableDirection = exports.ExpandableDirection || (exports.ExpandableDirection = {}));
var APIFramework;
(function (APIFramework) {
    APIFramework[APIFramework["VPAID10"] = 1] = "VPAID10";
    APIFramework[APIFramework["VPAID20"] = 2] = "VPAID20";
    APIFramework[APIFramework["MRAID10"] = 3] = "MRAID10";
    APIFramework[APIFramework["ORMMA"] = 4] = "ORMMA";
    APIFramework[APIFramework["MRAID20"] = 5] = "MRAID20";
    APIFramework[APIFramework["MRAID30"] = 6] = "MRAID30";
    APIFramework[APIFramework["OMID10"] = 7] = "OMID10";
    APIFramework[APIFramework["SIMID10"] = 8] = "SIMID10";
    APIFramework[APIFramework["SIMID11"] = 9] = "SIMID11";
})(APIFramework = exports.APIFramework || (exports.APIFramework = {}));
var VideoLinearity;
(function (VideoLinearity) {
    VideoLinearity[VideoLinearity["Linear"] = 1] = "Linear";
    VideoLinearity[VideoLinearity["NonLinear"] = 2] = "NonLinear";
})(VideoLinearity = exports.VideoLinearity || (exports.VideoLinearity = {}));
var Protocol;
(function (Protocol) {
    Protocol[Protocol["VAST10"] = 1] = "VAST10";
    Protocol[Protocol["VAST20"] = 2] = "VAST20";
    Protocol[Protocol["VAST30"] = 3] = "VAST30";
    Protocol[Protocol["VAST10Wrapper"] = 4] = "VAST10Wrapper";
    Protocol[Protocol["VAST20Wrapper"] = 5] = "VAST20Wrapper";
    Protocol[Protocol["VAST30Wrapper"] = 6] = "VAST30Wrapper";
    Protocol[Protocol["VAST40"] = 7] = "VAST40";
    Protocol[Protocol["VAST40Wrapper"] = 8] = "VAST40Wrapper";
    Protocol[Protocol["DAAST10"] = 9] = "DAAST10";
    Protocol[Protocol["DAAST10Wrapper"] = 10] = "DAAST10Wrapper";
})(Protocol = exports.Protocol || (exports.Protocol = {}));
var VideoPlacementType;
(function (VideoPlacementType) {
    VideoPlacementType[VideoPlacementType["InStream"] = 1] = "InStream";
    VideoPlacementType[VideoPlacementType["InBanner"] = 2] = "InBanner";
    VideoPlacementType[VideoPlacementType["InArticle"] = 3] = "InArticle";
    VideoPlacementType[VideoPlacementType["InFeed"] = 4] = "InFeed";
    VideoPlacementType[VideoPlacementType["InterstitialSliderFloating"] = 5] = "InterstitialSliderFloating";
})(VideoPlacementType = exports.VideoPlacementType || (exports.VideoPlacementType = {}));
var PlaybackMethod;
(function (PlaybackMethod) {
    PlaybackMethod[PlaybackMethod["AutoPlaySoundOn"] = 1] = "AutoPlaySoundOn";
    PlaybackMethod[PlaybackMethod["AutoPlaySoundOff"] = 2] = "AutoPlaySoundOff";
    PlaybackMethod[PlaybackMethod["ClickSoundOn"] = 3] = "ClickSoundOn";
    PlaybackMethod[PlaybackMethod["MouseOverSoundOn"] = 4] = "MouseOverSoundOn";
    PlaybackMethod[PlaybackMethod["EnteringViewportSoundOn"] = 5] = "EnteringViewportSoundOn";
    PlaybackMethod[PlaybackMethod["EnteringViewportSoundOff"] = 6] = "EnteringViewportSoundOff";
})(PlaybackMethod = exports.PlaybackMethod || (exports.PlaybackMethod = {}));
var PlaybackCessationMode;
(function (PlaybackCessationMode) {
    PlaybackCessationMode[PlaybackCessationMode["OnVideoCompletion"] = 1] = "OnVideoCompletion";
    PlaybackCessationMode[PlaybackCessationMode["OnLeavingViewport"] = 2] = "OnLeavingViewport";
    PlaybackCessationMode[PlaybackCessationMode["OnLeavingViewportUntilVideoCompletion"] = 3] = "OnLeavingViewportUntilVideoCompletion";
})(PlaybackCessationMode = exports.PlaybackCessationMode || (exports.PlaybackCessationMode = {}));
var StartDelay;
(function (StartDelay) {
    StartDelay[StartDelay["PreRoll"] = 0] = "PreRoll";
    StartDelay[StartDelay["GenericMidRoll"] = -1] = "GenericMidRoll";
    StartDelay[StartDelay["GenericPostRoll"] = -2] = "GenericPostRoll";
})(StartDelay = exports.StartDelay || (exports.StartDelay = {}));
var ProductionQuality;
(function (ProductionQuality) {
    ProductionQuality[ProductionQuality["Unknown"] = 0] = "Unknown";
    ProductionQuality[ProductionQuality["Professional"] = 1] = "Professional";
    ProductionQuality[ProductionQuality["Prosumer"] = 2] = "Prosumer";
    ProductionQuality[ProductionQuality["UserGenerated"] = 3] = "UserGenerated";
})(ProductionQuality = exports.ProductionQuality || (exports.ProductionQuality = {}));
var CompanionType;
(function (CompanionType) {
    CompanionType[CompanionType["Static"] = 1] = "Static";
    CompanionType[CompanionType["HTML"] = 2] = "HTML";
    CompanionType[CompanionType["Iframe"] = 3] = "Iframe";
})(CompanionType = exports.CompanionType || (exports.CompanionType = {}));
var ContentDeliveryMethod;
(function (ContentDeliveryMethod) {
    ContentDeliveryMethod[ContentDeliveryMethod["Streaming"] = 1] = "Streaming";
    ContentDeliveryMethod[ContentDeliveryMethod["Progressive"] = 2] = "Progressive";
    ContentDeliveryMethod[ContentDeliveryMethod["Download"] = 3] = "Download";
})(ContentDeliveryMethod = exports.ContentDeliveryMethod || (exports.ContentDeliveryMethod = {}));
var FeedType;
(function (FeedType) {
    FeedType[FeedType["MusicService"] = 1] = "MusicService";
    FeedType[FeedType["FMAMBroadcast"] = 2] = "FMAMBroadcast";
    FeedType[FeedType["Podcast"] = 3] = "Podcast";
})(FeedType = exports.FeedType || (exports.FeedType = {}));
var VolumeNormalizationMode;
(function (VolumeNormalizationMode) {
    VolumeNormalizationMode[VolumeNormalizationMode["None"] = 0] = "None";
    VolumeNormalizationMode[VolumeNormalizationMode["AdVolumeAverageNormalizedToContent"] = 1] = "AdVolumeAverageNormalizedToContent";
    VolumeNormalizationMode[VolumeNormalizationMode["AdVolumePeakNormalizedToContent"] = 2] = "AdVolumePeakNormalizedToContent";
    VolumeNormalizationMode[VolumeNormalizationMode["AdLoudnessNormalizedToContent"] = 3] = "AdLoudnessNormalizedToContent";
    VolumeNormalizationMode[VolumeNormalizationMode["CustomVolumeNormalization"] = 4] = "CustomVolumeNormalization";
})(VolumeNormalizationMode = exports.VolumeNormalizationMode || (exports.VolumeNormalizationMode = {}));
var ContentContext;
(function (ContentContext) {
    ContentContext[ContentContext["Video"] = 1] = "Video";
    ContentContext[ContentContext["Game"] = 2] = "Game";
    ContentContext[ContentContext["Music"] = 3] = "Music";
    ContentContext[ContentContext["Application"] = 4] = "Application";
    ContentContext[ContentContext["Text"] = 5] = "Text";
    ContentContext[ContentContext["Other"] = 6] = "Other";
    ContentContext[ContentContext["Unknown"] = 7] = "Unknown";
})(ContentContext = exports.ContentContext || (exports.ContentContext = {}));
var IQGMediaRating;
(function (IQGMediaRating) {
    IQGMediaRating[IQGMediaRating["AllAudiences"] = 1] = "AllAudiences";
    IQGMediaRating[IQGMediaRating["EveryoneOver12"] = 2] = "EveryoneOver12";
    IQGMediaRating[IQGMediaRating["MatureAudiences"] = 3] = "MatureAudiences";
})(IQGMediaRating = exports.IQGMediaRating || (exports.IQGMediaRating = {}));
var LocationType;
(function (LocationType) {
    LocationType[LocationType["GPSLocation"] = 1] = "GPSLocation";
    LocationType[LocationType["IPAddress"] = 2] = "IPAddress";
    LocationType[LocationType["UserProvided"] = 3] = "UserProvided";
})(LocationType = exports.LocationType || (exports.LocationType = {}));
var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["MobileTablet"] = 1] = "MobileTablet";
    DeviceType[DeviceType["PersonalComputer"] = 2] = "PersonalComputer";
    DeviceType[DeviceType["ConnectedTV"] = 3] = "ConnectedTV";
    DeviceType[DeviceType["Phone"] = 4] = "Phone";
    DeviceType[DeviceType["Tablet"] = 5] = "Tablet";
    DeviceType[DeviceType["ConnectedDevice"] = 6] = "ConnectedDevice";
    DeviceType[DeviceType["SetTopBox"] = 7] = "SetTopBox";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
var ConnectionType;
(function (ConnectionType) {
    ConnectionType[ConnectionType["Unknown"] = 0] = "Unknown";
    ConnectionType[ConnectionType["Ethernet"] = 1] = "Ethernet";
    ConnectionType[ConnectionType["WIFI"] = 2] = "WIFI";
    ConnectionType[ConnectionType["CellularNetworkUnknownGeneration"] = 3] = "CellularNetworkUnknownGeneration";
    ConnectionType[ConnectionType["CellularNetwork2G"] = 4] = "CellularNetwork2G";
    ConnectionType[ConnectionType["CellularNetwork3G"] = 5] = "CellularNetwork3G";
    ConnectionType[ConnectionType["CellularNetwork4G"] = 6] = "CellularNetwork4G";
})(ConnectionType = exports.ConnectionType || (exports.ConnectionType = {}));
var IPLocationService;
(function (IPLocationService) {
    IPLocationService[IPLocationService["IP2Location"] = 1] = "IP2Location";
    IPLocationService[IPLocationService["Neustar"] = 2] = "Neustar";
    IPLocationService[IPLocationService["MaxMind"] = 3] = "MaxMind";
    IPLocationService[IPLocationService["NetAcuity"] = 4] = "NetAcuity";
})(IPLocationService = exports.IPLocationService || (exports.IPLocationService = {}));
var Gender;
(function (Gender) {
    Gender["Male"] = "M";
    Gender["Female"] = "F";
    Gender["Other"] = "O";
})(Gender = exports.Gender || (exports.Gender = {}));
