export type Format = {
    /** Width in device independent pixels (DIPS). */
    w?: number;
    /** Height in device independent pixels (DIPS). */
    h?: number;
    /** Relative width when expressing size as a ratio. */
    wratio?: number;
    /** Relative height when expressing size as a ratio. */
    hratio?: number;
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
    IMPRESSION?: Bound;
    CLICK?: Bound;
};
export type TargetingRuleProps = 'onlyShowIf' | 'if' | 'and' | 'ifNot' | 'ifNot' | 'do' | 'in' | 'nin' | 'intersects' | 'at' | 'eq' | 'lt' | 'gt' | 'gte' | 'not' | 'or' | 'div' | 'mod' | 'mul' | 'add' | 'sub' | 'max' | 'min' | 'mulDiv' | 'bn' | 'split' | 'endsWith' | 'startsWith' | 'get' | 'set';
export type TargetingRule = {
    [key in TargetingRuleProps]: string | boolean | TargetingRule[] | number | bigint;
};
export type TargetingInputProps = 'in' | 'nin' | 'allIn';
export type TargetingInputSingle = {
    [key in TargetingInputProps]: string[];
};
export type TargetingInput = {
    version: string;
    inputs: {
        location: TargetingInputSingle[];
        categories: TargetingInputSingle[];
        publishers: TargetingInputSingle[];
    };
};
export type Campaign = {
    id: string;
    creator: string;
    depositAssetAddr: string;
    depositAmount: bigint;
    network: number;
    /** Timestamp in ms */
    created: bigint;
    nonce: bigint;
    title: string;
    adUnits: AdUnit[];
    validators: Validator[];
    pricingBounds: PricingBound;
    targetingRules: TargetingRule[];
    targetingInput: TargetingInput;
};