export declare enum EventType {
    CLICK = "CLICK",
    IMPRESSION = "IMPRESSION"
}
export declare enum CampaignType {
    DSP = 0,
    ZK = 1
}
export type Format = {
    /** Width in device independent pixels (DIPS). */
    w?: number;
    /** Height in device independent pixels (DIPS). */
    h?: number;
};
export type Banner = {
    format: Format;
    mime: string;
    mediaUrl: string;
    targetUrl: string;
    created: bigint;
};
export declare enum AdUnitType {
    Banner = 0,
    Video = 1,
    Audio = 2,
    Native = 3,
    Pmp = 4
}
export type AdUnit = {
    id: string;
    title: string;
    type: AdUnitType;
    /** Banner object */
    banner?: Banner;
};
export type Validator = {
    id: string;
    url: string;
    fee: bigint;
};
export type Bound = {
    min: bigint;
    max: bigint;
};
export type PricingBound = {
    [EventType.IMPRESSION]?: Bound;
    [EventType.CLICK]?: Bound;
};
export declare enum RateLimitType {
    ip = "ip",
    uid = "uid"
}
export type RateLimit = {
    type: RateLimitType;
    timeframe: bigint;
};
export type EventSubmissionRule = {
    uids: string[];
    evTypes?: EventType[] | null;
    rateLimit?: RateLimit;
};
export type EventSubmission = {
    allow: EventSubmissionRule;
};
export type TargetingRuleProps = 'onlyShowIf' | 'if' | 'and' | 'ifNot' | 'ifNot' | 'do' | 'in' | 'nin' | 'intersects' | 'at' | 'eq' | 'lt' | 'gt' | 'gte' | 'not' | 'or' | 'div' | 'mod' | 'mul' | 'add' | 'sub' | 'max' | 'min' | 'mulDiv' | 'bn' | 'split' | 'endsWith' | 'startsWith' | 'get' | 'set';
export type TargetingRule = {
    [key in TargetingRuleProps]?: TargetingRule | TargetingRule[];
} | string | number | bigint | boolean;
export type AdvancedInputProps = 'includeIncentivized' | 'disableFrequencyCapping' | 'limitDailyAverageSpending';
/** Use all in for easier ui state management */
export type TargetingInputApplyProp = 'in' | 'nin' | 'all';
export type TargetingInputSingle = {
    in: string[];
    nin: string[];
    apply: TargetingInputApplyProp;
};
export type AdvancedInputSingle = {
    [key in AdvancedInputProps]: boolean;
};
export type Placement = 'site' | 'app';
export type TargetingPlacementInput = {
    in: Placement[];
    nin: Placement[];
    apply: TargetingInputApplyProp;
};
export type TargetingInput = {
    version: string;
    inputs: {
        location: TargetingInputSingle;
        categories: TargetingInputSingle;
        publishers: TargetingInputSingle;
        placements: TargetingPlacementInput;
        advanced: AdvancedInputSingle;
    };
};
export declare enum ReviewStatus {
    inQue = 0,
    inReview = 1,
    awaitingUserChanges = 2,
    approved = 3,
    declined = 4
}
export declare enum CampaignStatus {
    created = 0,
    inReview = 1,
    ready = 2,
    active = 3,
    closedByUser = 4,
    expired = 5
}
export type Campaign = {
    type: CampaignType;
    id: string;
    outpaceAssetAddr: string;
    outpaceAssetDecimals: number;
    outpaceAddr: string;
    campaignBudget: bigint;
    outpaceChainId: number;
    /** Timestamp in ms */
    created: bigint;
    nonce: bigint;
    /** wallet account address */
    owner: string;
    title: string;
    adUnits: AdUnit[];
    validators: Validator[];
    pricingBounds: PricingBound;
    targetingRules: TargetingRule[];
    eventSubmission?: EventSubmission[];
    activeFrom: bigint;
    activeTo: bigint;
    targetingInput: TargetingInput;
    status: CampaignStatus;
    reviewStatus: ReviewStatus;
    reviewMessage?: string;
    /** Timestamp in ms */
    modified: bigint;
    archived: boolean;
    /** signer address - the address that signs wallet tx/msg */
    createdBy: string;
    /** user address */
    lastModifiedBy: string;
};
