export declare enum BannerAdType {
    XHTMLTextAd = 1,
    XHTMLBannerAd = 2,
    JavaScriptAdTag = 3,
    Iframe = 4
}
export declare enum CreativeAttribute {
    AudioAdAutoPlay = 1,
    AudioAdUserInitiated = 2,
    ExpandableAutomatic = 3,
    ExpandableUserInitiatedClick = 4,
    ExpandableUserInitiatedRollover = 5,
    InBannerVideoAdAutoPlay = 6,
    InBannerVideoAdUserInitiated = 7,
    Pop = 8,
    ProvocativeImagery = 9,
    ShakyFlashingImagery = 10,
    Surveys = 11,
    TextOnly = 12,
    UserInteractive = 13,
    WindowsDialogOrAlertStyle = 14,
    HasAudioOnOffButton = 15,
    AdProvidesSkipButton = 16,
    AdobeFlash = 17
}
export declare enum AdPosition {
    Unknown = 0,
    AboveTheFold = 1,
    Deprecated = 2,
    BelowTheFold = 3,
    Header = 4,
    Footer = 5,
    Sidebar = 6,
    FullScreen = 7
}
export declare enum ExpandableDirection {
    Left = 1,
    Right = 2,
    Up = 3,
    Down = 4,
    FullScreen = 5
}
export declare enum APIFramework {
    VPAID10 = 1,
    VPAID20 = 2,
    MRAID10 = 3,
    ORMMA = 4,
    MRAID20 = 5,
    MRAID30 = 6,
    OMID10 = 7,
    SIMID10 = 8,
    SIMID11 = 9
}
export declare enum VideoLinearity {
    Linear = 1,
    NonLinear = 2
}
export declare enum Protocol {
    VAST10 = 1,
    VAST20 = 2,
    VAST30 = 3,
    VAST10Wrapper = 4,
    VAST20Wrapper = 5,
    VAST30Wrapper = 6,
    VAST40 = 7,
    VAST40Wrapper = 8,
    DAAST10 = 9,
    DAAST10Wrapper = 10
}
export declare enum VideoPlacementType {
    InStream = 1,
    InBanner = 2,
    InArticle = 3,
    InFeed = 4,
    InterstitialSliderFloating = 5
}
export declare enum PlaybackMethod {
    AutoPlaySoundOn = 1,
    AutoPlaySoundOff = 2,
    ClickSoundOn = 3,
    MouseOverSoundOn = 4,
    EnteringViewportSoundOn = 5,
    EnteringViewportSoundOff = 6
}
export declare enum PlaybackCessationMode {
    OnVideoCompletion = 1,
    OnLeavingViewport = 2,
    OnLeavingViewportUntilVideoCompletion = 3
}
export declare enum StartDelay {
    PreRoll = 0,
    GenericMidRoll = -1,
    GenericPostRoll = -2
}
export declare enum ProductionQuality {
    Unknown = 0,
    Professional = 1,
    Prosumer = 2,
    UserGenerated = 3
}
export declare enum CompanionType {
    Static = 1,
    HTML = 2,
    Iframe = 3
}
export declare enum ContentDeliveryMethod {
    Streaming = 1,
    Progressive = 2,
    Download = 3
}
export declare enum FeedType {
    MusicService = 1,
    FMAMBroadcast = 2,
    Podcast = 3
}
export declare enum VolumeNormalizationMode {
    None = 0,
    AdVolumeAverageNormalizedToContent = 1,
    AdVolumePeakNormalizedToContent = 2,
    AdLoudnessNormalizedToContent = 3,
    CustomVolumeNormalization = 4
}
export declare enum ContentContext {
    Video = 1,
    Game = 2,
    Music = 3,
    Application = 4,
    Text = 5,
    Other = 6,
    Unknown = 7
}
export declare enum IQGMediaRating {
    AllAudiences = 1,
    EveryoneOver12 = 2,
    MatureAudiences = 3
}
export declare enum LocationType {
    GPSLocation = 1,
    IPAddress = 2,
    UserProvided = 3
}
export declare enum DeviceType {
    MobileTablet = 1,
    PersonalComputer = 2,
    ConnectedTV = 3,
    Phone = 4,
    Tablet = 5,
    ConnectedDevice = 6,
    SetTopBox = 7
}
export declare enum ConnectionType {
    Unknown = 0,
    Ethernet = 1,
    WIFI = 2,
    CellularNetworkUnknownGeneration = 3,
    CellularNetwork2G = 4,
    CellularNetwork3G = 5,
    CellularNetwork4G = 6
}
export declare enum IPLocationService {
    IP2Location = 1,
    Neustar = 2,
    MaxMind = 3,
    NetAcuity = 4
}
export declare enum Gender {
    Male = "M",
    Female = "F",
    Other = "O"
}
