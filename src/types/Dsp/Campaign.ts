export enum EventType {
    CLICK = 'CLICK',
    IMPRESSION = 'IMPRESSION'
}

export type Format = {
    /** Width in device independent pixels (DIPS). */
    w?: number
    /** Height in device independent pixels (DIPS). */
    h?: number
}

export type Banner = {
    format: Format
    mime: string
    mediaUrl: string
    targetUrl: string
    created: bigint
}

export enum AdUnitType {
    Banner,
    Video,
    Audio,
    Native,
    Pmp
}

export type AdUnit = {
    id: string
    title: string
    type: AdUnitType
    /** Banner object */
    banner?: Banner
    //     /** Video object */
    //     video?: Video
    //     /** Audio object */
    //     audio?: Audio
    //     /** Native object */
    //     native?: Native
    //     /** Private marketplace object */
    //     pmp?: Pmp
}

export type Validator = {
    id: string
    url: string
    fee: bigint
}

export type Bound = {
    min: bigint
    max: bigint
}

export type PricingBound = {
    [EventType.IMPRESSION]?: Bound
    [EventType.CLICK]?: Bound
}

export enum RateLimitType {
    ip = 'ip',
    uid = 'uid'
}

export type RateLimit = {
    type: RateLimitType
    timeframe: bigint
}

export type EventSubmissionRule = {
    uids: string[]
    evTypes?: EventType[] | null
    rateLimit?: RateLimit
}

export type EventSubmission = {
    allow: EventSubmissionRule
}

export type TargetingRuleProps =
    | 'onlyShowIf'
    | 'if'
    | 'and'
    | 'ifNot'
    | 'ifNot'
    | 'do'
    | 'in'
    | 'nin'
    | 'intersects'
    | 'at'
    | 'eq'
    | 'lt'
    | 'gt'
    | 'gte'
    | 'not'
    | 'or'
    | 'div'
    | 'mod'
    | 'mul'
    | 'add'
    | 'sub'
    | 'max'
    | 'min'
    | 'mulDiv'
    | 'bn'
    | 'split'
    | 'endsWith'
    | 'startsWith'
    | 'get'
    | 'set'

export type TargetingRule = {
    [key in TargetingRuleProps]: string | boolean | TargetingRule[] | number | bigint
}

export type TargetingInputProps = 'in' | 'nin' | 'allIn'

export type TargetingInputSingle = {
    [key in TargetingInputProps]: string[]
}

export type TargetingInput = {
    version: string
    inputs: {
        location: TargetingInputSingle[]
        categories: TargetingInputSingle[]
        publishers: TargetingInputSingle[]
    }
}

export enum ReviewStatus {
    inQue,
    inReview,
    awaitingUserChanges,
    approved,
    declined
}

export enum CampaignStatus {
    created,
    inReview,
    active,
    closedByUser,
    expired
}

// TODO:  assets cfg - chain, addr, name etc.

export type Campaign = {
    // Spec Props - immutable
    id: string
    outpaceAssetAddr: string
    outpaceAddr: string
    spendLimit: bigint
    outpaceChainId: number
    /** Timestamp in ms */
    created: bigint
    nonce: bigint

    // Spec Props - mutable
    owner: string
    title: string
    adUnits: AdUnit[]
    validators: Validator[]
    pricingBounds: PricingBound
    targetingRules: TargetingRule[]
    eventSubmission: EventSubmission[]
    activeFrom: bigint

    // User inputs
    targetingInput: TargetingInput

    // Statuses
    status: CampaignStatus
    reviewStatus: ReviewStatus
    reviewMessage: string
    /** Timestamp in ms */
    modified: bigint
    archived: boolean
}
