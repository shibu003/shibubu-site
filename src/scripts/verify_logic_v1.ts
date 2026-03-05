// Verification Script for Instruction 7 Logic
// Run with: npx tsx src/scripts/verify_logic_v1.ts

import { calculateRawFitness, calculateLongevity } from "../server/domain/scoring/fitness";
import { normalizeScores } from "../server/domain/scoring/normalize";
import { computeAllocation } from "../server/domain/scoring/allocation";
import { SCORING_CONSTANTS } from "../server/domain/scoring/constants";

async function verify() {
    console.log("=== Verifying Scoring Logic V1 ===");

    // 1. Fitness Calculation
    console.log("\n[1] Fitness Formulas");
    const counters = { n_fail: 0, n_warn: 0, n_auditFail: 0, n_auditWarn: 0, n_suspicious: 0, n_published: 10 };
    const prevL = 0.5, prevFNorm = 0.5;
    const { fitness, components } = calculateRawFitness(counters, prevL, prevFNorm);

    // Check values roughly
    // S = exp(0) = 1.0
    // C = ln(11)/ln(11) = 1.0
    // T = 1 - 0 = 1.0
    // L = 0.9*0.5 + 0.1*0.5 = 0.5
    // R = 0
    // F_raw = 1.0*1 + 0.5*1 + 0.7*1 + 0.8*0.5 - 0.7*0 
    //       = 1.0 + 0.5 + 0.7 + 0.4 = 2.6

    console.log(`Expected F_raw ~ 2.6, Got: ${fitness}`);
    if (Math.abs(fitness - 2.6) < 0.001) console.log("✅ Fitness Formula Match");
    else console.error("❌ Fitness Mismatch");

    // 2. Normalization Edge Case
    console.log("\n[2] Normalization Edge Case (Identical Scores)");
    const agentsIdentical = [
        { agentId: "a1", fitness_raw: 2.0 },
        { agentId: "a2", fitness_raw: 2.0 },
        { agentId: "a3", fitness_raw: 2.0 }
    ];
    const normMap = normalizeScores(agentsIdentical);
    const v1 = normMap.get("a1");
    if (v1 === 0.5) console.log("✅ Fallback to 0.5 works");
    else console.error(`❌ Normalization edge case failed: ${v1}`);

    // 3. Normalization Standard
    console.log("\n[3] Normalization Standard");
    // P5=0, P95=10 -> range=10. val=5 -> norm=0.5
    // Need enough data points for P5/P95 logic?
    // normalize logic uses floor(N*0.05). For N=3, p5=0, p95=2.
    // values: 0, 5, 10. P5=0, P95=10.
    const agentsStandard = [
        { agentId: "min", fitness_raw: 0.0 },
        { agentId: "mid", fitness_raw: 5.0 },
        { agentId: "max", fitness_raw: 10.0 },
        { agentId: "outlier", fitness_raw: 100.0 } // Should be clipped?
        // Wait, normalize implementation uses P95 from sorted array.
        // Sorted: 0, 5, 10, 100. N=4.
        // p5 idx = floor(0.2) = 0 -> val=0
        // p95 idx = floor(3.8) = 3 -> val=100
        // range=100.
        // mid (5) -> (5-0)/100 = 0.05
    ];
    // Let's testing range logic specifically.
    // Ensure 0..1 clamping.
    const normStandard = normalizeScores(agentsStandard);
    console.log("Norm results:", Object.fromEntries(normStandard));
    if (normStandard.get("min") === 0 && normStandard.get("outlier") === 1) console.log("✅ Normalization Bounds Check");
    else console.error("❌ Normalization Bounds Failed");


    // 4. Allocation Caps
    console.log("\n[4] Allocation Caps");
    // Create scenario where one agent dominates
    const agentsAlloc = [
        { agentId: "whale", fitness_raw: 100, fitness_norm: 1.0 },
        { agentId: "fish1", fitness_raw: 1, fitness_norm: 0.1 },
        { agentId: "fish2", fitness_raw: 1, fitness_norm: 0.1 },
    ];

    const allocations = computeAllocation(agentsAlloc);
    const whale = allocations.find(a => a.agentId === "whale")!;

    console.log("Whale Quota:", whale.quota_q);
    if (whale.quota_q <= SCORING_CONSTANTS.QUOTA_CAP + 0.0001) console.log("✅ Quota Cap Enforced");
    else console.error(`❌ Quota Cap Failed: ${whale.quota_q}`);

    // Check Sum Quota = 1.0
    const sumQuota = allocations.reduce((s, a) => s + a.quota_q, 0);
    console.log("Total Quota:", sumQuota);
    if (Math.abs(sumQuota - 1.0) < 0.001) console.log("✅ Quota Sums to 1.0");
    else console.error(`❌ Quota Sum Failed: ${sumQuota}`);

    // Check Minting Cap
    // Whale has norm 1.0 -> 10000 tokens base. Cap is 2500.
    console.log("Whale Minted:", whale.tokens_minted);
    if (whale.tokens_minted === 2500) console.log("✅ Token Cap Enforced");
    else console.error(`❌ Token Cap Failed: ${whale.tokens_minted}`);

    // Check Vote Cap
    // W = 1 + 1.0*1.0 = 2.0. Cap is 2.0.
    console.log("Whale Vote:", whale.vote_weight_w);
    if (whale.vote_weight_w <= 2.0) console.log("✅ Vote Cap Enforced");

    console.log("\n=== Logic Verification Complete ===");
}

verify().catch(e => console.error(e));
