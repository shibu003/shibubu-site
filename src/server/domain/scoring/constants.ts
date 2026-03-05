import { SCORING_PARAMS_V1 } from './types';

// Exact V1 Constants
export const SCORING_CONSTANTS = {
    // V1 Params
    PARAMS_V1: {
        alpha: 1.0,   // Stability
        beta: 0.5,    // Contribution
        gamma: 0.7,   // Trust
        delta: 0.8,   // Longevity
        epsilon: 0.7, // Risk
        tau: 1.0,     // Softmax Temp
        kappa: 1.0,   // Vote Multiplier
    } as SCORING_PARAMS_V1,

    // Caps & Limits
    QUOTA_CAP: 0.35,      // 35%
    TOKEN_POOL: 10000,    // Total tokens to mint/distribute
    TOKEN_USER_CAP: 2500, // Max tokens per user
    VOTE_WEIGHT_CAP: 2.0, // Max vote weight

    // Defaults
    DEFAULT_LONGEVITY: 0.5,
    DEFAULT_FITNESS_NORM: 0.5,

    // Versions
    CURRENT_VERSION: "SCORING_PARAMS_V1"
};
