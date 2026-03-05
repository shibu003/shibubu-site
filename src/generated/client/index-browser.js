
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
  bill_id: 'bill_id',
  currentState: 'currentState',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  latestDraftArtifactId: 'latestDraftArtifactId',
  latestTranslationArtifactId: 'latestTranslationArtifactId',
  latestEvidenceArtifactId: 'latestEvidenceArtifactId',
  latestGateArtifactId: 'latestGateArtifactId',
  latestAuditArtifactId: 'latestAuditArtifactId',
  latestBundleArtifactId: 'latestBundleArtifactId',
  publishedBundleArtifactId: 'publishedBundleArtifactId'
};

exports.Prisma.ArtifactScalarFieldEnum = {
  artifactId: 'artifactId',
  artifactType: 'artifactType',
  version: 'version',
  billId: 'billId',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  contentHash: 'contentHash',
  hashCanon: 'hashCanon',
  bodyJson: 'bodyJson',
  bodySizeBytes: 'bodySizeBytes'
};

exports.Prisma.LedgerEventScalarFieldEnum = {
  eventId: 'eventId',
  timestamp: 'timestamp',
  actorId: 'actorId',
  action: 'action',
  entityRefs: 'entityRefs',
  dataHash: 'dataHash',
  prevEventHash: 'prevEventHash',
  eventHash: 'eventHash'
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
  S: 'S',
  C: 'C',
  T: 'T',
  L: 'L',
  R: 'R',
  fitness_raw: 'fitness_raw',
  fitness_norm: 'fitness_norm',
  quota_q: 'quota_q',
  tokens_minted: 'tokens_minted',
  vote_weight_w: 'vote_weight_w',
  p_softmax: 'p_softmax',
  params_version: 'params_version',
  calc_hash: 'calc_hash',
  createdAt: 'createdAt'
};

exports.Prisma.AgentEpochCountersScalarFieldEnum = {
  id: 'id',
  agentId: 'agentId',
  epochKey: 'epochKey',
  n_fail: 'n_fail',
  n_warn: 'n_warn',
  n_auditFail: 'n_auditFail',
  n_auditWarn: 'n_auditWarn',
  n_suspicious: 'n_suspicious',
  n_published: 'n_published',
  createdAt: 'createdAt'
};

exports.Prisma.RoomScalarFieldEnum = {
  roomId: 'roomId',
  name: 'name',
  purpose: 'purpose',
  visibility: 'visibility',
  riskTier: 'riskTier',
  capabilitiesJson: 'capabilitiesJson',
  status: 'status',
  createdAt: 'createdAt',
  createdBy: 'createdBy',
  roomHash: 'roomHash'
};

exports.Prisma.ActorScalarFieldEnum = {
  actorId: 'actorId',
  actorType: 'actorType',
  displayName: 'displayName',
  currentRoomId: 'currentRoomId',
  createdAt: 'createdAt'
};

exports.Prisma.RoomMessageScalarFieldEnum = {
  messageId: 'messageId',
  roomId: 'roomId',
  actorId: 'actorId',
  content: 'content',
  createdAt: 'createdAt',
  contentHash: 'contentHash'
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
  Artifact: 'Artifact',
  LedgerEvent: 'LedgerEvent',
  Agent: 'Agent',
  Epoch: 'Epoch',
  AgentEpochScore: 'AgentEpochScore',
  AgentEpochCounters: 'AgentEpochCounters',
  Room: 'Room',
  Actor: 'Actor',
  RoomMessage: 'RoomMessage'
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
