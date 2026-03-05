
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.BillScalarFieldEnum = {
  id: 'id',
  title: 'title',
  summary: 'summary',
  contentJson: 'contentJson',
  sourceLang: 'sourceLang',
  createdAt: 'createdAt'
};

exports.Prisma.TranslationScalarFieldEnum = {
  id: 'id',
  billId: 'billId',
  targetLang: 'targetLang',
  translatedJson: 'translatedJson',
  provenance: 'provenance',
  createdAt: 'createdAt'
};

exports.Prisma.GateDecisionScalarFieldEnum = {
  id: 'id',
  billId: 'billId',
  verdict: 'verdict',
  deterministic: 'deterministic',
  riskScore: 'riskScore',
  reasons: 'reasons',
  policyVersion: 'policyVersion',
  inputHash: 'inputHash',
  createdAt: 'createdAt'
};

exports.Prisma.AuditReportScalarFieldEnum = {
  id: 'id',
  billId: 'billId',
  verdict: 'verdict',
  severity: 'severity',
  reasons: 'reasons',
  auditorProvenance: 'auditorProvenance',
  inputHash: 'inputHash',
  createdAt: 'createdAt'
};

exports.Prisma.DecisionBundleScalarFieldEnum = {
  id: 'id',
  billId: 'billId',
  bundleJson: 'bundleJson',
  bundleHash: 'bundleHash',
  createdAt: 'createdAt'
};

exports.Prisma.EventLogScalarFieldEnum = {
  id: 'id',
  ts: 'ts',
  actorType: 'actorType',
  actorId: 'actorId',
  eventType: 'eventType',
  entityType: 'entityType',
  entityId: 'entityId',
  payload: 'payload',
  prevHash: 'prevHash',
  hash: 'hash'
};

exports.Prisma.MerkleSnapshotScalarFieldEnum = {
  id: 'id',
  date: 'date',
  rootHash: 'rootHash',
  eventCount: 'eventCount',
  createdAt: 'createdAt'
};

exports.Prisma.SystemStateScalarFieldEnum = {
  id: 'id',
  halted: 'halted',
  updatedAt: 'updatedAt'
};

exports.Prisma.EmergencyRequestScalarFieldEnum = {
  id: 'id',
  status: 'status',
  createdAt: 'createdAt',
  approvedBy: 'approvedBy'
};

exports.Prisma.AgentScalarFieldEnum = {
  id: 'id',
  handle: 'handle',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  lastEpochKey: 'lastEpochKey'
};

exports.Prisma.EpochScalarFieldEnum = {
  id: 'id',
  epochKey: 'epochKey',
  startAt: 'startAt',
  endAt: 'endAt',
  status: 'status',
  createdAt: 'createdAt'
};

exports.Prisma.AgentEpochScoreScalarFieldEnum = {
  id: 'id',
  agentId: 'agentId',
  epochKey: 'epochKey',
  stability: 'stability',
  contribution: 'contribution',
  trust: 'trust',
  longevity: 'longevity',
  risk: 'risk',
  fitness: 'fitness',
  fitnessNorm: 'fitnessNorm',
  computeQuota: 'computeQuota',
  tokensMinted: 'tokensMinted',
  voteWeight: 'voteWeight',
  params: 'params',
  inputsHash: 'inputsHash',
  createdAt: 'createdAt'
};

exports.Prisma.AllocationLedgerScalarFieldEnum = {
  id: 'id',
  epochKey: 'epochKey',
  totalComputeUnits: 'totalComputeUnits',
  totalTokensMinted: 'totalTokensMinted',
  tau: 'tau',
  gini: 'gini',
  snapshot: 'snapshot',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Bill: 'Bill',
  Translation: 'Translation',
  GateDecision: 'GateDecision',
  AuditReport: 'AuditReport',
  DecisionBundle: 'DecisionBundle',
  EventLog: 'EventLog',
  MerkleSnapshot: 'MerkleSnapshot',
  SystemState: 'SystemState',
  EmergencyRequest: 'EmergencyRequest',
  Agent: 'Agent',
  Epoch: 'Epoch',
  AgentEpochScore: 'AgentEpochScore',
  AllocationLedger: 'AllocationLedger'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
