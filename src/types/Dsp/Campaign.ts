export enum EventType {
    CLICK = 'CLICK',
    IMPRESSION = 'IMPRESSION'
}

export enum CampaignType {
    DSP,
    ZK
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
        location: TargetingInputSingle
        categories: TargetingInputSingle
        publishers: TargetingInputSingle
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
    type: CampaignType
    // Spec Props - immutable
    id: string
    outpaceAssetAddr: string
    // NOTE: temp until we have tokens cfg/lists where we van get this info
    outpaceAssetDecimals: string
    outpaceAddr: string
    spendLimit: bigint
    outpaceChainId: number
    /** Timestamp in ms */
    created: bigint
    nonce: bigint

    // Spec Props - mutable
    /** wallet account address */
    owner: string
    title: string
    adUnits: AdUnit[]
    validators: Validator[]
    pricingBounds: PricingBound
    targetingRules: TargetingRule[]
    // TODO: this should be on an account/wallet level as there will be on chanel per user/chain/token
    // + unlimited rate limit from backend ADX vault (for the dsp events)
    eventSubmission?: EventSubmission[]
    //** activeFrom - can not be before created */
    activeFrom: bigint
    activeTo: bigint

    // User inputs
    targetingInput: TargetingInput

    // Statuses
    status: CampaignStatus
    reviewStatus: ReviewStatus
    reviewMessage?: string

    // other
    /** Timestamp in ms */
    modified: bigint
    archived: boolean
    /** signer address - the address that signs wallet tx/msg */
    createdBy: string
    /** user address */
    lastModifiedBy: string
}
