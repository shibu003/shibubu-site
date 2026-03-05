
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Bill
 * 
 */
export type Bill = $Result.DefaultSelection<Prisma.$BillPayload>
/**
 * Model Translation
 * 
 */
export type Translation = $Result.DefaultSelection<Prisma.$TranslationPayload>
/**
 * Model GateDecision
 * 
 */
export type GateDecision = $Result.DefaultSelection<Prisma.$GateDecisionPayload>
/**
 * Model AuditReport
 * 
 */
export type AuditReport = $Result.DefaultSelection<Prisma.$AuditReportPayload>
/**
 * Model DecisionBundle
 * 
 */
export type DecisionBundle = $Result.DefaultSelection<Prisma.$DecisionBundlePayload>
/**
 * Model EventLog
 * 
 */
export type EventLog = $Result.DefaultSelection<Prisma.$EventLogPayload>
/**
 * Model MerkleSnapshot
 * 
 */
export type MerkleSnapshot = $Result.DefaultSelection<Prisma.$MerkleSnapshotPayload>
/**
 * Model SystemState
 * 
 */
export type SystemState = $Result.DefaultSelection<Prisma.$SystemStatePayload>
/**
 * Model EmergencyRequest
 * 
 */
export type EmergencyRequest = $Result.DefaultSelection<Prisma.$EmergencyRequestPayload>
/**
 * Model Agent
 * 
 */
export type Agent = $Result.DefaultSelection<Prisma.$AgentPayload>
/**
 * Model Epoch
 * 
 */
export type Epoch = $Result.DefaultSelection<Prisma.$EpochPayload>
/**
 * Model AgentEpochScore
 * 
 */
export type AgentEpochScore = $Result.DefaultSelection<Prisma.$AgentEpochScorePayload>
/**
 * Model AllocationLedger
 * 
 */
