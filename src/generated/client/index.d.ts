
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
 * Model Artifact
 * 
 */
export type Artifact = $Result.DefaultSelection<Prisma.$ArtifactPayload>
/**
 * Model LedgerEvent
 * 
 */
export type LedgerEvent = $Result.DefaultSelection<Prisma.$LedgerEventPayload>
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
 * Model AgentEpochCounters
 * 
 */
export type AgentEpochCounters = $Result.DefaultSelection<Prisma.$AgentEpochCountersPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Actor
 * 
 */
export type Actor = $Result.DefaultSelection<Prisma.$ActorPayload>
/**
 * Model RoomMessage
 * 
 */
export type RoomMessage = $Result.DefaultSelection<Prisma.$RoomMessagePayload>

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
   * `prisma.artifact`: Exposes CRUD operations for the **Artifact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artifacts
    * const artifacts = await prisma.artifact.findMany()
    * ```
    */
  get artifact(): Prisma.ArtifactDelegate<ExtArgs>;

  /**
   * `prisma.ledgerEvent`: Exposes CRUD operations for the **LedgerEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LedgerEvents
    * const ledgerEvents = await prisma.ledgerEvent.findMany()
    * ```
    */
  get ledgerEvent(): Prisma.LedgerEventDelegate<ExtArgs>;

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
   * `prisma.agentEpochCounters`: Exposes CRUD operations for the **AgentEpochCounters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgentEpochCounters
    * const agentEpochCounters = await prisma.agentEpochCounters.findMany()
    * ```
    */
  get agentEpochCounters(): Prisma.AgentEpochCountersDelegate<ExtArgs>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs>;

  /**
   * `prisma.actor`: Exposes CRUD operations for the **Actor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actors
    * const actors = await prisma.actor.findMany()
    * ```
    */
  get actor(): Prisma.ActorDelegate<ExtArgs>;

  /**
   * `prisma.roomMessage`: Exposes CRUD operations for the **RoomMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomMessages
    * const roomMessages = await prisma.roomMessage.findMany()
    * ```
    */
  get roomMessage(): Prisma.RoomMessageDelegate<ExtArgs>;
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "bill" | "artifact" | "ledgerEvent" | "agent" | "epoch" | "agentEpochScore" | "agentEpochCounters" | "room" | "actor" | "roomMessage"
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
      Artifact: {
        payload: Prisma.$ArtifactPayload<ExtArgs>
        fields: Prisma.ArtifactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtifactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtifactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          findFirst: {
            args: Prisma.ArtifactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtifactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          findMany: {
            args: Prisma.ArtifactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>[]
          }
          create: {
            args: Prisma.ArtifactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          createMany: {
            args: Prisma.ArtifactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtifactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>[]
          }
          delete: {
            args: Prisma.ArtifactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          update: {
            args: Prisma.ArtifactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          deleteMany: {
            args: Prisma.ArtifactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtifactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ArtifactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtifactPayload>
          }
          aggregate: {
            args: Prisma.ArtifactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtifact>
          }
          groupBy: {
            args: Prisma.ArtifactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtifactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtifactCountArgs<ExtArgs>
            result: $Utils.Optional<ArtifactCountAggregateOutputType> | number
          }
        }
      }
      LedgerEvent: {
        payload: Prisma.$LedgerEventPayload<ExtArgs>
        fields: Prisma.LedgerEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LedgerEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LedgerEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEventPayload>
          }
          findFirst: {
            args: Prisma.LedgerEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LedgerEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEventPayload>
          }
          findMany: {
            args: Prisma.LedgerEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEventPayload>[]
          }
          create: {
            args: Prisma.LedgerEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEventPayload>
          }
          createMany: {
            args: Prisma.LedgerEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LedgerEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEventPayload>[]
          }
          delete: {
            args: Prisma.LedgerEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEventPayload>
          }
          update: {
            args: Prisma.LedgerEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEventPayload>
          }
          deleteMany: {
            args: Prisma.LedgerEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LedgerEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LedgerEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LedgerEventPayload>
          }
          aggregate: {
            args: Prisma.LedgerEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLedgerEvent>
          }
          groupBy: {
            args: Prisma.LedgerEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<LedgerEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.LedgerEventCountArgs<ExtArgs>
            result: $Utils.Optional<LedgerEventCountAggregateOutputType> | number
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
      AgentEpochCounters: {
        payload: Prisma.$AgentEpochCountersPayload<ExtArgs>
        fields: Prisma.AgentEpochCountersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentEpochCountersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochCountersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentEpochCountersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochCountersPayload>
          }
          findFirst: {
            args: Prisma.AgentEpochCountersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochCountersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentEpochCountersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochCountersPayload>
          }
          findMany: {
            args: Prisma.AgentEpochCountersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochCountersPayload>[]
          }
          create: {
            args: Prisma.AgentEpochCountersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochCountersPayload>
          }
          createMany: {
            args: Prisma.AgentEpochCountersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentEpochCountersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochCountersPayload>[]
          }
          delete: {
            args: Prisma.AgentEpochCountersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochCountersPayload>
          }
          update: {
            args: Prisma.AgentEpochCountersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochCountersPayload>
          }
          deleteMany: {
            args: Prisma.AgentEpochCountersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentEpochCountersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AgentEpochCountersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentEpochCountersPayload>
          }
          aggregate: {
            args: Prisma.AgentEpochCountersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgentEpochCounters>
          }
          groupBy: {
            args: Prisma.AgentEpochCountersGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentEpochCountersGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentEpochCountersCountArgs<ExtArgs>
            result: $Utils.Optional<AgentEpochCountersCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Actor: {
        payload: Prisma.$ActorPayload<ExtArgs>
        fields: Prisma.ActorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>
          }
          findFirst: {
            args: Prisma.ActorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>
          }
          findMany: {
            args: Prisma.ActorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>[]
          }
          create: {
            args: Prisma.ActorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>
          }
          createMany: {
            args: Prisma.ActorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>[]
          }
          delete: {
            args: Prisma.ActorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>
          }
          update: {
            args: Prisma.ActorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>
          }
          deleteMany: {
            args: Prisma.ActorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorPayload>
          }
          aggregate: {
            args: Prisma.ActorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActor>
          }
          groupBy: {
            args: Prisma.ActorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActorCountArgs<ExtArgs>
            result: $Utils.Optional<ActorCountAggregateOutputType> | number
          }
        }
      }
      RoomMessage: {
        payload: Prisma.$RoomMessagePayload<ExtArgs>
        fields: Prisma.RoomMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>
          }
          findFirst: {
            args: Prisma.RoomMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>
          }
          findMany: {
            args: Prisma.RoomMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>[]
          }
          create: {
            args: Prisma.RoomMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>
          }
          createMany: {
            args: Prisma.RoomMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>[]
          }
          delete: {
            args: Prisma.RoomMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>
          }
          update: {
            args: Prisma.RoomMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>
          }
          deleteMany: {
            args: Prisma.RoomMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomMessagePayload>
          }
          aggregate: {
            args: Prisma.RoomMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomMessage>
          }
          groupBy: {
            args: Prisma.RoomMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomMessageCountArgs<ExtArgs>
            result: $Utils.Optional<RoomMessageCountAggregateOutputType> | number
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
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    actors: number
    messages: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actors?: boolean | RoomCountOutputTypeCountActorsArgs
    messages?: boolean | RoomCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountActorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActorWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMessageWhereInput
  }


  /**
   * Count Type ActorCountOutputType
   */

  export type ActorCountOutputType = {
    messages: number
  }

  export type ActorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ActorCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ActorCountOutputType without action
   */
  export type ActorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorCountOutputType
     */
    select?: ActorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActorCountOutputType without action
   */
  export type ActorCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMessageWhereInput
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
    bill_id: string | null
    currentState: string | null
    createdAt: Date | null
    updatedAt: Date | null
    latestDraftArtifactId: string | null
    latestTranslationArtifactId: string | null
    latestEvidenceArtifactId: string | null
    latestGateArtifactId: string | null
    latestAuditArtifactId: string | null
    latestBundleArtifactId: string | null
    publishedBundleArtifactId: string | null
  }

  export type BillMaxAggregateOutputType = {
    bill_id: string | null
    currentState: string | null
    createdAt: Date | null
    updatedAt: Date | null
    latestDraftArtifactId: string | null
    latestTranslationArtifactId: string | null
    latestEvidenceArtifactId: string | null
    latestGateArtifactId: string | null
    latestAuditArtifactId: string | null
    latestBundleArtifactId: string | null
    publishedBundleArtifactId: string | null
  }

  export type BillCountAggregateOutputType = {
    bill_id: number
    currentState: number
    createdAt: number
    updatedAt: number
    latestDraftArtifactId: number
    latestTranslationArtifactId: number
    latestEvidenceArtifactId: number
    latestGateArtifactId: number
    latestAuditArtifactId: number
    latestBundleArtifactId: number
    publishedBundleArtifactId: number
    _all: number
  }


  export type BillMinAggregateInputType = {
    bill_id?: true
    currentState?: true
    createdAt?: true
    updatedAt?: true
    latestDraftArtifactId?: true
    latestTranslationArtifactId?: true
    latestEvidenceArtifactId?: true
    latestGateArtifactId?: true
    latestAuditArtifactId?: true
    latestBundleArtifactId?: true
    publishedBundleArtifactId?: true
  }

  export type BillMaxAggregateInputType = {
    bill_id?: true
    currentState?: true
    createdAt?: true
    updatedAt?: true
    latestDraftArtifactId?: true
    latestTranslationArtifactId?: true
    latestEvidenceArtifactId?: true
    latestGateArtifactId?: true
    latestAuditArtifactId?: true
    latestBundleArtifactId?: true
    publishedBundleArtifactId?: true
  }

  export type BillCountAggregateInputType = {
    bill_id?: true
    currentState?: true
    createdAt?: true
    updatedAt?: true
    latestDraftArtifactId?: true
    latestTranslationArtifactId?: true
    latestEvidenceArtifactId?: true
    latestGateArtifactId?: true
    latestAuditArtifactId?: true
    latestBundleArtifactId?: true
    publishedBundleArtifactId?: true
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
    bill_id: string
    currentState: string
    createdAt: Date
    updatedAt: Date
    latestDraftArtifactId: string | null
    latestTranslationArtifactId: string | null
    latestEvidenceArtifactId: string | null
    latestGateArtifactId: string | null
    latestAuditArtifactId: string | null
    latestBundleArtifactId: string | null
    publishedBundleArtifactId: string | null
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
    bill_id?: boolean
    currentState?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    latestDraftArtifactId?: boolean
    latestTranslationArtifactId?: boolean
    latestEvidenceArtifactId?: boolean
    latestGateArtifactId?: boolean
    latestAuditArtifactId?: boolean
    latestBundleArtifactId?: boolean
    publishedBundleArtifactId?: boolean
  }, ExtArgs["result"]["bill"]>

  export type BillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bill_id?: boolean
    currentState?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    latestDraftArtifactId?: boolean
    latestTranslationArtifactId?: boolean
    latestEvidenceArtifactId?: boolean
    latestGateArtifactId?: boolean
    latestAuditArtifactId?: boolean
    latestBundleArtifactId?: boolean
    publishedBundleArtifactId?: boolean
  }, ExtArgs["result"]["bill"]>

  export type BillSelectScalar = {
    bill_id?: boolean
    currentState?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    latestDraftArtifactId?: boolean
    latestTranslationArtifactId?: boolean
    latestEvidenceArtifactId?: boolean
    latestGateArtifactId?: boolean
    latestAuditArtifactId?: boolean
    latestBundleArtifactId?: boolean
    publishedBundleArtifactId?: boolean
  }


  export type $BillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bill"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      bill_id: string
      currentState: string
      createdAt: Date
      updatedAt: Date
      latestDraftArtifactId: string | null
      latestTranslationArtifactId: string | null
      latestEvidenceArtifactId: string | null
      latestGateArtifactId: string | null
      latestAuditArtifactId: string | null
      latestBundleArtifactId: string | null
      publishedBundleArtifactId: string | null
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
     * // Only select the `bill_id`
     * const billWithBill_idOnly = await prisma.bill.findMany({ select: { bill_id: true } })
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
     * // Create many Bills and only return the `bill_id`
     * const billWithBill_idOnly = await prisma.bill.createManyAndReturn({ 
     *   select: { bill_id: true },
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
    readonly bill_id: FieldRef<"Bill", 'String'>
    readonly currentState: FieldRef<"Bill", 'String'>
    readonly createdAt: FieldRef<"Bill", 'DateTime'>
    readonly updatedAt: FieldRef<"Bill", 'DateTime'>
    readonly latestDraftArtifactId: FieldRef<"Bill", 'String'>
    readonly latestTranslationArtifactId: FieldRef<"Bill", 'String'>
    readonly latestEvidenceArtifactId: FieldRef<"Bill", 'String'>
    readonly latestGateArtifactId: FieldRef<"Bill", 'String'>
    readonly latestAuditArtifactId: FieldRef<"Bill", 'String'>
    readonly latestBundleArtifactId: FieldRef<"Bill", 'String'>
    readonly publishedBundleArtifactId: FieldRef<"Bill", 'String'>
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
   * Bill without action
   */
  export type BillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bill
     */
    select?: BillSelect<ExtArgs> | null
  }


  /**
   * Model Artifact
   */

  export type AggregateArtifact = {
    _count: ArtifactCountAggregateOutputType | null
    _avg: ArtifactAvgAggregateOutputType | null
    _sum: ArtifactSumAggregateOutputType | null
    _min: ArtifactMinAggregateOutputType | null
    _max: ArtifactMaxAggregateOutputType | null
  }

  export type ArtifactAvgAggregateOutputType = {
    bodySizeBytes: number | null
  }

  export type ArtifactSumAggregateOutputType = {
    bodySizeBytes: number | null
  }

  export type ArtifactMinAggregateOutputType = {
    artifactId: string | null
    artifactType: string | null
    version: string | null
    billId: string | null
    createdAt: Date | null
    createdBy: string | null
    contentHash: string | null
    hashCanon: string | null
    bodyJson: string | null
    bodySizeBytes: number | null
  }

  export type ArtifactMaxAggregateOutputType = {
    artifactId: string | null
    artifactType: string | null
    version: string | null
    billId: string | null
    createdAt: Date | null
    createdBy: string | null
    contentHash: string | null
    hashCanon: string | null
    bodyJson: string | null
    bodySizeBytes: number | null
  }

  export type ArtifactCountAggregateOutputType = {
    artifactId: number
    artifactType: number
    version: number
    billId: number
    createdAt: number
    createdBy: number
    contentHash: number
    hashCanon: number
    bodyJson: number
    bodySizeBytes: number
    _all: number
  }


  export type ArtifactAvgAggregateInputType = {
    bodySizeBytes?: true
  }

  export type ArtifactSumAggregateInputType = {
    bodySizeBytes?: true
  }

  export type ArtifactMinAggregateInputType = {
    artifactId?: true
    artifactType?: true
    version?: true
    billId?: true
    createdAt?: true
    createdBy?: true
    contentHash?: true
    hashCanon?: true
    bodyJson?: true
    bodySizeBytes?: true
  }

  export type ArtifactMaxAggregateInputType = {
    artifactId?: true
    artifactType?: true
    version?: true
    billId?: true
    createdAt?: true
    createdBy?: true
    contentHash?: true
    hashCanon?: true
    bodyJson?: true
    bodySizeBytes?: true
  }

  export type ArtifactCountAggregateInputType = {
    artifactId?: true
    artifactType?: true
    version?: true
    billId?: true
    createdAt?: true
    createdBy?: true
    contentHash?: true
    hashCanon?: true
    bodyJson?: true
    bodySizeBytes?: true
    _all?: true
  }

  export type ArtifactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artifact to aggregate.
     */
    where?: ArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artifacts to fetch.
     */
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artifacts
    **/
    _count?: true | ArtifactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtifactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtifactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtifactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtifactMaxAggregateInputType
  }

  export type GetArtifactAggregateType<T extends ArtifactAggregateArgs> = {
        [P in keyof T & keyof AggregateArtifact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtifact[P]>
      : GetScalarType<T[P], AggregateArtifact[P]>
  }




  export type ArtifactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtifactWhereInput
    orderBy?: ArtifactOrderByWithAggregationInput | ArtifactOrderByWithAggregationInput[]
    by: ArtifactScalarFieldEnum[] | ArtifactScalarFieldEnum
    having?: ArtifactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtifactCountAggregateInputType | true
    _avg?: ArtifactAvgAggregateInputType
    _sum?: ArtifactSumAggregateInputType
    _min?: ArtifactMinAggregateInputType
    _max?: ArtifactMaxAggregateInputType
  }

  export type ArtifactGroupByOutputType = {
    artifactId: string
    artifactType: string
    version: string
    billId: string | null
    createdAt: Date
    createdBy: string
    contentHash: string
    hashCanon: string
    bodyJson: string
    bodySizeBytes: number | null
    _count: ArtifactCountAggregateOutputType | null
    _avg: ArtifactAvgAggregateOutputType | null
    _sum: ArtifactSumAggregateOutputType | null
    _min: ArtifactMinAggregateOutputType | null
    _max: ArtifactMaxAggregateOutputType | null
  }

  type GetArtifactGroupByPayload<T extends ArtifactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtifactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtifactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtifactGroupByOutputType[P]>
            : GetScalarType<T[P], ArtifactGroupByOutputType[P]>
        }
      >
    >


  export type ArtifactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artifactId?: boolean
    artifactType?: boolean
    version?: boolean
    billId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    contentHash?: boolean
    hashCanon?: boolean
    bodyJson?: boolean
    bodySizeBytes?: boolean
  }, ExtArgs["result"]["artifact"]>

  export type ArtifactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    artifactId?: boolean
    artifactType?: boolean
    version?: boolean
    billId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    contentHash?: boolean
    hashCanon?: boolean
    bodyJson?: boolean
    bodySizeBytes?: boolean
  }, ExtArgs["result"]["artifact"]>

  export type ArtifactSelectScalar = {
    artifactId?: boolean
    artifactType?: boolean
    version?: boolean
    billId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    contentHash?: boolean
    hashCanon?: boolean
    bodyJson?: boolean
    bodySizeBytes?: boolean
  }


  export type $ArtifactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artifact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      artifactId: string
      artifactType: string
      version: string
      billId: string | null
      createdAt: Date
      createdBy: string
      contentHash: string
      hashCanon: string
      bodyJson: string
      bodySizeBytes: number | null
    }, ExtArgs["result"]["artifact"]>
    composites: {}
  }

  type ArtifactGetPayload<S extends boolean | null | undefined | ArtifactDefaultArgs> = $Result.GetResult<Prisma.$ArtifactPayload, S>

  type ArtifactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArtifactFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArtifactCountAggregateInputType | true
    }

  export interface ArtifactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artifact'], meta: { name: 'Artifact' } }
    /**
     * Find zero or one Artifact that matches the filter.
     * @param {ArtifactFindUniqueArgs} args - Arguments to find a Artifact
     * @example
     * // Get one Artifact
     * const artifact = await prisma.artifact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtifactFindUniqueArgs>(args: SelectSubset<T, ArtifactFindUniqueArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Artifact that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ArtifactFindUniqueOrThrowArgs} args - Arguments to find a Artifact
     * @example
     * // Get one Artifact
     * const artifact = await prisma.artifact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtifactFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtifactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Artifact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactFindFirstArgs} args - Arguments to find a Artifact
     * @example
     * // Get one Artifact
     * const artifact = await prisma.artifact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtifactFindFirstArgs>(args?: SelectSubset<T, ArtifactFindFirstArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Artifact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactFindFirstOrThrowArgs} args - Arguments to find a Artifact
     * @example
     * // Get one Artifact
     * const artifact = await prisma.artifact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtifactFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtifactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Artifacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artifacts
     * const artifacts = await prisma.artifact.findMany()
     * 
     * // Get first 10 Artifacts
     * const artifacts = await prisma.artifact.findMany({ take: 10 })
     * 
     * // Only select the `artifactId`
     * const artifactWithArtifactIdOnly = await prisma.artifact.findMany({ select: { artifactId: true } })
     * 
     */
    findMany<T extends ArtifactFindManyArgs>(args?: SelectSubset<T, ArtifactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Artifact.
     * @param {ArtifactCreateArgs} args - Arguments to create a Artifact.
     * @example
     * // Create one Artifact
     * const Artifact = await prisma.artifact.create({
     *   data: {
     *     // ... data to create a Artifact
     *   }
     * })
     * 
     */
    create<T extends ArtifactCreateArgs>(args: SelectSubset<T, ArtifactCreateArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Artifacts.
     * @param {ArtifactCreateManyArgs} args - Arguments to create many Artifacts.
     * @example
     * // Create many Artifacts
     * const artifact = await prisma.artifact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtifactCreateManyArgs>(args?: SelectSubset<T, ArtifactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artifacts and returns the data saved in the database.
     * @param {ArtifactCreateManyAndReturnArgs} args - Arguments to create many Artifacts.
     * @example
     * // Create many Artifacts
     * const artifact = await prisma.artifact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artifacts and only return the `artifactId`
     * const artifactWithArtifactIdOnly = await prisma.artifact.createManyAndReturn({ 
     *   select: { artifactId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtifactCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtifactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Artifact.
     * @param {ArtifactDeleteArgs} args - Arguments to delete one Artifact.
     * @example
     * // Delete one Artifact
     * const Artifact = await prisma.artifact.delete({
     *   where: {
     *     // ... filter to delete one Artifact
     *   }
     * })
     * 
     */
    delete<T extends ArtifactDeleteArgs>(args: SelectSubset<T, ArtifactDeleteArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Artifact.
     * @param {ArtifactUpdateArgs} args - Arguments to update one Artifact.
     * @example
     * // Update one Artifact
     * const artifact = await prisma.artifact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtifactUpdateArgs>(args: SelectSubset<T, ArtifactUpdateArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Artifacts.
     * @param {ArtifactDeleteManyArgs} args - Arguments to filter Artifacts to delete.
     * @example
     * // Delete a few Artifacts
     * const { count } = await prisma.artifact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtifactDeleteManyArgs>(args?: SelectSubset<T, ArtifactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artifacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artifacts
     * const artifact = await prisma.artifact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtifactUpdateManyArgs>(args: SelectSubset<T, ArtifactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artifact.
     * @param {ArtifactUpsertArgs} args - Arguments to update or create a Artifact.
     * @example
     * // Update or create a Artifact
     * const artifact = await prisma.artifact.upsert({
     *   create: {
     *     // ... data to create a Artifact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artifact we want to update
     *   }
     * })
     */
    upsert<T extends ArtifactUpsertArgs>(args: SelectSubset<T, ArtifactUpsertArgs<ExtArgs>>): Prisma__ArtifactClient<$Result.GetResult<Prisma.$ArtifactPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Artifacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactCountArgs} args - Arguments to filter Artifacts to count.
     * @example
     * // Count the number of Artifacts
     * const count = await prisma.artifact.count({
     *   where: {
     *     // ... the filter for the Artifacts we want to count
     *   }
     * })
    **/
    count<T extends ArtifactCountArgs>(
      args?: Subset<T, ArtifactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtifactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artifact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtifactAggregateArgs>(args: Subset<T, ArtifactAggregateArgs>): Prisma.PrismaPromise<GetArtifactAggregateType<T>>

    /**
     * Group by Artifact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtifactGroupByArgs} args - Group by arguments.
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
      T extends ArtifactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtifactGroupByArgs['orderBy'] }
        : { orderBy?: ArtifactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtifactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtifactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artifact model
   */
  readonly fields: ArtifactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artifact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtifactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Artifact model
   */ 
  interface ArtifactFieldRefs {
    readonly artifactId: FieldRef<"Artifact", 'String'>
    readonly artifactType: FieldRef<"Artifact", 'String'>
    readonly version: FieldRef<"Artifact", 'String'>
    readonly billId: FieldRef<"Artifact", 'String'>
    readonly createdAt: FieldRef<"Artifact", 'DateTime'>
    readonly createdBy: FieldRef<"Artifact", 'String'>
    readonly contentHash: FieldRef<"Artifact", 'String'>
    readonly hashCanon: FieldRef<"Artifact", 'String'>
    readonly bodyJson: FieldRef<"Artifact", 'String'>
    readonly bodySizeBytes: FieldRef<"Artifact", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Artifact findUnique
   */
  export type ArtifactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Filter, which Artifact to fetch.
     */
    where: ArtifactWhereUniqueInput
  }

  /**
   * Artifact findUniqueOrThrow
   */
  export type ArtifactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Filter, which Artifact to fetch.
     */
    where: ArtifactWhereUniqueInput
  }

  /**
   * Artifact findFirst
   */
  export type ArtifactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Filter, which Artifact to fetch.
     */
    where?: ArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artifacts to fetch.
     */
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artifacts.
     */
    cursor?: ArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artifacts.
     */
    distinct?: ArtifactScalarFieldEnum | ArtifactScalarFieldEnum[]
  }

  /**
   * Artifact findFirstOrThrow
   */
  export type ArtifactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Filter, which Artifact to fetch.
     */
    where?: ArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artifacts to fetch.
     */
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artifacts.
     */
    cursor?: ArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artifacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artifacts.
     */
    distinct?: ArtifactScalarFieldEnum | ArtifactScalarFieldEnum[]
  }

  /**
   * Artifact findMany
   */
  export type ArtifactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Filter, which Artifacts to fetch.
     */
    where?: ArtifactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artifacts to fetch.
     */
    orderBy?: ArtifactOrderByWithRelationInput | ArtifactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artifacts.
     */
    cursor?: ArtifactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artifacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artifacts.
     */
    skip?: number
    distinct?: ArtifactScalarFieldEnum | ArtifactScalarFieldEnum[]
  }

  /**
   * Artifact create
   */
  export type ArtifactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * The data needed to create a Artifact.
     */
    data: XOR<ArtifactCreateInput, ArtifactUncheckedCreateInput>
  }

  /**
   * Artifact createMany
   */
  export type ArtifactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artifacts.
     */
    data: ArtifactCreateManyInput | ArtifactCreateManyInput[]
  }

  /**
   * Artifact createManyAndReturn
   */
  export type ArtifactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Artifacts.
     */
    data: ArtifactCreateManyInput | ArtifactCreateManyInput[]
  }

  /**
   * Artifact update
   */
  export type ArtifactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * The data needed to update a Artifact.
     */
    data: XOR<ArtifactUpdateInput, ArtifactUncheckedUpdateInput>
    /**
     * Choose, which Artifact to update.
     */
    where: ArtifactWhereUniqueInput
  }

  /**
   * Artifact updateMany
   */
  export type ArtifactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artifacts.
     */
    data: XOR<ArtifactUpdateManyMutationInput, ArtifactUncheckedUpdateManyInput>
    /**
     * Filter which Artifacts to update
     */
    where?: ArtifactWhereInput
  }

  /**
   * Artifact upsert
   */
  export type ArtifactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * The filter to search for the Artifact to update in case it exists.
     */
    where: ArtifactWhereUniqueInput
    /**
     * In case the Artifact found by the `where` argument doesn't exist, create a new Artifact with this data.
     */
    create: XOR<ArtifactCreateInput, ArtifactUncheckedCreateInput>
    /**
     * In case the Artifact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtifactUpdateInput, ArtifactUncheckedUpdateInput>
  }

  /**
   * Artifact delete
   */
  export type ArtifactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
    /**
     * Filter which Artifact to delete.
     */
    where: ArtifactWhereUniqueInput
  }

  /**
   * Artifact deleteMany
   */
  export type ArtifactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artifacts to delete
     */
    where?: ArtifactWhereInput
  }

  /**
   * Artifact without action
   */
  export type ArtifactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artifact
     */
    select?: ArtifactSelect<ExtArgs> | null
  }


  /**
   * Model LedgerEvent
   */

  export type AggregateLedgerEvent = {
    _count: LedgerEventCountAggregateOutputType | null
    _min: LedgerEventMinAggregateOutputType | null
    _max: LedgerEventMaxAggregateOutputType | null
  }

  export type LedgerEventMinAggregateOutputType = {
    eventId: string | null
    timestamp: Date | null
    actorId: string | null
    action: string | null
    entityRefs: string | null
    dataHash: string | null
    prevEventHash: string | null
    eventHash: string | null
  }

  export type LedgerEventMaxAggregateOutputType = {
    eventId: string | null
    timestamp: Date | null
    actorId: string | null
    action: string | null
    entityRefs: string | null
    dataHash: string | null
    prevEventHash: string | null
    eventHash: string | null
  }

  export type LedgerEventCountAggregateOutputType = {
    eventId: number
    timestamp: number
    actorId: number
    action: number
    entityRefs: number
    dataHash: number
    prevEventHash: number
    eventHash: number
    _all: number
  }


  export type LedgerEventMinAggregateInputType = {
    eventId?: true
    timestamp?: true
    actorId?: true
    action?: true
    entityRefs?: true
    dataHash?: true
    prevEventHash?: true
    eventHash?: true
  }

  export type LedgerEventMaxAggregateInputType = {
    eventId?: true
    timestamp?: true
    actorId?: true
    action?: true
    entityRefs?: true
    dataHash?: true
    prevEventHash?: true
    eventHash?: true
  }

  export type LedgerEventCountAggregateInputType = {
    eventId?: true
    timestamp?: true
    actorId?: true
    action?: true
    entityRefs?: true
    dataHash?: true
    prevEventHash?: true
    eventHash?: true
    _all?: true
  }

  export type LedgerEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerEvent to aggregate.
     */
    where?: LedgerEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEvents to fetch.
     */
    orderBy?: LedgerEventOrderByWithRelationInput | LedgerEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LedgerEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LedgerEvents
    **/
    _count?: true | LedgerEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LedgerEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LedgerEventMaxAggregateInputType
  }

  export type GetLedgerEventAggregateType<T extends LedgerEventAggregateArgs> = {
        [P in keyof T & keyof AggregateLedgerEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLedgerEvent[P]>
      : GetScalarType<T[P], AggregateLedgerEvent[P]>
  }




  export type LedgerEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LedgerEventWhereInput
    orderBy?: LedgerEventOrderByWithAggregationInput | LedgerEventOrderByWithAggregationInput[]
    by: LedgerEventScalarFieldEnum[] | LedgerEventScalarFieldEnum
    having?: LedgerEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LedgerEventCountAggregateInputType | true
    _min?: LedgerEventMinAggregateInputType
    _max?: LedgerEventMaxAggregateInputType
  }

  export type LedgerEventGroupByOutputType = {
    eventId: string
    timestamp: Date
    actorId: string
    action: string
    entityRefs: string
    dataHash: string
    prevEventHash: string
    eventHash: string
    _count: LedgerEventCountAggregateOutputType | null
    _min: LedgerEventMinAggregateOutputType | null
    _max: LedgerEventMaxAggregateOutputType | null
  }

  type GetLedgerEventGroupByPayload<T extends LedgerEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LedgerEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LedgerEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LedgerEventGroupByOutputType[P]>
            : GetScalarType<T[P], LedgerEventGroupByOutputType[P]>
        }
      >
    >


  export type LedgerEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    timestamp?: boolean
    actorId?: boolean
    action?: boolean
    entityRefs?: boolean
    dataHash?: boolean
    prevEventHash?: boolean
    eventHash?: boolean
  }, ExtArgs["result"]["ledgerEvent"]>

  export type LedgerEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    timestamp?: boolean
    actorId?: boolean
    action?: boolean
    entityRefs?: boolean
    dataHash?: boolean
    prevEventHash?: boolean
    eventHash?: boolean
  }, ExtArgs["result"]["ledgerEvent"]>

  export type LedgerEventSelectScalar = {
    eventId?: boolean
    timestamp?: boolean
    actorId?: boolean
    action?: boolean
    entityRefs?: boolean
    dataHash?: boolean
    prevEventHash?: boolean
    eventHash?: boolean
  }


  export type $LedgerEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LedgerEvent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      eventId: string
      timestamp: Date
      actorId: string
      action: string
      entityRefs: string
      dataHash: string
      prevEventHash: string
      eventHash: string
    }, ExtArgs["result"]["ledgerEvent"]>
    composites: {}
  }

  type LedgerEventGetPayload<S extends boolean | null | undefined | LedgerEventDefaultArgs> = $Result.GetResult<Prisma.$LedgerEventPayload, S>

  type LedgerEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LedgerEventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LedgerEventCountAggregateInputType | true
    }

  export interface LedgerEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LedgerEvent'], meta: { name: 'LedgerEvent' } }
    /**
     * Find zero or one LedgerEvent that matches the filter.
     * @param {LedgerEventFindUniqueArgs} args - Arguments to find a LedgerEvent
     * @example
     * // Get one LedgerEvent
     * const ledgerEvent = await prisma.ledgerEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LedgerEventFindUniqueArgs>(args: SelectSubset<T, LedgerEventFindUniqueArgs<ExtArgs>>): Prisma__LedgerEventClient<$Result.GetResult<Prisma.$LedgerEventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LedgerEvent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LedgerEventFindUniqueOrThrowArgs} args - Arguments to find a LedgerEvent
     * @example
     * // Get one LedgerEvent
     * const ledgerEvent = await prisma.ledgerEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LedgerEventFindUniqueOrThrowArgs>(args: SelectSubset<T, LedgerEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LedgerEventClient<$Result.GetResult<Prisma.$LedgerEventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LedgerEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEventFindFirstArgs} args - Arguments to find a LedgerEvent
     * @example
     * // Get one LedgerEvent
     * const ledgerEvent = await prisma.ledgerEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LedgerEventFindFirstArgs>(args?: SelectSubset<T, LedgerEventFindFirstArgs<ExtArgs>>): Prisma__LedgerEventClient<$Result.GetResult<Prisma.$LedgerEventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LedgerEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEventFindFirstOrThrowArgs} args - Arguments to find a LedgerEvent
     * @example
     * // Get one LedgerEvent
     * const ledgerEvent = await prisma.ledgerEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LedgerEventFindFirstOrThrowArgs>(args?: SelectSubset<T, LedgerEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__LedgerEventClient<$Result.GetResult<Prisma.$LedgerEventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LedgerEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LedgerEvents
     * const ledgerEvents = await prisma.ledgerEvent.findMany()
     * 
     * // Get first 10 LedgerEvents
     * const ledgerEvents = await prisma.ledgerEvent.findMany({ take: 10 })
     * 
     * // Only select the `eventId`
     * const ledgerEventWithEventIdOnly = await prisma.ledgerEvent.findMany({ select: { eventId: true } })
     * 
     */
    findMany<T extends LedgerEventFindManyArgs>(args?: SelectSubset<T, LedgerEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LedgerEvent.
     * @param {LedgerEventCreateArgs} args - Arguments to create a LedgerEvent.
     * @example
     * // Create one LedgerEvent
     * const LedgerEvent = await prisma.ledgerEvent.create({
     *   data: {
     *     // ... data to create a LedgerEvent
     *   }
     * })
     * 
     */
    create<T extends LedgerEventCreateArgs>(args: SelectSubset<T, LedgerEventCreateArgs<ExtArgs>>): Prisma__LedgerEventClient<$Result.GetResult<Prisma.$LedgerEventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LedgerEvents.
     * @param {LedgerEventCreateManyArgs} args - Arguments to create many LedgerEvents.
     * @example
     * // Create many LedgerEvents
     * const ledgerEvent = await prisma.ledgerEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LedgerEventCreateManyArgs>(args?: SelectSubset<T, LedgerEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LedgerEvents and returns the data saved in the database.
     * @param {LedgerEventCreateManyAndReturnArgs} args - Arguments to create many LedgerEvents.
     * @example
     * // Create many LedgerEvents
     * const ledgerEvent = await prisma.ledgerEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LedgerEvents and only return the `eventId`
     * const ledgerEventWithEventIdOnly = await prisma.ledgerEvent.createManyAndReturn({ 
     *   select: { eventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LedgerEventCreateManyAndReturnArgs>(args?: SelectSubset<T, LedgerEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LedgerEventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LedgerEvent.
     * @param {LedgerEventDeleteArgs} args - Arguments to delete one LedgerEvent.
     * @example
     * // Delete one LedgerEvent
     * const LedgerEvent = await prisma.ledgerEvent.delete({
     *   where: {
     *     // ... filter to delete one LedgerEvent
     *   }
     * })
     * 
     */
    delete<T extends LedgerEventDeleteArgs>(args: SelectSubset<T, LedgerEventDeleteArgs<ExtArgs>>): Prisma__LedgerEventClient<$Result.GetResult<Prisma.$LedgerEventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LedgerEvent.
     * @param {LedgerEventUpdateArgs} args - Arguments to update one LedgerEvent.
     * @example
     * // Update one LedgerEvent
     * const ledgerEvent = await prisma.ledgerEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LedgerEventUpdateArgs>(args: SelectSubset<T, LedgerEventUpdateArgs<ExtArgs>>): Prisma__LedgerEventClient<$Result.GetResult<Prisma.$LedgerEventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LedgerEvents.
     * @param {LedgerEventDeleteManyArgs} args - Arguments to filter LedgerEvents to delete.
     * @example
     * // Delete a few LedgerEvents
     * const { count } = await prisma.ledgerEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LedgerEventDeleteManyArgs>(args?: SelectSubset<T, LedgerEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LedgerEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LedgerEvents
     * const ledgerEvent = await prisma.ledgerEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LedgerEventUpdateManyArgs>(args: SelectSubset<T, LedgerEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LedgerEvent.
     * @param {LedgerEventUpsertArgs} args - Arguments to update or create a LedgerEvent.
     * @example
     * // Update or create a LedgerEvent
     * const ledgerEvent = await prisma.ledgerEvent.upsert({
     *   create: {
     *     // ... data to create a LedgerEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LedgerEvent we want to update
     *   }
     * })
     */
    upsert<T extends LedgerEventUpsertArgs>(args: SelectSubset<T, LedgerEventUpsertArgs<ExtArgs>>): Prisma__LedgerEventClient<$Result.GetResult<Prisma.$LedgerEventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LedgerEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEventCountArgs} args - Arguments to filter LedgerEvents to count.
     * @example
     * // Count the number of LedgerEvents
     * const count = await prisma.ledgerEvent.count({
     *   where: {
     *     // ... the filter for the LedgerEvents we want to count
     *   }
     * })
    **/
    count<T extends LedgerEventCountArgs>(
      args?: Subset<T, LedgerEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LedgerEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LedgerEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LedgerEventAggregateArgs>(args: Subset<T, LedgerEventAggregateArgs>): Prisma.PrismaPromise<GetLedgerEventAggregateType<T>>

    /**
     * Group by LedgerEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LedgerEventGroupByArgs} args - Group by arguments.
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
      T extends LedgerEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LedgerEventGroupByArgs['orderBy'] }
        : { orderBy?: LedgerEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LedgerEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLedgerEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LedgerEvent model
   */
  readonly fields: LedgerEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LedgerEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LedgerEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the LedgerEvent model
   */ 
  interface LedgerEventFieldRefs {
    readonly eventId: FieldRef<"LedgerEvent", 'String'>
    readonly timestamp: FieldRef<"LedgerEvent", 'DateTime'>
    readonly actorId: FieldRef<"LedgerEvent", 'String'>
    readonly action: FieldRef<"LedgerEvent", 'String'>
    readonly entityRefs: FieldRef<"LedgerEvent", 'String'>
    readonly dataHash: FieldRef<"LedgerEvent", 'String'>
    readonly prevEventHash: FieldRef<"LedgerEvent", 'String'>
    readonly eventHash: FieldRef<"LedgerEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LedgerEvent findUnique
   */
  export type LedgerEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEvent
     */
    select?: LedgerEventSelect<ExtArgs> | null
    /**
     * Filter, which LedgerEvent to fetch.
     */
    where: LedgerEventWhereUniqueInput
  }

  /**
   * LedgerEvent findUniqueOrThrow
   */
  export type LedgerEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEvent
     */
    select?: LedgerEventSelect<ExtArgs> | null
    /**
     * Filter, which LedgerEvent to fetch.
     */
    where: LedgerEventWhereUniqueInput
  }

  /**
   * LedgerEvent findFirst
   */
  export type LedgerEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEvent
     */
    select?: LedgerEventSelect<ExtArgs> | null
    /**
     * Filter, which LedgerEvent to fetch.
     */
    where?: LedgerEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEvents to fetch.
     */
    orderBy?: LedgerEventOrderByWithRelationInput | LedgerEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerEvents.
     */
    cursor?: LedgerEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerEvents.
     */
    distinct?: LedgerEventScalarFieldEnum | LedgerEventScalarFieldEnum[]
  }

  /**
   * LedgerEvent findFirstOrThrow
   */
  export type LedgerEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEvent
     */
    select?: LedgerEventSelect<ExtArgs> | null
    /**
     * Filter, which LedgerEvent to fetch.
     */
    where?: LedgerEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEvents to fetch.
     */
    orderBy?: LedgerEventOrderByWithRelationInput | LedgerEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LedgerEvents.
     */
    cursor?: LedgerEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LedgerEvents.
     */
    distinct?: LedgerEventScalarFieldEnum | LedgerEventScalarFieldEnum[]
  }

  /**
   * LedgerEvent findMany
   */
  export type LedgerEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEvent
     */
    select?: LedgerEventSelect<ExtArgs> | null
    /**
     * Filter, which LedgerEvents to fetch.
     */
    where?: LedgerEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LedgerEvents to fetch.
     */
    orderBy?: LedgerEventOrderByWithRelationInput | LedgerEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LedgerEvents.
     */
    cursor?: LedgerEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LedgerEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LedgerEvents.
     */
    skip?: number
    distinct?: LedgerEventScalarFieldEnum | LedgerEventScalarFieldEnum[]
  }

  /**
   * LedgerEvent create
   */
  export type LedgerEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEvent
     */
    select?: LedgerEventSelect<ExtArgs> | null
    /**
     * The data needed to create a LedgerEvent.
     */
    data: XOR<LedgerEventCreateInput, LedgerEventUncheckedCreateInput>
  }

  /**
   * LedgerEvent createMany
   */
  export type LedgerEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LedgerEvents.
     */
    data: LedgerEventCreateManyInput | LedgerEventCreateManyInput[]
  }

  /**
   * LedgerEvent createManyAndReturn
   */
  export type LedgerEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEvent
     */
    select?: LedgerEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LedgerEvents.
     */
    data: LedgerEventCreateManyInput | LedgerEventCreateManyInput[]
  }

  /**
   * LedgerEvent update
   */
  export type LedgerEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEvent
     */
    select?: LedgerEventSelect<ExtArgs> | null
    /**
     * The data needed to update a LedgerEvent.
     */
    data: XOR<LedgerEventUpdateInput, LedgerEventUncheckedUpdateInput>
    /**
     * Choose, which LedgerEvent to update.
     */
    where: LedgerEventWhereUniqueInput
  }

  /**
   * LedgerEvent updateMany
   */
  export type LedgerEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LedgerEvents.
     */
    data: XOR<LedgerEventUpdateManyMutationInput, LedgerEventUncheckedUpdateManyInput>
    /**
     * Filter which LedgerEvents to update
     */
    where?: LedgerEventWhereInput
  }

  /**
   * LedgerEvent upsert
   */
  export type LedgerEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEvent
     */
    select?: LedgerEventSelect<ExtArgs> | null
    /**
     * The filter to search for the LedgerEvent to update in case it exists.
     */
    where: LedgerEventWhereUniqueInput
    /**
     * In case the LedgerEvent found by the `where` argument doesn't exist, create a new LedgerEvent with this data.
     */
    create: XOR<LedgerEventCreateInput, LedgerEventUncheckedCreateInput>
    /**
     * In case the LedgerEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LedgerEventUpdateInput, LedgerEventUncheckedUpdateInput>
  }

  /**
   * LedgerEvent delete
   */
  export type LedgerEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEvent
     */
    select?: LedgerEventSelect<ExtArgs> | null
    /**
     * Filter which LedgerEvent to delete.
     */
    where: LedgerEventWhereUniqueInput
  }

  /**
   * LedgerEvent deleteMany
   */
  export type LedgerEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LedgerEvents to delete
     */
    where?: LedgerEventWhereInput
  }

  /**
   * LedgerEvent without action
   */
  export type LedgerEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LedgerEvent
     */
    select?: LedgerEventSelect<ExtArgs> | null
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
    S: number | null
    C: number | null
    T: number | null
    L: number | null
    R: number | null
    fitness_raw: number | null
    fitness_norm: number | null
    quota_q: number | null
    tokens_minted: number | null
    vote_weight_w: number | null
    p_softmax: number | null
  }

  export type AgentEpochScoreSumAggregateOutputType = {
    S: number | null
    C: number | null
    T: number | null
    L: number | null
    R: number | null
    fitness_raw: number | null
    fitness_norm: number | null
    quota_q: number | null
    tokens_minted: number | null
    vote_weight_w: number | null
    p_softmax: number | null
  }

  export type AgentEpochScoreMinAggregateOutputType = {
    id: string | null
    agentId: string | null
    epochKey: string | null
    S: number | null
    C: number | null
    T: number | null
    L: number | null
    R: number | null
    fitness_raw: number | null
    fitness_norm: number | null
    quota_q: number | null
    tokens_minted: number | null
    vote_weight_w: number | null
    p_softmax: number | null
    params_version: string | null
    calc_hash: string | null
    createdAt: Date | null
  }

  export type AgentEpochScoreMaxAggregateOutputType = {
    id: string | null
    agentId: string | null
    epochKey: string | null
    S: number | null
    C: number | null
    T: number | null
    L: number | null
    R: number | null
    fitness_raw: number | null
    fitness_norm: number | null
    quota_q: number | null
    tokens_minted: number | null
    vote_weight_w: number | null
    p_softmax: number | null
    params_version: string | null
    calc_hash: string | null
    createdAt: Date | null
  }

  export type AgentEpochScoreCountAggregateOutputType = {
    id: number
    agentId: number
    epochKey: number
    S: number
    C: number
    T: number
    L: number
    R: number
    fitness_raw: number
    fitness_norm: number
    quota_q: number
    tokens_minted: number
    vote_weight_w: number
    p_softmax: number
    params_version: number
    calc_hash: number
    createdAt: number
    _all: number
  }


  export type AgentEpochScoreAvgAggregateInputType = {
    S?: true
    C?: true
    T?: true
    L?: true
    R?: true
    fitness_raw?: true
    fitness_norm?: true
    quota_q?: true
    tokens_minted?: true
    vote_weight_w?: true
    p_softmax?: true
  }

  export type AgentEpochScoreSumAggregateInputType = {
    S?: true
    C?: true
    T?: true
    L?: true
    R?: true
    fitness_raw?: true
    fitness_norm?: true
    quota_q?: true
    tokens_minted?: true
    vote_weight_w?: true
    p_softmax?: true
  }

  export type AgentEpochScoreMinAggregateInputType = {
    id?: true
    agentId?: true
    epochKey?: true
    S?: true
    C?: true
    T?: true
    L?: true
    R?: true
    fitness_raw?: true
    fitness_norm?: true
    quota_q?: true
    tokens_minted?: true
    vote_weight_w?: true
    p_softmax?: true
    params_version?: true
    calc_hash?: true
    createdAt?: true
  }

  export type AgentEpochScoreMaxAggregateInputType = {
    id?: true
    agentId?: true
    epochKey?: true
    S?: true
    C?: true
    T?: true
    L?: true
    R?: true
    fitness_raw?: true
    fitness_norm?: true
    quota_q?: true
    tokens_minted?: true
    vote_weight_w?: true
    p_softmax?: true
    params_version?: true
    calc_hash?: true
    createdAt?: true
  }

  export type AgentEpochScoreCountAggregateInputType = {
    id?: true
    agentId?: true
    epochKey?: true
    S?: true
    C?: true
    T?: true
    L?: true
    R?: true
    fitness_raw?: true
    fitness_norm?: true
    quota_q?: true
    tokens_minted?: true
    vote_weight_w?: true
    p_softmax?: true
    params_version?: true
    calc_hash?: true
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
    S: number
    C: number
    T: number
    L: number
    R: number
    fitness_raw: number
    fitness_norm: number
    quota_q: number
    tokens_minted: number
    vote_weight_w: number
    p_softmax: number
    params_version: string
    calc_hash: string
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
    S?: boolean
    C?: boolean
    T?: boolean
    L?: boolean
    R?: boolean
    fitness_raw?: boolean
    fitness_norm?: boolean
    quota_q?: boolean
    tokens_minted?: boolean
    vote_weight_w?: boolean
    p_softmax?: boolean
    params_version?: boolean
    calc_hash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["agentEpochScore"]>

  export type AgentEpochScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    epochKey?: boolean
    S?: boolean
    C?: boolean
    T?: boolean
    L?: boolean
    R?: boolean
    fitness_raw?: boolean
    fitness_norm?: boolean
    quota_q?: boolean
    tokens_minted?: boolean
    vote_weight_w?: boolean
    p_softmax?: boolean
    params_version?: boolean
    calc_hash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["agentEpochScore"]>

  export type AgentEpochScoreSelectScalar = {
    id?: boolean
    agentId?: boolean
    epochKey?: boolean
    S?: boolean
    C?: boolean
    T?: boolean
    L?: boolean
    R?: boolean
    fitness_raw?: boolean
    fitness_norm?: boolean
    quota_q?: boolean
    tokens_minted?: boolean
    vote_weight_w?: boolean
    p_softmax?: boolean
    params_version?: boolean
    calc_hash?: boolean
    createdAt?: boolean
  }


  export type $AgentEpochScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgentEpochScore"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agentId: string
      epochKey: string
      S: number
      C: number
      T: number
      L: number
      R: number
      fitness_raw: number
      fitness_norm: number
      quota_q: number
      tokens_minted: number
      vote_weight_w: number
      p_softmax: number
      params_version: string
      calc_hash: string
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
    readonly S: FieldRef<"AgentEpochScore", 'Float'>
    readonly C: FieldRef<"AgentEpochScore", 'Float'>
    readonly T: FieldRef<"AgentEpochScore", 'Float'>
    readonly L: FieldRef<"AgentEpochScore", 'Float'>
    readonly R: FieldRef<"AgentEpochScore", 'Float'>
    readonly fitness_raw: FieldRef<"AgentEpochScore", 'Float'>
    readonly fitness_norm: FieldRef<"AgentEpochScore", 'Float'>
    readonly quota_q: FieldRef<"AgentEpochScore", 'Float'>
    readonly tokens_minted: FieldRef<"AgentEpochScore", 'Int'>
    readonly vote_weight_w: FieldRef<"AgentEpochScore", 'Float'>
    readonly p_softmax: FieldRef<"AgentEpochScore", 'Float'>
    readonly params_version: FieldRef<"AgentEpochScore", 'String'>
    readonly calc_hash: FieldRef<"AgentEpochScore", 'String'>
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
   * Model AgentEpochCounters
   */

  export type AggregateAgentEpochCounters = {
    _count: AgentEpochCountersCountAggregateOutputType | null
    _avg: AgentEpochCountersAvgAggregateOutputType | null
    _sum: AgentEpochCountersSumAggregateOutputType | null
    _min: AgentEpochCountersMinAggregateOutputType | null
    _max: AgentEpochCountersMaxAggregateOutputType | null
  }

  export type AgentEpochCountersAvgAggregateOutputType = {
    n_fail: number | null
    n_warn: number | null
    n_auditFail: number | null
    n_auditWarn: number | null
    n_suspicious: number | null
    n_published: number | null
  }

  export type AgentEpochCountersSumAggregateOutputType = {
    n_fail: number | null
    n_warn: number | null
    n_auditFail: number | null
    n_auditWarn: number | null
    n_suspicious: number | null
    n_published: number | null
  }

  export type AgentEpochCountersMinAggregateOutputType = {
    id: string | null
    agentId: string | null
    epochKey: string | null
    n_fail: number | null
    n_warn: number | null
    n_auditFail: number | null
    n_auditWarn: number | null
    n_suspicious: number | null
    n_published: number | null
    createdAt: Date | null
  }

  export type AgentEpochCountersMaxAggregateOutputType = {
    id: string | null
    agentId: string | null
    epochKey: string | null
    n_fail: number | null
    n_warn: number | null
    n_auditFail: number | null
    n_auditWarn: number | null
    n_suspicious: number | null
    n_published: number | null
    createdAt: Date | null
  }

  export type AgentEpochCountersCountAggregateOutputType = {
    id: number
    agentId: number
    epochKey: number
    n_fail: number
    n_warn: number
    n_auditFail: number
    n_auditWarn: number
    n_suspicious: number
    n_published: number
    createdAt: number
    _all: number
  }


  export type AgentEpochCountersAvgAggregateInputType = {
    n_fail?: true
    n_warn?: true
    n_auditFail?: true
    n_auditWarn?: true
    n_suspicious?: true
    n_published?: true
  }

  export type AgentEpochCountersSumAggregateInputType = {
    n_fail?: true
    n_warn?: true
    n_auditFail?: true
    n_auditWarn?: true
    n_suspicious?: true
    n_published?: true
  }

  export type AgentEpochCountersMinAggregateInputType = {
    id?: true
    agentId?: true
    epochKey?: true
    n_fail?: true
    n_warn?: true
    n_auditFail?: true
    n_auditWarn?: true
    n_suspicious?: true
    n_published?: true
    createdAt?: true
  }

  export type AgentEpochCountersMaxAggregateInputType = {
    id?: true
    agentId?: true
    epochKey?: true
    n_fail?: true
    n_warn?: true
    n_auditFail?: true
    n_auditWarn?: true
    n_suspicious?: true
    n_published?: true
    createdAt?: true
  }

  export type AgentEpochCountersCountAggregateInputType = {
    id?: true
    agentId?: true
    epochKey?: true
    n_fail?: true
    n_warn?: true
    n_auditFail?: true
    n_auditWarn?: true
    n_suspicious?: true
    n_published?: true
    createdAt?: true
    _all?: true
  }

  export type AgentEpochCountersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentEpochCounters to aggregate.
     */
    where?: AgentEpochCountersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentEpochCounters to fetch.
     */
    orderBy?: AgentEpochCountersOrderByWithRelationInput | AgentEpochCountersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentEpochCountersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentEpochCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentEpochCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgentEpochCounters
    **/
    _count?: true | AgentEpochCountersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgentEpochCountersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgentEpochCountersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentEpochCountersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentEpochCountersMaxAggregateInputType
  }

  export type GetAgentEpochCountersAggregateType<T extends AgentEpochCountersAggregateArgs> = {
        [P in keyof T & keyof AggregateAgentEpochCounters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgentEpochCounters[P]>
      : GetScalarType<T[P], AggregateAgentEpochCounters[P]>
  }




  export type AgentEpochCountersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentEpochCountersWhereInput
    orderBy?: AgentEpochCountersOrderByWithAggregationInput | AgentEpochCountersOrderByWithAggregationInput[]
    by: AgentEpochCountersScalarFieldEnum[] | AgentEpochCountersScalarFieldEnum
    having?: AgentEpochCountersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentEpochCountersCountAggregateInputType | true
    _avg?: AgentEpochCountersAvgAggregateInputType
    _sum?: AgentEpochCountersSumAggregateInputType
    _min?: AgentEpochCountersMinAggregateInputType
    _max?: AgentEpochCountersMaxAggregateInputType
  }

  export type AgentEpochCountersGroupByOutputType = {
    id: string
    agentId: string
    epochKey: string
    n_fail: number
    n_warn: number
    n_auditFail: number
    n_auditWarn: number
    n_suspicious: number
    n_published: number
    createdAt: Date
    _count: AgentEpochCountersCountAggregateOutputType | null
    _avg: AgentEpochCountersAvgAggregateOutputType | null
    _sum: AgentEpochCountersSumAggregateOutputType | null
    _min: AgentEpochCountersMinAggregateOutputType | null
    _max: AgentEpochCountersMaxAggregateOutputType | null
  }

  type GetAgentEpochCountersGroupByPayload<T extends AgentEpochCountersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentEpochCountersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentEpochCountersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentEpochCountersGroupByOutputType[P]>
            : GetScalarType<T[P], AgentEpochCountersGroupByOutputType[P]>
        }
      >
    >


  export type AgentEpochCountersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    epochKey?: boolean
    n_fail?: boolean
    n_warn?: boolean
    n_auditFail?: boolean
    n_auditWarn?: boolean
    n_suspicious?: boolean
    n_published?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["agentEpochCounters"]>

  export type AgentEpochCountersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    agentId?: boolean
    epochKey?: boolean
    n_fail?: boolean
    n_warn?: boolean
    n_auditFail?: boolean
    n_auditWarn?: boolean
    n_suspicious?: boolean
    n_published?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["agentEpochCounters"]>

  export type AgentEpochCountersSelectScalar = {
    id?: boolean
    agentId?: boolean
    epochKey?: boolean
    n_fail?: boolean
    n_warn?: boolean
    n_auditFail?: boolean
    n_auditWarn?: boolean
    n_suspicious?: boolean
    n_published?: boolean
    createdAt?: boolean
  }


  export type $AgentEpochCountersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgentEpochCounters"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      agentId: string
      epochKey: string
      n_fail: number
      n_warn: number
      n_auditFail: number
      n_auditWarn: number
      n_suspicious: number
      n_published: number
      createdAt: Date
    }, ExtArgs["result"]["agentEpochCounters"]>
    composites: {}
  }

  type AgentEpochCountersGetPayload<S extends boolean | null | undefined | AgentEpochCountersDefaultArgs> = $Result.GetResult<Prisma.$AgentEpochCountersPayload, S>

  type AgentEpochCountersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AgentEpochCountersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AgentEpochCountersCountAggregateInputType | true
    }

  export interface AgentEpochCountersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgentEpochCounters'], meta: { name: 'AgentEpochCounters' } }
    /**
     * Find zero or one AgentEpochCounters that matches the filter.
     * @param {AgentEpochCountersFindUniqueArgs} args - Arguments to find a AgentEpochCounters
     * @example
     * // Get one AgentEpochCounters
     * const agentEpochCounters = await prisma.agentEpochCounters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentEpochCountersFindUniqueArgs>(args: SelectSubset<T, AgentEpochCountersFindUniqueArgs<ExtArgs>>): Prisma__AgentEpochCountersClient<$Result.GetResult<Prisma.$AgentEpochCountersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AgentEpochCounters that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AgentEpochCountersFindUniqueOrThrowArgs} args - Arguments to find a AgentEpochCounters
     * @example
     * // Get one AgentEpochCounters
     * const agentEpochCounters = await prisma.agentEpochCounters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentEpochCountersFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentEpochCountersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentEpochCountersClient<$Result.GetResult<Prisma.$AgentEpochCountersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AgentEpochCounters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentEpochCountersFindFirstArgs} args - Arguments to find a AgentEpochCounters
     * @example
     * // Get one AgentEpochCounters
     * const agentEpochCounters = await prisma.agentEpochCounters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentEpochCountersFindFirstArgs>(args?: SelectSubset<T, AgentEpochCountersFindFirstArgs<ExtArgs>>): Prisma__AgentEpochCountersClient<$Result.GetResult<Prisma.$AgentEpochCountersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AgentEpochCounters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentEpochCountersFindFirstOrThrowArgs} args - Arguments to find a AgentEpochCounters
     * @example
     * // Get one AgentEpochCounters
     * const agentEpochCounters = await prisma.agentEpochCounters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentEpochCountersFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentEpochCountersFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentEpochCountersClient<$Result.GetResult<Prisma.$AgentEpochCountersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AgentEpochCounters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentEpochCountersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgentEpochCounters
     * const agentEpochCounters = await prisma.agentEpochCounters.findMany()
     * 
     * // Get first 10 AgentEpochCounters
     * const agentEpochCounters = await prisma.agentEpochCounters.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentEpochCountersWithIdOnly = await prisma.agentEpochCounters.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentEpochCountersFindManyArgs>(args?: SelectSubset<T, AgentEpochCountersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentEpochCountersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AgentEpochCounters.
     * @param {AgentEpochCountersCreateArgs} args - Arguments to create a AgentEpochCounters.
     * @example
     * // Create one AgentEpochCounters
     * const AgentEpochCounters = await prisma.agentEpochCounters.create({
     *   data: {
     *     // ... data to create a AgentEpochCounters
     *   }
     * })
     * 
     */
    create<T extends AgentEpochCountersCreateArgs>(args: SelectSubset<T, AgentEpochCountersCreateArgs<ExtArgs>>): Prisma__AgentEpochCountersClient<$Result.GetResult<Prisma.$AgentEpochCountersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AgentEpochCounters.
     * @param {AgentEpochCountersCreateManyArgs} args - Arguments to create many AgentEpochCounters.
     * @example
     * // Create many AgentEpochCounters
     * const agentEpochCounters = await prisma.agentEpochCounters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentEpochCountersCreateManyArgs>(args?: SelectSubset<T, AgentEpochCountersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgentEpochCounters and returns the data saved in the database.
     * @param {AgentEpochCountersCreateManyAndReturnArgs} args - Arguments to create many AgentEpochCounters.
     * @example
     * // Create many AgentEpochCounters
     * const agentEpochCounters = await prisma.agentEpochCounters.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgentEpochCounters and only return the `id`
     * const agentEpochCountersWithIdOnly = await prisma.agentEpochCounters.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentEpochCountersCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentEpochCountersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentEpochCountersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AgentEpochCounters.
     * @param {AgentEpochCountersDeleteArgs} args - Arguments to delete one AgentEpochCounters.
     * @example
     * // Delete one AgentEpochCounters
     * const AgentEpochCounters = await prisma.agentEpochCounters.delete({
     *   where: {
     *     // ... filter to delete one AgentEpochCounters
     *   }
     * })
     * 
     */
    delete<T extends AgentEpochCountersDeleteArgs>(args: SelectSubset<T, AgentEpochCountersDeleteArgs<ExtArgs>>): Prisma__AgentEpochCountersClient<$Result.GetResult<Prisma.$AgentEpochCountersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AgentEpochCounters.
     * @param {AgentEpochCountersUpdateArgs} args - Arguments to update one AgentEpochCounters.
     * @example
     * // Update one AgentEpochCounters
     * const agentEpochCounters = await prisma.agentEpochCounters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentEpochCountersUpdateArgs>(args: SelectSubset<T, AgentEpochCountersUpdateArgs<ExtArgs>>): Prisma__AgentEpochCountersClient<$Result.GetResult<Prisma.$AgentEpochCountersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AgentEpochCounters.
     * @param {AgentEpochCountersDeleteManyArgs} args - Arguments to filter AgentEpochCounters to delete.
     * @example
     * // Delete a few AgentEpochCounters
     * const { count } = await prisma.agentEpochCounters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentEpochCountersDeleteManyArgs>(args?: SelectSubset<T, AgentEpochCountersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentEpochCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentEpochCountersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgentEpochCounters
     * const agentEpochCounters = await prisma.agentEpochCounters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentEpochCountersUpdateManyArgs>(args: SelectSubset<T, AgentEpochCountersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AgentEpochCounters.
     * @param {AgentEpochCountersUpsertArgs} args - Arguments to update or create a AgentEpochCounters.
     * @example
     * // Update or create a AgentEpochCounters
     * const agentEpochCounters = await prisma.agentEpochCounters.upsert({
     *   create: {
     *     // ... data to create a AgentEpochCounters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgentEpochCounters we want to update
     *   }
     * })
     */
    upsert<T extends AgentEpochCountersUpsertArgs>(args: SelectSubset<T, AgentEpochCountersUpsertArgs<ExtArgs>>): Prisma__AgentEpochCountersClient<$Result.GetResult<Prisma.$AgentEpochCountersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AgentEpochCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentEpochCountersCountArgs} args - Arguments to filter AgentEpochCounters to count.
     * @example
     * // Count the number of AgentEpochCounters
     * const count = await prisma.agentEpochCounters.count({
     *   where: {
     *     // ... the filter for the AgentEpochCounters we want to count
     *   }
     * })
    **/
    count<T extends AgentEpochCountersCountArgs>(
      args?: Subset<T, AgentEpochCountersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentEpochCountersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgentEpochCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentEpochCountersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgentEpochCountersAggregateArgs>(args: Subset<T, AgentEpochCountersAggregateArgs>): Prisma.PrismaPromise<GetAgentEpochCountersAggregateType<T>>

    /**
     * Group by AgentEpochCounters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentEpochCountersGroupByArgs} args - Group by arguments.
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
      T extends AgentEpochCountersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentEpochCountersGroupByArgs['orderBy'] }
        : { orderBy?: AgentEpochCountersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgentEpochCountersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentEpochCountersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgentEpochCounters model
   */
  readonly fields: AgentEpochCountersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgentEpochCounters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentEpochCountersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AgentEpochCounters model
   */ 
  interface AgentEpochCountersFieldRefs {
    readonly id: FieldRef<"AgentEpochCounters", 'String'>
    readonly agentId: FieldRef<"AgentEpochCounters", 'String'>
    readonly epochKey: FieldRef<"AgentEpochCounters", 'String'>
    readonly n_fail: FieldRef<"AgentEpochCounters", 'Int'>
    readonly n_warn: FieldRef<"AgentEpochCounters", 'Int'>
    readonly n_auditFail: FieldRef<"AgentEpochCounters", 'Int'>
    readonly n_auditWarn: FieldRef<"AgentEpochCounters", 'Int'>
    readonly n_suspicious: FieldRef<"AgentEpochCounters", 'Int'>
    readonly n_published: FieldRef<"AgentEpochCounters", 'Int'>
    readonly createdAt: FieldRef<"AgentEpochCounters", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgentEpochCounters findUnique
   */
  export type AgentEpochCountersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochCounters
     */
    select?: AgentEpochCountersSelect<ExtArgs> | null
    /**
     * Filter, which AgentEpochCounters to fetch.
     */
    where: AgentEpochCountersWhereUniqueInput
  }

  /**
   * AgentEpochCounters findUniqueOrThrow
   */
  export type AgentEpochCountersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochCounters
     */
    select?: AgentEpochCountersSelect<ExtArgs> | null
    /**
     * Filter, which AgentEpochCounters to fetch.
     */
    where: AgentEpochCountersWhereUniqueInput
  }

  /**
   * AgentEpochCounters findFirst
   */
  export type AgentEpochCountersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochCounters
     */
    select?: AgentEpochCountersSelect<ExtArgs> | null
    /**
     * Filter, which AgentEpochCounters to fetch.
     */
    where?: AgentEpochCountersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentEpochCounters to fetch.
     */
    orderBy?: AgentEpochCountersOrderByWithRelationInput | AgentEpochCountersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentEpochCounters.
     */
    cursor?: AgentEpochCountersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentEpochCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentEpochCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentEpochCounters.
     */
    distinct?: AgentEpochCountersScalarFieldEnum | AgentEpochCountersScalarFieldEnum[]
  }

  /**
   * AgentEpochCounters findFirstOrThrow
   */
  export type AgentEpochCountersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochCounters
     */
    select?: AgentEpochCountersSelect<ExtArgs> | null
    /**
     * Filter, which AgentEpochCounters to fetch.
     */
    where?: AgentEpochCountersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentEpochCounters to fetch.
     */
    orderBy?: AgentEpochCountersOrderByWithRelationInput | AgentEpochCountersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentEpochCounters.
     */
    cursor?: AgentEpochCountersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentEpochCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentEpochCounters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentEpochCounters.
     */
    distinct?: AgentEpochCountersScalarFieldEnum | AgentEpochCountersScalarFieldEnum[]
  }

  /**
   * AgentEpochCounters findMany
   */
  export type AgentEpochCountersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochCounters
     */
    select?: AgentEpochCountersSelect<ExtArgs> | null
    /**
     * Filter, which AgentEpochCounters to fetch.
     */
    where?: AgentEpochCountersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentEpochCounters to fetch.
     */
    orderBy?: AgentEpochCountersOrderByWithRelationInput | AgentEpochCountersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgentEpochCounters.
     */
    cursor?: AgentEpochCountersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentEpochCounters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentEpochCounters.
     */
    skip?: number
    distinct?: AgentEpochCountersScalarFieldEnum | AgentEpochCountersScalarFieldEnum[]
  }

  /**
   * AgentEpochCounters create
   */
  export type AgentEpochCountersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochCounters
     */
    select?: AgentEpochCountersSelect<ExtArgs> | null
    /**
     * The data needed to create a AgentEpochCounters.
     */
    data: XOR<AgentEpochCountersCreateInput, AgentEpochCountersUncheckedCreateInput>
  }

  /**
   * AgentEpochCounters createMany
   */
  export type AgentEpochCountersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgentEpochCounters.
     */
    data: AgentEpochCountersCreateManyInput | AgentEpochCountersCreateManyInput[]
  }

  /**
   * AgentEpochCounters createManyAndReturn
   */
  export type AgentEpochCountersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochCounters
     */
    select?: AgentEpochCountersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AgentEpochCounters.
     */
    data: AgentEpochCountersCreateManyInput | AgentEpochCountersCreateManyInput[]
  }

  /**
   * AgentEpochCounters update
   */
  export type AgentEpochCountersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochCounters
     */
    select?: AgentEpochCountersSelect<ExtArgs> | null
    /**
     * The data needed to update a AgentEpochCounters.
     */
    data: XOR<AgentEpochCountersUpdateInput, AgentEpochCountersUncheckedUpdateInput>
    /**
     * Choose, which AgentEpochCounters to update.
     */
    where: AgentEpochCountersWhereUniqueInput
  }

  /**
   * AgentEpochCounters updateMany
   */
  export type AgentEpochCountersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgentEpochCounters.
     */
    data: XOR<AgentEpochCountersUpdateManyMutationInput, AgentEpochCountersUncheckedUpdateManyInput>
    /**
     * Filter which AgentEpochCounters to update
     */
    where?: AgentEpochCountersWhereInput
  }

  /**
   * AgentEpochCounters upsert
   */
  export type AgentEpochCountersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochCounters
     */
    select?: AgentEpochCountersSelect<ExtArgs> | null
    /**
     * The filter to search for the AgentEpochCounters to update in case it exists.
     */
    where: AgentEpochCountersWhereUniqueInput
    /**
     * In case the AgentEpochCounters found by the `where` argument doesn't exist, create a new AgentEpochCounters with this data.
     */
    create: XOR<AgentEpochCountersCreateInput, AgentEpochCountersUncheckedCreateInput>
    /**
     * In case the AgentEpochCounters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentEpochCountersUpdateInput, AgentEpochCountersUncheckedUpdateInput>
  }

  /**
   * AgentEpochCounters delete
   */
  export type AgentEpochCountersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochCounters
     */
    select?: AgentEpochCountersSelect<ExtArgs> | null
    /**
     * Filter which AgentEpochCounters to delete.
     */
    where: AgentEpochCountersWhereUniqueInput
  }

  /**
   * AgentEpochCounters deleteMany
   */
  export type AgentEpochCountersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentEpochCounters to delete
     */
    where?: AgentEpochCountersWhereInput
  }

  /**
   * AgentEpochCounters without action
   */
  export type AgentEpochCountersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentEpochCounters
     */
    select?: AgentEpochCountersSelect<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomMinAggregateOutputType = {
    roomId: string | null
    name: string | null
    purpose: string | null
    visibility: string | null
    riskTier: string | null
    capabilitiesJson: string | null
    status: string | null
    createdAt: Date | null
    createdBy: string | null
    roomHash: string | null
  }

  export type RoomMaxAggregateOutputType = {
    roomId: string | null
    name: string | null
    purpose: string | null
    visibility: string | null
    riskTier: string | null
    capabilitiesJson: string | null
    status: string | null
    createdAt: Date | null
    createdBy: string | null
    roomHash: string | null
  }

  export type RoomCountAggregateOutputType = {
    roomId: number
    name: number
    purpose: number
    visibility: number
    riskTier: number
    capabilitiesJson: number
    status: number
    createdAt: number
    createdBy: number
    roomHash: number
    _all: number
  }


  export type RoomMinAggregateInputType = {
    roomId?: true
    name?: true
    purpose?: true
    visibility?: true
    riskTier?: true
    capabilitiesJson?: true
    status?: true
    createdAt?: true
    createdBy?: true
    roomHash?: true
  }

  export type RoomMaxAggregateInputType = {
    roomId?: true
    name?: true
    purpose?: true
    visibility?: true
    riskTier?: true
    capabilitiesJson?: true
    status?: true
    createdAt?: true
    createdBy?: true
    roomHash?: true
  }

  export type RoomCountAggregateInputType = {
    roomId?: true
    name?: true
    purpose?: true
    visibility?: true
    riskTier?: true
    capabilitiesJson?: true
    status?: true
    createdAt?: true
    createdBy?: true
    roomHash?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    roomId: string
    name: string
    purpose: string
    visibility: string
    riskTier: string
    capabilitiesJson: string
    status: string
    createdAt: Date
    createdBy: string
    roomHash: string
    _count: RoomCountAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roomId?: boolean
    name?: boolean
    purpose?: boolean
    visibility?: boolean
    riskTier?: boolean
    capabilitiesJson?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    roomHash?: boolean
    actors?: boolean | Room$actorsArgs<ExtArgs>
    messages?: boolean | Room$messagesArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roomId?: boolean
    name?: boolean
    purpose?: boolean
    visibility?: boolean
    riskTier?: boolean
    capabilitiesJson?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    roomHash?: boolean
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    roomId?: boolean
    name?: boolean
    purpose?: boolean
    visibility?: boolean
    riskTier?: boolean
    capabilitiesJson?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean
    roomHash?: boolean
  }

  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actors?: boolean | Room$actorsArgs<ExtArgs>
    messages?: boolean | Room$messagesArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      actors: Prisma.$ActorPayload<ExtArgs>[]
      messages: Prisma.$RoomMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      roomId: string
      name: string
      purpose: string
      visibility: string
      riskTier: string
      capabilitiesJson: string
      status: string
      createdAt: Date
      createdBy: string
      roomHash: string
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `roomId`
     * const roomWithRoomIdOnly = await prisma.room.findMany({ select: { roomId: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `roomId`
     * const roomWithRoomIdOnly = await prisma.room.createManyAndReturn({ 
     *   select: { roomId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actors<T extends Room$actorsArgs<ExtArgs> = {}>(args?: Subset<T, Room$actorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findMany"> | Null>
    messages<T extends Room$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Room$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Room model
   */ 
  interface RoomFieldRefs {
    readonly roomId: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly purpose: FieldRef<"Room", 'String'>
    readonly visibility: FieldRef<"Room", 'String'>
    readonly riskTier: FieldRef<"Room", 'String'>
    readonly capabilitiesJson: FieldRef<"Room", 'String'>
    readonly status: FieldRef<"Room", 'String'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly createdBy: FieldRef<"Room", 'String'>
    readonly roomHash: FieldRef<"Room", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
  }

  /**
   * Room.actors
   */
  export type Room$actorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    where?: ActorWhereInput
    orderBy?: ActorOrderByWithRelationInput | ActorOrderByWithRelationInput[]
    cursor?: ActorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActorScalarFieldEnum | ActorScalarFieldEnum[]
  }

  /**
   * Room.messages
   */
  export type Room$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    where?: RoomMessageWhereInput
    orderBy?: RoomMessageOrderByWithRelationInput | RoomMessageOrderByWithRelationInput[]
    cursor?: RoomMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomMessageScalarFieldEnum | RoomMessageScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Actor
   */

  export type AggregateActor = {
    _count: ActorCountAggregateOutputType | null
    _min: ActorMinAggregateOutputType | null
    _max: ActorMaxAggregateOutputType | null
  }

  export type ActorMinAggregateOutputType = {
    actorId: string | null
    actorType: string | null
    displayName: string | null
    currentRoomId: string | null
    createdAt: Date | null
  }

  export type ActorMaxAggregateOutputType = {
    actorId: string | null
    actorType: string | null
    displayName: string | null
    currentRoomId: string | null
    createdAt: Date | null
  }

  export type ActorCountAggregateOutputType = {
    actorId: number
    actorType: number
    displayName: number
    currentRoomId: number
    createdAt: number
    _all: number
  }


  export type ActorMinAggregateInputType = {
    actorId?: true
    actorType?: true
    displayName?: true
    currentRoomId?: true
    createdAt?: true
  }

  export type ActorMaxAggregateInputType = {
    actorId?: true
    actorType?: true
    displayName?: true
    currentRoomId?: true
    createdAt?: true
  }

  export type ActorCountAggregateInputType = {
    actorId?: true
    actorType?: true
    displayName?: true
    currentRoomId?: true
    createdAt?: true
    _all?: true
  }

  export type ActorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actor to aggregate.
     */
    where?: ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorOrderByWithRelationInput | ActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actors
    **/
    _count?: true | ActorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActorMaxAggregateInputType
  }

  export type GetActorAggregateType<T extends ActorAggregateArgs> = {
        [P in keyof T & keyof AggregateActor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActor[P]>
      : GetScalarType<T[P], AggregateActor[P]>
  }




  export type ActorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActorWhereInput
    orderBy?: ActorOrderByWithAggregationInput | ActorOrderByWithAggregationInput[]
    by: ActorScalarFieldEnum[] | ActorScalarFieldEnum
    having?: ActorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActorCountAggregateInputType | true
    _min?: ActorMinAggregateInputType
    _max?: ActorMaxAggregateInputType
  }

  export type ActorGroupByOutputType = {
    actorId: string
    actorType: string
    displayName: string
    currentRoomId: string | null
    createdAt: Date
    _count: ActorCountAggregateOutputType | null
    _min: ActorMinAggregateOutputType | null
    _max: ActorMaxAggregateOutputType | null
  }

  type GetActorGroupByPayload<T extends ActorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActorGroupByOutputType[P]>
            : GetScalarType<T[P], ActorGroupByOutputType[P]>
        }
      >
    >


  export type ActorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    actorId?: boolean
    actorType?: boolean
    displayName?: boolean
    currentRoomId?: boolean
    createdAt?: boolean
    currentRoom?: boolean | Actor$currentRoomArgs<ExtArgs>
    messages?: boolean | Actor$messagesArgs<ExtArgs>
    _count?: boolean | ActorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actor"]>

  export type ActorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    actorId?: boolean
    actorType?: boolean
    displayName?: boolean
    currentRoomId?: boolean
    createdAt?: boolean
    currentRoom?: boolean | Actor$currentRoomArgs<ExtArgs>
  }, ExtArgs["result"]["actor"]>

  export type ActorSelectScalar = {
    actorId?: boolean
    actorType?: boolean
    displayName?: boolean
    currentRoomId?: boolean
    createdAt?: boolean
  }

  export type ActorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currentRoom?: boolean | Actor$currentRoomArgs<ExtArgs>
    messages?: boolean | Actor$messagesArgs<ExtArgs>
    _count?: boolean | ActorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currentRoom?: boolean | Actor$currentRoomArgs<ExtArgs>
  }

  export type $ActorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Actor"
    objects: {
      currentRoom: Prisma.$RoomPayload<ExtArgs> | null
      messages: Prisma.$RoomMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      actorId: string
      actorType: string
      displayName: string
      currentRoomId: string | null
      createdAt: Date
    }, ExtArgs["result"]["actor"]>
    composites: {}
  }

  type ActorGetPayload<S extends boolean | null | undefined | ActorDefaultArgs> = $Result.GetResult<Prisma.$ActorPayload, S>

  type ActorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActorCountAggregateInputType | true
    }

  export interface ActorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Actor'], meta: { name: 'Actor' } }
    /**
     * Find zero or one Actor that matches the filter.
     * @param {ActorFindUniqueArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActorFindUniqueArgs>(args: SelectSubset<T, ActorFindUniqueArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Actor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActorFindUniqueOrThrowArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActorFindUniqueOrThrowArgs>(args: SelectSubset<T, ActorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Actor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorFindFirstArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActorFindFirstArgs>(args?: SelectSubset<T, ActorFindFirstArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Actor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorFindFirstOrThrowArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActorFindFirstOrThrowArgs>(args?: SelectSubset<T, ActorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Actors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actors
     * const actors = await prisma.actor.findMany()
     * 
     * // Get first 10 Actors
     * const actors = await prisma.actor.findMany({ take: 10 })
     * 
     * // Only select the `actorId`
     * const actorWithActorIdOnly = await prisma.actor.findMany({ select: { actorId: true } })
     * 
     */
    findMany<T extends ActorFindManyArgs>(args?: SelectSubset<T, ActorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Actor.
     * @param {ActorCreateArgs} args - Arguments to create a Actor.
     * @example
     * // Create one Actor
     * const Actor = await prisma.actor.create({
     *   data: {
     *     // ... data to create a Actor
     *   }
     * })
     * 
     */
    create<T extends ActorCreateArgs>(args: SelectSubset<T, ActorCreateArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Actors.
     * @param {ActorCreateManyArgs} args - Arguments to create many Actors.
     * @example
     * // Create many Actors
     * const actor = await prisma.actor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActorCreateManyArgs>(args?: SelectSubset<T, ActorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actors and returns the data saved in the database.
     * @param {ActorCreateManyAndReturnArgs} args - Arguments to create many Actors.
     * @example
     * // Create many Actors
     * const actor = await prisma.actor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actors and only return the `actorId`
     * const actorWithActorIdOnly = await prisma.actor.createManyAndReturn({ 
     *   select: { actorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActorCreateManyAndReturnArgs>(args?: SelectSubset<T, ActorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Actor.
     * @param {ActorDeleteArgs} args - Arguments to delete one Actor.
     * @example
     * // Delete one Actor
     * const Actor = await prisma.actor.delete({
     *   where: {
     *     // ... filter to delete one Actor
     *   }
     * })
     * 
     */
    delete<T extends ActorDeleteArgs>(args: SelectSubset<T, ActorDeleteArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Actor.
     * @param {ActorUpdateArgs} args - Arguments to update one Actor.
     * @example
     * // Update one Actor
     * const actor = await prisma.actor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActorUpdateArgs>(args: SelectSubset<T, ActorUpdateArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Actors.
     * @param {ActorDeleteManyArgs} args - Arguments to filter Actors to delete.
     * @example
     * // Delete a few Actors
     * const { count } = await prisma.actor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActorDeleteManyArgs>(args?: SelectSubset<T, ActorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actors
     * const actor = await prisma.actor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActorUpdateManyArgs>(args: SelectSubset<T, ActorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Actor.
     * @param {ActorUpsertArgs} args - Arguments to update or create a Actor.
     * @example
     * // Update or create a Actor
     * const actor = await prisma.actor.upsert({
     *   create: {
     *     // ... data to create a Actor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actor we want to update
     *   }
     * })
     */
    upsert<T extends ActorUpsertArgs>(args: SelectSubset<T, ActorUpsertArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorCountArgs} args - Arguments to filter Actors to count.
     * @example
     * // Count the number of Actors
     * const count = await prisma.actor.count({
     *   where: {
     *     // ... the filter for the Actors we want to count
     *   }
     * })
    **/
    count<T extends ActorCountArgs>(
      args?: Subset<T, ActorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActorAggregateArgs>(args: Subset<T, ActorAggregateArgs>): Prisma.PrismaPromise<GetActorAggregateType<T>>

    /**
     * Group by Actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorGroupByArgs} args - Group by arguments.
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
      T extends ActorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActorGroupByArgs['orderBy'] }
        : { orderBy?: ActorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Actor model
   */
  readonly fields: ActorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    currentRoom<T extends Actor$currentRoomArgs<ExtArgs> = {}>(args?: Subset<T, Actor$currentRoomArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    messages<T extends Actor$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Actor$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Actor model
   */ 
  interface ActorFieldRefs {
    readonly actorId: FieldRef<"Actor", 'String'>
    readonly actorType: FieldRef<"Actor", 'String'>
    readonly displayName: FieldRef<"Actor", 'String'>
    readonly currentRoomId: FieldRef<"Actor", 'String'>
    readonly createdAt: FieldRef<"Actor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Actor findUnique
   */
  export type ActorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * Filter, which Actor to fetch.
     */
    where: ActorWhereUniqueInput
  }

  /**
   * Actor findUniqueOrThrow
   */
  export type ActorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * Filter, which Actor to fetch.
     */
    where: ActorWhereUniqueInput
  }

  /**
   * Actor findFirst
   */
  export type ActorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * Filter, which Actor to fetch.
     */
    where?: ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorOrderByWithRelationInput | ActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actors.
     */
    cursor?: ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actors.
     */
    distinct?: ActorScalarFieldEnum | ActorScalarFieldEnum[]
  }

  /**
   * Actor findFirstOrThrow
   */
  export type ActorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * Filter, which Actor to fetch.
     */
    where?: ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorOrderByWithRelationInput | ActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actors.
     */
    cursor?: ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actors.
     */
    distinct?: ActorScalarFieldEnum | ActorScalarFieldEnum[]
  }

  /**
   * Actor findMany
   */
  export type ActorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * Filter, which Actors to fetch.
     */
    where?: ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorOrderByWithRelationInput | ActorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actors.
     */
    cursor?: ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    distinct?: ActorScalarFieldEnum | ActorScalarFieldEnum[]
  }

  /**
   * Actor create
   */
  export type ActorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * The data needed to create a Actor.
     */
    data: XOR<ActorCreateInput, ActorUncheckedCreateInput>
  }

  /**
   * Actor createMany
   */
  export type ActorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actors.
     */
    data: ActorCreateManyInput | ActorCreateManyInput[]
  }

  /**
   * Actor createManyAndReturn
   */
  export type ActorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Actors.
     */
    data: ActorCreateManyInput | ActorCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Actor update
   */
  export type ActorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * The data needed to update a Actor.
     */
    data: XOR<ActorUpdateInput, ActorUncheckedUpdateInput>
    /**
     * Choose, which Actor to update.
     */
    where: ActorWhereUniqueInput
  }

  /**
   * Actor updateMany
   */
  export type ActorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actors.
     */
    data: XOR<ActorUpdateManyMutationInput, ActorUncheckedUpdateManyInput>
    /**
     * Filter which Actors to update
     */
    where?: ActorWhereInput
  }

  /**
   * Actor upsert
   */
  export type ActorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * The filter to search for the Actor to update in case it exists.
     */
    where: ActorWhereUniqueInput
    /**
     * In case the Actor found by the `where` argument doesn't exist, create a new Actor with this data.
     */
    create: XOR<ActorCreateInput, ActorUncheckedCreateInput>
    /**
     * In case the Actor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActorUpdateInput, ActorUncheckedUpdateInput>
  }

  /**
   * Actor delete
   */
  export type ActorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
    /**
     * Filter which Actor to delete.
     */
    where: ActorWhereUniqueInput
  }

  /**
   * Actor deleteMany
   */
  export type ActorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actors to delete
     */
    where?: ActorWhereInput
  }

  /**
   * Actor.currentRoom
   */
  export type Actor$currentRoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
  }

  /**
   * Actor.messages
   */
  export type Actor$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    where?: RoomMessageWhereInput
    orderBy?: RoomMessageOrderByWithRelationInput | RoomMessageOrderByWithRelationInput[]
    cursor?: RoomMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomMessageScalarFieldEnum | RoomMessageScalarFieldEnum[]
  }

  /**
   * Actor without action
   */
  export type ActorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actor
     */
    select?: ActorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorInclude<ExtArgs> | null
  }


  /**
   * Model RoomMessage
   */

  export type AggregateRoomMessage = {
    _count: RoomMessageCountAggregateOutputType | null
    _min: RoomMessageMinAggregateOutputType | null
    _max: RoomMessageMaxAggregateOutputType | null
  }

  export type RoomMessageMinAggregateOutputType = {
    messageId: string | null
    roomId: string | null
    actorId: string | null
    content: string | null
    createdAt: Date | null
    contentHash: string | null
  }

  export type RoomMessageMaxAggregateOutputType = {
    messageId: string | null
    roomId: string | null
    actorId: string | null
    content: string | null
    createdAt: Date | null
    contentHash: string | null
  }

  export type RoomMessageCountAggregateOutputType = {
    messageId: number
    roomId: number
    actorId: number
    content: number
    createdAt: number
    contentHash: number
    _all: number
  }


  export type RoomMessageMinAggregateInputType = {
    messageId?: true
    roomId?: true
    actorId?: true
    content?: true
    createdAt?: true
    contentHash?: true
  }

  export type RoomMessageMaxAggregateInputType = {
    messageId?: true
    roomId?: true
    actorId?: true
    content?: true
    createdAt?: true
    contentHash?: true
  }

  export type RoomMessageCountAggregateInputType = {
    messageId?: true
    roomId?: true
    actorId?: true
    content?: true
    createdAt?: true
    contentHash?: true
    _all?: true
  }

  export type RoomMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomMessage to aggregate.
     */
    where?: RoomMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMessages to fetch.
     */
    orderBy?: RoomMessageOrderByWithRelationInput | RoomMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomMessages
    **/
    _count?: true | RoomMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMessageMaxAggregateInputType
  }

  export type GetRoomMessageAggregateType<T extends RoomMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomMessage[P]>
      : GetScalarType<T[P], AggregateRoomMessage[P]>
  }




  export type RoomMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomMessageWhereInput
    orderBy?: RoomMessageOrderByWithAggregationInput | RoomMessageOrderByWithAggregationInput[]
    by: RoomMessageScalarFieldEnum[] | RoomMessageScalarFieldEnum
    having?: RoomMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomMessageCountAggregateInputType | true
    _min?: RoomMessageMinAggregateInputType
    _max?: RoomMessageMaxAggregateInputType
  }

  export type RoomMessageGroupByOutputType = {
    messageId: string
    roomId: string
    actorId: string
    content: string
    createdAt: Date
    contentHash: string
    _count: RoomMessageCountAggregateOutputType | null
    _min: RoomMessageMinAggregateOutputType | null
    _max: RoomMessageMaxAggregateOutputType | null
  }

  type GetRoomMessageGroupByPayload<T extends RoomMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomMessageGroupByOutputType[P]>
            : GetScalarType<T[P], RoomMessageGroupByOutputType[P]>
        }
      >
    >


  export type RoomMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    messageId?: boolean
    roomId?: boolean
    actorId?: boolean
    content?: boolean
    createdAt?: boolean
    contentHash?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    actor?: boolean | ActorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMessage"]>

  export type RoomMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    messageId?: boolean
    roomId?: boolean
    actorId?: boolean
    content?: boolean
    createdAt?: boolean
    contentHash?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    actor?: boolean | ActorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomMessage"]>

  export type RoomMessageSelectScalar = {
    messageId?: boolean
    roomId?: boolean
    actorId?: boolean
    content?: boolean
    createdAt?: boolean
    contentHash?: boolean
  }

  export type RoomMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    actor?: boolean | ActorDefaultArgs<ExtArgs>
  }
  export type RoomMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    actor?: boolean | ActorDefaultArgs<ExtArgs>
  }

  export type $RoomMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomMessage"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      actor: Prisma.$ActorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      messageId: string
      roomId: string
      actorId: string
      content: string
      createdAt: Date
      contentHash: string
    }, ExtArgs["result"]["roomMessage"]>
    composites: {}
  }

  type RoomMessageGetPayload<S extends boolean | null | undefined | RoomMessageDefaultArgs> = $Result.GetResult<Prisma.$RoomMessagePayload, S>

  type RoomMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoomMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoomMessageCountAggregateInputType | true
    }

  export interface RoomMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomMessage'], meta: { name: 'RoomMessage' } }
    /**
     * Find zero or one RoomMessage that matches the filter.
     * @param {RoomMessageFindUniqueArgs} args - Arguments to find a RoomMessage
     * @example
     * // Get one RoomMessage
     * const roomMessage = await prisma.roomMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomMessageFindUniqueArgs>(args: SelectSubset<T, RoomMessageFindUniqueArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one RoomMessage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoomMessageFindUniqueOrThrowArgs} args - Arguments to find a RoomMessage
     * @example
     * // Get one RoomMessage
     * const roomMessage = await prisma.roomMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first RoomMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageFindFirstArgs} args - Arguments to find a RoomMessage
     * @example
     * // Get one RoomMessage
     * const roomMessage = await prisma.roomMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomMessageFindFirstArgs>(args?: SelectSubset<T, RoomMessageFindFirstArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first RoomMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageFindFirstOrThrowArgs} args - Arguments to find a RoomMessage
     * @example
     * // Get one RoomMessage
     * const roomMessage = await prisma.roomMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more RoomMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomMessages
     * const roomMessages = await prisma.roomMessage.findMany()
     * 
     * // Get first 10 RoomMessages
     * const roomMessages = await prisma.roomMessage.findMany({ take: 10 })
     * 
     * // Only select the `messageId`
     * const roomMessageWithMessageIdOnly = await prisma.roomMessage.findMany({ select: { messageId: true } })
     * 
     */
    findMany<T extends RoomMessageFindManyArgs>(args?: SelectSubset<T, RoomMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a RoomMessage.
     * @param {RoomMessageCreateArgs} args - Arguments to create a RoomMessage.
     * @example
     * // Create one RoomMessage
     * const RoomMessage = await prisma.roomMessage.create({
     *   data: {
     *     // ... data to create a RoomMessage
     *   }
     * })
     * 
     */
    create<T extends RoomMessageCreateArgs>(args: SelectSubset<T, RoomMessageCreateArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many RoomMessages.
     * @param {RoomMessageCreateManyArgs} args - Arguments to create many RoomMessages.
     * @example
     * // Create many RoomMessages
     * const roomMessage = await prisma.roomMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomMessageCreateManyArgs>(args?: SelectSubset<T, RoomMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomMessages and returns the data saved in the database.
     * @param {RoomMessageCreateManyAndReturnArgs} args - Arguments to create many RoomMessages.
     * @example
     * // Create many RoomMessages
     * const roomMessage = await prisma.roomMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomMessages and only return the `messageId`
     * const roomMessageWithMessageIdOnly = await prisma.roomMessage.createManyAndReturn({ 
     *   select: { messageId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a RoomMessage.
     * @param {RoomMessageDeleteArgs} args - Arguments to delete one RoomMessage.
     * @example
     * // Delete one RoomMessage
     * const RoomMessage = await prisma.roomMessage.delete({
     *   where: {
     *     // ... filter to delete one RoomMessage
     *   }
     * })
     * 
     */
    delete<T extends RoomMessageDeleteArgs>(args: SelectSubset<T, RoomMessageDeleteArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one RoomMessage.
     * @param {RoomMessageUpdateArgs} args - Arguments to update one RoomMessage.
     * @example
     * // Update one RoomMessage
     * const roomMessage = await prisma.roomMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomMessageUpdateArgs>(args: SelectSubset<T, RoomMessageUpdateArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more RoomMessages.
     * @param {RoomMessageDeleteManyArgs} args - Arguments to filter RoomMessages to delete.
     * @example
     * // Delete a few RoomMessages
     * const { count } = await prisma.roomMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomMessageDeleteManyArgs>(args?: SelectSubset<T, RoomMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomMessages
     * const roomMessage = await prisma.roomMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomMessageUpdateManyArgs>(args: SelectSubset<T, RoomMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomMessage.
     * @param {RoomMessageUpsertArgs} args - Arguments to update or create a RoomMessage.
     * @example
     * // Update or create a RoomMessage
     * const roomMessage = await prisma.roomMessage.upsert({
     *   create: {
     *     // ... data to create a RoomMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomMessage we want to update
     *   }
     * })
     */
    upsert<T extends RoomMessageUpsertArgs>(args: SelectSubset<T, RoomMessageUpsertArgs<ExtArgs>>): Prisma__RoomMessageClient<$Result.GetResult<Prisma.$RoomMessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of RoomMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageCountArgs} args - Arguments to filter RoomMessages to count.
     * @example
     * // Count the number of RoomMessages
     * const count = await prisma.roomMessage.count({
     *   where: {
     *     // ... the filter for the RoomMessages we want to count
     *   }
     * })
    **/
    count<T extends RoomMessageCountArgs>(
      args?: Subset<T, RoomMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomMessageAggregateArgs>(args: Subset<T, RoomMessageAggregateArgs>): Prisma.PrismaPromise<GetRoomMessageAggregateType<T>>

    /**
     * Group by RoomMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomMessageGroupByArgs} args - Group by arguments.
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
      T extends RoomMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomMessageGroupByArgs['orderBy'] }
        : { orderBy?: RoomMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomMessage model
   */
  readonly fields: RoomMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    actor<T extends ActorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActorDefaultArgs<ExtArgs>>): Prisma__ActorClient<$Result.GetResult<Prisma.$ActorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the RoomMessage model
   */ 
  interface RoomMessageFieldRefs {
    readonly messageId: FieldRef<"RoomMessage", 'String'>
    readonly roomId: FieldRef<"RoomMessage", 'String'>
    readonly actorId: FieldRef<"RoomMessage", 'String'>
    readonly content: FieldRef<"RoomMessage", 'String'>
    readonly createdAt: FieldRef<"RoomMessage", 'DateTime'>
    readonly contentHash: FieldRef<"RoomMessage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RoomMessage findUnique
   */
  export type RoomMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which RoomMessage to fetch.
     */
    where: RoomMessageWhereUniqueInput
  }

  /**
   * RoomMessage findUniqueOrThrow
   */
  export type RoomMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which RoomMessage to fetch.
     */
    where: RoomMessageWhereUniqueInput
  }

  /**
   * RoomMessage findFirst
   */
  export type RoomMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which RoomMessage to fetch.
     */
    where?: RoomMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMessages to fetch.
     */
    orderBy?: RoomMessageOrderByWithRelationInput | RoomMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomMessages.
     */
    cursor?: RoomMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomMessages.
     */
    distinct?: RoomMessageScalarFieldEnum | RoomMessageScalarFieldEnum[]
  }

  /**
   * RoomMessage findFirstOrThrow
   */
  export type RoomMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which RoomMessage to fetch.
     */
    where?: RoomMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMessages to fetch.
     */
    orderBy?: RoomMessageOrderByWithRelationInput | RoomMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomMessages.
     */
    cursor?: RoomMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomMessages.
     */
    distinct?: RoomMessageScalarFieldEnum | RoomMessageScalarFieldEnum[]
  }

  /**
   * RoomMessage findMany
   */
  export type RoomMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * Filter, which RoomMessages to fetch.
     */
    where?: RoomMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomMessages to fetch.
     */
    orderBy?: RoomMessageOrderByWithRelationInput | RoomMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomMessages.
     */
    cursor?: RoomMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomMessages.
     */
    skip?: number
    distinct?: RoomMessageScalarFieldEnum | RoomMessageScalarFieldEnum[]
  }

  /**
   * RoomMessage create
   */
  export type RoomMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomMessage.
     */
    data: XOR<RoomMessageCreateInput, RoomMessageUncheckedCreateInput>
  }

  /**
   * RoomMessage createMany
   */
  export type RoomMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomMessages.
     */
    data: RoomMessageCreateManyInput | RoomMessageCreateManyInput[]
  }

  /**
   * RoomMessage createManyAndReturn
   */
  export type RoomMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many RoomMessages.
     */
    data: RoomMessageCreateManyInput | RoomMessageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomMessage update
   */
  export type RoomMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomMessage.
     */
    data: XOR<RoomMessageUpdateInput, RoomMessageUncheckedUpdateInput>
    /**
     * Choose, which RoomMessage to update.
     */
    where: RoomMessageWhereUniqueInput
  }

  /**
   * RoomMessage updateMany
   */
  export type RoomMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomMessages.
     */
    data: XOR<RoomMessageUpdateManyMutationInput, RoomMessageUncheckedUpdateManyInput>
    /**
     * Filter which RoomMessages to update
     */
    where?: RoomMessageWhereInput
  }

  /**
   * RoomMessage upsert
   */
  export type RoomMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomMessage to update in case it exists.
     */
    where: RoomMessageWhereUniqueInput
    /**
     * In case the RoomMessage found by the `where` argument doesn't exist, create a new RoomMessage with this data.
     */
    create: XOR<RoomMessageCreateInput, RoomMessageUncheckedCreateInput>
    /**
     * In case the RoomMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomMessageUpdateInput, RoomMessageUncheckedUpdateInput>
  }

  /**
   * RoomMessage delete
   */
  export type RoomMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
    /**
     * Filter which RoomMessage to delete.
     */
    where: RoomMessageWhereUniqueInput
  }

  /**
   * RoomMessage deleteMany
   */
  export type RoomMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomMessages to delete
     */
    where?: RoomMessageWhereInput
  }

  /**
   * RoomMessage without action
   */
  export type RoomMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomMessage
     */
    select?: RoomMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomMessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BillScalarFieldEnum: {
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

  export type BillScalarFieldEnum = (typeof BillScalarFieldEnum)[keyof typeof BillScalarFieldEnum]


  export const ArtifactScalarFieldEnum: {
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

  export type ArtifactScalarFieldEnum = (typeof ArtifactScalarFieldEnum)[keyof typeof ArtifactScalarFieldEnum]


  export const LedgerEventScalarFieldEnum: {
    eventId: 'eventId',
    timestamp: 'timestamp',
    actorId: 'actorId',
    action: 'action',
    entityRefs: 'entityRefs',
    dataHash: 'dataHash',
    prevEventHash: 'prevEventHash',
    eventHash: 'eventHash'
  };

  export type LedgerEventScalarFieldEnum = (typeof LedgerEventScalarFieldEnum)[keyof typeof LedgerEventScalarFieldEnum]


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

  export type AgentEpochScoreScalarFieldEnum = (typeof AgentEpochScoreScalarFieldEnum)[keyof typeof AgentEpochScoreScalarFieldEnum]


  export const AgentEpochCountersScalarFieldEnum: {
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

  export type AgentEpochCountersScalarFieldEnum = (typeof AgentEpochCountersScalarFieldEnum)[keyof typeof AgentEpochCountersScalarFieldEnum]


  export const RoomScalarFieldEnum: {
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

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const ActorScalarFieldEnum: {
    actorId: 'actorId',
    actorType: 'actorType',
    displayName: 'displayName',
    currentRoomId: 'currentRoomId',
    createdAt: 'createdAt'
  };

  export type ActorScalarFieldEnum = (typeof ActorScalarFieldEnum)[keyof typeof ActorScalarFieldEnum]


  export const RoomMessageScalarFieldEnum: {
    messageId: 'messageId',
    roomId: 'roomId',
    actorId: 'actorId',
    content: 'content',
    createdAt: 'createdAt',
    contentHash: 'contentHash'
  };

  export type RoomMessageScalarFieldEnum = (typeof RoomMessageScalarFieldEnum)[keyof typeof RoomMessageScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type BillWhereInput = {
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    bill_id?: StringFilter<"Bill"> | string
    currentState?: StringFilter<"Bill"> | string
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    updatedAt?: DateTimeFilter<"Bill"> | Date | string
    latestDraftArtifactId?: StringNullableFilter<"Bill"> | string | null
    latestTranslationArtifactId?: StringNullableFilter<"Bill"> | string | null
    latestEvidenceArtifactId?: StringNullableFilter<"Bill"> | string | null
    latestGateArtifactId?: StringNullableFilter<"Bill"> | string | null
    latestAuditArtifactId?: StringNullableFilter<"Bill"> | string | null
    latestBundleArtifactId?: StringNullableFilter<"Bill"> | string | null
    publishedBundleArtifactId?: StringNullableFilter<"Bill"> | string | null
  }

  export type BillOrderByWithRelationInput = {
    bill_id?: SortOrder
    currentState?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latestDraftArtifactId?: SortOrderInput | SortOrder
    latestTranslationArtifactId?: SortOrderInput | SortOrder
    latestEvidenceArtifactId?: SortOrderInput | SortOrder
    latestGateArtifactId?: SortOrderInput | SortOrder
    latestAuditArtifactId?: SortOrderInput | SortOrder
    latestBundleArtifactId?: SortOrderInput | SortOrder
    publishedBundleArtifactId?: SortOrderInput | SortOrder
  }

  export type BillWhereUniqueInput = Prisma.AtLeast<{
    bill_id?: string
    AND?: BillWhereInput | BillWhereInput[]
    OR?: BillWhereInput[]
    NOT?: BillWhereInput | BillWhereInput[]
    currentState?: StringFilter<"Bill"> | string
    createdAt?: DateTimeFilter<"Bill"> | Date | string
    updatedAt?: DateTimeFilter<"Bill"> | Date | string
    latestDraftArtifactId?: StringNullableFilter<"Bill"> | string | null
    latestTranslationArtifactId?: StringNullableFilter<"Bill"> | string | null
    latestEvidenceArtifactId?: StringNullableFilter<"Bill"> | string | null
    latestGateArtifactId?: StringNullableFilter<"Bill"> | string | null
    latestAuditArtifactId?: StringNullableFilter<"Bill"> | string | null
    latestBundleArtifactId?: StringNullableFilter<"Bill"> | string | null
    publishedBundleArtifactId?: StringNullableFilter<"Bill"> | string | null
  }, "bill_id">

  export type BillOrderByWithAggregationInput = {
    bill_id?: SortOrder
    currentState?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latestDraftArtifactId?: SortOrderInput | SortOrder
    latestTranslationArtifactId?: SortOrderInput | SortOrder
    latestEvidenceArtifactId?: SortOrderInput | SortOrder
    latestGateArtifactId?: SortOrderInput | SortOrder
    latestAuditArtifactId?: SortOrderInput | SortOrder
    latestBundleArtifactId?: SortOrderInput | SortOrder
    publishedBundleArtifactId?: SortOrderInput | SortOrder
    _count?: BillCountOrderByAggregateInput
    _max?: BillMaxOrderByAggregateInput
    _min?: BillMinOrderByAggregateInput
  }

  export type BillScalarWhereWithAggregatesInput = {
    AND?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    OR?: BillScalarWhereWithAggregatesInput[]
    NOT?: BillScalarWhereWithAggregatesInput | BillScalarWhereWithAggregatesInput[]
    bill_id?: StringWithAggregatesFilter<"Bill"> | string
    currentState?: StringWithAggregatesFilter<"Bill"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bill"> | Date | string
    latestDraftArtifactId?: StringNullableWithAggregatesFilter<"Bill"> | string | null
    latestTranslationArtifactId?: StringNullableWithAggregatesFilter<"Bill"> | string | null
    latestEvidenceArtifactId?: StringNullableWithAggregatesFilter<"Bill"> | string | null
    latestGateArtifactId?: StringNullableWithAggregatesFilter<"Bill"> | string | null
    latestAuditArtifactId?: StringNullableWithAggregatesFilter<"Bill"> | string | null
    latestBundleArtifactId?: StringNullableWithAggregatesFilter<"Bill"> | string | null
    publishedBundleArtifactId?: StringNullableWithAggregatesFilter<"Bill"> | string | null
  }

  export type ArtifactWhereInput = {
    AND?: ArtifactWhereInput | ArtifactWhereInput[]
    OR?: ArtifactWhereInput[]
    NOT?: ArtifactWhereInput | ArtifactWhereInput[]
    artifactId?: StringFilter<"Artifact"> | string
    artifactType?: StringFilter<"Artifact"> | string
    version?: StringFilter<"Artifact"> | string
    billId?: StringNullableFilter<"Artifact"> | string | null
    createdAt?: DateTimeFilter<"Artifact"> | Date | string
    createdBy?: StringFilter<"Artifact"> | string
    contentHash?: StringFilter<"Artifact"> | string
    hashCanon?: StringFilter<"Artifact"> | string
    bodyJson?: StringFilter<"Artifact"> | string
    bodySizeBytes?: IntNullableFilter<"Artifact"> | number | null
  }

  export type ArtifactOrderByWithRelationInput = {
    artifactId?: SortOrder
    artifactType?: SortOrder
    version?: SortOrder
    billId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    contentHash?: SortOrder
    hashCanon?: SortOrder
    bodyJson?: SortOrder
    bodySizeBytes?: SortOrderInput | SortOrder
  }

  export type ArtifactWhereUniqueInput = Prisma.AtLeast<{
    artifactId?: string
    AND?: ArtifactWhereInput | ArtifactWhereInput[]
    OR?: ArtifactWhereInput[]
    NOT?: ArtifactWhereInput | ArtifactWhereInput[]
    artifactType?: StringFilter<"Artifact"> | string
    version?: StringFilter<"Artifact"> | string
    billId?: StringNullableFilter<"Artifact"> | string | null
    createdAt?: DateTimeFilter<"Artifact"> | Date | string
    createdBy?: StringFilter<"Artifact"> | string
    contentHash?: StringFilter<"Artifact"> | string
    hashCanon?: StringFilter<"Artifact"> | string
    bodyJson?: StringFilter<"Artifact"> | string
    bodySizeBytes?: IntNullableFilter<"Artifact"> | number | null
  }, "artifactId">

  export type ArtifactOrderByWithAggregationInput = {
    artifactId?: SortOrder
    artifactType?: SortOrder
    version?: SortOrder
    billId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    contentHash?: SortOrder
    hashCanon?: SortOrder
    bodyJson?: SortOrder
    bodySizeBytes?: SortOrderInput | SortOrder
    _count?: ArtifactCountOrderByAggregateInput
    _avg?: ArtifactAvgOrderByAggregateInput
    _max?: ArtifactMaxOrderByAggregateInput
    _min?: ArtifactMinOrderByAggregateInput
    _sum?: ArtifactSumOrderByAggregateInput
  }

  export type ArtifactScalarWhereWithAggregatesInput = {
    AND?: ArtifactScalarWhereWithAggregatesInput | ArtifactScalarWhereWithAggregatesInput[]
    OR?: ArtifactScalarWhereWithAggregatesInput[]
    NOT?: ArtifactScalarWhereWithAggregatesInput | ArtifactScalarWhereWithAggregatesInput[]
    artifactId?: StringWithAggregatesFilter<"Artifact"> | string
    artifactType?: StringWithAggregatesFilter<"Artifact"> | string
    version?: StringWithAggregatesFilter<"Artifact"> | string
    billId?: StringNullableWithAggregatesFilter<"Artifact"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Artifact"> | Date | string
    createdBy?: StringWithAggregatesFilter<"Artifact"> | string
    contentHash?: StringWithAggregatesFilter<"Artifact"> | string
    hashCanon?: StringWithAggregatesFilter<"Artifact"> | string
    bodyJson?: StringWithAggregatesFilter<"Artifact"> | string
    bodySizeBytes?: IntNullableWithAggregatesFilter<"Artifact"> | number | null
  }

  export type LedgerEventWhereInput = {
    AND?: LedgerEventWhereInput | LedgerEventWhereInput[]
    OR?: LedgerEventWhereInput[]
    NOT?: LedgerEventWhereInput | LedgerEventWhereInput[]
    eventId?: StringFilter<"LedgerEvent"> | string
    timestamp?: DateTimeFilter<"LedgerEvent"> | Date | string
    actorId?: StringFilter<"LedgerEvent"> | string
    action?: StringFilter<"LedgerEvent"> | string
    entityRefs?: StringFilter<"LedgerEvent"> | string
    dataHash?: StringFilter<"LedgerEvent"> | string
    prevEventHash?: StringFilter<"LedgerEvent"> | string
    eventHash?: StringFilter<"LedgerEvent"> | string
  }

  export type LedgerEventOrderByWithRelationInput = {
    eventId?: SortOrder
    timestamp?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entityRefs?: SortOrder
    dataHash?: SortOrder
    prevEventHash?: SortOrder
    eventHash?: SortOrder
  }

  export type LedgerEventWhereUniqueInput = Prisma.AtLeast<{
    eventId?: string
    AND?: LedgerEventWhereInput | LedgerEventWhereInput[]
    OR?: LedgerEventWhereInput[]
    NOT?: LedgerEventWhereInput | LedgerEventWhereInput[]
    timestamp?: DateTimeFilter<"LedgerEvent"> | Date | string
    actorId?: StringFilter<"LedgerEvent"> | string
    action?: StringFilter<"LedgerEvent"> | string
    entityRefs?: StringFilter<"LedgerEvent"> | string
    dataHash?: StringFilter<"LedgerEvent"> | string
    prevEventHash?: StringFilter<"LedgerEvent"> | string
    eventHash?: StringFilter<"LedgerEvent"> | string
  }, "eventId">

  export type LedgerEventOrderByWithAggregationInput = {
    eventId?: SortOrder
    timestamp?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entityRefs?: SortOrder
    dataHash?: SortOrder
    prevEventHash?: SortOrder
    eventHash?: SortOrder
    _count?: LedgerEventCountOrderByAggregateInput
    _max?: LedgerEventMaxOrderByAggregateInput
    _min?: LedgerEventMinOrderByAggregateInput
  }

  export type LedgerEventScalarWhereWithAggregatesInput = {
    AND?: LedgerEventScalarWhereWithAggregatesInput | LedgerEventScalarWhereWithAggregatesInput[]
    OR?: LedgerEventScalarWhereWithAggregatesInput[]
    NOT?: LedgerEventScalarWhereWithAggregatesInput | LedgerEventScalarWhereWithAggregatesInput[]
    eventId?: StringWithAggregatesFilter<"LedgerEvent"> | string
    timestamp?: DateTimeWithAggregatesFilter<"LedgerEvent"> | Date | string
    actorId?: StringWithAggregatesFilter<"LedgerEvent"> | string
    action?: StringWithAggregatesFilter<"LedgerEvent"> | string
    entityRefs?: StringWithAggregatesFilter<"LedgerEvent"> | string
    dataHash?: StringWithAggregatesFilter<"LedgerEvent"> | string
    prevEventHash?: StringWithAggregatesFilter<"LedgerEvent"> | string
    eventHash?: StringWithAggregatesFilter<"LedgerEvent"> | string
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
    S?: FloatFilter<"AgentEpochScore"> | number
    C?: FloatFilter<"AgentEpochScore"> | number
    T?: FloatFilter<"AgentEpochScore"> | number
    L?: FloatFilter<"AgentEpochScore"> | number
    R?: FloatFilter<"AgentEpochScore"> | number
    fitness_raw?: FloatFilter<"AgentEpochScore"> | number
    fitness_norm?: FloatFilter<"AgentEpochScore"> | number
    quota_q?: FloatFilter<"AgentEpochScore"> | number
    tokens_minted?: IntFilter<"AgentEpochScore"> | number
    vote_weight_w?: FloatFilter<"AgentEpochScore"> | number
    p_softmax?: FloatFilter<"AgentEpochScore"> | number
    params_version?: StringFilter<"AgentEpochScore"> | string
    calc_hash?: StringFilter<"AgentEpochScore"> | string
    createdAt?: DateTimeFilter<"AgentEpochScore"> | Date | string
  }

  export type AgentEpochScoreOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    epochKey?: SortOrder
    S?: SortOrder
    C?: SortOrder
    T?: SortOrder
    L?: SortOrder
    R?: SortOrder
    fitness_raw?: SortOrder
    fitness_norm?: SortOrder
    quota_q?: SortOrder
    tokens_minted?: SortOrder
    vote_weight_w?: SortOrder
    p_softmax?: SortOrder
    params_version?: SortOrder
    calc_hash?: SortOrder
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
    S?: FloatFilter<"AgentEpochScore"> | number
    C?: FloatFilter<"AgentEpochScore"> | number
    T?: FloatFilter<"AgentEpochScore"> | number
    L?: FloatFilter<"AgentEpochScore"> | number
    R?: FloatFilter<"AgentEpochScore"> | number
    fitness_raw?: FloatFilter<"AgentEpochScore"> | number
    fitness_norm?: FloatFilter<"AgentEpochScore"> | number
    quota_q?: FloatFilter<"AgentEpochScore"> | number
    tokens_minted?: IntFilter<"AgentEpochScore"> | number
    vote_weight_w?: FloatFilter<"AgentEpochScore"> | number
    p_softmax?: FloatFilter<"AgentEpochScore"> | number
    params_version?: StringFilter<"AgentEpochScore"> | string
    calc_hash?: StringFilter<"AgentEpochScore"> | string
    createdAt?: DateTimeFilter<"AgentEpochScore"> | Date | string
  }, "id" | "agentId_epochKey">

  export type AgentEpochScoreOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    epochKey?: SortOrder
    S?: SortOrder
    C?: SortOrder
    T?: SortOrder
    L?: SortOrder
    R?: SortOrder
    fitness_raw?: SortOrder
    fitness_norm?: SortOrder
    quota_q?: SortOrder
    tokens_minted?: SortOrder
    vote_weight_w?: SortOrder
    p_softmax?: SortOrder
    params_version?: SortOrder
    calc_hash?: SortOrder
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
    S?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    C?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    T?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    L?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    R?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    fitness_raw?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    fitness_norm?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    quota_q?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    tokens_minted?: IntWithAggregatesFilter<"AgentEpochScore"> | number
    vote_weight_w?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    p_softmax?: FloatWithAggregatesFilter<"AgentEpochScore"> | number
    params_version?: StringWithAggregatesFilter<"AgentEpochScore"> | string
    calc_hash?: StringWithAggregatesFilter<"AgentEpochScore"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AgentEpochScore"> | Date | string
  }

  export type AgentEpochCountersWhereInput = {
    AND?: AgentEpochCountersWhereInput | AgentEpochCountersWhereInput[]
    OR?: AgentEpochCountersWhereInput[]
    NOT?: AgentEpochCountersWhereInput | AgentEpochCountersWhereInput[]
    id?: StringFilter<"AgentEpochCounters"> | string
    agentId?: StringFilter<"AgentEpochCounters"> | string
    epochKey?: StringFilter<"AgentEpochCounters"> | string
    n_fail?: IntFilter<"AgentEpochCounters"> | number
    n_warn?: IntFilter<"AgentEpochCounters"> | number
    n_auditFail?: IntFilter<"AgentEpochCounters"> | number
    n_auditWarn?: IntFilter<"AgentEpochCounters"> | number
    n_suspicious?: IntFilter<"AgentEpochCounters"> | number
    n_published?: IntFilter<"AgentEpochCounters"> | number
    createdAt?: DateTimeFilter<"AgentEpochCounters"> | Date | string
  }

  export type AgentEpochCountersOrderByWithRelationInput = {
    id?: SortOrder
    agentId?: SortOrder
    epochKey?: SortOrder
    n_fail?: SortOrder
    n_warn?: SortOrder
    n_auditFail?: SortOrder
    n_auditWarn?: SortOrder
    n_suspicious?: SortOrder
    n_published?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentEpochCountersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    agentId_epochKey?: AgentEpochCountersAgentIdEpochKeyCompoundUniqueInput
    AND?: AgentEpochCountersWhereInput | AgentEpochCountersWhereInput[]
    OR?: AgentEpochCountersWhereInput[]
    NOT?: AgentEpochCountersWhereInput | AgentEpochCountersWhereInput[]
    agentId?: StringFilter<"AgentEpochCounters"> | string
    epochKey?: StringFilter<"AgentEpochCounters"> | string
    n_fail?: IntFilter<"AgentEpochCounters"> | number
    n_warn?: IntFilter<"AgentEpochCounters"> | number
    n_auditFail?: IntFilter<"AgentEpochCounters"> | number
    n_auditWarn?: IntFilter<"AgentEpochCounters"> | number
    n_suspicious?: IntFilter<"AgentEpochCounters"> | number
    n_published?: IntFilter<"AgentEpochCounters"> | number
    createdAt?: DateTimeFilter<"AgentEpochCounters"> | Date | string
  }, "id" | "agentId_epochKey">

  export type AgentEpochCountersOrderByWithAggregationInput = {
    id?: SortOrder
    agentId?: SortOrder
    epochKey?: SortOrder
    n_fail?: SortOrder
    n_warn?: SortOrder
    n_auditFail?: SortOrder
    n_auditWarn?: SortOrder
    n_suspicious?: SortOrder
    n_published?: SortOrder
    createdAt?: SortOrder
    _count?: AgentEpochCountersCountOrderByAggregateInput
    _avg?: AgentEpochCountersAvgOrderByAggregateInput
    _max?: AgentEpochCountersMaxOrderByAggregateInput
    _min?: AgentEpochCountersMinOrderByAggregateInput
    _sum?: AgentEpochCountersSumOrderByAggregateInput
  }

  export type AgentEpochCountersScalarWhereWithAggregatesInput = {
    AND?: AgentEpochCountersScalarWhereWithAggregatesInput | AgentEpochCountersScalarWhereWithAggregatesInput[]
    OR?: AgentEpochCountersScalarWhereWithAggregatesInput[]
    NOT?: AgentEpochCountersScalarWhereWithAggregatesInput | AgentEpochCountersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgentEpochCounters"> | string
    agentId?: StringWithAggregatesFilter<"AgentEpochCounters"> | string
    epochKey?: StringWithAggregatesFilter<"AgentEpochCounters"> | string
    n_fail?: IntWithAggregatesFilter<"AgentEpochCounters"> | number
    n_warn?: IntWithAggregatesFilter<"AgentEpochCounters"> | number
    n_auditFail?: IntWithAggregatesFilter<"AgentEpochCounters"> | number
    n_auditWarn?: IntWithAggregatesFilter<"AgentEpochCounters"> | number
    n_suspicious?: IntWithAggregatesFilter<"AgentEpochCounters"> | number
    n_published?: IntWithAggregatesFilter<"AgentEpochCounters"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AgentEpochCounters"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    roomId?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    purpose?: StringFilter<"Room"> | string
    visibility?: StringFilter<"Room"> | string
    riskTier?: StringFilter<"Room"> | string
    capabilitiesJson?: StringFilter<"Room"> | string
    status?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    createdBy?: StringFilter<"Room"> | string
    roomHash?: StringFilter<"Room"> | string
    actors?: ActorListRelationFilter
    messages?: RoomMessageListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    roomId?: SortOrder
    name?: SortOrder
    purpose?: SortOrder
    visibility?: SortOrder
    riskTier?: SortOrder
    capabilitiesJson?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    roomHash?: SortOrder
    actors?: ActorOrderByRelationAggregateInput
    messages?: RoomMessageOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    roomId?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringFilter<"Room"> | string
    purpose?: StringFilter<"Room"> | string
    visibility?: StringFilter<"Room"> | string
    riskTier?: StringFilter<"Room"> | string
    capabilitiesJson?: StringFilter<"Room"> | string
    status?: StringFilter<"Room"> | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    createdBy?: StringFilter<"Room"> | string
    roomHash?: StringFilter<"Room"> | string
    actors?: ActorListRelationFilter
    messages?: RoomMessageListRelationFilter
  }, "roomId">

  export type RoomOrderByWithAggregationInput = {
    roomId?: SortOrder
    name?: SortOrder
    purpose?: SortOrder
    visibility?: SortOrder
    riskTier?: SortOrder
    capabilitiesJson?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    roomHash?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    roomId?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    purpose?: StringWithAggregatesFilter<"Room"> | string
    visibility?: StringWithAggregatesFilter<"Room"> | string
    riskTier?: StringWithAggregatesFilter<"Room"> | string
    capabilitiesJson?: StringWithAggregatesFilter<"Room"> | string
    status?: StringWithAggregatesFilter<"Room"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    createdBy?: StringWithAggregatesFilter<"Room"> | string
    roomHash?: StringWithAggregatesFilter<"Room"> | string
  }

  export type ActorWhereInput = {
    AND?: ActorWhereInput | ActorWhereInput[]
    OR?: ActorWhereInput[]
    NOT?: ActorWhereInput | ActorWhereInput[]
    actorId?: StringFilter<"Actor"> | string
    actorType?: StringFilter<"Actor"> | string
    displayName?: StringFilter<"Actor"> | string
    currentRoomId?: StringNullableFilter<"Actor"> | string | null
    createdAt?: DateTimeFilter<"Actor"> | Date | string
    currentRoom?: XOR<RoomNullableRelationFilter, RoomWhereInput> | null
    messages?: RoomMessageListRelationFilter
  }

  export type ActorOrderByWithRelationInput = {
    actorId?: SortOrder
    actorType?: SortOrder
    displayName?: SortOrder
    currentRoomId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    currentRoom?: RoomOrderByWithRelationInput
    messages?: RoomMessageOrderByRelationAggregateInput
  }

  export type ActorWhereUniqueInput = Prisma.AtLeast<{
    actorId?: string
    AND?: ActorWhereInput | ActorWhereInput[]
    OR?: ActorWhereInput[]
    NOT?: ActorWhereInput | ActorWhereInput[]
    actorType?: StringFilter<"Actor"> | string
    displayName?: StringFilter<"Actor"> | string
    currentRoomId?: StringNullableFilter<"Actor"> | string | null
    createdAt?: DateTimeFilter<"Actor"> | Date | string
    currentRoom?: XOR<RoomNullableRelationFilter, RoomWhereInput> | null
    messages?: RoomMessageListRelationFilter
  }, "actorId">

  export type ActorOrderByWithAggregationInput = {
    actorId?: SortOrder
    actorType?: SortOrder
    displayName?: SortOrder
    currentRoomId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActorCountOrderByAggregateInput
    _max?: ActorMaxOrderByAggregateInput
    _min?: ActorMinOrderByAggregateInput
  }

  export type ActorScalarWhereWithAggregatesInput = {
    AND?: ActorScalarWhereWithAggregatesInput | ActorScalarWhereWithAggregatesInput[]
    OR?: ActorScalarWhereWithAggregatesInput[]
    NOT?: ActorScalarWhereWithAggregatesInput | ActorScalarWhereWithAggregatesInput[]
    actorId?: StringWithAggregatesFilter<"Actor"> | string
    actorType?: StringWithAggregatesFilter<"Actor"> | string
    displayName?: StringWithAggregatesFilter<"Actor"> | string
    currentRoomId?: StringNullableWithAggregatesFilter<"Actor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Actor"> | Date | string
  }

  export type RoomMessageWhereInput = {
    AND?: RoomMessageWhereInput | RoomMessageWhereInput[]
    OR?: RoomMessageWhereInput[]
    NOT?: RoomMessageWhereInput | RoomMessageWhereInput[]
    messageId?: StringFilter<"RoomMessage"> | string
    roomId?: StringFilter<"RoomMessage"> | string
    actorId?: StringFilter<"RoomMessage"> | string
    content?: StringFilter<"RoomMessage"> | string
    createdAt?: DateTimeFilter<"RoomMessage"> | Date | string
    contentHash?: StringFilter<"RoomMessage"> | string
    room?: XOR<RoomRelationFilter, RoomWhereInput>
    actor?: XOR<ActorRelationFilter, ActorWhereInput>
  }

  export type RoomMessageOrderByWithRelationInput = {
    messageId?: SortOrder
    roomId?: SortOrder
    actorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    contentHash?: SortOrder
    room?: RoomOrderByWithRelationInput
    actor?: ActorOrderByWithRelationInput
  }

  export type RoomMessageWhereUniqueInput = Prisma.AtLeast<{
    messageId?: string
    AND?: RoomMessageWhereInput | RoomMessageWhereInput[]
    OR?: RoomMessageWhereInput[]
    NOT?: RoomMessageWhereInput | RoomMessageWhereInput[]
    roomId?: StringFilter<"RoomMessage"> | string
    actorId?: StringFilter<"RoomMessage"> | string
    content?: StringFilter<"RoomMessage"> | string
    createdAt?: DateTimeFilter<"RoomMessage"> | Date | string
    contentHash?: StringFilter<"RoomMessage"> | string
    room?: XOR<RoomRelationFilter, RoomWhereInput>
    actor?: XOR<ActorRelationFilter, ActorWhereInput>
  }, "messageId">

  export type RoomMessageOrderByWithAggregationInput = {
    messageId?: SortOrder
    roomId?: SortOrder
    actorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    contentHash?: SortOrder
    _count?: RoomMessageCountOrderByAggregateInput
    _max?: RoomMessageMaxOrderByAggregateInput
    _min?: RoomMessageMinOrderByAggregateInput
  }

  export type RoomMessageScalarWhereWithAggregatesInput = {
    AND?: RoomMessageScalarWhereWithAggregatesInput | RoomMessageScalarWhereWithAggregatesInput[]
    OR?: RoomMessageScalarWhereWithAggregatesInput[]
    NOT?: RoomMessageScalarWhereWithAggregatesInput | RoomMessageScalarWhereWithAggregatesInput[]
    messageId?: StringWithAggregatesFilter<"RoomMessage"> | string
    roomId?: StringWithAggregatesFilter<"RoomMessage"> | string
    actorId?: StringWithAggregatesFilter<"RoomMessage"> | string
    content?: StringWithAggregatesFilter<"RoomMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RoomMessage"> | Date | string
    contentHash?: StringWithAggregatesFilter<"RoomMessage"> | string
  }

  export type BillCreateInput = {
    bill_id: string
    currentState: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latestDraftArtifactId?: string | null
    latestTranslationArtifactId?: string | null
    latestEvidenceArtifactId?: string | null
    latestGateArtifactId?: string | null
    latestAuditArtifactId?: string | null
    latestBundleArtifactId?: string | null
    publishedBundleArtifactId?: string | null
  }

  export type BillUncheckedCreateInput = {
    bill_id: string
    currentState: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latestDraftArtifactId?: string | null
    latestTranslationArtifactId?: string | null
    latestEvidenceArtifactId?: string | null
    latestGateArtifactId?: string | null
    latestAuditArtifactId?: string | null
    latestBundleArtifactId?: string | null
    publishedBundleArtifactId?: string | null
  }

  export type BillUpdateInput = {
    bill_id?: StringFieldUpdateOperationsInput | string
    currentState?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestDraftArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestTranslationArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestEvidenceArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestGateArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestAuditArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestBundleArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    publishedBundleArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BillUncheckedUpdateInput = {
    bill_id?: StringFieldUpdateOperationsInput | string
    currentState?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestDraftArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestTranslationArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestEvidenceArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestGateArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestAuditArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestBundleArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    publishedBundleArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BillCreateManyInput = {
    bill_id: string
    currentState: string
    createdAt?: Date | string
    updatedAt?: Date | string
    latestDraftArtifactId?: string | null
    latestTranslationArtifactId?: string | null
    latestEvidenceArtifactId?: string | null
    latestGateArtifactId?: string | null
    latestAuditArtifactId?: string | null
    latestBundleArtifactId?: string | null
    publishedBundleArtifactId?: string | null
  }

  export type BillUpdateManyMutationInput = {
    bill_id?: StringFieldUpdateOperationsInput | string
    currentState?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestDraftArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestTranslationArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestEvidenceArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestGateArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestAuditArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestBundleArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    publishedBundleArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BillUncheckedUpdateManyInput = {
    bill_id?: StringFieldUpdateOperationsInput | string
    currentState?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    latestDraftArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestTranslationArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestEvidenceArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestGateArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestAuditArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    latestBundleArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
    publishedBundleArtifactId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtifactCreateInput = {
    artifactId: string
    artifactType: string
    version: string
    billId?: string | null
    createdAt?: Date | string
    createdBy: string
    contentHash: string
    hashCanon?: string
    bodyJson: string
    bodySizeBytes?: number | null
  }

  export type ArtifactUncheckedCreateInput = {
    artifactId: string
    artifactType: string
    version: string
    billId?: string | null
    createdAt?: Date | string
    createdBy: string
    contentHash: string
    hashCanon?: string
    bodyJson: string
    bodySizeBytes?: number | null
  }

  export type ArtifactUpdateInput = {
    artifactId?: StringFieldUpdateOperationsInput | string
    artifactType?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    hashCanon?: StringFieldUpdateOperationsInput | string
    bodyJson?: StringFieldUpdateOperationsInput | string
    bodySizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArtifactUncheckedUpdateInput = {
    artifactId?: StringFieldUpdateOperationsInput | string
    artifactType?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    hashCanon?: StringFieldUpdateOperationsInput | string
    bodyJson?: StringFieldUpdateOperationsInput | string
    bodySizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArtifactCreateManyInput = {
    artifactId: string
    artifactType: string
    version: string
    billId?: string | null
    createdAt?: Date | string
    createdBy: string
    contentHash: string
    hashCanon?: string
    bodyJson: string
    bodySizeBytes?: number | null
  }

  export type ArtifactUpdateManyMutationInput = {
    artifactId?: StringFieldUpdateOperationsInput | string
    artifactType?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    hashCanon?: StringFieldUpdateOperationsInput | string
    bodyJson?: StringFieldUpdateOperationsInput | string
    bodySizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ArtifactUncheckedUpdateManyInput = {
    artifactId?: StringFieldUpdateOperationsInput | string
    artifactType?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    billId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    contentHash?: StringFieldUpdateOperationsInput | string
    hashCanon?: StringFieldUpdateOperationsInput | string
    bodyJson?: StringFieldUpdateOperationsInput | string
    bodySizeBytes?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LedgerEventCreateInput = {
    eventId: string
    timestamp?: Date | string
    actorId: string
    action: string
    entityRefs: string
    dataHash: string
    prevEventHash: string
    eventHash: string
  }

  export type LedgerEventUncheckedCreateInput = {
    eventId: string
    timestamp?: Date | string
    actorId: string
    action: string
    entityRefs: string
    dataHash: string
    prevEventHash: string
    eventHash: string
  }

  export type LedgerEventUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityRefs?: StringFieldUpdateOperationsInput | string
    dataHash?: StringFieldUpdateOperationsInput | string
    prevEventHash?: StringFieldUpdateOperationsInput | string
    eventHash?: StringFieldUpdateOperationsInput | string
  }

  export type LedgerEventUncheckedUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityRefs?: StringFieldUpdateOperationsInput | string
    dataHash?: StringFieldUpdateOperationsInput | string
    prevEventHash?: StringFieldUpdateOperationsInput | string
    eventHash?: StringFieldUpdateOperationsInput | string
  }

  export type LedgerEventCreateManyInput = {
    eventId: string
    timestamp?: Date | string
    actorId: string
    action: string
    entityRefs: string
    dataHash: string
    prevEventHash: string
    eventHash: string
  }

  export type LedgerEventUpdateManyMutationInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityRefs?: StringFieldUpdateOperationsInput | string
    dataHash?: StringFieldUpdateOperationsInput | string
    prevEventHash?: StringFieldUpdateOperationsInput | string
    eventHash?: StringFieldUpdateOperationsInput | string
  }

  export type LedgerEventUncheckedUpdateManyInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityRefs?: StringFieldUpdateOperationsInput | string
    dataHash?: StringFieldUpdateOperationsInput | string
    prevEventHash?: StringFieldUpdateOperationsInput | string
    eventHash?: StringFieldUpdateOperationsInput | string
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
    S: number
    C: number
    T: number
    L: number
    R: number
    fitness_raw: number
    fitness_norm: number
    quota_q: number
    tokens_minted: number
    vote_weight_w: number
    p_softmax: number
    params_version: string
    calc_hash: string
    createdAt?: Date | string
  }

  export type AgentEpochScoreUncheckedCreateInput = {
    id?: string
    agentId: string
    epochKey: string
    S: number
    C: number
    T: number
    L: number
    R: number
    fitness_raw: number
    fitness_norm: number
    quota_q: number
    tokens_minted: number
    vote_weight_w: number
    p_softmax: number
    params_version: string
    calc_hash: string
    createdAt?: Date | string
  }

  export type AgentEpochScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    S?: FloatFieldUpdateOperationsInput | number
    C?: FloatFieldUpdateOperationsInput | number
    T?: FloatFieldUpdateOperationsInput | number
    L?: FloatFieldUpdateOperationsInput | number
    R?: FloatFieldUpdateOperationsInput | number
    fitness_raw?: FloatFieldUpdateOperationsInput | number
    fitness_norm?: FloatFieldUpdateOperationsInput | number
    quota_q?: FloatFieldUpdateOperationsInput | number
    tokens_minted?: IntFieldUpdateOperationsInput | number
    vote_weight_w?: FloatFieldUpdateOperationsInput | number
    p_softmax?: FloatFieldUpdateOperationsInput | number
    params_version?: StringFieldUpdateOperationsInput | string
    calc_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentEpochScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    S?: FloatFieldUpdateOperationsInput | number
    C?: FloatFieldUpdateOperationsInput | number
    T?: FloatFieldUpdateOperationsInput | number
    L?: FloatFieldUpdateOperationsInput | number
    R?: FloatFieldUpdateOperationsInput | number
    fitness_raw?: FloatFieldUpdateOperationsInput | number
    fitness_norm?: FloatFieldUpdateOperationsInput | number
    quota_q?: FloatFieldUpdateOperationsInput | number
    tokens_minted?: IntFieldUpdateOperationsInput | number
    vote_weight_w?: FloatFieldUpdateOperationsInput | number
    p_softmax?: FloatFieldUpdateOperationsInput | number
    params_version?: StringFieldUpdateOperationsInput | string
    calc_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentEpochScoreCreateManyInput = {
    id?: string
    agentId: string
    epochKey: string
    S: number
    C: number
    T: number
    L: number
    R: number
    fitness_raw: number
    fitness_norm: number
    quota_q: number
    tokens_minted: number
    vote_weight_w: number
    p_softmax: number
    params_version: string
    calc_hash: string
    createdAt?: Date | string
  }

  export type AgentEpochScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    S?: FloatFieldUpdateOperationsInput | number
    C?: FloatFieldUpdateOperationsInput | number
    T?: FloatFieldUpdateOperationsInput | number
    L?: FloatFieldUpdateOperationsInput | number
    R?: FloatFieldUpdateOperationsInput | number
    fitness_raw?: FloatFieldUpdateOperationsInput | number
    fitness_norm?: FloatFieldUpdateOperationsInput | number
    quota_q?: FloatFieldUpdateOperationsInput | number
    tokens_minted?: IntFieldUpdateOperationsInput | number
    vote_weight_w?: FloatFieldUpdateOperationsInput | number
    p_softmax?: FloatFieldUpdateOperationsInput | number
    params_version?: StringFieldUpdateOperationsInput | string
    calc_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentEpochScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    S?: FloatFieldUpdateOperationsInput | number
    C?: FloatFieldUpdateOperationsInput | number
    T?: FloatFieldUpdateOperationsInput | number
    L?: FloatFieldUpdateOperationsInput | number
    R?: FloatFieldUpdateOperationsInput | number
    fitness_raw?: FloatFieldUpdateOperationsInput | number
    fitness_norm?: FloatFieldUpdateOperationsInput | number
    quota_q?: FloatFieldUpdateOperationsInput | number
    tokens_minted?: IntFieldUpdateOperationsInput | number
    vote_weight_w?: FloatFieldUpdateOperationsInput | number
    p_softmax?: FloatFieldUpdateOperationsInput | number
    params_version?: StringFieldUpdateOperationsInput | string
    calc_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentEpochCountersCreateInput = {
    id?: string
    agentId: string
    epochKey: string
    n_fail?: number
    n_warn?: number
    n_auditFail?: number
    n_auditWarn?: number
    n_suspicious?: number
    n_published?: number
    createdAt?: Date | string
  }

  export type AgentEpochCountersUncheckedCreateInput = {
    id?: string
    agentId: string
    epochKey: string
    n_fail?: number
    n_warn?: number
    n_auditFail?: number
    n_auditWarn?: number
    n_suspicious?: number
    n_published?: number
    createdAt?: Date | string
  }

  export type AgentEpochCountersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    n_fail?: IntFieldUpdateOperationsInput | number
    n_warn?: IntFieldUpdateOperationsInput | number
    n_auditFail?: IntFieldUpdateOperationsInput | number
    n_auditWarn?: IntFieldUpdateOperationsInput | number
    n_suspicious?: IntFieldUpdateOperationsInput | number
    n_published?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentEpochCountersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    n_fail?: IntFieldUpdateOperationsInput | number
    n_warn?: IntFieldUpdateOperationsInput | number
    n_auditFail?: IntFieldUpdateOperationsInput | number
    n_auditWarn?: IntFieldUpdateOperationsInput | number
    n_suspicious?: IntFieldUpdateOperationsInput | number
    n_published?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentEpochCountersCreateManyInput = {
    id?: string
    agentId: string
    epochKey: string
    n_fail?: number
    n_warn?: number
    n_auditFail?: number
    n_auditWarn?: number
    n_suspicious?: number
    n_published?: number
    createdAt?: Date | string
  }

  export type AgentEpochCountersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    n_fail?: IntFieldUpdateOperationsInput | number
    n_warn?: IntFieldUpdateOperationsInput | number
    n_auditFail?: IntFieldUpdateOperationsInput | number
    n_auditWarn?: IntFieldUpdateOperationsInput | number
    n_suspicious?: IntFieldUpdateOperationsInput | number
    n_published?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentEpochCountersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: StringFieldUpdateOperationsInput | string
    epochKey?: StringFieldUpdateOperationsInput | string
    n_fail?: IntFieldUpdateOperationsInput | number
    n_warn?: IntFieldUpdateOperationsInput | number
    n_auditFail?: IntFieldUpdateOperationsInput | number
    n_auditWarn?: IntFieldUpdateOperationsInput | number
    n_suspicious?: IntFieldUpdateOperationsInput | number
    n_published?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    roomId: string
    name: string
    purpose: string
    visibility: string
    riskTier: string
    capabilitiesJson: string
    status: string
    createdAt?: Date | string
    createdBy: string
    roomHash: string
    actors?: ActorCreateNestedManyWithoutCurrentRoomInput
    messages?: RoomMessageCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    roomId: string
    name: string
    purpose: string
    visibility: string
    riskTier: string
    capabilitiesJson: string
    status: string
    createdAt?: Date | string
    createdBy: string
    roomHash: string
    actors?: ActorUncheckedCreateNestedManyWithoutCurrentRoomInput
    messages?: RoomMessageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    riskTier?: StringFieldUpdateOperationsInput | string
    capabilitiesJson?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    roomHash?: StringFieldUpdateOperationsInput | string
    actors?: ActorUpdateManyWithoutCurrentRoomNestedInput
    messages?: RoomMessageUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    riskTier?: StringFieldUpdateOperationsInput | string
    capabilitiesJson?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    roomHash?: StringFieldUpdateOperationsInput | string
    actors?: ActorUncheckedUpdateManyWithoutCurrentRoomNestedInput
    messages?: RoomMessageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    roomId: string
    name: string
    purpose: string
    visibility: string
    riskTier: string
    capabilitiesJson: string
    status: string
    createdAt?: Date | string
    createdBy: string
    roomHash: string
  }

  export type RoomUpdateManyMutationInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    riskTier?: StringFieldUpdateOperationsInput | string
    capabilitiesJson?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    roomHash?: StringFieldUpdateOperationsInput | string
  }

  export type RoomUncheckedUpdateManyInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    riskTier?: StringFieldUpdateOperationsInput | string
    capabilitiesJson?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    roomHash?: StringFieldUpdateOperationsInput | string
  }

  export type ActorCreateInput = {
    actorId: string
    actorType: string
    displayName: string
    createdAt?: Date | string
    currentRoom?: RoomCreateNestedOneWithoutActorsInput
    messages?: RoomMessageCreateNestedManyWithoutActorInput
  }

  export type ActorUncheckedCreateInput = {
    actorId: string
    actorType: string
    displayName: string
    currentRoomId?: string | null
    createdAt?: Date | string
    messages?: RoomMessageUncheckedCreateNestedManyWithoutActorInput
  }

  export type ActorUpdateInput = {
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentRoom?: RoomUpdateOneWithoutActorsNestedInput
    messages?: RoomMessageUpdateManyWithoutActorNestedInput
  }

  export type ActorUncheckedUpdateInput = {
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    currentRoomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: RoomMessageUncheckedUpdateManyWithoutActorNestedInput
  }

  export type ActorCreateManyInput = {
    actorId: string
    actorType: string
    displayName: string
    currentRoomId?: string | null
    createdAt?: Date | string
  }

  export type ActorUpdateManyMutationInput = {
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActorUncheckedUpdateManyInput = {
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    currentRoomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMessageCreateInput = {
    messageId: string
    content: string
    createdAt?: Date | string
    contentHash: string
    room: RoomCreateNestedOneWithoutMessagesInput
    actor: ActorCreateNestedOneWithoutMessagesInput
  }

  export type RoomMessageUncheckedCreateInput = {
    messageId: string
    roomId: string
    actorId: string
    content: string
    createdAt?: Date | string
    contentHash: string
  }

  export type RoomMessageUpdateInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
    room?: RoomUpdateOneRequiredWithoutMessagesNestedInput
    actor?: ActorUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type RoomMessageUncheckedUpdateInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
  }

  export type RoomMessageCreateManyInput = {
    messageId: string
    roomId: string
    actorId: string
    content: string
    createdAt?: Date | string
    contentHash: string
  }

  export type RoomMessageUpdateManyMutationInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
  }

  export type RoomMessageUncheckedUpdateManyInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BillCountOrderByAggregateInput = {
    bill_id?: SortOrder
    currentState?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latestDraftArtifactId?: SortOrder
    latestTranslationArtifactId?: SortOrder
    latestEvidenceArtifactId?: SortOrder
    latestGateArtifactId?: SortOrder
    latestAuditArtifactId?: SortOrder
    latestBundleArtifactId?: SortOrder
    publishedBundleArtifactId?: SortOrder
  }

  export type BillMaxOrderByAggregateInput = {
    bill_id?: SortOrder
    currentState?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latestDraftArtifactId?: SortOrder
    latestTranslationArtifactId?: SortOrder
    latestEvidenceArtifactId?: SortOrder
    latestGateArtifactId?: SortOrder
    latestAuditArtifactId?: SortOrder
    latestBundleArtifactId?: SortOrder
    publishedBundleArtifactId?: SortOrder
  }

  export type BillMinOrderByAggregateInput = {
    bill_id?: SortOrder
    currentState?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    latestDraftArtifactId?: SortOrder
    latestTranslationArtifactId?: SortOrder
    latestEvidenceArtifactId?: SortOrder
    latestGateArtifactId?: SortOrder
    latestAuditArtifactId?: SortOrder
    latestBundleArtifactId?: SortOrder
    publishedBundleArtifactId?: SortOrder
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ArtifactCountOrderByAggregateInput = {
    artifactId?: SortOrder
    artifactType?: SortOrder
    version?: SortOrder
    billId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    contentHash?: SortOrder
    hashCanon?: SortOrder
    bodyJson?: SortOrder
    bodySizeBytes?: SortOrder
  }

  export type ArtifactAvgOrderByAggregateInput = {
    bodySizeBytes?: SortOrder
  }

  export type ArtifactMaxOrderByAggregateInput = {
    artifactId?: SortOrder
    artifactType?: SortOrder
    version?: SortOrder
    billId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    contentHash?: SortOrder
    hashCanon?: SortOrder
    bodyJson?: SortOrder
    bodySizeBytes?: SortOrder
  }

  export type ArtifactMinOrderByAggregateInput = {
    artifactId?: SortOrder
    artifactType?: SortOrder
    version?: SortOrder
    billId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    contentHash?: SortOrder
    hashCanon?: SortOrder
    bodyJson?: SortOrder
    bodySizeBytes?: SortOrder
  }

  export type ArtifactSumOrderByAggregateInput = {
    bodySizeBytes?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type LedgerEventCountOrderByAggregateInput = {
    eventId?: SortOrder
    timestamp?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entityRefs?: SortOrder
    dataHash?: SortOrder
    prevEventHash?: SortOrder
    eventHash?: SortOrder
  }

  export type LedgerEventMaxOrderByAggregateInput = {
    eventId?: SortOrder
    timestamp?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entityRefs?: SortOrder
    dataHash?: SortOrder
    prevEventHash?: SortOrder
    eventHash?: SortOrder
  }

  export type LedgerEventMinOrderByAggregateInput = {
    eventId?: SortOrder
    timestamp?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    entityRefs?: SortOrder
    dataHash?: SortOrder
    prevEventHash?: SortOrder
    eventHash?: SortOrder
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

  export type AgentEpochScoreAgentIdEpochKeyCompoundUniqueInput = {
    agentId: string
    epochKey: string
  }

  export type AgentEpochScoreCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    epochKey?: SortOrder
    S?: SortOrder
    C?: SortOrder
    T?: SortOrder
    L?: SortOrder
    R?: SortOrder
    fitness_raw?: SortOrder
    fitness_norm?: SortOrder
    quota_q?: SortOrder
    tokens_minted?: SortOrder
    vote_weight_w?: SortOrder
    p_softmax?: SortOrder
    params_version?: SortOrder
    calc_hash?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentEpochScoreAvgOrderByAggregateInput = {
    S?: SortOrder
    C?: SortOrder
    T?: SortOrder
    L?: SortOrder
    R?: SortOrder
    fitness_raw?: SortOrder
    fitness_norm?: SortOrder
    quota_q?: SortOrder
    tokens_minted?: SortOrder
    vote_weight_w?: SortOrder
    p_softmax?: SortOrder
  }

  export type AgentEpochScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    epochKey?: SortOrder
    S?: SortOrder
    C?: SortOrder
    T?: SortOrder
    L?: SortOrder
    R?: SortOrder
    fitness_raw?: SortOrder
    fitness_norm?: SortOrder
    quota_q?: SortOrder
    tokens_minted?: SortOrder
    vote_weight_w?: SortOrder
    p_softmax?: SortOrder
    params_version?: SortOrder
    calc_hash?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentEpochScoreMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    epochKey?: SortOrder
    S?: SortOrder
    C?: SortOrder
    T?: SortOrder
    L?: SortOrder
    R?: SortOrder
    fitness_raw?: SortOrder
    fitness_norm?: SortOrder
    quota_q?: SortOrder
    tokens_minted?: SortOrder
    vote_weight_w?: SortOrder
    p_softmax?: SortOrder
    params_version?: SortOrder
    calc_hash?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentEpochScoreSumOrderByAggregateInput = {
    S?: SortOrder
    C?: SortOrder
    T?: SortOrder
    L?: SortOrder
    R?: SortOrder
    fitness_raw?: SortOrder
    fitness_norm?: SortOrder
    quota_q?: SortOrder
    tokens_minted?: SortOrder
    vote_weight_w?: SortOrder
    p_softmax?: SortOrder
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

  export type AgentEpochCountersAgentIdEpochKeyCompoundUniqueInput = {
    agentId: string
    epochKey: string
  }

  export type AgentEpochCountersCountOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    epochKey?: SortOrder
    n_fail?: SortOrder
    n_warn?: SortOrder
    n_auditFail?: SortOrder
    n_auditWarn?: SortOrder
    n_suspicious?: SortOrder
    n_published?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentEpochCountersAvgOrderByAggregateInput = {
    n_fail?: SortOrder
    n_warn?: SortOrder
    n_auditFail?: SortOrder
    n_auditWarn?: SortOrder
    n_suspicious?: SortOrder
    n_published?: SortOrder
  }

  export type AgentEpochCountersMaxOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    epochKey?: SortOrder
    n_fail?: SortOrder
    n_warn?: SortOrder
    n_auditFail?: SortOrder
    n_auditWarn?: SortOrder
    n_suspicious?: SortOrder
    n_published?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentEpochCountersMinOrderByAggregateInput = {
    id?: SortOrder
    agentId?: SortOrder
    epochKey?: SortOrder
    n_fail?: SortOrder
    n_warn?: SortOrder
    n_auditFail?: SortOrder
    n_auditWarn?: SortOrder
    n_suspicious?: SortOrder
    n_published?: SortOrder
    createdAt?: SortOrder
  }

  export type AgentEpochCountersSumOrderByAggregateInput = {
    n_fail?: SortOrder
    n_warn?: SortOrder
    n_auditFail?: SortOrder
    n_auditWarn?: SortOrder
    n_suspicious?: SortOrder
    n_published?: SortOrder
  }

  export type ActorListRelationFilter = {
    every?: ActorWhereInput
    some?: ActorWhereInput
    none?: ActorWhereInput
  }

  export type RoomMessageListRelationFilter = {
    every?: RoomMessageWhereInput
    some?: RoomMessageWhereInput
    none?: RoomMessageWhereInput
  }

  export type ActorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    roomId?: SortOrder
    name?: SortOrder
    purpose?: SortOrder
    visibility?: SortOrder
    riskTier?: SortOrder
    capabilitiesJson?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    roomHash?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    roomId?: SortOrder
    name?: SortOrder
    purpose?: SortOrder
    visibility?: SortOrder
    riskTier?: SortOrder
    capabilitiesJson?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    roomHash?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    roomId?: SortOrder
    name?: SortOrder
    purpose?: SortOrder
    visibility?: SortOrder
    riskTier?: SortOrder
    capabilitiesJson?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    roomHash?: SortOrder
  }

  export type RoomNullableRelationFilter = {
    is?: RoomWhereInput | null
    isNot?: RoomWhereInput | null
  }

  export type ActorCountOrderByAggregateInput = {
    actorId?: SortOrder
    actorType?: SortOrder
    displayName?: SortOrder
    currentRoomId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActorMaxOrderByAggregateInput = {
    actorId?: SortOrder
    actorType?: SortOrder
    displayName?: SortOrder
    currentRoomId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActorMinOrderByAggregateInput = {
    actorId?: SortOrder
    actorType?: SortOrder
    displayName?: SortOrder
    currentRoomId?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type ActorRelationFilter = {
    is?: ActorWhereInput
    isNot?: ActorWhereInput
  }

  export type RoomMessageCountOrderByAggregateInput = {
    messageId?: SortOrder
    roomId?: SortOrder
    actorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    contentHash?: SortOrder
  }

  export type RoomMessageMaxOrderByAggregateInput = {
    messageId?: SortOrder
    roomId?: SortOrder
    actorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    contentHash?: SortOrder
  }

  export type RoomMessageMinOrderByAggregateInput = {
    messageId?: SortOrder
    roomId?: SortOrder
    actorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    contentHash?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ActorCreateNestedManyWithoutCurrentRoomInput = {
    create?: XOR<ActorCreateWithoutCurrentRoomInput, ActorUncheckedCreateWithoutCurrentRoomInput> | ActorCreateWithoutCurrentRoomInput[] | ActorUncheckedCreateWithoutCurrentRoomInput[]
    connectOrCreate?: ActorCreateOrConnectWithoutCurrentRoomInput | ActorCreateOrConnectWithoutCurrentRoomInput[]
    createMany?: ActorCreateManyCurrentRoomInputEnvelope
    connect?: ActorWhereUniqueInput | ActorWhereUniqueInput[]
  }

  export type RoomMessageCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomMessageCreateWithoutRoomInput, RoomMessageUncheckedCreateWithoutRoomInput> | RoomMessageCreateWithoutRoomInput[] | RoomMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutRoomInput | RoomMessageCreateOrConnectWithoutRoomInput[]
    createMany?: RoomMessageCreateManyRoomInputEnvelope
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
  }

  export type ActorUncheckedCreateNestedManyWithoutCurrentRoomInput = {
    create?: XOR<ActorCreateWithoutCurrentRoomInput, ActorUncheckedCreateWithoutCurrentRoomInput> | ActorCreateWithoutCurrentRoomInput[] | ActorUncheckedCreateWithoutCurrentRoomInput[]
    connectOrCreate?: ActorCreateOrConnectWithoutCurrentRoomInput | ActorCreateOrConnectWithoutCurrentRoomInput[]
    createMany?: ActorCreateManyCurrentRoomInputEnvelope
    connect?: ActorWhereUniqueInput | ActorWhereUniqueInput[]
  }

  export type RoomMessageUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomMessageCreateWithoutRoomInput, RoomMessageUncheckedCreateWithoutRoomInput> | RoomMessageCreateWithoutRoomInput[] | RoomMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutRoomInput | RoomMessageCreateOrConnectWithoutRoomInput[]
    createMany?: RoomMessageCreateManyRoomInputEnvelope
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
  }

  export type ActorUpdateManyWithoutCurrentRoomNestedInput = {
    create?: XOR<ActorCreateWithoutCurrentRoomInput, ActorUncheckedCreateWithoutCurrentRoomInput> | ActorCreateWithoutCurrentRoomInput[] | ActorUncheckedCreateWithoutCurrentRoomInput[]
    connectOrCreate?: ActorCreateOrConnectWithoutCurrentRoomInput | ActorCreateOrConnectWithoutCurrentRoomInput[]
    upsert?: ActorUpsertWithWhereUniqueWithoutCurrentRoomInput | ActorUpsertWithWhereUniqueWithoutCurrentRoomInput[]
    createMany?: ActorCreateManyCurrentRoomInputEnvelope
    set?: ActorWhereUniqueInput | ActorWhereUniqueInput[]
    disconnect?: ActorWhereUniqueInput | ActorWhereUniqueInput[]
    delete?: ActorWhereUniqueInput | ActorWhereUniqueInput[]
    connect?: ActorWhereUniqueInput | ActorWhereUniqueInput[]
    update?: ActorUpdateWithWhereUniqueWithoutCurrentRoomInput | ActorUpdateWithWhereUniqueWithoutCurrentRoomInput[]
    updateMany?: ActorUpdateManyWithWhereWithoutCurrentRoomInput | ActorUpdateManyWithWhereWithoutCurrentRoomInput[]
    deleteMany?: ActorScalarWhereInput | ActorScalarWhereInput[]
  }

  export type RoomMessageUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomMessageCreateWithoutRoomInput, RoomMessageUncheckedCreateWithoutRoomInput> | RoomMessageCreateWithoutRoomInput[] | RoomMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutRoomInput | RoomMessageCreateOrConnectWithoutRoomInput[]
    upsert?: RoomMessageUpsertWithWhereUniqueWithoutRoomInput | RoomMessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomMessageCreateManyRoomInputEnvelope
    set?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    disconnect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    delete?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    update?: RoomMessageUpdateWithWhereUniqueWithoutRoomInput | RoomMessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomMessageUpdateManyWithWhereWithoutRoomInput | RoomMessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomMessageScalarWhereInput | RoomMessageScalarWhereInput[]
  }

  export type ActorUncheckedUpdateManyWithoutCurrentRoomNestedInput = {
    create?: XOR<ActorCreateWithoutCurrentRoomInput, ActorUncheckedCreateWithoutCurrentRoomInput> | ActorCreateWithoutCurrentRoomInput[] | ActorUncheckedCreateWithoutCurrentRoomInput[]
    connectOrCreate?: ActorCreateOrConnectWithoutCurrentRoomInput | ActorCreateOrConnectWithoutCurrentRoomInput[]
    upsert?: ActorUpsertWithWhereUniqueWithoutCurrentRoomInput | ActorUpsertWithWhereUniqueWithoutCurrentRoomInput[]
    createMany?: ActorCreateManyCurrentRoomInputEnvelope
    set?: ActorWhereUniqueInput | ActorWhereUniqueInput[]
    disconnect?: ActorWhereUniqueInput | ActorWhereUniqueInput[]
    delete?: ActorWhereUniqueInput | ActorWhereUniqueInput[]
    connect?: ActorWhereUniqueInput | ActorWhereUniqueInput[]
    update?: ActorUpdateWithWhereUniqueWithoutCurrentRoomInput | ActorUpdateWithWhereUniqueWithoutCurrentRoomInput[]
    updateMany?: ActorUpdateManyWithWhereWithoutCurrentRoomInput | ActorUpdateManyWithWhereWithoutCurrentRoomInput[]
    deleteMany?: ActorScalarWhereInput | ActorScalarWhereInput[]
  }

  export type RoomMessageUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomMessageCreateWithoutRoomInput, RoomMessageUncheckedCreateWithoutRoomInput> | RoomMessageCreateWithoutRoomInput[] | RoomMessageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutRoomInput | RoomMessageCreateOrConnectWithoutRoomInput[]
    upsert?: RoomMessageUpsertWithWhereUniqueWithoutRoomInput | RoomMessageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomMessageCreateManyRoomInputEnvelope
    set?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    disconnect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    delete?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    update?: RoomMessageUpdateWithWhereUniqueWithoutRoomInput | RoomMessageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomMessageUpdateManyWithWhereWithoutRoomInput | RoomMessageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomMessageScalarWhereInput | RoomMessageScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutActorsInput = {
    create?: XOR<RoomCreateWithoutActorsInput, RoomUncheckedCreateWithoutActorsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutActorsInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomMessageCreateNestedManyWithoutActorInput = {
    create?: XOR<RoomMessageCreateWithoutActorInput, RoomMessageUncheckedCreateWithoutActorInput> | RoomMessageCreateWithoutActorInput[] | RoomMessageUncheckedCreateWithoutActorInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutActorInput | RoomMessageCreateOrConnectWithoutActorInput[]
    createMany?: RoomMessageCreateManyActorInputEnvelope
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
  }

  export type RoomMessageUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<RoomMessageCreateWithoutActorInput, RoomMessageUncheckedCreateWithoutActorInput> | RoomMessageCreateWithoutActorInput[] | RoomMessageUncheckedCreateWithoutActorInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutActorInput | RoomMessageCreateOrConnectWithoutActorInput[]
    createMany?: RoomMessageCreateManyActorInputEnvelope
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
  }

  export type RoomUpdateOneWithoutActorsNestedInput = {
    create?: XOR<RoomCreateWithoutActorsInput, RoomUncheckedCreateWithoutActorsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutActorsInput
    upsert?: RoomUpsertWithoutActorsInput
    disconnect?: RoomWhereInput | boolean
    delete?: RoomWhereInput | boolean
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutActorsInput, RoomUpdateWithoutActorsInput>, RoomUncheckedUpdateWithoutActorsInput>
  }

  export type RoomMessageUpdateManyWithoutActorNestedInput = {
    create?: XOR<RoomMessageCreateWithoutActorInput, RoomMessageUncheckedCreateWithoutActorInput> | RoomMessageCreateWithoutActorInput[] | RoomMessageUncheckedCreateWithoutActorInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutActorInput | RoomMessageCreateOrConnectWithoutActorInput[]
    upsert?: RoomMessageUpsertWithWhereUniqueWithoutActorInput | RoomMessageUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: RoomMessageCreateManyActorInputEnvelope
    set?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    disconnect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    delete?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    update?: RoomMessageUpdateWithWhereUniqueWithoutActorInput | RoomMessageUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: RoomMessageUpdateManyWithWhereWithoutActorInput | RoomMessageUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: RoomMessageScalarWhereInput | RoomMessageScalarWhereInput[]
  }

  export type RoomMessageUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<RoomMessageCreateWithoutActorInput, RoomMessageUncheckedCreateWithoutActorInput> | RoomMessageCreateWithoutActorInput[] | RoomMessageUncheckedCreateWithoutActorInput[]
    connectOrCreate?: RoomMessageCreateOrConnectWithoutActorInput | RoomMessageCreateOrConnectWithoutActorInput[]
    upsert?: RoomMessageUpsertWithWhereUniqueWithoutActorInput | RoomMessageUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: RoomMessageCreateManyActorInputEnvelope
    set?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    disconnect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    delete?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    connect?: RoomMessageWhereUniqueInput | RoomMessageWhereUniqueInput[]
    update?: RoomMessageUpdateWithWhereUniqueWithoutActorInput | RoomMessageUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: RoomMessageUpdateManyWithWhereWithoutActorInput | RoomMessageUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: RoomMessageScalarWhereInput | RoomMessageScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutMessagesInput = {
    create?: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMessagesInput
    connect?: RoomWhereUniqueInput
  }

  export type ActorCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ActorCreateWithoutMessagesInput, ActorUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ActorCreateOrConnectWithoutMessagesInput
    connect?: ActorWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutMessagesInput
    upsert?: RoomUpsertWithoutMessagesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutMessagesInput, RoomUpdateWithoutMessagesInput>, RoomUncheckedUpdateWithoutMessagesInput>
  }

  export type ActorUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ActorCreateWithoutMessagesInput, ActorUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ActorCreateOrConnectWithoutMessagesInput
    upsert?: ActorUpsertWithoutMessagesInput
    connect?: ActorWhereUniqueInput
    update?: XOR<XOR<ActorUpdateToOneWithWhereWithoutMessagesInput, ActorUpdateWithoutMessagesInput>, ActorUncheckedUpdateWithoutMessagesInput>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type ActorCreateWithoutCurrentRoomInput = {
    actorId: string
    actorType: string
    displayName: string
    createdAt?: Date | string
    messages?: RoomMessageCreateNestedManyWithoutActorInput
  }

  export type ActorUncheckedCreateWithoutCurrentRoomInput = {
    actorId: string
    actorType: string
    displayName: string
    createdAt?: Date | string
    messages?: RoomMessageUncheckedCreateNestedManyWithoutActorInput
  }

  export type ActorCreateOrConnectWithoutCurrentRoomInput = {
    where: ActorWhereUniqueInput
    create: XOR<ActorCreateWithoutCurrentRoomInput, ActorUncheckedCreateWithoutCurrentRoomInput>
  }

  export type ActorCreateManyCurrentRoomInputEnvelope = {
    data: ActorCreateManyCurrentRoomInput | ActorCreateManyCurrentRoomInput[]
  }

  export type RoomMessageCreateWithoutRoomInput = {
    messageId: string
    content: string
    createdAt?: Date | string
    contentHash: string
    actor: ActorCreateNestedOneWithoutMessagesInput
  }

  export type RoomMessageUncheckedCreateWithoutRoomInput = {
    messageId: string
    actorId: string
    content: string
    createdAt?: Date | string
    contentHash: string
  }

  export type RoomMessageCreateOrConnectWithoutRoomInput = {
    where: RoomMessageWhereUniqueInput
    create: XOR<RoomMessageCreateWithoutRoomInput, RoomMessageUncheckedCreateWithoutRoomInput>
  }

  export type RoomMessageCreateManyRoomInputEnvelope = {
    data: RoomMessageCreateManyRoomInput | RoomMessageCreateManyRoomInput[]
  }

  export type ActorUpsertWithWhereUniqueWithoutCurrentRoomInput = {
    where: ActorWhereUniqueInput
    update: XOR<ActorUpdateWithoutCurrentRoomInput, ActorUncheckedUpdateWithoutCurrentRoomInput>
    create: XOR<ActorCreateWithoutCurrentRoomInput, ActorUncheckedCreateWithoutCurrentRoomInput>
  }

  export type ActorUpdateWithWhereUniqueWithoutCurrentRoomInput = {
    where: ActorWhereUniqueInput
    data: XOR<ActorUpdateWithoutCurrentRoomInput, ActorUncheckedUpdateWithoutCurrentRoomInput>
  }

  export type ActorUpdateManyWithWhereWithoutCurrentRoomInput = {
    where: ActorScalarWhereInput
    data: XOR<ActorUpdateManyMutationInput, ActorUncheckedUpdateManyWithoutCurrentRoomInput>
  }

  export type ActorScalarWhereInput = {
    AND?: ActorScalarWhereInput | ActorScalarWhereInput[]
    OR?: ActorScalarWhereInput[]
    NOT?: ActorScalarWhereInput | ActorScalarWhereInput[]
    actorId?: StringFilter<"Actor"> | string
    actorType?: StringFilter<"Actor"> | string
    displayName?: StringFilter<"Actor"> | string
    currentRoomId?: StringNullableFilter<"Actor"> | string | null
    createdAt?: DateTimeFilter<"Actor"> | Date | string
  }

  export type RoomMessageUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomMessageWhereUniqueInput
    update: XOR<RoomMessageUpdateWithoutRoomInput, RoomMessageUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomMessageCreateWithoutRoomInput, RoomMessageUncheckedCreateWithoutRoomInput>
  }

  export type RoomMessageUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomMessageWhereUniqueInput
    data: XOR<RoomMessageUpdateWithoutRoomInput, RoomMessageUncheckedUpdateWithoutRoomInput>
  }

  export type RoomMessageUpdateManyWithWhereWithoutRoomInput = {
    where: RoomMessageScalarWhereInput
    data: XOR<RoomMessageUpdateManyMutationInput, RoomMessageUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomMessageScalarWhereInput = {
    AND?: RoomMessageScalarWhereInput | RoomMessageScalarWhereInput[]
    OR?: RoomMessageScalarWhereInput[]
    NOT?: RoomMessageScalarWhereInput | RoomMessageScalarWhereInput[]
    messageId?: StringFilter<"RoomMessage"> | string
    roomId?: StringFilter<"RoomMessage"> | string
    actorId?: StringFilter<"RoomMessage"> | string
    content?: StringFilter<"RoomMessage"> | string
    createdAt?: DateTimeFilter<"RoomMessage"> | Date | string
    contentHash?: StringFilter<"RoomMessage"> | string
  }

  export type RoomCreateWithoutActorsInput = {
    roomId: string
    name: string
    purpose: string
    visibility: string
    riskTier: string
    capabilitiesJson: string
    status: string
    createdAt?: Date | string
    createdBy: string
    roomHash: string
    messages?: RoomMessageCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutActorsInput = {
    roomId: string
    name: string
    purpose: string
    visibility: string
    riskTier: string
    capabilitiesJson: string
    status: string
    createdAt?: Date | string
    createdBy: string
    roomHash: string
    messages?: RoomMessageUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutActorsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutActorsInput, RoomUncheckedCreateWithoutActorsInput>
  }

  export type RoomMessageCreateWithoutActorInput = {
    messageId: string
    content: string
    createdAt?: Date | string
    contentHash: string
    room: RoomCreateNestedOneWithoutMessagesInput
  }

  export type RoomMessageUncheckedCreateWithoutActorInput = {
    messageId: string
    roomId: string
    content: string
    createdAt?: Date | string
    contentHash: string
  }

  export type RoomMessageCreateOrConnectWithoutActorInput = {
    where: RoomMessageWhereUniqueInput
    create: XOR<RoomMessageCreateWithoutActorInput, RoomMessageUncheckedCreateWithoutActorInput>
  }

  export type RoomMessageCreateManyActorInputEnvelope = {
    data: RoomMessageCreateManyActorInput | RoomMessageCreateManyActorInput[]
  }

  export type RoomUpsertWithoutActorsInput = {
    update: XOR<RoomUpdateWithoutActorsInput, RoomUncheckedUpdateWithoutActorsInput>
    create: XOR<RoomCreateWithoutActorsInput, RoomUncheckedCreateWithoutActorsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutActorsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutActorsInput, RoomUncheckedUpdateWithoutActorsInput>
  }

  export type RoomUpdateWithoutActorsInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    riskTier?: StringFieldUpdateOperationsInput | string
    capabilitiesJson?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    roomHash?: StringFieldUpdateOperationsInput | string
    messages?: RoomMessageUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutActorsInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    riskTier?: StringFieldUpdateOperationsInput | string
    capabilitiesJson?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    roomHash?: StringFieldUpdateOperationsInput | string
    messages?: RoomMessageUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomMessageUpsertWithWhereUniqueWithoutActorInput = {
    where: RoomMessageWhereUniqueInput
    update: XOR<RoomMessageUpdateWithoutActorInput, RoomMessageUncheckedUpdateWithoutActorInput>
    create: XOR<RoomMessageCreateWithoutActorInput, RoomMessageUncheckedCreateWithoutActorInput>
  }

  export type RoomMessageUpdateWithWhereUniqueWithoutActorInput = {
    where: RoomMessageWhereUniqueInput
    data: XOR<RoomMessageUpdateWithoutActorInput, RoomMessageUncheckedUpdateWithoutActorInput>
  }

  export type RoomMessageUpdateManyWithWhereWithoutActorInput = {
    where: RoomMessageScalarWhereInput
    data: XOR<RoomMessageUpdateManyMutationInput, RoomMessageUncheckedUpdateManyWithoutActorInput>
  }

  export type RoomCreateWithoutMessagesInput = {
    roomId: string
    name: string
    purpose: string
    visibility: string
    riskTier: string
    capabilitiesJson: string
    status: string
    createdAt?: Date | string
    createdBy: string
    roomHash: string
    actors?: ActorCreateNestedManyWithoutCurrentRoomInput
  }

  export type RoomUncheckedCreateWithoutMessagesInput = {
    roomId: string
    name: string
    purpose: string
    visibility: string
    riskTier: string
    capabilitiesJson: string
    status: string
    createdAt?: Date | string
    createdBy: string
    roomHash: string
    actors?: ActorUncheckedCreateNestedManyWithoutCurrentRoomInput
  }

  export type RoomCreateOrConnectWithoutMessagesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
  }

  export type ActorCreateWithoutMessagesInput = {
    actorId: string
    actorType: string
    displayName: string
    createdAt?: Date | string
    currentRoom?: RoomCreateNestedOneWithoutActorsInput
  }

  export type ActorUncheckedCreateWithoutMessagesInput = {
    actorId: string
    actorType: string
    displayName: string
    currentRoomId?: string | null
    createdAt?: Date | string
  }

  export type ActorCreateOrConnectWithoutMessagesInput = {
    where: ActorWhereUniqueInput
    create: XOR<ActorCreateWithoutMessagesInput, ActorUncheckedCreateWithoutMessagesInput>
  }

  export type RoomUpsertWithoutMessagesInput = {
    update: XOR<RoomUpdateWithoutMessagesInput, RoomUncheckedUpdateWithoutMessagesInput>
    create: XOR<RoomCreateWithoutMessagesInput, RoomUncheckedCreateWithoutMessagesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutMessagesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutMessagesInput, RoomUncheckedUpdateWithoutMessagesInput>
  }

  export type RoomUpdateWithoutMessagesInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    riskTier?: StringFieldUpdateOperationsInput | string
    capabilitiesJson?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    roomHash?: StringFieldUpdateOperationsInput | string
    actors?: ActorUpdateManyWithoutCurrentRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutMessagesInput = {
    roomId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    purpose?: StringFieldUpdateOperationsInput | string
    visibility?: StringFieldUpdateOperationsInput | string
    riskTier?: StringFieldUpdateOperationsInput | string
    capabilitiesJson?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: StringFieldUpdateOperationsInput | string
    roomHash?: StringFieldUpdateOperationsInput | string
    actors?: ActorUncheckedUpdateManyWithoutCurrentRoomNestedInput
  }

  export type ActorUpsertWithoutMessagesInput = {
    update: XOR<ActorUpdateWithoutMessagesInput, ActorUncheckedUpdateWithoutMessagesInput>
    create: XOR<ActorCreateWithoutMessagesInput, ActorUncheckedCreateWithoutMessagesInput>
    where?: ActorWhereInput
  }

  export type ActorUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ActorWhereInput
    data: XOR<ActorUpdateWithoutMessagesInput, ActorUncheckedUpdateWithoutMessagesInput>
  }

  export type ActorUpdateWithoutMessagesInput = {
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentRoom?: RoomUpdateOneWithoutActorsNestedInput
  }

  export type ActorUncheckedUpdateWithoutMessagesInput = {
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    currentRoomId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActorCreateManyCurrentRoomInput = {
    actorId: string
    actorType: string
    displayName: string
    createdAt?: Date | string
  }

  export type RoomMessageCreateManyRoomInput = {
    messageId: string
    actorId: string
    content: string
    createdAt?: Date | string
    contentHash: string
  }

  export type ActorUpdateWithoutCurrentRoomInput = {
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: RoomMessageUpdateManyWithoutActorNestedInput
  }

  export type ActorUncheckedUpdateWithoutCurrentRoomInput = {
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: RoomMessageUncheckedUpdateManyWithoutActorNestedInput
  }

  export type ActorUncheckedUpdateManyWithoutCurrentRoomInput = {
    actorId?: StringFieldUpdateOperationsInput | string
    actorType?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomMessageUpdateWithoutRoomInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
    actor?: ActorUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type RoomMessageUncheckedUpdateWithoutRoomInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
  }

  export type RoomMessageUncheckedUpdateManyWithoutRoomInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
  }

  export type RoomMessageCreateManyActorInput = {
    messageId: string
    roomId: string
    content: string
    createdAt?: Date | string
    contentHash: string
  }

  export type RoomMessageUpdateWithoutActorInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
    room?: RoomUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type RoomMessageUncheckedUpdateWithoutActorInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
  }

  export type RoomMessageUncheckedUpdateManyWithoutActorInput = {
    messageId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contentHash?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use RoomCountOutputTypeDefaultArgs instead
     */
    export type RoomCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoomCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActorCountOutputTypeDefaultArgs instead
     */
    export type ActorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BillDefaultArgs instead
     */
    export type BillArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BillDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtifactDefaultArgs instead
     */
    export type ArtifactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtifactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LedgerEventDefaultArgs instead
     */
    export type LedgerEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LedgerEventDefaultArgs<ExtArgs>
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
     * @deprecated Use AgentEpochCountersDefaultArgs instead
     */
    export type AgentEpochCountersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AgentEpochCountersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoomDefaultArgs instead
     */
    export type RoomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoomDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActorDefaultArgs instead
     */
    export type ActorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoomMessageDefaultArgs instead
     */
    export type RoomMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoomMessageDefaultArgs<ExtArgs>

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