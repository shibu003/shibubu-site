"use strict";(()=>{var t={};t.id=9811,t.ids=[9811],t.modules={3524:t=>{t.exports=require("@prisma/client")},399:t=>{t.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:t=>{t.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4770:t=>{t.exports=require("crypto")},3379:(t,e,a)=>{a.r(e),a.d(e,{originalPathname:()=>R,patchFetch:()=>$,requestAsyncStorage:()=>f,routeModule:()=>m,serverHooks:()=>I,staticGenerationAsyncStorage:()=>w});var n={};a.r(n),a.d(n,{POST:()=>h});var o=a(9303),r=a(8716),i=a(670),s=a(7070),u=a(3091);async function l(t,e){let{start:a,end:n}={start:new Date(t+"T00:00:00.000Z").toISOString(),end:new Date(t+"T23:59:59.999Z").toISOString()},o=new Map;for(let t of e)o.set(t,{publishedCount:0,failCount:0,warnCount:0,auditFailCount:0,auditWarnCount:0,suspiciousCount:0,prevLongevity:.5,prevFitnessNorm:.5});await u._.$queryRaw`
        SELECT entityId as billId, actorId 
        FROM EventLog 
        WHERE eventType = 'BILL_SUBMITTED' 
          AND ts BETWEEN ${a} AND ${n}
    `;let r=(await u._.$queryRaw`
        SELECT billId FROM DecisionBundle WHERE createdAt BETWEEN ${a} AND ${n}
    `).map(t=>t.billId),i=new Map;for(let t of(r.length>0&&(await u._.$queryRaw`
            SELECT entityId as billId, actorId FROM EventLog WHERE eventType = 'BILL_SUBMITTED'
        `).forEach(t=>i.set(t.billId,t.actorId)),r)){let e=i.get(t);e&&o.has(e)&&o.get(e).publishedCount++}for(let t of(await u._.$queryRaw`
        SELECT billId, verdict FROM GateDecision WHERE createdAt BETWEEN ${a} AND ${n}
    `)){let e=i.get(t.billId);e&&o.has(e)&&("FAIL"===t.verdict&&o.get(e).failCount++,"WARN"===t.verdict&&o.get(e).warnCount++)}for(let t of(await u._.$queryRaw`
        SELECT billId, verdict FROM AuditReport WHERE createdAt BETWEEN ${a} AND ${n}
    `)){let e=i.get(t.billId);e&&o.has(e)&&("FAIL"===t.verdict&&o.get(e).auditFailCount++,"WARN"===t.verdict&&o.get(e).auditWarnCount++)}for(let t of(await u._.$queryRaw`
        SELECT actorId FROM EventLog 
        WHERE eventType = 'SUSPICIOUS_EVENT' 
          AND ts BETWEEN ${a} AND ${n}
    `))t.actorId&&o.has(t.actorId)&&o.get(t.actorId).suspiciousCount++;for(let t of(await u._.$queryRaw`
        SELECT billId, reasons FROM GateDecision 
        WHERE createdAt BETWEEN ${a} AND ${n} 
          AND reasons LIKE '%SEMANTIC_EVASION%'
    `)){let e=i.get(t.billId);e&&o.has(e)&&o.get(e).suspiciousCount++}for(let t of e){let e=await u._.$queryRaw`
            SELECT longevity, fitnessNorm FROM AgentEpochScore 
            WHERE agentId = (SELECT id FROM Agent WHERE handle = ${t}) 
            ORDER BY createdAt DESC LIMIT 1
         `;if(e.length>0){let a=e[0];o.get(t).prevLongevity=a.longevity,o.get(t).prevFitnessNorm=a.fitnessNorm}}return o}let c={version:"v1.0",alpha:1,beta:.5,gamma:.7,delta:.8,epsilon:.7,tau:1,tauSmoothing:1.2,maxComputeQuota:.35,maxTokenMint:.25,kappa:1,maxVoteWeight:2,lambda:.9,totalTokensPerEpoch:1e4};function d(t){return Math.max(0,Math.min(1,t))}async function p(t,e){for(let a of e){let e=JSON.stringify(c);await u._.$executeRaw`
            INSERT OR REPLACE INTO "AgentEpochScore" (
                id, agentId, epochKey,
                stability, contribution, trust, longevity, risk,
                fitness, fitnessNorm,
                computeQuota, tokensMinted, voteWeight,
                params, inputsHash, createdAt
            ) VALUES (
                ${a.agentId+"_"+t}, ${a.agentId}, ${t},
                ${a.rawResult.rawFunctions.S}, ${a.rawResult.rawFunctions.C}, ${a.rawResult.rawFunctions.T}, 
                ${a.rawResult.rawFunctions.L}, ${a.rawResult.rawFunctions.R},
                ${a.rawResult.fitness}, ${a.fitnessNorm},
                ${a.allocation.computeQuota}, ${a.allocation.tokensMinted}, ${a.allocation.voteWeight},
                ${e}, ${a.inputsHash}, ${new Date().toISOString()}
            )
        `,await u._.$executeRaw`
            UPDATE "Agent" SET lastEpochKey = ${t}, updatedAt = ${new Date().toISOString()}
            WHERE id = ${a.agentId}
        `}let a=e.reduce((t,e)=>t+e.allocation.tokensMinted,0),n=e.map(t=>t.allocation.computeQuota).sort((t,e)=>t-e),o=0;if(n.length>0){let t=n.length,e=0,a=t*n.reduce((t,e)=>t+e,0);for(let a=0;a<t;a++)e+=(a+1)*n[a];o=2*e/a-(t+1)/t}let r={epochKey:t,scores:e.map(t=>({agentId:t.agentId,fitness:t.rawResult.fitness,quota:t.allocation.computeQuota}))};await u._.$executeRaw`
        INSERT OR REPLACE INTO "AllocationLedger" (
            id, epochKey, totalComputeUnits, totalTokensMinted, tau, gini, snapshot, createdAt
        ) VALUES (
            ${"ledger_"+t}, ${t}, ${1e4}, ${a}, 
            ${c.tau}, ${o}, ${JSON.stringify(r)}, ${new Date().toISOString()}
        )
    `}var g=a(7638);async function E(t){let e=t||function(t=new Date){return t.toISOString().split("T")[0]}();if(console.log(`[ScoringEngine] Starting run for epoch: ${e}`),0===(await u._.$queryRaw`SELECT id FROM Epoch WHERE epochKey = ${e}`).length){let t=new Date(e+"T00:00:00.000Z"),a=new Date(e+"T23:59:59.999Z");await u._.$executeRaw`
            INSERT INTO Epoch (id, epochKey, startAt, endAt, status, createdAt)
            VALUES (${"epoch_"+e}, ${e}, ${t.toISOString()}, ${a.toISOString()}, 'OPEN', ${new Date().toISOString()})
        `}let a=await u._.$queryRaw`SELECT id, handle FROM Agent WHERE status = 'ACTIVE'`,n=a.map(t=>t.handle),o=new Map(a.map(t=>[t.handle,t.id]));if(0===n.length)return console.log("[ScoringEngine] No active agents found."),{success:!0,count:0};let r=await l(e,n),i=[],s=[];for(let t of n){let e=r.get(t),a=function(t,e=.5){let a=d(Math.exp(-1.2*t.failCount-.25*t.warnCount)),n=d(Math.log(1+t.publishedCount)/Math.log(11)),o=d(1-.6*t.auditFailCount-.1*t.auditWarnCount),r=function(t,e){let a=c.lambda;return a*t+(1-a)*e}(t.prevLongevity,e),i=d(.1*t.warnCount+.2*t.suspiciousCount+.4*t.failCount),{alpha:s,beta:u,gamma:l,delta:p,epsilon:g}=c;return{rawFunctions:{S:a,C:n,T:o,L:r,R:i},fitness:s*a+u*n+l*o+p*r-g*i}}(e,e.prevFitnessNorm),n=o.get(t);i.push({agentId:n,rawFitness:a.fitness}),s.push({agentId:n,metrics:e,rawResult:a})}let E=function(t){if(0===t.length)return[];let e=t.map(t=>t.rawFitness);e.sort((t,e)=>t-e);let a=Math.floor(.05*e.length),n=Math.floor(.95*e.length),o=e[a],r=e[n];return t.map(t=>{let e=t.rawFitness;e<o&&(e=o),e>r&&(e=r);let a=0;return a=r>o?(e-o)/(r-o):.5,{agentId:t.agentId,rawFitness:t.rawFitness,fitnessNorm:a}})}(i),h=function(t){let e=t.length;if(0===e)return[];let a=e<=3?c.tauSmoothing:c.tau,n=t.map(t=>Math.exp(t.rawFitness/a)),o=n.reduce((t,e)=>t+e,0),r=n.map(t=>t/o),i=c.maxComputeQuota,s=0;if(r=r.map(t=>t>i?(s+=t-i,i):t),s>0){let t=r.filter(t=>t<i).length;if(t>0){let e=s/t;r=r.map(t=>t<i?Math.min(i,t+e):t)}}let u=c.totalTokensPerEpoch,l=u*c.maxTokenMint,d=t.map(t=>{let e=Math.round(u*t.fitnessNorm);return e>l&&(e=Math.round(l)),e}),p=t.map(t=>Math.min(1+c.kappa*t.fitnessNorm,c.maxVoteWeight));return t.map((t,e)=>({agentId:t.agentId,computeQuota:r[e],tokensMinted:d[e],voteWeight:p[e]}))}(E),m=s.map(t=>{let e=E.find(e=>e.agentId===t.agentId),a=h.find(e=>e.agentId===t.agentId),n=(0,g.x)(t.metrics);return{agentId:t.agentId,metrics:t.metrics,rawResult:t.rawResult,fitnessNorm:e.fitnessNorm,allocation:{computeQuota:a.computeQuota,tokensMinted:a.tokensMinted,voteWeight:a.voteWeight},inputsHash:n}});return await p(e,m),console.log(`[ScoringEngine] Completed run for epoch ${e}. Processed ${m.length} agents.`),{success:!0,epochKey:e,agents_processed:m.length,allocation_summary:{total_tokens:m.reduce((t,e)=>t+e.allocation.tokensMinted,0)}}}async function h(t){try{let{epochKey:e,force:a}=await t.json(),n=await E(e);return s.NextResponse.json(n)}catch(t){return console.error(t),s.NextResponse.json({error:t.message},{status:500})}}let m=new o.AppRouteRouteModule({definition:{kind:r.x.APP_ROUTE,page:"/api/system/score/route",pathname:"/api/system/score",filename:"route",bundlePath:"app/api/system/score/route"},resolvedPagePath:"/Users/shibuyaryouyuu/shibubu-site/src/app/api/system/score/route.ts",nextConfigOutput:"",userland:n}),{requestAsyncStorage:f,staticGenerationAsyncStorage:w,serverHooks:I}=m,R="/api/system/score/route";function $(){return(0,i.patchFetch)({serverHooks:I,staticGenerationAsyncStorage:w})}},7638:(t,e,a)=>{a.d(e,{x:()=>r});var n=a(4770),o=a.n(n);function r(t){let e=JSON.stringify(function t(e){return e&&"object"==typeof e&&!Array.isArray(e)?Object.keys(e).sort().reduce((a,n)=>(a[n]=t(e[n]),a),{}):Array.isArray(e)?e.map(t):e}(t));return o().createHash("sha256").update(e).digest("hex")}},3091:(t,e,a)=>{a.d(e,{_:()=>o});var n=a(3524);let o=global.prisma||new n.PrismaClient({log:["query"]})}};var e=require("../../../../webpack-runtime.js");e.C(t);var a=t=>e(e.s=t),n=e.X(0,[8948,5972],()=>a(3379));module.exports=n})();