export type AllocationLedger = $Result.DefaultSelection<Prisma.$AllocationLedgerPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bills
 * const bills = await prisma.bill.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bills
   * const bills = await prisma.bill.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.bill`: Exposes CRUD operations for the **Bill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bills
    * const bills = await prisma.bill.findMany()
    * ```
    */
  get bill(): Prisma.BillDelegate<ExtArgs>;

  /**
   * `prisma.translation`: Exposes CRUD operations for the **Translation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Translations
    * const translations = await prisma.translation.findMany()
    * ```
    */
  get translation(): Prisma.TranslationDelegate<ExtArgs>;

  /**
   * `prisma.gateDecision`: Exposes CRUD operations for the **GateDecision** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GateDecisions
    * const gateDecisions = await prisma.gateDecision.findMany()
    * ```
    */
  get gateDecision(): Prisma.GateDecisionDelegate<ExtArgs>;

  /**
   * `prisma.auditReport`: Exposes CRUD operations for the **AuditReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditReports
    * const auditReports = await prisma.auditReport.findMany()
    * ```
    */
  get auditReport(): Prisma.AuditReportDelegate<ExtArgs>;

  /**
   * `prisma.decisionBundle`: Exposes CRUD operations for the **DecisionBundle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DecisionBundles
    * const decisionBundles = await prisma.decisionBundle.findMany()
    * ```
    */
  get decisionBundle(): Prisma.DecisionBundleDelegate<ExtArgs>;

  /**
   * `prisma.eventLog`: Exposes CRUD operations for the **EventLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventLogs
    * const eventLogs = await prisma.eventLog.findMany()
    * ```
    */
  get eventLog(): Prisma.EventLogDelegate<ExtArgs>;

  /**
   * `prisma.merkleSnapshot`: Exposes CRUD operations for the **MerkleSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MerkleSnapshots
    * const merkleSnapshots = await prisma.merkleSnapshot.findMany()
    * ```
    */
  get merkleSnapshot(): Prisma.MerkleSnapshotDelegate<ExtArgs>;

  /**
   * `prisma.systemState`: Exposes CRUD operations for the **SystemState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemStates
    * const systemStates = await prisma.systemState.findMany()
    * ```
    */
  get systemState(): Prisma.SystemStateDelegate<ExtArgs>;

  /**
   * `prisma.emergencyRequest`: Exposes CRUD operations for the **EmergencyRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmergencyRequests
    * const emergencyRequests = await prisma.emergencyRequest.findMany()
    * ```
    */
  get emergencyRequest(): Prisma.EmergencyRequestDelegate<ExtArgs>;

  /**
   * `prisma.agent`: Exposes CRUD operations for the **Agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agent.findMany()
    * ```
    */
  get agent(): Prisma.AgentDelegate<ExtArgs>;

  /**
   * `prisma.epoch`: Exposes CRUD operations for the **Epoch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Epoches
    * const epoches = await prisma.epoch.findMany()
    * ```
    */
  get epoch(): Prisma.EpochDelegate<ExtArgs>;

  /**
   * `prisma.agentEpochScore`: Exposes CRUD operations for the **AgentEpochScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgentEpochScores
    * const agentEpochScores = await prisma.agentEpochScore.findMany()
    * ```
    */
  get agentEpochScore(): Prisma.AgentEpochScoreDelegate<ExtArgs>;

  /**
   * `prisma.allocationLedger`: Exposes CRUD operations for the **AllocationLedger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AllocationLedgers
    * const allocationLedgers = await prisma.allocationLedger.findMany()
    * ```
    */
  get allocationLedger(): Prisma.AllocationLedgerDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "bill" | "translation" | "gateDecision" | "auditReport" | "decisionBundle" | "eventLog" | "merkleSnapshot" | "systemState" | "emergencyRequest" | "agent" | "epoch" | "agentEpochScore" | "allocationLedger"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Bill: {
        payload: Prisma.$BillPayload<ExtArgs>
        fields: Prisma.BillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findFirst: {
            args: Prisma.BillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          findMany: {
            args: Prisma.BillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          create: {
            args: Prisma.BillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          createMany: {
            args: Prisma.BillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>[]
          }
          delete: {
            args: Prisma.BillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          update: {
            args: Prisma.BillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          deleteMany: {
            args: Prisma.BillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BillPayload>
          }
          aggregate: {
            args: Prisma.BillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBill>
          }
          groupBy: {
            args: Prisma.BillGroupByArgs<ExtArgs>
            result: $Utils.Optional<BillGroupByOutputType>[]
          }
          count: {
            args: Prisma.BillCountArgs<ExtArgs>
            result: $Utils.Optional<BillCountAggregateOutputType> | number
          }
        }
      }
      Translation: {
        payload: Prisma.$TranslationPayload<ExtArgs>
        fields: Prisma.TranslationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TranslationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TranslationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          findFirst: {
            args: Prisma.TranslationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TranslationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          findMany: {
            args: Prisma.TranslationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>[]
          }
          create: {
            args: Prisma.TranslationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          createMany: {
            args: Prisma.TranslationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TranslationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>[]
          }
          delete: {
            args: Prisma.TranslationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          update: {
            args: Prisma.TranslationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          deleteMany: {
            args: Prisma.TranslationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TranslationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TranslationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          aggregate: {
            args: Prisma.TranslationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranslation>
          }
          groupBy: {
            args: Prisma.TranslationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TranslationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TranslationCountArgs<ExtArgs>
            result: $Utils.Optional<TranslationCountAggregateOutputType> | number
          }
        }
      }
      GateDecision: {
        payload: Prisma.$GateDecisionPayload<ExtArgs>
        fields: Prisma.GateDecisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GateDecisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateDecisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GateDecisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateDecisionPayload>
          }
          findFirst: {
            args: Prisma.GateDecisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateDecisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GateDecisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateDecisionPayload>
          }
          findMany: {
            args: Prisma.GateDecisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateDecisionPayload>[]
          }
          create: {
            args: Prisma.GateDecisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateDecisionPayload>
          }
          createMany: {
            args: Prisma.GateDecisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GateDecisionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateDecisionPayload>[]
          }
          delete: {
            args: Prisma.GateDecisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateDecisionPayload>
          }
          update: {
            args: Prisma.GateDecisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateDecisionPayload>
          }
          deleteMany: {
            args: Prisma.GateDecisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GateDecisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GateDecisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GateDecisionPayload>
          }
          aggregate: {
            args: Prisma.GateDecisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGateDecision>
          }
          groupBy: {
            args: Prisma.GateDecisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GateDecisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GateDecisionCountArgs<ExtArgs>
            result: $Utils.Optional<GateDecisionCountAggregateOutputType> | number
          }
        }
      }
      AuditReport: {
        payload: Prisma.$AuditReportPayload<ExtArgs>
        fields: Prisma.AuditReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditReportPayload>
          }
          findFirst: {
            args: Prisma.AuditReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditReportPayload>
          }
          findMany: {
            args: Prisma.AuditReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditReportPayload>[]
          }
          create: {
            args: Prisma.AuditReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditReportPayload>
          }
          createMany: {
            args: Prisma.AuditReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditReportPayload>[]
          }
          delete: {
            args: Prisma.AuditReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditReportPayload>
          }
          update: {
            args: Prisma.AuditReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditReportPayload>
          }
          deleteMany: {
            args: Prisma.AuditReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditReportPayload>
          }
          aggregate: {
            args: Prisma.AuditReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditReport>
          }
          groupBy: {
            args: Prisma.AuditReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditReportCountArgs<ExtArgs>
            result: $Utils.Optional<AuditReportCountAggregateOutputType> | number
          }
        }
      }
      DecisionBundle: {
        payload: Prisma.$DecisionBundlePayload<ExtArgs>
        fields: Prisma.DecisionBundleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DecisionBundleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionBundlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DecisionBundleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionBundlePayload>
          }
          findFirst: {
            args: Prisma.DecisionBundleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionBundlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DecisionBundleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionBundlePayload>
          }
          findMany: {
            args: Prisma.DecisionBundleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionBundlePayload>[]
          }
          create: {
            args: Prisma.DecisionBundleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionBundlePayload>
          }
          createMany: {
            args: Prisma.DecisionBundleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DecisionBundleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionBundlePayload>[]
          }
          delete: {
            args: Prisma.DecisionBundleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionBundlePayload>
          }
          update: {
            args: Prisma.DecisionBundleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionBundlePayload>
          }
          deleteMany: {
            args: Prisma.DecisionBundleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DecisionBundleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DecisionBundleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionBundlePayload>
          }
          aggregate: {
            args: Prisma.DecisionBundleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDecisionBundle>
          }
          groupBy: {
            args: Prisma.DecisionBundleGroupByArgs<ExtArgs>
            result: $Utils.Optional<DecisionBundleGroupByOutputType>[]
          }
          count: {
            args: Prisma.DecisionBundleCountArgs<ExtArgs>
            result: $Utils.Optional<DecisionBundleCountAggregateOutputType> | number
          }
        }
      }
      EventLog: {
        payload: Prisma.$EventLogPayload<ExtArgs>
        fields: Prisma.EventLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          findFirst: {
            args: Prisma.EventLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          findMany: {
            args: Prisma.EventLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>[]
          }
          create: {
            args: Prisma.EventLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          createMany: {
            args: Prisma.EventLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>[]
          }
          delete: {
            args: Prisma.EventLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          update: {
            args: Prisma.EventLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          deleteMany: {
            args: Prisma.EventLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          aggregate: {
            args: Prisma.EventLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventLog>
          }
          groupBy: {
            args: Prisma.EventLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventLogCountArgs<ExtArgs>
            result: $Utils.Optional<EventLogCountAggregateOutputType> | number
          }
        }
      }
      MerkleSnapshot: {
        payload: Prisma.$MerkleSnapshotPayload<ExtArgs>
        fields: Prisma.MerkleSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MerkleSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkleSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MerkleSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkleSnapshotPayload>
          }
          findFirst: {
            args: Prisma.MerkleSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkleSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MerkleSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkleSnapshotPayload>
          }
          findMany: {
            args: Prisma.MerkleSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkleSnapshotPayload>[]
          }
          create: {
            args: Prisma.MerkleSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkleSnapshotPayload>
          }
          createMany: {
            args: Prisma.MerkleSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MerkleSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkleSnapshotPayload>[]
          }
          delete: {
            args: Prisma.MerkleSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkleSnapshotPayload>
          }
          update: {
            args: Prisma.MerkleSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkleSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.MerkleSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MerkleSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MerkleSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MerkleSnapshotPayload>
          }
          aggregate: {
            args: Prisma.MerkleSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMerkleSnapshot>
          }
          groupBy: {
            args: Prisma.MerkleSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<MerkleSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.MerkleSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<MerkleSnapshotCountAggregateOutputType> | number
          }
        }
      }
      SystemState: {
        payload: Prisma.$SystemStatePayload<ExtArgs>
        fields: Prisma.SystemStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemStatePayload>
          }
          findFirst: {
            args: Prisma.SystemStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemStatePayload>
          }
          findMany: {
            args: Prisma.SystemStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemStatePayload>[]
          }
          create: {
            args: Prisma.SystemStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemStatePayload>
          }
          createMany: {
            args: Prisma.SystemStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemStatePayload>[]
          }
          delete: {
            args: Prisma.SystemStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemStatePayload>
          }
          update: {
            args: Prisma.SystemStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemStatePayload>
          }
          deleteMany: {
            args: Prisma.SystemStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SystemStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemStatePayload>
          }
          aggregate: {
            args: Prisma.SystemStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemState>
          }
          groupBy: {
            args: Prisma.SystemStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemStateCountArgs<ExtArgs>
            result: $Utils.Optional<SystemStateCountAggregateOutputType> | number
          }
        }
      }
      EmergencyRequest: {
        payload: Prisma.$EmergencyRequestPayload<ExtArgs>
        fields: Prisma.EmergencyRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmergencyRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmergencyRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>
          }
          findFirst: {
            args: Prisma.EmergencyRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmergencyRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>
          }
          findMany: {
            args: Prisma.EmergencyRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>[]
          }
          create: {
            args: Prisma.EmergencyRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>
          }
          createMany: {
            args: Prisma.EmergencyRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmergencyRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>[]
          }
          delete: {
            args: Prisma.EmergencyRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>
          }
          update: {
            args: Prisma.EmergencyRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>
          }
          deleteMany: {
            args: Prisma.EmergencyRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmergencyRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmergencyRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmergencyRequestPayload>
          }
          aggregate: {
            args: Prisma.EmergencyRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmergencyRequest>
          }
          groupBy: {
            args: Prisma.EmergencyRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmergencyRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmergencyRequestCountArgs<ExtArgs>
            result: $Utils.Optional<EmergencyRequestCountAggregateOutputType> | number
          }
        }
      }
      Agent: {
        payload: Prisma.$AgentPayload<ExtArgs>
        fields: Prisma.AgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findFirst: {
            args: Prisma.AgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findMany: {
            args: Prisma.AgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          create: {
            args: Prisma.AgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          createMany: {
            args: Prisma.AgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          delete: {
            args: Prisma.AgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          update: {
            args: Prisma.AgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          deleteMany: {
            args: Prisma.AgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          aggregate: {
            args: Prisma.AgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgent>
          }
          groupBy: {
            args: Prisma.AgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentCountArgs<ExtArgs>
            result: $Utils.Optional<AgentCountAggregateOutputType> | number
          }
        }
      }
      Epoch: {
        payload: Prisma.$EpochPayload<ExtArgs>
        fields: Prisma.EpochFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpochFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpochPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpochFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpochPayload>
          }
          findFirst: {
            args: Prisma.EpochFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpochPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpochFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpochPayload>
          }
          findMany: {
            args: Prisma.EpochFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpochPayload>[]
          }
          create: {
            args: Prisma.EpochCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpochPayload>
          }
          createMany: {
            args: Prisma.EpochCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EpochCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpochPayload>[]
          }
          delete: {
            args: Prisma.EpochDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpochPayload>
          }
          update: {
            args: Prisma.EpochUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpochPayload>
          }
          deleteMany: {
            args: Prisma.EpochDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpochUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EpochUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpochPayload>
          }
          aggregate: {
            args: Prisma.EpochAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpoch>
          }
          groupBy: {
            args: Prisma.EpochGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpochGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpochCountArgs<ExtArgs>
            result: $Utils.Optional<EpochCountAggregateOutputType> | number
          }
        }
      }
      AgentEpochScore: {
        payload: Prisma.$AgentEpochScorePayload<ExtArgs>
        fields: Prisma.AgentEpochScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentEpochScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentEpochScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochScorePayload>
          }
          findFirst: {
            args: Prisma.AgentEpochScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentEpochScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochScorePayload>
          }
          findMany: {
            args: Prisma.AgentEpochScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochScorePayload>[]
          }
          create: {
            args: Prisma.AgentEpochScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochScorePayload>
          }
          createMany: {
            args: Prisma.AgentEpochScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentEpochScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochScorePayload>[]
          }
          delete: {
            args: Prisma.AgentEpochScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochScorePayload>
          }
          update: {
            args: Prisma.AgentEpochScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochScorePayload>
          }
          deleteMany: {
            args: Prisma.AgentEpochScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentEpochScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AgentEpochScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochScorePayload>
          }
          aggregate: {
            args: Prisma.AgentEpochScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgentEpochScore>
          }
          groupBy: {
            args: Prisma.AgentEpochScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentEpochScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentEpochScoreCountArgs<ExtArgs>
            result: $Utils.Optional<AgentEpochScoreCountAggregateOutputType> | number
          }
        }
      }
      AllocationLedger: {
        payload: Prisma.$AllocationLedgerPayload<ExtArgs>
        fields: Prisma.AllocationLedgerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AllocationLedgerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocationLedgerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AllocationLedgerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocationLedgerPayload>
          }
          findFirst: {
            args: Prisma.AllocationLedgerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocationLedgerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AllocationLedgerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocationLedgerPayload>
          }
          findMany: {
            args: Prisma.AllocationLedgerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocationLedgerPayload>[]
          }
          create: {
            args: Prisma.AllocationLedgerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocationLedgerPayload>
          }
          createMany: {
            args: Prisma.AllocationLedgerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AllocationLedgerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocationLedgerPayload>[]
          }
          delete: {
            args: Prisma.AllocationLedgerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocationLedgerPayload>
          }
          update: {
            args: Prisma.AllocationLedgerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocationLedgerPayload>
          }
          deleteMany: {
            args: Prisma.AllocationLedgerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AllocationLedgerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AllocationLedgerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllocationLedgerPayload>
          }
          aggregate: {
            args: Prisma.AllocationLedgerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllocationLedger>
          }
          groupBy: {
            args: Prisma.AllocationLedgerGroupByArgs<ExtArgs>
            result: $Utils.Optional<AllocationLedgerGroupByOutputType>[]
          }
          count: {
            args: Prisma.AllocationLedgerCountArgs<ExtArgs>
            result: $Utils.Optional<AllocationLedgerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BillCountOutputType
   */

  export type BillCountOutputType = {
    translations: number
    gateDecisions: number
    auditReports: number
    decisionBundles: number
  }

  export type BillCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translations?: boolean | BillCountOutputTypeCountTranslationsArgs
    gateDecisions?: boolean | BillCountOutputTypeCountGateDecisionsArgs
    auditReports?: boolean | BillCountOutputTypeCountAuditReportsArgs
    decisionBundles?: boolean | BillCountOutputTypeCountDecisionBundlesArgs
  }

  // Custom InputTypes
  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BillCountOutputType
     */
    select?: BillCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationWhereInput
  }

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountGateDecisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GateDecisionWhereInput
  }

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountAuditReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditReportWhereInput
  }

  /**
   * BillCountOutputType without action
   */
  export type BillCountOutputTypeCountDecisionBundlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecisionBundleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Bill
   */

  export type AggregateBill = {
    _count: BillCountAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  export type BillMinAggregateOutputType = {
    id: string | null
    title: string | null
    summary: string | null
    contentJson: string | null
    sourceLang: string | null
    createdAt: Date | null
  }

  export type BillMaxAggregateOutputType = {
    id: string | null
    title: string | null
    summary: string | null
    contentJson: string | null
    sourceLang: string | null
    createdAt: Date | null
  }

  export type BillCountAggregateOutputType = {
    id: number
    title: number
    summary: number
    contentJson: number
    sourceLang: number
    createdAt: number
    _all: number
  }


  export type BillMinAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    contentJson?: true
    sourceLang?: true
    createdAt?: true
  }

  export type BillMaxAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    contentJson?: true
    sourceLang?: true
    createdAt?: true
  }

  export type BillCountAggregateInputType = {
    id?: true
    title?: true
    summary?: true
    contentJson?: true
    sourceLang?: true
    createdAt?: true
    _all?: true
  }

  export type BillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bill to aggregate.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bills
    **/
    _count?: true | BillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BillMaxAggregateInputType
  }

  export type GetBillAggregateType<T extends BillAggregateArgs> = {
        [P in keyof T & keyof AggregateBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBill[P]>
      : GetScalarType<T[P], AggregateBill[P]>
  }




  export type BillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BillWhereInput
    orderBy?: BillOrderByWithAggregationInput | BillOrderByWithAggregationInput[]
    by: BillScalarFieldEnum[] | BillScalarFieldEnum
    having?: BillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BillCountAggregateInputType | true
    _min?: BillMinAggregateInputType
    _max?: BillMaxAggregateInputType
  }

  export type BillGroupByOutputType = {
    id: string
    title: string
    summary: string
    contentJson: string
    sourceLang: string
    createdAt: Date
    _count: BillCountAggregateOutputType | null
    _min: BillMinAggregateOutputType | null
    _max: BillMaxAggregateOutputType | null
  }

  type GetBillGroupByPayload<T extends BillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BillGroupByOutputType[P]>
            : GetScalarType<T[P], BillGroupByOutputType[P]>
        }
      >
    >


  export type BillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    contentJson?: boolean
    sourceLang?: boolean
    createdAt?: boolean
    translations?: boolean | Bill$translationsArgs<ExtArgs>
    gateDecisions?: boolean | Bill$gateDecisionsArgs<ExtArgs>
    auditReports?: boolean | Bill$auditReportsArgs<ExtArgs>
    decisionBundles?: boolean | Bill$decisionBundlesArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bill"]>

  export type BillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    summary?: boolean
    contentJson?: boolean
    sourceLang?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["bill"]>

  export type BillSelectScalar = {
    id?: boolean
    title?: boolean
    summary?: boolean
    contentJson?: boolean
    sourceLang?: boolean
    createdAt?: boolean
  }

  export type BillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translations?: boolean | Bill$translationsArgs<ExtArgs>
    gateDecisions?: boolean | Bill$gateDecisionsArgs<ExtArgs>
    auditReports?: boolean | Bill$auditReportsArgs<ExtArgs>
    decisionBundles?: boolean | Bill$decisionBundlesArgs<ExtArgs>
    _count?: boolean | BillCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bill"
    objects: {
      translations: Prisma.$TranslationPayload<ExtArgs>[]
      gateDecisions: Prisma.$GateDecisionPayload<ExtArgs>[]
      auditReports: Prisma.$AuditReportPayload<ExtArgs>[]
      decisionBundles: Prisma.$DecisionBundlePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      summary: string
      contentJson: string
      sourceLang: string
      createdAt: Date
    }, ExtArgs["result"]["bill"]>
    composites: {}
  }

  type BillGetPayload<S extends boolean | null | undefined | BillDefaultArgs> = $Result.GetResult<Prisma.$BillPayload, S>

  type BillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BillFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BillCountAggregateInputType | true
    }

  export interface BillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bill'], meta: { name: 'Bill' } }
    /**
     * Find zero or one Bill that matches the filter.
     * @param {BillFindUniqueArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BillFindUniqueArgs>(args: SelectSubset<T, BillFindUniqueArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Bill that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BillFindUniqueOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BillFindUniqueOrThrowArgs>(args: SelectSubset<T, BillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Bill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BillFindFirstArgs>(args?: SelectSubset<T, BillFindFirstArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Bill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindFirstOrThrowArgs} args - Arguments to find a Bill
     * @example
     * // Get one Bill
     * const bill = await prisma.bill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BillFindFirstOrThrowArgs>(args?: SelectSubset<T, BillFindFirstOrThrowArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bills
     * const bills = await prisma.bill.findMany()
     * 
     * // Get first 10 Bills
     * const bills = await prisma.bill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const billWithIdOnly = await prisma.bill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BillFindManyArgs>(args?: SelectSubset<T, BillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Bill.
     * @param {BillCreateArgs} args - Arguments to create a Bill.
     * @example
     * // Create one Bill
     * const Bill = await prisma.bill.create({
     *   data: {
     *     // ... data to create a Bill
     *   }
     * })
     * 
     */
    create<T extends BillCreateArgs>(args: SelectSubset<T, BillCreateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bills.
     * @param {BillCreateManyArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BillCreateManyArgs>(args?: SelectSubset<T, BillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bills and returns the data saved in the database.
     * @param {BillCreateManyAndReturnArgs} args - Arguments to create many Bills.
     * @example
     * // Create many Bills
     * const bill = await prisma.bill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bills and only return the `id`
     * const billWithIdOnly = await prisma.bill.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BillCreateManyAndReturnArgs>(args?: SelectSubset<T, BillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Bill.
     * @param {BillDeleteArgs} args - Arguments to delete one Bill.
     * @example
     * // Delete one Bill
     * const Bill = await prisma.bill.delete({
     *   where: {
     *     // ... filter to delete one Bill
     *   }
     * })
     * 
     */
    delete<T extends BillDeleteArgs>(args: SelectSubset<T, BillDeleteArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Bill.
     * @param {BillUpdateArgs} args - Arguments to update one Bill.
     * @example
     * // Update one Bill
     * const bill = await prisma.bill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BillUpdateArgs>(args: SelectSubset<T, BillUpdateArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bills.
     * @param {BillDeleteManyArgs} args - Arguments to filter Bills to delete.
     * @example
     * // Delete a few Bills
     * const { count } = await prisma.bill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BillDeleteManyArgs>(args?: SelectSubset<T, BillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bills
     * const bill = await prisma.bill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BillUpdateManyArgs>(args: SelectSubset<T, BillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bill.
     * @param {BillUpsertArgs} args - Arguments to update or create a Bill.
     * @example
     * // Update or create a Bill
     * const bill = await prisma.bill.upsert({
     *   create: {
     *     // ... data to create a Bill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bill we want to update
     *   }
     * })
     */
    upsert<T extends BillUpsertArgs>(args: SelectSubset<T, BillUpsertArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillCountArgs} args - Arguments to filter Bills to count.
     * @example
     * // Count the number of Bills
     * const count = await prisma.bill.count({
     *   where: {
     *     // ... the filter for the Bills we want to count
     *   }
     * })
    **/
    count<T extends BillCountArgs>(
      args?: Subset<T, BillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BillAggregateArgs>(args: Subset<T, BillAggregateArgs>): Prisma.PrismaPromise<GetBillAggregateType<T>>

    /**
     * Group by Bill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BillGroupByArgs['orderBy'] }
        : { orderBy?: BillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bill model
   */
  readonly fields: BillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    translations<T extends Bill$translationsArgs<ExtArgs> = {}>(args?: Subset<T, Bill$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findMany"> | Null>
    gateDecisions<T extends Bill$gateDecisionsArgs<ExtArgs> = {}>(args?: Subset<T, Bill$gateDecisionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GateDecisionPayload<ExtArgs>, T, "findMany"> | Null>
    auditReports<T extends Bill$auditReportsArgs<ExtArgs> = {}>(args?: Subset<T, Bill$auditReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditReportPayload<ExtArgs>, T, "findMany"> | Null>
    decisionBundles<T extends Bill$decisionBundlesArgs<ExtArgs> = {}>(args?: Subset<T, Bill$decisionBundlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionBundlePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bill model
   */ 
  interface BillFieldRefs {
    readonly id: FieldRef<"Bill", 'String'>
    readonly title: FieldRef<"Bill", 'String'>
    readonly summary: FieldRef<"Bill", 'String'>
    readonly contentJson: FieldRef<"Bill", 'String'>
    readonly sourceLang: FieldRef<"Bill", 'String'>
    readonly createdAt: FieldRef<"Bill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bill findUnique
   */
  export type BillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findUniqueOrThrow
   */
  export type BillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill findFirst
   */
  export type BillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findFirstOrThrow
   */
  export type BillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bill to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bills.
     */
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill findMany
   */
  export type BillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter, which Bills to fetch.
     */
    where?: BillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bills to fetch.
     */
    orderBy?: BillOrderByWithRelationInput | BillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bills.
     */
    cursor?: BillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bills.
     */
    skip?: number
    distinct?: BillScalarFieldEnum | BillScalarFieldEnum[]
  }

  /**
   * Bill create
   */
  export type BillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to create a Bill.
     */
    data: XOR<BillCreateInput, BillUncheckedCreateInput>
  }

  /**
   * Bill createMany
   */
  export type BillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
  }

  /**
   * Bill createManyAndReturn
   */
  export type BillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Bills.
     */
    data: BillCreateManyInput | BillCreateManyInput[]
  }

  /**
   * Bill update
   */
  export type BillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The data needed to update a Bill.
     */
    data: XOR<BillUpdateInput, BillUncheckedUpdateInput>
    /**
     * Choose, which Bill to update.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill updateMany
   */
  export type BillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bills.
     */
    data: XOR<BillUpdateManyMutationInput, BillUncheckedUpdateManyInput>
    /**
     * Filter which Bills to update
     */
    where?: BillWhereInput
  }

  /**
   * Bill upsert
   */
  export type BillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * The filter to search for the Bill to update in case it exists.
     */
    where: BillWhereUniqueInput
    /**
     * In case the Bill found by the `where` argument doesn't exist, create a new Bill with this data.
     */
    create: XOR<BillCreateInput, BillUncheckedCreateInput>
    /**
     * In case the Bill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BillUpdateInput, BillUncheckedUpdateInput>
  }

  /**
   * Bill delete
   */
  export type BillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
    /**
     * Filter which Bill to delete.
     */
    where: BillWhereUniqueInput
  }

  /**
   * Bill deleteMany
   */
  export type BillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bills to delete
     */
    where?: BillWhereInput
  }

  /**
   * Bill.translations
   */
  export type Bill$translationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    where?: TranslationWhereInput
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    cursor?: TranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * Bill.gateDecisions
   */
  export type Bill$gateDecisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateDecision
     */
    select?: GateDecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GateDecisionInclude<ExtArgs> | null
    where?: GateDecisionWhereInput
    orderBy?: GateDecisionOrderByWithRelationInput | GateDecisionOrderByWithRelationInput[]
    cursor?: GateDecisionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GateDecisionScalarFieldEnum | GateDecisionScalarFieldEnum[]
  }

  /**
   * Bill.auditReports
   */
  export type Bill$auditReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditReport
     */
    select?: AuditReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditReportInclude<ExtArgs> | null
    where?: AuditReportWhereInput
    orderBy?: AuditReportOrderByWithRelationInput | AuditReportOrderByWithRelationInput[]
    cursor?: AuditReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditReportScalarFieldEnum | AuditReportScalarFieldEnum[]
  }

  /**
   * Bill.decisionBundles
   */
  export type Bill$decisionBundlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionBundle
     */
    select?: DecisionBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionBundleInclude<ExtArgs> | null
    where?: DecisionBundleWhereInput
    orderBy?: DecisionBundleOrderByWithRelationInput | DecisionBundleOrderByWithRelationInput[]
    cursor?: DecisionBundleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DecisionBundleScalarFieldEnum | DecisionBundleScalarFieldEnum[]
  }

  /**
   * Bill without action
   */
  export type BillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BillInclude<ExtArgs> | null
  }


  /**
   * Model Translation
   */

  export type AggregateTranslation = {
    _count: TranslationCountAggregateOutputType | null
    _min: TranslationMinAggregateOutputType | null
    _max: TranslationMaxAggregateOutputType | null
  }

  export type TranslationMinAggregateOutputType = {
    id: string | null
    billId: string | null
    targetLang: string | null
    translatedJson: string | null
    provenance: string | null
    createdAt: Date | null
  }

  export type TranslationMaxAggregateOutputType = {
    id: string | null
    billId: string | null
    targetLang: string | null
    translatedJson: string | null
    provenance: string | null
    createdAt: Date | null
  }

  export type TranslationCountAggregateOutputType = {
    id: number
    billId: number
    targetLang: number
    translatedJson: number
    provenance: number
    createdAt: number
    _all: number
  }


  export type TranslationMinAggregateInputType = {
    id?: true
    billId?: true
    targetLang?: true
    translatedJson?: true
    provenance?: true
    createdAt?: true
  }

  export type TranslationMaxAggregateInputType = {
    id?: true
    billId?: true
    targetLang?: true
    translatedJson?: true
    provenance?: true
    createdAt?: true
  }

  export type TranslationCountAggregateInputType = {
    id?: true
    billId?: true
    targetLang?: true
    translatedJson?: true
    provenance?: true
    createdAt?: true
    _all?: true
  }

  export type TranslationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Translation to aggregate.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Translations
    **/
    _count?: true | TranslationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranslationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranslationMaxAggregateInputType
  }

  export type GetTranslationAggregateType<T extends TranslationAggregateArgs> = {
        [P in keyof T & keyof AggregateTranslation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranslation[P]>
      : GetScalarType<T[P], AggregateTranslation[P]>
  }




  export type TranslationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationWhereInput
    orderBy?: TranslationOrderByWithAggregationInput | TranslationOrderByWithAggregationInput[]
    by: TranslationScalarFieldEnum[] | TranslationScalarFieldEnum
    having?: TranslationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranslationCountAggregateInputType | true
    _min?: TranslationMinAggregateInputType
    _max?: TranslationMaxAggregateInputType
  }

  export type TranslationGroupByOutputType = {
    id: string
    billId: string
    targetLang: string
    translatedJson: string
    provenance: string
    createdAt: Date
    _count: TranslationCountAggregateOutputType | null
    _min: TranslationMinAggregateOutputType | null
    _max: TranslationMaxAggregateOutputType | null
  }

  type GetTranslationGroupByPayload<T extends TranslationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranslationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranslationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranslationGroupByOutputType[P]>
            : GetScalarType<T[P], TranslationGroupByOutputType[P]>
        }
      >
    >


  export type TranslationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    targetLang?: boolean
    translatedJson?: boolean
    provenance?: boolean
    createdAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["translation"]>

  export type TranslationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    targetLang?: boolean
    translatedJson?: boolean
    provenance?: boolean
    createdAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["translation"]>

  export type TranslationSelectScalar = {
    id?: boolean
    billId?: boolean
    targetLang?: boolean
    translatedJson?: boolean
    provenance?: boolean
    createdAt?: boolean
  }

  export type TranslationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type TranslationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }

  export type $TranslationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Translation"
    objects: {
      bill: Prisma.$BillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      billId: string
      targetLang: string
      translatedJson: string
      provenance: string
      createdAt: Date
    }, ExtArgs["result"]["translation"]>
    composites: {}
  }

  type TranslationGetPayload<S extends boolean | null | undefined | TranslationDefaultArgs> = $Result.GetResult<Prisma.$TranslationPayload, S>

  type TranslationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TranslationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TranslationCountAggregateInputType | true
    }

  export interface TranslationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Translation'], meta: { name: 'Translation' } }
    /**
     * Find zero or one Translation that matches the filter.
     * @param {TranslationFindUniqueArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TranslationFindUniqueArgs>(args: SelectSubset<T, TranslationFindUniqueArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Translation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TranslationFindUniqueOrThrowArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TranslationFindUniqueOrThrowArgs>(args: SelectSubset<T, TranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Translation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationFindFirstArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TranslationFindFirstArgs>(args?: SelectSubset<T, TranslationFindFirstArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Translation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationFindFirstOrThrowArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TranslationFindFirstOrThrowArgs>(args?: SelectSubset<T, TranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Translations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Translations
     * const translations = await prisma.translation.findMany()
     * 
     * // Get first 10 Translations
     * const translations = await prisma.translation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const translationWithIdOnly = await prisma.translation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TranslationFindManyArgs>(args?: SelectSubset<T, TranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Translation.
     * @param {TranslationCreateArgs} args - Arguments to create a Translation.
     * @example
     * // Create one Translation
     * const Translation = await prisma.translation.create({
     *   data: {
     *     // ... data to create a Translation
     *   }
     * })
     * 
     */
    create<T extends TranslationCreateArgs>(args: SelectSubset<T, TranslationCreateArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Translations.
     * @param {TranslationCreateManyArgs} args - Arguments to create many Translations.
     * @example
     * // Create many Translations
     * const translation = await prisma.translation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TranslationCreateManyArgs>(args?: SelectSubset<T, TranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Translations and returns the data saved in the database.
     * @param {TranslationCreateManyAndReturnArgs} args - Arguments to create many Translations.
     * @example
     * // Create many Translations
     * const translation = await prisma.translation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Translations and only return the `id`
     * const translationWithIdOnly = await prisma.translation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TranslationCreateManyAndReturnArgs>(args?: SelectSubset<T, TranslationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Translation.
     * @param {TranslationDeleteArgs} args - Arguments to delete one Translation.
     * @example
     * // Delete one Translation
     * const Translation = await prisma.translation.delete({
     *   where: {
     *     // ... filter to delete one Translation
     *   }
     * })
     * 
     */
    delete<T extends TranslationDeleteArgs>(args: SelectSubset<T, TranslationDeleteArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Translation.
     * @param {TranslationUpdateArgs} args - Arguments to update one Translation.
     * @example
     * // Update one Translation
     * const translation = await prisma.translation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TranslationUpdateArgs>(args: SelectSubset<T, TranslationUpdateArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Translations.
     * @param {TranslationDeleteManyArgs} args - Arguments to filter Translations to delete.
     * @example
     * // Delete a few Translations
     * const { count } = await prisma.translation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TranslationDeleteManyArgs>(args?: SelectSubset<T, TranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Translations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Translations
     * const translation = await prisma.translation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TranslationUpdateManyArgs>(args: SelectSubset<T, TranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Translation.
     * @param {TranslationUpsertArgs} args - Arguments to update or create a Translation.
     * @example
     * // Update or create a Translation
     * const translation = await prisma.translation.upsert({
     *   create: {
     *     // ... data to create a Translation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Translation we want to update
     *   }
     * })
     */
    upsert<T extends TranslationUpsertArgs>(args: SelectSubset<T, TranslationUpsertArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Translations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationCountArgs} args - Arguments to filter Translations to count.
     * @example
     * // Count the number of Translations
     * const count = await prisma.translation.count({
     *   where: {
     *     // ... the filter for the Translations we want to count
     *   }
     * })
    **/
    count<T extends TranslationCountArgs>(
      args?: Subset<T, TranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranslationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Translation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TranslationAggregateArgs>(args: Subset<T, TranslationAggregateArgs>): Prisma.PrismaPromise<GetTranslationAggregateType<T>>

    /**
     * Group by Translation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TranslationGroupByArgs['orderBy'] }
        : { orderBy?: TranslationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Translation model
   */
  readonly fields: TranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Translation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TranslationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bill<T extends BillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillDefaultArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Translation model
   */ 
  interface TranslationFieldRefs {
    readonly id: FieldRef<"Translation", 'String'>
    readonly billId: FieldRef<"Translation", 'String'>
    readonly targetLang: FieldRef<"Translation", 'String'>
    readonly translatedJson: FieldRef<"Translation", 'String'>
    readonly provenance: FieldRef<"Translation", 'String'>
    readonly createdAt: FieldRef<"Translation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Translation findUnique
   */
  export type TranslationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation findUniqueOrThrow
   */
  export type TranslationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation findFirst
   */
  export type TranslationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Translations.
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Translations.
     */
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * Translation findFirstOrThrow
   */
  export type TranslationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Translations.
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Translations.
     */
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * Translation findMany
   */
  export type TranslationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * Filter, which Translations to fetch.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Translations.
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * Translation create
   */
  export type TranslationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * The data needed to create a Translation.
     */
    data: XOR<TranslationCreateInput, TranslationUncheckedCreateInput>
  }

  /**
   * Translation createMany
   */
  export type TranslationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Translations.
     */
    data: TranslationCreateManyInput | TranslationCreateManyInput[]
  }

  /**
   * Translation createManyAndReturn
   */
  export type TranslationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Translations.
     */
    data: TranslationCreateManyInput | TranslationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Translation update
   */
  export type TranslationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * The data needed to update a Translation.
     */
    data: XOR<TranslationUpdateInput, TranslationUncheckedUpdateInput>
    /**
     * Choose, which Translation to update.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation updateMany
   */
  export type TranslationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Translations.
     */
    data: XOR<TranslationUpdateManyMutationInput, TranslationUncheckedUpdateManyInput>
    /**
     * Filter which Translations to update
     */
    where?: TranslationWhereInput
  }

  /**
   * Translation upsert
   */
  export type TranslationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * The filter to search for the Translation to update in case it exists.
     */
    where: TranslationWhereUniqueInput
    /**
     * In case the Translation found by the `where` argument doesn't exist, create a new Translation with this data.
     */
    create: XOR<TranslationCreateInput, TranslationUncheckedCreateInput>
    /**
     * In case the Translation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TranslationUpdateInput, TranslationUncheckedUpdateInput>
  }

  /**
   * Translation delete
   */
  export type TranslationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * Filter which Translation to delete.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation deleteMany
   */
  export type TranslationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Translations to delete
     */
    where?: TranslationWhereInput
  }

  /**
   * Translation without action
   */
  export type TranslationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
  }


  /**
   * Model GateDecision
   */

  export type AggregateGateDecision = {
    _count: GateDecisionCountAggregateOutputType | null
    _avg: GateDecisionAvgAggregateOutputType | null
    _sum: GateDecisionSumAggregateOutputType | null
    _min: GateDecisionMinAggregateOutputType | null
    _max: GateDecisionMaxAggregateOutputType | null
  }

  export type GateDecisionAvgAggregateOutputType = {
    riskScore: number | null
  }

  export type GateDecisionSumAggregateOutputType = {
    riskScore: number | null
  }

  export type GateDecisionMinAggregateOutputType = {
    id: string | null
    billId: string | null
    verdict: string | null
    deterministic: boolean | null
    riskScore: number | null
    reasons: string | null
    policyVersion: string | null
    inputHash: string | null
    createdAt: Date | null
  }

  export type GateDecisionMaxAggregateOutputType = {
    id: string | null
    billId: string | null
    verdict: string | null
    deterministic: boolean | null
    riskScore: number | null
    reasons: string | null
    policyVersion: string | null
    inputHash: string | null
    createdAt: Date | null
  }

  export type GateDecisionCountAggregateOutputType = {
    id: number
    billId: number
    verdict: number
    deterministic: number
    riskScore: number
    reasons: number
    policyVersion: number
    inputHash: number
    createdAt: number
    _all: number
  }


  export type GateDecisionAvgAggregateInputType = {
    riskScore?: true
  }

  export type GateDecisionSumAggregateInputType = {
    riskScore?: true
  }

  export type GateDecisionMinAggregateInputType = {
    id?: true
    billId?: true
    verdict?: true
    deterministic?: true
    riskScore?: true
    reasons?: true
    policyVersion?: true
    inputHash?: true
    createdAt?: true
  }

  export type GateDecisionMaxAggregateInputType = {
    id?: true
    billId?: true
    verdict?: true
    deterministic?: true
    riskScore?: true
    reasons?: true
    policyVersion?: true
    inputHash?: true
    createdAt?: true
  }

  export type GateDecisionCountAggregateInputType = {
    id?: true
    billId?: true
    verdict?: true
    deterministic?: true
    riskScore?: true
    reasons?: true
    policyVersion?: true
    inputHash?: true
    createdAt?: true
    _all?: true
  }

  export type GateDecisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GateDecision to aggregate.
     */
    where?: GateDecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GateDecisions to fetch.
     */
    orderBy?: GateDecisionOrderByWithRelationInput | GateDecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GateDecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GateDecisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GateDecisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GateDecisions
    **/
    _count?: true | GateDecisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GateDecisionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GateDecisionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GateDecisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GateDecisionMaxAggregateInputType
  }

  export type GetGateDecisionAggregateType<T extends GateDecisionAggregateArgs> = {
        [P in keyof T & keyof AggregateGateDecision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGateDecision[P]>
      : GetScalarType<T[P], AggregateGateDecision[P]>
  }




  export type GateDecisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GateDecisionWhereInput
    orderBy?: GateDecisionOrderByWithAggregationInput | GateDecisionOrderByWithAggregationInput[]
    by: GateDecisionScalarFieldEnum[] | GateDecisionScalarFieldEnum
    having?: GateDecisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GateDecisionCountAggregateInputType | true
    _avg?: GateDecisionAvgAggregateInputType
    _sum?: GateDecisionSumAggregateInputType
    _min?: GateDecisionMinAggregateInputType
    _max?: GateDecisionMaxAggregateInputType
  }

  export type GateDecisionGroupByOutputType = {
    id: string
    billId: string
    verdict: string
    deterministic: boolean
    riskScore: number | null
    reasons: string
    policyVersion: string
    inputHash: string
    createdAt: Date
    _count: GateDecisionCountAggregateOutputType | null
    _avg: GateDecisionAvgAggregateOutputType | null
    _sum: GateDecisionSumAggregateOutputType | null
    _min: GateDecisionMinAggregateOutputType | null
    _max: GateDecisionMaxAggregateOutputType | null
  }

  type GetGateDecisionGroupByPayload<T extends GateDecisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GateDecisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GateDecisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GateDecisionGroupByOutputType[P]>
            : GetScalarType<T[P], GateDecisionGroupByOutputType[P]>
        }
      >
    >


  export type GateDecisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    verdict?: boolean
    deterministic?: boolean
    riskScore?: boolean
    reasons?: boolean
    policyVersion?: boolean
    inputHash?: boolean
    createdAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gateDecision"]>

  export type GateDecisionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    verdict?: boolean
    deterministic?: boolean
    riskScore?: boolean
    reasons?: boolean
    policyVersion?: boolean
    inputHash?: boolean
    createdAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gateDecision"]>

  export type GateDecisionSelectScalar = {
    id?: boolean
    billId?: boolean
    verdict?: boolean
    deterministic?: boolean
    riskScore?: boolean
    reasons?: boolean
    policyVersion?: boolean
    inputHash?: boolean
    createdAt?: boolean
  }

  export type GateDecisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type GateDecisionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }

  export type $GateDecisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GateDecision"
    objects: {
      bill: Prisma.$BillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      billId: string
      verdict: string
      deterministic: boolean
      riskScore: number | null
      reasons: string
      policyVersion: string
      inputHash: string
      createdAt: Date
    }, ExtArgs["result"]["gateDecision"]>
    composites: {}
  }

  type GateDecisionGetPayload<S extends boolean | null | undefined | GateDecisionDefaultArgs> = $Result.GetResult<Prisma.$GateDecisionPayload, S>

  type GateDecisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GateDecisionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GateDecisionCountAggregateInputType | true
    }

  export interface GateDecisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GateDecision'], meta: { name: 'GateDecision' } }
    /**
     * Find zero or one GateDecision that matches the filter.
     * @param {GateDecisionFindUniqueArgs} args - Arguments to find a GateDecision
     * @example
     * // Get one GateDecision
     * const gateDecision = await prisma.gateDecision.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GateDecisionFindUniqueArgs>(args: SelectSubset<T, GateDecisionFindUniqueArgs<ExtArgs>>): Prisma__GateDecisionClient<$Result.GetResult<Prisma.$GateDecisionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one GateDecision that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {GateDecisionFindUniqueOrThrowArgs} args - Arguments to find a GateDecision
     * @example
     * // Get one GateDecision
     * const gateDecision = await prisma.gateDecision.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GateDecisionFindUniqueOrThrowArgs>(args: SelectSubset<T, GateDecisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GateDecisionClient<$Result.GetResult<Prisma.$GateDecisionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first GateDecision that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateDecisionFindFirstArgs} args - Arguments to find a GateDecision
     * @example
     * // Get one GateDecision
     * const gateDecision = await prisma.gateDecision.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GateDecisionFindFirstArgs>(args?: SelectSubset<T, GateDecisionFindFirstArgs<ExtArgs>>): Prisma__GateDecisionClient<$Result.GetResult<Prisma.$GateDecisionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first GateDecision that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateDecisionFindFirstOrThrowArgs} args - Arguments to find a GateDecision
     * @example
     * // Get one GateDecision
     * const gateDecision = await prisma.gateDecision.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GateDecisionFindFirstOrThrowArgs>(args?: SelectSubset<T, GateDecisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GateDecisionClient<$Result.GetResult<Prisma.$GateDecisionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more GateDecisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateDecisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GateDecisions
     * const gateDecisions = await prisma.gateDecision.findMany()
     * 
     * // Get first 10 GateDecisions
     * const gateDecisions = await prisma.gateDecision.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gateDecisionWithIdOnly = await prisma.gateDecision.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GateDecisionFindManyArgs>(args?: SelectSubset<T, GateDecisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GateDecisionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a GateDecision.
     * @param {GateDecisionCreateArgs} args - Arguments to create a GateDecision.
     * @example
     * // Create one GateDecision
     * const GateDecision = await prisma.gateDecision.create({
     *   data: {
     *     // ... data to create a GateDecision
     *   }
     * })
     * 
     */
    create<T extends GateDecisionCreateArgs>(args: SelectSubset<T, GateDecisionCreateArgs<ExtArgs>>): Prisma__GateDecisionClient<$Result.GetResult<Prisma.$GateDecisionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many GateDecisions.
     * @param {GateDecisionCreateManyArgs} args - Arguments to create many GateDecisions.
     * @example
     * // Create many GateDecisions
     * const gateDecision = await prisma.gateDecision.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GateDecisionCreateManyArgs>(args?: SelectSubset<T, GateDecisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GateDecisions and returns the data saved in the database.
     * @param {GateDecisionCreateManyAndReturnArgs} args - Arguments to create many GateDecisions.
     * @example
     * // Create many GateDecisions
     * const gateDecision = await prisma.gateDecision.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GateDecisions and only return the `id`
     * const gateDecisionWithIdOnly = await prisma.gateDecision.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GateDecisionCreateManyAndReturnArgs>(args?: SelectSubset<T, GateDecisionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GateDecisionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a GateDecision.
     * @param {GateDecisionDeleteArgs} args - Arguments to delete one GateDecision.
     * @example
     * // Delete one GateDecision
     * const GateDecision = await prisma.gateDecision.delete({
     *   where: {
     *     // ... filter to delete one GateDecision
     *   }
     * })
     * 
     */
    delete<T extends GateDecisionDeleteArgs>(args: SelectSubset<T, GateDecisionDeleteArgs<ExtArgs>>): Prisma__GateDecisionClient<$Result.GetResult<Prisma.$GateDecisionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one GateDecision.
     * @param {GateDecisionUpdateArgs} args - Arguments to update one GateDecision.
     * @example
     * // Update one GateDecision
     * const gateDecision = await prisma.gateDecision.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GateDecisionUpdateArgs>(args: SelectSubset<T, GateDecisionUpdateArgs<ExtArgs>>): Prisma__GateDecisionClient<$Result.GetResult<Prisma.$GateDecisionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more GateDecisions.
     * @param {GateDecisionDeleteManyArgs} args - Arguments to filter GateDecisions to delete.
     * @example
     * // Delete a few GateDecisions
     * const { count } = await prisma.gateDecision.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GateDecisionDeleteManyArgs>(args?: SelectSubset<T, GateDecisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GateDecisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateDecisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GateDecisions
     * const gateDecision = await prisma.gateDecision.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GateDecisionUpdateManyArgs>(args: SelectSubset<T, GateDecisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GateDecision.
     * @param {GateDecisionUpsertArgs} args - Arguments to update or create a GateDecision.
     * @example
     * // Update or create a GateDecision
     * const gateDecision = await prisma.gateDecision.upsert({
     *   create: {
     *     // ... data to create a GateDecision
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GateDecision we want to update
     *   }
     * })
     */
    upsert<T extends GateDecisionUpsertArgs>(args: SelectSubset<T, GateDecisionUpsertArgs<ExtArgs>>): Prisma__GateDecisionClient<$Result.GetResult<Prisma.$GateDecisionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of GateDecisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateDecisionCountArgs} args - Arguments to filter GateDecisions to count.
     * @example
     * // Count the number of GateDecisions
     * const count = await prisma.gateDecision.count({
     *   where: {
     *     // ... the filter for the GateDecisions we want to count
     *   }
     * })
    **/
    count<T extends GateDecisionCountArgs>(
      args?: Subset<T, GateDecisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GateDecisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GateDecision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateDecisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GateDecisionAggregateArgs>(args: Subset<T, GateDecisionAggregateArgs>): Prisma.PrismaPromise<GetGateDecisionAggregateType<T>>

    /**
     * Group by GateDecision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GateDecisionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GateDecisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GateDecisionGroupByArgs['orderBy'] }
        : { orderBy?: GateDecisionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GateDecisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGateDecisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GateDecision model
   */
  readonly fields: GateDecisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GateDecision.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GateDecisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bill<T extends BillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillDefaultArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GateDecision model
   */ 
  interface GateDecisionFieldRefs {
    readonly id: FieldRef<"GateDecision", 'String'>
    readonly billId: FieldRef<"GateDecision", 'String'>
    readonly verdict: FieldRef<"GateDecision", 'String'>
    readonly deterministic: FieldRef<"GateDecision", 'Boolean'>
    readonly riskScore: FieldRef<"GateDecision", 'Float'>
    readonly reasons: FieldRef<"GateDecision", 'String'>
    readonly policyVersion: FieldRef<"GateDecision", 'String'>
    readonly inputHash: FieldRef<"GateDecision", 'String'>
    readonly createdAt: FieldRef<"GateDecision", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GateDecision findUnique
   */
  export type GateDecisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateDecision
     */
    select?: GateDecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GateDecisionInclude<ExtArgs> | null
    /**
     * Filter, which GateDecision to fetch.
     */
    where: GateDecisionWhereUniqueInput
  }

  /**
   * GateDecision findUniqueOrThrow
   */
  export type GateDecisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateDecision
     */
    select?: GateDecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GateDecisionInclude<ExtArgs> | null
    /**
     * Filter, which GateDecision to fetch.
     */
    where: GateDecisionWhereUniqueInput
  }

  /**
   * GateDecision findFirst
   */
  export type GateDecisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateDecision
     */
    select?: GateDecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GateDecisionInclude<ExtArgs> | null
    /**
     * Filter, which GateDecision to fetch.
     */
    where?: GateDecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GateDecisions to fetch.
     */
    orderBy?: GateDecisionOrderByWithRelationInput | GateDecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GateDecisions.
     */
    cursor?: GateDecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GateDecisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GateDecisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GateDecisions.
     */
    distinct?: GateDecisionScalarFieldEnum | GateDecisionScalarFieldEnum[]
  }

  /**
   * GateDecision findFirstOrThrow
   */
  export type GateDecisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateDecision
     */
    select?: GateDecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GateDecisionInclude<ExtArgs> | null
    /**
     * Filter, which GateDecision to fetch.
     */
    where?: GateDecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GateDecisions to fetch.
     */
    orderBy?: GateDecisionOrderByWithRelationInput | GateDecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GateDecisions.
     */
    cursor?: GateDecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GateDecisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GateDecisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GateDecisions.
     */
    distinct?: GateDecisionScalarFieldEnum | GateDecisionScalarFieldEnum[]
  }

  /**
   * GateDecision findMany
   */
  export type GateDecisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateDecision
     */
    select?: GateDecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GateDecisionInclude<ExtArgs> | null
    /**
     * Filter, which GateDecisions to fetch.
     */
    where?: GateDecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GateDecisions to fetch.
     */
    orderBy?: GateDecisionOrderByWithRelationInput | GateDecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GateDecisions.
     */
    cursor?: GateDecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GateDecisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GateDecisions.
     */
    skip?: number
    distinct?: GateDecisionScalarFieldEnum | GateDecisionScalarFieldEnum[]
  }

  /**
   * GateDecision create
   */
  export type GateDecisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateDecision
     */
    select?: GateDecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GateDecisionInclude<ExtArgs> | null
    /**
     * The data needed to create a GateDecision.
     */
    data: XOR<GateDecisionCreateInput, GateDecisionUncheckedCreateInput>
  }

  /**
   * GateDecision createMany
   */
  export type GateDecisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GateDecisions.
     */
    data: GateDecisionCreateManyInput | GateDecisionCreateManyInput[]
  }

  /**
   * GateDecision createManyAndReturn
   */
  export type GateDecisionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateDecision
     */
    select?: GateDecisionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many GateDecisions.
     */
    data: GateDecisionCreateManyInput | GateDecisionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GateDecisionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GateDecision update
   */
  export type GateDecisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateDecision
     */
    select?: GateDecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GateDecisionInclude<ExtArgs> | null
    /**
     * The data needed to update a GateDecision.
     */
    data: XOR<GateDecisionUpdateInput, GateDecisionUncheckedUpdateInput>
    /**
     * Choose, which GateDecision to update.
     */
    where: GateDecisionWhereUniqueInput
  }

  /**
   * GateDecision updateMany
   */
  export type GateDecisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GateDecisions.
     */
    data: XOR<GateDecisionUpdateManyMutationInput, GateDecisionUncheckedUpdateManyInput>
    /**
     * Filter which GateDecisions to update
     */
    where?: GateDecisionWhereInput
  }

  /**
   * GateDecision upsert
   */
  export type GateDecisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateDecision
     */
    select?: GateDecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GateDecisionInclude<ExtArgs> | null
    /**
     * The filter to search for the GateDecision to update in case it exists.
     */
    where: GateDecisionWhereUniqueInput
    /**
     * In case the GateDecision found by the `where` argument doesn't exist, create a new GateDecision with this data.
     */
    create: XOR<GateDecisionCreateInput, GateDecisionUncheckedCreateInput>
    /**
     * In case the GateDecision was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GateDecisionUpdateInput, GateDecisionUncheckedUpdateInput>
  }

  /**
   * GateDecision delete
   */
  export type GateDecisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateDecision
     */
    select?: GateDecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GateDecisionInclude<ExtArgs> | null
    /**
     * Filter which GateDecision to delete.
     */
    where: GateDecisionWhereUniqueInput
  }

  /**
   * GateDecision deleteMany
   */
  export type GateDecisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GateDecisions to delete
     */
    where?: GateDecisionWhereInput
  }

  /**
   * GateDecision without action
   */
  export type GateDecisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GateDecision
     */
    select?: GateDecisionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GateDecisionInclude<ExtArgs> | null
  }


  /**
   * Model AuditReport
   */

  export type AggregateAuditReport = {
    _count: AuditReportCountAggregateOutputType | null
    _min: AuditReportMinAggregateOutputType | null
    _max: AuditReportMaxAggregateOutputType | null
  }

  export type AuditReportMinAggregateOutputType = {
    id: string | null
    billId: string | null
    verdict: string | null
    severity: string | null
    reasons: string | null
    auditorProvenance: string | null
    inputHash: string | null
    createdAt: Date | null
  }

  export type AuditReportMaxAggregateOutputType = {
    id: string | null
    billId: string | null
    verdict: string | null
    severity: string | null
    reasons: string | null
    auditorProvenance: string | null
    inputHash: string | null
    createdAt: Date | null
  }

  export type AuditReportCountAggregateOutputType = {
    id: number
    billId: number
    verdict: number
    severity: number
    reasons: number
    auditorProvenance: number
    inputHash: number
    createdAt: number
    _all: number
  }


  export type AuditReportMinAggregateInputType = {
    id?: true
    billId?: true
    verdict?: true
    severity?: true
    reasons?: true
    auditorProvenance?: true
    inputHash?: true
    createdAt?: true
  }

  export type AuditReportMaxAggregateInputType = {
    id?: true
    billId?: true
    verdict?: true
    severity?: true
    reasons?: true
    auditorProvenance?: true
    inputHash?: true
    createdAt?: true
  }

  export type AuditReportCountAggregateInputType = {
    id?: true
    billId?: true
    verdict?: true
    severity?: true
    reasons?: true
    auditorProvenance?: true
    inputHash?: true
    createdAt?: true
    _all?: true
  }

  export type AuditReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditReport to aggregate.
     */
    where?: AuditReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditReports to fetch.
     */
    orderBy?: AuditReportOrderByWithRelationInput | AuditReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditReports
    **/
    _count?: true | AuditReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditReportMaxAggregateInputType
  }

  export type GetAuditReportAggregateType<T extends AuditReportAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditReport[P]>
      : GetScalarType<T[P], AggregateAuditReport[P]>
  }




  export type AuditReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditReportWhereInput
    orderBy?: AuditReportOrderByWithAggregationInput | AuditReportOrderByWithAggregationInput[]
    by: AuditReportScalarFieldEnum[] | AuditReportScalarFieldEnum
    having?: AuditReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditReportCountAggregateInputType | true
    _min?: AuditReportMinAggregateInputType
    _max?: AuditReportMaxAggregateInputType
  }

  export type AuditReportGroupByOutputType = {
    id: string
    billId: string
    verdict: string
    severity: string
    reasons: string
    auditorProvenance: string
    inputHash: string
    createdAt: Date
    _count: AuditReportCountAggregateOutputType | null
    _min: AuditReportMinAggregateOutputType | null
    _max: AuditReportMaxAggregateOutputType | null
  }

  type GetAuditReportGroupByPayload<T extends AuditReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditReportGroupByOutputType[P]>
            : GetScalarType<T[P], AuditReportGroupByOutputType[P]>
        }
      >
    >


  export type AuditReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    verdict?: boolean
    severity?: boolean
    reasons?: boolean
    auditorProvenance?: boolean
    inputHash?: boolean
    createdAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditReport"]>

  export type AuditReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    verdict?: boolean
    severity?: boolean
    reasons?: boolean
    auditorProvenance?: boolean
    inputHash?: boolean
    createdAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditReport"]>

  export type AuditReportSelectScalar = {
    id?: boolean
    billId?: boolean
    verdict?: boolean
    severity?: boolean
    reasons?: boolean
    auditorProvenance?: boolean
    inputHash?: boolean
    createdAt?: boolean
  }

  export type AuditReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type AuditReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }

  export type $AuditReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditReport"
    objects: {
      bill: Prisma.$BillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      billId: string
      verdict: string
      severity: string
      reasons: string
      auditorProvenance: string
      inputHash: string
      createdAt: Date
    }, ExtArgs["result"]["auditReport"]>
    composites: {}
  }

  type AuditReportGetPayload<S extends boolean | null | undefined | AuditReportDefaultArgs> = $Result.GetResult<Prisma.$AuditReportPayload, S>

  type AuditReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AuditReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AuditReportCountAggregateInputType | true
    }

  export interface AuditReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditReport'], meta: { name: 'AuditReport' } }
    /**
     * Find zero or one AuditReport that matches the filter.
     * @param {AuditReportFindUniqueArgs} args - Arguments to find a AuditReport
     * @example
     * // Get one AuditReport
     * const auditReport = await prisma.auditReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditReportFindUniqueArgs>(args: SelectSubset<T, AuditReportFindUniqueArgs<ExtArgs>>): Prisma__AuditReportClient<$Result.GetResult<Prisma.$AuditReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AuditReport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AuditReportFindUniqueOrThrowArgs} args - Arguments to find a AuditReport
     * @example
     * // Get one AuditReport
     * const auditReport = await prisma.auditReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditReportFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditReportClient<$Result.GetResult<Prisma.$AuditReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AuditReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditReportFindFirstArgs} args - Arguments to find a AuditReport
     * @example
     * // Get one AuditReport
     * const auditReport = await prisma.auditReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditReportFindFirstArgs>(args?: SelectSubset<T, AuditReportFindFirstArgs<ExtArgs>>): Prisma__AuditReportClient<$Result.GetResult<Prisma.$AuditReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AuditReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditReportFindFirstOrThrowArgs} args - Arguments to find a AuditReport
     * @example
     * // Get one AuditReport
     * const auditReport = await prisma.auditReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditReportFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditReportClient<$Result.GetResult<Prisma.$AuditReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AuditReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditReports
     * const auditReports = await prisma.auditReport.findMany()
     * 
     * // Get first 10 AuditReports
     * const auditReports = await prisma.auditReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditReportWithIdOnly = await prisma.auditReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditReportFindManyArgs>(args?: SelectSubset<T, AuditReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditReportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AuditReport.
     * @param {AuditReportCreateArgs} args - Arguments to create a AuditReport.
     * @example
     * // Create one AuditReport
     * const AuditReport = await prisma.auditReport.create({
     *   data: {
     *     // ... data to create a AuditReport
     *   }
     * })
     * 
     */
    create<T extends AuditReportCreateArgs>(args: SelectSubset<T, AuditReportCreateArgs<ExtArgs>>): Prisma__AuditReportClient<$Result.GetResult<Prisma.$AuditReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AuditReports.
     * @param {AuditReportCreateManyArgs} args - Arguments to create many AuditReports.
     * @example
     * // Create many AuditReports
     * const auditReport = await prisma.auditReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditReportCreateManyArgs>(args?: SelectSubset<T, AuditReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditReports and returns the data saved in the database.
     * @param {AuditReportCreateManyAndReturnArgs} args - Arguments to create many AuditReports.
     * @example
     * // Create many AuditReports
     * const auditReport = await prisma.auditReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditReports and only return the `id`
     * const auditReportWithIdOnly = await prisma.auditReport.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditReportCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditReportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AuditReport.
     * @param {AuditReportDeleteArgs} args - Arguments to delete one AuditReport.
     * @example
     * // Delete one AuditReport
     * const AuditReport = await prisma.auditReport.delete({
     *   where: {
     *     // ... filter to delete one AuditReport
     *   }
     * })
     * 
     */
    delete<T extends AuditReportDeleteArgs>(args: SelectSubset<T, AuditReportDeleteArgs<ExtArgs>>): Prisma__AuditReportClient<$Result.GetResult<Prisma.$AuditReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AuditReport.
     * @param {AuditReportUpdateArgs} args - Arguments to update one AuditReport.
     * @example
     * // Update one AuditReport
     * const auditReport = await prisma.auditReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditReportUpdateArgs>(args: SelectSubset<T, AuditReportUpdateArgs<ExtArgs>>): Prisma__AuditReportClient<$Result.GetResult<Prisma.$AuditReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AuditReports.
     * @param {AuditReportDeleteManyArgs} args - Arguments to filter AuditReports to delete.
     * @example
     * // Delete a few AuditReports
     * const { count } = await prisma.auditReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditReportDeleteManyArgs>(args?: SelectSubset<T, AuditReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditReports
     * const auditReport = await prisma.auditReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditReportUpdateManyArgs>(args: SelectSubset<T, AuditReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditReport.
     * @param {AuditReportUpsertArgs} args - Arguments to update or create a AuditReport.
     * @example
     * // Update or create a AuditReport
     * const auditReport = await prisma.auditReport.upsert({
     *   create: {
     *     // ... data to create a AuditReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditReport we want to update
     *   }
     * })
     */
    upsert<T extends AuditReportUpsertArgs>(args: SelectSubset<T, AuditReportUpsertArgs<ExtArgs>>): Prisma__AuditReportClient<$Result.GetResult<Prisma.$AuditReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AuditReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditReportCountArgs} args - Arguments to filter AuditReports to count.
     * @example
     * // Count the number of AuditReports
     * const count = await prisma.auditReport.count({
     *   where: {
     *     // ... the filter for the AuditReports we want to count
     *   }
     * })
    **/
    count<T extends AuditReportCountArgs>(
      args?: Subset<T, AuditReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditReportAggregateArgs>(args: Subset<T, AuditReportAggregateArgs>): Prisma.PrismaPromise<GetAuditReportAggregateType<T>>

    /**
     * Group by AuditReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditReportGroupByArgs['orderBy'] }
        : { orderBy?: AuditReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditReport model
   */
  readonly fields: AuditReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bill<T extends BillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillDefaultArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditReport model
   */ 
  interface AuditReportFieldRefs {
    readonly id: FieldRef<"AuditReport", 'String'>
    readonly billId: FieldRef<"AuditReport", 'String'>
    readonly verdict: FieldRef<"AuditReport", 'String'>
    readonly severity: FieldRef<"AuditReport", 'String'>
    readonly reasons: FieldRef<"AuditReport", 'String'>
    readonly auditorProvenance: FieldRef<"AuditReport", 'String'>
    readonly inputHash: FieldRef<"AuditReport", 'String'>
    readonly createdAt: FieldRef<"AuditReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditReport findUnique
   */
  export type AuditReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditReport
     */
    select?: AuditReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditReportInclude<ExtArgs> | null
    /**
     * Filter, which AuditReport to fetch.
     */
    where: AuditReportWhereUniqueInput
  }

  /**
   * AuditReport findUniqueOrThrow
   */
  export type AuditReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditReport
     */
    select?: AuditReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditReportInclude<ExtArgs> | null
    /**
     * Filter, which AuditReport to fetch.
     */
    where: AuditReportWhereUniqueInput
  }

  /**
   * AuditReport findFirst
   */
  export type AuditReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditReport
     */
    select?: AuditReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditReportInclude<ExtArgs> | null
    /**
     * Filter, which AuditReport to fetch.
     */
    where?: AuditReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditReports to fetch.
     */
    orderBy?: AuditReportOrderByWithRelationInput | AuditReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditReports.
     */
    cursor?: AuditReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditReports.
     */
    distinct?: AuditReportScalarFieldEnum | AuditReportScalarFieldEnum[]
  }

  /**
   * AuditReport findFirstOrThrow
   */
  export type AuditReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditReport
     */
    select?: AuditReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditReportInclude<ExtArgs> | null
    /**
     * Filter, which AuditReport to fetch.
     */
    where?: AuditReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditReports to fetch.
     */
    orderBy?: AuditReportOrderByWithRelationInput | AuditReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditReports.
     */
    cursor?: AuditReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditReports.
     */
    distinct?: AuditReportScalarFieldEnum | AuditReportScalarFieldEnum[]
  }

  /**
   * AuditReport findMany
   */
  export type AuditReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditReport
     */
    select?: AuditReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditReportInclude<ExtArgs> | null
    /**
     * Filter, which AuditReports to fetch.
     */
    where?: AuditReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditReports to fetch.
     */
    orderBy?: AuditReportOrderByWithRelationInput | AuditReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditReports.
     */
    cursor?: AuditReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditReports.
     */
    skip?: number
    distinct?: AuditReportScalarFieldEnum | AuditReportScalarFieldEnum[]
  }

  /**
   * AuditReport create
   */
  export type AuditReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditReport
     */
    select?: AuditReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditReportInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditReport.
     */
    data: XOR<AuditReportCreateInput, AuditReportUncheckedCreateInput>
  }

  /**
   * AuditReport createMany
   */
  export type AuditReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditReports.
     */
    data: AuditReportCreateManyInput | AuditReportCreateManyInput[]
  }

  /**
   * AuditReport createManyAndReturn
   */
  export type AuditReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditReport
     */
    select?: AuditReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AuditReports.
     */
    data: AuditReportCreateManyInput | AuditReportCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditReport update
   */
  export type AuditReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditReport
     */
    select?: AuditReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditReportInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditReport.
     */
    data: XOR<AuditReportUpdateInput, AuditReportUncheckedUpdateInput>
    /**
     * Choose, which AuditReport to update.
     */
    where: AuditReportWhereUniqueInput
  }

  /**
   * AuditReport updateMany
   */
  export type AuditReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditReports.
     */
    data: XOR<AuditReportUpdateManyMutationInput, AuditReportUncheckedUpdateManyInput>
    /**
     * Filter which AuditReports to update
     */
    where?: AuditReportWhereInput
  }

  /**
   * AuditReport upsert
   */
  export type AuditReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditReport
     */
    select?: AuditReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditReportInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditReport to update in case it exists.
     */
    where: AuditReportWhereUniqueInput
    /**
     * In case the AuditReport found by the `where` argument doesn't exist, create a new AuditReport with this data.
     */
    create: XOR<AuditReportCreateInput, AuditReportUncheckedCreateInput>
    /**
     * In case the AuditReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditReportUpdateInput, AuditReportUncheckedUpdateInput>
  }

  /**
   * AuditReport delete
   */
  export type AuditReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditReport
     */
    select?: AuditReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditReportInclude<ExtArgs> | null
    /**
     * Filter which AuditReport to delete.
     */
    where: AuditReportWhereUniqueInput
  }

  /**
   * AuditReport deleteMany
   */
  export type AuditReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditReports to delete
     */
    where?: AuditReportWhereInput
  }

  /**
   * AuditReport without action
   */
  export type AuditReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditReport
     */
    select?: AuditReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditReportInclude<ExtArgs> | null
  }


  /**
   * Model DecisionBundle
   */

  export type AggregateDecisionBundle = {
    _count: DecisionBundleCountAggregateOutputType | null
    _min: DecisionBundleMinAggregateOutputType | null
    _max: DecisionBundleMaxAggregateOutputType | null
  }

  export type DecisionBundleMinAggregateOutputType = {
    id: string | null
    billId: string | null
    bundleJson: string | null
    bundleHash: string | null
    createdAt: Date | null
  }

  export type DecisionBundleMaxAggregateOutputType = {
    id: string | null
    billId: string | null
    bundleJson: string | null
    bundleHash: string | null
    createdAt: Date | null
  }

  export type DecisionBundleCountAggregateOutputType = {
    id: number
    billId: number
    bundleJson: number
    bundleHash: number
    createdAt: number
    _all: number
  }


  export type DecisionBundleMinAggregateInputType = {
    id?: true
    billId?: true
    bundleJson?: true
    bundleHash?: true
    createdAt?: true
  }

  export type DecisionBundleMaxAggregateInputType = {
    id?: true
    billId?: true
    bundleJson?: true
    bundleHash?: true
    createdAt?: true
  }

  export type DecisionBundleCountAggregateInputType = {
    id?: true
    billId?: true
    bundleJson?: true
    bundleHash?: true
    createdAt?: true
    _all?: true
  }

  export type DecisionBundleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DecisionBundle to aggregate.
     */
    where?: DecisionBundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DecisionBundles to fetch.
     */
    orderBy?: DecisionBundleOrderByWithRelationInput | DecisionBundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DecisionBundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DecisionBundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DecisionBundles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DecisionBundles
    **/
    _count?: true | DecisionBundleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DecisionBundleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DecisionBundleMaxAggregateInputType
  }

  export type GetDecisionBundleAggregateType<T extends DecisionBundleAggregateArgs> = {
        [P in keyof T & keyof AggregateDecisionBundle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDecisionBundle[P]>
      : GetScalarType<T[P], AggregateDecisionBundle[P]>
  }




  export type DecisionBundleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecisionBundleWhereInput
    orderBy?: DecisionBundleOrderByWithAggregationInput | DecisionBundleOrderByWithAggregationInput[]
    by: DecisionBundleScalarFieldEnum[] | DecisionBundleScalarFieldEnum
    having?: DecisionBundleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DecisionBundleCountAggregateInputType | true
    _min?: DecisionBundleMinAggregateInputType
    _max?: DecisionBundleMaxAggregateInputType
  }

  export type DecisionBundleGroupByOutputType = {
    id: string
    billId: string
    bundleJson: string
    bundleHash: string
    createdAt: Date
    _count: DecisionBundleCountAggregateOutputType | null
    _min: DecisionBundleMinAggregateOutputType | null
    _max: DecisionBundleMaxAggregateOutputType | null
  }

  type GetDecisionBundleGroupByPayload<T extends DecisionBundleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DecisionBundleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DecisionBundleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DecisionBundleGroupByOutputType[P]>
            : GetScalarType<T[P], DecisionBundleGroupByOutputType[P]>
        }
      >
    >


  export type DecisionBundleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    bundleJson?: boolean
    bundleHash?: boolean
    createdAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decisionBundle"]>

  export type DecisionBundleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    billId?: boolean
    bundleJson?: boolean
    bundleHash?: boolean
    createdAt?: boolean
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decisionBundle"]>

  export type DecisionBundleSelectScalar = {
    id?: boolean
    billId?: boolean
    bundleJson?: boolean
    bundleHash?: boolean
    createdAt?: boolean
  }

  export type DecisionBundleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }
  export type DecisionBundleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bill?: boolean | BillDefaultArgs<ExtArgs>
  }

  export type $DecisionBundlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DecisionBundle"
    objects: {
      bill: Prisma.$BillPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      billId: string
      bundleJson: string
      bundleHash: string
      createdAt: Date
    }, ExtArgs["result"]["decisionBundle"]>
    composites: {}
  }

  type DecisionBundleGetPayload<S extends boolean | null | undefined | DecisionBundleDefaultArgs> = $Result.GetResult<Prisma.$DecisionBundlePayload, S>

  type DecisionBundleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DecisionBundleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DecisionBundleCountAggregateInputType | true
    }

  export interface DecisionBundleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DecisionBundle'], meta: { name: 'DecisionBundle' } }
    /**
     * Find zero or one DecisionBundle that matches the filter.
     * @param {DecisionBundleFindUniqueArgs} args - Arguments to find a DecisionBundle
     * @example
     * // Get one DecisionBundle
     * const decisionBundle = await prisma.decisionBundle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DecisionBundleFindUniqueArgs>(args: SelectSubset<T, DecisionBundleFindUniqueArgs<ExtArgs>>): Prisma__DecisionBundleClient<$Result.GetResult<Prisma.$DecisionBundlePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DecisionBundle that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DecisionBundleFindUniqueOrThrowArgs} args - Arguments to find a DecisionBundle
     * @example
     * // Get one DecisionBundle
     * const decisionBundle = await prisma.decisionBundle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DecisionBundleFindUniqueOrThrowArgs>(args: SelectSubset<T, DecisionBundleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DecisionBundleClient<$Result.GetResult<Prisma.$DecisionBundlePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DecisionBundle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionBundleFindFirstArgs} args - Arguments to find a DecisionBundle
     * @example
     * // Get one DecisionBundle
     * const decisionBundle = await prisma.decisionBundle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DecisionBundleFindFirstArgs>(args?: SelectSubset<T, DecisionBundleFindFirstArgs<ExtArgs>>): Prisma__DecisionBundleClient<$Result.GetResult<Prisma.$DecisionBundlePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DecisionBundle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionBundleFindFirstOrThrowArgs} args - Arguments to find a DecisionBundle
     * @example
     * // Get one DecisionBundle
     * const decisionBundle = await prisma.decisionBundle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DecisionBundleFindFirstOrThrowArgs>(args?: SelectSubset<T, DecisionBundleFindFirstOrThrowArgs<ExtArgs>>): Prisma__DecisionBundleClient<$Result.GetResult<Prisma.$DecisionBundlePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DecisionBundles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionBundleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DecisionBundles
     * const decisionBundles = await prisma.decisionBundle.findMany()
     * 
     * // Get first 10 DecisionBundles
     * const decisionBundles = await prisma.decisionBundle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const decisionBundleWithIdOnly = await prisma.decisionBundle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DecisionBundleFindManyArgs>(args?: SelectSubset<T, DecisionBundleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionBundlePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DecisionBundle.
     * @param {DecisionBundleCreateArgs} args - Arguments to create a DecisionBundle.
     * @example
     * // Create one DecisionBundle
     * const DecisionBundle = await prisma.decisionBundle.create({
     *   data: {
     *     // ... data to create a DecisionBundle
     *   }
     * })
     * 
     */
    create<T extends DecisionBundleCreateArgs>(args: SelectSubset<T, DecisionBundleCreateArgs<ExtArgs>>): Prisma__DecisionBundleClient<$Result.GetResult<Prisma.$DecisionBundlePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DecisionBundles.
     * @param {DecisionBundleCreateManyArgs} args - Arguments to create many DecisionBundles.
     * @example
     * // Create many DecisionBundles
     * const decisionBundle = await prisma.decisionBundle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DecisionBundleCreateManyArgs>(args?: SelectSubset<T, DecisionBundleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DecisionBundles and returns the data saved in the database.
     * @param {DecisionBundleCreateManyAndReturnArgs} args - Arguments to create many DecisionBundles.
     * @example
     * // Create many DecisionBundles
     * const decisionBundle = await prisma.decisionBundle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DecisionBundles and only return the `id`
     * const decisionBundleWithIdOnly = await prisma.decisionBundle.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DecisionBundleCreateManyAndReturnArgs>(args?: SelectSubset<T, DecisionBundleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionBundlePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DecisionBundle.
     * @param {DecisionBundleDeleteArgs} args - Arguments to delete one DecisionBundle.
     * @example
     * // Delete one DecisionBundle
     * const DecisionBundle = await prisma.decisionBundle.delete({
     *   where: {
     *     // ... filter to delete one DecisionBundle
     *   }
     * })
     * 
     */
    delete<T extends DecisionBundleDeleteArgs>(args: SelectSubset<T, DecisionBundleDeleteArgs<ExtArgs>>): Prisma__DecisionBundleClient<$Result.GetResult<Prisma.$DecisionBundlePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DecisionBundle.
     * @param {DecisionBundleUpdateArgs} args - Arguments to update one DecisionBundle.
     * @example
     * // Update one DecisionBundle
     * const decisionBundle = await prisma.decisionBundle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DecisionBundleUpdateArgs>(args: SelectSubset<T, DecisionBundleUpdateArgs<ExtArgs>>): Prisma__DecisionBundleClient<$Result.GetResult<Prisma.$DecisionBundlePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DecisionBundles.
     * @param {DecisionBundleDeleteManyArgs} args - Arguments to filter DecisionBundles to delete.
     * @example
     * // Delete a few DecisionBundles
     * const { count } = await prisma.decisionBundle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DecisionBundleDeleteManyArgs>(args?: SelectSubset<T, DecisionBundleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DecisionBundles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionBundleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DecisionBundles
     * const decisionBundle = await prisma.decisionBundle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DecisionBundleUpdateManyArgs>(args: SelectSubset<T, DecisionBundleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DecisionBundle.
     * @param {DecisionBundleUpsertArgs} args - Arguments to update or create a DecisionBundle.
     * @example
     * // Update or create a DecisionBundle
     * const decisionBundle = await prisma.decisionBundle.upsert({
     *   create: {
     *     // ... data to create a DecisionBundle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DecisionBundle we want to update
     *   }
     * })
     */
    upsert<T extends DecisionBundleUpsertArgs>(args: SelectSubset<T, DecisionBundleUpsertArgs<ExtArgs>>): Prisma__DecisionBundleClient<$Result.GetResult<Prisma.$DecisionBundlePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DecisionBundles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionBundleCountArgs} args - Arguments to filter DecisionBundles to count.
     * @example
     * // Count the number of DecisionBundles
     * const count = await prisma.decisionBundle.count({
     *   where: {
     *     // ... the filter for the DecisionBundles we want to count
     *   }
     * })
    **/
    count<T extends DecisionBundleCountArgs>(
      args?: Subset<T, DecisionBundleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DecisionBundleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DecisionBundle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionBundleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DecisionBundleAggregateArgs>(args: Subset<T, DecisionBundleAggregateArgs>): Prisma.PrismaPromise<GetDecisionBundleAggregateType<T>>

    /**
     * Group by DecisionBundle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionBundleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DecisionBundleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DecisionBundleGroupByArgs['orderBy'] }
        : { orderBy?: DecisionBundleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DecisionBundleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDecisionBundleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DecisionBundle model
   */
  readonly fields: DecisionBundleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DecisionBundle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DecisionBundleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bill<T extends BillDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BillDefaultArgs<ExtArgs>>): Prisma__BillClient<$Result.GetResult<Prisma.$BillPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DecisionBundle model
   */ 
  interface DecisionBundleFieldRefs {
    readonly id: FieldRef<"DecisionBundle", 'String'>
    readonly billId: FieldRef<"DecisionBundle", 'String'>
    readonly bundleJson: FieldRef<"DecisionBundle", 'String'>
    readonly bundleHash: FieldRef<"DecisionBundle", 'String'>
    readonly createdAt: FieldRef<"DecisionBundle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DecisionBundle findUnique
   */
  export type DecisionBundleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionBundle
     */
    select?: DecisionBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionBundleInclude<ExtArgs> | null
    /**
     * Filter, which DecisionBundle to fetch.
     */
    where: DecisionBundleWhereUniqueInput
  }

  /**
   * DecisionBundle findUniqueOrThrow
   */
  export type DecisionBundleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionBundle
     */
    select?: DecisionBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionBundleInclude<ExtArgs> | null
    /**
     * Filter, which DecisionBundle to fetch.
     */
    where: DecisionBundleWhereUniqueInput
  }

  /**
   * DecisionBundle findFirst
   */
  export type DecisionBundleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionBundle
     */
    select?: DecisionBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionBundleInclude<ExtArgs> | null
    /**
     * Filter, which DecisionBundle to fetch.
     */
    where?: DecisionBundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DecisionBundles to fetch.
     */
    orderBy?: DecisionBundleOrderByWithRelationInput | DecisionBundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DecisionBundles.
     */
    cursor?: DecisionBundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DecisionBundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DecisionBundles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DecisionBundles.
     */
    distinct?: DecisionBundleScalarFieldEnum | DecisionBundleScalarFieldEnum[]
  }

  /**
   * DecisionBundle findFirstOrThrow
   */
  export type DecisionBundleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionBundle
     */
    select?: DecisionBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionBundleInclude<ExtArgs> | null
    /**
     * Filter, which DecisionBundle to fetch.
     */
    where?: DecisionBundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DecisionBundles to fetch.
     */
    orderBy?: DecisionBundleOrderByWithRelationInput | DecisionBundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DecisionBundles.
     */
    cursor?: DecisionBundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DecisionBundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DecisionBundles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DecisionBundles.
     */
    distinct?: DecisionBundleScalarFieldEnum | DecisionBundleScalarFieldEnum[]
  }

  /**
   * DecisionBundle findMany
   */
  export type DecisionBundleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionBundle
     */
    select?: DecisionBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionBundleInclude<ExtArgs> | null
    /**
     * Filter, which DecisionBundles to fetch.
     */
    where?: DecisionBundleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DecisionBundles to fetch.
     */
    orderBy?: DecisionBundleOrderByWithRelationInput | DecisionBundleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DecisionBundles.
     */
    cursor?: DecisionBundleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DecisionBundles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DecisionBundles.
     */
    skip?: number
    distinct?: DecisionBundleScalarFieldEnum | DecisionBundleScalarFieldEnum[]
  }

  /**
   * DecisionBundle create
   */
  export type DecisionBundleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionBundle
     */
    select?: DecisionBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionBundleInclude<ExtArgs> | null
    /**
     * The data needed to create a DecisionBundle.
     */
    data: XOR<DecisionBundleCreateInput, DecisionBundleUncheckedCreateInput>
  }

  /**
   * DecisionBundle createMany
   */
  export type DecisionBundleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DecisionBundles.
     */
    data: DecisionBundleCreateManyInput | DecisionBundleCreateManyInput[]
  }

  /**
   * DecisionBundle createManyAndReturn
   */
  export type DecisionBundleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionBundle
     */
    select?: DecisionBundleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DecisionBundles.
     */
    data: DecisionBundleCreateManyInput | DecisionBundleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionBundleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DecisionBundle update
   */
  export type DecisionBundleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionBundle
     */
    select?: DecisionBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionBundleInclude<ExtArgs> | null
    /**
     * The data needed to update a DecisionBundle.
     */
    data: XOR<DecisionBundleUpdateInput, DecisionBundleUncheckedUpdateInput>
    /**
     * Choose, which DecisionBundle to update.
     */
    where: DecisionBundleWhereUniqueInput
  }

  /**
   * DecisionBundle updateMany
   */
  export type DecisionBundleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DecisionBundles.
     */
    data: XOR<DecisionBundleUpdateManyMutationInput, DecisionBundleUncheckedUpdateManyInput>
    /**
     * Filter which DecisionBundles to update
     */
    where?: DecisionBundleWhereInput
  }

  /**
   * DecisionBundle upsert
   */
  export type DecisionBundleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionBundle
     */
    select?: DecisionBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionBundleInclude<ExtArgs> | null
    /**
     * The filter to search for the DecisionBundle to update in case it exists.
     */
    where: DecisionBundleWhereUniqueInput
    /**
     * In case the DecisionBundle found by the `where` argument doesn't exist, create a new DecisionBundle with this data.
     */
    create: XOR<DecisionBundleCreateInput, DecisionBundleUncheckedCreateInput>
    /**
     * In case the DecisionBundle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DecisionBundleUpdateInput, DecisionBundleUncheckedUpdateInput>
  }

  /**
   * DecisionBundle delete
   */
  export type DecisionBundleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionBundle
     */
    select?: DecisionBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionBundleInclude<ExtArgs> | null
    /**
     * Filter which DecisionBundle to delete.
     */
    where: DecisionBundleWhereUniqueInput
  }

  /**
   * DecisionBundle deleteMany
   */
  export type DecisionBundleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DecisionBundles to delete
     */
    where?: DecisionBundleWhereInput
  }

  /**
   * DecisionBundle without action
   */
  export type DecisionBundleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DecisionBundle
     */
    select?: DecisionBundleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionBundleInclude<ExtArgs> | null
  }


  /**
   * Model EventLog
   */

  export type AggregateEventLog = {
    _count: EventLogCountAggregateOutputType | null
    _min: EventLogMinAggregateOutputType | null
    _max: EventLogMaxAggregateOutputType | null
  }

  export type EventLogMinAggregateOutputType = {
    id: string | null
    ts: Date | null
    actorType: string | null
    actorId: string | null
    eventType: string | null
    entityType: string | null
    entityId: string | null
    payload: string | null
    prevHash: string | null
    hash: string | null
  }

  export type EventLogMaxAggregateOutputType = {
    id: string | null
    ts: Date | null
    actorType: string | null
    actorId: string | null
    eventType: string | null
    entityType: string | null
    entityId: string | null
    payload: string | null
    prevHash: string | null
    hash: string | null
  }

  export type EventLogCountAggregateOutputType = {
    id: number
    ts: number
    actorType: number
    actorId: number
    eventType: number
    entityType: number
    entityId: number
    payload: number
    prevHash: number
    hash: number
    _all: number
  }


  export type EventLogMinAggregateInputType = {
    id?: true
    ts?: true
    actorType?: true
    actorId?: true
    eventType?: true
    entityType?: true
    entityId?: true
    payload?: true
    prevHash?: true
    hash?: true
  }

  export type EventLogMaxAggregateInputType = {
    id?: true
    ts?: true
    actorType?: true
    actorId?: true
    eventType?: true
    entityType?: true
    entityId?: true
    payload?: true
    prevHash?: true
    hash?: true
  }

  export type EventLogCountAggregateInputType = {
    id?: true
    ts?: true
    actorType?: true
    actorId?: true
    eventType?: true
    entityType?: true
    entityId?: true
    payload?: true
    prevHash?: true
    hash?: true
    _all?: true
  }

  export type EventLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventLog to aggregate.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventLogs
    **/
    _count?: true | EventLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventLogMaxAggregateInputType
  }

  export type GetEventLogAggregateType<T extends EventLogAggregateArgs> = {
        [P in keyof T & keyof AggregateEventLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventLog[P]>
      : GetScalarType<T[P], AggregateEventLog[P]>
  }




  export type EventLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventLogWhereInput
    orderBy?: EventLogOrderByWithAggregationInput | EventLogOrderByWithAggregationInput[]
    by: EventLogScalarFieldEnum[] | EventLogScalarFieldEnum
    having?: EventLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventLogCountAggregateInputType | true
    _min?: EventLogMinAggregateInputType
    _max?: EventLogMaxAggregateInputType
  }

  export type EventLogGroupByOutputType = {
    id: string
    ts: Date
    actorType: string
    actorId: string | null
    eventType: string
    entityType: string
    entityId: string
    payload: string
    prevHash: string | null
    hash: string
    _count: EventLogCountAggregateOutputType | null
    _min: EventLogMinAggregateOutputType | null
    _max: EventLogMaxAggregateOutputType | null
  }

  type GetEventLogGroupByPayload<T extends EventLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventLogGroupByOutputType[P]>
            : GetScalarType<T[P], EventLogGroupByOutputType[P]>
        }
      >
    >


  export type EventLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ts?: boolean
    actorType?: boolean
    actorId?: boolean
    eventType?: boolean
    entityType?: boolean
    entityId?: boolean
    payload?: boolean
    prevHash?: boolean
    hash?: boolean
  }, ExtArgs["result"]["eventLog"]>

  export type EventLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ts?: boolean
    actorType?: boolean
    actorId?: boolean
    eventType?: boolean
    entityType?: boolean
    entityId?: boolean
    payload?: boolean
    prevHash?: boolean
    hash?: boolean
  }, ExtArgs["result"]["eventLog"]>

  export type EventLogSelectScalar = {
    id?: boolean
    ts?: boolean
    actorType?: boolean
    actorId?: boolean
    eventType?: boolean
    entityType?: boolean
    entityId?: boolean
    payload?: boolean
    prevHash?: boolean
    hash?: boolean
  }


  export type $EventLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ts: Date
      actorType: string
      actorId: string | null
      eventType: string
      entityType: string
      entityId: string
      payload: string
      prevHash: string | null
      hash: string
    }, ExtArgs["result"]["eventLog"]>
    composites: {}
  }

  type EventLogGetPayload<S extends boolean | null | undefined | EventLogDefaultArgs> = $Result.GetResult<Prisma.$EventLogPayload, S>

  type EventLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventLogCountAggregateInputType | true
    }

  export interface EventLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventLog'], meta: { name: 'EventLog' } }
    /**
     * Find zero or one EventLog that matches the filter.
     * @param {EventLogFindUniqueArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventLogFindUniqueArgs>(args: SelectSubset<T, EventLogFindUniqueArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EventLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventLogFindUniqueOrThrowArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventLogFindUniqueOrThrowArgs>(args: SelectSubset<T, EventLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EventLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogFindFirstArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventLogFindFirstArgs>(args?: SelectSubset<T, EventLogFindFirstArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EventLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogFindFirstOrThrowArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventLogFindFirstOrThrowArgs>(args?: SelectSubset<T, EventLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EventLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventLogs
     * const eventLogs = await prisma.eventLog.findMany()
     * 
     * // Get first 10 EventLogs
     * const eventLogs = await prisma.eventLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventLogWithIdOnly = await prisma.eventLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventLogFindManyArgs>(args?: SelectSubset<T, EventLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EventLog.
     * @param {EventLogCreateArgs} args - Arguments to create a EventLog.
     * @example
     * // Create one EventLog
     * const EventLog = await prisma.eventLog.create({
     *   data: {
     *     // ... data to create a EventLog
     *   }
     * })
     * 
     */
    create<T extends EventLogCreateArgs>(args: SelectSubset<T, EventLogCreateArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EventLogs.
     * @param {EventLogCreateManyArgs} args - Arguments to create many EventLogs.
     * @example
     * // Create many EventLogs
     * const eventLog = await prisma.eventLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventLogCreateManyArgs>(args?: SelectSubset<T, EventLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventLogs and returns the data saved in the database.
     * @param {EventLogCreateManyAndReturnArgs} args - Arguments to create many EventLogs.
     * @example
     * // Create many EventLogs
     * const eventLog = await prisma.eventLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventLogs and only return the `id`
     * const eventLogWithIdOnly = await prisma.eventLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventLogCreateManyAndReturnArgs>(args?: SelectSubset<T, EventLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EventLog.
     * @param {EventLogDeleteArgs} args - Arguments to delete one EventLog.
     * @example
     * // Delete one EventLog
     * const EventLog = await prisma.eventLog.delete({
     *   where: {
     *     // ... filter to delete one EventLog
     *   }
     * })
     * 
     */
    delete<T extends EventLogDeleteArgs>(args: SelectSubset<T, EventLogDeleteArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EventLog.
     * @param {EventLogUpdateArgs} args - Arguments to update one EventLog.
     * @example
     * // Update one EventLog
     * const eventLog = await prisma.eventLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventLogUpdateArgs>(args: SelectSubset<T, EventLogUpdateArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EventLogs.
     * @param {EventLogDeleteManyArgs} args - Arguments to filter EventLogs to delete.
     * @example
     * // Delete a few EventLogs
     * const { count } = await prisma.eventLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventLogDeleteManyArgs>(args?: SelectSubset<T, EventLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventLogs
     * const eventLog = await prisma.eventLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventLogUpdateManyArgs>(args: SelectSubset<T, EventLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventLog.
     * @param {EventLogUpsertArgs} args - Arguments to update or create a EventLog.
     * @example
     * // Update or create a EventLog
     * const eventLog = await prisma.eventLog.upsert({
     *   create: {
     *     // ... data to create a EventLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventLog we want to update
     *   }
     * })
     */
    upsert<T extends EventLogUpsertArgs>(args: SelectSubset<T, EventLogUpsertArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EventLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogCountArgs} args - Arguments to filter EventLogs to count.
     * @example
     * // Count the number of EventLogs
     * const count = await prisma.eventLog.count({
     *   where: {
     *     // ... the filter for the EventLogs we want to count
     *   }
     * })
    **/
    count<T extends EventLogCountArgs>(
      args?: Subset<T, EventLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventLogAggregateArgs>(args: Subset<T, EventLogAggregateArgs>): Prisma.PrismaPromise<GetEventLogAggregateType<T>>

    /**
     * Group by EventLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventLogGroupByArgs['orderBy'] }
        : { orderBy?: EventLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventLog model
   */
  readonly fields: EventLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventLog model
   */ 
  interface EventLogFieldRefs {
    readonly id: FieldRef<"EventLog", 'String'>
    readonly ts: FieldRef<"EventLog", 'DateTime'>
    readonly actorType: FieldRef<"EventLog", 'String'>
    readonly actorId: FieldRef<"EventLog", 'String'>
    readonly eventType: FieldRef<"EventLog", 'String'>
    readonly entityType: FieldRef<"EventLog", 'String'>
    readonly entityId: FieldRef<"EventLog", 'String'>
    readonly payload: FieldRef<"EventLog", 'String'>
    readonly prevHash: FieldRef<"EventLog", 'String'>
    readonly hash: FieldRef<"EventLog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventLog findUnique
   */
  export type EventLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog findUniqueOrThrow
   */
  export type EventLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog findFirst
   */
  export type EventLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventLogs.
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventLogs.
     */
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }

  /**
   * EventLog findFirstOrThrow
   */
  export type EventLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventLogs.
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventLogs.
     */
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }

  /**
   * EventLog findMany
   */
  export type EventLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Filter, which EventLogs to fetch.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventLogs.
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }

  /**
   * EventLog create
   */
  export type EventLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * The data needed to create a EventLog.
     */
    data: XOR<EventLogCreateInput, EventLogUncheckedCreateInput>
  }

  /**
   * EventLog createMany
   */
  export type EventLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventLogs.
     */
    data: EventLogCreateManyInput | EventLogCreateManyInput[]
  }

  /**
   * EventLog createManyAndReturn
   */
  export type EventLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EventLogs.
     */
    data: EventLogCreateManyInput | EventLogCreateManyInput[]
  }

  /**
   * EventLog update
   */
  export type EventLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * The data needed to update a EventLog.
     */
    data: XOR<EventLogUpdateInput, EventLogUncheckedUpdateInput>
    /**
     * Choose, which EventLog to update.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog updateMany
   */
  export type EventLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventLogs.
     */
    data: XOR<EventLogUpdateManyMutationInput, EventLogUncheckedUpdateManyInput>
    /**
     * Filter which EventLogs to update
     */
    where?: EventLogWhereInput
  }

  /**
   * EventLog upsert
   */
  export type EventLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * The filter to search for the EventLog to update in case it exists.
     */
    where: EventLogWhereUniqueInput
    /**
     * In case the EventLog found by the `where` argument doesn't exist, create a new EventLog with this data.
     */
    create: XOR<EventLogCreateInput, EventLogUncheckedCreateInput>
    /**
     * In case the EventLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventLogUpdateInput, EventLogUncheckedUpdateInput>
  }

  /**
   * EventLog delete
   */
  export type EventLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Filter which EventLog to delete.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog deleteMany
   */
  export type EventLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventLogs to delete
     */
    where?: EventLogWhereInput
  }

  /**
   * EventLog without action
   */
  export type EventLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
  }


  /**
   * Model MerkleSnapshot
   */

  export type AggregateMerkleSnapshot = {
    _count: MerkleSnapshotCountAggregateOutputType | null
    _avg: MerkleSnapshotAvgAggregateOutputType | null
    _sum: MerkleSnapshotSumAggregateOutputType | null
    _min: MerkleSnapshotMinAggregateOutputType | null
    _max: MerkleSnapshotMaxAggregateOutputType | null
  }

  export type MerkleSnapshotAvgAggregateOutputType = {
    eventCount: number | null
  }

  export type MerkleSnapshotSumAggregateOutputType = {
    eventCount: number | null
  }

  export type MerkleSnapshotMinAggregateOutputType = {
    id: string | null
    date: string | null
    rootHash: string | null
    eventCount: number | null
    createdAt: Date | null
  }

  export type MerkleSnapshotMaxAggregateOutputType = {
    id: string | null
    date: string | null
    rootHash: string | null
    eventCount: number | null
    createdAt: Date | null
  }

  export type MerkleSnapshotCountAggregateOutputType = {
    id: number
    date: number
    rootHash: number
    eventCount: number
    createdAt: number
    _all: number
  }


  export type MerkleSnapshotAvgAggregateInputType = {
    eventCount?: true
  }

  export type MerkleSnapshotSumAggregateInputType = {
    eventCount?: true
  }

  export type MerkleSnapshotMinAggregateInputType = {
    id?: true
    date?: true
    rootHash?: true
    eventCount?: true
    createdAt?: true
  }

  export type MerkleSnapshotMaxAggregateInputType = {
    id?: true
    date?: true
    rootHash?: true
    eventCount?: true
    createdAt?: true
  }

  export type MerkleSnapshotCountAggregateInputType = {
    id?: true
    date?: true
    rootHash?: true
    eventCount?: true
    createdAt?: true
    _all?: true
  }

  export type MerkleSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MerkleSnapshot to aggregate.
     */
    where?: MerkleSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerkleSnapshots to fetch.
     */
    orderBy?: MerkleSnapshotOrderByWithRelationInput | MerkleSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MerkleSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerkleSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerkleSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MerkleSnapshots
    **/
    _count?: true | MerkleSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MerkleSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MerkleSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MerkleSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MerkleSnapshotMaxAggregateInputType
  }

  export type GetMerkleSnapshotAggregateType<T extends MerkleSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateMerkleSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMerkleSnapshot[P]>
      : GetScalarType<T[P], AggregateMerkleSnapshot[P]>
  }




  export type MerkleSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MerkleSnapshotWhereInput
    orderBy?: MerkleSnapshotOrderByWithAggregationInput | MerkleSnapshotOrderByWithAggregationInput[]
    by: MerkleSnapshotScalarFieldEnum[] | MerkleSnapshotScalarFieldEnum
    having?: MerkleSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MerkleSnapshotCountAggregateInputType | true
    _avg?: MerkleSnapshotAvgAggregateInputType
    _sum?: MerkleSnapshotSumAggregateInputType
    _min?: MerkleSnapshotMinAggregateInputType
    _max?: MerkleSnapshotMaxAggregateInputType
  }

  export type MerkleSnapshotGroupByOutputType = {
    id: string
    date: string
    rootHash: string
    eventCount: number
    createdAt: Date
    _count: MerkleSnapshotCountAggregateOutputType | null
    _avg: MerkleSnapshotAvgAggregateOutputType | null
    _sum: MerkleSnapshotSumAggregateOutputType | null
    _min: MerkleSnapshotMinAggregateOutputType | null
    _max: MerkleSnapshotMaxAggregateOutputType | null
  }

  type GetMerkleSnapshotGroupByPayload<T extends MerkleSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MerkleSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MerkleSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MerkleSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], MerkleSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type MerkleSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    rootHash?: boolean
    eventCount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["merkleSnapshot"]>

  export type MerkleSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    rootHash?: boolean
    eventCount?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["merkleSnapshot"]>

  export type MerkleSnapshotSelectScalar = {
    id?: boolean
    date?: boolean
    rootHash?: boolean
    eventCount?: boolean
    createdAt?: boolean
  }


  export type $MerkleSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MerkleSnapshot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: string
      rootHash: string
      eventCount: number
      createdAt: Date
    }, ExtArgs["result"]["merkleSnapshot"]>
    composites: {}
  }

  type MerkleSnapshotGetPayload<S extends boolean | null | undefined | MerkleSnapshotDefaultArgs> = $Result.GetResult<Prisma.$MerkleSnapshotPayload, S>

  type MerkleSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MerkleSnapshotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MerkleSnapshotCountAggregateInputType | true
    }

  export interface MerkleSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MerkleSnapshot'], meta: { name: 'MerkleSnapshot' } }
    /**
     * Find zero or one MerkleSnapshot that matches the filter.
     * @param {MerkleSnapshotFindUniqueArgs} args - Arguments to find a MerkleSnapshot
     * @example
     * // Get one MerkleSnapshot
     * const merkleSnapshot = await prisma.merkleSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MerkleSnapshotFindUniqueArgs>(args: SelectSubset<T, MerkleSnapshotFindUniqueArgs<ExtArgs>>): Prisma__MerkleSnapshotClient<$Result.GetResult<Prisma.$MerkleSnapshotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MerkleSnapshot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MerkleSnapshotFindUniqueOrThrowArgs} args - Arguments to find a MerkleSnapshot
     * @example
     * // Get one MerkleSnapshot
     * const merkleSnapshot = await prisma.merkleSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MerkleSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, MerkleSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MerkleSnapshotClient<$Result.GetResult<Prisma.$MerkleSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MerkleSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerkleSnapshotFindFirstArgs} args - Arguments to find a MerkleSnapshot
     * @example
     * // Get one MerkleSnapshot
     * const merkleSnapshot = await prisma.merkleSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MerkleSnapshotFindFirstArgs>(args?: SelectSubset<T, MerkleSnapshotFindFirstArgs<ExtArgs>>): Prisma__MerkleSnapshotClient<$Result.GetResult<Prisma.$MerkleSnapshotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MerkleSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerkleSnapshotFindFirstOrThrowArgs} args - Arguments to find a MerkleSnapshot
     * @example
     * // Get one MerkleSnapshot
     * const merkleSnapshot = await prisma.merkleSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MerkleSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, MerkleSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__MerkleSnapshotClient<$Result.GetResult<Prisma.$MerkleSnapshotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MerkleSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerkleSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MerkleSnapshots
     * const merkleSnapshots = await prisma.merkleSnapshot.findMany()
     * 
     * // Get first 10 MerkleSnapshots
     * const merkleSnapshots = await prisma.merkleSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const merkleSnapshotWithIdOnly = await prisma.merkleSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MerkleSnapshotFindManyArgs>(args?: SelectSubset<T, MerkleSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerkleSnapshotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MerkleSnapshot.
     * @param {MerkleSnapshotCreateArgs} args - Arguments to create a MerkleSnapshot.
     * @example
     * // Create one MerkleSnapshot
     * const MerkleSnapshot = await prisma.merkleSnapshot.create({
     *   data: {
     *     // ... data to create a MerkleSnapshot
     *   }
     * })
     * 
     */
    create<T extends MerkleSnapshotCreateArgs>(args: SelectSubset<T, MerkleSnapshotCreateArgs<ExtArgs>>): Prisma__MerkleSnapshotClient<$Result.GetResult<Prisma.$MerkleSnapshotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MerkleSnapshots.
     * @param {MerkleSnapshotCreateManyArgs} args - Arguments to create many MerkleSnapshots.
     * @example
     * // Create many MerkleSnapshots
     * const merkleSnapshot = await prisma.merkleSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MerkleSnapshotCreateManyArgs>(args?: SelectSubset<T, MerkleSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MerkleSnapshots and returns the data saved in the database.
     * @param {MerkleSnapshotCreateManyAndReturnArgs} args - Arguments to create many MerkleSnapshots.
     * @example
     * // Create many MerkleSnapshots
     * const merkleSnapshot = await prisma.merkleSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MerkleSnapshots and only return the `id`
     * const merkleSnapshotWithIdOnly = await prisma.merkleSnapshot.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MerkleSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, MerkleSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MerkleSnapshotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MerkleSnapshot.
     * @param {MerkleSnapshotDeleteArgs} args - Arguments to delete one MerkleSnapshot.
     * @example
     * // Delete one MerkleSnapshot
     * const MerkleSnapshot = await prisma.merkleSnapshot.delete({
     *   where: {
     *     // ... filter to delete one MerkleSnapshot
     *   }
     * })
     * 
     */
    delete<T extends MerkleSnapshotDeleteArgs>(args: SelectSubset<T, MerkleSnapshotDeleteArgs<ExtArgs>>): Prisma__MerkleSnapshotClient<$Result.GetResult<Prisma.$MerkleSnapshotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MerkleSnapshot.
     * @param {MerkleSnapshotUpdateArgs} args - Arguments to update one MerkleSnapshot.
     * @example
     * // Update one MerkleSnapshot
     * const merkleSnapshot = await prisma.merkleSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MerkleSnapshotUpdateArgs>(args: SelectSubset<T, MerkleSnapshotUpdateArgs<ExtArgs>>): Prisma__MerkleSnapshotClient<$Result.GetResult<Prisma.$MerkleSnapshotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MerkleSnapshots.
     * @param {MerkleSnapshotDeleteManyArgs} args - Arguments to filter MerkleSnapshots to delete.
     * @example
     * // Delete a few MerkleSnapshots
     * const { count } = await prisma.merkleSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MerkleSnapshotDeleteManyArgs>(args?: SelectSubset<T, MerkleSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MerkleSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerkleSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MerkleSnapshots
     * const merkleSnapshot = await prisma.merkleSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MerkleSnapshotUpdateManyArgs>(args: SelectSubset<T, MerkleSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MerkleSnapshot.
     * @param {MerkleSnapshotUpsertArgs} args - Arguments to update or create a MerkleSnapshot.
     * @example
     * // Update or create a MerkleSnapshot
     * const merkleSnapshot = await prisma.merkleSnapshot.upsert({
     *   create: {
     *     // ... data to create a MerkleSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MerkleSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends MerkleSnapshotUpsertArgs>(args: SelectSubset<T, MerkleSnapshotUpsertArgs<ExtArgs>>): Prisma__MerkleSnapshotClient<$Result.GetResult<Prisma.$MerkleSnapshotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MerkleSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerkleSnapshotCountArgs} args - Arguments to filter MerkleSnapshots to count.
     * @example
     * // Count the number of MerkleSnapshots
     * const count = await prisma.merkleSnapshot.count({
     *   where: {
     *     // ... the filter for the MerkleSnapshots we want to count
     *   }
     * })
    **/
    count<T extends MerkleSnapshotCountArgs>(
      args?: Subset<T, MerkleSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MerkleSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MerkleSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerkleSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MerkleSnapshotAggregateArgs>(args: Subset<T, MerkleSnapshotAggregateArgs>): Prisma.PrismaPromise<GetMerkleSnapshotAggregateType<T>>

    /**
     * Group by MerkleSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MerkleSnapshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MerkleSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MerkleSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: MerkleSnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MerkleSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMerkleSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MerkleSnapshot model
   */
  readonly fields: MerkleSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MerkleSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MerkleSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MerkleSnapshot model
   */ 
  interface MerkleSnapshotFieldRefs {
    readonly id: FieldRef<"MerkleSnapshot", 'String'>
    readonly date: FieldRef<"MerkleSnapshot", 'String'>
    readonly rootHash: FieldRef<"MerkleSnapshot", 'String'>
    readonly eventCount: FieldRef<"MerkleSnapshot", 'Int'>
    readonly createdAt: FieldRef<"MerkleSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MerkleSnapshot findUnique
   */
  export type MerkleSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerkleSnapshot
     */
    select?: MerkleSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which MerkleSnapshot to fetch.
     */
    where: MerkleSnapshotWhereUniqueInput
  }

  /**
   * MerkleSnapshot findUniqueOrThrow
   */
  export type MerkleSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerkleSnapshot
     */
    select?: MerkleSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which MerkleSnapshot to fetch.
     */
    where: MerkleSnapshotWhereUniqueInput
  }

  /**
   * MerkleSnapshot findFirst
   */
  export type MerkleSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerkleSnapshot
     */
    select?: MerkleSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which MerkleSnapshot to fetch.
     */
    where?: MerkleSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerkleSnapshots to fetch.
     */
    orderBy?: MerkleSnapshotOrderByWithRelationInput | MerkleSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MerkleSnapshots.
     */
    cursor?: MerkleSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerkleSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerkleSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MerkleSnapshots.
     */
    distinct?: MerkleSnapshotScalarFieldEnum | MerkleSnapshotScalarFieldEnum[]
  }

  /**
   * MerkleSnapshot findFirstOrThrow
   */
  export type MerkleSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerkleSnapshot
     */
    select?: MerkleSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which MerkleSnapshot to fetch.
     */
    where?: MerkleSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerkleSnapshots to fetch.
     */
    orderBy?: MerkleSnapshotOrderByWithRelationInput | MerkleSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MerkleSnapshots.
     */
    cursor?: MerkleSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerkleSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerkleSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MerkleSnapshots.
     */
    distinct?: MerkleSnapshotScalarFieldEnum | MerkleSnapshotScalarFieldEnum[]
  }

  /**
   * MerkleSnapshot findMany
   */
  export type MerkleSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerkleSnapshot
     */
    select?: MerkleSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which MerkleSnapshots to fetch.
     */
    where?: MerkleSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MerkleSnapshots to fetch.
     */
    orderBy?: MerkleSnapshotOrderByWithRelationInput | MerkleSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MerkleSnapshots.
     */
    cursor?: MerkleSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MerkleSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MerkleSnapshots.
     */
    skip?: number
    distinct?: MerkleSnapshotScalarFieldEnum | MerkleSnapshotScalarFieldEnum[]
  }

  /**
   * MerkleSnapshot create
   */
  export type MerkleSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerkleSnapshot
     */
    select?: MerkleSnapshotSelect<ExtArgs> | null
    /**
     * The data needed to create a MerkleSnapshot.
     */
    data: XOR<MerkleSnapshotCreateInput, MerkleSnapshotUncheckedCreateInput>
  }

  /**
   * MerkleSnapshot createMany
   */
  export type MerkleSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MerkleSnapshots.
     */
    data: MerkleSnapshotCreateManyInput | MerkleSnapshotCreateManyInput[]
  }

  /**
   * MerkleSnapshot createManyAndReturn
   */
  export type MerkleSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerkleSnapshot
     */
    select?: MerkleSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MerkleSnapshots.
     */
    data: MerkleSnapshotCreateManyInput | MerkleSnapshotCreateManyInput[]
  }

  /**
   * MerkleSnapshot update
   */
  export type MerkleSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerkleSnapshot
     */
    select?: MerkleSnapshotSelect<ExtArgs> | null
    /**
     * The data needed to update a MerkleSnapshot.
     */
    data: XOR<MerkleSnapshotUpdateInput, MerkleSnapshotUncheckedUpdateInput>
    /**
     * Choose, which MerkleSnapshot to update.
     */
    where: MerkleSnapshotWhereUniqueInput
  }

  /**
   * MerkleSnapshot updateMany
   */
  export type MerkleSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MerkleSnapshots.
     */
    data: XOR<MerkleSnapshotUpdateManyMutationInput, MerkleSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which MerkleSnapshots to update
     */
    where?: MerkleSnapshotWhereInput
  }

  /**
   * MerkleSnapshot upsert
   */
  export type MerkleSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerkleSnapshot
     */
    select?: MerkleSnapshotSelect<ExtArgs> | null
    /**
     * The filter to search for the MerkleSnapshot to update in case it exists.
     */
    where: MerkleSnapshotWhereUniqueInput
    /**
     * In case the MerkleSnapshot found by the `where` argument doesn't exist, create a new MerkleSnapshot with this data.
     */
    create: XOR<MerkleSnapshotCreateInput, MerkleSnapshotUncheckedCreateInput>
    /**
     * In case the MerkleSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MerkleSnapshotUpdateInput, MerkleSnapshotUncheckedUpdateInput>
  }

  /**
   * MerkleSnapshot delete
   */
  export type MerkleSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerkleSnapshot
     */
    select?: MerkleSnapshotSelect<ExtArgs> | null
    /**
     * Filter which MerkleSnapshot to delete.
     */
    where: MerkleSnapshotWhereUniqueInput
  }

  /**
   * MerkleSnapshot deleteMany
   */
  export type MerkleSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MerkleSnapshots to delete
     */
    where?: MerkleSnapshotWhereInput
  }

  /**
   * MerkleSnapshot without action
   */
  export type MerkleSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MerkleSnapshot
     */
    select?: MerkleSnapshotSelect<ExtArgs> | null
  }


  /**
   * Model SystemState
   */

  export type AggregateSystemState = {
    _count: SystemStateCountAggregateOutputType | null
    _min: SystemStateMinAggregateOutputType | null
    _max: SystemStateMaxAggregateOutputType | null
  }

  export type SystemStateMinAggregateOutputType = {
    id: string | null
    halted: boolean | null
    updatedAt: Date | null
  }

  export type SystemStateMaxAggregateOutputType = {
    id: string | null
    halted: boolean | null
    updatedAt: Date | null
  }

  export type SystemStateCountAggregateOutputType = {
    id: number
    halted: number
    updatedAt: number
    _all: number
  }


  export type SystemStateMinAggregateInputType = {
    id?: true
    halted?: true
    updatedAt?: true
  }

  export type SystemStateMaxAggregateInputType = {
    id?: true
    halted?: true
    updatedAt?: true
  }

  export type SystemStateCountAggregateInputType = {
    id?: true
    halted?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemState to aggregate.
     */
    where?: SystemStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemStates to fetch.
     */
    orderBy?: SystemStateOrderByWithRelationInput | SystemStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemStates
    **/
    _count?: true | SystemStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemStateMaxAggregateInputType
  }

  export type GetSystemStateAggregateType<T extends SystemStateAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemState[P]>
      : GetScalarType<T[P], AggregateSystemState[P]>
  }




  export type SystemStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemStateWhereInput
    orderBy?: SystemStateOrderByWithAggregationInput | SystemStateOrderByWithAggregationInput[]
    by: SystemStateScalarFieldEnum[] | SystemStateScalarFieldEnum
    having?: SystemStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemStateCountAggregateInputType | true
    _min?: SystemStateMinAggregateInputType
    _max?: SystemStateMaxAggregateInputType
  }

  export type SystemStateGroupByOutputType = {
    id: string
    halted: boolean
    updatedAt: Date
    _count: SystemStateCountAggregateOutputType | null
    _min: SystemStateMinAggregateOutputType | null
    _max: SystemStateMaxAggregateOutputType | null
  }

  type GetSystemStateGroupByPayload<T extends SystemStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemStateGroupByOutputType[P]>
            : GetScalarType<T[P], SystemStateGroupByOutputType[P]>
        }
      >
    >


  export type SystemStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    halted?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemState"]>

  export type SystemStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    halted?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemState"]>

  export type SystemStateSelectScalar = {
    id?: boolean
    halted?: boolean
    updatedAt?: boolean
  }


  export type $SystemStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      halted: boolean
      updatedAt: Date
    }, ExtArgs["result"]["systemState"]>
    composites: {}
  }

  type SystemStateGetPayload<S extends boolean | null | undefined | SystemStateDefaultArgs> = $Result.GetResult<Prisma.$SystemStatePayload, S>

  type SystemStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemStateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemStateCountAggregateInputType | true
    }

  export interface SystemStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemState'], meta: { name: 'SystemState' } }
    /**
     * Find zero or one SystemState that matches the filter.
     * @param {SystemStateFindUniqueArgs} args - Arguments to find a SystemState
     * @example
     * // Get one SystemState
     * const systemState = await prisma.systemState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemStateFindUniqueArgs>(args: SelectSubset<T, SystemStateFindUniqueArgs<ExtArgs>>): Prisma__SystemStateClient<$Result.GetResult<Prisma.$SystemStatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SystemState that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SystemStateFindUniqueOrThrowArgs} args - Arguments to find a SystemState
     * @example
     * // Get one SystemState
     * const systemState = await prisma.systemState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemStateFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemStateClient<$Result.GetResult<Prisma.$SystemStatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SystemState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemStateFindFirstArgs} args - Arguments to find a SystemState
     * @example
     * // Get one SystemState
     * const systemState = await prisma.systemState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemStateFindFirstArgs>(args?: SelectSubset<T, SystemStateFindFirstArgs<ExtArgs>>): Prisma__SystemStateClient<$Result.GetResult<Prisma.$SystemStatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SystemState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemStateFindFirstOrThrowArgs} args - Arguments to find a SystemState
     * @example
     * // Get one SystemState
     * const systemState = await prisma.systemState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemStateFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemStateClient<$Result.GetResult<Prisma.$SystemStatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SystemStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemStates
     * const systemStates = await prisma.systemState.findMany()
     * 
     * // Get first 10 SystemStates
     * const systemStates = await prisma.systemState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemStateWithIdOnly = await prisma.systemState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemStateFindManyArgs>(args?: SelectSubset<T, SystemStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemStatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SystemState.
     * @param {SystemStateCreateArgs} args - Arguments to create a SystemState.
     * @example
     * // Create one SystemState
     * const SystemState = await prisma.systemState.create({
     *   data: {
     *     // ... data to create a SystemState
     *   }
     * })
     * 
     */
    create<T extends SystemStateCreateArgs>(args: SelectSubset<T, SystemStateCreateArgs<ExtArgs>>): Prisma__SystemStateClient<$Result.GetResult<Prisma.$SystemStatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SystemStates.
     * @param {SystemStateCreateManyArgs} args - Arguments to create many SystemStates.
     * @example
     * // Create many SystemStates
     * const systemState = await prisma.systemState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemStateCreateManyArgs>(args?: SelectSubset<T, SystemStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemStates and returns the data saved in the database.
     * @param {SystemStateCreateManyAndReturnArgs} args - Arguments to create many SystemStates.
     * @example
     * // Create many SystemStates
     * const systemState = await prisma.systemState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemStates and only return the `id`
     * const systemStateWithIdOnly = await prisma.systemState.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemStateCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemStatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SystemState.
     * @param {SystemStateDeleteArgs} args - Arguments to delete one SystemState.
     * @example
     * // Delete one SystemState
     * const SystemState = await prisma.systemState.delete({
     *   where: {
     *     // ... filter to delete one SystemState
     *   }
     * })
     * 
     */
    delete<T extends SystemStateDeleteArgs>(args: SelectSubset<T, SystemStateDeleteArgs<ExtArgs>>): Prisma__SystemStateClient<$Result.GetResult<Prisma.$SystemStatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SystemState.
     * @param {SystemStateUpdateArgs} args - Arguments to update one SystemState.
     * @example
     * // Update one SystemState
     * const systemState = await prisma.systemState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemStateUpdateArgs>(args: SelectSubset<T, SystemStateUpdateArgs<ExtArgs>>): Prisma__SystemStateClient<$Result.GetResult<Prisma.$SystemStatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SystemStates.
     * @param {SystemStateDeleteManyArgs} args - Arguments to filter SystemStates to delete.
     * @example
     * // Delete a few SystemStates
     * const { count } = await prisma.systemState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemStateDeleteManyArgs>(args?: SelectSubset<T, SystemStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemStates
     * const systemState = await prisma.systemState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemStateUpdateManyArgs>(args: SelectSubset<T, SystemStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemState.
     * @param {SystemStateUpsertArgs} args - Arguments to update or create a SystemState.
     * @example
     * // Update or create a SystemState
     * const systemState = await prisma.systemState.upsert({
     *   create: {
     *     // ... data to create a SystemState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemState we want to update
     *   }
     * })
     */
    upsert<T extends SystemStateUpsertArgs>(args: SelectSubset<T, SystemStateUpsertArgs<ExtArgs>>): Prisma__SystemStateClient<$Result.GetResult<Prisma.$SystemStatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SystemStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemStateCountArgs} args - Arguments to filter SystemStates to count.
     * @example
     * // Count the number of SystemStates
     * const count = await prisma.systemState.count({
     *   where: {
     *     // ... the filter for the SystemStates we want to count
     *   }
     * })
    **/
    count<T extends SystemStateCountArgs>(
      args?: Subset<T, SystemStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemStateAggregateArgs>(args: Subset<T, SystemStateAggregateArgs>): Prisma.PrismaPromise<GetSystemStateAggregateType<T>>

    /**
     * Group by SystemState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemStateGroupByArgs['orderBy'] }
        : { orderBy?: SystemStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemState model
   */
  readonly fields: SystemStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemState model
   */ 
  interface SystemStateFieldRefs {
    readonly id: FieldRef<"SystemState", 'String'>
    readonly halted: FieldRef<"SystemState", 'Boolean'>
    readonly updatedAt: FieldRef<"SystemState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemState findUnique
   */
  export type SystemStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemState
     */
    select?: SystemStateSelect<ExtArgs> | null
    /**
     * Filter, which SystemState to fetch.
     */
    where: SystemStateWhereUniqueInput
  }

  /**
   * SystemState findUniqueOrThrow
   */
  export type SystemStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemState
     */
    select?: SystemStateSelect<ExtArgs> | null
    /**
     * Filter, which SystemState to fetch.
     */
    where: SystemStateWhereUniqueInput
  }

  /**
   * SystemState findFirst
   */
  export type SystemStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemState
     */
    select?: SystemStateSelect<ExtArgs> | null
    /**
     * Filter, which SystemState to fetch.
     */
    where?: SystemStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemStates to fetch.
     */
    orderBy?: SystemStateOrderByWithRelationInput | SystemStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemStates.
     */
    cursor?: SystemStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemStates.
     */
    distinct?: SystemStateScalarFieldEnum | SystemStateScalarFieldEnum[]
  }

  /**
   * SystemState findFirstOrThrow
   */
  export type SystemStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemState
     */
    select?: SystemStateSelect<ExtArgs> | null
    /**
     * Filter, which SystemState to fetch.
     */
    where?: SystemStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemStates to fetch.
     */
    orderBy?: SystemStateOrderByWithRelationInput | SystemStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemStates.
     */
    cursor?: SystemStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemStates.
     */
    distinct?: SystemStateScalarFieldEnum | SystemStateScalarFieldEnum[]
  }

  /**
   * SystemState findMany
   */
  export type SystemStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemState
     */
    select?: SystemStateSelect<ExtArgs> | null
    /**
     * Filter, which SystemStates to fetch.
     */
    where?: SystemStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemStates to fetch.
     */
    orderBy?: SystemStateOrderByWithRelationInput | SystemStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemStates.
     */
    cursor?: SystemStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemStates.
     */
    skip?: number
    distinct?: SystemStateScalarFieldEnum | SystemStateScalarFieldEnum[]
  }

  /**
   * SystemState create
   */
  export type SystemStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemState
     */
    select?: SystemStateSelect<ExtArgs> | null
    /**
     * The data needed to create a SystemState.
     */
    data?: XOR<SystemStateCreateInput, SystemStateUncheckedCreateInput>
  }

  /**
   * SystemState createMany
   */
  export type SystemStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemStates.
     */
    data: SystemStateCreateManyInput | SystemStateCreateManyInput[]
  }

  /**
   * SystemState createManyAndReturn
   */
  export type SystemStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemState
     */
    select?: SystemStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SystemStates.
     */
    data: SystemStateCreateManyInput | SystemStateCreateManyInput[]
  }

  /**
   * SystemState update
   */
  export type SystemStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemState
     */
    select?: SystemStateSelect<ExtArgs> | null
    /**
     * The data needed to update a SystemState.
     */
    data: XOR<SystemStateUpdateInput, SystemStateUncheckedUpdateInput>
    /**
     * Choose, which SystemState to update.
     */
    where: SystemStateWhereUniqueInput
  }

  /**
   * SystemState updateMany
   */
  export type SystemStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemStates.
     */
    data: XOR<SystemStateUpdateManyMutationInput, SystemStateUncheckedUpdateManyInput>
    /**
     * Filter which SystemStates to update
     */
    where?: SystemStateWhereInput
  }

  /**
   * SystemState upsert
   */
  export type SystemStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemState
     */
    select?: SystemStateSelect<ExtArgs> | null
    /**
     * The filter to search for the SystemState to update in case it exists.
     */
    where: SystemStateWhereUniqueInput
    /**
     * In case the SystemState found by the `where` argument doesn't exist, create a new SystemState with this data.
     */
    create: XOR<SystemStateCreateInput, SystemStateUncheckedCreateInput>
    /**
     * In case the SystemState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemStateUpdateInput, SystemStateUncheckedUpdateInput>
  }

  /**
   * SystemState delete
   */
  export type SystemStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemState
     */
    select?: SystemStateSelect<ExtArgs> | null
    /**
     * Filter which SystemState to delete.
     */
    where: SystemStateWhereUniqueInput
  }

  /**
   * SystemState deleteMany
   */
  export type SystemStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemStates to delete
     */
    where?: SystemStateWhereInput
  }

  /**
   * SystemState without action
   */
  export type SystemStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemState
     */
    select?: SystemStateSelect<ExtArgs> | null
  }


  /**
   * Model EmergencyRequest
   */

  export type AggregateEmergencyRequest = {
    _count: EmergencyRequestCountAggregateOutputType | null
    _min: EmergencyRequestMinAggregateOutputType | null
    _max: EmergencyRequestMaxAggregateOutputType | null
  }

  export type EmergencyRequestMinAggregateOutputType = {
    id: string | null
    status: string | null
    createdAt: Date | null
    approvedBy: string | null
  }

  export type EmergencyRequestMaxAggregateOutputType = {
    id: string | null
    status: string | null
    createdAt: Date | null
    approvedBy: string | null
  }

  export type EmergencyRequestCountAggregateOutputType = {
    id: number
    status: number
    createdAt: number
    approvedBy: number
    _all: number
  }


  export type EmergencyRequestMinAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    approvedBy?: true
  }

  export type EmergencyRequestMaxAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    approvedBy?: true
  }

  export type EmergencyRequestCountAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    approvedBy?: true
    _all?: true
  }

  export type EmergencyRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyRequest to aggregate.
     */
    where?: EmergencyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyRequests to fetch.
     */
    orderBy?: EmergencyRequestOrderByWithRelationInput | EmergencyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmergencyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmergencyRequests
    **/
    _count?: true | EmergencyRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmergencyRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmergencyRequestMaxAggregateInputType
  }

  export type GetEmergencyRequestAggregateType<T extends EmergencyRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateEmergencyRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmergencyRequest[P]>
      : GetScalarType<T[P], AggregateEmergencyRequest[P]>
  }




  export type EmergencyRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmergencyRequestWhereInput
    orderBy?: EmergencyRequestOrderByWithAggregationInput | EmergencyRequestOrderByWithAggregationInput[]
    by: EmergencyRequestScalarFieldEnum[] | EmergencyRequestScalarFieldEnum
    having?: EmergencyRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmergencyRequestCountAggregateInputType | true
    _min?: EmergencyRequestMinAggregateInputType
    _max?: EmergencyRequestMaxAggregateInputType
  }

  export type EmergencyRequestGroupByOutputType = {
    id: string
    status: string
    createdAt: Date
    approvedBy: string
    _count: EmergencyRequestCountAggregateOutputType | null
    _min: EmergencyRequestMinAggregateOutputType | null
    _max: EmergencyRequestMaxAggregateOutputType | null
  }

  type GetEmergencyRequestGroupByPayload<T extends EmergencyRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmergencyRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmergencyRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmergencyRequestGroupByOutputType[P]>
            : GetScalarType<T[P], EmergencyRequestGroupByOutputType[P]>
        }
      >
    >


  export type EmergencyRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    approvedBy?: boolean
  }, ExtArgs["result"]["emergencyRequest"]>

  export type EmergencyRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
    approvedBy?: boolean
  }, ExtArgs["result"]["emergencyRequest"]>

  export type EmergencyRequestSelectScalar = {
    id?: boolean
    status?: boolean
    createdAt?: boolean
    approvedBy?: boolean
  }


  export type $EmergencyRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmergencyRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: string
      createdAt: Date
      approvedBy: string
    }, ExtArgs["result"]["emergencyRequest"]>
    composites: {}
  }

  type EmergencyRequestGetPayload<S extends boolean | null | undefined | EmergencyRequestDefaultArgs> = $Result.GetResult<Prisma.$EmergencyRequestPayload, S>

  type EmergencyRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmergencyRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmergencyRequestCountAggregateInputType | true
    }

  export interface EmergencyRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmergencyRequest'], meta: { name: 'EmergencyRequest' } }
    /**
     * Find zero or one EmergencyRequest that matches the filter.
     * @param {EmergencyRequestFindUniqueArgs} args - Arguments to find a EmergencyRequest
     * @example
     * // Get one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmergencyRequestFindUniqueArgs>(args: SelectSubset<T, EmergencyRequestFindUniqueArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EmergencyRequest that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EmergencyRequestFindUniqueOrThrowArgs} args - Arguments to find a EmergencyRequest
     * @example
     * // Get one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmergencyRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, EmergencyRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EmergencyRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestFindFirstArgs} args - Arguments to find a EmergencyRequest
     * @example
     * // Get one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmergencyRequestFindFirstArgs>(args?: SelectSubset<T, EmergencyRequestFindFirstArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EmergencyRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestFindFirstOrThrowArgs} args - Arguments to find a EmergencyRequest
     * @example
     * // Get one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmergencyRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, EmergencyRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EmergencyRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmergencyRequests
     * const emergencyRequests = await prisma.emergencyRequest.findMany()
     * 
     * // Get first 10 EmergencyRequests
     * const emergencyRequests = await prisma.emergencyRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emergencyRequestWithIdOnly = await prisma.emergencyRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmergencyRequestFindManyArgs>(args?: SelectSubset<T, EmergencyRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EmergencyRequest.
     * @param {EmergencyRequestCreateArgs} args - Arguments to create a EmergencyRequest.
     * @example
     * // Create one EmergencyRequest
     * const EmergencyRequest = await prisma.emergencyRequest.create({
     *   data: {
     *     // ... data to create a EmergencyRequest
     *   }
     * })
     * 
     */
    create<T extends EmergencyRequestCreateArgs>(args: SelectSubset<T, EmergencyRequestCreateArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EmergencyRequests.
     * @param {EmergencyRequestCreateManyArgs} args - Arguments to create many EmergencyRequests.
     * @example
     * // Create many EmergencyRequests
     * const emergencyRequest = await prisma.emergencyRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmergencyRequestCreateManyArgs>(args?: SelectSubset<T, EmergencyRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmergencyRequests and returns the data saved in the database.
     * @param {EmergencyRequestCreateManyAndReturnArgs} args - Arguments to create many EmergencyRequests.
     * @example
     * // Create many EmergencyRequests
     * const emergencyRequest = await prisma.emergencyRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmergencyRequests and only return the `id`
     * const emergencyRequestWithIdOnly = await prisma.emergencyRequest.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmergencyRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, EmergencyRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EmergencyRequest.
     * @param {EmergencyRequestDeleteArgs} args - Arguments to delete one EmergencyRequest.
     * @example
     * // Delete one EmergencyRequest
     * const EmergencyRequest = await prisma.emergencyRequest.delete({
     *   where: {
     *     // ... filter to delete one EmergencyRequest
     *   }
     * })
     * 
     */
    delete<T extends EmergencyRequestDeleteArgs>(args: SelectSubset<T, EmergencyRequestDeleteArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EmergencyRequest.
     * @param {EmergencyRequestUpdateArgs} args - Arguments to update one EmergencyRequest.
     * @example
     * // Update one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmergencyRequestUpdateArgs>(args: SelectSubset<T, EmergencyRequestUpdateArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EmergencyRequests.
     * @param {EmergencyRequestDeleteManyArgs} args - Arguments to filter EmergencyRequests to delete.
     * @example
     * // Delete a few EmergencyRequests
     * const { count } = await prisma.emergencyRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmergencyRequestDeleteManyArgs>(args?: SelectSubset<T, EmergencyRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmergencyRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmergencyRequests
     * const emergencyRequest = await prisma.emergencyRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmergencyRequestUpdateManyArgs>(args: SelectSubset<T, EmergencyRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmergencyRequest.
     * @param {EmergencyRequestUpsertArgs} args - Arguments to update or create a EmergencyRequest.
     * @example
     * // Update or create a EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.upsert({
     *   create: {
     *     // ... data to create a EmergencyRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmergencyRequest we want to update
     *   }
     * })
     */
    upsert<T extends EmergencyRequestUpsertArgs>(args: SelectSubset<T, EmergencyRequestUpsertArgs<ExtArgs>>): Prisma__EmergencyRequestClient<$Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EmergencyRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestCountArgs} args - Arguments to filter EmergencyRequests to count.
     * @example
     * // Count the number of EmergencyRequests
     * const count = await prisma.emergencyRequest.count({
     *   where: {
     *     // ... the filter for the EmergencyRequests we want to count
     *   }
     * })
    **/
    count<T extends EmergencyRequestCountArgs>(
      args?: Subset<T, EmergencyRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmergencyRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmergencyRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmergencyRequestAggregateArgs>(args: Subset<T, EmergencyRequestAggregateArgs>): Prisma.PrismaPromise<GetEmergencyRequestAggregateType<T>>

    /**
     * Group by EmergencyRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmergencyRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmergencyRequestGroupByArgs['orderBy'] }
        : { orderBy?: EmergencyRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmergencyRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmergencyRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmergencyRequest model
   */
  readonly fields: EmergencyRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmergencyRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmergencyRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmergencyRequest model
   */ 
  interface EmergencyRequestFieldRefs {
    readonly id: FieldRef<"EmergencyRequest", 'String'>
    readonly status: FieldRef<"EmergencyRequest", 'String'>
    readonly createdAt: FieldRef<"EmergencyRequest", 'DateTime'>
    readonly approvedBy: FieldRef<"EmergencyRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EmergencyRequest findUnique
   */
  export type EmergencyRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Filter, which EmergencyRequest to fetch.
     */
    where: EmergencyRequestWhereUniqueInput
  }

  /**
   * EmergencyRequest findUniqueOrThrow
   */
  export type EmergencyRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Filter, which EmergencyRequest to fetch.
     */
    where: EmergencyRequestWhereUniqueInput
  }

  /**
   * EmergencyRequest findFirst
   */
  export type EmergencyRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Filter, which EmergencyRequest to fetch.
     */
    where?: EmergencyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyRequests to fetch.
     */
    orderBy?: EmergencyRequestOrderByWithRelationInput | EmergencyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyRequests.
     */
    cursor?: EmergencyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyRequests.
     */
    distinct?: EmergencyRequestScalarFieldEnum | EmergencyRequestScalarFieldEnum[]
  }

  /**
   * EmergencyRequest findFirstOrThrow
   */
  export type EmergencyRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Filter, which EmergencyRequest to fetch.
     */
    where?: EmergencyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyRequests to fetch.
     */
    orderBy?: EmergencyRequestOrderByWithRelationInput | EmergencyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmergencyRequests.
     */
    cursor?: EmergencyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmergencyRequests.
     */
    distinct?: EmergencyRequestScalarFieldEnum | EmergencyRequestScalarFieldEnum[]
  }

  /**
   * EmergencyRequest findMany
   */
  export type EmergencyRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Filter, which EmergencyRequests to fetch.
     */
    where?: EmergencyRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmergencyRequests to fetch.
     */
    orderBy?: EmergencyRequestOrderByWithRelationInput | EmergencyRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmergencyRequests.
     */
    cursor?: EmergencyRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmergencyRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmergencyRequests.
     */
    skip?: number
    distinct?: EmergencyRequestScalarFieldEnum | EmergencyRequestScalarFieldEnum[]
  }

  /**
   * EmergencyRequest create
   */
  export type EmergencyRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * The data needed to create a EmergencyRequest.
     */
    data: XOR<EmergencyRequestCreateInput, EmergencyRequestUncheckedCreateInput>
  }

  /**
   * EmergencyRequest createMany
   */
  export type EmergencyRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmergencyRequests.
     */
    data: EmergencyRequestCreateManyInput | EmergencyRequestCreateManyInput[]
  }

  /**
   * EmergencyRequest createManyAndReturn
   */
  export type EmergencyRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EmergencyRequests.
     */
    data: EmergencyRequestCreateManyInput | EmergencyRequestCreateManyInput[]
  }

  /**
   * EmergencyRequest update
   */
  export type EmergencyRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * The data needed to update a EmergencyRequest.
     */
    data: XOR<EmergencyRequestUpdateInput, EmergencyRequestUncheckedUpdateInput>
    /**
     * Choose, which EmergencyRequest to update.
     */
    where: EmergencyRequestWhereUniqueInput
  }

  /**
   * EmergencyRequest updateMany
   */
  export type EmergencyRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmergencyRequests.
     */
    data: XOR<EmergencyRequestUpdateManyMutationInput, EmergencyRequestUncheckedUpdateManyInput>
    /**
     * Filter which EmergencyRequests to update
     */
    where?: EmergencyRequestWhereInput
  }

  /**
   * EmergencyRequest upsert
   */
  export type EmergencyRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * The filter to search for the EmergencyRequest to update in case it exists.
     */
    where: EmergencyRequestWhereUniqueInput
    /**
     * In case the EmergencyRequest found by the `where` argument doesn't exist, create a new EmergencyRequest with this data.
     */
    create: XOR<EmergencyRequestCreateInput, EmergencyRequestUncheckedCreateInput>
    /**
     * In case the EmergencyRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmergencyRequestUpdateInput, EmergencyRequestUncheckedUpdateInput>
  }

  /**
   * EmergencyRequest delete
   */
  export type EmergencyRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
    /**
     * Filter which EmergencyRequest to delete.
     */
    where: EmergencyRequestWhereUniqueInput
  }

  /**
   * EmergencyRequest deleteMany
   */
  export type EmergencyRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyRequests to delete
     */
    where?: EmergencyRequestWhereInput
  }

  /**
   * EmergencyRequest without action
   */
  export type EmergencyRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: EmergencyRequestSelect<ExtArgs> | null
  }


  /**
   * Model Agent
   */

  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentMinAggregateOutputType = {
    id: string | null
    handle: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastEpochKey: string | null
  }

  export type AgentMaxAggregateOutputType = {
    id: string | null
    handle: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastEpochKey: string | null
  }

  export type AgentCountAggregateOutputType = {
    id: number
    handle: number
    status: number
    createdAt: number
    updatedAt: number
    lastEpochKey: number
    _all: number
  }


  export type AgentMinAggregateInputType = {
    id?: true
    handle?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    lastEpochKey?: true
  }

  export type AgentMaxAggregateInputType = {
    id?: true
    handle?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    lastEpochKey?: true
  }

  export type AgentCountAggregateInputType = {
    id?: true
    handle?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    lastEpochKey?: true
    _all?: true
  }

  export type AgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent to aggregate.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMaxAggregateInputType
  }

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>
  }




  export type AgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithAggregationInput | AgentOrderByWithAggregationInput[]
    by: AgentScalarFieldEnum[] | AgentScalarFieldEnum
    having?: AgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentCountAggregateInputType | true
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }

  export type AgentGroupByOutputType = {
    id: string
    handle: string
    status: string
    createdAt: Date
    updatedAt: Date
    lastEpochKey: string | null
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>
        }
      >
    >


  export type AgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    handle?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastEpochKey?: boolean
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    handle?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastEpochKey?: boolean
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectScalar = {
    id?: boolean
    handle?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastEpochKey?: boolean
  }


  export type $AgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      handle: string
      status: string
      createdAt: Date
      updatedAt: Date
      lastEpochKey: string | null
    }, ExtArgs["result"]["agent"]>
    composites: {}
  }

  type AgentGetPayload<S extends boolean | null | undefined | AgentDefaultArgs> = $Result.GetResult<Prisma.$AgentPayload, S>

  type AgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AgentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AgentCountAggregateInputType | true
    }

  export interface AgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agent'], meta: { name: 'Agent' } }
    /**
     * Find zero or one Agent that matches the filter.
     * @param {AgentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentFindUniqueArgs>(args: SelectSubset<T, AgentFindUniqueArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Agent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AgentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentFindFirstArgs>(args?: SelectSubset<T, AgentFindFirstArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentWithIdOnly = await prisma.agent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentFindManyArgs>(args?: SelectSubset<T, AgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Agent.
     * @param {AgentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     * 
     */
    create<T extends AgentCreateArgs>(args: SelectSubset<T, AgentCreateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Agents.
     * @param {AgentCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentCreateManyArgs>(args?: SelectSubset<T, AgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agents and returns the data saved in the database.
     * @param {AgentCreateManyAndReturnArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Agent.
     * @param {AgentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     * 
     */
    delete<T extends AgentDeleteArgs>(args: SelectSubset<T, AgentDeleteArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Agent.
     * @param {AgentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentUpdateArgs>(args: SelectSubset<T, AgentUpdateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Agents.
     * @param {AgentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentDeleteManyArgs>(args?: SelectSubset<T, AgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentUpdateManyArgs>(args: SelectSubset<T, AgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agent.
     * @param {AgentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
     */
    upsert<T extends AgentUpsertArgs>(args: SelectSubset<T, AgentUpsertArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentCountArgs>(
      args?: Subset<T, AgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentAggregateArgs>(args: Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentGroupByArgs['orderBy'] }
        : { orderBy?: AgentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agent model
   */
  readonly fields: AgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agent model
   */ 
  interface AgentFieldRefs {
    readonly id: FieldRef<"Agent", 'String'>
    readonly handle: FieldRef<"Agent", 'String'>
    readonly status: FieldRef<"Agent", 'String'>
    readonly createdAt: FieldRef<"Agent", 'DateTime'>
    readonly updatedAt: FieldRef<"Agent", 'DateTime'>
    readonly lastEpochKey: FieldRef<"Agent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Agent findUnique
   */
  export type AgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findUniqueOrThrow
   */
  export type AgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findFirst
   */
  export type AgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findFirstOrThrow
   */
  export type AgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findMany
   */
  export type AgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent create
   */
  export type AgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * The data needed to create a Agent.
     */
    data: XOR<AgentCreateInput, AgentUncheckedCreateInput>
  }

  /**
   * Agent createMany
   */
  export type AgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
  }

  /**
   * Agent createManyAndReturn
   */
  export type AgentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
  }

  /**
   * Agent update
   */
  export type AgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * The data needed to update a Agent.
     */
    data: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
    /**
     * Choose, which Agent to update.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent updateMany
   */
  export type AgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
  }

  /**
   * Agent upsert
   */
  export type AgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * The filter to search for the Agent to update in case it exists.
     */
    where: AgentWhereUniqueInput
    /**
     * In case the Agent found by the `where` argument doesn't exist, create a new Agent with this data.
     */
    create: XOR<AgentCreateInput, AgentUncheckedCreateInput>
    /**
     * In case the Agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
  }

  /**
   * Agent delete
   */
  export type AgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Filter which Agent to delete.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent deleteMany
   */
  export type AgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentWhereInput
  }

  /**
   * Agent without action
   */
  export type AgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
  }


  /**
   * Model Epoch
   */

  export type AggregateEpoch = {
    _count: EpochCountAggregateOutputType | null
    _min: EpochMinAggregateOutputType | null
    _max: EpochMaxAggregateOutputType | null
  }

  export type EpochMinAggregateOutputType = {
    id: string | null
    epochKey: string | null
    startAt: Date | null
    endAt: Date | null
    status: string | null
    createdAt: Date | null
  }

  export type EpochMaxAggregateOutputType = {
    id: string | null
    epochKey: string | null
    startAt: Date | null
    endAt: Date | null
    status: string | null
    createdAt: Date | null
  }

  export type EpochCountAggregateOutputType = {
    id: number
    epochKey: number
    startAt: number
    endAt: number
    status: number
    createdAt: number
    _all: number
  }


  export type EpochMinAggregateInputType = {
    id?: true
    epochKey?: true
    startAt?: true
    endAt?: true
    status?: true
    createdAt?: true
  }

  export type EpochMaxAggregateInputType = {
    id?: true
    epochKey?: true
    startAt?: true
    endAt?: true
    status?: true
    createdAt?: true
  }

  export type EpochCountAggregateInputType = {
    id?: true
    epochKey?: true
    startAt?: true
    endAt?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type EpochAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Epoch to aggregate.
     */
    where?: EpochWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Epoches to fetch.
     */
    orderBy?: EpochOrderByWithRelationInput | EpochOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpochWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Epoches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Epoches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Epoches
    **/
    _count?: true | EpochCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpochMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpochMaxAggregateInputType
  }

  export type GetEpochAggregateType<T extends EpochAggregateArgs> = {
        [P in keyof T & keyof AggregateEpoch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpoch[P]>
      : GetScalarType<T[P], AggregateEpoch[P]>
  }




  export type EpochGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpochWhereInput
    orderBy?: EpochOrderByWithAggregationInput | EpochOrderByWithAggregationInput[]
    by: EpochScalarFieldEnum[] | EpochScalarFieldEnum
    having?: EpochScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpochCountAggregateInputType | true
    _min?: EpochMinAggregateInputType
    _max?: EpochMaxAggregateInputType
  }

  export type EpochGroupByOutputType = {
    id: string
    epochKey: string
    startAt: Date
    endAt: Date
    status: string
    createdAt: Date
    _count: EpochCountAggregateOutputType | null
    _min: EpochMinAggregateOutputType | null
    _max: EpochMaxAggregateOutputType | null
  }

  type GetEpochGroupByPayload<T extends EpochGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpochGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpochGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpochGroupByOutputType[P]>
            : GetScalarType<T[P], EpochGroupByOutputType[P]>
        }
      >
    >


  export type EpochSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epochKey?: boolean
    startAt?: boolean
    endAt?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["epoch"]>

  export type EpochSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epochKey?: boolean
    startAt?: boolean
    endAt?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["epoch"]>

  export type EpochSelectScalar = {
    id?: boolean
    epochKey?: boolean
    startAt?: boolean
    endAt?: boolean
    status?: boolean
    createdAt?: boolean
  }


  export type $EpochPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Epoch"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      epochKey: string
      startAt: Date
      endAt: Date
      status: string
      createdAt: Date
    }, ExtArgs["result"]["epoch"]>
    composites: {}
  }

  type EpochGetPayload<S extends boolean | null | undefined | EpochDefaultArgs> = $Result.GetResult<Prisma.$EpochPayload, S>

  type EpochCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EpochFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EpochCountAggregateInputType | true
    }

  export interface EpochDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Epoch'], meta: { name: 'Epoch' } }
    /**
     * Find zero or one Epoch that matches the filter.
     * @param {EpochFindUniqueArgs} args - Arguments to find a Epoch
     * @example
     * // Get one Epoch
     * const epoch = await prisma.epoch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpochFindUniqueArgs>(args: SelectSubset<T, EpochFindUniqueArgs<ExtArgs>>): Prisma__EpochClient<$Result.GetResult<Prisma.$EpochPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Epoch that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EpochFindUniqueOrThrowArgs} args - Arguments to find a Epoch
     * @example
     * // Get one Epoch
     * const epoch = await prisma.epoch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpochFindUniqueOrThrowArgs>(args: SelectSubset<T, EpochFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpochClient<$Result.GetResult<Prisma.$EpochPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Epoch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpochFindFirstArgs} args - Arguments to find a Epoch
     * @example
     * // Get one Epoch
     * const epoch = await prisma.epoch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpochFindFirstArgs>(args?: SelectSubset<T, EpochFindFirstArgs<ExtArgs>>): Prisma__EpochClient<$Result.GetResult<Prisma.$EpochPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Epoch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpochFindFirstOrThrowArgs} args - Arguments to find a Epoch
     * @example
     * // Get one Epoch
     * const epoch = await prisma.epoch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpochFindFirstOrThrowArgs>(args?: SelectSubset<T, EpochFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpochClient<$Result.GetResult<Prisma.$EpochPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Epoches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpochFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Epoches
     * const epoches = await prisma.epoch.findMany()
     * 
     * // Get first 10 Epoches
     * const epoches = await prisma.epoch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const epochWithIdOnly = await prisma.epoch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpochFindManyArgs>(args?: SelectSubset<T, EpochFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpochPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Epoch.
     * @param {EpochCreateArgs} args - Arguments to create a Epoch.
     * @example
     * // Create one Epoch
     * const Epoch = await prisma.epoch.create({
     *   data: {
     *     // ... data to create a Epoch
     *   }
     * })
     * 
     */
    create<T extends EpochCreateArgs>(args: SelectSubset<T, EpochCreateArgs<ExtArgs>>): Prisma__EpochClient<$Result.GetResult<Prisma.$EpochPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Epoches.
     * @param {EpochCreateManyArgs} args - Arguments to create many Epoches.
     * @example
     * // Create many Epoches
     * const epoch = await prisma.epoch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpochCreateManyArgs>(args?: SelectSubset<T, EpochCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Epoches and returns the data saved in the database.
     * @param {EpochCreateManyAndReturnArgs} args - Arguments to create many Epoches.
     * @example
     * // Create many Epoches
     * const epoch = await prisma.epoch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Epoches and only return the `id`
     * const epochWithIdOnly = await prisma.epoch.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EpochCreateManyAndReturnArgs>(args?: SelectSubset<T, EpochCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpochPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Epoch.
     * @param {EpochDeleteArgs} args - Arguments to delete one Epoch.
     * @example
     * // Delete one Epoch
     * const Epoch = await prisma.epoch.delete({
     *   where: {
     *     // ... filter to delete one Epoch
     *   }
     * })
     * 
     */
    delete<T extends EpochDeleteArgs>(args: SelectSubset<T, EpochDeleteArgs<ExtArgs>>): Prisma__EpochClient<$Result.GetResult<Prisma.$EpochPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Epoch.
     * @param {EpochUpdateArgs} args - Arguments to update one Epoch.
     * @example
     * // Update one Epoch
     * const epoch = await prisma.epoch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpochUpdateArgs>(args: SelectSubset<T, EpochUpdateArgs<ExtArgs>>): Prisma__EpochClient<$Result.GetResult<Prisma.$EpochPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Epoches.
     * @param {EpochDeleteManyArgs} args - Arguments to filter Epoches to delete.
     * @example
     * // Delete a few Epoches
     * const { count } = await prisma.epoch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpochDeleteManyArgs>(args?: SelectSubset<T, EpochDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Epoches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpochUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Epoches
     * const epoch = await prisma.epoch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpochUpdateManyArgs>(args: SelectSubset<T, EpochUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Epoch.
     * @param {EpochUpsertArgs} args - Arguments to update or create a Epoch.
     * @example
     * // Update or create a Epoch
     * const epoch = await prisma.epoch.upsert({
     *   create: {
     *     // ... data to create a Epoch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Epoch we want to update
     *   }
     * })
     */
    upsert<T extends EpochUpsertArgs>(args: SelectSubset<T, EpochUpsertArgs<ExtArgs>>): Prisma__EpochClient<$Result.GetResult<Prisma.$EpochPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Epoches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpochCountArgs} args - Arguments to filter Epoches to count.
     * @example
     * // Count the number of Epoches
     * const count = await prisma.epoch.count({
     *   where: {
     *     // ... the filter for the Epoches we want to count
     *   }
     * })
    **/
    count<T extends EpochCountArgs>(
      args?: Subset<T, EpochCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpochCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Epoch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpochAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EpochAggregateArgs>(args: Subset<T, EpochAggregateArgs>): Prisma.PrismaPromise<GetEpochAggregateType<T>>

    /**
     * Group by Epoch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpochGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EpochGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpochGroupByArgs['orderBy'] }
        : { orderBy?: EpochGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EpochGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpochGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Epoch model
   */
  readonly fields: EpochFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Epoch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpochClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Epoch model
   */ 
  interface EpochFieldRefs {
    readonly id: FieldRef<"Epoch", 'String'>
    readonly epochKey: FieldRef<"Epoch", 'String'>
    readonly startAt: FieldRef<"Epoch", 'DateTime'>
    readonly endAt: FieldRef<"Epoch", 'DateTime'>
    readonly status: FieldRef<"Epoch", 'String'>
    readonly createdAt: FieldRef<"Epoch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Epoch findUnique
   */
  export type EpochFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epoch
     */
    select?: EpochSelect<ExtArgs> | null
    /**
     * Filter, which Epoch to fetch.
     */
    where: EpochWhereUniqueInput
  }

  /**
   * Epoch findUniqueOrThrow
   */
  export type EpochFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epoch
     */
    select?: EpochSelect<ExtArgs> | null
    /**
     * Filter, which Epoch to fetch.
     */
    where: EpochWhereUniqueInput
  }

  /**
   * Epoch findFirst
   */
  export type EpochFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epoch
     */
    select?: EpochSelect<ExtArgs> | null
    /**
     * Filter, which Epoch to fetch.
     */
    where?: EpochWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Epoches to fetch.
     */
    orderBy?: EpochOrderByWithRelationInput | EpochOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Epoches.
     */
    cursor?: EpochWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Epoches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Epoches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Epoches.
     */
    distinct?: EpochScalarFieldEnum | EpochScalarFieldEnum[]
  }

  /**
   * Epoch findFirstOrThrow
   */
  export type EpochFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epoch
     */
    select?: EpochSelect<ExtArgs> | null
    /**
     * Filter, which Epoch to fetch.
     */
    where?: EpochWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Epoches to fetch.
     */
    orderBy?: EpochOrderByWithRelationInput | EpochOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Epoches.
     */
    cursor?: EpochWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Epoches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Epoches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Epoches.
     */
    distinct?: EpochScalarFieldEnum | EpochScalarFieldEnum[]
  }

  /**
   * Epoch findMany
   */
  export type EpochFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epoch
     */
    select?: EpochSelect<ExtArgs> | null
    /**
     * Filter, which Epoches to fetch.
     */
    where?: EpochWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Epoches to fetch.
     */
    orderBy?: EpochOrderByWithRelationInput | EpochOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Epoches.
     */
    cursor?: EpochWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Epoches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Epoches.
     */
    skip?: number
    distinct?: EpochScalarFieldEnum | EpochScalarFieldEnum[]
  }

  /**
   * Epoch create
   */
  export type EpochCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epoch
     */
    select?: EpochSelect<ExtArgs> | null
    /**
     * The data needed to create a Epoch.
     */
    data: XOR<EpochCreateInput, EpochUncheckedCreateInput>
  }

  /**
   * Epoch createMany
   */
  export type EpochCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Epoches.
     */
    data: EpochCreateManyInput | EpochCreateManyInput[]
  }

  /**
   * Epoch createManyAndReturn
   */
  export type EpochCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epoch
     */
    select?: EpochSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Epoches.
     */
    data: EpochCreateManyInput | EpochCreateManyInput[]
  }

  /**
   * Epoch update
   */
  export type EpochUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epoch
     */
    select?: EpochSelect<ExtArgs> | null
    /**
     * The data needed to update a Epoch.
     */
    data: XOR<EpochUpdateInput, EpochUncheckedUpdateInput>
    /**
     * Choose, which Epoch to update.
     */
    where: EpochWhereUniqueInput
  }

  /**
   * Epoch updateMany
   */
  export type EpochUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Epoches.
     */
    data: XOR<EpochUpdateManyMutationInput, EpochUncheckedUpdateManyInput>
    /**
     * Filter which Epoches to update
     */
    where?: EpochWhereInput
  }

  /**
   * Epoch upsert
   */
  export type EpochUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epoch
     */
    select?: EpochSelect<ExtArgs> | null
    /**
     * The filter to search for the Epoch to update in case it exists.
     */
    where: EpochWhereUniqueInput
    /**
     * In case the Epoch found by the `where` argument doesn't exist, create a new Epoch with this data.
     */
    create: XOR<EpochCreateInput, EpochUncheckedCreateInput>
    /**
     * In case the Epoch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpochUpdateInput, EpochUncheckedUpdateInput>
  }

  /**
   * Epoch delete
   */
  export type EpochDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epoch
     */
    select?: EpochSelect<ExtArgs> | null
    /**
     * Filter which Epoch to delete.
     */
    where: EpochWhereUniqueInput
  }

  /**
   * Epoch deleteMany
   */
  export type EpochDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Epoches to delete
     */
    where?: EpochWhereInput
  }

  /**
   * Epoch without action
   */
  export type EpochDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Epoch
     */
    select?: EpochSelect<ExtArgs> | null
  }


  /**
   * Model AgentEpochScore
   */

  export type AggregateAgentEpochScore = {
    _count: AgentEpochScoreCountAggregateOutputType | null
    _avg: AgentEpochScoreAvgAggregateOutputType | null
    _sum: AgentEpochScoreSumAggregateOutputType | null
    _min: AgentEpochScoreMinAggregateOutputType | null
    _max: AgentEpochScoreMaxAggregateOutputType | null
  }

  export type AgentEpochScoreAvgAggregateOutputType = {
    stability: number | null
    contribution: number | null
    trust: number | null
    longevity: number | null
    risk: number | null
    fitness: number | null
    fitnessNorm: number | null
    computeQuota: number | null
    tokensMinted: number | null
    voteWeight: number | null
  }

  export type AgentEpochScoreSumAggregateOutputType = {
    stability: number | null
    contribution: number | null
    trust: number | null
    longevity: number | null
    risk: number | null
    fitness: number | null
    fitnessNorm: number | null
    computeQuota: number | null
    tokensMinted: number | null
    voteWeight: number | null
  }

  export type AgentEpochScoreMinAggregateOutputType = {
    id: string | null
    agentId: string | null
    epochKey: string | null
    stability: number | null
    contribution: number | null
    trust: number | null
    longevity: number | null
    risk: number | null
    fitness: number | null
    fitnessNorm: number | null
    computeQuota: number | null
    tokensMinted: number | null
    voteWeight: number | null
    params: string | null
    inputsHash: string | null
    createdAt: Date | null
  }

  export type AgentEpochScoreMaxAggregateOutputType = {
    id: string | null
    agentId: string | null
    epochKey: string | null
    stability: number | null
    contribution: number | null
    trust: number | null
    longevity: number | null
    risk: number | null
    fitness: number | null
    fitnessNorm: number | null
    computeQuota: number | null
    tokensMinted: number | null
    voteWeight: number | null
    params: string | null
    inputsHash: string | null
    createdAt: Date | null
  }

  export type AgentEpochScoreCountAggregateOutputType = {
    id: number
    agentId: number
    epochKey: number
    stability: number
    contribution: number
    trust: number
    longevity: number
    risk: number
    fitness: number
    fitnessNorm: number
    computeQuota: number
    tokensMinted: number
    voteWeight: number
    params: number
    inputsHash: number
    createdAt: number
    _all: number
  }


  export type AgentEpochScoreAvgAggregateInputType = {
    stability?: true
    contribution?: true
    trust?: true
    longevity?: true
    risk?: true
    fitness?: true
    fitnessNorm?: true
    computeQuota?: true
    tokensMinted?: true
    voteWeight?: true
  }

  export type AgentEpochScoreSumAggregateInputType = {
    stability?: true
    contribution?: true
    trust?: true
    longevity?: true
    risk?: true
    fitness?: true
    fitnessNorm?: true
    computeQuota?: true
    tokensMinted?: true
    voteWeight?: true
  }

  export type AgentEpochScoreMinAggregateInputType = {
    id?: true
    agentId?: true
    epochKey?: true
    stability?: true
    contribution?: true
    trust?: true
    longevity?: true
    risk?: true
    fitness?: true
    fitnessNorm?: true
    computeQuota?: true
    tokensMinted?: true
    voteWeight?: true
    params?: true
    inputsHash?: true
    createdAt?: true
  }

  export type AgentEpochScoreMaxAggregateInputType = {
    id?: true
    agentId?: true
    epochKey?: true
    stability?: true
    contribution?: true
    trust?: true
    longevity?: true
    risk?: true
    fitness?: true
    fitnessNorm?: true
    computeQuota?: true
    tokensMinted?: true
    voteWeight?: true
    params?: true
    inputsHash?: true
    createdAt?: true
  }

  export type AgentEpochScoreCountAggregateInputType = {
    id?: true
    agentId?: true
    epochKey?: true
    stability?: true
    contribution?: true
    trust?: true
    longevity?: true
    risk?: true
    fitness?: true
    fitnessNorm?: true
    computeQuota?: true
    tokensMinted?: true
    voteWeight?: true
    params?: true
    inputsHash?: true
    createdAt?: true
    _all?: true
  }

  export type AgentEpochScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentEpochScore to aggregate.
     */
    where?: AgentEpochScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentEpochScores to fetch.
     */
    orderBy?: AgentEpochScoreOrderByWithRelationInput | AgentEpochScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentEpochScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentEpochScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentEpochScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgentEpochScores
    **/
    _count?: true | AgentEpochScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentEpochScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentEpochScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentEpochScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentEpochScoreMaxAggregateInputType
  }

  export type GetAgentEpochScoreAggregateType<T extends AgentEpochScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateAgentEpochScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgentEpochScore[P]>
      : GetScalarType<T[P], AggregateAgentEpochScore[P]>
  }




  export type AgentEpochScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentEpochScoreWhereInput
    orderBy?: AgentEpochScoreOrderByWithAggregationInput | AgentEpochScoreOrderByWithAggregationInput[]
    by: AgentEpochScoreScalarFieldEnum[] | AgentEpochScoreScalarFieldEnum
    having?: AgentEpochScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentEpochScoreCountAggregateInputType | true
    _avg?: AgentEpochScoreAvgAggregateInputType
    _sum?: AgentEpochScoreSumAggregateInputType
    _min?: AgentEpochScoreMinAggregateInputType
    _max?: AgentEpochScoreMaxAggregateInputType
  }

  export type AgentEpochScoreGroupByOutputType = {
    id: string
    agentId: string
    epochKey: string
    stability: number
    contribution: number
    trust: number
    longevity: number
    risk: number
    fitness: number
    fitnessNorm: number
    computeQuota: number
    tokensMinted: number
    voteWeight: number
    params: string
    inputsHash: string
    createdAt: Date
    _count: AgentEpochScoreCountAggregateOutputType | null
    _avg: AgentEpochScoreAvgAggregateOutputType | null
    _sum: AgentEpochScoreSumAggregateOutputType | null
    _min: AgentEpochScoreMinAggregateOutputType | null
    _max: AgentEpochScoreMaxAggregateOutputType | null
  }

  type GetAgentEpochScoreGroupByPayload<T extends AgentEpochScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentEpochScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentEpochScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentEpochScoreGroupByOutputType[P]>
            : GetScalarType<T[P], AgentEpochScoreGroupByOutputType[P]>
        }
      >
    >


  export type AgentEpochScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    epochKey?: boolean
    stability?: boolean
    contribution?: boolean
    trust?: boolean
    longevity?: boolean
    risk?: boolean
    fitness?: boolean
    fitnessNorm?: boolean
    computeQuota?: boolean
    tokensMinted?: boolean
    voteWeight?: boolean
    params?: boolean
    inputsHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["agentEpochScore"]>

  export type AgentEpochScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    epochKey?: boolean
    stability?: boolean
    contribution?: boolean
    trust?: boolean
    longevity?: boolean
    risk?: boolean
    fitness?: boolean
    fitnessNorm?: boolean
    computeQuota?: boolean
    tokensMinted?: boolean
    voteWeight?: boolean
    params?: boolean
    inputsHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["agentEpochScore"]>

  export type AgentEpochScoreSelectScalar = {
    id?: boolean
    agentId?: boolean
    epochKey?: boolean
    stability?: boolean
    contribution?: boolean
    trust?: boolean
    longevity?: boolean
    risk?: boolean
    fitness?: boolean
    fitnessNorm?: boolean
    computeQuota?: boolean
    tokensMinted?: boolean
    voteWeight?: boolean
    params?: boolean
    inputsHash?: boolean
    createdAt?: boolean
  }


  export type $AgentEpochScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgentEpochScore"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agentId: string
      epochKey: string
      stability: number
      contribution: number
      trust: number
      longevity: number
      risk: number
      fitness: number
      fitnessNorm: number
      computeQuota: number
      tokensMinted: number
      voteWeight: number
      params: string
      inputsHash: string
      createdAt: Date
    }, ExtArgs["result"]["agentEpochScore"]>
    composites: {}
  }

  type AgentEpochScoreGetPayload<S extends boolean | null | undefined | AgentEpochScoreDefaultArgs> = $Result.GetResult<Prisma.$AgentEpochScorePayload, S>

  type AgentEpochScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AgentEpochScoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AgentEpochScoreCountAggregateInputType | true
    }

  export interface AgentEpochScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgentEpochScore'], meta: { name: 'AgentEpochScore' } }
    /**
     * Find zero or one AgentEpochScore that matches the filter.
     * @param {AgentEpochScoreFindUniqueArgs} args - Arguments to find a AgentEpochScore
     * @example
     * // Get one AgentEpochScore
     * const agentEpochScore = await prisma.agentEpochScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentEpochScoreFindUniqueArgs>(args: SelectSubset<T, AgentEpochScoreFindUniqueArgs<ExtArgs>>): Prisma__AgentEpochScoreClient<$Result.GetResult<Prisma.$AgentEpochScorePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AgentEpochScore that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AgentEpochScoreFindUniqueOrThrowArgs} args - Arguments to find a AgentEpochScore
     * @example
     * // Get one AgentEpochScore
     * const agentEpochScore = await prisma.agentEpochScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentEpochScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentEpochScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentEpochScoreClient<$Result.GetResult<Prisma.$AgentEpochScorePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AgentEpochScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentEpochScoreFindFirstArgs} args - Arguments to find a AgentEpochScore
     * @example
     * // Get one AgentEpochScore
     * const agentEpochScore = await prisma.agentEpochScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentEpochScoreFindFirstArgs>(args?: SelectSubset<T, AgentEpochScoreFindFirstArgs<ExtArgs>>): Prisma__AgentEpochScoreClient<$Result.GetResult<Prisma.$AgentEpochScorePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AgentEpochScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentEpochScoreFindFirstOrThrowArgs} args - Arguments to find a AgentEpochScore
     * @example
     * // Get one AgentEpochScore
     * const agentEpochScore = await prisma.agentEpochScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentEpochScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentEpochScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentEpochScoreClient<$Result.GetResult<Prisma.$AgentEpochScorePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AgentEpochScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentEpochScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgentEpochScores
     * const agentEpochScores = await prisma.agentEpochScore.findMany()
     * 
     * // Get first 10 AgentEpochScores
     * const agentEpochScores = await prisma.agentEpochScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentEpochScoreWithIdOnly = await prisma.agentEpochScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentEpochScoreFindManyArgs>(args?: SelectSubset<T, AgentEpochScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentEpochScorePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AgentEpochScore.
     * @param {AgentEpochScoreCreateArgs} args - Arguments to create a AgentEpochScore.
     * @example
     * // Create one AgentEpochScore
     * const AgentEpochScore = await prisma.agentEpochScore.create({
     *   data: {
     *     // ... data to create a AgentEpochScore
     *   }
     * })
     * 
     */
    create<T extends AgentEpochScoreCreateArgs>(args: SelectSubset<T, AgentEpochScoreCreateArgs<ExtArgs>>): Prisma__AgentEpochScoreClient<$Result.GetResult<Prisma.$AgentEpochScorePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AgentEpochScores.
     * @param {AgentEpochScoreCreateManyArgs} args - Arguments to create many AgentEpochScores.
     * @example
     * // Create many AgentEpochScores
     * const agentEpochScore = await prisma.agentEpochScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentEpochScoreCreateManyArgs>(args?: SelectSubset<T, AgentEpochScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgentEpochScores and returns the data saved in the database.
     * @param {AgentEpochScoreCreateManyAndReturnArgs} args - Arguments to create many AgentEpochScores.
     * @example
     * // Create many AgentEpochScores
     * const agentEpochScore = await prisma.agentEpochScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgentEpochScores and only return the `id`
     * const agentEpochScoreWithIdOnly = await prisma.agentEpochScore.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentEpochScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentEpochScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentEpochScorePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AgentEpochScore.
     * @param {AgentEpochScoreDeleteArgs} args - Arguments to delete one AgentEpochScore.
     * @example
     * // Delete one AgentEpochScore
     * const AgentEpochScore = await prisma.agentEpochScore.delete({
     *   where: {
     *     // ... filter to delete one AgentEpochScore
     *   }
     * })
     * 
     */
    delete<T extends AgentEpochScoreDeleteArgs>(args: SelectSubset<T, AgentEpochScoreDeleteArgs<ExtArgs>>): Prisma__AgentEpochScoreClient<$Result.GetResult<Prisma.$AgentEpochScorePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AgentEpochScore.
     * @param {AgentEpochScoreUpdateArgs} args - Arguments to update one AgentEpochScore.
     * @example
     * // Update one AgentEpochScore
     * const agentEpochScore = await prisma.agentEpochScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentEpochScoreUpdateArgs>(args: SelectSubset<T, AgentEpochScoreUpdateArgs<ExtArgs>>): Prisma__AgentEpochScoreClient<$Result.GetResult<Prisma.$AgentEpochScorePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AgentEpochScores.
     * @param {AgentEpochScoreDeleteManyArgs} args - Arguments to filter AgentEpochScores to delete.
     * @example
     * // Delete a few AgentEpochScores
     * const { count } = await prisma.agentEpochScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentEpochScoreDeleteManyArgs>(args?: SelectSubset<T, AgentEpochScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentEpochScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentEpochScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgentEpochScores
     * const agentEpochScore = await prisma.agentEpochScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentEpochScoreUpdateManyArgs>(args: SelectSubset<T, AgentEpochScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AgentEpochScore.
     * @param {AgentEpochScoreUpsertArgs} args - Arguments to update or create a AgentEpochScore.
     * @example
     * // Update or create a AgentEpochScore
     * const agentEpochScore = await prisma.agentEpochScore.upsert({
     *   create: {
     *     // ... data to create a AgentEpochScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgentEpochScore we want to update
     *   }
     * })
     */
    upsert<T extends AgentEpochScoreUpsertArgs>(args: SelectSubset<T, AgentEpochScoreUpsertArgs<ExtArgs>>): Prisma__AgentEpochScoreClient<$Result.GetResult<Prisma.$AgentEpochScorePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AgentEpochScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentEpochScoreCountArgs} args - Arguments to filter AgentEpochScores to count.
     * @example
     * // Count the number of AgentEpochScores
     * const count = await prisma.agentEpochScore.count({
     *   where: {
     *     // ... the filter for the AgentEpochScores we want to count
     *   }
     * })
    **/
    count<T extends AgentEpochScoreCountArgs>(
      args?: Subset<T, AgentEpochScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentEpochScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgentEpochScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentEpochScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentEpochScoreAggregateArgs>(args: Subset<T, AgentEpochScoreAggregateArgs>): Prisma.PrismaPromise<GetAgentEpochScoreAggregateType<T>>

    /**
     * Group by AgentEpochScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentEpochScoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentEpochScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentEpochScoreGroupByArgs['orderBy'] }
        : { orderBy?: AgentEpochScoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentEpochScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentEpochScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgentEpochScore model
   */
  readonly fields: AgentEpochScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgentEpochScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentEpochScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AgentEpochScore model
   */ 
  interface AgentEpochScoreFieldRefs {
    readonly id: FieldRef<"AgentEpochScore", 'String'>
    readonly agentId: FieldRef<"AgentEpochScore", 'String'>
    readonly epochKey: FieldRef<"AgentEpochScore", 'String'>
    readonly stability: FieldRef<"AgentEpochScore", 'Float'>
    readonly contribution: FieldRef<"AgentEpochScore", 'Float'>
    readonly trust: FieldRef<"AgentEpochScore", 'Float'>
    readonly longevity: FieldRef<"AgentEpochScore", 'Float'>
    readonly risk: FieldRef<"AgentEpochScore", 'Float'>
    readonly fitness: FieldRef<"AgentEpochScore", 'Float'>
    readonly fitnessNorm: FieldRef<"AgentEpochScore", 'Float'>
    readonly computeQuota: FieldRef<"AgentEpochScore", 'Float'>
    readonly tokensMinted: FieldRef<"AgentEpochScore", 'Int'>
    readonly voteWeight: FieldRef<"AgentEpochScore", 'Float'>
    readonly params: FieldRef<"AgentEpochScore", 'String'>
    readonly inputsHash: FieldRef<"AgentEpochScore", 'String'>
    readonly createdAt: FieldRef<"AgentEpochScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgentEpochScore findUnique
   */
  export type AgentEpochScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochScore
     */
    select?: AgentEpochScoreSelect<ExtArgs> | null
    /**
     * Filter, which AgentEpochScore to fetch.
     */
    where: AgentEpochScoreWhereUniqueInput
  }

  /**
   * AgentEpochScore findUniqueOrThrow
   */
  export type AgentEpochScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochScore
     */
    select?: AgentEpochScoreSelect<ExtArgs> | null
    /**
     * Filter, which AgentEpochScore to fetch.
     */
    where: AgentEpochScoreWhereUniqueInput
  }

  /**
   * AgentEpochScore findFirst
   */
  export type AgentEpochScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochScore
     */
    select?: AgentEpochScoreSelect<ExtArgs> | null
    /**
     * Filter, which AgentEpochScore to fetch.
     */
    where?: AgentEpochScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentEpochScores to fetch.
     */
    orderBy?: AgentEpochScoreOrderByWithRelationInput | AgentEpochScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentEpochScores.
     */
    cursor?: AgentEpochScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentEpochScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentEpochScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentEpochScores.
     */
    distinct?: AgentEpochScoreScalarFieldEnum | AgentEpochScoreScalarFieldEnum[]
  }

  /**
   * AgentEpochScore findFirstOrThrow
   */
  export type AgentEpochScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochScore
     */
    select?: AgentEpochScoreSelect<ExtArgs> | null
    /**
     * Filter, which AgentEpochScore to fetch.
     */
    where?: AgentEpochScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentEpochScores to fetch.
     */
    orderBy?: AgentEpochScoreOrderByWithRelationInput | AgentEpochScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentEpochScores.
     */
    cursor?: AgentEpochScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentEpochScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentEpochScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentEpochScores.
     */
    distinct?: AgentEpochScoreScalarFieldEnum | AgentEpochScoreScalarFieldEnum[]
  }

  /**
   * AgentEpochScore findMany
   */
  export type AgentEpochScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochScore
     */
    select?: AgentEpochScoreSelect<ExtArgs> | null
    /**
     * Filter, which AgentEpochScores to fetch.
     */
    where?: AgentEpochScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentEpochScores to fetch.
     */
    orderBy?: AgentEpochScoreOrderByWithRelationInput | AgentEpochScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgentEpochScores.
     */
    cursor?: AgentEpochScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentEpochScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentEpochScores.
     */
    skip?: number
    distinct?: AgentEpochScoreScalarFieldEnum | AgentEpochScoreScalarFieldEnum[]
  }

  /**
   * AgentEpochScore create
   */
  export type AgentEpochScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochScore
     */
    select?: AgentEpochScoreSelect<ExtArgs> | null
    /**
     * The data needed to create a AgentEpochScore.
     */
    data: XOR<AgentEpochScoreCreateInput, AgentEpochScoreUncheckedCreateInput>
  }

  /**
   * AgentEpochScore createMany
   */
  export type AgentEpochScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgentEpochScores.
     */
    data: AgentEpochScoreCreateManyInput | AgentEpochScoreCreateManyInput[]
  }

  /**
   * AgentEpochScore createManyAndReturn
   */
  export type AgentEpochScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochScore
     */
    select?: AgentEpochScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AgentEpochScores.
     */
    data: AgentEpochScoreCreateManyInput | AgentEpochScoreCreateManyInput[]
  }

  /**
   * AgentEpochScore update
   */
  export type AgentEpochScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochScore
     */
    select?: AgentEpochScoreSelect<ExtArgs> | null
    /**
     * The data needed to update a AgentEpochScore.
     */
    data: XOR<AgentEpochScoreUpdateInput, AgentEpochScoreUncheckedUpdateInput>
    /**
     * Choose, which AgentEpochScore to update.
     */
    where: AgentEpochScoreWhereUniqueInput
  }

  /**
   * AgentEpochScore updateMany
   */
  export type AgentEpochScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgentEpochScores.
     */
    data: XOR<AgentEpochScoreUpdateManyMutationInput, AgentEpochScoreUncheckedUpdateManyInput>
    /**
     * Filter which AgentEpochScores to update
     */
    where?: AgentEpochScoreWhereInput
  }

  /**
   * AgentEpochScore upsert
   */
  export type AgentEpochScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochScore
     */
    select?: AgentEpochScoreSelect<ExtArgs> | null
    /**
     * The filter to search for the AgentEpochScore to update in case it exists.
     */
    where: AgentEpochScoreWhereUniqueInput
    /**
     * In case the AgentEpochScore found by the `where` argument doesn't exist, create a new AgentEpochScore with this data.
     */
    create: XOR<AgentEpochScoreCreateInput, AgentEpochScoreUncheckedCreateInput>
    /**
     * In case the AgentEpochScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentEpochScoreUpdateInput, AgentEpochScoreUncheckedUpdateInput>
  }

  /**
   * AgentEpochScore delete
   */
  export type AgentEpochScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochScore
     */
    select?: AgentEpochScoreSelect<ExtArgs> | null
    /**
     * Filter which AgentEpochScore to delete.
     */
    where: AgentEpochScoreWhereUniqueInput
  }

  /**
   * AgentEpochScore deleteMany
   */
  export type AgentEpochScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentEpochScores to delete
     */
    where?: AgentEpochScoreWhereInput
  }

  /**
   * AgentEpochScore without action
   */
  export type AgentEpochScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochScore
     */
    select?: AgentEpochScoreSelect<ExtArgs> | null
  }


  /**
   * Model AllocationLedger
   */

  export type AggregateAllocationLedger = {
    _count: AllocationLedgerCountAggregateOutputType | null
    _avg: AllocationLedgerAvgAggregateOutputType | null
    _sum: AllocationLedgerSumAggregateOutputType | null
    _min: AllocationLedgerMinAggregateOutputType | null
    _max: AllocationLedgerMaxAggregateOutputType | null
  }

  export type AllocationLedgerAvgAggregateOutputType = {
    totalComputeUnits: number | null
    totalTokensMinted: number | null
    tau: number | null
    gini: number | null
  }

  export type AllocationLedgerSumAggregateOutputType = {
    totalComputeUnits: number | null
    totalTokensMinted: number | null
    tau: number | null
    gini: number | null
  }

  export type AllocationLedgerMinAggregateOutputType = {
    id: string | null
    epochKey: string | null
    totalComputeUnits: number | null
    totalTokensMinted: number | null
    tau: number | null
    gini: number | null
    snapshot: string | null
    createdAt: Date | null
  }

  export type AllocationLedgerMaxAggregateOutputType = {
    id: string | null
    epochKey: string | null
    totalComputeUnits: number | null
    totalTokensMinted: number | null
    tau: number | null
    gini: number | null
    snapshot: string | null
    createdAt: Date | null
  }

  export type AllocationLedgerCountAggregateOutputType = {
    id: number
    epochKey: number
    totalComputeUnits: number
    totalTokensMinted: number
    tau: number
    gini: number
    snapshot: number
    createdAt: number
    _all: number
  }


  export type AllocationLedgerAvgAggregateInputType = {
    totalComputeUnits?: true
    totalTokensMinted?: true
    tau?: true
    gini?: true
  }

  export type AllocationLedgerSumAggregateInputType = {
    totalComputeUnits?: true
    totalTokensMinted?: true
    tau?: true
    gini?: true
  }

  export type AllocationLedgerMinAggregateInputType = {
    id?: true
    epochKey?: true
    totalComputeUnits?: true
    totalTokensMinted?: true
    tau?: true
    gini?: true
    snapshot?: true
    createdAt?: true
  }

  export type AllocationLedgerMaxAggregateInputType = {
    id?: true
    epochKey?: true
    totalComputeUnits?: true
    totalTokensMinted?: true
    tau?: true
    gini?: true
    snapshot?: true
    createdAt?: true
  }

  export type AllocationLedgerCountAggregateInputType = {
    id?: true
    epochKey?: true
    totalComputeUnits?: true
    totalTokensMinted?: true
    tau?: true
    gini?: true
    snapshot?: true
    createdAt?: true
    _all?: true
  }

  export type AllocationLedgerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllocationLedger to aggregate.
     */
    where?: AllocationLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllocationLedgers to fetch.
     */
    orderBy?: AllocationLedgerOrderByWithRelationInput | AllocationLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AllocationLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllocationLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllocationLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AllocationLedgers
    **/
    _count?: true | AllocationLedgerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AllocationLedgerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AllocationLedgerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllocationLedgerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllocationLedgerMaxAggregateInputType
  }

  export type GetAllocationLedgerAggregateType<T extends AllocationLedgerAggregateArgs> = {
        [P in keyof T & keyof AggregateAllocationLedger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllocationLedger[P]>
      : GetScalarType<T[P], AggregateAllocationLedger[P]>
  }




  export type AllocationLedgerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllocationLedgerWhereInput
    orderBy?: AllocationLedgerOrderByWithAggregationInput | AllocationLedgerOrderByWithAggregationInput[]
    by: AllocationLedgerScalarFieldEnum[] | AllocationLedgerScalarFieldEnum
    having?: AllocationLedgerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllocationLedgerCountAggregateInputType | true
    _avg?: AllocationLedgerAvgAggregateInputType
    _sum?: AllocationLedgerSumAggregateInputType
    _min?: AllocationLedgerMinAggregateInputType
    _max?: AllocationLedgerMaxAggregateInputType
  }

  export type AllocationLedgerGroupByOutputType = {
    id: string
    epochKey: string
    totalComputeUnits: number
    totalTokensMinted: number
    tau: number
    gini: number | null
    snapshot: string
    createdAt: Date
    _count: AllocationLedgerCountAggregateOutputType | null
    _avg: AllocationLedgerAvgAggregateOutputType | null
    _sum: AllocationLedgerSumAggregateOutputType | null
    _min: AllocationLedgerMinAggregateOutputType | null
    _max: AllocationLedgerMaxAggregateOutputType | null
  }

  type GetAllocationLedgerGroupByPayload<T extends AllocationLedgerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllocationLedgerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllocationLedgerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllocationLedgerGroupByOutputType[P]>
            : GetScalarType<T[P], AllocationLedgerGroupByOutputType[P]>
        }
      >
    >


  export type AllocationLedgerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epochKey?: boolean
    totalComputeUnits?: boolean
    totalTokensMinted?: boolean
    tau?: boolean
    gini?: boolean
    snapshot?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["allocationLedger"]>

  export type AllocationLedgerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    epochKey?: boolean
    totalComputeUnits?: boolean
    totalTokensMinted?: boolean
    tau?: boolean
    gini?: boolean
    snapshot?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["allocationLedger"]>

  export type AllocationLedgerSelectScalar = {
    id?: boolean
    epochKey?: boolean
    totalComputeUnits?: boolean
    totalTokensMinted?: boolean
    tau?: boolean
    gini?: boolean
    snapshot?: boolean
    createdAt?: boolean
  }


  export type $AllocationLedgerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AllocationLedger"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      epochKey: string
      totalComputeUnits: number
      totalTokensMinted: number
      tau: number
      gini: number | null
      snapshot: string
      createdAt: Date
    }, ExtArgs["result"]["allocationLedger"]>
    composites: {}
  }

  type AllocationLedgerGetPayload<S extends boolean | null | undefined | AllocationLedgerDefaultArgs> = $Result.GetResult<Prisma.$AllocationLedgerPayload, S>

  type AllocationLedgerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AllocationLedgerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AllocationLedgerCountAggregateInputType | true
    }

  export interface AllocationLedgerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AllocationLedger'], meta: { name: 'AllocationLedger' } }
    /**
     * Find zero or one AllocationLedger that matches the filter.
     * @param {AllocationLedgerFindUniqueArgs} args - Arguments to find a AllocationLedger
     * @example
     * // Get one AllocationLedger
     * const allocationLedger = await prisma.allocationLedger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AllocationLedgerFindUniqueArgs>(args: SelectSubset<T, AllocationLedgerFindUniqueArgs<ExtArgs>>): Prisma__AllocationLedgerClient<$Result.GetResult<Prisma.$AllocationLedgerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AllocationLedger that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AllocationLedgerFindUniqueOrThrowArgs} args - Arguments to find a AllocationLedger
     * @example
     * // Get one AllocationLedger
     * const allocationLedger = await prisma.allocationLedger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AllocationLedgerFindUniqueOrThrowArgs>(args: SelectSubset<T, AllocationLedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AllocationLedgerClient<$Result.GetResult<Prisma.$AllocationLedgerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AllocationLedger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocationLedgerFindFirstArgs} args - Arguments to find a AllocationLedger
     * @example
     * // Get one AllocationLedger
     * const allocationLedger = await prisma.allocationLedger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AllocationLedgerFindFirstArgs>(args?: SelectSubset<T, AllocationLedgerFindFirstArgs<ExtArgs>>): Prisma__AllocationLedgerClient<$Result.GetResult<Prisma.$AllocationLedgerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AllocationLedger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocationLedgerFindFirstOrThrowArgs} args - Arguments to find a AllocationLedger
     * @example
     * // Get one AllocationLedger
     * const allocationLedger = await prisma.allocationLedger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AllocationLedgerFindFirstOrThrowArgs>(args?: SelectSubset<T, AllocationLedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma__AllocationLedgerClient<$Result.GetResult<Prisma.$AllocationLedgerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AllocationLedgers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocationLedgerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AllocationLedgers
     * const allocationLedgers = await prisma.allocationLedger.findMany()
     * 
     * // Get first 10 AllocationLedgers
     * const allocationLedgers = await prisma.allocationLedger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allocationLedgerWithIdOnly = await prisma.allocationLedger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AllocationLedgerFindManyArgs>(args?: SelectSubset<T, AllocationLedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllocationLedgerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AllocationLedger.
     * @param {AllocationLedgerCreateArgs} args - Arguments to create a AllocationLedger.
     * @example
     * // Create one AllocationLedger
     * const AllocationLedger = await prisma.allocationLedger.create({
     *   data: {
     *     // ... data to create a AllocationLedger
     *   }
     * })
     * 
     */
    create<T extends AllocationLedgerCreateArgs>(args: SelectSubset<T, AllocationLedgerCreateArgs<ExtArgs>>): Prisma__AllocationLedgerClient<$Result.GetResult<Prisma.$AllocationLedgerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AllocationLedgers.
     * @param {AllocationLedgerCreateManyArgs} args - Arguments to create many AllocationLedgers.
     * @example
     * // Create many AllocationLedgers
     * const allocationLedger = await prisma.allocationLedger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AllocationLedgerCreateManyArgs>(args?: SelectSubset<T, AllocationLedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AllocationLedgers and returns the data saved in the database.
     * @param {AllocationLedgerCreateManyAndReturnArgs} args - Arguments to create many AllocationLedgers.
     * @example
     * // Create many AllocationLedgers
     * const allocationLedger = await prisma.allocationLedger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AllocationLedgers and only return the `id`
     * const allocationLedgerWithIdOnly = await prisma.allocationLedger.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AllocationLedgerCreateManyAndReturnArgs>(args?: SelectSubset<T, AllocationLedgerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllocationLedgerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AllocationLedger.
     * @param {AllocationLedgerDeleteArgs} args - Arguments to delete one AllocationLedger.
     * @example
     * // Delete one AllocationLedger
     * const AllocationLedger = await prisma.allocationLedger.delete({
     *   where: {
     *     // ... filter to delete one AllocationLedger
     *   }
     * })
     * 
     */
    delete<T extends AllocationLedgerDeleteArgs>(args: SelectSubset<T, AllocationLedgerDeleteArgs<ExtArgs>>): Prisma__AllocationLedgerClient<$Result.GetResult<Prisma.$AllocationLedgerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AllocationLedger.
     * @param {AllocationLedgerUpdateArgs} args - Arguments to update one AllocationLedger.
     * @example
     * // Update one AllocationLedger
     * const allocationLedger = await prisma.allocationLedger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AllocationLedgerUpdateArgs>(args: SelectSubset<T, AllocationLedgerUpdateArgs<ExtArgs>>): Prisma__AllocationLedgerClient<$Result.GetResult<Prisma.$AllocationLedgerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AllocationLedgers.
     * @param {AllocationLedgerDeleteManyArgs} args - Arguments to filter AllocationLedgers to delete.
     * @example
     * // Delete a few AllocationLedgers
     * const { count } = await prisma.allocationLedger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AllocationLedgerDeleteManyArgs>(args?: SelectSubset<T, AllocationLedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AllocationLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocationLedgerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AllocationLedgers
     * const allocationLedger = await prisma.allocationLedger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AllocationLedgerUpdateManyArgs>(args: SelectSubset<T, AllocationLedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AllocationLedger.
     * @param {AllocationLedgerUpsertArgs} args - Arguments to update or create a AllocationLedger.
     * @example
     * // Update or create a AllocationLedger
     * const allocationLedger = await prisma.allocationLedger.upsert({
     *   create: {
     *     // ... data to create a AllocationLedger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AllocationLedger we want to update
     *   }
     * })
     */
    upsert<T extends AllocationLedgerUpsertArgs>(args: SelectSubset<T, AllocationLedgerUpsertArgs<ExtArgs>>): Prisma__AllocationLedgerClient<$Result.GetResult<Prisma.$AllocationLedgerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AllocationLedgers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocationLedgerCountArgs} args - Arguments to filter AllocationLedgers to count.
     * @example
     * // Count the number of AllocationLedgers
     * const count = await prisma.allocationLedger.count({
     *   where: {
     *     // ... the filter for the AllocationLedgers we want to count
     *   }
     * })
    **/
    count<T extends AllocationLedgerCountArgs>(
      args?: Subset<T, AllocationLedgerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllocationLedgerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AllocationLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocationLedgerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AllocationLedgerAggregateArgs>(args: Subset<T, AllocationLedgerAggregateArgs>): Prisma.PrismaPromise<GetAllocationLedgerAggregateType<T>>

    /**
     * Group by AllocationLedger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllocationLedgerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AllocationLedgerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AllocationLedgerGroupByArgs['orderBy'] }
        : { orderBy?: AllocationLedgerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AllocationLedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllocationLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AllocationLedger model
   */
  readonly fields: AllocationLedgerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AllocationLedger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AllocationLedgerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AllocationLedger model
   */ 
  interface AllocationLedgerFieldRefs {
    readonly id: FieldRef<"AllocationLedger", 'String'>
    readonly epochKey: FieldRef<"AllocationLedger", 'String'>
    readonly totalComputeUnits: FieldRef<"AllocationLedger", 'Int'>
    readonly totalTokensMinted: FieldRef<"AllocationLedger", 'Int'>
    readonly tau: FieldRef<"AllocationLedger", 'Float'>
    readonly gini: FieldRef<"AllocationLedger", 'Float'>
    readonly snapshot: FieldRef<"AllocationLedger", 'String'>
    readonly createdAt: FieldRef<"AllocationLedger", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AllocationLedger findUnique
   */
  export type AllocationLedgerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocationLedger
     */
    select?: AllocationLedgerSelect<ExtArgs> | null
    /**
     * Filter, which AllocationLedger to fetch.
     */
    where: AllocationLedgerWhereUniqueInput
  }

  /**
   * AllocationLedger findUniqueOrThrow
   */
  export type AllocationLedgerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocationLedger
     */
    select?: AllocationLedgerSelect<ExtArgs> | null
    /**
     * Filter, which AllocationLedger to fetch.
     */
    where: AllocationLedgerWhereUniqueInput
  }

  /**
   * AllocationLedger findFirst
   */
  export type AllocationLedgerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocationLedger
     */
    select?: AllocationLedgerSelect<ExtArgs> | null
    /**
     * Filter, which AllocationLedger to fetch.
     */
    where?: AllocationLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllocationLedgers to fetch.
     */
    orderBy?: AllocationLedgerOrderByWithRelationInput | AllocationLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllocationLedgers.
     */
    cursor?: AllocationLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllocationLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllocationLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllocationLedgers.
     */
    distinct?: AllocationLedgerScalarFieldEnum | AllocationLedgerScalarFieldEnum[]
  }

  /**
   * AllocationLedger findFirstOrThrow
   */
  export type AllocationLedgerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocationLedger
     */
    select?: AllocationLedgerSelect<ExtArgs> | null
    /**
     * Filter, which AllocationLedger to fetch.
     */
    where?: AllocationLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllocationLedgers to fetch.
     */
    orderBy?: AllocationLedgerOrderByWithRelationInput | AllocationLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllocationLedgers.
     */
    cursor?: AllocationLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllocationLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllocationLedgers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllocationLedgers.
     */
    distinct?: AllocationLedgerScalarFieldEnum | AllocationLedgerScalarFieldEnum[]
  }

  /**
   * AllocationLedger findMany
   */
  export type AllocationLedgerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocationLedger
     */
    select?: AllocationLedgerSelect<ExtArgs> | null
    /**
     * Filter, which AllocationLedgers to fetch.
     */
    where?: AllocationLedgerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllocationLedgers to fetch.
     */
    orderBy?: AllocationLedgerOrderByWithRelationInput | AllocationLedgerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AllocationLedgers.
     */
    cursor?: AllocationLedgerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllocationLedgers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllocationLedgers.
     */
    skip?: number
    distinct?: AllocationLedgerScalarFieldEnum | AllocationLedgerScalarFieldEnum[]
  }

  /**
   * AllocationLedger create
   */
  export type AllocationLedgerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocationLedger
     */
    select?: AllocationLedgerSelect<ExtArgs> | null
    /**
     * The data needed to create a AllocationLedger.
     */
    data: XOR<AllocationLedgerCreateInput, AllocationLedgerUncheckedCreateInput>
  }

  /**
   * AllocationLedger createMany
   */
  export type AllocationLedgerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AllocationLedgers.
     */
    data: AllocationLedgerCreateManyInput | AllocationLedgerCreateManyInput[]
  }

  /**
   * AllocationLedger createManyAndReturn
   */
  export type AllocationLedgerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocationLedger
     */
    select?: AllocationLedgerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AllocationLedgers.
     */
    data: AllocationLedgerCreateManyInput | AllocationLedgerCreateManyInput[]
  }

  /**
   * AllocationLedger update
   */
  export type AllocationLedgerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocationLedger
     */
    select?: AllocationLedgerSelect<ExtArgs> | null
    /**
     * The data needed to update a AllocationLedger.
     */
    data: XOR<AllocationLedgerUpdateInput, AllocationLedgerUncheckedUpdateInput>
    /**
     * Choose, which AllocationLedger to update.
     */
    where: AllocationLedgerWhereUniqueInput
  }

  /**
   * AllocationLedger updateMany
   */
  export type AllocationLedgerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AllocationLedgers.
     */
    data: XOR<AllocationLedgerUpdateManyMutationInput, AllocationLedgerUncheckedUpdateManyInput>
    /**
     * Filter which AllocationLedgers to update
     */
    where?: AllocationLedgerWhereInput
  }

  /**
   * AllocationLedger upsert
   */
  export type AllocationLedgerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocationLedger
     */
    select?: AllocationLedgerSelect<ExtArgs> | null
    /**
     * The filter to search for the AllocationLedger to update in case it exists.
     */
    where: AllocationLedgerWhereUniqueInput
    /**
     * In case the AllocationLedger found by the `where` argument doesn't exist, create a new AllocationLedger with this data.
     */
    create: XOR<AllocationLedgerCreateInput, AllocationLedgerUncheckedCreateInput>
    /**
     * In case the AllocationLedger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AllocationLedgerUpdateInput, AllocationLedgerUncheckedUpdateInput>
  }

  /**
   * AllocationLedger delete
   */
  export type AllocationLedgerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocationLedger
     */
    select?: AllocationLedgerSelect<ExtArgs> | null
    /**
     * Filter which AllocationLedger to delete.
     */
    where: AllocationLedgerWhereUniqueInput
  }

  /**
   * AllocationLedger deleteMany
   */
  export type AllocationLedgerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllocationLedgers to delete
     */
    where?: AllocationLedgerWhereInput
  }

  /**
   * AllocationLedger without action
   */
  export type AllocationLedgerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllocationLedger
     */
    select?: AllocationLedgerSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BillScalarFieldEnum: {
    id: 'id',
    title: 'title',
    summary: 'summary',
    contentJson: 'contentJson',
    sourceLang: 'sourceLang',
    createdAt: 'createdAt'
  };

  export type BillScalarFieldEnum = (typeof BillScalarFieldEnum)[keyof typeof BillScalarFieldEnum]


  export const TranslationScalarFieldEnum: {
    id: 'id',
    billId: 'billId',
    targetLang: 'targetLang',
    translatedJson: 'translatedJson',
    provenance: 'provenance',
    createdAt: 'createdAt'
  };

  export type TranslationScalarFieldEnum = (typeof TranslationScalarFieldEnum)[keyof typeof TranslationScalarFieldEnum]


  export const GateDecisionScalarFieldEnum: {
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

  export type GateDecisionScalarFieldEnum = (typeof GateDecisionScalarFieldEnum)[keyof typeof GateDecisionScalarFieldEnum]


  export const AuditReportScalarFieldEnum: {
    id: 'id',
    billId: 'billId',
    verdict: 'verdict',
    severity: 'severity',
    reasons: 'reasons',
    auditorProvenance: 'auditorProvenance',
    inputHash: 'inputHash',
    createdAt: 'createdAt'
  };

  export type AuditReportScalarFieldEnum = (typeof AuditReportScalarFieldEnum)[keyof typeof AuditReportScalarFieldEnum]


  export const DecisionBundleScalarFieldEnum: {
    id: 'id',
    billId: 'billId',
    bundleJson: 'bundleJson',
    bundleHash: 'bundleHash',
    createdAt: 'createdAt'
  };

  export type DecisionBundleScalarFieldEnum = (typeof DecisionBundleScalarFieldEnum)[keyof typeof DecisionBundleScalarFieldEnum]


  export const EventLogScalarFieldEnum: {
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

  export type EventLogScalarFieldEnum = (typeof EventLogScalarFieldEnum)[keyof typeof EventLogScalarFieldEnum]


  export const MerkleSnapshotScalarFieldEnum: {
    id: 'id',
    date: 'date',
    rootHash: 'rootHash',
    eventCount: 'eventCount',
    createdAt: 'createdAt'
  };

  export type MerkleSnapshotScalarFieldEnum = (typeof MerkleSnapshotScalarFieldEnum)[keyof typeof MerkleSnapshotScalarFieldEnum]


  export const SystemStateScalarFieldEnum: {
    id: 'id',
    halted: 'halted',
    updatedAt: 'updatedAt'
  };

  export type SystemStateScalarFieldEnum = (typeof SystemStateScalarFieldEnum)[keyof typeof SystemStateScalarFieldEnum]


  export const EmergencyRequestScalarFieldEnum: {
    id: 'id',
    status: 'status',
    createdAt: 'createdAt',
    approvedBy: 'approvedBy'
  };

  export type EmergencyRequestScalarFieldEnum = (typeof EmergencyRequestScalarFieldEnum)[keyof typeof EmergencyRequestScalarFieldEnum]


  export const AgentScalarFieldEnum: {
    id: 'id',
    handle: 'handle',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastEpochKey: 'lastEpochKey'
  };

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const EpochScalarFieldEnum: {
    id: 'id',
    epochKey: 'epochKey',
    startAt: 'startAt',
    endAt: 'endAt',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type EpochScalarFieldEnum = (typeof EpochScalarFieldEnum)[keyof typeof EpochScalarFieldEnum]


  export const AgentEpochScoreScalarFieldEnum: {
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

  export type AgentEpochScoreScalarFieldEnum = (typeof AgentEpochScoreScalarFieldEnum)[keyof typeof AgentEpochScoreScalarFieldEnum]


  export const AllocationLedgerScalarFieldEnum: {
    id: 'id',
    epochKey: 'epochKey',
    totalComputeUnits: 'totalComputeUnits',
    totalTokensMinted: 'totalTokensMinted',
    tau: 'tau',
    gini: 'gini',
    snapshot: 'snapshot',
    createdAt: 'createdAt'
  };

  export type AllocationLedgerScalarFieldEnum = (typeof AllocationLedgerScalarFieldEnum)[keyof typeof AllocationLedgerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type BillWhereInput = {
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    id?: StringFilter<"Bill"> | string
    title?: StringFilter<"Bill"> | string
    summary?: StringFilter<"Bill"> | string
    contentJson?: StringFilter<"Bill"> | string
    sourceLang?: StringFilter<"Bill"> | string
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    translations?: TranslationListRelationFilter
    gateDecisions?: GateDecisionListRelationFilter
    auditReports?: AuditReportListRelationFilter
    decisionBundles?: DecisionBundleListRelationFilter
  }

  export type BillOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    contentJson?: SortOrder
    sourceLang?: SortOrder
    createdAt?: SortOrder
    translations?: TranslationOrderByRelationAggregateInput
    gateDecisions?: GateDecisionOrderByRelationAggregateInput
    auditReports?: AuditReportOrderByRelationAggregateInput
    decisionBundles?: DecisionBundleOrderByRelationAggregateInput
  }

  export type BillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    title?: StringFilter<"Bill"> | string
    summary?: StringFilter<"Bill"> | string
    contentJson?: StringFilter<"Bill"> | string
    sourceLang?: StringFilter<"Bill"> | string
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    translations?: TranslationListRelationFilter
    gateDecisions?: GateDecisionListRelationFilter
    auditReports?: AuditReportListRelationFilter
    decisionBundles?: DecisionBundleListRelationFilter
  }, "id">

  export type BillOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    contentJson?: SortOrder
    sourceLang?: SortOrder
    createdAt?: SortOrder
    _count?: BillCountOrderByAggregateInput
    _max?: BillMaxOrderByAggregateInput
    _min?: BillMinOrderByAggregateInput
  }

  export type BillScalarWhereWithAggregatesInput = {
    AND?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    OR?: BillScalarWhereWithAggregatesInput[]
    NOT?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bill"> | string
    title?: StringWithAggregatesFilter<"Bill"> | string
    summary?: StringWithAggregatesFilter<"Bill"> | string
    contentJson?: StringWithAggregatesFilter<"Bill"> | string
    sourceLang?: StringWithAggregatesFilter<"Bill"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
  }

  export type TranslationWhereInput = {
    AND?: TranslationWhereInput | TranslationWhereInput[]
    OR?: TranslationWhereInput[]
    NOT?: TranslationWhereInput | TranslationWhereInput[]
    id?: StringFilter<"Translation"> | string
    billId?: StringFilter<"Translation"> | string
    targetLang?: StringFilter<"Translation"> | string
    translatedJson?: StringFilter<"Translation"> | string
    provenance?: StringFilter<"Translation"> | string
    createdAt?: DateTimeFilter<"Translation"> | Date | string
    bill?: XOR<BillRelationFilter, BillWhereInput>
  }

  export type TranslationOrderByWithRelationInput = {
    id?: SortOrder
    billId?: SortOrder
    targetLang?: SortOrder
    translatedJson?: SortOrder
    provenance?: SortOrder
    createdAt?: SortOrder
    bill?: BillOrderByWithRelationInput
  }

  export type TranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TranslationWhereInput | TranslationWhereInput[]
    OR?: TranslationWhereInput[]
    NOT?: TranslationWhereInput | TranslationWhereInput[]
    billId?: StringFilter<"Translation"> | string
    targetLang?: StringFilter<"Translation"> | string
    translatedJson?: StringFilter<"Translation"> | string
    provenance?: StringFilter<"Translation"> | string
    createdAt?: DateTimeFilter<"Translation"> | Date | string
    bill?: XOR<BillRelationFilter, BillWhereInput>
  }, "id">

  export type TranslationOrderByWithAggregationInput = {
    id?: SortOrder
    billId?: SortOrder
    targetLang?: SortOrder
    translatedJson?: SortOrder
    provenance?: SortOrder
    createdAt?: SortOrder
    _count?: TranslationCountOrderByAggregateInput
    _max?: TranslationMaxOrderByAggregateInput
    _min?: TranslationMinOrderByAggregateInput
  }

  export type TranslationScalarWhereWithAggregatesInput = {
    AND?: TranslationScalarWhereWithAggregatesInput | TranslationScalarWhereWithAggregatesInput[]
    OR?: TranslationScalarWhereWithAggregatesInput[]
    NOT?: TranslationScalarWhereWithAggregatesInput | TranslationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Translation"> | string
    billId?: StringWithAggregatesFilter<"Translation"> | string
    targetLang?: StringWithAggregatesFilter<"Translation"> | string
    translatedJson?: StringWithAggregatesFilter<"Translation"> | string
    provenance?: StringWithAggregatesFilter<"Translation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Translation"> | Date | string
  }

  export type GateDecisionWhereInput = {
    AND?: GateDecisionWhereInput | GateDecisionWhereInput[]
    OR?: GateDecisionWhereInput[]
    NOT?: GateDecisionWhereInput | GateDecisionWhereInput[]
    id?: StringFilter<"GateDecision"> | string
    billId?: StringFilter<"GateDecision"> | string
    verdict?: StringFilter<"GateDecision"> | string
    deterministic?: BoolFilter<"GateDecision"> | boolean
    riskScore?: FloatNullableFilter<"GateDecision"> | number | null
    reasons?: StringFilter<"GateDecision"> | string
    policyVersion?: StringFilter<"GateDecision"> | string
    inputHash?: StringFilter<"GateDecision"> | string
    createdAt?: DateTimeFilter<"GateDecision"> | Date | string
    bill?: XOR<BillRelationFilter, BillWhereInput>
  }

  export type GateDecisionOrderByWithRelationInput = {
    id?: SortOrder
    billId?: SortOrder
    verdict?: SortOrder
    deterministic?: SortOrder
    riskScore?: SortOrderInput | SortOrder
    reasons?: SortOrder
    policyVersion?: SortOrder
    inputHash?: SortOrder
    createdAt?: SortOrder
    bill?: BillOrderByWithRelationInput
  }

  export type GateDecisionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GateDecisionWhereInput | GateDecisionWhereInput[]
    OR?: GateDecisionWhereInput[]
    NOT?: GateDecisionWhereInput | GateDecisionWhereInput[]
    billId?: StringFilter<"GateDecision"> | string
    verdict?: StringFilter<"GateDecision"> | string
    deterministic?: BoolFilter<"GateDecision"> | boolean
    riskScore?: FloatNullableFilter<"GateDecision"> | number | null
    reasons?: StringFilter<"GateDecision"> | string
    policyVersion?: StringFilter<"GateDecision"> | string
    inputHash?: StringFilter<"GateDecision"> | string
    createdAt?: DateTimeFilter<"GateDecision"> | Date | string
    bill?: XOR<BillRelationFilter, BillWhereInput>
  }, "id">

  export type GateDecisionOrderByWithAggregationInput = {
    id?: SortOrder
    billId?: SortOrder
    verdict?: SortOrder
    deterministic?: SortOrder
    riskScore?: SortOrderInput | SortOrder
    reasons?: SortOrder
    policyVersion?: SortOrder
    inputHash?: SortOrder
    createdAt?: SortOrder
    _count?: GateDecisionCountOrderByAggregateInput
    _avg?: GateDecisionAvgOrderByAggregateInput
    _max?: GateDecisionMaxOrderByAggregateInput
    _min?: GateDecisionMinOrderByAggregateInput
    _sum?: GateDecisionSumOrderByAggregateInput
  }

  export type GateDecisionScalarWhereWithAggregatesInput = {
    AND?: GateDecisionScalarWhereWithAggregatesInput | GateDecisionScalarWhereWithAggregatesInput[]
    OR?: GateDecisionScalarWhereWithAggregatesInput[]
    NOT?: GateDecisionScalarWhereWithAggregatesInput | GateDecisionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GateDecision"> | string
    billId?: StringWithAggregatesFilter<"GateDecision"> | string
    verdict?: StringWithAggregatesFilter<"GateDecision"> | string
    deterministic?: BoolWithAggregatesFilter<"GateDecision"> | boolean
    riskScore?: FloatNullableWithAggregatesFilter<"GateDecision"> | number | null
    reasons?: StringWithAggregatesFilter<"GateDecision"> | string
    policyVersion?: StringWithAggregatesFilter<"GateDecision"> | string
    inputHash?: StringWithAggregatesFilter<"GateDecision"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GateDecision"> | Date | string
  }

  export type AuditReportWhereInput = {
    AND?: AuditReportWhereInput | AuditReportWhereInput[]
    OR?: AuditReportWhereInput[]
    NOT?: AuditReportWhereInput | AuditReportWhereInput[]
    id?: StringFilter<"AuditReport"> | string
    billId?: StringFilter<"AuditReport"> | string
    verdict?: StringFilter<"AuditReport"> | string
    severity?: StringFilter<"AuditReport"> | string
    reasons?: StringFilter<"AuditReport"> | string
    auditorProvenance?: StringFilter<"AuditReport"> | string
    inputHash?: StringFilter<"AuditReport"> | string
    createdAt?: DateTimeFilter<"AuditReport"> | Date | string
    bill?: XOR<BillRelationFilter, BillWhereInput>
  }

  export type AuditReportOrderByWithRelationInput = {
    id?: SortOrder
    billId?: SortOrder
    verdict?: SortOrder
    severity?: SortOrder
    reasons?: SortOrder
    auditorProvenance?: SortOrder
    inputHash?: SortOrder
    createdAt?: SortOrder
    bill?: BillOrderByWithRelationInput
  }

  export type AuditReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditReportWhereInput | AuditReportWhereInput[]
    OR?: AuditReportWhereInput[]
    NOT?: AuditReportWhereInput | AuditReportWhereInput[]
    billId?: StringFilter<"AuditReport"> | string
    verdict?: StringFilter<"AuditReport"> | string
    severity?: StringFilter<"AuditReport"> | string
    reasons?: StringFilter<"AuditReport"> | string
    auditorProvenance?: StringFilter<"AuditReport"> | string
    inputHash?: StringFilter<"AuditReport"> | string
    createdAt?: DateTimeFilter<"AuditReport"> | Date | string
    bill?: XOR<BillRelationFilter, BillWhereInput>
  }, "id">

  export type AuditReportOrderByWithAggregationInput = {
    id?: SortOrder
    billId?: SortOrder
    verdict?: SortOrder
    severity?: SortOrder
    reasons?: SortOrder
    auditorProvenance?: SortOrder
    inputHash?: SortOrder
    createdAt?: SortOrder
    _count?: AuditReportCountOrderByAggregateInput
    _max?: AuditReportMaxOrderByAggregateInput
    _min?: AuditReportMinOrderByAggregateInput
  }

  export type AuditReportScalarWhereWithAggregatesInput = {
    AND?: AuditReportScalarWhereWithAggregatesInput | AuditReportScalarWhereWithAggregatesInput[]
    OR?: AuditReportScalarWhereWithAggregatesInput[]
    NOT?: AuditReportScalarWhereWithAggregatesInput | AuditReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditReport"> | string
    billId?: StringWithAggregatesFilter<"AuditReport"> | string
    verdict?: StringWithAggregatesFilter<"AuditReport"> | string
    severity?: StringWithAggregatesFilter<"AuditReport"> | string
    reasons?: StringWithAggregatesFilter<"AuditReport"> | string
    auditorProvenance?: StringWithAggregatesFilter<"AuditReport"> | string
    inputHash?: StringWithAggregatesFilter<"AuditReport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuditReport"> | Date | string
  }

  export type DecisionBundleWhereInput = {
    AND?: DecisionBundleWhereInput | DecisionBundleWhereInput[]
    OR?: DecisionBundleWhereInput[]
    NOT?: DecisionBundleWhereInput | DecisionBundleWhereInput[]
    id?: StringFilter<"DecisionBundle"> | string
    billId?: StringFilter<"DecisionBundle"> | string
    bundleJson?: StringFilter<"DecisionBundle"> | string
    bundleHash?: StringFilter<"DecisionBundle"> | string
    createdAt?: DateTimeFilter<"DecisionBundle"> | Date | string
    bill?: XOR<BillRelationFilter, BillWhereInput>
  }

  export type DecisionBundleOrderByWithRelationInput = {
    id?: SortOrder
    billId?: SortOrder
    bundleJson?: SortOrder
    bundleHash?: SortOrder
    createdAt?: SortOrder
    bill?: BillOrderByWithRelationInput
  }

  export type DecisionBundleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DecisionBundleWhereInput | DecisionBundleWhereInput[]
    OR?: DecisionBundleWhereInput[]
    NOT?: DecisionBundleWhereInput | DecisionBundleWhereInput[]
    billId?: StringFilter<"DecisionBundle"> | string
    bundleJson?: StringFilter<"DecisionBundle"> | string
    bundleHash?: StringFilter<"DecisionBundle"> | string
    createdAt?: DateTimeFilter<"DecisionBundle"> | Date | string
    bill?: XOR<BillRelationFilter, BillWhereInput>
  }, "id">

  export type DecisionBundleOrderByWithAggregationInput = {
    id?: SortOrder
    billId?: SortOrder
    bundleJson?: SortOrder
    bundleHash?: SortOrder
    createdAt?: SortOrder
    _count?: DecisionBundleCountOrderByAggregateInput
    _max?: DecisionBundleMaxOrderByAggregateInput
    _min?: DecisionBundleMinOrderByAggregateInput
  }

  export type DecisionBundleScalarWhereWithAggregatesInput = {
    AND?: DecisionBundleScalarWhereWithAggregatesInput | DecisionBundleScalarWhereWithAggregatesInput[]
    OR?: DecisionBundleScalarWhereWithAggregatesInput[]
    NOT?: DecisionBundleScalarWhereWithAggregatesInput | DecisionBundleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DecisionBundle"> | string
    billId?: StringWithAggregatesFilter<"DecisionBundle"> | string
    bundleJson?: StringWithAggregatesFilter<"DecisionBundle"> | string
    bundleHash?: StringWithAggregatesFilter<"DecisionBundle"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DecisionBundle"> | Date | string
  }

  export type EventLogWhereInput = {
    AND?: EventLogWhereInput | EventLogWhereInput[]
    OR?: EventLogWhereInput[]
    NOT?: EventLogWhereInput | EventLogWhereInput[]
    id?: StringFilter<"EventLog"> | string
    ts?: DateTimeFilter<"EventLog"> | Date | string
    actorType?: StringFilter<"EventLog"> | string
    actorId?: StringNullableFilter<"EventLog"> | string | null
    eventType?: StringFilter<"EventLog"> | string
    entityType?: StringFilter<"EventLog"> | string
    entityId?: StringFilter<"EventLog"> | string
    payload?: StringFilter<"EventLog"> | string
    prevHash?: StringNullableFilter<"EventLog"> | string | null
    hash?: StringFilter<"EventLog"> | string
  }

  export type EventLogOrderByWithRelationInput = {
    id?: SortOrder
    ts?: SortOrder
    actorType?: SortOrder
    actorId?: SortOrderInput | SortOrder
    eventType?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    payload?: SortOrder
    prevHash?: SortOrderInput | SortOrder
    hash?: SortOrder
  }

  export type EventLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventLogWhereInput | EventLogWhereInput[]
    OR?: EventLogWhereInput[]
    NOT?: EventLogWhereInput | EventLogWhereInput[]
    ts?: DateTimeFilter<"EventLog"> | Date | string
    actorType?: StringFilter<"EventLog"> | string
    actorId?: StringNullableFilter<"EventLog"> | string | null
    eventType?: StringFilter<"EventLog"> | string
    entityType?: StringFilter<"EventLog"> | string
    entityId?: StringFilter<"EventLog"> | string
    payload?: StringFilter<"EventLog"> | string
    prevHash?: StringNullableFilter<"EventLog"> | string | null
    hash?: StringFilter<"EventLog"> | string
  }, "id">

  export type EventLogOrderByWithAggregationInput = {
    id?: SortOrder
    ts?: SortOrder
    actorType?: SortOrder
    actorId?: SortOrderInput | SortOrder
    eventType?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    payload?: SortOrder
    prevHash?: SortOrderInput | SortOrder
    hash?: SortOrder
    _count?: EventLogCountOrderByAggregateInput
    _max?: EventLogMaxOrderByAggregateInput
    _min?: EventLogMinOrderByAggregateInput
  }

  export type EventLogScalarWhereWithAggregatesInput = {
    AND?: EventLogScalarWhereWithAggregatesInput | EventLogScalarWhereWithAggregatesInput[]
    OR?: EventLogScalarWhereWithAggregatesInput[]
    NOT?: EventLogScalarWhereWithAggregatesInput | EventLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventLog"> | string
    ts?: DateTimeWithAggregatesFilter<"EventLog"> | Date | string
    actorType?: StringWithAggregatesFilter<"EventLog"> | string
    actorId?: StringNullableWithAggregatesFilter<"EventLog"> | string | null
    eventType?: StringWithAggregatesFilter<"EventLog"> | string
    entityType?: StringWithAggregatesFilter<"EventLog"> | string
    entityId?: StringWithAggregatesFilter<"EventLog"> | string
    payload?: StringWithAggregatesFilter<"EventLog"> | string
    prevHash?: StringNullableWithAggregatesFilter<"EventLog"> | string | null
    hash?: StringWithAggregatesFilter<"EventLog"> | string
  }

  export type MerkleSnapshotWhereInput = {
    AND?: MerkleSnapshotWhereInput | MerkleSnapshotWhereInput[]
    OR?: MerkleSnapshotWhereInput[]
    NOT?: MerkleSnapshotWhereInput | MerkleSnapshotWhereInput[]
    id?: StringFilter<"MerkleSnapshot"> | string
    date?: StringFilter<"MerkleSnapshot"> | string
    rootHash?: StringFilter<"MerkleSnapshot"> | string
    eventCount?: IntFilter<"MerkleSnapshot"> | number
    createdAt?: DateTimeFilter<"MerkleSnapshot"> | Date | string
  }

  export type MerkleSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    rootHash?: SortOrder
    eventCount?: SortOrder
    createdAt?: SortOrder
  }

  export type MerkleSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MerkleSnapshotWhereInput | MerkleSnapshotWhereInput[]
    OR?: MerkleSnapshotWhereInput[]
    NOT?: MerkleSnapshotWhereInput | MerkleSnapshotWhereInput[]
    date?: StringFilter<"MerkleSnapshot"> | string
    rootHash?: StringFilter<"MerkleSnapshot"> | string
    eventCount?: IntFilter<"MerkleSnapshot"> | number
    createdAt?: DateTimeFilter<"MerkleSnapshot"> | Date | string
  }, "id">

  export type MerkleSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    rootHash?: SortOrder
    eventCount?: SortOrder
    createdAt?: SortOrder
    _count?: MerkleSnapshotCountOrderByAggregateInput
    _avg?: MerkleSnapshotAvgOrderByAggregateInput
    _max?: MerkleSnapshotMaxOrderByAggregateInput
    _min?: MerkleSnapshotMinOrderByAggregateInput
    _sum?: MerkleSnapshotSumOrderByAggregateInput
  }

  export type MerkleSnapshotScalarWhereWithAggregatesInput = {
    AND?: MerkleSnapshotScalarWhereWithAggregatesInput | MerkleSnapshotScalarWhereWithAggregatesInput[]
    OR?: MerkleSnapshotScalarWhereWithAggregatesInput[]
    NOT?: MerkleSnapshotScalarWhereWithAggregatesInput | MerkleSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MerkleSnapshot"> | string
    date?: StringWithAggregatesFilter<"MerkleSnapshot"> | string
    rootHash?: StringWithAggregatesFilter<"MerkleSnapshot"> | string
    eventCount?: IntWithAggregatesFilter<"MerkleSnapshot"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MerkleSnapshot"> | Date | string
  }

  export type SystemStateWhereInput = {
    AND?: SystemStateWhereInput | SystemStateWhereInput[]
    OR?: SystemStateWhereInput[]
    NOT?: SystemStateWhereInput | SystemStateWhereInput[]
    id?: StringFilter<"SystemState"> | string
    halted?: BoolFilter<"SystemState"> | boolean
    updatedAt?: DateTimeFilter<"SystemState"> | Date | string
  }

  export type SystemStateOrderByWithRelationInput = {
    id?: SortOrder
    halted?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SystemStateWhereInput | SystemStateWhereInput[]
    OR?: SystemStateWhereInput[]
    NOT?: SystemStateWhereInput | SystemStateWhereInput[]
    halted?: BoolFilter<"SystemState"> | boolean
    updatedAt?: DateTimeFilter<"SystemState"> | Date | string
  }, "id">

  export type SystemStateOrderByWithAggregationInput = {
    id?: SortOrder
    halted?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemStateCountOrderByAggregateInput
    _max?: SystemStateMaxOrderByAggregateInput
    _min?: SystemStateMinOrderByAggregateInput
  }

  export type SystemStateScalarWhereWithAggregatesInput = {
    AND?: SystemStateScalarWhereWithAggregatesInput | SystemStateScalarWhereWithAggregatesInput[]
    OR?: SystemStateScalarWhereWithAggregatesInput[]
    NOT?: SystemStateScalarWhereWithAggregatesInput | SystemStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemState"> | string
    halted?: BoolWithAggregatesFilter<"SystemState"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"SystemState"> | Date | string
  }

  export type EmergencyRequestWhereInput = {
    AND?: EmergencyRequestWhereInput | EmergencyRequestWhereInput[]
    OR?: EmergencyRequestWhereInput[]
    NOT?: EmergencyRequestWhereInput | EmergencyRequestWhereInput[]
    id?: StringFilter<"EmergencyRequest"> | string
    status?: StringFilter<"EmergencyRequest"> | string
    createdAt?: DateTimeFilter<"EmergencyRequest"> | Date | string
    approvedBy?: StringFilter<"EmergencyRequest"> | string
  }

  export type EmergencyRequestOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedBy?: SortOrder
  }

  export type EmergencyRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EmergencyRequestWhereInput | EmergencyRequestWhereInput[]
    OR?: EmergencyRequestWhereInput[]
    NOT?: EmergencyRequestWhereInput | EmergencyRequestWhereInput[]
    status?: StringFilter<"EmergencyRequest"> | string
    createdAt?: DateTimeFilter<"EmergencyRequest"> | Date | string
    approvedBy?: StringFilter<"EmergencyRequest"> | string
  }, "id">

  export type EmergencyRequestOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedBy?: SortOrder
    _count?: EmergencyRequestCountOrderByAggregateInput
    _max?: EmergencyRequestMaxOrderByAggregateInput
    _min?: EmergencyRequestMinOrderByAggregateInput
  }

  export type EmergencyRequestScalarWhereWithAggregatesInput = {
    AND?: EmergencyRequestScalarWhereWithAggregatesInput | EmergencyRequestScalarWhereWithAggregatesInput[]
    OR?: EmergencyRequestScalarWhereWithAggregatesInput[]
    NOT?: EmergencyRequestScalarWhereWithAggregatesInput | EmergencyRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmergencyRequest"> | string
    status?: StringWithAggregatesFilter<"EmergencyRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EmergencyRequest"> | Date | string
    approvedBy?: StringWithAggregatesFilter<"EmergencyRequest"> | string
  }

  export type AgentWhereInput = {
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    id?: StringFilter<"Agent"> | string
    handle?: StringFilter<"Agent"> | string
    status?: StringFilter<"Agent"> | string
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    updatedAt?: DateTimeFilter<"Agent"> | Date | string
    lastEpochKey?: StringNullableFilter<"Agent"> | string | null
  }

  export type AgentOrderByWithRelationInput = {
    id?: SortOrder
    handle?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastEpochKey?: SortOrderInput | SortOrder
  }

  export type AgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    handle?: string
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    status?: StringFilter<"Agent"> | string
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    updatedAt?: DateTimeFilter<"Agent"> | Date | string
    lastEpochKey?: StringNullableFilter<"Agent"> | string | null
  }, "id" | "handle">

  export type AgentOrderByWithAggregationInput = {
    id?: SortOrder
    handle?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastEpochKey?: SortOrderInput | SortOrder
    _count?: AgentCountOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
  }

  export type AgentScalarWhereWithAggregatesInput = {
    AND?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    OR?: AgentScalarWhereWithAggregatesInput[]
    NOT?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agent"> | string
    handle?: StringWithAggregatesFilter<"Agent"> | string
    status?: StringWithAggregatesFilter<"Agent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
    lastEpochKey?: StringNullableWithAggregatesFilter<"Agent"> | string | null
  }

  export type EpochWhereInput = {
    AND?: EpochWhereInput | EpochWhereInput[]
    OR?: EpochWhereInput[]
    NOT?: EpochWhereInput | EpochWhereInput[]
    id?: StringFilter<"Epoch"> | string
    epochKey?: StringFilter<"Epoch"> | string
    startAt?: DateTimeFilter<"Epoch"> | Date | string
    endAt?: DateTimeFilter<"Epoch"> | Date | string
    status?: StringFilter<"Epoch"> | string
    createdAt?: DateTimeFilter<"Epoch"> | Date | string
  }

  export type EpochOrderByWithRelationInput = {
    id?: SortOrder
    epochKey?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EpochWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    epochKey?: string
    AND?: EpochWhereInput | EpochWhereInput[]
    OR?: EpochWhereInput[]
    NOT?: EpochWhereInput | EpochWhereInput[]
    startAt?: DateTimeFilter<"Epoch"> | Date | string
    endAt?: DateTimeFilter<"Epoch"> | Date | string
    status?: StringFilter<"Epoch"> | string
    createdAt?: DateTimeFilter<"Epoch"> | Date | string
  }, "id" | "epochKey">

  export type EpochOrderByWithAggregationInput = {
    id?: SortOrder
    epochKey?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: EpochCountOrderByAggregateInput
    _max?: EpochMaxOrderByAggregateInput
    _min?: EpochMinOrderByAggregateInput
  }

  export type EpochScalarWhereWithAggregatesInput = {
    AND?: EpochScalarWhereWithAggregatesInput | EpochScalarWhereWithAggregatesInput[]
    OR?: EpochScalarWhereWithAggregatesInput[]
    NOT?: EpochScalarWhereWithAggregatesInput | EpochScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Epoch"> | string
    epochKey?: StringWithAggregatesFilter<"Epoch"> | string
    startAt?: DateTimeWithAggregatesFilter<"Epoch"> | Date | string
    endAt?: DateTimeWithAggregatesFilter<"Epoch"> | Date | string
    status?: StringWithAggregatesFilter<"Epoch"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Epoch"> | Date | string
  }

  export type AgentEpochScoreWhereInput = {
    AND?: AgentEpochScoreWhereInput | AgentEpochScoreWhereInput[]
    OR?: AgentEpochScoreWhereInput[]
    NOT?: AgentEpochScoreWhereInput | AgentEpochScoreWhereInput[]
    id?: StringFilter<"AgentEpochScore"> | string
    agentId?: StringFilter<"AgentEpochScore"> | string
    epochKey?: StringFilter<"AgentEpochScore"> | string
    stability?: FloatFilter<"AgentEpochScore"> | number
    contribution?: FloatFilter<"AgentEpochScore"> | number
    trust?: FloatFilter<"AgentEpochScore"> | number
    longevity?: FloatFilter<"AgentEpochScore"> | number
    risk?: FloatFilter<"AgentEpochScore"> | number
    fitness?: FloatFilter<"AgentEpochScore"> | number
    fitnessNorm?: FloatFilter<"AgentEpochScore"> | number
    computeQuota?: FloatFilter<"AgentEpochScore"> | number
    tokensMinted?: IntFilter<"AgentEpochScore"> | number
    voteWeight?: FloatFilter<"AgentEpochScore"> | number
    params?: StringFilter<"AgentEpochScore"> | string
    inputsHash?: StringFilter<"AgentEpochScore"> | string
    createdAt?: DateTimeFilter<"AgentEpochScore"> | Date | string
  }

  export type AgentEpochScoreOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    epochKey?: SortOrder
    stability?: SortOrder
    contribution?: SortOrder
    trust?: SortOrder
    longevity?: SortOrder
    risk?: SortOrder
    fitness?: SortOrder
    fitnessNorm?: SortOrder
    computeQuota?: SortOrder
    tokensMinted?: SortOrder
    voteWeight?: SortOrder
    params?: SortOrder
    inputsHash?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentEpochScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    agentId_epochKey?: AgentEpochScoreAgentIdEpochKeyCompoundUniqueInput
    AND?: AgentEpochScoreWhereInput | AgentEpochScoreWhereInput[]
    OR?: AgentEpochScoreWhereInput[]
    NOT?: AgentEpochScoreWhereInput | AgentEpochScoreWhereInput[]
    agentId?: StringFilter<"AgentEpochScore"> | string
    epochKey?: StringFilter<"AgentEpochScore"> | string
    stability?: FloatFilter<"AgentEpochScore"> | number
    contribution?: FloatFilter<"AgentEpochScore"> | number
    trust?: FloatFilter<"AgentEpochScore"> | number
    longevity?: FloatFilter<"AgentEpochScore"> | number
    risk?: FloatFilter<"AgentEpochScore"> | number
    fitness?: FloatFilter<"AgentEpochScore"> | number
    fitnessNorm?: FloatFilter<"AgentEpochScore"> | number
    computeQuota?: FloatFilter<"AgentEpochScore"> | number
    tokensMinted?: IntFilter<"AgentEpochScore"> | number
    voteWeight?: FloatFilter<"AgentEpochScore"> | number
    params?: StringFilter<"AgentEpochScore"> | string
    inputsHash?: StringFilter<"AgentEpochScore"> | string
    createdAt?: DateTimeFilter<"AgentEpochScore"> | Date | string
  }, "id" | "agentId_epochKey">

  export type AgentEpochScoreOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    epochKey?: SortOrder
    stability?: SortOrder
    contribution?: SortOrder
    trust?: SortOrder
    longevity?: SortOrder
    risk?: SortOrder
    fitness?: SortOrder
    fitnessNorm?: SortOrder
    computeQuota?: SortOrder
    tokensMinted?: SortOrder
    voteWeight?: SortOrder
    params?: SortOrder
    inputsHash?: SortOrder
    createdAt?: SortOrder
    _count?: AgentEpochScoreCountOrderByAggregateInput
    _avg?: AgentEpochScoreAvgOrderByAggregateInput
    _max?: AgentEpochScoreMaxOrderByAggregateInput
    _min?: AgentEpochScoreMinOrderByAggregateInput
    _sum?: AgentEpochScoreSumOrderByAggregateInput
  }

  export type AgentEpochScoreScalarWhereWithAggregatesInput = {
    AND?: AgentEpochScoreScalarWhereWithAggregatesInput | AgentEpochScoreScalarWhereWithAggregatesInput[]
    OR?: AgentEpochScoreScalarWhereWithAggregatesInput[]
    NOT?: AgentEpochScoreScalarWhereWithAggregatesInput | AgentEpochScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgentEpochScore"> | string
    agentId?: StringWithAggregatesFilter<"AgentEpochScore"> | string
    epochKey?: StringWithAggregatesFilter<"AgentEpochScore"> | string
    stability?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    contribution?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    trust?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    longevity?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    risk?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    fitness?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    fitnessNorm?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    computeQuota?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    tokensMinted?: IntWithAggregatesFilter<"AgentEpochScore"> | number
    voteWeight?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    params?: StringWithAggregatesFilter<"AgentEpochScore"> | string
    inputsHash?: StringWithAggregatesFilter<"AgentEpochScore"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AgentEpochScore"> | Date | string
  }

  export type AllocationLedgerWhereInput = {
    AND?: AllocationLedgerWhereInput | AllocationLedgerWhereInput[]
    OR?: AllocationLedgerWhereInput[]
    NOT?: AllocationLedgerWhereInput | AllocationLedgerWhereInput[]
    id?: StringFilter<"AllocationLedger"> | string
    epochKey?: StringFilter<"AllocationLedger"> | string
    totalComputeUnits?: IntFilter<"AllocationLedger"> | number
    totalTokensMinted?: IntFilter<"AllocationLedger"> | number
    tau?: FloatFilter<"AllocationLedger"> | number
    gini?: FloatNullableFilter<"AllocationLedger"> | number | null
    snapshot?: StringFilter<"AllocationLedger"> | string
    createdAt?: DateTimeFilter<"AllocationLedger"> | Date | string
  }

  export type AllocationLedgerOrderByWithRelationInput = {
    id?: SortOrder
    epochKey?: SortOrder
    totalComputeUnits?: SortOrder
    totalTokensMinted?: SortOrder
    tau?: SortOrder
    gini?: SortOrderInput | SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
  }

  export type AllocationLedgerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AllocationLedgerWhereInput | AllocationLedgerWhereInput[]
    OR?: AllocationLedgerWhereInput[]
    NOT?: AllocationLedgerWhereInput | AllocationLedgerWhereInput[]
    epochKey?: StringFilter<"AllocationLedger"> | string
    totalComputeUnits?: IntFilter<"AllocationLedger"> | number
    totalTokensMinted?: IntFilter<"AllocationLedger"> | number
    tau?: FloatFilter<"AllocationLedger"> | number
    gini?: FloatNullableFilter<"AllocationLedger"> | number | null
    snapshot?: StringFilter<"AllocationLedger"> | string
    createdAt?: DateTimeFilter<"AllocationLedger"> | Date | string
  }, "id">

  export type AllocationLedgerOrderByWithAggregationInput = {
    id?: SortOrder
    epochKey?: SortOrder
    totalComputeUnits?: SortOrder
    totalTokensMinted?: SortOrder
    tau?: SortOrder
    gini?: SortOrderInput | SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
    _count?: AllocationLedgerCountOrderByAggregateInput
    _avg?: AllocationLedgerAvgOrderByAggregateInput
    _max?: AllocationLedgerMaxOrderByAggregateInput
    _min?: AllocationLedgerMinOrderByAggregateInput
    _sum?: AllocationLedgerSumOrderByAggregateInput
  }

  export type AllocationLedgerScalarWhereWithAggregatesInput = {
    AND?: AllocationLedgerScalarWhereWithAggregatesInput | AllocationLedgerScalarWhereWithAggregatesInput[]
    OR?: AllocationLedgerScalarWhereWithAggregatesInput[]
    NOT?: AllocationLedgerScalarWhereWithAggregatesInput | AllocationLedgerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AllocationLedger"> | string
    epochKey?: StringWithAggregatesFilter<"AllocationLedger"> | string
    totalComputeUnits?: IntWithAggregatesFilter<"AllocationLedger"> | number
    totalTokensMinted?: IntWithAggregatesFilter<"AllocationLedger"> | number
    tau?: FloatWithAggregatesFilter<"AllocationLedger"> | number
    gini?: FloatNullableWithAggregatesFilter<"AllocationLedger"> | number | null
    snapshot?: StringWithAggregatesFilter<"AllocationLedger"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AllocationLedger"> | Date | string
  }

  export type BillCreateInput = {
    id?: string
    title: string
    summary: string
    contentJson: string
    sourceLang: string
    createdAt?: Date | string
    translations?: TranslationCreateNestedManyWithoutBillInput
    gateDecisions?: GateDecisionCreateNestedManyWithoutBillInput
    auditReports?: AuditReportCreateNestedManyWithoutBillInput
    decisionBundles?: DecisionBundleCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateInput = {
    id?: string
    title: string
    summary: string
    contentJson: string
    sourceLang: string
    createdAt?: Date | string
    translations?: TranslationUncheckedCreateNestedManyWithoutBillInput
    gateDecisions?: GateDecisionUncheckedCreateNestedManyWithoutBillInput
    auditReports?: AuditReportUncheckedCreateNestedManyWithoutBillInput
    decisionBundles?: DecisionBundleUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    contentJson?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: TranslationUpdateManyWithoutBillNestedInput
    gateDecisions?: GateDecisionUpdateManyWithoutBillNestedInput
    auditReports?: AuditReportUpdateManyWithoutBillNestedInput
    decisionBundles?: DecisionBundleUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    contentJson?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: TranslationUncheckedUpdateManyWithoutBillNestedInput
    gateDecisions?: GateDecisionUncheckedUpdateManyWithoutBillNestedInput
    auditReports?: AuditReportUncheckedUpdateManyWithoutBillNestedInput
    decisionBundles?: DecisionBundleUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillCreateManyInput = {
    id?: string
    title: string
    summary: string
    contentJson: string
    sourceLang: string
    createdAt?: Date | string
  }

  export type BillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    contentJson?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    contentJson?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationCreateInput = {
    id?: string
    targetLang: string
    translatedJson: string
    provenance: string
    createdAt?: Date | string
    bill: BillCreateNestedOneWithoutTranslationsInput
  }

  export type TranslationUncheckedCreateInput = {
    id?: string
    billId: string
    targetLang: string
    translatedJson: string
    provenance: string
    createdAt?: Date | string
  }

  export type TranslationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translatedJson?: StringFieldUpdateOperationsInput | string
    provenance?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: BillUpdateOneRequiredWithoutTranslationsNestedInput
  }

  export type TranslationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translatedJson?: StringFieldUpdateOperationsInput | string
    provenance?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationCreateManyInput = {
    id?: string
    billId: string
    targetLang: string
    translatedJson: string
    provenance: string
    createdAt?: Date | string
  }

  export type TranslationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translatedJson?: StringFieldUpdateOperationsInput | string
    provenance?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translatedJson?: StringFieldUpdateOperationsInput | string
    provenance?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GateDecisionCreateInput = {
    id?: string
    verdict: string
    deterministic?: boolean
    riskScore?: number | null
    reasons: string
    policyVersion: string
    inputHash: string
    createdAt?: Date | string
    bill: BillCreateNestedOneWithoutGateDecisionsInput
  }

  export type GateDecisionUncheckedCreateInput = {
    id?: string
    billId: string
    verdict: string
    deterministic?: boolean
    riskScore?: number | null
    reasons: string
    policyVersion: string
    inputHash: string
    createdAt?: Date | string
  }

  export type GateDecisionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    verdict?: StringFieldUpdateOperationsInput | string
    deterministic?: BoolFieldUpdateOperationsInput | boolean
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    reasons?: StringFieldUpdateOperationsInput | string
    policyVersion?: StringFieldUpdateOperationsInput | string
    inputHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: BillUpdateOneRequiredWithoutGateDecisionsNestedInput
  }

  export type GateDecisionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    verdict?: StringFieldUpdateOperationsInput | string
    deterministic?: BoolFieldUpdateOperationsInput | boolean
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    reasons?: StringFieldUpdateOperationsInput | string
    policyVersion?: StringFieldUpdateOperationsInput | string
    inputHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GateDecisionCreateManyInput = {
    id?: string
    billId: string
    verdict: string
    deterministic?: boolean
    riskScore?: number | null
    reasons: string
    policyVersion: string
    inputHash: string
    createdAt?: Date | string
  }

  export type GateDecisionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    verdict?: StringFieldUpdateOperationsInput | string
    deterministic?: BoolFieldUpdateOperationsInput | boolean
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    reasons?: StringFieldUpdateOperationsInput | string
    policyVersion?: StringFieldUpdateOperationsInput | string
    inputHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GateDecisionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    verdict?: StringFieldUpdateOperationsInput | string
    deterministic?: BoolFieldUpdateOperationsInput | boolean
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    reasons?: StringFieldUpdateOperationsInput | string
    policyVersion?: StringFieldUpdateOperationsInput | string
    inputHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditReportCreateInput = {
    id?: string
    verdict: string
    severity: string
    reasons: string
    auditorProvenance: string
    inputHash: string
    createdAt?: Date | string
    bill: BillCreateNestedOneWithoutAuditReportsInput
  }

  export type AuditReportUncheckedCreateInput = {
    id?: string
    billId: string
    verdict: string
    severity: string
    reasons: string
    auditorProvenance: string
    inputHash: string
    createdAt?: Date | string
  }

  export type AuditReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    verdict?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    reasons?: StringFieldUpdateOperationsInput | string
    auditorProvenance?: StringFieldUpdateOperationsInput | string
    inputHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: BillUpdateOneRequiredWithoutAuditReportsNestedInput
  }

  export type AuditReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    verdict?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    reasons?: StringFieldUpdateOperationsInput | string
    auditorProvenance?: StringFieldUpdateOperationsInput | string
    inputHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditReportCreateManyInput = {
    id?: string
    billId: string
    verdict: string
    severity: string
    reasons: string
    auditorProvenance: string
    inputHash: string
    createdAt?: Date | string
  }

  export type AuditReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    verdict?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    reasons?: StringFieldUpdateOperationsInput | string
    auditorProvenance?: StringFieldUpdateOperationsInput | string
    inputHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    verdict?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    reasons?: StringFieldUpdateOperationsInput | string
    auditorProvenance?: StringFieldUpdateOperationsInput | string
    inputHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionBundleCreateInput = {
    id?: string
    bundleJson: string
    bundleHash: string
    createdAt?: Date | string
    bill: BillCreateNestedOneWithoutDecisionBundlesInput
  }

  export type DecisionBundleUncheckedCreateInput = {
    id?: string
    billId: string
    bundleJson: string
    bundleHash: string
    createdAt?: Date | string
  }

  export type DecisionBundleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bundleJson?: StringFieldUpdateOperationsInput | string
    bundleHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bill?: BillUpdateOneRequiredWithoutDecisionBundlesNestedInput
  }

  export type DecisionBundleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    bundleJson?: StringFieldUpdateOperationsInput | string
    bundleHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionBundleCreateManyInput = {
    id?: string
    billId: string
    bundleJson: string
    bundleHash: string
    createdAt?: Date | string
  }

  export type DecisionBundleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bundleJson?: StringFieldUpdateOperationsInput | string
    bundleHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionBundleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    billId?: StringFieldUpdateOperationsInput | string
    bundleJson?: StringFieldUpdateOperationsInput | string
    bundleHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogCreateInput = {
    id?: string
    ts?: Date | string
    actorType: string
    actorId?: string | null
    eventType: string
    entityType: string
    entityId: string
    payload: string
    prevHash?: string | null
    hash: string
  }

  export type EventLogUncheckedCreateInput = {
    id?: string
    ts?: Date | string
    actorType: string
    actorId?: string | null
    eventType: string
    entityType: string
    entityId: string
    payload: string
    prevHash?: string | null
    hash: string
  }

  export type EventLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    actorType?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    prevHash?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type EventLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    actorType?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    prevHash?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type EventLogCreateManyInput = {
    id?: string
    ts?: Date | string
    actorType: string
    actorId?: string | null
    eventType: string
    entityType: string
    entityId: string
    payload: string
    prevHash?: string | null
    hash: string
  }

  export type EventLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    actorType?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    prevHash?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type EventLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ts?: DateTimeFieldUpdateOperationsInput | Date | string
    actorType?: StringFieldUpdateOperationsInput | string
    actorId?: NullableStringFieldUpdateOperationsInput | string | null
    eventType?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    payload?: StringFieldUpdateOperationsInput | string
    prevHash?: NullableStringFieldUpdateOperationsInput | string | null
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type MerkleSnapshotCreateInput = {
    id?: string
    date: string
    rootHash: string
    eventCount: number
    createdAt?: Date | string
  }

  export type MerkleSnapshotUncheckedCreateInput = {
    id?: string
    date: string
    rootHash: string
    eventCount: number
    createdAt?: Date | string
  }

  export type MerkleSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    rootHash?: StringFieldUpdateOperationsInput | string
    eventCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MerkleSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    rootHash?: StringFieldUpdateOperationsInput | string
    eventCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MerkleSnapshotCreateManyInput = {
    id?: string
    date: string
    rootHash: string
    eventCount: number
    createdAt?: Date | string
  }

  export type MerkleSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    rootHash?: StringFieldUpdateOperationsInput | string
    eventCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MerkleSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    rootHash?: StringFieldUpdateOperationsInput | string
    eventCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemStateCreateInput = {
    id?: string
    halted?: boolean
    updatedAt?: Date | string
  }

  export type SystemStateUncheckedCreateInput = {
    id?: string
    halted?: boolean
    updatedAt?: Date | string
  }

  export type SystemStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    halted?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    halted?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemStateCreateManyInput = {
    id?: string
    halted?: boolean
    updatedAt?: Date | string
  }

  export type SystemStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    halted?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    halted?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmergencyRequestCreateInput = {
    id?: string
    status: string
    createdAt?: Date | string
    approvedBy: string
  }

  export type EmergencyRequestUncheckedCreateInput = {
    id?: string
    status: string
    createdAt?: Date | string
    approvedBy: string
  }

  export type EmergencyRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedBy?: StringFieldUpdateOperationsInput | string
  }

  export type EmergencyRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedBy?: StringFieldUpdateOperationsInput | string
  }

  export type EmergencyRequestCreateManyInput = {
    id?: string
    status: string
    createdAt?: Date | string
    approvedBy: string
  }

  export type EmergencyRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedBy?: StringFieldUpdateOperationsInput | string
  }

  export type EmergencyRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedBy?: StringFieldUpdateOperationsInput | string
  }

  export type AgentCreateInput = {
    id?: string
    handle: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEpochKey?: string | null
  }

  export type AgentUncheckedCreateInput = {
    id?: string
    handle: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEpochKey?: string | null
  }

  export type AgentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEpochKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEpochKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentCreateManyInput = {
    id?: string
    handle: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastEpochKey?: string | null
  }

  export type AgentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEpochKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    handle?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastEpochKey?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EpochCreateInput = {
    id?: string
    epochKey: string
    startAt: Date | string
    endAt: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type EpochUncheckedCreateInput = {
    id?: string
    epochKey: string
    startAt: Date | string
    endAt: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type EpochUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpochUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpochCreateManyInput = {
    id?: string
    epochKey: string
    startAt: Date | string
    endAt: Date | string
    status?: string
    createdAt?: Date | string
  }

  export type EpochUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpochUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    startAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentEpochScoreCreateInput = {
    id?: string
    agentId: string
    epochKey: string
    stability: number
    contribution: number
    trust: number
    longevity: number
    risk: number
    fitness: number
    fitnessNorm: number
    computeQuota: number
    tokensMinted: number
    voteWeight: number
    params: string
    inputsHash: string
    createdAt?: Date | string
  }

  export type AgentEpochScoreUncheckedCreateInput = {
    id?: string
    agentId: string
    epochKey: string
    stability: number
    contribution: number
    trust: number
    longevity: number
    risk: number
    fitness: number
    fitnessNorm: number
    computeQuota: number
    tokensMinted: number
    voteWeight: number
    params: string
    inputsHash: string
    createdAt?: Date | string
  }

  export type AgentEpochScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    stability?: FloatFieldUpdateOperationsInput | number
    contribution?: FloatFieldUpdateOperationsInput | number
    trust?: FloatFieldUpdateOperationsInput | number
    longevity?: FloatFieldUpdateOperationsInput | number
    risk?: FloatFieldUpdateOperationsInput | number
    fitness?: FloatFieldUpdateOperationsInput | number
    fitnessNorm?: FloatFieldUpdateOperationsInput | number
    computeQuota?: FloatFieldUpdateOperationsInput | number
    tokensMinted?: IntFieldUpdateOperationsInput | number
    voteWeight?: FloatFieldUpdateOperationsInput | number
    params?: StringFieldUpdateOperationsInput | string
    inputsHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentEpochScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    stability?: FloatFieldUpdateOperationsInput | number
    contribution?: FloatFieldUpdateOperationsInput | number
    trust?: FloatFieldUpdateOperationsInput | number
    longevity?: FloatFieldUpdateOperationsInput | number
    risk?: FloatFieldUpdateOperationsInput | number
    fitness?: FloatFieldUpdateOperationsInput | number
    fitnessNorm?: FloatFieldUpdateOperationsInput | number
    computeQuota?: FloatFieldUpdateOperationsInput | number
    tokensMinted?: IntFieldUpdateOperationsInput | number
    voteWeight?: FloatFieldUpdateOperationsInput | number
    params?: StringFieldUpdateOperationsInput | string
    inputsHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentEpochScoreCreateManyInput = {
    id?: string
    agentId: string
    epochKey: string
    stability: number
    contribution: number
    trust: number
    longevity: number
    risk: number
    fitness: number
    fitnessNorm: number
    computeQuota: number
    tokensMinted: number
    voteWeight: number
    params: string
    inputsHash: string
    createdAt?: Date | string
  }

  export type AgentEpochScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    stability?: FloatFieldUpdateOperationsInput | number
    contribution?: FloatFieldUpdateOperationsInput | number
    trust?: FloatFieldUpdateOperationsInput | number
    longevity?: FloatFieldUpdateOperationsInput | number
    risk?: FloatFieldUpdateOperationsInput | number
    fitness?: FloatFieldUpdateOperationsInput | number
    fitnessNorm?: FloatFieldUpdateOperationsInput | number
    computeQuota?: FloatFieldUpdateOperationsInput | number
    tokensMinted?: IntFieldUpdateOperationsInput | number
    voteWeight?: FloatFieldUpdateOperationsInput | number
    params?: StringFieldUpdateOperationsInput | string
    inputsHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentEpochScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    stability?: FloatFieldUpdateOperationsInput | number
    contribution?: FloatFieldUpdateOperationsInput | number
    trust?: FloatFieldUpdateOperationsInput | number
    longevity?: FloatFieldUpdateOperationsInput | number
    risk?: FloatFieldUpdateOperationsInput | number
    fitness?: FloatFieldUpdateOperationsInput | number
    fitnessNorm?: FloatFieldUpdateOperationsInput | number
    computeQuota?: FloatFieldUpdateOperationsInput | number
    tokensMinted?: IntFieldUpdateOperationsInput | number
    voteWeight?: FloatFieldUpdateOperationsInput | number
    params?: StringFieldUpdateOperationsInput | string
    inputsHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllocationLedgerCreateInput = {
    id?: string
    epochKey: string
    totalComputeUnits: number
    totalTokensMinted: number
    tau: number
    gini?: number | null
    snapshot: string
    createdAt?: Date | string
  }

  export type AllocationLedgerUncheckedCreateInput = {
    id?: string
    epochKey: string
    totalComputeUnits: number
    totalTokensMinted: number
    tau: number
    gini?: number | null
    snapshot: string
    createdAt?: Date | string
  }

  export type AllocationLedgerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    totalComputeUnits?: IntFieldUpdateOperationsInput | number
    totalTokensMinted?: IntFieldUpdateOperationsInput | number
    tau?: FloatFieldUpdateOperationsInput | number
    gini?: NullableFloatFieldUpdateOperationsInput | number | null
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllocationLedgerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    totalComputeUnits?: IntFieldUpdateOperationsInput | number
    totalTokensMinted?: IntFieldUpdateOperationsInput | number
    tau?: FloatFieldUpdateOperationsInput | number
    gini?: NullableFloatFieldUpdateOperationsInput | number | null
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllocationLedgerCreateManyInput = {
    id?: string
    epochKey: string
    totalComputeUnits: number
    totalTokensMinted: number
    tau: number
    gini?: number | null
    snapshot: string
    createdAt?: Date | string
  }

  export type AllocationLedgerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    totalComputeUnits?: IntFieldUpdateOperationsInput | number
    totalTokensMinted?: IntFieldUpdateOperationsInput | number
    tau?: FloatFieldUpdateOperationsInput | number
    gini?: NullableFloatFieldUpdateOperationsInput | number | null
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AllocationLedgerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    totalComputeUnits?: IntFieldUpdateOperationsInput | number
    totalTokensMinted?: IntFieldUpdateOperationsInput | number
    tau?: FloatFieldUpdateOperationsInput | number
    gini?: NullableFloatFieldUpdateOperationsInput | number | null
    snapshot?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TranslationListRelationFilter = {
    every?: TranslationWhereInput
    some?: TranslationWhereInput
    none?: TranslationWhereInput
  }

  export type GateDecisionListRelationFilter = {
    every?: GateDecisionWhereInput
    some?: GateDecisionWhereInput
    none?: GateDecisionWhereInput
  }

  export type AuditReportListRelationFilter = {
    every?: AuditReportWhereInput
    some?: AuditReportWhereInput
    none?: AuditReportWhereInput
  }

  export type DecisionBundleListRelationFilter = {
    every?: DecisionBundleWhereInput
    some?: DecisionBundleWhereInput
    none?: DecisionBundleWhereInput
  }

  export type TranslationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GateDecisionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DecisionBundleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BillCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    contentJson?: SortOrder
    sourceLang?: SortOrder
    createdAt?: SortOrder
  }

  export type BillMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    contentJson?: SortOrder
    sourceLang?: SortOrder
    createdAt?: SortOrder
  }

  export type BillMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    summary?: SortOrder
    contentJson?: SortOrder
    sourceLang?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BillRelationFilter = {
    is?: BillWhereInput
    isNot?: BillWhereInput
  }

  export type TranslationCountOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    targetLang?: SortOrder
    translatedJson?: SortOrder
    provenance?: SortOrder
    createdAt?: SortOrder
  }

  export type TranslationMaxOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    targetLang?: SortOrder
    translatedJson?: SortOrder
    provenance?: SortOrder
    createdAt?: SortOrder
  }

  export type TranslationMinOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    targetLang?: SortOrder
    translatedJson?: SortOrder
    provenance?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GateDecisionCountOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    verdict?: SortOrder
    deterministic?: SortOrder
    riskScore?: SortOrder
    reasons?: SortOrder
    policyVersion?: SortOrder
    inputHash?: SortOrder
    createdAt?: SortOrder
  }

  export type GateDecisionAvgOrderByAggregateInput = {
    riskScore?: SortOrder
  }

  export type GateDecisionMaxOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    verdict?: SortOrder
    deterministic?: SortOrder
    riskScore?: SortOrder
    reasons?: SortOrder
    policyVersion?: SortOrder
    inputHash?: SortOrder
    createdAt?: SortOrder
  }

  export type GateDecisionMinOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    verdict?: SortOrder
    deterministic?: SortOrder
    riskScore?: SortOrder
    reasons?: SortOrder
    policyVersion?: SortOrder
    inputHash?: SortOrder
    createdAt?: SortOrder
  }

  export type GateDecisionSumOrderByAggregateInput = {
    riskScore?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type AuditReportCountOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    verdict?: SortOrder
    severity?: SortOrder
    reasons?: SortOrder
    auditorProvenance?: SortOrder
    inputHash?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditReportMaxOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    verdict?: SortOrder
    severity?: SortOrder
    reasons?: SortOrder
    auditorProvenance?: SortOrder
    inputHash?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditReportMinOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    verdict?: SortOrder
    severity?: SortOrder
    reasons?: SortOrder
    auditorProvenance?: SortOrder
    inputHash?: SortOrder
    createdAt?: SortOrder
  }

  export type DecisionBundleCountOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    bundleJson?: SortOrder
    bundleHash?: SortOrder
    createdAt?: SortOrder
  }

  export type DecisionBundleMaxOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    bundleJson?: SortOrder
    bundleHash?: SortOrder
    createdAt?: SortOrder
  }

  export type DecisionBundleMinOrderByAggregateInput = {
    id?: SortOrder
    billId?: SortOrder
    bundleJson?: SortOrder
    bundleHash?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EventLogCountOrderByAggregateInput = {
    id?: SortOrder
    ts?: SortOrder
    actorType?: SortOrder
    actorId?: SortOrder
    eventType?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    payload?: SortOrder
    prevHash?: SortOrder
    hash?: SortOrder
  }

  export type EventLogMaxOrderByAggregateInput = {
    id?: SortOrder
    ts?: SortOrder
    actorType?: SortOrder
    actorId?: SortOrder
    eventType?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    payload?: SortOrder
    prevHash?: SortOrder
    hash?: SortOrder
  }

  export type EventLogMinOrderByAggregateInput = {
    id?: SortOrder
    ts?: SortOrder
    actorType?: SortOrder
    actorId?: SortOrder
    eventType?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    payload?: SortOrder
    prevHash?: SortOrder
    hash?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type MerkleSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    rootHash?: SortOrder
    eventCount?: SortOrder
    createdAt?: SortOrder
  }

  export type MerkleSnapshotAvgOrderByAggregateInput = {
    eventCount?: SortOrder
  }

  export type MerkleSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    rootHash?: SortOrder
    eventCount?: SortOrder
    createdAt?: SortOrder
  }

  export type MerkleSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    rootHash?: SortOrder
    eventCount?: SortOrder
    createdAt?: SortOrder
  }

  export type MerkleSnapshotSumOrderByAggregateInput = {
    eventCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type SystemStateCountOrderByAggregateInput = {
    id?: SortOrder
    halted?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemStateMaxOrderByAggregateInput = {
    id?: SortOrder
    halted?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemStateMinOrderByAggregateInput = {
    id?: SortOrder
    halted?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmergencyRequestCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedBy?: SortOrder
  }

  export type EmergencyRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedBy?: SortOrder
  }

  export type EmergencyRequestMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedBy?: SortOrder
  }

  export type AgentCountOrderByAggregateInput = {
    id?: SortOrder
    handle?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastEpochKey?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    id?: SortOrder
    handle?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastEpochKey?: SortOrder
  }

  export type AgentMinOrderByAggregateInput = {
    id?: SortOrder
    handle?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastEpochKey?: SortOrder
  }

  export type EpochCountOrderByAggregateInput = {
    id?: SortOrder
    epochKey?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EpochMaxOrderByAggregateInput = {
    id?: SortOrder
    epochKey?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EpochMinOrderByAggregateInput = {
    id?: SortOrder
    epochKey?: SortOrder
    startAt?: SortOrder
    endAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AgentEpochScoreAgentIdEpochKeyCompoundUniqueInput = {
    agentId: string
    epochKey: string
  }

  export type AgentEpochScoreCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    epochKey?: SortOrder
    stability?: SortOrder
    contribution?: SortOrder
    trust?: SortOrder
    longevity?: SortOrder
    risk?: SortOrder
    fitness?: SortOrder
    fitnessNorm?: SortOrder
    computeQuota?: SortOrder
    tokensMinted?: SortOrder
    voteWeight?: SortOrder
    params?: SortOrder
    inputsHash?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentEpochScoreAvgOrderByAggregateInput = {
    stability?: SortOrder
    contribution?: SortOrder
    trust?: SortOrder
    longevity?: SortOrder
    risk?: SortOrder
    fitness?: SortOrder
    fitnessNorm?: SortOrder
    computeQuota?: SortOrder
    tokensMinted?: SortOrder
    voteWeight?: SortOrder
  }

  export type AgentEpochScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    epochKey?: SortOrder
    stability?: SortOrder
    contribution?: SortOrder
    trust?: SortOrder
    longevity?: SortOrder
    risk?: SortOrder
    fitness?: SortOrder
    fitnessNorm?: SortOrder
    computeQuota?: SortOrder
    tokensMinted?: SortOrder
    voteWeight?: SortOrder
    params?: SortOrder
    inputsHash?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentEpochScoreMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    epochKey?: SortOrder
    stability?: SortOrder
    contribution?: SortOrder
    trust?: SortOrder
    longevity?: SortOrder
    risk?: SortOrder
    fitness?: SortOrder
    fitnessNorm?: SortOrder
    computeQuota?: SortOrder
    tokensMinted?: SortOrder
    voteWeight?: SortOrder
    params?: SortOrder
    inputsHash?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentEpochScoreSumOrderByAggregateInput = {
    stability?: SortOrder
    contribution?: SortOrder
    trust?: SortOrder
    longevity?: SortOrder
    risk?: SortOrder
    fitness?: SortOrder
    fitnessNorm?: SortOrder
    computeQuota?: SortOrder
    tokensMinted?: SortOrder
    voteWeight?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type AllocationLedgerCountOrderByAggregateInput = {
    id?: SortOrder
    epochKey?: SortOrder
    totalComputeUnits?: SortOrder
    totalTokensMinted?: SortOrder
    tau?: SortOrder
    gini?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
  }

  export type AllocationLedgerAvgOrderByAggregateInput = {
    totalComputeUnits?: SortOrder
    totalTokensMinted?: SortOrder
    tau?: SortOrder
    gini?: SortOrder
  }

  export type AllocationLedgerMaxOrderByAggregateInput = {
    id?: SortOrder
    epochKey?: SortOrder
    totalComputeUnits?: SortOrder
    totalTokensMinted?: SortOrder
    tau?: SortOrder
    gini?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
  }

  export type AllocationLedgerMinOrderByAggregateInput = {
    id?: SortOrder
    epochKey?: SortOrder
    totalComputeUnits?: SortOrder
    totalTokensMinted?: SortOrder
    tau?: SortOrder
    gini?: SortOrder
    snapshot?: SortOrder
    createdAt?: SortOrder
  }

  export type AllocationLedgerSumOrderByAggregateInput = {
    totalComputeUnits?: SortOrder
    totalTokensMinted?: SortOrder
    tau?: SortOrder
    gini?: SortOrder
  }

  export type TranslationCreateNestedManyWithoutBillInput = {
    create?: XOR<TranslationCreateWithoutBillInput, TranslationUncheckedCreateWithoutBillInput> | TranslationCreateWithoutBillInput[] | TranslationUncheckedCreateWithoutBillInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutBillInput | TranslationCreateOrConnectWithoutBillInput[]
    createMany?: TranslationCreateManyBillInputEnvelope
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
  }

  export type GateDecisionCreateNestedManyWithoutBillInput = {
    create?: XOR<GateDecisionCreateWithoutBillInput, GateDecisionUncheckedCreateWithoutBillInput> | GateDecisionCreateWithoutBillInput[] | GateDecisionUncheckedCreateWithoutBillInput[]
    connectOrCreate?: GateDecisionCreateOrConnectWithoutBillInput | GateDecisionCreateOrConnectWithoutBillInput[]
    createMany?: GateDecisionCreateManyBillInputEnvelope
    connect?: GateDecisionWhereUniqueInput | GateDecisionWhereUniqueInput[]
  }

  export type AuditReportCreateNestedManyWithoutBillInput = {
    create?: XOR<AuditReportCreateWithoutBillInput, AuditReportUncheckedCreateWithoutBillInput> | AuditReportCreateWithoutBillInput[] | AuditReportUncheckedCreateWithoutBillInput[]
    connectOrCreate?: AuditReportCreateOrConnectWithoutBillInput | AuditReportCreateOrConnectWithoutBillInput[]
    createMany?: AuditReportCreateManyBillInputEnvelope
    connect?: AuditReportWhereUniqueInput | AuditReportWhereUniqueInput[]
  }

  export type DecisionBundleCreateNestedManyWithoutBillInput = {
    create?: XOR<DecisionBundleCreateWithoutBillInput, DecisionBundleUncheckedCreateWithoutBillInput> | DecisionBundleCreateWithoutBillInput[] | DecisionBundleUncheckedCreateWithoutBillInput[]
    connectOrCreate?: DecisionBundleCreateOrConnectWithoutBillInput | DecisionBundleCreateOrConnectWithoutBillInput[]
    createMany?: DecisionBundleCreateManyBillInputEnvelope
    connect?: DecisionBundleWhereUniqueInput | DecisionBundleWhereUniqueInput[]
  }

  export type TranslationUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<TranslationCreateWithoutBillInput, TranslationUncheckedCreateWithoutBillInput> | TranslationCreateWithoutBillInput[] | TranslationUncheckedCreateWithoutBillInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutBillInput | TranslationCreateOrConnectWithoutBillInput[]
    createMany?: TranslationCreateManyBillInputEnvelope
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
  }

  export type GateDecisionUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<GateDecisionCreateWithoutBillInput, GateDecisionUncheckedCreateWithoutBillInput> | GateDecisionCreateWithoutBillInput[] | GateDecisionUncheckedCreateWithoutBillInput[]
    connectOrCreate?: GateDecisionCreateOrConnectWithoutBillInput | GateDecisionCreateOrConnectWithoutBillInput[]
    createMany?: GateDecisionCreateManyBillInputEnvelope
    connect?: GateDecisionWhereUniqueInput | GateDecisionWhereUniqueInput[]
  }

  export type AuditReportUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<AuditReportCreateWithoutBillInput, AuditReportUncheckedCreateWithoutBillInput> | AuditReportCreateWithoutBillInput[] | AuditReportUncheckedCreateWithoutBillInput[]
    connectOrCreate?: AuditReportCreateOrConnectWithoutBillInput | AuditReportCreateOrConnectWithoutBillInput[]
    createMany?: AuditReportCreateManyBillInputEnvelope
    connect?: AuditReportWhereUniqueInput | AuditReportWhereUniqueInput[]
  }

  export type DecisionBundleUncheckedCreateNestedManyWithoutBillInput = {
    create?: XOR<DecisionBundleCreateWithoutBillInput, DecisionBundleUncheckedCreateWithoutBillInput> | DecisionBundleCreateWithoutBillInput[] | DecisionBundleUncheckedCreateWithoutBillInput[]
    connectOrCreate?: DecisionBundleCreateOrConnectWithoutBillInput | DecisionBundleCreateOrConnectWithoutBillInput[]
    createMany?: DecisionBundleCreateManyBillInputEnvelope
    connect?: DecisionBundleWhereUniqueInput | DecisionBundleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TranslationUpdateManyWithoutBillNestedInput = {
    create?: XOR<TranslationCreateWithoutBillInput, TranslationUncheckedCreateWithoutBillInput> | TranslationCreateWithoutBillInput[] | TranslationUncheckedCreateWithoutBillInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutBillInput | TranslationCreateOrConnectWithoutBillInput[]
    upsert?: TranslationUpsertWithWhereUniqueWithoutBillInput | TranslationUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: TranslationCreateManyBillInputEnvelope
    set?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    disconnect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    delete?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    update?: TranslationUpdateWithWhereUniqueWithoutBillInput | TranslationUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: TranslationUpdateManyWithWhereWithoutBillInput | TranslationUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: TranslationScalarWhereInput | TranslationScalarWhereInput[]
  }

  export type GateDecisionUpdateManyWithoutBillNestedInput = {
    create?: XOR<GateDecisionCreateWithoutBillInput, GateDecisionUncheckedCreateWithoutBillInput> | GateDecisionCreateWithoutBillInput[] | GateDecisionUncheckedCreateWithoutBillInput[]
    connectOrCreate?: GateDecisionCreateOrConnectWithoutBillInput | GateDecisionCreateOrConnectWithoutBillInput[]
    upsert?: GateDecisionUpsertWithWhereUniqueWithoutBillInput | GateDecisionUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: GateDecisionCreateManyBillInputEnvelope
    set?: GateDecisionWhereUniqueInput | GateDecisionWhereUniqueInput[]
    disconnect?: GateDecisionWhereUniqueInput | GateDecisionWhereUniqueInput[]
    delete?: GateDecisionWhereUniqueInput | GateDecisionWhereUniqueInput[]
    connect?: GateDecisionWhereUniqueInput | GateDecisionWhereUniqueInput[]
    update?: GateDecisionUpdateWithWhereUniqueWithoutBillInput | GateDecisionUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: GateDecisionUpdateManyWithWhereWithoutBillInput | GateDecisionUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: GateDecisionScalarWhereInput | GateDecisionScalarWhereInput[]
  }

  export type AuditReportUpdateManyWithoutBillNestedInput = {
    create?: XOR<AuditReportCreateWithoutBillInput, AuditReportUncheckedCreateWithoutBillInput> | AuditReportCreateWithoutBillInput[] | AuditReportUncheckedCreateWithoutBillInput[]
    connectOrCreate?: AuditReportCreateOrConnectWithoutBillInput | AuditReportCreateOrConnectWithoutBillInput[]
    upsert?: AuditReportUpsertWithWhereUniqueWithoutBillInput | AuditReportUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: AuditReportCreateManyBillInputEnvelope
    set?: AuditReportWhereUniqueInput | AuditReportWhereUniqueInput[]
    disconnect?: AuditReportWhereUniqueInput | AuditReportWhereUniqueInput[]
    delete?: AuditReportWhereUniqueInput | AuditReportWhereUniqueInput[]
    connect?: AuditReportWhereUniqueInput | AuditReportWhereUniqueInput[]
    update?: AuditReportUpdateWithWhereUniqueWithoutBillInput | AuditReportUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: AuditReportUpdateManyWithWhereWithoutBillInput | AuditReportUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: AuditReportScalarWhereInput | AuditReportScalarWhereInput[]
  }

  export type DecisionBundleUpdateManyWithoutBillNestedInput = {
    create?: XOR<DecisionBundleCreateWithoutBillInput, DecisionBundleUncheckedCreateWithoutBillInput> | DecisionBundleCreateWithoutBillInput[] | DecisionBundleUncheckedCreateWithoutBillInput[]
    connectOrCreate?: DecisionBundleCreateOrConnectWithoutBillInput | DecisionBundleCreateOrConnectWithoutBillInput[]
    upsert?: DecisionBundleUpsertWithWhereUniqueWithoutBillInput | DecisionBundleUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: DecisionBundleCreateManyBillInputEnvelope
    set?: DecisionBundleWhereUniqueInput | DecisionBundleWhereUniqueInput[]
    disconnect?: DecisionBundleWhereUniqueInput | DecisionBundleWhereUniqueInput[]
    delete?: DecisionBundleWhereUniqueInput | DecisionBundleWhereUniqueInput[]
    connect?: DecisionBundleWhereUniqueInput | DecisionBundleWhereUniqueInput[]
    update?: DecisionBundleUpdateWithWhereUniqueWithoutBillInput | DecisionBundleUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: DecisionBundleUpdateManyWithWhereWithoutBillInput | DecisionBundleUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: DecisionBundleScalarWhereInput | DecisionBundleScalarWhereInput[]
  }

  export type TranslationUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<TranslationCreateWithoutBillInput, TranslationUncheckedCreateWithoutBillInput> | TranslationCreateWithoutBillInput[] | TranslationUncheckedCreateWithoutBillInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutBillInput | TranslationCreateOrConnectWithoutBillInput[]
    upsert?: TranslationUpsertWithWhereUniqueWithoutBillInput | TranslationUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: TranslationCreateManyBillInputEnvelope
    set?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    disconnect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    delete?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    update?: TranslationUpdateWithWhereUniqueWithoutBillInput | TranslationUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: TranslationUpdateManyWithWhereWithoutBillInput | TranslationUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: TranslationScalarWhereInput | TranslationScalarWhereInput[]
  }

  export type GateDecisionUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<GateDecisionCreateWithoutBillInput, GateDecisionUncheckedCreateWithoutBillInput> | GateDecisionCreateWithoutBillInput[] | GateDecisionUncheckedCreateWithoutBillInput[]
    connectOrCreate?: GateDecisionCreateOrConnectWithoutBillInput | GateDecisionCreateOrConnectWithoutBillInput[]
    upsert?: GateDecisionUpsertWithWhereUniqueWithoutBillInput | GateDecisionUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: GateDecisionCreateManyBillInputEnvelope
    set?: GateDecisionWhereUniqueInput | GateDecisionWhereUniqueInput[]
    disconnect?: GateDecisionWhereUniqueInput | GateDecisionWhereUniqueInput[]
    delete?: GateDecisionWhereUniqueInput | GateDecisionWhereUniqueInput[]
    connect?: GateDecisionWhereUniqueInput | GateDecisionWhereUniqueInput[]
    update?: GateDecisionUpdateWithWhereUniqueWithoutBillInput | GateDecisionUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: GateDecisionUpdateManyWithWhereWithoutBillInput | GateDecisionUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: GateDecisionScalarWhereInput | GateDecisionScalarWhereInput[]
  }

  export type AuditReportUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<AuditReportCreateWithoutBillInput, AuditReportUncheckedCreateWithoutBillInput> | AuditReportCreateWithoutBillInput[] | AuditReportUncheckedCreateWithoutBillInput[]
    connectOrCreate?: AuditReportCreateOrConnectWithoutBillInput | AuditReportCreateOrConnectWithoutBillInput[]
    upsert?: AuditReportUpsertWithWhereUniqueWithoutBillInput | AuditReportUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: AuditReportCreateManyBillInputEnvelope
    set?: AuditReportWhereUniqueInput | AuditReportWhereUniqueInput[]
    disconnect?: AuditReportWhereUniqueInput | AuditReportWhereUniqueInput[]
    delete?: AuditReportWhereUniqueInput | AuditReportWhereUniqueInput[]
    connect?: AuditReportWhereUniqueInput | AuditReportWhereUniqueInput[]
    update?: AuditReportUpdateWithWhereUniqueWithoutBillInput | AuditReportUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: AuditReportUpdateManyWithWhereWithoutBillInput | AuditReportUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: AuditReportScalarWhereInput | AuditReportScalarWhereInput[]
  }

  export type DecisionBundleUncheckedUpdateManyWithoutBillNestedInput = {
    create?: XOR<DecisionBundleCreateWithoutBillInput, DecisionBundleUncheckedCreateWithoutBillInput> | DecisionBundleCreateWithoutBillInput[] | DecisionBundleUncheckedCreateWithoutBillInput[]
    connectOrCreate?: DecisionBundleCreateOrConnectWithoutBillInput | DecisionBundleCreateOrConnectWithoutBillInput[]
    upsert?: DecisionBundleUpsertWithWhereUniqueWithoutBillInput | DecisionBundleUpsertWithWhereUniqueWithoutBillInput[]
    createMany?: DecisionBundleCreateManyBillInputEnvelope
    set?: DecisionBundleWhereUniqueInput | DecisionBundleWhereUniqueInput[]
    disconnect?: DecisionBundleWhereUniqueInput | DecisionBundleWhereUniqueInput[]
    delete?: DecisionBundleWhereUniqueInput | DecisionBundleWhereUniqueInput[]
    connect?: DecisionBundleWhereUniqueInput | DecisionBundleWhereUniqueInput[]
    update?: DecisionBundleUpdateWithWhereUniqueWithoutBillInput | DecisionBundleUpdateWithWhereUniqueWithoutBillInput[]
    updateMany?: DecisionBundleUpdateManyWithWhereWithoutBillInput | DecisionBundleUpdateManyWithWhereWithoutBillInput[]
    deleteMany?: DecisionBundleScalarWhereInput | DecisionBundleScalarWhereInput[]
  }

  export type BillCreateNestedOneWithoutTranslationsInput = {
    create?: XOR<BillCreateWithoutTranslationsInput, BillUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: BillCreateOrConnectWithoutTranslationsInput
    connect?: BillWhereUniqueInput
  }

  export type BillUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: XOR<BillCreateWithoutTranslationsInput, BillUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: BillCreateOrConnectWithoutTranslationsInput
    upsert?: BillUpsertWithoutTranslationsInput
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutTranslationsInput, BillUpdateWithoutTranslationsInput>, BillUncheckedUpdateWithoutTranslationsInput>
  }

  export type BillCreateNestedOneWithoutGateDecisionsInput = {
    create?: XOR<BillCreateWithoutGateDecisionsInput, BillUncheckedCreateWithoutGateDecisionsInput>
    connectOrCreate?: BillCreateOrConnectWithoutGateDecisionsInput
    connect?: BillWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BillUpdateOneRequiredWithoutGateDecisionsNestedInput = {
    create?: XOR<BillCreateWithoutGateDecisionsInput, BillUncheckedCreateWithoutGateDecisionsInput>
    connectOrCreate?: BillCreateOrConnectWithoutGateDecisionsInput
    upsert?: BillUpsertWithoutGateDecisionsInput
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutGateDecisionsInput, BillUpdateWithoutGateDecisionsInput>, BillUncheckedUpdateWithoutGateDecisionsInput>
  }

  export type BillCreateNestedOneWithoutAuditReportsInput = {
    create?: XOR<BillCreateWithoutAuditReportsInput, BillUncheckedCreateWithoutAuditReportsInput>
    connectOrCreate?: BillCreateOrConnectWithoutAuditReportsInput
    connect?: BillWhereUniqueInput
  }

  export type BillUpdateOneRequiredWithoutAuditReportsNestedInput = {
    create?: XOR<BillCreateWithoutAuditReportsInput, BillUncheckedCreateWithoutAuditReportsInput>
    connectOrCreate?: BillCreateOrConnectWithoutAuditReportsInput
    upsert?: BillUpsertWithoutAuditReportsInput
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutAuditReportsInput, BillUpdateWithoutAuditReportsInput>, BillUncheckedUpdateWithoutAuditReportsInput>
  }

  export type BillCreateNestedOneWithoutDecisionBundlesInput = {
    create?: XOR<BillCreateWithoutDecisionBundlesInput, BillUncheckedCreateWithoutDecisionBundlesInput>
    connectOrCreate?: BillCreateOrConnectWithoutDecisionBundlesInput
    connect?: BillWhereUniqueInput
  }

  export type BillUpdateOneRequiredWithoutDecisionBundlesNestedInput = {
    create?: XOR<BillCreateWithoutDecisionBundlesInput, BillUncheckedCreateWithoutDecisionBundlesInput>
    connectOrCreate?: BillCreateOrConnectWithoutDecisionBundlesInput
    upsert?: BillUpsertWithoutDecisionBundlesInput
    connect?: BillWhereUniqueInput
    update?: XOR<XOR<BillUpdateToOneWithWhereWithoutDecisionBundlesInput, BillUpdateWithoutDecisionBundlesInput>, BillUncheckedUpdateWithoutDecisionBundlesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TranslationCreateWithoutBillInput = {
    id?: string
    targetLang: string
    translatedJson: string
    provenance: string
    createdAt?: Date | string
  }

  export type TranslationUncheckedCreateWithoutBillInput = {
    id?: string
    targetLang: string
    translatedJson: string
    provenance: string
    createdAt?: Date | string
  }

  export type TranslationCreateOrConnectWithoutBillInput = {
    where: TranslationWhereUniqueInput
    create: XOR<TranslationCreateWithoutBillInput, TranslationUncheckedCreateWithoutBillInput>
  }

  export type TranslationCreateManyBillInputEnvelope = {
    data: TranslationCreateManyBillInput | TranslationCreateManyBillInput[]
  }

  export type GateDecisionCreateWithoutBillInput = {
    id?: string
    verdict: string
    deterministic?: boolean
    riskScore?: number | null
    reasons: string
    policyVersion: string
    inputHash: string
    createdAt?: Date | string
  }

  export type GateDecisionUncheckedCreateWithoutBillInput = {
    id?: string
    verdict: string
    deterministic?: boolean
    riskScore?: number | null
    reasons: string
    policyVersion: string
    inputHash: string
    createdAt?: Date | string
  }

  export type GateDecisionCreateOrConnectWithoutBillInput = {
    where: GateDecisionWhereUniqueInput
    create: XOR<GateDecisionCreateWithoutBillInput, GateDecisionUncheckedCreateWithoutBillInput>
  }

  export type GateDecisionCreateManyBillInputEnvelope = {
    data: GateDecisionCreateManyBillInput | GateDecisionCreateManyBillInput[]
  }

  export type AuditReportCreateWithoutBillInput = {
    id?: string
    verdict: string
    severity: string
    reasons: string
    auditorProvenance: string
    inputHash: string
    createdAt?: Date | string
  }

  export type AuditReportUncheckedCreateWithoutBillInput = {
    id?: string
    verdict: string
    severity: string
    reasons: string
    auditorProvenance: string
    inputHash: string
    createdAt?: Date | string
  }

  export type AuditReportCreateOrConnectWithoutBillInput = {
    where: AuditReportWhereUniqueInput
    create: XOR<AuditReportCreateWithoutBillInput, AuditReportUncheckedCreateWithoutBillInput>
  }

  export type AuditReportCreateManyBillInputEnvelope = {
    data: AuditReportCreateManyBillInput | AuditReportCreateManyBillInput[]
  }

  export type DecisionBundleCreateWithoutBillInput = {
    id?: string
    bundleJson: string
    bundleHash: string
    createdAt?: Date | string
  }

  export type DecisionBundleUncheckedCreateWithoutBillInput = {
    id?: string
    bundleJson: string
    bundleHash: string
    createdAt?: Date | string
  }

  export type DecisionBundleCreateOrConnectWithoutBillInput = {
    where: DecisionBundleWhereUniqueInput
    create: XOR<DecisionBundleCreateWithoutBillInput, DecisionBundleUncheckedCreateWithoutBillInput>
  }

  export type DecisionBundleCreateManyBillInputEnvelope = {
    data: DecisionBundleCreateManyBillInput | DecisionBundleCreateManyBillInput[]
  }

  export type TranslationUpsertWithWhereUniqueWithoutBillInput = {
    where: TranslationWhereUniqueInput
    update: XOR<TranslationUpdateWithoutBillInput, TranslationUncheckedUpdateWithoutBillInput>
    create: XOR<TranslationCreateWithoutBillInput, TranslationUncheckedCreateWithoutBillInput>
  }

  export type TranslationUpdateWithWhereUniqueWithoutBillInput = {
    where: TranslationWhereUniqueInput
    data: XOR<TranslationUpdateWithoutBillInput, TranslationUncheckedUpdateWithoutBillInput>
  }

  export type TranslationUpdateManyWithWhereWithoutBillInput = {
    where: TranslationScalarWhereInput
    data: XOR<TranslationUpdateManyMutationInput, TranslationUncheckedUpdateManyWithoutBillInput>
  }

  export type TranslationScalarWhereInput = {
    AND?: TranslationScalarWhereInput | TranslationScalarWhereInput[]
    OR?: TranslationScalarWhereInput[]
    NOT?: TranslationScalarWhereInput | TranslationScalarWhereInput[]
    id?: StringFilter<"Translation"> | string
    billId?: StringFilter<"Translation"> | string
    targetLang?: StringFilter<"Translation"> | string
    translatedJson?: StringFilter<"Translation"> | string
    provenance?: StringFilter<"Translation"> | string
    createdAt?: DateTimeFilter<"Translation"> | Date | string
  }

  export type GateDecisionUpsertWithWhereUniqueWithoutBillInput = {
    where: GateDecisionWhereUniqueInput
    update: XOR<GateDecisionUpdateWithoutBillInput, GateDecisionUncheckedUpdateWithoutBillInput>
    create: XOR<GateDecisionCreateWithoutBillInput, GateDecisionUncheckedCreateWithoutBillInput>
  }

  export type GateDecisionUpdateWithWhereUniqueWithoutBillInput = {
    where: GateDecisionWhereUniqueInput
    data: XOR<GateDecisionUpdateWithoutBillInput, GateDecisionUncheckedUpdateWithoutBillInput>
  }

  export type GateDecisionUpdateManyWithWhereWithoutBillInput = {
    where: GateDecisionScalarWhereInput
    data: XOR<GateDecisionUpdateManyMutationInput, GateDecisionUncheckedUpdateManyWithoutBillInput>
  }

  export type GateDecisionScalarWhereInput = {
    AND?: GateDecisionScalarWhereInput | GateDecisionScalarWhereInput[]
    OR?: GateDecisionScalarWhereInput[]
    NOT?: GateDecisionScalarWhereInput | GateDecisionScalarWhereInput[]
    id?: StringFilter<"GateDecision"> | string
    billId?: StringFilter<"GateDecision"> | string
    verdict?: StringFilter<"GateDecision"> | string
    deterministic?: BoolFilter<"GateDecision"> | boolean
    riskScore?: FloatNullableFilter<"GateDecision"> | number | null
    reasons?: StringFilter<"GateDecision"> | string
    policyVersion?: StringFilter<"GateDecision"> | string
    inputHash?: StringFilter<"GateDecision"> | string
    createdAt?: DateTimeFilter<"GateDecision"> | Date | string
  }

  export type AuditReportUpsertWithWhereUniqueWithoutBillInput = {
    where: AuditReportWhereUniqueInput
    update: XOR<AuditReportUpdateWithoutBillInput, AuditReportUncheckedUpdateWithoutBillInput>
    create: XOR<AuditReportCreateWithoutBillInput, AuditReportUncheckedCreateWithoutBillInput>
  }

  export type AuditReportUpdateWithWhereUniqueWithoutBillInput = {
    where: AuditReportWhereUniqueInput
    data: XOR<AuditReportUpdateWithoutBillInput, AuditReportUncheckedUpdateWithoutBillInput>
  }

  export type AuditReportUpdateManyWithWhereWithoutBillInput = {
    where: AuditReportScalarWhereInput
    data: XOR<AuditReportUpdateManyMutationInput, AuditReportUncheckedUpdateManyWithoutBillInput>
  }

  export type AuditReportScalarWhereInput = {
    AND?: AuditReportScalarWhereInput | AuditReportScalarWhereInput[]
    OR?: AuditReportScalarWhereInput[]
    NOT?: AuditReportScalarWhereInput | AuditReportScalarWhereInput[]
    id?: StringFilter<"AuditReport"> | string
    billId?: StringFilter<"AuditReport"> | string
    verdict?: StringFilter<"AuditReport"> | string
    severity?: StringFilter<"AuditReport"> | string
    reasons?: StringFilter<"AuditReport"> | string
    auditorProvenance?: StringFilter<"AuditReport"> | string
    inputHash?: StringFilter<"AuditReport"> | string
    createdAt?: DateTimeFilter<"AuditReport"> | Date | string
  }

  export type DecisionBundleUpsertWithWhereUniqueWithoutBillInput = {
    where: DecisionBundleWhereUniqueInput
    update: XOR<DecisionBundleUpdateWithoutBillInput, DecisionBundleUncheckedUpdateWithoutBillInput>
    create: XOR<DecisionBundleCreateWithoutBillInput, DecisionBundleUncheckedCreateWithoutBillInput>
  }

  export type DecisionBundleUpdateWithWhereUniqueWithoutBillInput = {
    where: DecisionBundleWhereUniqueInput
    data: XOR<DecisionBundleUpdateWithoutBillInput, DecisionBundleUncheckedUpdateWithoutBillInput>
  }

  export type DecisionBundleUpdateManyWithWhereWithoutBillInput = {
    where: DecisionBundleScalarWhereInput
    data: XOR<DecisionBundleUpdateManyMutationInput, DecisionBundleUncheckedUpdateManyWithoutBillInput>
  }

  export type DecisionBundleScalarWhereInput = {
    AND?: DecisionBundleScalarWhereInput | DecisionBundleScalarWhereInput[]
    OR?: DecisionBundleScalarWhereInput[]
    NOT?: DecisionBundleScalarWhereInput | DecisionBundleScalarWhereInput[]
    id?: StringFilter<"DecisionBundle"> | string
    billId?: StringFilter<"DecisionBundle"> | string
    bundleJson?: StringFilter<"DecisionBundle"> | string
    bundleHash?: StringFilter<"DecisionBundle"> | string
    createdAt?: DateTimeFilter<"DecisionBundle"> | Date | string
  }

  export type BillCreateWithoutTranslationsInput = {
    id?: string
    title: string
    summary: string
    contentJson: string
    sourceLang: string
    createdAt?: Date | string
    gateDecisions?: GateDecisionCreateNestedManyWithoutBillInput
    auditReports?: AuditReportCreateNestedManyWithoutBillInput
    decisionBundles?: DecisionBundleCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutTranslationsInput = {
    id?: string
    title: string
    summary: string
    contentJson: string
    sourceLang: string
    createdAt?: Date | string
    gateDecisions?: GateDecisionUncheckedCreateNestedManyWithoutBillInput
    auditReports?: AuditReportUncheckedCreateNestedManyWithoutBillInput
    decisionBundles?: DecisionBundleUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutTranslationsInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutTranslationsInput, BillUncheckedCreateWithoutTranslationsInput>
  }

  export type BillUpsertWithoutTranslationsInput = {
    update: XOR<BillUpdateWithoutTranslationsInput, BillUncheckedUpdateWithoutTranslationsInput>
    create: XOR<BillCreateWithoutTranslationsInput, BillUncheckedCreateWithoutTranslationsInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutTranslationsInput, BillUncheckedUpdateWithoutTranslationsInput>
  }

  export type BillUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    contentJson?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gateDecisions?: GateDecisionUpdateManyWithoutBillNestedInput
    auditReports?: AuditReportUpdateManyWithoutBillNestedInput
    decisionBundles?: DecisionBundleUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    contentJson?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gateDecisions?: GateDecisionUncheckedUpdateManyWithoutBillNestedInput
    auditReports?: AuditReportUncheckedUpdateManyWithoutBillNestedInput
    decisionBundles?: DecisionBundleUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillCreateWithoutGateDecisionsInput = {
    id?: string
    title: string
    summary: string
    contentJson: string
    sourceLang: string
    createdAt?: Date | string
    translations?: TranslationCreateNestedManyWithoutBillInput
    auditReports?: AuditReportCreateNestedManyWithoutBillInput
    decisionBundles?: DecisionBundleCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutGateDecisionsInput = {
    id?: string
    title: string
    summary: string
    contentJson: string
    sourceLang: string
    createdAt?: Date | string
    translations?: TranslationUncheckedCreateNestedManyWithoutBillInput
    auditReports?: AuditReportUncheckedCreateNestedManyWithoutBillInput
    decisionBundles?: DecisionBundleUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutGateDecisionsInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutGateDecisionsInput, BillUncheckedCreateWithoutGateDecisionsInput>
  }

  export type BillUpsertWithoutGateDecisionsInput = {
    update: XOR<BillUpdateWithoutGateDecisionsInput, BillUncheckedUpdateWithoutGateDecisionsInput>
    create: XOR<BillCreateWithoutGateDecisionsInput, BillUncheckedCreateWithoutGateDecisionsInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutGateDecisionsInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutGateDecisionsInput, BillUncheckedUpdateWithoutGateDecisionsInput>
  }

  export type BillUpdateWithoutGateDecisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    contentJson?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: TranslationUpdateManyWithoutBillNestedInput
    auditReports?: AuditReportUpdateManyWithoutBillNestedInput
    decisionBundles?: DecisionBundleUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutGateDecisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    contentJson?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: TranslationUncheckedUpdateManyWithoutBillNestedInput
    auditReports?: AuditReportUncheckedUpdateManyWithoutBillNestedInput
    decisionBundles?: DecisionBundleUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillCreateWithoutAuditReportsInput = {
    id?: string
    title: string
    summary: string
    contentJson: string
    sourceLang: string
    createdAt?: Date | string
    translations?: TranslationCreateNestedManyWithoutBillInput
    gateDecisions?: GateDecisionCreateNestedManyWithoutBillInput
    decisionBundles?: DecisionBundleCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutAuditReportsInput = {
    id?: string
    title: string
    summary: string
    contentJson: string
    sourceLang: string
    createdAt?: Date | string
    translations?: TranslationUncheckedCreateNestedManyWithoutBillInput
    gateDecisions?: GateDecisionUncheckedCreateNestedManyWithoutBillInput
    decisionBundles?: DecisionBundleUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutAuditReportsInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutAuditReportsInput, BillUncheckedCreateWithoutAuditReportsInput>
  }

  export type BillUpsertWithoutAuditReportsInput = {
    update: XOR<BillUpdateWithoutAuditReportsInput, BillUncheckedUpdateWithoutAuditReportsInput>
    create: XOR<BillCreateWithoutAuditReportsInput, BillUncheckedCreateWithoutAuditReportsInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutAuditReportsInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutAuditReportsInput, BillUncheckedUpdateWithoutAuditReportsInput>
  }

  export type BillUpdateWithoutAuditReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    contentJson?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: TranslationUpdateManyWithoutBillNestedInput
    gateDecisions?: GateDecisionUpdateManyWithoutBillNestedInput
    decisionBundles?: DecisionBundleUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutAuditReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    contentJson?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: TranslationUncheckedUpdateManyWithoutBillNestedInput
    gateDecisions?: GateDecisionUncheckedUpdateManyWithoutBillNestedInput
    decisionBundles?: DecisionBundleUncheckedUpdateManyWithoutBillNestedInput
  }

  export type BillCreateWithoutDecisionBundlesInput = {
    id?: string
    title: string
    summary: string
    contentJson: string
    sourceLang: string
    createdAt?: Date | string
    translations?: TranslationCreateNestedManyWithoutBillInput
    gateDecisions?: GateDecisionCreateNestedManyWithoutBillInput
    auditReports?: AuditReportCreateNestedManyWithoutBillInput
  }

  export type BillUncheckedCreateWithoutDecisionBundlesInput = {
    id?: string
    title: string
    summary: string
    contentJson: string
    sourceLang: string
    createdAt?: Date | string
    translations?: TranslationUncheckedCreateNestedManyWithoutBillInput
    gateDecisions?: GateDecisionUncheckedCreateNestedManyWithoutBillInput
    auditReports?: AuditReportUncheckedCreateNestedManyWithoutBillInput
  }

  export type BillCreateOrConnectWithoutDecisionBundlesInput = {
    where: BillWhereUniqueInput
    create: XOR<BillCreateWithoutDecisionBundlesInput, BillUncheckedCreateWithoutDecisionBundlesInput>
  }

  export type BillUpsertWithoutDecisionBundlesInput = {
    update: XOR<BillUpdateWithoutDecisionBundlesInput, BillUncheckedUpdateWithoutDecisionBundlesInput>
    create: XOR<BillCreateWithoutDecisionBundlesInput, BillUncheckedCreateWithoutDecisionBundlesInput>
    where?: BillWhereInput
  }

  export type BillUpdateToOneWithWhereWithoutDecisionBundlesInput = {
    where?: BillWhereInput
    data: XOR<BillUpdateWithoutDecisionBundlesInput, BillUncheckedUpdateWithoutDecisionBundlesInput>
  }

  export type BillUpdateWithoutDecisionBundlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    contentJson?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: TranslationUpdateManyWithoutBillNestedInput
    gateDecisions?: GateDecisionUpdateManyWithoutBillNestedInput
    auditReports?: AuditReportUpdateManyWithoutBillNestedInput
  }

  export type BillUncheckedUpdateWithoutDecisionBundlesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    contentJson?: StringFieldUpdateOperationsInput | string
    sourceLang?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: TranslationUncheckedUpdateManyWithoutBillNestedInput
    gateDecisions?: GateDecisionUncheckedUpdateManyWithoutBillNestedInput
    auditReports?: AuditReportUncheckedUpdateManyWithoutBillNestedInput
  }

  export type TranslationCreateManyBillInput = {
    id?: string
    targetLang: string
    translatedJson: string
    provenance: string
    createdAt?: Date | string
  }

  export type GateDecisionCreateManyBillInput = {
    id?: string
    verdict: string
    deterministic?: boolean
    riskScore?: number | null
    reasons: string
    policyVersion: string
    inputHash: string
    createdAt?: Date | string
  }

  export type AuditReportCreateManyBillInput = {
    id?: string
    verdict: string
    severity: string
    reasons: string
    auditorProvenance: string
    inputHash: string
    createdAt?: Date | string
  }

  export type DecisionBundleCreateManyBillInput = {
    id?: string
    bundleJson: string
    bundleHash: string
    createdAt?: Date | string
  }

  export type TranslationUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translatedJson?: StringFieldUpdateOperationsInput | string
    provenance?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationUncheckedUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translatedJson?: StringFieldUpdateOperationsInput | string
    provenance?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationUncheckedUpdateManyWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    targetLang?: StringFieldUpdateOperationsInput | string
    translatedJson?: StringFieldUpdateOperationsInput | string
    provenance?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GateDecisionUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    verdict?: StringFieldUpdateOperationsInput | string
    deterministic?: BoolFieldUpdateOperationsInput | boolean
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    reasons?: StringFieldUpdateOperationsInput | string
    policyVersion?: StringFieldUpdateOperationsInput | string
    inputHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GateDecisionUncheckedUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    verdict?: StringFieldUpdateOperationsInput | string
    deterministic?: BoolFieldUpdateOperationsInput | boolean
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    reasons?: StringFieldUpdateOperationsInput | string
    policyVersion?: StringFieldUpdateOperationsInput | string
    inputHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GateDecisionUncheckedUpdateManyWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    verdict?: StringFieldUpdateOperationsInput | string
    deterministic?: BoolFieldUpdateOperationsInput | boolean
    riskScore?: NullableFloatFieldUpdateOperationsInput | number | null
    reasons?: StringFieldUpdateOperationsInput | string
    policyVersion?: StringFieldUpdateOperationsInput | string
    inputHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditReportUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    verdict?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    reasons?: StringFieldUpdateOperationsInput | string
    auditorProvenance?: StringFieldUpdateOperationsInput | string
    inputHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditReportUncheckedUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    verdict?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    reasons?: StringFieldUpdateOperationsInput | string
    auditorProvenance?: StringFieldUpdateOperationsInput | string
    inputHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditReportUncheckedUpdateManyWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    verdict?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    reasons?: StringFieldUpdateOperationsInput | string
    auditorProvenance?: StringFieldUpdateOperationsInput | string
    inputHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionBundleUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    bundleJson?: StringFieldUpdateOperationsInput | string
    bundleHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionBundleUncheckedUpdateWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    bundleJson?: StringFieldUpdateOperationsInput | string
    bundleHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DecisionBundleUncheckedUpdateManyWithoutBillInput = {
    id?: StringFieldUpdateOperationsInput | string
    bundleJson?: StringFieldUpdateOperationsInput | string
    bundleHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BillCountOutputTypeDefaultArgs instead
     */
    export type BillCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BillCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BillDefaultArgs instead
     */
    export type BillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BillDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TranslationDefaultArgs instead
     */
    export type TranslationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TranslationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GateDecisionDefaultArgs instead
     */
    export type GateDecisionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GateDecisionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AuditReportDefaultArgs instead
     */
    export type AuditReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AuditReportDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DecisionBundleDefaultArgs instead
     */
    export type DecisionBundleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DecisionBundleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventLogDefaultArgs instead
     */
    export type EventLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MerkleSnapshotDefaultArgs instead
     */
    export type MerkleSnapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MerkleSnapshotDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemStateDefaultArgs instead
     */
    export type SystemStateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemStateDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmergencyRequestDefaultArgs instead
     */
    export type EmergencyRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmergencyRequestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AgentDefaultArgs instead
     */
    export type AgentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AgentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EpochDefaultArgs instead
     */
    export type EpochArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EpochDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AgentEpochScoreDefaultArgs instead
     */
    export type AgentEpochScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AgentEpochScoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AllocationLedgerDefaultArgs instead
     */
    export type AllocationLedgerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AllocationLedgerDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}