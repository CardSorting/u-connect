
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Persona
 * 
 */
export type Persona = $Result.DefaultSelection<Prisma.$PersonaPayload>
/**
 * Model IntakeProfile
 * 
 */
export type IntakeProfile = $Result.DefaultSelection<Prisma.$IntakeProfilePayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model MatchResult
 * 
 */
export type MatchResult = $Result.DefaultSelection<Prisma.$MatchResultPayload>
/**
 * Model MatchOutcome
 * 
 */
export type MatchOutcome = $Result.DefaultSelection<Prisma.$MatchOutcomePayload>
/**
 * Model ReputationProfile
 * 
 */
export type ReputationProfile = $Result.DefaultSelection<Prisma.$ReputationProfilePayload>
/**
 * Model RevealAuditLog
 * 
 */
export type RevealAuditLog = $Result.DefaultSelection<Prisma.$RevealAuditLogPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MatchStatus: {
  CANDIDATE: 'CANDIDATE',
  SHORTLISTED: 'SHORTLISTED',
  RECOMMENDED: 'RECOMMENDED',
  PENDING_USER_CONFIRMATION: 'PENDING_USER_CONFIRMATION',
  PENDING_CONCIERGE_REVIEW: 'PENDING_CONCIERGE_REVIEW',
  PENDING_TARGET_APPROVAL: 'PENDING_TARGET_APPROVAL',
  REVEALED: 'REVEALED',
  INTRO_REQUESTED: 'INTRO_REQUESTED',
  INTRO_ACCEPTED: 'INTRO_ACCEPTED',
  MEETING_SCHEDULED: 'MEETING_SCHEDULED',
  OUTCOME_RECORDED: 'OUTCOME_RECORDED',
  DISMISSED: 'DISMISSED',
  REVOKED: 'REVOKED'
};

export type MatchStatus = (typeof MatchStatus)[keyof typeof MatchStatus]


export const MatchOutcomeResult: {
  NO_RESPONSE: 'NO_RESPONSE',
  DECLINED: 'DECLINED',
  MEETING_ONLY: 'MEETING_ONLY',
  ACTIVE_COLLABORATION: 'ACTIVE_COLLABORATION',
  PILOT: 'PILOT',
  INVESTMENT: 'INVESTMENT',
  ADVISOR_RELATIONSHIP: 'ADVISOR_RELATIONSHIP',
  PARTNERSHIP: 'PARTNERSHIP',
  NO_SHOW: 'NO_SHOW',
  BAD_FIT: 'BAD_FIT',
  TRUST_VIOLATION: 'TRUST_VIOLATION'
};

export type MatchOutcomeResult = (typeof MatchOutcomeResult)[keyof typeof MatchOutcomeResult]


export const TrustTier: {
  NEW: 'NEW',
  VERIFIED: 'VERIFIED',
  TRUSTED: 'TRUSTED',
  RESTRICTED: 'RESTRICTED'
};

export type TrustTier = (typeof TrustTier)[keyof typeof TrustTier]

}

export type MatchStatus = $Enums.MatchStatus

export const MatchStatus: typeof $Enums.MatchStatus

export type MatchOutcomeResult = $Enums.MatchOutcomeResult

export const MatchOutcomeResult: typeof $Enums.MatchOutcomeResult

export type TrustTier = $Enums.TrustTier

export const TrustTier: typeof $Enums.TrustTier

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.persona`: Exposes CRUD operations for the **Persona** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personas
    * const personas = await prisma.persona.findMany()
    * ```
    */
  get persona(): Prisma.PersonaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.intakeProfile`: Exposes CRUD operations for the **IntakeProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IntakeProfiles
    * const intakeProfiles = await prisma.intakeProfile.findMany()
    * ```
    */
  get intakeProfile(): Prisma.IntakeProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchResult`: Exposes CRUD operations for the **MatchResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchResults
    * const matchResults = await prisma.matchResult.findMany()
    * ```
    */
  get matchResult(): Prisma.MatchResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchOutcome`: Exposes CRUD operations for the **MatchOutcome** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchOutcomes
    * const matchOutcomes = await prisma.matchOutcome.findMany()
    * ```
    */
  get matchOutcome(): Prisma.MatchOutcomeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reputationProfile`: Exposes CRUD operations for the **ReputationProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReputationProfiles
    * const reputationProfiles = await prisma.reputationProfile.findMany()
    * ```
    */
  get reputationProfile(): Prisma.ReputationProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.revealAuditLog`: Exposes CRUD operations for the **RevealAuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RevealAuditLogs
    * const revealAuditLogs = await prisma.revealAuditLog.findMany()
    * ```
    */
  get revealAuditLog(): Prisma.RevealAuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Session: 'Session',
    Persona: 'Persona',
    IntakeProfile: 'IntakeProfile',
    Conversation: 'Conversation',
    Message: 'Message',
    MatchResult: 'MatchResult',
    MatchOutcome: 'MatchOutcome',
    ReputationProfile: 'ReputationProfile',
    RevealAuditLog: 'RevealAuditLog',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "persona" | "intakeProfile" | "conversation" | "message" | "matchResult" | "matchOutcome" | "reputationProfile" | "revealAuditLog" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Persona: {
        payload: Prisma.$PersonaPayload<ExtArgs>
        fields: Prisma.PersonaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          findFirst: {
            args: Prisma.PersonaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          findMany: {
            args: Prisma.PersonaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>[]
          }
          create: {
            args: Prisma.PersonaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          createMany: {
            args: Prisma.PersonaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>[]
          }
          delete: {
            args: Prisma.PersonaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          update: {
            args: Prisma.PersonaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          deleteMany: {
            args: Prisma.PersonaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>[]
          }
          upsert: {
            args: Prisma.PersonaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonaPayload>
          }
          aggregate: {
            args: Prisma.PersonaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersona>
          }
          groupBy: {
            args: Prisma.PersonaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonaCountArgs<ExtArgs>
            result: $Utils.Optional<PersonaCountAggregateOutputType> | number
          }
        }
      }
      IntakeProfile: {
        payload: Prisma.$IntakeProfilePayload<ExtArgs>
        fields: Prisma.IntakeProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntakeProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntakeProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeProfilePayload>
          }
          findFirst: {
            args: Prisma.IntakeProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntakeProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeProfilePayload>
          }
          findMany: {
            args: Prisma.IntakeProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeProfilePayload>[]
          }
          create: {
            args: Prisma.IntakeProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeProfilePayload>
          }
          createMany: {
            args: Prisma.IntakeProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntakeProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeProfilePayload>[]
          }
          delete: {
            args: Prisma.IntakeProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeProfilePayload>
          }
          update: {
            args: Prisma.IntakeProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeProfilePayload>
          }
          deleteMany: {
            args: Prisma.IntakeProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntakeProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntakeProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeProfilePayload>[]
          }
          upsert: {
            args: Prisma.IntakeProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntakeProfilePayload>
          }
          aggregate: {
            args: Prisma.IntakeProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntakeProfile>
          }
          groupBy: {
            args: Prisma.IntakeProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntakeProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntakeProfileCountArgs<ExtArgs>
            result: $Utils.Optional<IntakeProfileCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          createMany: {
            args: Prisma.ConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      MatchResult: {
        payload: Prisma.$MatchResultPayload<ExtArgs>
        fields: Prisma.MatchResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload>
          }
          findFirst: {
            args: Prisma.MatchResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload>
          }
          findMany: {
            args: Prisma.MatchResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload>[]
          }
          create: {
            args: Prisma.MatchResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload>
          }
          createMany: {
            args: Prisma.MatchResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload>[]
          }
          delete: {
            args: Prisma.MatchResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload>
          }
          update: {
            args: Prisma.MatchResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload>
          }
          deleteMany: {
            args: Prisma.MatchResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload>[]
          }
          upsert: {
            args: Prisma.MatchResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchResultPayload>
          }
          aggregate: {
            args: Prisma.MatchResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchResult>
          }
          groupBy: {
            args: Prisma.MatchResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchResultCountArgs<ExtArgs>
            result: $Utils.Optional<MatchResultCountAggregateOutputType> | number
          }
        }
      }
      MatchOutcome: {
        payload: Prisma.$MatchOutcomePayload<ExtArgs>
        fields: Prisma.MatchOutcomeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchOutcomeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchOutcomePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchOutcomeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchOutcomePayload>
          }
          findFirst: {
            args: Prisma.MatchOutcomeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchOutcomePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchOutcomeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchOutcomePayload>
          }
          findMany: {
            args: Prisma.MatchOutcomeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchOutcomePayload>[]
          }
          create: {
            args: Prisma.MatchOutcomeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchOutcomePayload>
          }
          createMany: {
            args: Prisma.MatchOutcomeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchOutcomeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchOutcomePayload>[]
          }
          delete: {
            args: Prisma.MatchOutcomeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchOutcomePayload>
          }
          update: {
            args: Prisma.MatchOutcomeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchOutcomePayload>
          }
          deleteMany: {
            args: Prisma.MatchOutcomeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchOutcomeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchOutcomeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchOutcomePayload>[]
          }
          upsert: {
            args: Prisma.MatchOutcomeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchOutcomePayload>
          }
          aggregate: {
            args: Prisma.MatchOutcomeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchOutcome>
          }
          groupBy: {
            args: Prisma.MatchOutcomeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchOutcomeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchOutcomeCountArgs<ExtArgs>
            result: $Utils.Optional<MatchOutcomeCountAggregateOutputType> | number
          }
        }
      }
      ReputationProfile: {
        payload: Prisma.$ReputationProfilePayload<ExtArgs>
        fields: Prisma.ReputationProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReputationProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReputationProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationProfilePayload>
          }
          findFirst: {
            args: Prisma.ReputationProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReputationProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationProfilePayload>
          }
          findMany: {
            args: Prisma.ReputationProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationProfilePayload>[]
          }
          create: {
            args: Prisma.ReputationProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationProfilePayload>
          }
          createMany: {
            args: Prisma.ReputationProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReputationProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationProfilePayload>[]
          }
          delete: {
            args: Prisma.ReputationProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationProfilePayload>
          }
          update: {
            args: Prisma.ReputationProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationProfilePayload>
          }
          deleteMany: {
            args: Prisma.ReputationProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReputationProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReputationProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationProfilePayload>[]
          }
          upsert: {
            args: Prisma.ReputationProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReputationProfilePayload>
          }
          aggregate: {
            args: Prisma.ReputationProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReputationProfile>
          }
          groupBy: {
            args: Prisma.ReputationProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReputationProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReputationProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ReputationProfileCountAggregateOutputType> | number
          }
        }
      }
      RevealAuditLog: {
        payload: Prisma.$RevealAuditLogPayload<ExtArgs>
        fields: Prisma.RevealAuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RevealAuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevealAuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RevealAuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevealAuditLogPayload>
          }
          findFirst: {
            args: Prisma.RevealAuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevealAuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RevealAuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevealAuditLogPayload>
          }
          findMany: {
            args: Prisma.RevealAuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevealAuditLogPayload>[]
          }
          create: {
            args: Prisma.RevealAuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevealAuditLogPayload>
          }
          createMany: {
            args: Prisma.RevealAuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RevealAuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevealAuditLogPayload>[]
          }
          delete: {
            args: Prisma.RevealAuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevealAuditLogPayload>
          }
          update: {
            args: Prisma.RevealAuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevealAuditLogPayload>
          }
          deleteMany: {
            args: Prisma.RevealAuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RevealAuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RevealAuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevealAuditLogPayload>[]
          }
          upsert: {
            args: Prisma.RevealAuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevealAuditLogPayload>
          }
          aggregate: {
            args: Prisma.RevealAuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRevealAuditLog>
          }
          groupBy: {
            args: Prisma.RevealAuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<RevealAuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.RevealAuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<RevealAuditLogCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    persona?: PersonaOmit
    intakeProfile?: IntakeProfileOmit
    conversation?: ConversationOmit
    message?: MessageOmit
    matchResult?: MatchResultOmit
    matchOutcome?: MatchOutcomeOmit
    reputationProfile?: ReputationProfileOmit
    revealAuditLog?: RevealAuditLogOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    conversations: number
    matches: number
    intakeProfiles: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    conversations?: boolean | UserCountOutputTypeCountConversationsArgs
    matches?: boolean | UserCountOutputTypeCountMatchesArgs
    intakeProfiles?: boolean | UserCountOutputTypeCountIntakeProfilesArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchResultWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIntakeProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntakeProfileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevealAuditLogWhereInput
  }


  /**
   * Count Type PersonaCountOutputType
   */

  export type PersonaCountOutputType = {
    conversations: number
    matches: number
  }

  export type PersonaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | PersonaCountOutputTypeCountConversationsArgs
    matches?: boolean | PersonaCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaCountOutputType
     */
    select?: PersonaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }

  /**
   * PersonaCountOutputType without action
   */
  export type PersonaCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchResultWhereInput
  }


  /**
   * Count Type ConversationCountOutputType
   */

  export type ConversationCountOutputType = {
    messages: number
    matches: number
  }

  export type ConversationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ConversationCountOutputTypeCountMessagesArgs
    matches?: boolean | ConversationCountOutputTypeCountMatchesArgs
  }

  // Custom InputTypes
  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConversationCountOutputType
     */
    select?: ConversationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ConversationCountOutputType without action
   */
  export type ConversationCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    roleType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    roleType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    roleType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    roleType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    roleType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    roleType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    roleType: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    roleType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    conversations?: boolean | User$conversationsArgs<ExtArgs>
    matches?: boolean | User$matchesArgs<ExtArgs>
    reputation?: boolean | User$reputationArgs<ExtArgs>
    intakeProfiles?: boolean | User$intakeProfilesArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    roleType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    roleType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    roleType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "roleType" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    conversations?: boolean | User$conversationsArgs<ExtArgs>
    matches?: boolean | User$matchesArgs<ExtArgs>
    reputation?: boolean | User$reputationArgs<ExtArgs>
    intakeProfiles?: boolean | User$intakeProfilesArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
      matches: Prisma.$MatchResultPayload<ExtArgs>[]
      reputation: Prisma.$ReputationProfilePayload<ExtArgs> | null
      intakeProfiles: Prisma.$IntakeProfilePayload<ExtArgs>[]
      auditLogs: Prisma.$RevealAuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      roleType: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations<T extends User$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, User$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches<T extends User$matchesArgs<ExtArgs> = {}>(args?: Subset<T, User$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reputation<T extends User$reputationArgs<ExtArgs> = {}>(args?: Subset<T, User$reputationArgs<ExtArgs>>): Prisma__ReputationProfileClient<$Result.GetResult<Prisma.$ReputationProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    intakeProfiles<T extends User$intakeProfilesArgs<ExtArgs> = {}>(args?: Subset<T, User$intakeProfilesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntakeProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevealAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly roleType: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.conversations
   */
  export type User$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * User.matches
   */
  export type User$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    where?: MatchResultWhereInput
    orderBy?: MatchResultOrderByWithRelationInput | MatchResultOrderByWithRelationInput[]
    cursor?: MatchResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchResultScalarFieldEnum | MatchResultScalarFieldEnum[]
  }

  /**
   * User.reputation
   */
  export type User$reputationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationProfile
     */
    select?: ReputationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReputationProfile
     */
    omit?: ReputationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReputationProfileInclude<ExtArgs> | null
    where?: ReputationProfileWhereInput
  }

  /**
   * User.intakeProfiles
   */
  export type User$intakeProfilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeProfile
     */
    select?: IntakeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeProfile
     */
    omit?: IntakeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeProfileInclude<ExtArgs> | null
    where?: IntakeProfileWhereInput
    orderBy?: IntakeProfileOrderByWithRelationInput | IntakeProfileOrderByWithRelationInput[]
    cursor?: IntakeProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntakeProfileScalarFieldEnum | IntakeProfileScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevealAuditLog
     */
    select?: RevealAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevealAuditLog
     */
    omit?: RevealAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevealAuditLogInclude<ExtArgs> | null
    where?: RevealAuditLogWhereInput
    orderBy?: RevealAuditLogOrderByWithRelationInput | RevealAuditLogOrderByWithRelationInput[]
    cursor?: RevealAuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevealAuditLogScalarFieldEnum | RevealAuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    createdAt: Date
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "createdAt" | "expiresAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Persona
   */

  export type AggregatePersona = {
    _count: PersonaCountAggregateOutputType | null
    _avg: PersonaAvgAggregateOutputType | null
    _sum: PersonaSumAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  export type PersonaAvgAggregateOutputType = {
    capacity: number | null
    currentLoad: number | null
  }

  export type PersonaSumAggregateOutputType = {
    capacity: number | null
    currentLoad: number | null
  }

  export type PersonaMinAggregateOutputType = {
    id: string | null
    name: string | null
    personaType: string | null
    title: string | null
    organization: string | null
    background: string | null
    goals: string | null
    skills: string | null
    industries: string | null
    stagePreference: string | null
    availability: string | null
    capacity: number | null
    currentLoad: number | null
    riskTolerance: string | null
    missionInterests: string | null
    avatarUrl: string | null
    profileJson: string | null
    isHighValue: boolean | null
    createdAt: Date | null
  }

  export type PersonaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    personaType: string | null
    title: string | null
    organization: string | null
    background: string | null
    goals: string | null
    skills: string | null
    industries: string | null
    stagePreference: string | null
    availability: string | null
    capacity: number | null
    currentLoad: number | null
    riskTolerance: string | null
    missionInterests: string | null
    avatarUrl: string | null
    profileJson: string | null
    isHighValue: boolean | null
    createdAt: Date | null
  }

  export type PersonaCountAggregateOutputType = {
    id: number
    name: number
    personaType: number
    title: number
    organization: number
    background: number
    goals: number
    skills: number
    industries: number
    stagePreference: number
    availability: number
    capacity: number
    currentLoad: number
    riskTolerance: number
    missionInterests: number
    avatarUrl: number
    profileJson: number
    isHighValue: number
    createdAt: number
    _all: number
  }


  export type PersonaAvgAggregateInputType = {
    capacity?: true
    currentLoad?: true
  }

  export type PersonaSumAggregateInputType = {
    capacity?: true
    currentLoad?: true
  }

  export type PersonaMinAggregateInputType = {
    id?: true
    name?: true
    personaType?: true
    title?: true
    organization?: true
    background?: true
    goals?: true
    skills?: true
    industries?: true
    stagePreference?: true
    availability?: true
    capacity?: true
    currentLoad?: true
    riskTolerance?: true
    missionInterests?: true
    avatarUrl?: true
    profileJson?: true
    isHighValue?: true
    createdAt?: true
  }

  export type PersonaMaxAggregateInputType = {
    id?: true
    name?: true
    personaType?: true
    title?: true
    organization?: true
    background?: true
    goals?: true
    skills?: true
    industries?: true
    stagePreference?: true
    availability?: true
    capacity?: true
    currentLoad?: true
    riskTolerance?: true
    missionInterests?: true
    avatarUrl?: true
    profileJson?: true
    isHighValue?: true
    createdAt?: true
  }

  export type PersonaCountAggregateInputType = {
    id?: true
    name?: true
    personaType?: true
    title?: true
    organization?: true
    background?: true
    goals?: true
    skills?: true
    industries?: true
    stagePreference?: true
    availability?: true
    capacity?: true
    currentLoad?: true
    riskTolerance?: true
    missionInterests?: true
    avatarUrl?: true
    profileJson?: true
    isHighValue?: true
    createdAt?: true
    _all?: true
  }

  export type PersonaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Persona to aggregate.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personas
    **/
    _count?: true | PersonaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonaMaxAggregateInputType
  }

  export type GetPersonaAggregateType<T extends PersonaAggregateArgs> = {
        [P in keyof T & keyof AggregatePersona]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersona[P]>
      : GetScalarType<T[P], AggregatePersona[P]>
  }




  export type PersonaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonaWhereInput
    orderBy?: PersonaOrderByWithAggregationInput | PersonaOrderByWithAggregationInput[]
    by: PersonaScalarFieldEnum[] | PersonaScalarFieldEnum
    having?: PersonaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonaCountAggregateInputType | true
    _avg?: PersonaAvgAggregateInputType
    _sum?: PersonaSumAggregateInputType
    _min?: PersonaMinAggregateInputType
    _max?: PersonaMaxAggregateInputType
  }

  export type PersonaGroupByOutputType = {
    id: string
    name: string
    personaType: string
    title: string | null
    organization: string | null
    background: string
    goals: string
    skills: string
    industries: string
    stagePreference: string | null
    availability: string | null
    capacity: number
    currentLoad: number
    riskTolerance: string | null
    missionInterests: string | null
    avatarUrl: string | null
    profileJson: string | null
    isHighValue: boolean
    createdAt: Date
    _count: PersonaCountAggregateOutputType | null
    _avg: PersonaAvgAggregateOutputType | null
    _sum: PersonaSumAggregateOutputType | null
    _min: PersonaMinAggregateOutputType | null
    _max: PersonaMaxAggregateOutputType | null
  }

  type GetPersonaGroupByPayload<T extends PersonaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonaGroupByOutputType[P]>
            : GetScalarType<T[P], PersonaGroupByOutputType[P]>
        }
      >
    >


  export type PersonaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    personaType?: boolean
    title?: boolean
    organization?: boolean
    background?: boolean
    goals?: boolean
    skills?: boolean
    industries?: boolean
    stagePreference?: boolean
    availability?: boolean
    capacity?: boolean
    currentLoad?: boolean
    riskTolerance?: boolean
    missionInterests?: boolean
    avatarUrl?: boolean
    profileJson?: boolean
    isHighValue?: boolean
    createdAt?: boolean
    conversations?: boolean | Persona$conversationsArgs<ExtArgs>
    matches?: boolean | Persona$matchesArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["persona"]>

  export type PersonaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    personaType?: boolean
    title?: boolean
    organization?: boolean
    background?: boolean
    goals?: boolean
    skills?: boolean
    industries?: boolean
    stagePreference?: boolean
    availability?: boolean
    capacity?: boolean
    currentLoad?: boolean
    riskTolerance?: boolean
    missionInterests?: boolean
    avatarUrl?: boolean
    profileJson?: boolean
    isHighValue?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["persona"]>

  export type PersonaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    personaType?: boolean
    title?: boolean
    organization?: boolean
    background?: boolean
    goals?: boolean
    skills?: boolean
    industries?: boolean
    stagePreference?: boolean
    availability?: boolean
    capacity?: boolean
    currentLoad?: boolean
    riskTolerance?: boolean
    missionInterests?: boolean
    avatarUrl?: boolean
    profileJson?: boolean
    isHighValue?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["persona"]>

  export type PersonaSelectScalar = {
    id?: boolean
    name?: boolean
    personaType?: boolean
    title?: boolean
    organization?: boolean
    background?: boolean
    goals?: boolean
    skills?: boolean
    industries?: boolean
    stagePreference?: boolean
    availability?: boolean
    capacity?: boolean
    currentLoad?: boolean
    riskTolerance?: boolean
    missionInterests?: boolean
    avatarUrl?: boolean
    profileJson?: boolean
    isHighValue?: boolean
    createdAt?: boolean
  }

  export type PersonaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "personaType" | "title" | "organization" | "background" | "goals" | "skills" | "industries" | "stagePreference" | "availability" | "capacity" | "currentLoad" | "riskTolerance" | "missionInterests" | "avatarUrl" | "profileJson" | "isHighValue" | "createdAt", ExtArgs["result"]["persona"]>
  export type PersonaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | Persona$conversationsArgs<ExtArgs>
    matches?: boolean | Persona$matchesArgs<ExtArgs>
    _count?: boolean | PersonaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PersonaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PersonaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Persona"
    objects: {
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
      matches: Prisma.$MatchResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      personaType: string
      title: string | null
      organization: string | null
      background: string
      goals: string
      skills: string
      industries: string
      stagePreference: string | null
      availability: string | null
      capacity: number
      currentLoad: number
      riskTolerance: string | null
      missionInterests: string | null
      avatarUrl: string | null
      profileJson: string | null
      isHighValue: boolean
      createdAt: Date
    }, ExtArgs["result"]["persona"]>
    composites: {}
  }

  type PersonaGetPayload<S extends boolean | null | undefined | PersonaDefaultArgs> = $Result.GetResult<Prisma.$PersonaPayload, S>

  type PersonaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonaCountAggregateInputType | true
    }

  export interface PersonaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Persona'], meta: { name: 'Persona' } }
    /**
     * Find zero or one Persona that matches the filter.
     * @param {PersonaFindUniqueArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonaFindUniqueArgs>(args: SelectSubset<T, PersonaFindUniqueArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Persona that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonaFindUniqueOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonaFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Persona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaFindFirstArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonaFindFirstArgs>(args?: SelectSubset<T, PersonaFindFirstArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Persona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaFindFirstOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonaFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personas
     * const personas = await prisma.persona.findMany()
     * 
     * // Get first 10 Personas
     * const personas = await prisma.persona.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personaWithIdOnly = await prisma.persona.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonaFindManyArgs>(args?: SelectSubset<T, PersonaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Persona.
     * @param {PersonaCreateArgs} args - Arguments to create a Persona.
     * @example
     * // Create one Persona
     * const Persona = await prisma.persona.create({
     *   data: {
     *     // ... data to create a Persona
     *   }
     * })
     * 
     */
    create<T extends PersonaCreateArgs>(args: SelectSubset<T, PersonaCreateArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personas.
     * @param {PersonaCreateManyArgs} args - Arguments to create many Personas.
     * @example
     * // Create many Personas
     * const persona = await prisma.persona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonaCreateManyArgs>(args?: SelectSubset<T, PersonaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personas and returns the data saved in the database.
     * @param {PersonaCreateManyAndReturnArgs} args - Arguments to create many Personas.
     * @example
     * // Create many Personas
     * const persona = await prisma.persona.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personas and only return the `id`
     * const personaWithIdOnly = await prisma.persona.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonaCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Persona.
     * @param {PersonaDeleteArgs} args - Arguments to delete one Persona.
     * @example
     * // Delete one Persona
     * const Persona = await prisma.persona.delete({
     *   where: {
     *     // ... filter to delete one Persona
     *   }
     * })
     * 
     */
    delete<T extends PersonaDeleteArgs>(args: SelectSubset<T, PersonaDeleteArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Persona.
     * @param {PersonaUpdateArgs} args - Arguments to update one Persona.
     * @example
     * // Update one Persona
     * const persona = await prisma.persona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonaUpdateArgs>(args: SelectSubset<T, PersonaUpdateArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personas.
     * @param {PersonaDeleteManyArgs} args - Arguments to filter Personas to delete.
     * @example
     * // Delete a few Personas
     * const { count } = await prisma.persona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonaDeleteManyArgs>(args?: SelectSubset<T, PersonaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personas
     * const persona = await prisma.persona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonaUpdateManyArgs>(args: SelectSubset<T, PersonaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personas and returns the data updated in the database.
     * @param {PersonaUpdateManyAndReturnArgs} args - Arguments to update many Personas.
     * @example
     * // Update many Personas
     * const persona = await prisma.persona.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personas and only return the `id`
     * const personaWithIdOnly = await prisma.persona.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonaUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Persona.
     * @param {PersonaUpsertArgs} args - Arguments to update or create a Persona.
     * @example
     * // Update or create a Persona
     * const persona = await prisma.persona.upsert({
     *   create: {
     *     // ... data to create a Persona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Persona we want to update
     *   }
     * })
     */
    upsert<T extends PersonaUpsertArgs>(args: SelectSubset<T, PersonaUpsertArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaCountArgs} args - Arguments to filter Personas to count.
     * @example
     * // Count the number of Personas
     * const count = await prisma.persona.count({
     *   where: {
     *     // ... the filter for the Personas we want to count
     *   }
     * })
    **/
    count<T extends PersonaCountArgs>(
      args?: Subset<T, PersonaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonaAggregateArgs>(args: Subset<T, PersonaAggregateArgs>): Prisma.PrismaPromise<GetPersonaAggregateType<T>>

    /**
     * Group by Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaGroupByArgs} args - Group by arguments.
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
      T extends PersonaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonaGroupByArgs['orderBy'] }
        : { orderBy?: PersonaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Persona model
   */
  readonly fields: PersonaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Persona.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversations<T extends Persona$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, Persona$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches<T extends Persona$matchesArgs<ExtArgs> = {}>(args?: Subset<T, Persona$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Persona model
   */
  interface PersonaFieldRefs {
    readonly id: FieldRef<"Persona", 'String'>
    readonly name: FieldRef<"Persona", 'String'>
    readonly personaType: FieldRef<"Persona", 'String'>
    readonly title: FieldRef<"Persona", 'String'>
    readonly organization: FieldRef<"Persona", 'String'>
    readonly background: FieldRef<"Persona", 'String'>
    readonly goals: FieldRef<"Persona", 'String'>
    readonly skills: FieldRef<"Persona", 'String'>
    readonly industries: FieldRef<"Persona", 'String'>
    readonly stagePreference: FieldRef<"Persona", 'String'>
    readonly availability: FieldRef<"Persona", 'String'>
    readonly capacity: FieldRef<"Persona", 'Int'>
    readonly currentLoad: FieldRef<"Persona", 'Int'>
    readonly riskTolerance: FieldRef<"Persona", 'String'>
    readonly missionInterests: FieldRef<"Persona", 'String'>
    readonly avatarUrl: FieldRef<"Persona", 'String'>
    readonly profileJson: FieldRef<"Persona", 'String'>
    readonly isHighValue: FieldRef<"Persona", 'Boolean'>
    readonly createdAt: FieldRef<"Persona", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Persona findUnique
   */
  export type PersonaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona findUniqueOrThrow
   */
  export type PersonaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona findFirst
   */
  export type PersonaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personas.
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * Persona findFirstOrThrow
   */
  export type PersonaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Persona to fetch.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personas.
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personas.
     */
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * Persona findMany
   */
  export type PersonaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter, which Personas to fetch.
     */
    where?: PersonaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personas to fetch.
     */
    orderBy?: PersonaOrderByWithRelationInput | PersonaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personas.
     */
    cursor?: PersonaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personas.
     */
    skip?: number
    distinct?: PersonaScalarFieldEnum | PersonaScalarFieldEnum[]
  }

  /**
   * Persona create
   */
  export type PersonaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * The data needed to create a Persona.
     */
    data: XOR<PersonaCreateInput, PersonaUncheckedCreateInput>
  }

  /**
   * Persona createMany
   */
  export type PersonaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personas.
     */
    data: PersonaCreateManyInput | PersonaCreateManyInput[]
  }

  /**
   * Persona createManyAndReturn
   */
  export type PersonaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * The data used to create many Personas.
     */
    data: PersonaCreateManyInput | PersonaCreateManyInput[]
  }

  /**
   * Persona update
   */
  export type PersonaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * The data needed to update a Persona.
     */
    data: XOR<PersonaUpdateInput, PersonaUncheckedUpdateInput>
    /**
     * Choose, which Persona to update.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona updateMany
   */
  export type PersonaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personas.
     */
    data: XOR<PersonaUpdateManyMutationInput, PersonaUncheckedUpdateManyInput>
    /**
     * Filter which Personas to update
     */
    where?: PersonaWhereInput
    /**
     * Limit how many Personas to update.
     */
    limit?: number
  }

  /**
   * Persona updateManyAndReturn
   */
  export type PersonaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * The data used to update Personas.
     */
    data: XOR<PersonaUpdateManyMutationInput, PersonaUncheckedUpdateManyInput>
    /**
     * Filter which Personas to update
     */
    where?: PersonaWhereInput
    /**
     * Limit how many Personas to update.
     */
    limit?: number
  }

  /**
   * Persona upsert
   */
  export type PersonaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * The filter to search for the Persona to update in case it exists.
     */
    where: PersonaWhereUniqueInput
    /**
     * In case the Persona found by the `where` argument doesn't exist, create a new Persona with this data.
     */
    create: XOR<PersonaCreateInput, PersonaUncheckedCreateInput>
    /**
     * In case the Persona was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonaUpdateInput, PersonaUncheckedUpdateInput>
  }

  /**
   * Persona delete
   */
  export type PersonaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    /**
     * Filter which Persona to delete.
     */
    where: PersonaWhereUniqueInput
  }

  /**
   * Persona deleteMany
   */
  export type PersonaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personas to delete
     */
    where?: PersonaWhereInput
    /**
     * Limit how many Personas to delete.
     */
    limit?: number
  }

  /**
   * Persona.conversations
   */
  export type Persona$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Persona.matches
   */
  export type Persona$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    where?: MatchResultWhereInput
    orderBy?: MatchResultOrderByWithRelationInput | MatchResultOrderByWithRelationInput[]
    cursor?: MatchResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchResultScalarFieldEnum | MatchResultScalarFieldEnum[]
  }

  /**
   * Persona without action
   */
  export type PersonaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
  }


  /**
   * Model IntakeProfile
   */

  export type AggregateIntakeProfile = {
    _count: IntakeProfileCountAggregateOutputType | null
    _avg: IntakeProfileAvgAggregateOutputType | null
    _sum: IntakeProfileSumAggregateOutputType | null
    _min: IntakeProfileMinAggregateOutputType | null
    _max: IntakeProfileMaxAggregateOutputType | null
  }

  export type IntakeProfileAvgAggregateOutputType = {
    technicalMaturity: number | null
    readinessScore: number | null
  }

  export type IntakeProfileSumAggregateOutputType = {
    technicalMaturity: number | null
    readinessScore: number | null
  }

  export type IntakeProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    stageEvidence: string | null
    commercializationBlocker: string | null
    requestedOutcome: string | null
    technicalMaturity: number | null
    regulatoryExposure: string | null
    fundingStatus: string | null
    customerDiscoveryEvidence: string | null
    introSensitivity: string | null
    geographicRelevance: string | null
    urgencyReason: string | null
    missingInfoFlags: string | null
    readinessScore: number | null
    conversationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntakeProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    stageEvidence: string | null
    commercializationBlocker: string | null
    requestedOutcome: string | null
    technicalMaturity: number | null
    regulatoryExposure: string | null
    fundingStatus: string | null
    customerDiscoveryEvidence: string | null
    introSensitivity: string | null
    geographicRelevance: string | null
    urgencyReason: string | null
    missingInfoFlags: string | null
    readinessScore: number | null
    conversationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IntakeProfileCountAggregateOutputType = {
    id: number
    userId: number
    stageEvidence: number
    commercializationBlocker: number
    requestedOutcome: number
    technicalMaturity: number
    regulatoryExposure: number
    fundingStatus: number
    customerDiscoveryEvidence: number
    introSensitivity: number
    geographicRelevance: number
    urgencyReason: number
    missingInfoFlags: number
    readinessScore: number
    conversationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IntakeProfileAvgAggregateInputType = {
    technicalMaturity?: true
    readinessScore?: true
  }

  export type IntakeProfileSumAggregateInputType = {
    technicalMaturity?: true
    readinessScore?: true
  }

  export type IntakeProfileMinAggregateInputType = {
    id?: true
    userId?: true
    stageEvidence?: true
    commercializationBlocker?: true
    requestedOutcome?: true
    technicalMaturity?: true
    regulatoryExposure?: true
    fundingStatus?: true
    customerDiscoveryEvidence?: true
    introSensitivity?: true
    geographicRelevance?: true
    urgencyReason?: true
    missingInfoFlags?: true
    readinessScore?: true
    conversationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntakeProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    stageEvidence?: true
    commercializationBlocker?: true
    requestedOutcome?: true
    technicalMaturity?: true
    regulatoryExposure?: true
    fundingStatus?: true
    customerDiscoveryEvidence?: true
    introSensitivity?: true
    geographicRelevance?: true
    urgencyReason?: true
    missingInfoFlags?: true
    readinessScore?: true
    conversationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IntakeProfileCountAggregateInputType = {
    id?: true
    userId?: true
    stageEvidence?: true
    commercializationBlocker?: true
    requestedOutcome?: true
    technicalMaturity?: true
    regulatoryExposure?: true
    fundingStatus?: true
    customerDiscoveryEvidence?: true
    introSensitivity?: true
    geographicRelevance?: true
    urgencyReason?: true
    missingInfoFlags?: true
    readinessScore?: true
    conversationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IntakeProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntakeProfile to aggregate.
     */
    where?: IntakeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntakeProfiles to fetch.
     */
    orderBy?: IntakeProfileOrderByWithRelationInput | IntakeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntakeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntakeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntakeProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IntakeProfiles
    **/
    _count?: true | IntakeProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IntakeProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IntakeProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntakeProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntakeProfileMaxAggregateInputType
  }

  export type GetIntakeProfileAggregateType<T extends IntakeProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateIntakeProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntakeProfile[P]>
      : GetScalarType<T[P], AggregateIntakeProfile[P]>
  }




  export type IntakeProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntakeProfileWhereInput
    orderBy?: IntakeProfileOrderByWithAggregationInput | IntakeProfileOrderByWithAggregationInput[]
    by: IntakeProfileScalarFieldEnum[] | IntakeProfileScalarFieldEnum
    having?: IntakeProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntakeProfileCountAggregateInputType | true
    _avg?: IntakeProfileAvgAggregateInputType
    _sum?: IntakeProfileSumAggregateInputType
    _min?: IntakeProfileMinAggregateInputType
    _max?: IntakeProfileMaxAggregateInputType
  }

  export type IntakeProfileGroupByOutputType = {
    id: string
    userId: string
    stageEvidence: string
    commercializationBlocker: string
    requestedOutcome: string
    technicalMaturity: number
    regulatoryExposure: string
    fundingStatus: string
    customerDiscoveryEvidence: string
    introSensitivity: string
    geographicRelevance: string
    urgencyReason: string
    missingInfoFlags: string
    readinessScore: number
    conversationId: string | null
    createdAt: Date
    updatedAt: Date
    _count: IntakeProfileCountAggregateOutputType | null
    _avg: IntakeProfileAvgAggregateOutputType | null
    _sum: IntakeProfileSumAggregateOutputType | null
    _min: IntakeProfileMinAggregateOutputType | null
    _max: IntakeProfileMaxAggregateOutputType | null
  }

  type GetIntakeProfileGroupByPayload<T extends IntakeProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntakeProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntakeProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntakeProfileGroupByOutputType[P]>
            : GetScalarType<T[P], IntakeProfileGroupByOutputType[P]>
        }
      >
    >


  export type IntakeProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stageEvidence?: boolean
    commercializationBlocker?: boolean
    requestedOutcome?: boolean
    technicalMaturity?: boolean
    regulatoryExposure?: boolean
    fundingStatus?: boolean
    customerDiscoveryEvidence?: boolean
    introSensitivity?: boolean
    geographicRelevance?: boolean
    urgencyReason?: boolean
    missingInfoFlags?: boolean
    readinessScore?: boolean
    conversationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intakeProfile"]>

  export type IntakeProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stageEvidence?: boolean
    commercializationBlocker?: boolean
    requestedOutcome?: boolean
    technicalMaturity?: boolean
    regulatoryExposure?: boolean
    fundingStatus?: boolean
    customerDiscoveryEvidence?: boolean
    introSensitivity?: boolean
    geographicRelevance?: boolean
    urgencyReason?: boolean
    missingInfoFlags?: boolean
    readinessScore?: boolean
    conversationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intakeProfile"]>

  export type IntakeProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    stageEvidence?: boolean
    commercializationBlocker?: boolean
    requestedOutcome?: boolean
    technicalMaturity?: boolean
    regulatoryExposure?: boolean
    fundingStatus?: boolean
    customerDiscoveryEvidence?: boolean
    introSensitivity?: boolean
    geographicRelevance?: boolean
    urgencyReason?: boolean
    missingInfoFlags?: boolean
    readinessScore?: boolean
    conversationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["intakeProfile"]>

  export type IntakeProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    stageEvidence?: boolean
    commercializationBlocker?: boolean
    requestedOutcome?: boolean
    technicalMaturity?: boolean
    regulatoryExposure?: boolean
    fundingStatus?: boolean
    customerDiscoveryEvidence?: boolean
    introSensitivity?: boolean
    geographicRelevance?: boolean
    urgencyReason?: boolean
    missingInfoFlags?: boolean
    readinessScore?: boolean
    conversationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IntakeProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "stageEvidence" | "commercializationBlocker" | "requestedOutcome" | "technicalMaturity" | "regulatoryExposure" | "fundingStatus" | "customerDiscoveryEvidence" | "introSensitivity" | "geographicRelevance" | "urgencyReason" | "missingInfoFlags" | "readinessScore" | "conversationId" | "createdAt" | "updatedAt", ExtArgs["result"]["intakeProfile"]>
  export type IntakeProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IntakeProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IntakeProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IntakeProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IntakeProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      stageEvidence: string
      commercializationBlocker: string
      requestedOutcome: string
      technicalMaturity: number
      regulatoryExposure: string
      fundingStatus: string
      customerDiscoveryEvidence: string
      introSensitivity: string
      geographicRelevance: string
      urgencyReason: string
      missingInfoFlags: string
      readinessScore: number
      conversationId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["intakeProfile"]>
    composites: {}
  }

  type IntakeProfileGetPayload<S extends boolean | null | undefined | IntakeProfileDefaultArgs> = $Result.GetResult<Prisma.$IntakeProfilePayload, S>

  type IntakeProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntakeProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntakeProfileCountAggregateInputType | true
    }

  export interface IntakeProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IntakeProfile'], meta: { name: 'IntakeProfile' } }
    /**
     * Find zero or one IntakeProfile that matches the filter.
     * @param {IntakeProfileFindUniqueArgs} args - Arguments to find a IntakeProfile
     * @example
     * // Get one IntakeProfile
     * const intakeProfile = await prisma.intakeProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntakeProfileFindUniqueArgs>(args: SelectSubset<T, IntakeProfileFindUniqueArgs<ExtArgs>>): Prisma__IntakeProfileClient<$Result.GetResult<Prisma.$IntakeProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IntakeProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntakeProfileFindUniqueOrThrowArgs} args - Arguments to find a IntakeProfile
     * @example
     * // Get one IntakeProfile
     * const intakeProfile = await prisma.intakeProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntakeProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, IntakeProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntakeProfileClient<$Result.GetResult<Prisma.$IntakeProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntakeProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeProfileFindFirstArgs} args - Arguments to find a IntakeProfile
     * @example
     * // Get one IntakeProfile
     * const intakeProfile = await prisma.intakeProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntakeProfileFindFirstArgs>(args?: SelectSubset<T, IntakeProfileFindFirstArgs<ExtArgs>>): Prisma__IntakeProfileClient<$Result.GetResult<Prisma.$IntakeProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IntakeProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeProfileFindFirstOrThrowArgs} args - Arguments to find a IntakeProfile
     * @example
     * // Get one IntakeProfile
     * const intakeProfile = await prisma.intakeProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntakeProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, IntakeProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntakeProfileClient<$Result.GetResult<Prisma.$IntakeProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IntakeProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IntakeProfiles
     * const intakeProfiles = await prisma.intakeProfile.findMany()
     * 
     * // Get first 10 IntakeProfiles
     * const intakeProfiles = await prisma.intakeProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const intakeProfileWithIdOnly = await prisma.intakeProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntakeProfileFindManyArgs>(args?: SelectSubset<T, IntakeProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntakeProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IntakeProfile.
     * @param {IntakeProfileCreateArgs} args - Arguments to create a IntakeProfile.
     * @example
     * // Create one IntakeProfile
     * const IntakeProfile = await prisma.intakeProfile.create({
     *   data: {
     *     // ... data to create a IntakeProfile
     *   }
     * })
     * 
     */
    create<T extends IntakeProfileCreateArgs>(args: SelectSubset<T, IntakeProfileCreateArgs<ExtArgs>>): Prisma__IntakeProfileClient<$Result.GetResult<Prisma.$IntakeProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IntakeProfiles.
     * @param {IntakeProfileCreateManyArgs} args - Arguments to create many IntakeProfiles.
     * @example
     * // Create many IntakeProfiles
     * const intakeProfile = await prisma.intakeProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntakeProfileCreateManyArgs>(args?: SelectSubset<T, IntakeProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IntakeProfiles and returns the data saved in the database.
     * @param {IntakeProfileCreateManyAndReturnArgs} args - Arguments to create many IntakeProfiles.
     * @example
     * // Create many IntakeProfiles
     * const intakeProfile = await prisma.intakeProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IntakeProfiles and only return the `id`
     * const intakeProfileWithIdOnly = await prisma.intakeProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntakeProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, IntakeProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntakeProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IntakeProfile.
     * @param {IntakeProfileDeleteArgs} args - Arguments to delete one IntakeProfile.
     * @example
     * // Delete one IntakeProfile
     * const IntakeProfile = await prisma.intakeProfile.delete({
     *   where: {
     *     // ... filter to delete one IntakeProfile
     *   }
     * })
     * 
     */
    delete<T extends IntakeProfileDeleteArgs>(args: SelectSubset<T, IntakeProfileDeleteArgs<ExtArgs>>): Prisma__IntakeProfileClient<$Result.GetResult<Prisma.$IntakeProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IntakeProfile.
     * @param {IntakeProfileUpdateArgs} args - Arguments to update one IntakeProfile.
     * @example
     * // Update one IntakeProfile
     * const intakeProfile = await prisma.intakeProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntakeProfileUpdateArgs>(args: SelectSubset<T, IntakeProfileUpdateArgs<ExtArgs>>): Prisma__IntakeProfileClient<$Result.GetResult<Prisma.$IntakeProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IntakeProfiles.
     * @param {IntakeProfileDeleteManyArgs} args - Arguments to filter IntakeProfiles to delete.
     * @example
     * // Delete a few IntakeProfiles
     * const { count } = await prisma.intakeProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntakeProfileDeleteManyArgs>(args?: SelectSubset<T, IntakeProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntakeProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IntakeProfiles
     * const intakeProfile = await prisma.intakeProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntakeProfileUpdateManyArgs>(args: SelectSubset<T, IntakeProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IntakeProfiles and returns the data updated in the database.
     * @param {IntakeProfileUpdateManyAndReturnArgs} args - Arguments to update many IntakeProfiles.
     * @example
     * // Update many IntakeProfiles
     * const intakeProfile = await prisma.intakeProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IntakeProfiles and only return the `id`
     * const intakeProfileWithIdOnly = await prisma.intakeProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IntakeProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, IntakeProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntakeProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IntakeProfile.
     * @param {IntakeProfileUpsertArgs} args - Arguments to update or create a IntakeProfile.
     * @example
     * // Update or create a IntakeProfile
     * const intakeProfile = await prisma.intakeProfile.upsert({
     *   create: {
     *     // ... data to create a IntakeProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IntakeProfile we want to update
     *   }
     * })
     */
    upsert<T extends IntakeProfileUpsertArgs>(args: SelectSubset<T, IntakeProfileUpsertArgs<ExtArgs>>): Prisma__IntakeProfileClient<$Result.GetResult<Prisma.$IntakeProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IntakeProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeProfileCountArgs} args - Arguments to filter IntakeProfiles to count.
     * @example
     * // Count the number of IntakeProfiles
     * const count = await prisma.intakeProfile.count({
     *   where: {
     *     // ... the filter for the IntakeProfiles we want to count
     *   }
     * })
    **/
    count<T extends IntakeProfileCountArgs>(
      args?: Subset<T, IntakeProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntakeProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IntakeProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IntakeProfileAggregateArgs>(args: Subset<T, IntakeProfileAggregateArgs>): Prisma.PrismaPromise<GetIntakeProfileAggregateType<T>>

    /**
     * Group by IntakeProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntakeProfileGroupByArgs} args - Group by arguments.
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
      T extends IntakeProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntakeProfileGroupByArgs['orderBy'] }
        : { orderBy?: IntakeProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IntakeProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntakeProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IntakeProfile model
   */
  readonly fields: IntakeProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IntakeProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntakeProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the IntakeProfile model
   */
  interface IntakeProfileFieldRefs {
    readonly id: FieldRef<"IntakeProfile", 'String'>
    readonly userId: FieldRef<"IntakeProfile", 'String'>
    readonly stageEvidence: FieldRef<"IntakeProfile", 'String'>
    readonly commercializationBlocker: FieldRef<"IntakeProfile", 'String'>
    readonly requestedOutcome: FieldRef<"IntakeProfile", 'String'>
    readonly technicalMaturity: FieldRef<"IntakeProfile", 'Float'>
    readonly regulatoryExposure: FieldRef<"IntakeProfile", 'String'>
    readonly fundingStatus: FieldRef<"IntakeProfile", 'String'>
    readonly customerDiscoveryEvidence: FieldRef<"IntakeProfile", 'String'>
    readonly introSensitivity: FieldRef<"IntakeProfile", 'String'>
    readonly geographicRelevance: FieldRef<"IntakeProfile", 'String'>
    readonly urgencyReason: FieldRef<"IntakeProfile", 'String'>
    readonly missingInfoFlags: FieldRef<"IntakeProfile", 'String'>
    readonly readinessScore: FieldRef<"IntakeProfile", 'Float'>
    readonly conversationId: FieldRef<"IntakeProfile", 'String'>
    readonly createdAt: FieldRef<"IntakeProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"IntakeProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IntakeProfile findUnique
   */
  export type IntakeProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeProfile
     */
    select?: IntakeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeProfile
     */
    omit?: IntakeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeProfileInclude<ExtArgs> | null
    /**
     * Filter, which IntakeProfile to fetch.
     */
    where: IntakeProfileWhereUniqueInput
  }

  /**
   * IntakeProfile findUniqueOrThrow
   */
  export type IntakeProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeProfile
     */
    select?: IntakeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeProfile
     */
    omit?: IntakeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeProfileInclude<ExtArgs> | null
    /**
     * Filter, which IntakeProfile to fetch.
     */
    where: IntakeProfileWhereUniqueInput
  }

  /**
   * IntakeProfile findFirst
   */
  export type IntakeProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeProfile
     */
    select?: IntakeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeProfile
     */
    omit?: IntakeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeProfileInclude<ExtArgs> | null
    /**
     * Filter, which IntakeProfile to fetch.
     */
    where?: IntakeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntakeProfiles to fetch.
     */
    orderBy?: IntakeProfileOrderByWithRelationInput | IntakeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntakeProfiles.
     */
    cursor?: IntakeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntakeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntakeProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntakeProfiles.
     */
    distinct?: IntakeProfileScalarFieldEnum | IntakeProfileScalarFieldEnum[]
  }

  /**
   * IntakeProfile findFirstOrThrow
   */
  export type IntakeProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeProfile
     */
    select?: IntakeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeProfile
     */
    omit?: IntakeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeProfileInclude<ExtArgs> | null
    /**
     * Filter, which IntakeProfile to fetch.
     */
    where?: IntakeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntakeProfiles to fetch.
     */
    orderBy?: IntakeProfileOrderByWithRelationInput | IntakeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IntakeProfiles.
     */
    cursor?: IntakeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntakeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntakeProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IntakeProfiles.
     */
    distinct?: IntakeProfileScalarFieldEnum | IntakeProfileScalarFieldEnum[]
  }

  /**
   * IntakeProfile findMany
   */
  export type IntakeProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeProfile
     */
    select?: IntakeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeProfile
     */
    omit?: IntakeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeProfileInclude<ExtArgs> | null
    /**
     * Filter, which IntakeProfiles to fetch.
     */
    where?: IntakeProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IntakeProfiles to fetch.
     */
    orderBy?: IntakeProfileOrderByWithRelationInput | IntakeProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IntakeProfiles.
     */
    cursor?: IntakeProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IntakeProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IntakeProfiles.
     */
    skip?: number
    distinct?: IntakeProfileScalarFieldEnum | IntakeProfileScalarFieldEnum[]
  }

  /**
   * IntakeProfile create
   */
  export type IntakeProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeProfile
     */
    select?: IntakeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeProfile
     */
    omit?: IntakeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a IntakeProfile.
     */
    data: XOR<IntakeProfileCreateInput, IntakeProfileUncheckedCreateInput>
  }

  /**
   * IntakeProfile createMany
   */
  export type IntakeProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IntakeProfiles.
     */
    data: IntakeProfileCreateManyInput | IntakeProfileCreateManyInput[]
  }

  /**
   * IntakeProfile createManyAndReturn
   */
  export type IntakeProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeProfile
     */
    select?: IntakeProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeProfile
     */
    omit?: IntakeProfileOmit<ExtArgs> | null
    /**
     * The data used to create many IntakeProfiles.
     */
    data: IntakeProfileCreateManyInput | IntakeProfileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IntakeProfile update
   */
  export type IntakeProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeProfile
     */
    select?: IntakeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeProfile
     */
    omit?: IntakeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a IntakeProfile.
     */
    data: XOR<IntakeProfileUpdateInput, IntakeProfileUncheckedUpdateInput>
    /**
     * Choose, which IntakeProfile to update.
     */
    where: IntakeProfileWhereUniqueInput
  }

  /**
   * IntakeProfile updateMany
   */
  export type IntakeProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IntakeProfiles.
     */
    data: XOR<IntakeProfileUpdateManyMutationInput, IntakeProfileUncheckedUpdateManyInput>
    /**
     * Filter which IntakeProfiles to update
     */
    where?: IntakeProfileWhereInput
    /**
     * Limit how many IntakeProfiles to update.
     */
    limit?: number
  }

  /**
   * IntakeProfile updateManyAndReturn
   */
  export type IntakeProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeProfile
     */
    select?: IntakeProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeProfile
     */
    omit?: IntakeProfileOmit<ExtArgs> | null
    /**
     * The data used to update IntakeProfiles.
     */
    data: XOR<IntakeProfileUpdateManyMutationInput, IntakeProfileUncheckedUpdateManyInput>
    /**
     * Filter which IntakeProfiles to update
     */
    where?: IntakeProfileWhereInput
    /**
     * Limit how many IntakeProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IntakeProfile upsert
   */
  export type IntakeProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeProfile
     */
    select?: IntakeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeProfile
     */
    omit?: IntakeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the IntakeProfile to update in case it exists.
     */
    where: IntakeProfileWhereUniqueInput
    /**
     * In case the IntakeProfile found by the `where` argument doesn't exist, create a new IntakeProfile with this data.
     */
    create: XOR<IntakeProfileCreateInput, IntakeProfileUncheckedCreateInput>
    /**
     * In case the IntakeProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntakeProfileUpdateInput, IntakeProfileUncheckedUpdateInput>
  }

  /**
   * IntakeProfile delete
   */
  export type IntakeProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeProfile
     */
    select?: IntakeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeProfile
     */
    omit?: IntakeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeProfileInclude<ExtArgs> | null
    /**
     * Filter which IntakeProfile to delete.
     */
    where: IntakeProfileWhereUniqueInput
  }

  /**
   * IntakeProfile deleteMany
   */
  export type IntakeProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IntakeProfiles to delete
     */
    where?: IntakeProfileWhereInput
    /**
     * Limit how many IntakeProfiles to delete.
     */
    limit?: number
  }

  /**
   * IntakeProfile without action
   */
  export type IntakeProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IntakeProfile
     */
    select?: IntakeProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IntakeProfile
     */
    omit?: IntakeProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntakeProfileInclude<ExtArgs> | null
  }


  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationAvgAggregateOutputType = {
    readinessScore: number | null
  }

  export type ConversationSumAggregateOutputType = {
    readinessScore: number | null
  }

  export type ConversationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    personaId: string | null
    title: string | null
    state: string | null
    readinessScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    personaId: string | null
    title: string | null
    state: string | null
    readinessScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    userId: number
    personaId: number
    title: number
    state: number
    readinessScore: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConversationAvgAggregateInputType = {
    readinessScore?: true
  }

  export type ConversationSumAggregateInputType = {
    readinessScore?: true
  }

  export type ConversationMinAggregateInputType = {
    id?: true
    userId?: true
    personaId?: true
    title?: true
    state?: true
    readinessScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    userId?: true
    personaId?: true
    title?: true
    state?: true
    readinessScore?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    userId?: true
    personaId?: true
    title?: true
    state?: true
    readinessScore?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _avg?: ConversationAvgAggregateInputType
    _sum?: ConversationSumAggregateInputType
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: string
    userId: string
    personaId: string | null
    title: string | null
    state: string
    readinessScore: number | null
    createdAt: Date
    updatedAt: Date
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    personaId?: boolean
    title?: boolean
    state?: boolean
    readinessScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    persona?: boolean | Conversation$personaArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    matches?: boolean | Conversation$matchesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    personaId?: boolean
    title?: boolean
    state?: boolean
    readinessScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    persona?: boolean | Conversation$personaArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    personaId?: boolean
    title?: boolean
    state?: boolean
    readinessScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    persona?: boolean | Conversation$personaArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    userId?: boolean
    personaId?: boolean
    title?: boolean
    state?: boolean
    readinessScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "personaId" | "title" | "state" | "readinessScore" | "createdAt" | "updatedAt", ExtArgs["result"]["conversation"]>
  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    persona?: boolean | Conversation$personaArgs<ExtArgs>
    messages?: boolean | Conversation$messagesArgs<ExtArgs>
    matches?: boolean | Conversation$matchesArgs<ExtArgs>
    _count?: boolean | ConversationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    persona?: boolean | Conversation$personaArgs<ExtArgs>
  }
  export type ConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    persona?: boolean | Conversation$personaArgs<ExtArgs>
  }

  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      persona: Prisma.$PersonaPayload<ExtArgs> | null
      messages: Prisma.$MessagePayload<ExtArgs>[]
      matches: Prisma.$MatchResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      personaId: string | null
      title: string | null
      state: string
      readinessScore: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }

  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConversationFindUniqueArgs>(args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConversationFindFirstArgs>(args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConversationFindManyArgs>(args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
     */
    create<T extends ConversationCreateArgs>(args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conversations.
     * @param {ConversationCreateManyArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConversationCreateManyArgs>(args?: SelectSubset<T, ConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conversations and returns the data saved in the database.
     * @param {ConversationCreateManyAndReturnArgs} args - Arguments to create many Conversations.
     * @example
     * // Create many Conversations
     * const conversation = await prisma.conversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
     */
    delete<T extends ConversationDeleteArgs>(args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConversationUpdateArgs>(args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConversationDeleteManyArgs>(args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConversationUpdateManyArgs>(args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations and returns the data updated in the database.
     * @param {ConversationUpdateManyAndReturnArgs} args - Arguments to update many Conversations.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conversations and only return the `id`
     * const conversationWithIdOnly = await prisma.conversation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
     */
    upsert<T extends ConversationUpsertArgs>(args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
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
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    persona<T extends Conversation$personaArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$personaArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    messages<T extends Conversation$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matches<T extends Conversation$matchesArgs<ExtArgs> = {}>(args?: Subset<T, Conversation$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Conversation model
   */
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'String'>
    readonly userId: FieldRef<"Conversation", 'String'>
    readonly personaId: FieldRef<"Conversation", 'String'>
    readonly title: FieldRef<"Conversation", 'String'>
    readonly state: FieldRef<"Conversation", 'String'>
    readonly readinessScore: FieldRef<"Conversation", 'Float'>
    readonly createdAt: FieldRef<"Conversation", 'DateTime'>
    readonly updatedAt: FieldRef<"Conversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }

  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }

  /**
   * Conversation createMany
   */
  export type ConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
  }

  /**
   * Conversation createManyAndReturn
   */
  export type ConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to create many Conversations.
     */
    data: ConversationCreateManyInput | ConversationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
  }

  /**
   * Conversation updateManyAndReturn
   */
  export type ConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }

  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }

  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
    /**
     * Limit how many Conversations to delete.
     */
    limit?: number
  }

  /**
   * Conversation.persona
   */
  export type Conversation$personaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    where?: PersonaWhereInput
  }

  /**
   * Conversation.messages
   */
  export type Conversation$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Conversation.matches
   */
  export type Conversation$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    where?: MatchResultWhereInput
    orderBy?: MatchResultOrderByWithRelationInput | MatchResultOrderByWithRelationInput[]
    cursor?: MatchResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchResultScalarFieldEnum | MatchResultScalarFieldEnum[]
  }

  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    conversationId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    conversationId: string | null
    role: string | null
    content: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    conversationId: number
    role: number
    content: number
    createdAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    conversationId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    conversationId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    conversationId?: true
    role?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    conversationId: string
    role: string
    content: string
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    conversationId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "conversationId" | "role" | "content" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversation?: boolean | ConversationDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      conversation: Prisma.$ConversationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      conversationId: string
      role: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conversation<T extends ConversationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConversationDefaultArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly conversationId: FieldRef<"Message", 'String'>
    readonly role: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model MatchResult
   */

  export type AggregateMatchResult = {
    _count: MatchResultCountAggregateOutputType | null
    _avg: MatchResultAvgAggregateOutputType | null
    _sum: MatchResultSumAggregateOutputType | null
    _min: MatchResultMinAggregateOutputType | null
    _max: MatchResultMaxAggregateOutputType | null
  }

  export type MatchResultAvgAggregateOutputType = {
    score: number | null
    eligibilityScore: number | null
    readinessScore: number | null
    constraintFitScore: number | null
    expertiseFitScore: number | null
    relationshipFitScore: number | null
    timingFitScore: number | null
    outcomeScore: number | null
  }

  export type MatchResultSumAggregateOutputType = {
    score: number | null
    eligibilityScore: number | null
    readinessScore: number | null
    constraintFitScore: number | null
    expertiseFitScore: number | null
    relationshipFitScore: number | null
    timingFitScore: number | null
    outcomeScore: number | null
  }

  export type MatchResultMinAggregateOutputType = {
    id: string | null
    userId: string | null
    personaId: string | null
    intakeId: string | null
    score: number | null
    eligibilityScore: number | null
    readinessScore: number | null
    constraintFitScore: number | null
    expertiseFitScore: number | null
    relationshipFitScore: number | null
    timingFitScore: number | null
    outcomeScore: number | null
    reasons: string | null
    risks: string | null
    rationale: string | null
    status: $Enums.MatchStatus | null
    revealAuthorizedAt: Date | null
    revealedAt: Date | null
    revokedAt: Date | null
    rawJson: string | null
    conversationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchResultMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    personaId: string | null
    intakeId: string | null
    score: number | null
    eligibilityScore: number | null
    readinessScore: number | null
    constraintFitScore: number | null
    expertiseFitScore: number | null
    relationshipFitScore: number | null
    timingFitScore: number | null
    outcomeScore: number | null
    reasons: string | null
    risks: string | null
    rationale: string | null
    status: $Enums.MatchStatus | null
    revealAuthorizedAt: Date | null
    revealedAt: Date | null
    revokedAt: Date | null
    rawJson: string | null
    conversationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchResultCountAggregateOutputType = {
    id: number
    userId: number
    personaId: number
    intakeId: number
    score: number
    eligibilityScore: number
    readinessScore: number
    constraintFitScore: number
    expertiseFitScore: number
    relationshipFitScore: number
    timingFitScore: number
    outcomeScore: number
    reasons: number
    risks: number
    rationale: number
    status: number
    revealAuthorizedAt: number
    revealedAt: number
    revokedAt: number
    rawJson: number
    conversationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchResultAvgAggregateInputType = {
    score?: true
    eligibilityScore?: true
    readinessScore?: true
    constraintFitScore?: true
    expertiseFitScore?: true
    relationshipFitScore?: true
    timingFitScore?: true
    outcomeScore?: true
  }

  export type MatchResultSumAggregateInputType = {
    score?: true
    eligibilityScore?: true
    readinessScore?: true
    constraintFitScore?: true
    expertiseFitScore?: true
    relationshipFitScore?: true
    timingFitScore?: true
    outcomeScore?: true
  }

  export type MatchResultMinAggregateInputType = {
    id?: true
    userId?: true
    personaId?: true
    intakeId?: true
    score?: true
    eligibilityScore?: true
    readinessScore?: true
    constraintFitScore?: true
    expertiseFitScore?: true
    relationshipFitScore?: true
    timingFitScore?: true
    outcomeScore?: true
    reasons?: true
    risks?: true
    rationale?: true
    status?: true
    revealAuthorizedAt?: true
    revealedAt?: true
    revokedAt?: true
    rawJson?: true
    conversationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchResultMaxAggregateInputType = {
    id?: true
    userId?: true
    personaId?: true
    intakeId?: true
    score?: true
    eligibilityScore?: true
    readinessScore?: true
    constraintFitScore?: true
    expertiseFitScore?: true
    relationshipFitScore?: true
    timingFitScore?: true
    outcomeScore?: true
    reasons?: true
    risks?: true
    rationale?: true
    status?: true
    revealAuthorizedAt?: true
    revealedAt?: true
    revokedAt?: true
    rawJson?: true
    conversationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchResultCountAggregateInputType = {
    id?: true
    userId?: true
    personaId?: true
    intakeId?: true
    score?: true
    eligibilityScore?: true
    readinessScore?: true
    constraintFitScore?: true
    expertiseFitScore?: true
    relationshipFitScore?: true
    timingFitScore?: true
    outcomeScore?: true
    reasons?: true
    risks?: true
    rationale?: true
    status?: true
    revealAuthorizedAt?: true
    revealedAt?: true
    revokedAt?: true
    rawJson?: true
    conversationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchResult to aggregate.
     */
    where?: MatchResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchResults to fetch.
     */
    orderBy?: MatchResultOrderByWithRelationInput | MatchResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchResults
    **/
    _count?: true | MatchResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchResultMaxAggregateInputType
  }

  export type GetMatchResultAggregateType<T extends MatchResultAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchResult[P]>
      : GetScalarType<T[P], AggregateMatchResult[P]>
  }




  export type MatchResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchResultWhereInput
    orderBy?: MatchResultOrderByWithAggregationInput | MatchResultOrderByWithAggregationInput[]
    by: MatchResultScalarFieldEnum[] | MatchResultScalarFieldEnum
    having?: MatchResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchResultCountAggregateInputType | true
    _avg?: MatchResultAvgAggregateInputType
    _sum?: MatchResultSumAggregateInputType
    _min?: MatchResultMinAggregateInputType
    _max?: MatchResultMaxAggregateInputType
  }

  export type MatchResultGroupByOutputType = {
    id: string
    userId: string
    personaId: string
    intakeId: string | null
    score: number
    eligibilityScore: number
    readinessScore: number
    constraintFitScore: number
    expertiseFitScore: number
    relationshipFitScore: number
    timingFitScore: number
    outcomeScore: number
    reasons: string | null
    risks: string | null
    rationale: string | null
    status: $Enums.MatchStatus
    revealAuthorizedAt: Date | null
    revealedAt: Date | null
    revokedAt: Date | null
    rawJson: string | null
    conversationId: string | null
    createdAt: Date
    updatedAt: Date
    _count: MatchResultCountAggregateOutputType | null
    _avg: MatchResultAvgAggregateOutputType | null
    _sum: MatchResultSumAggregateOutputType | null
    _min: MatchResultMinAggregateOutputType | null
    _max: MatchResultMaxAggregateOutputType | null
  }

  type GetMatchResultGroupByPayload<T extends MatchResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchResultGroupByOutputType[P]>
            : GetScalarType<T[P], MatchResultGroupByOutputType[P]>
        }
      >
    >


  export type MatchResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    personaId?: boolean
    intakeId?: boolean
    score?: boolean
    eligibilityScore?: boolean
    readinessScore?: boolean
    constraintFitScore?: boolean
    expertiseFitScore?: boolean
    relationshipFitScore?: boolean
    timingFitScore?: boolean
    outcomeScore?: boolean
    reasons?: boolean
    risks?: boolean
    rationale?: boolean
    status?: boolean
    revealAuthorizedAt?: boolean
    revealedAt?: boolean
    revokedAt?: boolean
    rawJson?: boolean
    conversationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    persona?: boolean | MatchResult$personaArgs<ExtArgs>
    conversation?: boolean | MatchResult$conversationArgs<ExtArgs>
    outcome?: boolean | MatchResult$outcomeArgs<ExtArgs>
  }, ExtArgs["result"]["matchResult"]>

  export type MatchResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    personaId?: boolean
    intakeId?: boolean
    score?: boolean
    eligibilityScore?: boolean
    readinessScore?: boolean
    constraintFitScore?: boolean
    expertiseFitScore?: boolean
    relationshipFitScore?: boolean
    timingFitScore?: boolean
    outcomeScore?: boolean
    reasons?: boolean
    risks?: boolean
    rationale?: boolean
    status?: boolean
    revealAuthorizedAt?: boolean
    revealedAt?: boolean
    revokedAt?: boolean
    rawJson?: boolean
    conversationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    persona?: boolean | MatchResult$personaArgs<ExtArgs>
    conversation?: boolean | MatchResult$conversationArgs<ExtArgs>
  }, ExtArgs["result"]["matchResult"]>

  export type MatchResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    personaId?: boolean
    intakeId?: boolean
    score?: boolean
    eligibilityScore?: boolean
    readinessScore?: boolean
    constraintFitScore?: boolean
    expertiseFitScore?: boolean
    relationshipFitScore?: boolean
    timingFitScore?: boolean
    outcomeScore?: boolean
    reasons?: boolean
    risks?: boolean
    rationale?: boolean
    status?: boolean
    revealAuthorizedAt?: boolean
    revealedAt?: boolean
    revokedAt?: boolean
    rawJson?: boolean
    conversationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    persona?: boolean | MatchResult$personaArgs<ExtArgs>
    conversation?: boolean | MatchResult$conversationArgs<ExtArgs>
  }, ExtArgs["result"]["matchResult"]>

  export type MatchResultSelectScalar = {
    id?: boolean
    userId?: boolean
    personaId?: boolean
    intakeId?: boolean
    score?: boolean
    eligibilityScore?: boolean
    readinessScore?: boolean
    constraintFitScore?: boolean
    expertiseFitScore?: boolean
    relationshipFitScore?: boolean
    timingFitScore?: boolean
    outcomeScore?: boolean
    reasons?: boolean
    risks?: boolean
    rationale?: boolean
    status?: boolean
    revealAuthorizedAt?: boolean
    revealedAt?: boolean
    revokedAt?: boolean
    rawJson?: boolean
    conversationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "personaId" | "intakeId" | "score" | "eligibilityScore" | "readinessScore" | "constraintFitScore" | "expertiseFitScore" | "relationshipFitScore" | "timingFitScore" | "outcomeScore" | "reasons" | "risks" | "rationale" | "status" | "revealAuthorizedAt" | "revealedAt" | "revokedAt" | "rawJson" | "conversationId" | "createdAt" | "updatedAt", ExtArgs["result"]["matchResult"]>
  export type MatchResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    persona?: boolean | MatchResult$personaArgs<ExtArgs>
    conversation?: boolean | MatchResult$conversationArgs<ExtArgs>
    outcome?: boolean | MatchResult$outcomeArgs<ExtArgs>
  }
  export type MatchResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    persona?: boolean | MatchResult$personaArgs<ExtArgs>
    conversation?: boolean | MatchResult$conversationArgs<ExtArgs>
  }
  export type MatchResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    persona?: boolean | MatchResult$personaArgs<ExtArgs>
    conversation?: boolean | MatchResult$conversationArgs<ExtArgs>
  }

  export type $MatchResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchResult"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      persona: Prisma.$PersonaPayload<ExtArgs> | null
      conversation: Prisma.$ConversationPayload<ExtArgs> | null
      outcome: Prisma.$MatchOutcomePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      personaId: string
      intakeId: string | null
      score: number
      eligibilityScore: number
      readinessScore: number
      constraintFitScore: number
      expertiseFitScore: number
      relationshipFitScore: number
      timingFitScore: number
      outcomeScore: number
      reasons: string | null
      risks: string | null
      rationale: string | null
      status: $Enums.MatchStatus
      revealAuthorizedAt: Date | null
      revealedAt: Date | null
      revokedAt: Date | null
      rawJson: string | null
      conversationId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["matchResult"]>
    composites: {}
  }

  type MatchResultGetPayload<S extends boolean | null | undefined | MatchResultDefaultArgs> = $Result.GetResult<Prisma.$MatchResultPayload, S>

  type MatchResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchResultCountAggregateInputType | true
    }

  export interface MatchResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchResult'], meta: { name: 'MatchResult' } }
    /**
     * Find zero or one MatchResult that matches the filter.
     * @param {MatchResultFindUniqueArgs} args - Arguments to find a MatchResult
     * @example
     * // Get one MatchResult
     * const matchResult = await prisma.matchResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchResultFindUniqueArgs>(args: SelectSubset<T, MatchResultFindUniqueArgs<ExtArgs>>): Prisma__MatchResultClient<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchResultFindUniqueOrThrowArgs} args - Arguments to find a MatchResult
     * @example
     * // Get one MatchResult
     * const matchResult = await prisma.matchResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchResultFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchResultClient<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultFindFirstArgs} args - Arguments to find a MatchResult
     * @example
     * // Get one MatchResult
     * const matchResult = await prisma.matchResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchResultFindFirstArgs>(args?: SelectSubset<T, MatchResultFindFirstArgs<ExtArgs>>): Prisma__MatchResultClient<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultFindFirstOrThrowArgs} args - Arguments to find a MatchResult
     * @example
     * // Get one MatchResult
     * const matchResult = await prisma.matchResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchResultFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchResultClient<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchResults
     * const matchResults = await prisma.matchResult.findMany()
     * 
     * // Get first 10 MatchResults
     * const matchResults = await prisma.matchResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchResultWithIdOnly = await prisma.matchResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchResultFindManyArgs>(args?: SelectSubset<T, MatchResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchResult.
     * @param {MatchResultCreateArgs} args - Arguments to create a MatchResult.
     * @example
     * // Create one MatchResult
     * const MatchResult = await prisma.matchResult.create({
     *   data: {
     *     // ... data to create a MatchResult
     *   }
     * })
     * 
     */
    create<T extends MatchResultCreateArgs>(args: SelectSubset<T, MatchResultCreateArgs<ExtArgs>>): Prisma__MatchResultClient<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchResults.
     * @param {MatchResultCreateManyArgs} args - Arguments to create many MatchResults.
     * @example
     * // Create many MatchResults
     * const matchResult = await prisma.matchResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchResultCreateManyArgs>(args?: SelectSubset<T, MatchResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchResults and returns the data saved in the database.
     * @param {MatchResultCreateManyAndReturnArgs} args - Arguments to create many MatchResults.
     * @example
     * // Create many MatchResults
     * const matchResult = await prisma.matchResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchResults and only return the `id`
     * const matchResultWithIdOnly = await prisma.matchResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchResultCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchResult.
     * @param {MatchResultDeleteArgs} args - Arguments to delete one MatchResult.
     * @example
     * // Delete one MatchResult
     * const MatchResult = await prisma.matchResult.delete({
     *   where: {
     *     // ... filter to delete one MatchResult
     *   }
     * })
     * 
     */
    delete<T extends MatchResultDeleteArgs>(args: SelectSubset<T, MatchResultDeleteArgs<ExtArgs>>): Prisma__MatchResultClient<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchResult.
     * @param {MatchResultUpdateArgs} args - Arguments to update one MatchResult.
     * @example
     * // Update one MatchResult
     * const matchResult = await prisma.matchResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchResultUpdateArgs>(args: SelectSubset<T, MatchResultUpdateArgs<ExtArgs>>): Prisma__MatchResultClient<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchResults.
     * @param {MatchResultDeleteManyArgs} args - Arguments to filter MatchResults to delete.
     * @example
     * // Delete a few MatchResults
     * const { count } = await prisma.matchResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchResultDeleteManyArgs>(args?: SelectSubset<T, MatchResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchResults
     * const matchResult = await prisma.matchResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchResultUpdateManyArgs>(args: SelectSubset<T, MatchResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchResults and returns the data updated in the database.
     * @param {MatchResultUpdateManyAndReturnArgs} args - Arguments to update many MatchResults.
     * @example
     * // Update many MatchResults
     * const matchResult = await prisma.matchResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchResults and only return the `id`
     * const matchResultWithIdOnly = await prisma.matchResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchResultUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchResult.
     * @param {MatchResultUpsertArgs} args - Arguments to update or create a MatchResult.
     * @example
     * // Update or create a MatchResult
     * const matchResult = await prisma.matchResult.upsert({
     *   create: {
     *     // ... data to create a MatchResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchResult we want to update
     *   }
     * })
     */
    upsert<T extends MatchResultUpsertArgs>(args: SelectSubset<T, MatchResultUpsertArgs<ExtArgs>>): Prisma__MatchResultClient<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultCountArgs} args - Arguments to filter MatchResults to count.
     * @example
     * // Count the number of MatchResults
     * const count = await prisma.matchResult.count({
     *   where: {
     *     // ... the filter for the MatchResults we want to count
     *   }
     * })
    **/
    count<T extends MatchResultCountArgs>(
      args?: Subset<T, MatchResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchResultAggregateArgs>(args: Subset<T, MatchResultAggregateArgs>): Prisma.PrismaPromise<GetMatchResultAggregateType<T>>

    /**
     * Group by MatchResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchResultGroupByArgs} args - Group by arguments.
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
      T extends MatchResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchResultGroupByArgs['orderBy'] }
        : { orderBy?: MatchResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchResult model
   */
  readonly fields: MatchResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    persona<T extends MatchResult$personaArgs<ExtArgs> = {}>(args?: Subset<T, MatchResult$personaArgs<ExtArgs>>): Prisma__PersonaClient<$Result.GetResult<Prisma.$PersonaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    conversation<T extends MatchResult$conversationArgs<ExtArgs> = {}>(args?: Subset<T, MatchResult$conversationArgs<ExtArgs>>): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    outcome<T extends MatchResult$outcomeArgs<ExtArgs> = {}>(args?: Subset<T, MatchResult$outcomeArgs<ExtArgs>>): Prisma__MatchOutcomeClient<$Result.GetResult<Prisma.$MatchOutcomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MatchResult model
   */
  interface MatchResultFieldRefs {
    readonly id: FieldRef<"MatchResult", 'String'>
    readonly userId: FieldRef<"MatchResult", 'String'>
    readonly personaId: FieldRef<"MatchResult", 'String'>
    readonly intakeId: FieldRef<"MatchResult", 'String'>
    readonly score: FieldRef<"MatchResult", 'Float'>
    readonly eligibilityScore: FieldRef<"MatchResult", 'Float'>
    readonly readinessScore: FieldRef<"MatchResult", 'Float'>
    readonly constraintFitScore: FieldRef<"MatchResult", 'Float'>
    readonly expertiseFitScore: FieldRef<"MatchResult", 'Float'>
    readonly relationshipFitScore: FieldRef<"MatchResult", 'Float'>
    readonly timingFitScore: FieldRef<"MatchResult", 'Float'>
    readonly outcomeScore: FieldRef<"MatchResult", 'Float'>
    readonly reasons: FieldRef<"MatchResult", 'String'>
    readonly risks: FieldRef<"MatchResult", 'String'>
    readonly rationale: FieldRef<"MatchResult", 'String'>
    readonly status: FieldRef<"MatchResult", 'MatchStatus'>
    readonly revealAuthorizedAt: FieldRef<"MatchResult", 'DateTime'>
    readonly revealedAt: FieldRef<"MatchResult", 'DateTime'>
    readonly revokedAt: FieldRef<"MatchResult", 'DateTime'>
    readonly rawJson: FieldRef<"MatchResult", 'String'>
    readonly conversationId: FieldRef<"MatchResult", 'String'>
    readonly createdAt: FieldRef<"MatchResult", 'DateTime'>
    readonly updatedAt: FieldRef<"MatchResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchResult findUnique
   */
  export type MatchResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    /**
     * Filter, which MatchResult to fetch.
     */
    where: MatchResultWhereUniqueInput
  }

  /**
   * MatchResult findUniqueOrThrow
   */
  export type MatchResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    /**
     * Filter, which MatchResult to fetch.
     */
    where: MatchResultWhereUniqueInput
  }

  /**
   * MatchResult findFirst
   */
  export type MatchResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    /**
     * Filter, which MatchResult to fetch.
     */
    where?: MatchResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchResults to fetch.
     */
    orderBy?: MatchResultOrderByWithRelationInput | MatchResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchResults.
     */
    cursor?: MatchResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchResults.
     */
    distinct?: MatchResultScalarFieldEnum | MatchResultScalarFieldEnum[]
  }

  /**
   * MatchResult findFirstOrThrow
   */
  export type MatchResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    /**
     * Filter, which MatchResult to fetch.
     */
    where?: MatchResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchResults to fetch.
     */
    orderBy?: MatchResultOrderByWithRelationInput | MatchResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchResults.
     */
    cursor?: MatchResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchResults.
     */
    distinct?: MatchResultScalarFieldEnum | MatchResultScalarFieldEnum[]
  }

  /**
   * MatchResult findMany
   */
  export type MatchResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    /**
     * Filter, which MatchResults to fetch.
     */
    where?: MatchResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchResults to fetch.
     */
    orderBy?: MatchResultOrderByWithRelationInput | MatchResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchResults.
     */
    cursor?: MatchResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchResults.
     */
    skip?: number
    distinct?: MatchResultScalarFieldEnum | MatchResultScalarFieldEnum[]
  }

  /**
   * MatchResult create
   */
  export type MatchResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchResult.
     */
    data: XOR<MatchResultCreateInput, MatchResultUncheckedCreateInput>
  }

  /**
   * MatchResult createMany
   */
  export type MatchResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchResults.
     */
    data: MatchResultCreateManyInput | MatchResultCreateManyInput[]
  }

  /**
   * MatchResult createManyAndReturn
   */
  export type MatchResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * The data used to create many MatchResults.
     */
    data: MatchResultCreateManyInput | MatchResultCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchResult update
   */
  export type MatchResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchResult.
     */
    data: XOR<MatchResultUpdateInput, MatchResultUncheckedUpdateInput>
    /**
     * Choose, which MatchResult to update.
     */
    where: MatchResultWhereUniqueInput
  }

  /**
   * MatchResult updateMany
   */
  export type MatchResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchResults.
     */
    data: XOR<MatchResultUpdateManyMutationInput, MatchResultUncheckedUpdateManyInput>
    /**
     * Filter which MatchResults to update
     */
    where?: MatchResultWhereInput
    /**
     * Limit how many MatchResults to update.
     */
    limit?: number
  }

  /**
   * MatchResult updateManyAndReturn
   */
  export type MatchResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * The data used to update MatchResults.
     */
    data: XOR<MatchResultUpdateManyMutationInput, MatchResultUncheckedUpdateManyInput>
    /**
     * Filter which MatchResults to update
     */
    where?: MatchResultWhereInput
    /**
     * Limit how many MatchResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchResult upsert
   */
  export type MatchResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchResult to update in case it exists.
     */
    where: MatchResultWhereUniqueInput
    /**
     * In case the MatchResult found by the `where` argument doesn't exist, create a new MatchResult with this data.
     */
    create: XOR<MatchResultCreateInput, MatchResultUncheckedCreateInput>
    /**
     * In case the MatchResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchResultUpdateInput, MatchResultUncheckedUpdateInput>
  }

  /**
   * MatchResult delete
   */
  export type MatchResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
    /**
     * Filter which MatchResult to delete.
     */
    where: MatchResultWhereUniqueInput
  }

  /**
   * MatchResult deleteMany
   */
  export type MatchResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchResults to delete
     */
    where?: MatchResultWhereInput
    /**
     * Limit how many MatchResults to delete.
     */
    limit?: number
  }

  /**
   * MatchResult.persona
   */
  export type MatchResult$personaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Persona
     */
    select?: PersonaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Persona
     */
    omit?: PersonaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonaInclude<ExtArgs> | null
    where?: PersonaWhereInput
  }

  /**
   * MatchResult.conversation
   */
  export type MatchResult$conversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conversation
     */
    omit?: ConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
  }

  /**
   * MatchResult.outcome
   */
  export type MatchResult$outcomeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchOutcome
     */
    select?: MatchOutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchOutcome
     */
    omit?: MatchOutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchOutcomeInclude<ExtArgs> | null
    where?: MatchOutcomeWhereInput
  }

  /**
   * MatchResult without action
   */
  export type MatchResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchResult
     */
    select?: MatchResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchResult
     */
    omit?: MatchResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchResultInclude<ExtArgs> | null
  }


  /**
   * Model MatchOutcome
   */

  export type AggregateMatchOutcome = {
    _count: MatchOutcomeCountAggregateOutputType | null
    _avg: MatchOutcomeAvgAggregateOutputType | null
    _sum: MatchOutcomeSumAggregateOutputType | null
    _min: MatchOutcomeMinAggregateOutputType | null
    _max: MatchOutcomeMaxAggregateOutputType | null
  }

  export type MatchOutcomeAvgAggregateOutputType = {
    founderRating: number | null
    expertRating: number | null
  }

  export type MatchOutcomeSumAggregateOutputType = {
    founderRating: number | null
    expertRating: number | null
  }

  export type MatchOutcomeMinAggregateOutputType = {
    id: string | null
    matchId: string | null
    introRequestedAt: Date | null
    introApprovedAt: Date | null
    meetingOccurredAt: Date | null
    followUpOccurred: boolean | null
    result: $Enums.MatchOutcomeResult | null
    founderRating: number | null
    expertRating: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchOutcomeMaxAggregateOutputType = {
    id: string | null
    matchId: string | null
    introRequestedAt: Date | null
    introApprovedAt: Date | null
    meetingOccurredAt: Date | null
    followUpOccurred: boolean | null
    result: $Enums.MatchOutcomeResult | null
    founderRating: number | null
    expertRating: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchOutcomeCountAggregateOutputType = {
    id: number
    matchId: number
    introRequestedAt: number
    introApprovedAt: number
    meetingOccurredAt: number
    followUpOccurred: number
    result: number
    founderRating: number
    expertRating: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchOutcomeAvgAggregateInputType = {
    founderRating?: true
    expertRating?: true
  }

  export type MatchOutcomeSumAggregateInputType = {
    founderRating?: true
    expertRating?: true
  }

  export type MatchOutcomeMinAggregateInputType = {
    id?: true
    matchId?: true
    introRequestedAt?: true
    introApprovedAt?: true
    meetingOccurredAt?: true
    followUpOccurred?: true
    result?: true
    founderRating?: true
    expertRating?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchOutcomeMaxAggregateInputType = {
    id?: true
    matchId?: true
    introRequestedAt?: true
    introApprovedAt?: true
    meetingOccurredAt?: true
    followUpOccurred?: true
    result?: true
    founderRating?: true
    expertRating?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchOutcomeCountAggregateInputType = {
    id?: true
    matchId?: true
    introRequestedAt?: true
    introApprovedAt?: true
    meetingOccurredAt?: true
    followUpOccurred?: true
    result?: true
    founderRating?: true
    expertRating?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchOutcomeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchOutcome to aggregate.
     */
    where?: MatchOutcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchOutcomes to fetch.
     */
    orderBy?: MatchOutcomeOrderByWithRelationInput | MatchOutcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchOutcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchOutcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchOutcomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchOutcomes
    **/
    _count?: true | MatchOutcomeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchOutcomeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchOutcomeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchOutcomeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchOutcomeMaxAggregateInputType
  }

  export type GetMatchOutcomeAggregateType<T extends MatchOutcomeAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchOutcome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchOutcome[P]>
      : GetScalarType<T[P], AggregateMatchOutcome[P]>
  }




  export type MatchOutcomeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchOutcomeWhereInput
    orderBy?: MatchOutcomeOrderByWithAggregationInput | MatchOutcomeOrderByWithAggregationInput[]
    by: MatchOutcomeScalarFieldEnum[] | MatchOutcomeScalarFieldEnum
    having?: MatchOutcomeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchOutcomeCountAggregateInputType | true
    _avg?: MatchOutcomeAvgAggregateInputType
    _sum?: MatchOutcomeSumAggregateInputType
    _min?: MatchOutcomeMinAggregateInputType
    _max?: MatchOutcomeMaxAggregateInputType
  }

  export type MatchOutcomeGroupByOutputType = {
    id: string
    matchId: string
    introRequestedAt: Date | null
    introApprovedAt: Date | null
    meetingOccurredAt: Date | null
    followUpOccurred: boolean
    result: $Enums.MatchOutcomeResult
    founderRating: number | null
    expertRating: number | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: MatchOutcomeCountAggregateOutputType | null
    _avg: MatchOutcomeAvgAggregateOutputType | null
    _sum: MatchOutcomeSumAggregateOutputType | null
    _min: MatchOutcomeMinAggregateOutputType | null
    _max: MatchOutcomeMaxAggregateOutputType | null
  }

  type GetMatchOutcomeGroupByPayload<T extends MatchOutcomeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchOutcomeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchOutcomeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchOutcomeGroupByOutputType[P]>
            : GetScalarType<T[P], MatchOutcomeGroupByOutputType[P]>
        }
      >
    >


  export type MatchOutcomeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    introRequestedAt?: boolean
    introApprovedAt?: boolean
    meetingOccurredAt?: boolean
    followUpOccurred?: boolean
    result?: boolean
    founderRating?: boolean
    expertRating?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    match?: boolean | MatchResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchOutcome"]>

  export type MatchOutcomeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    introRequestedAt?: boolean
    introApprovedAt?: boolean
    meetingOccurredAt?: boolean
    followUpOccurred?: boolean
    result?: boolean
    founderRating?: boolean
    expertRating?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    match?: boolean | MatchResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchOutcome"]>

  export type MatchOutcomeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    introRequestedAt?: boolean
    introApprovedAt?: boolean
    meetingOccurredAt?: boolean
    followUpOccurred?: boolean
    result?: boolean
    founderRating?: boolean
    expertRating?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    match?: boolean | MatchResultDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchOutcome"]>

  export type MatchOutcomeSelectScalar = {
    id?: boolean
    matchId?: boolean
    introRequestedAt?: boolean
    introApprovedAt?: boolean
    meetingOccurredAt?: boolean
    followUpOccurred?: boolean
    result?: boolean
    founderRating?: boolean
    expertRating?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchOutcomeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchId" | "introRequestedAt" | "introApprovedAt" | "meetingOccurredAt" | "followUpOccurred" | "result" | "founderRating" | "expertRating" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["matchOutcome"]>
  export type MatchOutcomeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchResultDefaultArgs<ExtArgs>
  }
  export type MatchOutcomeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchResultDefaultArgs<ExtArgs>
  }
  export type MatchOutcomeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchResultDefaultArgs<ExtArgs>
  }

  export type $MatchOutcomePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchOutcome"
    objects: {
      match: Prisma.$MatchResultPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matchId: string
      introRequestedAt: Date | null
      introApprovedAt: Date | null
      meetingOccurredAt: Date | null
      followUpOccurred: boolean
      result: $Enums.MatchOutcomeResult
      founderRating: number | null
      expertRating: number | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["matchOutcome"]>
    composites: {}
  }

  type MatchOutcomeGetPayload<S extends boolean | null | undefined | MatchOutcomeDefaultArgs> = $Result.GetResult<Prisma.$MatchOutcomePayload, S>

  type MatchOutcomeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchOutcomeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchOutcomeCountAggregateInputType | true
    }

  export interface MatchOutcomeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchOutcome'], meta: { name: 'MatchOutcome' } }
    /**
     * Find zero or one MatchOutcome that matches the filter.
     * @param {MatchOutcomeFindUniqueArgs} args - Arguments to find a MatchOutcome
     * @example
     * // Get one MatchOutcome
     * const matchOutcome = await prisma.matchOutcome.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchOutcomeFindUniqueArgs>(args: SelectSubset<T, MatchOutcomeFindUniqueArgs<ExtArgs>>): Prisma__MatchOutcomeClient<$Result.GetResult<Prisma.$MatchOutcomePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchOutcome that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchOutcomeFindUniqueOrThrowArgs} args - Arguments to find a MatchOutcome
     * @example
     * // Get one MatchOutcome
     * const matchOutcome = await prisma.matchOutcome.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchOutcomeFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchOutcomeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchOutcomeClient<$Result.GetResult<Prisma.$MatchOutcomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchOutcome that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchOutcomeFindFirstArgs} args - Arguments to find a MatchOutcome
     * @example
     * // Get one MatchOutcome
     * const matchOutcome = await prisma.matchOutcome.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchOutcomeFindFirstArgs>(args?: SelectSubset<T, MatchOutcomeFindFirstArgs<ExtArgs>>): Prisma__MatchOutcomeClient<$Result.GetResult<Prisma.$MatchOutcomePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchOutcome that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchOutcomeFindFirstOrThrowArgs} args - Arguments to find a MatchOutcome
     * @example
     * // Get one MatchOutcome
     * const matchOutcome = await prisma.matchOutcome.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchOutcomeFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchOutcomeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchOutcomeClient<$Result.GetResult<Prisma.$MatchOutcomePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchOutcomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchOutcomeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchOutcomes
     * const matchOutcomes = await prisma.matchOutcome.findMany()
     * 
     * // Get first 10 MatchOutcomes
     * const matchOutcomes = await prisma.matchOutcome.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchOutcomeWithIdOnly = await prisma.matchOutcome.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchOutcomeFindManyArgs>(args?: SelectSubset<T, MatchOutcomeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchOutcomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchOutcome.
     * @param {MatchOutcomeCreateArgs} args - Arguments to create a MatchOutcome.
     * @example
     * // Create one MatchOutcome
     * const MatchOutcome = await prisma.matchOutcome.create({
     *   data: {
     *     // ... data to create a MatchOutcome
     *   }
     * })
     * 
     */
    create<T extends MatchOutcomeCreateArgs>(args: SelectSubset<T, MatchOutcomeCreateArgs<ExtArgs>>): Prisma__MatchOutcomeClient<$Result.GetResult<Prisma.$MatchOutcomePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchOutcomes.
     * @param {MatchOutcomeCreateManyArgs} args - Arguments to create many MatchOutcomes.
     * @example
     * // Create many MatchOutcomes
     * const matchOutcome = await prisma.matchOutcome.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchOutcomeCreateManyArgs>(args?: SelectSubset<T, MatchOutcomeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchOutcomes and returns the data saved in the database.
     * @param {MatchOutcomeCreateManyAndReturnArgs} args - Arguments to create many MatchOutcomes.
     * @example
     * // Create many MatchOutcomes
     * const matchOutcome = await prisma.matchOutcome.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchOutcomes and only return the `id`
     * const matchOutcomeWithIdOnly = await prisma.matchOutcome.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchOutcomeCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchOutcomeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchOutcomePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchOutcome.
     * @param {MatchOutcomeDeleteArgs} args - Arguments to delete one MatchOutcome.
     * @example
     * // Delete one MatchOutcome
     * const MatchOutcome = await prisma.matchOutcome.delete({
     *   where: {
     *     // ... filter to delete one MatchOutcome
     *   }
     * })
     * 
     */
    delete<T extends MatchOutcomeDeleteArgs>(args: SelectSubset<T, MatchOutcomeDeleteArgs<ExtArgs>>): Prisma__MatchOutcomeClient<$Result.GetResult<Prisma.$MatchOutcomePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchOutcome.
     * @param {MatchOutcomeUpdateArgs} args - Arguments to update one MatchOutcome.
     * @example
     * // Update one MatchOutcome
     * const matchOutcome = await prisma.matchOutcome.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchOutcomeUpdateArgs>(args: SelectSubset<T, MatchOutcomeUpdateArgs<ExtArgs>>): Prisma__MatchOutcomeClient<$Result.GetResult<Prisma.$MatchOutcomePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchOutcomes.
     * @param {MatchOutcomeDeleteManyArgs} args - Arguments to filter MatchOutcomes to delete.
     * @example
     * // Delete a few MatchOutcomes
     * const { count } = await prisma.matchOutcome.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchOutcomeDeleteManyArgs>(args?: SelectSubset<T, MatchOutcomeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchOutcomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchOutcomeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchOutcomes
     * const matchOutcome = await prisma.matchOutcome.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchOutcomeUpdateManyArgs>(args: SelectSubset<T, MatchOutcomeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchOutcomes and returns the data updated in the database.
     * @param {MatchOutcomeUpdateManyAndReturnArgs} args - Arguments to update many MatchOutcomes.
     * @example
     * // Update many MatchOutcomes
     * const matchOutcome = await prisma.matchOutcome.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchOutcomes and only return the `id`
     * const matchOutcomeWithIdOnly = await prisma.matchOutcome.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchOutcomeUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchOutcomeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchOutcomePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchOutcome.
     * @param {MatchOutcomeUpsertArgs} args - Arguments to update or create a MatchOutcome.
     * @example
     * // Update or create a MatchOutcome
     * const matchOutcome = await prisma.matchOutcome.upsert({
     *   create: {
     *     // ... data to create a MatchOutcome
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchOutcome we want to update
     *   }
     * })
     */
    upsert<T extends MatchOutcomeUpsertArgs>(args: SelectSubset<T, MatchOutcomeUpsertArgs<ExtArgs>>): Prisma__MatchOutcomeClient<$Result.GetResult<Prisma.$MatchOutcomePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchOutcomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchOutcomeCountArgs} args - Arguments to filter MatchOutcomes to count.
     * @example
     * // Count the number of MatchOutcomes
     * const count = await prisma.matchOutcome.count({
     *   where: {
     *     // ... the filter for the MatchOutcomes we want to count
     *   }
     * })
    **/
    count<T extends MatchOutcomeCountArgs>(
      args?: Subset<T, MatchOutcomeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchOutcomeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchOutcome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchOutcomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MatchOutcomeAggregateArgs>(args: Subset<T, MatchOutcomeAggregateArgs>): Prisma.PrismaPromise<GetMatchOutcomeAggregateType<T>>

    /**
     * Group by MatchOutcome.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchOutcomeGroupByArgs} args - Group by arguments.
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
      T extends MatchOutcomeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchOutcomeGroupByArgs['orderBy'] }
        : { orderBy?: MatchOutcomeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MatchOutcomeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchOutcomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchOutcome model
   */
  readonly fields: MatchOutcomeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchOutcome.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchOutcomeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends MatchResultDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchResultDefaultArgs<ExtArgs>>): Prisma__MatchResultClient<$Result.GetResult<Prisma.$MatchResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MatchOutcome model
   */
  interface MatchOutcomeFieldRefs {
    readonly id: FieldRef<"MatchOutcome", 'String'>
    readonly matchId: FieldRef<"MatchOutcome", 'String'>
    readonly introRequestedAt: FieldRef<"MatchOutcome", 'DateTime'>
    readonly introApprovedAt: FieldRef<"MatchOutcome", 'DateTime'>
    readonly meetingOccurredAt: FieldRef<"MatchOutcome", 'DateTime'>
    readonly followUpOccurred: FieldRef<"MatchOutcome", 'Boolean'>
    readonly result: FieldRef<"MatchOutcome", 'MatchOutcomeResult'>
    readonly founderRating: FieldRef<"MatchOutcome", 'Int'>
    readonly expertRating: FieldRef<"MatchOutcome", 'Int'>
    readonly notes: FieldRef<"MatchOutcome", 'String'>
    readonly createdAt: FieldRef<"MatchOutcome", 'DateTime'>
    readonly updatedAt: FieldRef<"MatchOutcome", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchOutcome findUnique
   */
  export type MatchOutcomeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchOutcome
     */
    select?: MatchOutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchOutcome
     */
    omit?: MatchOutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchOutcomeInclude<ExtArgs> | null
    /**
     * Filter, which MatchOutcome to fetch.
     */
    where: MatchOutcomeWhereUniqueInput
  }

  /**
   * MatchOutcome findUniqueOrThrow
   */
  export type MatchOutcomeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchOutcome
     */
    select?: MatchOutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchOutcome
     */
    omit?: MatchOutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchOutcomeInclude<ExtArgs> | null
    /**
     * Filter, which MatchOutcome to fetch.
     */
    where: MatchOutcomeWhereUniqueInput
  }

  /**
   * MatchOutcome findFirst
   */
  export type MatchOutcomeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchOutcome
     */
    select?: MatchOutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchOutcome
     */
    omit?: MatchOutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchOutcomeInclude<ExtArgs> | null
    /**
     * Filter, which MatchOutcome to fetch.
     */
    where?: MatchOutcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchOutcomes to fetch.
     */
    orderBy?: MatchOutcomeOrderByWithRelationInput | MatchOutcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchOutcomes.
     */
    cursor?: MatchOutcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchOutcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchOutcomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchOutcomes.
     */
    distinct?: MatchOutcomeScalarFieldEnum | MatchOutcomeScalarFieldEnum[]
  }

  /**
   * MatchOutcome findFirstOrThrow
   */
  export type MatchOutcomeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchOutcome
     */
    select?: MatchOutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchOutcome
     */
    omit?: MatchOutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchOutcomeInclude<ExtArgs> | null
    /**
     * Filter, which MatchOutcome to fetch.
     */
    where?: MatchOutcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchOutcomes to fetch.
     */
    orderBy?: MatchOutcomeOrderByWithRelationInput | MatchOutcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchOutcomes.
     */
    cursor?: MatchOutcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchOutcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchOutcomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchOutcomes.
     */
    distinct?: MatchOutcomeScalarFieldEnum | MatchOutcomeScalarFieldEnum[]
  }

  /**
   * MatchOutcome findMany
   */
  export type MatchOutcomeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchOutcome
     */
    select?: MatchOutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchOutcome
     */
    omit?: MatchOutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchOutcomeInclude<ExtArgs> | null
    /**
     * Filter, which MatchOutcomes to fetch.
     */
    where?: MatchOutcomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchOutcomes to fetch.
     */
    orderBy?: MatchOutcomeOrderByWithRelationInput | MatchOutcomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchOutcomes.
     */
    cursor?: MatchOutcomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchOutcomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchOutcomes.
     */
    skip?: number
    distinct?: MatchOutcomeScalarFieldEnum | MatchOutcomeScalarFieldEnum[]
  }

  /**
   * MatchOutcome create
   */
  export type MatchOutcomeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchOutcome
     */
    select?: MatchOutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchOutcome
     */
    omit?: MatchOutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchOutcomeInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchOutcome.
     */
    data: XOR<MatchOutcomeCreateInput, MatchOutcomeUncheckedCreateInput>
  }

  /**
   * MatchOutcome createMany
   */
  export type MatchOutcomeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchOutcomes.
     */
    data: MatchOutcomeCreateManyInput | MatchOutcomeCreateManyInput[]
  }

  /**
   * MatchOutcome createManyAndReturn
   */
  export type MatchOutcomeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchOutcome
     */
    select?: MatchOutcomeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchOutcome
     */
    omit?: MatchOutcomeOmit<ExtArgs> | null
    /**
     * The data used to create many MatchOutcomes.
     */
    data: MatchOutcomeCreateManyInput | MatchOutcomeCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchOutcomeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchOutcome update
   */
  export type MatchOutcomeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchOutcome
     */
    select?: MatchOutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchOutcome
     */
    omit?: MatchOutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchOutcomeInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchOutcome.
     */
    data: XOR<MatchOutcomeUpdateInput, MatchOutcomeUncheckedUpdateInput>
    /**
     * Choose, which MatchOutcome to update.
     */
    where: MatchOutcomeWhereUniqueInput
  }

  /**
   * MatchOutcome updateMany
   */
  export type MatchOutcomeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchOutcomes.
     */
    data: XOR<MatchOutcomeUpdateManyMutationInput, MatchOutcomeUncheckedUpdateManyInput>
    /**
     * Filter which MatchOutcomes to update
     */
    where?: MatchOutcomeWhereInput
    /**
     * Limit how many MatchOutcomes to update.
     */
    limit?: number
  }

  /**
   * MatchOutcome updateManyAndReturn
   */
  export type MatchOutcomeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchOutcome
     */
    select?: MatchOutcomeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchOutcome
     */
    omit?: MatchOutcomeOmit<ExtArgs> | null
    /**
     * The data used to update MatchOutcomes.
     */
    data: XOR<MatchOutcomeUpdateManyMutationInput, MatchOutcomeUncheckedUpdateManyInput>
    /**
     * Filter which MatchOutcomes to update
     */
    where?: MatchOutcomeWhereInput
    /**
     * Limit how many MatchOutcomes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchOutcomeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchOutcome upsert
   */
  export type MatchOutcomeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchOutcome
     */
    select?: MatchOutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchOutcome
     */
    omit?: MatchOutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchOutcomeInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchOutcome to update in case it exists.
     */
    where: MatchOutcomeWhereUniqueInput
    /**
     * In case the MatchOutcome found by the `where` argument doesn't exist, create a new MatchOutcome with this data.
     */
    create: XOR<MatchOutcomeCreateInput, MatchOutcomeUncheckedCreateInput>
    /**
     * In case the MatchOutcome was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchOutcomeUpdateInput, MatchOutcomeUncheckedUpdateInput>
  }

  /**
   * MatchOutcome delete
   */
  export type MatchOutcomeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchOutcome
     */
    select?: MatchOutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchOutcome
     */
    omit?: MatchOutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchOutcomeInclude<ExtArgs> | null
    /**
     * Filter which MatchOutcome to delete.
     */
    where: MatchOutcomeWhereUniqueInput
  }

  /**
   * MatchOutcome deleteMany
   */
  export type MatchOutcomeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchOutcomes to delete
     */
    where?: MatchOutcomeWhereInput
    /**
     * Limit how many MatchOutcomes to delete.
     */
    limit?: number
  }

  /**
   * MatchOutcome without action
   */
  export type MatchOutcomeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchOutcome
     */
    select?: MatchOutcomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchOutcome
     */
    omit?: MatchOutcomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchOutcomeInclude<ExtArgs> | null
  }


  /**
   * Model ReputationProfile
   */

  export type AggregateReputationProfile = {
    _count: ReputationProfileCountAggregateOutputType | null
    _avg: ReputationProfileAvgAggregateOutputType | null
    _sum: ReputationProfileSumAggregateOutputType | null
    _min: ReputationProfileMinAggregateOutputType | null
    _max: ReputationProfileMaxAggregateOutputType | null
  }

  export type ReputationProfileAvgAggregateOutputType = {
    responseRate: number | null
    meetingShowRate: number | null
    followThroughRate: number | null
    introQualityScore: number | null
    ecosystemContributionScore: number | null
    complaintCount: number | null
  }

  export type ReputationProfileSumAggregateOutputType = {
    responseRate: number | null
    meetingShowRate: number | null
    followThroughRate: number | null
    introQualityScore: number | null
    ecosystemContributionScore: number | null
    complaintCount: number | null
  }

  export type ReputationProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    responseRate: number | null
    meetingShowRate: number | null
    followThroughRate: number | null
    introQualityScore: number | null
    ecosystemContributionScore: number | null
    complaintCount: number | null
    trustTier: $Enums.TrustTier | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReputationProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    responseRate: number | null
    meetingShowRate: number | null
    followThroughRate: number | null
    introQualityScore: number | null
    ecosystemContributionScore: number | null
    complaintCount: number | null
    trustTier: $Enums.TrustTier | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReputationProfileCountAggregateOutputType = {
    id: number
    userId: number
    responseRate: number
    meetingShowRate: number
    followThroughRate: number
    introQualityScore: number
    ecosystemContributionScore: number
    complaintCount: number
    trustTier: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReputationProfileAvgAggregateInputType = {
    responseRate?: true
    meetingShowRate?: true
    followThroughRate?: true
    introQualityScore?: true
    ecosystemContributionScore?: true
    complaintCount?: true
  }

  export type ReputationProfileSumAggregateInputType = {
    responseRate?: true
    meetingShowRate?: true
    followThroughRate?: true
    introQualityScore?: true
    ecosystemContributionScore?: true
    complaintCount?: true
  }

  export type ReputationProfileMinAggregateInputType = {
    id?: true
    userId?: true
    responseRate?: true
    meetingShowRate?: true
    followThroughRate?: true
    introQualityScore?: true
    ecosystemContributionScore?: true
    complaintCount?: true
    trustTier?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReputationProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    responseRate?: true
    meetingShowRate?: true
    followThroughRate?: true
    introQualityScore?: true
    ecosystemContributionScore?: true
    complaintCount?: true
    trustTier?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReputationProfileCountAggregateInputType = {
    id?: true
    userId?: true
    responseRate?: true
    meetingShowRate?: true
    followThroughRate?: true
    introQualityScore?: true
    ecosystemContributionScore?: true
    complaintCount?: true
    trustTier?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReputationProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReputationProfile to aggregate.
     */
    where?: ReputationProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReputationProfiles to fetch.
     */
    orderBy?: ReputationProfileOrderByWithRelationInput | ReputationProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReputationProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReputationProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReputationProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReputationProfiles
    **/
    _count?: true | ReputationProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReputationProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReputationProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReputationProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReputationProfileMaxAggregateInputType
  }

  export type GetReputationProfileAggregateType<T extends ReputationProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateReputationProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReputationProfile[P]>
      : GetScalarType<T[P], AggregateReputationProfile[P]>
  }




  export type ReputationProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReputationProfileWhereInput
    orderBy?: ReputationProfileOrderByWithAggregationInput | ReputationProfileOrderByWithAggregationInput[]
    by: ReputationProfileScalarFieldEnum[] | ReputationProfileScalarFieldEnum
    having?: ReputationProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReputationProfileCountAggregateInputType | true
    _avg?: ReputationProfileAvgAggregateInputType
    _sum?: ReputationProfileSumAggregateInputType
    _min?: ReputationProfileMinAggregateInputType
    _max?: ReputationProfileMaxAggregateInputType
  }

  export type ReputationProfileGroupByOutputType = {
    id: string
    userId: string
    responseRate: number
    meetingShowRate: number
    followThroughRate: number
    introQualityScore: number
    ecosystemContributionScore: number
    complaintCount: number
    trustTier: $Enums.TrustTier
    createdAt: Date
    updatedAt: Date
    _count: ReputationProfileCountAggregateOutputType | null
    _avg: ReputationProfileAvgAggregateOutputType | null
    _sum: ReputationProfileSumAggregateOutputType | null
    _min: ReputationProfileMinAggregateOutputType | null
    _max: ReputationProfileMaxAggregateOutputType | null
  }

  type GetReputationProfileGroupByPayload<T extends ReputationProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReputationProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReputationProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReputationProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ReputationProfileGroupByOutputType[P]>
        }
      >
    >


  export type ReputationProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    responseRate?: boolean
    meetingShowRate?: boolean
    followThroughRate?: boolean
    introQualityScore?: boolean
    ecosystemContributionScore?: boolean
    complaintCount?: boolean
    trustTier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reputationProfile"]>

  export type ReputationProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    responseRate?: boolean
    meetingShowRate?: boolean
    followThroughRate?: boolean
    introQualityScore?: boolean
    ecosystemContributionScore?: boolean
    complaintCount?: boolean
    trustTier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reputationProfile"]>

  export type ReputationProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    responseRate?: boolean
    meetingShowRate?: boolean
    followThroughRate?: boolean
    introQualityScore?: boolean
    ecosystemContributionScore?: boolean
    complaintCount?: boolean
    trustTier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reputationProfile"]>

  export type ReputationProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    responseRate?: boolean
    meetingShowRate?: boolean
    followThroughRate?: boolean
    introQualityScore?: boolean
    ecosystemContributionScore?: boolean
    complaintCount?: boolean
    trustTier?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReputationProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "responseRate" | "meetingShowRate" | "followThroughRate" | "introQualityScore" | "ecosystemContributionScore" | "complaintCount" | "trustTier" | "createdAt" | "updatedAt", ExtArgs["result"]["reputationProfile"]>
  export type ReputationProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReputationProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReputationProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReputationProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReputationProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      responseRate: number
      meetingShowRate: number
      followThroughRate: number
      introQualityScore: number
      ecosystemContributionScore: number
      complaintCount: number
      trustTier: $Enums.TrustTier
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reputationProfile"]>
    composites: {}
  }

  type ReputationProfileGetPayload<S extends boolean | null | undefined | ReputationProfileDefaultArgs> = $Result.GetResult<Prisma.$ReputationProfilePayload, S>

  type ReputationProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReputationProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReputationProfileCountAggregateInputType | true
    }

  export interface ReputationProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReputationProfile'], meta: { name: 'ReputationProfile' } }
    /**
     * Find zero or one ReputationProfile that matches the filter.
     * @param {ReputationProfileFindUniqueArgs} args - Arguments to find a ReputationProfile
     * @example
     * // Get one ReputationProfile
     * const reputationProfile = await prisma.reputationProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReputationProfileFindUniqueArgs>(args: SelectSubset<T, ReputationProfileFindUniqueArgs<ExtArgs>>): Prisma__ReputationProfileClient<$Result.GetResult<Prisma.$ReputationProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReputationProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReputationProfileFindUniqueOrThrowArgs} args - Arguments to find a ReputationProfile
     * @example
     * // Get one ReputationProfile
     * const reputationProfile = await prisma.reputationProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReputationProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ReputationProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReputationProfileClient<$Result.GetResult<Prisma.$ReputationProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReputationProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationProfileFindFirstArgs} args - Arguments to find a ReputationProfile
     * @example
     * // Get one ReputationProfile
     * const reputationProfile = await prisma.reputationProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReputationProfileFindFirstArgs>(args?: SelectSubset<T, ReputationProfileFindFirstArgs<ExtArgs>>): Prisma__ReputationProfileClient<$Result.GetResult<Prisma.$ReputationProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReputationProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationProfileFindFirstOrThrowArgs} args - Arguments to find a ReputationProfile
     * @example
     * // Get one ReputationProfile
     * const reputationProfile = await prisma.reputationProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReputationProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ReputationProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReputationProfileClient<$Result.GetResult<Prisma.$ReputationProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReputationProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReputationProfiles
     * const reputationProfiles = await prisma.reputationProfile.findMany()
     * 
     * // Get first 10 ReputationProfiles
     * const reputationProfiles = await prisma.reputationProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reputationProfileWithIdOnly = await prisma.reputationProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReputationProfileFindManyArgs>(args?: SelectSubset<T, ReputationProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReputationProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReputationProfile.
     * @param {ReputationProfileCreateArgs} args - Arguments to create a ReputationProfile.
     * @example
     * // Create one ReputationProfile
     * const ReputationProfile = await prisma.reputationProfile.create({
     *   data: {
     *     // ... data to create a ReputationProfile
     *   }
     * })
     * 
     */
    create<T extends ReputationProfileCreateArgs>(args: SelectSubset<T, ReputationProfileCreateArgs<ExtArgs>>): Prisma__ReputationProfileClient<$Result.GetResult<Prisma.$ReputationProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReputationProfiles.
     * @param {ReputationProfileCreateManyArgs} args - Arguments to create many ReputationProfiles.
     * @example
     * // Create many ReputationProfiles
     * const reputationProfile = await prisma.reputationProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReputationProfileCreateManyArgs>(args?: SelectSubset<T, ReputationProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReputationProfiles and returns the data saved in the database.
     * @param {ReputationProfileCreateManyAndReturnArgs} args - Arguments to create many ReputationProfiles.
     * @example
     * // Create many ReputationProfiles
     * const reputationProfile = await prisma.reputationProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReputationProfiles and only return the `id`
     * const reputationProfileWithIdOnly = await prisma.reputationProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReputationProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ReputationProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReputationProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReputationProfile.
     * @param {ReputationProfileDeleteArgs} args - Arguments to delete one ReputationProfile.
     * @example
     * // Delete one ReputationProfile
     * const ReputationProfile = await prisma.reputationProfile.delete({
     *   where: {
     *     // ... filter to delete one ReputationProfile
     *   }
     * })
     * 
     */
    delete<T extends ReputationProfileDeleteArgs>(args: SelectSubset<T, ReputationProfileDeleteArgs<ExtArgs>>): Prisma__ReputationProfileClient<$Result.GetResult<Prisma.$ReputationProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReputationProfile.
     * @param {ReputationProfileUpdateArgs} args - Arguments to update one ReputationProfile.
     * @example
     * // Update one ReputationProfile
     * const reputationProfile = await prisma.reputationProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReputationProfileUpdateArgs>(args: SelectSubset<T, ReputationProfileUpdateArgs<ExtArgs>>): Prisma__ReputationProfileClient<$Result.GetResult<Prisma.$ReputationProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReputationProfiles.
     * @param {ReputationProfileDeleteManyArgs} args - Arguments to filter ReputationProfiles to delete.
     * @example
     * // Delete a few ReputationProfiles
     * const { count } = await prisma.reputationProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReputationProfileDeleteManyArgs>(args?: SelectSubset<T, ReputationProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReputationProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReputationProfiles
     * const reputationProfile = await prisma.reputationProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReputationProfileUpdateManyArgs>(args: SelectSubset<T, ReputationProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReputationProfiles and returns the data updated in the database.
     * @param {ReputationProfileUpdateManyAndReturnArgs} args - Arguments to update many ReputationProfiles.
     * @example
     * // Update many ReputationProfiles
     * const reputationProfile = await prisma.reputationProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReputationProfiles and only return the `id`
     * const reputationProfileWithIdOnly = await prisma.reputationProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReputationProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ReputationProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReputationProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReputationProfile.
     * @param {ReputationProfileUpsertArgs} args - Arguments to update or create a ReputationProfile.
     * @example
     * // Update or create a ReputationProfile
     * const reputationProfile = await prisma.reputationProfile.upsert({
     *   create: {
     *     // ... data to create a ReputationProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReputationProfile we want to update
     *   }
     * })
     */
    upsert<T extends ReputationProfileUpsertArgs>(args: SelectSubset<T, ReputationProfileUpsertArgs<ExtArgs>>): Prisma__ReputationProfileClient<$Result.GetResult<Prisma.$ReputationProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReputationProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationProfileCountArgs} args - Arguments to filter ReputationProfiles to count.
     * @example
     * // Count the number of ReputationProfiles
     * const count = await prisma.reputationProfile.count({
     *   where: {
     *     // ... the filter for the ReputationProfiles we want to count
     *   }
     * })
    **/
    count<T extends ReputationProfileCountArgs>(
      args?: Subset<T, ReputationProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReputationProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReputationProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReputationProfileAggregateArgs>(args: Subset<T, ReputationProfileAggregateArgs>): Prisma.PrismaPromise<GetReputationProfileAggregateType<T>>

    /**
     * Group by ReputationProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReputationProfileGroupByArgs} args - Group by arguments.
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
      T extends ReputationProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReputationProfileGroupByArgs['orderBy'] }
        : { orderBy?: ReputationProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReputationProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReputationProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReputationProfile model
   */
  readonly fields: ReputationProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReputationProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReputationProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReputationProfile model
   */
  interface ReputationProfileFieldRefs {
    readonly id: FieldRef<"ReputationProfile", 'String'>
    readonly userId: FieldRef<"ReputationProfile", 'String'>
    readonly responseRate: FieldRef<"ReputationProfile", 'Float'>
    readonly meetingShowRate: FieldRef<"ReputationProfile", 'Float'>
    readonly followThroughRate: FieldRef<"ReputationProfile", 'Float'>
    readonly introQualityScore: FieldRef<"ReputationProfile", 'Float'>
    readonly ecosystemContributionScore: FieldRef<"ReputationProfile", 'Float'>
    readonly complaintCount: FieldRef<"ReputationProfile", 'Int'>
    readonly trustTier: FieldRef<"ReputationProfile", 'TrustTier'>
    readonly createdAt: FieldRef<"ReputationProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"ReputationProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReputationProfile findUnique
   */
  export type ReputationProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationProfile
     */
    select?: ReputationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReputationProfile
     */
    omit?: ReputationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReputationProfileInclude<ExtArgs> | null
    /**
     * Filter, which ReputationProfile to fetch.
     */
    where: ReputationProfileWhereUniqueInput
  }

  /**
   * ReputationProfile findUniqueOrThrow
   */
  export type ReputationProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationProfile
     */
    select?: ReputationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReputationProfile
     */
    omit?: ReputationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReputationProfileInclude<ExtArgs> | null
    /**
     * Filter, which ReputationProfile to fetch.
     */
    where: ReputationProfileWhereUniqueInput
  }

  /**
   * ReputationProfile findFirst
   */
  export type ReputationProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationProfile
     */
    select?: ReputationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReputationProfile
     */
    omit?: ReputationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReputationProfileInclude<ExtArgs> | null
    /**
     * Filter, which ReputationProfile to fetch.
     */
    where?: ReputationProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReputationProfiles to fetch.
     */
    orderBy?: ReputationProfileOrderByWithRelationInput | ReputationProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReputationProfiles.
     */
    cursor?: ReputationProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReputationProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReputationProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReputationProfiles.
     */
    distinct?: ReputationProfileScalarFieldEnum | ReputationProfileScalarFieldEnum[]
  }

  /**
   * ReputationProfile findFirstOrThrow
   */
  export type ReputationProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationProfile
     */
    select?: ReputationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReputationProfile
     */
    omit?: ReputationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReputationProfileInclude<ExtArgs> | null
    /**
     * Filter, which ReputationProfile to fetch.
     */
    where?: ReputationProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReputationProfiles to fetch.
     */
    orderBy?: ReputationProfileOrderByWithRelationInput | ReputationProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReputationProfiles.
     */
    cursor?: ReputationProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReputationProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReputationProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReputationProfiles.
     */
    distinct?: ReputationProfileScalarFieldEnum | ReputationProfileScalarFieldEnum[]
  }

  /**
   * ReputationProfile findMany
   */
  export type ReputationProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationProfile
     */
    select?: ReputationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReputationProfile
     */
    omit?: ReputationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReputationProfileInclude<ExtArgs> | null
    /**
     * Filter, which ReputationProfiles to fetch.
     */
    where?: ReputationProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReputationProfiles to fetch.
     */
    orderBy?: ReputationProfileOrderByWithRelationInput | ReputationProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReputationProfiles.
     */
    cursor?: ReputationProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReputationProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReputationProfiles.
     */
    skip?: number
    distinct?: ReputationProfileScalarFieldEnum | ReputationProfileScalarFieldEnum[]
  }

  /**
   * ReputationProfile create
   */
  export type ReputationProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationProfile
     */
    select?: ReputationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReputationProfile
     */
    omit?: ReputationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReputationProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a ReputationProfile.
     */
    data: XOR<ReputationProfileCreateInput, ReputationProfileUncheckedCreateInput>
  }

  /**
   * ReputationProfile createMany
   */
  export type ReputationProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReputationProfiles.
     */
    data: ReputationProfileCreateManyInput | ReputationProfileCreateManyInput[]
  }

  /**
   * ReputationProfile createManyAndReturn
   */
  export type ReputationProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationProfile
     */
    select?: ReputationProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReputationProfile
     */
    omit?: ReputationProfileOmit<ExtArgs> | null
    /**
     * The data used to create many ReputationProfiles.
     */
    data: ReputationProfileCreateManyInput | ReputationProfileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReputationProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReputationProfile update
   */
  export type ReputationProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationProfile
     */
    select?: ReputationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReputationProfile
     */
    omit?: ReputationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReputationProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a ReputationProfile.
     */
    data: XOR<ReputationProfileUpdateInput, ReputationProfileUncheckedUpdateInput>
    /**
     * Choose, which ReputationProfile to update.
     */
    where: ReputationProfileWhereUniqueInput
  }

  /**
   * ReputationProfile updateMany
   */
  export type ReputationProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReputationProfiles.
     */
    data: XOR<ReputationProfileUpdateManyMutationInput, ReputationProfileUncheckedUpdateManyInput>
    /**
     * Filter which ReputationProfiles to update
     */
    where?: ReputationProfileWhereInput
    /**
     * Limit how many ReputationProfiles to update.
     */
    limit?: number
  }

  /**
   * ReputationProfile updateManyAndReturn
   */
  export type ReputationProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationProfile
     */
    select?: ReputationProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReputationProfile
     */
    omit?: ReputationProfileOmit<ExtArgs> | null
    /**
     * The data used to update ReputationProfiles.
     */
    data: XOR<ReputationProfileUpdateManyMutationInput, ReputationProfileUncheckedUpdateManyInput>
    /**
     * Filter which ReputationProfiles to update
     */
    where?: ReputationProfileWhereInput
    /**
     * Limit how many ReputationProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReputationProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReputationProfile upsert
   */
  export type ReputationProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationProfile
     */
    select?: ReputationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReputationProfile
     */
    omit?: ReputationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReputationProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the ReputationProfile to update in case it exists.
     */
    where: ReputationProfileWhereUniqueInput
    /**
     * In case the ReputationProfile found by the `where` argument doesn't exist, create a new ReputationProfile with this data.
     */
    create: XOR<ReputationProfileCreateInput, ReputationProfileUncheckedCreateInput>
    /**
     * In case the ReputationProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReputationProfileUpdateInput, ReputationProfileUncheckedUpdateInput>
  }

  /**
   * ReputationProfile delete
   */
  export type ReputationProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationProfile
     */
    select?: ReputationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReputationProfile
     */
    omit?: ReputationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReputationProfileInclude<ExtArgs> | null
    /**
     * Filter which ReputationProfile to delete.
     */
    where: ReputationProfileWhereUniqueInput
  }

  /**
   * ReputationProfile deleteMany
   */
  export type ReputationProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReputationProfiles to delete
     */
    where?: ReputationProfileWhereInput
    /**
     * Limit how many ReputationProfiles to delete.
     */
    limit?: number
  }

  /**
   * ReputationProfile without action
   */
  export type ReputationProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReputationProfile
     */
    select?: ReputationProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReputationProfile
     */
    omit?: ReputationProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReputationProfileInclude<ExtArgs> | null
  }


  /**
   * Model RevealAuditLog
   */

  export type AggregateRevealAuditLog = {
    _count: RevealAuditLogCountAggregateOutputType | null
    _min: RevealAuditLogMinAggregateOutputType | null
    _max: RevealAuditLogMaxAggregateOutputType | null
  }

  export type RevealAuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    matchId: string | null
    action: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type RevealAuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    matchId: string | null
    action: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type RevealAuditLogCountAggregateOutputType = {
    id: number
    userId: number
    matchId: number
    action: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type RevealAuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    matchId?: true
    action?: true
    metadata?: true
    createdAt?: true
  }

  export type RevealAuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    matchId?: true
    action?: true
    metadata?: true
    createdAt?: true
  }

  export type RevealAuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    matchId?: true
    action?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type RevealAuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevealAuditLog to aggregate.
     */
    where?: RevealAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevealAuditLogs to fetch.
     */
    orderBy?: RevealAuditLogOrderByWithRelationInput | RevealAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RevealAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevealAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevealAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RevealAuditLogs
    **/
    _count?: true | RevealAuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevealAuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevealAuditLogMaxAggregateInputType
  }

  export type GetRevealAuditLogAggregateType<T extends RevealAuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateRevealAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevealAuditLog[P]>
      : GetScalarType<T[P], AggregateRevealAuditLog[P]>
  }




  export type RevealAuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevealAuditLogWhereInput
    orderBy?: RevealAuditLogOrderByWithAggregationInput | RevealAuditLogOrderByWithAggregationInput[]
    by: RevealAuditLogScalarFieldEnum[] | RevealAuditLogScalarFieldEnum
    having?: RevealAuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevealAuditLogCountAggregateInputType | true
    _min?: RevealAuditLogMinAggregateInputType
    _max?: RevealAuditLogMaxAggregateInputType
  }

  export type RevealAuditLogGroupByOutputType = {
    id: string
    userId: string
    matchId: string
    action: string
    metadata: string | null
    createdAt: Date
    _count: RevealAuditLogCountAggregateOutputType | null
    _min: RevealAuditLogMinAggregateOutputType | null
    _max: RevealAuditLogMaxAggregateOutputType | null
  }

  type GetRevealAuditLogGroupByPayload<T extends RevealAuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevealAuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevealAuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevealAuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], RevealAuditLogGroupByOutputType[P]>
        }
      >
    >


  export type RevealAuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchId?: boolean
    action?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revealAuditLog"]>

  export type RevealAuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchId?: boolean
    action?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revealAuditLog"]>

  export type RevealAuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    matchId?: boolean
    action?: boolean
    metadata?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revealAuditLog"]>

  export type RevealAuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    matchId?: boolean
    action?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type RevealAuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "matchId" | "action" | "metadata" | "createdAt", ExtArgs["result"]["revealAuditLog"]>
  export type RevealAuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RevealAuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RevealAuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RevealAuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RevealAuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      matchId: string
      action: string
      metadata: string | null
      createdAt: Date
    }, ExtArgs["result"]["revealAuditLog"]>
    composites: {}
  }

  type RevealAuditLogGetPayload<S extends boolean | null | undefined | RevealAuditLogDefaultArgs> = $Result.GetResult<Prisma.$RevealAuditLogPayload, S>

  type RevealAuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RevealAuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RevealAuditLogCountAggregateInputType | true
    }

  export interface RevealAuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RevealAuditLog'], meta: { name: 'RevealAuditLog' } }
    /**
     * Find zero or one RevealAuditLog that matches the filter.
     * @param {RevealAuditLogFindUniqueArgs} args - Arguments to find a RevealAuditLog
     * @example
     * // Get one RevealAuditLog
     * const revealAuditLog = await prisma.revealAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RevealAuditLogFindUniqueArgs>(args: SelectSubset<T, RevealAuditLogFindUniqueArgs<ExtArgs>>): Prisma__RevealAuditLogClient<$Result.GetResult<Prisma.$RevealAuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RevealAuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RevealAuditLogFindUniqueOrThrowArgs} args - Arguments to find a RevealAuditLog
     * @example
     * // Get one RevealAuditLog
     * const revealAuditLog = await prisma.revealAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RevealAuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, RevealAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RevealAuditLogClient<$Result.GetResult<Prisma.$RevealAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevealAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevealAuditLogFindFirstArgs} args - Arguments to find a RevealAuditLog
     * @example
     * // Get one RevealAuditLog
     * const revealAuditLog = await prisma.revealAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RevealAuditLogFindFirstArgs>(args?: SelectSubset<T, RevealAuditLogFindFirstArgs<ExtArgs>>): Prisma__RevealAuditLogClient<$Result.GetResult<Prisma.$RevealAuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RevealAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevealAuditLogFindFirstOrThrowArgs} args - Arguments to find a RevealAuditLog
     * @example
     * // Get one RevealAuditLog
     * const revealAuditLog = await prisma.revealAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RevealAuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, RevealAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__RevealAuditLogClient<$Result.GetResult<Prisma.$RevealAuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RevealAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevealAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RevealAuditLogs
     * const revealAuditLogs = await prisma.revealAuditLog.findMany()
     * 
     * // Get first 10 RevealAuditLogs
     * const revealAuditLogs = await prisma.revealAuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const revealAuditLogWithIdOnly = await prisma.revealAuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RevealAuditLogFindManyArgs>(args?: SelectSubset<T, RevealAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevealAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RevealAuditLog.
     * @param {RevealAuditLogCreateArgs} args - Arguments to create a RevealAuditLog.
     * @example
     * // Create one RevealAuditLog
     * const RevealAuditLog = await prisma.revealAuditLog.create({
     *   data: {
     *     // ... data to create a RevealAuditLog
     *   }
     * })
     * 
     */
    create<T extends RevealAuditLogCreateArgs>(args: SelectSubset<T, RevealAuditLogCreateArgs<ExtArgs>>): Prisma__RevealAuditLogClient<$Result.GetResult<Prisma.$RevealAuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RevealAuditLogs.
     * @param {RevealAuditLogCreateManyArgs} args - Arguments to create many RevealAuditLogs.
     * @example
     * // Create many RevealAuditLogs
     * const revealAuditLog = await prisma.revealAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RevealAuditLogCreateManyArgs>(args?: SelectSubset<T, RevealAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RevealAuditLogs and returns the data saved in the database.
     * @param {RevealAuditLogCreateManyAndReturnArgs} args - Arguments to create many RevealAuditLogs.
     * @example
     * // Create many RevealAuditLogs
     * const revealAuditLog = await prisma.revealAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RevealAuditLogs and only return the `id`
     * const revealAuditLogWithIdOnly = await prisma.revealAuditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RevealAuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, RevealAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevealAuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RevealAuditLog.
     * @param {RevealAuditLogDeleteArgs} args - Arguments to delete one RevealAuditLog.
     * @example
     * // Delete one RevealAuditLog
     * const RevealAuditLog = await prisma.revealAuditLog.delete({
     *   where: {
     *     // ... filter to delete one RevealAuditLog
     *   }
     * })
     * 
     */
    delete<T extends RevealAuditLogDeleteArgs>(args: SelectSubset<T, RevealAuditLogDeleteArgs<ExtArgs>>): Prisma__RevealAuditLogClient<$Result.GetResult<Prisma.$RevealAuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RevealAuditLog.
     * @param {RevealAuditLogUpdateArgs} args - Arguments to update one RevealAuditLog.
     * @example
     * // Update one RevealAuditLog
     * const revealAuditLog = await prisma.revealAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RevealAuditLogUpdateArgs>(args: SelectSubset<T, RevealAuditLogUpdateArgs<ExtArgs>>): Prisma__RevealAuditLogClient<$Result.GetResult<Prisma.$RevealAuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RevealAuditLogs.
     * @param {RevealAuditLogDeleteManyArgs} args - Arguments to filter RevealAuditLogs to delete.
     * @example
     * // Delete a few RevealAuditLogs
     * const { count } = await prisma.revealAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RevealAuditLogDeleteManyArgs>(args?: SelectSubset<T, RevealAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevealAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevealAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RevealAuditLogs
     * const revealAuditLog = await prisma.revealAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RevealAuditLogUpdateManyArgs>(args: SelectSubset<T, RevealAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RevealAuditLogs and returns the data updated in the database.
     * @param {RevealAuditLogUpdateManyAndReturnArgs} args - Arguments to update many RevealAuditLogs.
     * @example
     * // Update many RevealAuditLogs
     * const revealAuditLog = await prisma.revealAuditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RevealAuditLogs and only return the `id`
     * const revealAuditLogWithIdOnly = await prisma.revealAuditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RevealAuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, RevealAuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevealAuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RevealAuditLog.
     * @param {RevealAuditLogUpsertArgs} args - Arguments to update or create a RevealAuditLog.
     * @example
     * // Update or create a RevealAuditLog
     * const revealAuditLog = await prisma.revealAuditLog.upsert({
     *   create: {
     *     // ... data to create a RevealAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RevealAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends RevealAuditLogUpsertArgs>(args: SelectSubset<T, RevealAuditLogUpsertArgs<ExtArgs>>): Prisma__RevealAuditLogClient<$Result.GetResult<Prisma.$RevealAuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RevealAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevealAuditLogCountArgs} args - Arguments to filter RevealAuditLogs to count.
     * @example
     * // Count the number of RevealAuditLogs
     * const count = await prisma.revealAuditLog.count({
     *   where: {
     *     // ... the filter for the RevealAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends RevealAuditLogCountArgs>(
      args?: Subset<T, RevealAuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevealAuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RevealAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevealAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RevealAuditLogAggregateArgs>(args: Subset<T, RevealAuditLogAggregateArgs>): Prisma.PrismaPromise<GetRevealAuditLogAggregateType<T>>

    /**
     * Group by RevealAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevealAuditLogGroupByArgs} args - Group by arguments.
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
      T extends RevealAuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RevealAuditLogGroupByArgs['orderBy'] }
        : { orderBy?: RevealAuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RevealAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevealAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RevealAuditLog model
   */
  readonly fields: RevealAuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RevealAuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RevealAuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RevealAuditLog model
   */
  interface RevealAuditLogFieldRefs {
    readonly id: FieldRef<"RevealAuditLog", 'String'>
    readonly userId: FieldRef<"RevealAuditLog", 'String'>
    readonly matchId: FieldRef<"RevealAuditLog", 'String'>
    readonly action: FieldRef<"RevealAuditLog", 'String'>
    readonly metadata: FieldRef<"RevealAuditLog", 'String'>
    readonly createdAt: FieldRef<"RevealAuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RevealAuditLog findUnique
   */
  export type RevealAuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevealAuditLog
     */
    select?: RevealAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevealAuditLog
     */
    omit?: RevealAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevealAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which RevealAuditLog to fetch.
     */
    where: RevealAuditLogWhereUniqueInput
  }

  /**
   * RevealAuditLog findUniqueOrThrow
   */
  export type RevealAuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevealAuditLog
     */
    select?: RevealAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevealAuditLog
     */
    omit?: RevealAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevealAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which RevealAuditLog to fetch.
     */
    where: RevealAuditLogWhereUniqueInput
  }

  /**
   * RevealAuditLog findFirst
   */
  export type RevealAuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevealAuditLog
     */
    select?: RevealAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevealAuditLog
     */
    omit?: RevealAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevealAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which RevealAuditLog to fetch.
     */
    where?: RevealAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevealAuditLogs to fetch.
     */
    orderBy?: RevealAuditLogOrderByWithRelationInput | RevealAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevealAuditLogs.
     */
    cursor?: RevealAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevealAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevealAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevealAuditLogs.
     */
    distinct?: RevealAuditLogScalarFieldEnum | RevealAuditLogScalarFieldEnum[]
  }

  /**
   * RevealAuditLog findFirstOrThrow
   */
  export type RevealAuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevealAuditLog
     */
    select?: RevealAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevealAuditLog
     */
    omit?: RevealAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevealAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which RevealAuditLog to fetch.
     */
    where?: RevealAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevealAuditLogs to fetch.
     */
    orderBy?: RevealAuditLogOrderByWithRelationInput | RevealAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RevealAuditLogs.
     */
    cursor?: RevealAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevealAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevealAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RevealAuditLogs.
     */
    distinct?: RevealAuditLogScalarFieldEnum | RevealAuditLogScalarFieldEnum[]
  }

  /**
   * RevealAuditLog findMany
   */
  export type RevealAuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevealAuditLog
     */
    select?: RevealAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevealAuditLog
     */
    omit?: RevealAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevealAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which RevealAuditLogs to fetch.
     */
    where?: RevealAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RevealAuditLogs to fetch.
     */
    orderBy?: RevealAuditLogOrderByWithRelationInput | RevealAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RevealAuditLogs.
     */
    cursor?: RevealAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RevealAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RevealAuditLogs.
     */
    skip?: number
    distinct?: RevealAuditLogScalarFieldEnum | RevealAuditLogScalarFieldEnum[]
  }

  /**
   * RevealAuditLog create
   */
  export type RevealAuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevealAuditLog
     */
    select?: RevealAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevealAuditLog
     */
    omit?: RevealAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevealAuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a RevealAuditLog.
     */
    data: XOR<RevealAuditLogCreateInput, RevealAuditLogUncheckedCreateInput>
  }

  /**
   * RevealAuditLog createMany
   */
  export type RevealAuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RevealAuditLogs.
     */
    data: RevealAuditLogCreateManyInput | RevealAuditLogCreateManyInput[]
  }

  /**
   * RevealAuditLog createManyAndReturn
   */
  export type RevealAuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevealAuditLog
     */
    select?: RevealAuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RevealAuditLog
     */
    omit?: RevealAuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many RevealAuditLogs.
     */
    data: RevealAuditLogCreateManyInput | RevealAuditLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevealAuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RevealAuditLog update
   */
  export type RevealAuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevealAuditLog
     */
    select?: RevealAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevealAuditLog
     */
    omit?: RevealAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevealAuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a RevealAuditLog.
     */
    data: XOR<RevealAuditLogUpdateInput, RevealAuditLogUncheckedUpdateInput>
    /**
     * Choose, which RevealAuditLog to update.
     */
    where: RevealAuditLogWhereUniqueInput
  }

  /**
   * RevealAuditLog updateMany
   */
  export type RevealAuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RevealAuditLogs.
     */
    data: XOR<RevealAuditLogUpdateManyMutationInput, RevealAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which RevealAuditLogs to update
     */
    where?: RevealAuditLogWhereInput
    /**
     * Limit how many RevealAuditLogs to update.
     */
    limit?: number
  }

  /**
   * RevealAuditLog updateManyAndReturn
   */
  export type RevealAuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevealAuditLog
     */
    select?: RevealAuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RevealAuditLog
     */
    omit?: RevealAuditLogOmit<ExtArgs> | null
    /**
     * The data used to update RevealAuditLogs.
     */
    data: XOR<RevealAuditLogUpdateManyMutationInput, RevealAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which RevealAuditLogs to update
     */
    where?: RevealAuditLogWhereInput
    /**
     * Limit how many RevealAuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevealAuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RevealAuditLog upsert
   */
  export type RevealAuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevealAuditLog
     */
    select?: RevealAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevealAuditLog
     */
    omit?: RevealAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevealAuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the RevealAuditLog to update in case it exists.
     */
    where: RevealAuditLogWhereUniqueInput
    /**
     * In case the RevealAuditLog found by the `where` argument doesn't exist, create a new RevealAuditLog with this data.
     */
    create: XOR<RevealAuditLogCreateInput, RevealAuditLogUncheckedCreateInput>
    /**
     * In case the RevealAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RevealAuditLogUpdateInput, RevealAuditLogUncheckedUpdateInput>
  }

  /**
   * RevealAuditLog delete
   */
  export type RevealAuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevealAuditLog
     */
    select?: RevealAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevealAuditLog
     */
    omit?: RevealAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevealAuditLogInclude<ExtArgs> | null
    /**
     * Filter which RevealAuditLog to delete.
     */
    where: RevealAuditLogWhereUniqueInput
  }

  /**
   * RevealAuditLog deleteMany
   */
  export type RevealAuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RevealAuditLogs to delete
     */
    where?: RevealAuditLogWhereInput
    /**
     * Limit how many RevealAuditLogs to delete.
     */
    limit?: number
  }

  /**
   * RevealAuditLog without action
   */
  export type RevealAuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RevealAuditLog
     */
    select?: RevealAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RevealAuditLog
     */
    omit?: RevealAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevealAuditLogInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    actorId: string | null
    action: string | null
    resourceType: string | null
    resourceId: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    actorId: string | null
    action: string | null
    resourceType: string | null
    resourceId: string | null
    metadata: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    actorId: number
    action: number
    resourceType: number
    resourceId: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    resourceType?: true
    resourceId?: true
    metadata?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    resourceType?: true
    resourceId?: true
    metadata?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    actorId?: true
    action?: true
    resourceType?: true
    resourceId?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    actorId: string
    action: string
    resourceType: string
    resourceId: string | null
    metadata: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    actorId?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    actorId?: boolean
    action?: boolean
    resourceType?: boolean
    resourceId?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "actorId" | "action" | "resourceType" | "resourceId" | "metadata" | "createdAt", ExtArgs["result"]["auditLog"]>

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      actorId: string
      action: string
      resourceType: string
      resourceId: string | null
      metadata: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly resourceType: FieldRef<"AuditLog", 'String'>
    readonly resourceId: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    roleType: 'roleType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const PersonaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    personaType: 'personaType',
    title: 'title',
    organization: 'organization',
    background: 'background',
    goals: 'goals',
    skills: 'skills',
    industries: 'industries',
    stagePreference: 'stagePreference',
    availability: 'availability',
    capacity: 'capacity',
    currentLoad: 'currentLoad',
    riskTolerance: 'riskTolerance',
    missionInterests: 'missionInterests',
    avatarUrl: 'avatarUrl',
    profileJson: 'profileJson',
    isHighValue: 'isHighValue',
    createdAt: 'createdAt'
  };

  export type PersonaScalarFieldEnum = (typeof PersonaScalarFieldEnum)[keyof typeof PersonaScalarFieldEnum]


  export const IntakeProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    stageEvidence: 'stageEvidence',
    commercializationBlocker: 'commercializationBlocker',
    requestedOutcome: 'requestedOutcome',
    technicalMaturity: 'technicalMaturity',
    regulatoryExposure: 'regulatoryExposure',
    fundingStatus: 'fundingStatus',
    customerDiscoveryEvidence: 'customerDiscoveryEvidence',
    introSensitivity: 'introSensitivity',
    geographicRelevance: 'geographicRelevance',
    urgencyReason: 'urgencyReason',
    missingInfoFlags: 'missingInfoFlags',
    readinessScore: 'readinessScore',
    conversationId: 'conversationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IntakeProfileScalarFieldEnum = (typeof IntakeProfileScalarFieldEnum)[keyof typeof IntakeProfileScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    personaId: 'personaId',
    title: 'title',
    state: 'state',
    readinessScore: 'readinessScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    conversationId: 'conversationId',
    role: 'role',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const MatchResultScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    personaId: 'personaId',
    intakeId: 'intakeId',
    score: 'score',
    eligibilityScore: 'eligibilityScore',
    readinessScore: 'readinessScore',
    constraintFitScore: 'constraintFitScore',
    expertiseFitScore: 'expertiseFitScore',
    relationshipFitScore: 'relationshipFitScore',
    timingFitScore: 'timingFitScore',
    outcomeScore: 'outcomeScore',
    reasons: 'reasons',
    risks: 'risks',
    rationale: 'rationale',
    status: 'status',
    revealAuthorizedAt: 'revealAuthorizedAt',
    revealedAt: 'revealedAt',
    revokedAt: 'revokedAt',
    rawJson: 'rawJson',
    conversationId: 'conversationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchResultScalarFieldEnum = (typeof MatchResultScalarFieldEnum)[keyof typeof MatchResultScalarFieldEnum]


  export const MatchOutcomeScalarFieldEnum: {
    id: 'id',
    matchId: 'matchId',
    introRequestedAt: 'introRequestedAt',
    introApprovedAt: 'introApprovedAt',
    meetingOccurredAt: 'meetingOccurredAt',
    followUpOccurred: 'followUpOccurred',
    result: 'result',
    founderRating: 'founderRating',
    expertRating: 'expertRating',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchOutcomeScalarFieldEnum = (typeof MatchOutcomeScalarFieldEnum)[keyof typeof MatchOutcomeScalarFieldEnum]


  export const ReputationProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    responseRate: 'responseRate',
    meetingShowRate: 'meetingShowRate',
    followThroughRate: 'followThroughRate',
    introQualityScore: 'introQualityScore',
    ecosystemContributionScore: 'ecosystemContributionScore',
    complaintCount: 'complaintCount',
    trustTier: 'trustTier',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReputationProfileScalarFieldEnum = (typeof ReputationProfileScalarFieldEnum)[keyof typeof ReputationProfileScalarFieldEnum]


  export const RevealAuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    matchId: 'matchId',
    action: 'action',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type RevealAuditLogScalarFieldEnum = (typeof RevealAuditLogScalarFieldEnum)[keyof typeof RevealAuditLogScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    actorId: 'actorId',
    action: 'action',
    resourceType: 'resourceType',
    resourceId: 'resourceId',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'MatchStatus'
   */
  export type EnumMatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchStatus'>
    


  /**
   * Reference to a field of type 'MatchOutcomeResult'
   */
  export type EnumMatchOutcomeResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MatchOutcomeResult'>
    


  /**
   * Reference to a field of type 'TrustTier'
   */
  export type EnumTrustTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TrustTier'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    roleType?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    conversations?: ConversationListRelationFilter
    matches?: MatchResultListRelationFilter
    reputation?: XOR<ReputationProfileNullableScalarRelationFilter, ReputationProfileWhereInput> | null
    intakeProfiles?: IntakeProfileListRelationFilter
    auditLogs?: RevealAuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    conversations?: ConversationOrderByRelationAggregateInput
    matches?: MatchResultOrderByRelationAggregateInput
    reputation?: ReputationProfileOrderByWithRelationInput
    intakeProfiles?: IntakeProfileOrderByRelationAggregateInput
    auditLogs?: RevealAuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    roleType?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    conversations?: ConversationListRelationFilter
    matches?: MatchResultListRelationFilter
    reputation?: XOR<ReputationProfileNullableScalarRelationFilter, ReputationProfileWhereInput> | null
    intakeProfiles?: IntakeProfileListRelationFilter
    auditLogs?: RevealAuditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    roleType?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type PersonaWhereInput = {
    AND?: PersonaWhereInput | PersonaWhereInput[]
    OR?: PersonaWhereInput[]
    NOT?: PersonaWhereInput | PersonaWhereInput[]
    id?: StringFilter<"Persona"> | string
    name?: StringFilter<"Persona"> | string
    personaType?: StringFilter<"Persona"> | string
    title?: StringNullableFilter<"Persona"> | string | null
    organization?: StringNullableFilter<"Persona"> | string | null
    background?: StringFilter<"Persona"> | string
    goals?: StringFilter<"Persona"> | string
    skills?: StringFilter<"Persona"> | string
    industries?: StringFilter<"Persona"> | string
    stagePreference?: StringNullableFilter<"Persona"> | string | null
    availability?: StringNullableFilter<"Persona"> | string | null
    capacity?: IntFilter<"Persona"> | number
    currentLoad?: IntFilter<"Persona"> | number
    riskTolerance?: StringNullableFilter<"Persona"> | string | null
    missionInterests?: StringNullableFilter<"Persona"> | string | null
    avatarUrl?: StringNullableFilter<"Persona"> | string | null
    profileJson?: StringNullableFilter<"Persona"> | string | null
    isHighValue?: BoolFilter<"Persona"> | boolean
    createdAt?: DateTimeFilter<"Persona"> | Date | string
    conversations?: ConversationListRelationFilter
    matches?: MatchResultListRelationFilter
  }

  export type PersonaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    personaType?: SortOrder
    title?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    background?: SortOrder
    goals?: SortOrder
    skills?: SortOrder
    industries?: SortOrder
    stagePreference?: SortOrderInput | SortOrder
    availability?: SortOrderInput | SortOrder
    capacity?: SortOrder
    currentLoad?: SortOrder
    riskTolerance?: SortOrderInput | SortOrder
    missionInterests?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    profileJson?: SortOrderInput | SortOrder
    isHighValue?: SortOrder
    createdAt?: SortOrder
    conversations?: ConversationOrderByRelationAggregateInput
    matches?: MatchResultOrderByRelationAggregateInput
  }

  export type PersonaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PersonaWhereInput | PersonaWhereInput[]
    OR?: PersonaWhereInput[]
    NOT?: PersonaWhereInput | PersonaWhereInput[]
    name?: StringFilter<"Persona"> | string
    personaType?: StringFilter<"Persona"> | string
    title?: StringNullableFilter<"Persona"> | string | null
    organization?: StringNullableFilter<"Persona"> | string | null
    background?: StringFilter<"Persona"> | string
    goals?: StringFilter<"Persona"> | string
    skills?: StringFilter<"Persona"> | string
    industries?: StringFilter<"Persona"> | string
    stagePreference?: StringNullableFilter<"Persona"> | string | null
    availability?: StringNullableFilter<"Persona"> | string | null
    capacity?: IntFilter<"Persona"> | number
    currentLoad?: IntFilter<"Persona"> | number
    riskTolerance?: StringNullableFilter<"Persona"> | string | null
    missionInterests?: StringNullableFilter<"Persona"> | string | null
    avatarUrl?: StringNullableFilter<"Persona"> | string | null
    profileJson?: StringNullableFilter<"Persona"> | string | null
    isHighValue?: BoolFilter<"Persona"> | boolean
    createdAt?: DateTimeFilter<"Persona"> | Date | string
    conversations?: ConversationListRelationFilter
    matches?: MatchResultListRelationFilter
  }, "id">

  export type PersonaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    personaType?: SortOrder
    title?: SortOrderInput | SortOrder
    organization?: SortOrderInput | SortOrder
    background?: SortOrder
    goals?: SortOrder
    skills?: SortOrder
    industries?: SortOrder
    stagePreference?: SortOrderInput | SortOrder
    availability?: SortOrderInput | SortOrder
    capacity?: SortOrder
    currentLoad?: SortOrder
    riskTolerance?: SortOrderInput | SortOrder
    missionInterests?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    profileJson?: SortOrderInput | SortOrder
    isHighValue?: SortOrder
    createdAt?: SortOrder
    _count?: PersonaCountOrderByAggregateInput
    _avg?: PersonaAvgOrderByAggregateInput
    _max?: PersonaMaxOrderByAggregateInput
    _min?: PersonaMinOrderByAggregateInput
    _sum?: PersonaSumOrderByAggregateInput
  }

  export type PersonaScalarWhereWithAggregatesInput = {
    AND?: PersonaScalarWhereWithAggregatesInput | PersonaScalarWhereWithAggregatesInput[]
    OR?: PersonaScalarWhereWithAggregatesInput[]
    NOT?: PersonaScalarWhereWithAggregatesInput | PersonaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Persona"> | string
    name?: StringWithAggregatesFilter<"Persona"> | string
    personaType?: StringWithAggregatesFilter<"Persona"> | string
    title?: StringNullableWithAggregatesFilter<"Persona"> | string | null
    organization?: StringNullableWithAggregatesFilter<"Persona"> | string | null
    background?: StringWithAggregatesFilter<"Persona"> | string
    goals?: StringWithAggregatesFilter<"Persona"> | string
    skills?: StringWithAggregatesFilter<"Persona"> | string
    industries?: StringWithAggregatesFilter<"Persona"> | string
    stagePreference?: StringNullableWithAggregatesFilter<"Persona"> | string | null
    availability?: StringNullableWithAggregatesFilter<"Persona"> | string | null
    capacity?: IntWithAggregatesFilter<"Persona"> | number
    currentLoad?: IntWithAggregatesFilter<"Persona"> | number
    riskTolerance?: StringNullableWithAggregatesFilter<"Persona"> | string | null
    missionInterests?: StringNullableWithAggregatesFilter<"Persona"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Persona"> | string | null
    profileJson?: StringNullableWithAggregatesFilter<"Persona"> | string | null
    isHighValue?: BoolWithAggregatesFilter<"Persona"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Persona"> | Date | string
  }

  export type IntakeProfileWhereInput = {
    AND?: IntakeProfileWhereInput | IntakeProfileWhereInput[]
    OR?: IntakeProfileWhereInput[]
    NOT?: IntakeProfileWhereInput | IntakeProfileWhereInput[]
    id?: StringFilter<"IntakeProfile"> | string
    userId?: StringFilter<"IntakeProfile"> | string
    stageEvidence?: StringFilter<"IntakeProfile"> | string
    commercializationBlocker?: StringFilter<"IntakeProfile"> | string
    requestedOutcome?: StringFilter<"IntakeProfile"> | string
    technicalMaturity?: FloatFilter<"IntakeProfile"> | number
    regulatoryExposure?: StringFilter<"IntakeProfile"> | string
    fundingStatus?: StringFilter<"IntakeProfile"> | string
    customerDiscoveryEvidence?: StringFilter<"IntakeProfile"> | string
    introSensitivity?: StringFilter<"IntakeProfile"> | string
    geographicRelevance?: StringFilter<"IntakeProfile"> | string
    urgencyReason?: StringFilter<"IntakeProfile"> | string
    missingInfoFlags?: StringFilter<"IntakeProfile"> | string
    readinessScore?: FloatFilter<"IntakeProfile"> | number
    conversationId?: StringNullableFilter<"IntakeProfile"> | string | null
    createdAt?: DateTimeFilter<"IntakeProfile"> | Date | string
    updatedAt?: DateTimeFilter<"IntakeProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type IntakeProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    stageEvidence?: SortOrder
    commercializationBlocker?: SortOrder
    requestedOutcome?: SortOrder
    technicalMaturity?: SortOrder
    regulatoryExposure?: SortOrder
    fundingStatus?: SortOrder
    customerDiscoveryEvidence?: SortOrder
    introSensitivity?: SortOrder
    geographicRelevance?: SortOrder
    urgencyReason?: SortOrder
    missingInfoFlags?: SortOrder
    readinessScore?: SortOrder
    conversationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type IntakeProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    conversationId?: string
    AND?: IntakeProfileWhereInput | IntakeProfileWhereInput[]
    OR?: IntakeProfileWhereInput[]
    NOT?: IntakeProfileWhereInput | IntakeProfileWhereInput[]
    userId?: StringFilter<"IntakeProfile"> | string
    stageEvidence?: StringFilter<"IntakeProfile"> | string
    commercializationBlocker?: StringFilter<"IntakeProfile"> | string
    requestedOutcome?: StringFilter<"IntakeProfile"> | string
    technicalMaturity?: FloatFilter<"IntakeProfile"> | number
    regulatoryExposure?: StringFilter<"IntakeProfile"> | string
    fundingStatus?: StringFilter<"IntakeProfile"> | string
    customerDiscoveryEvidence?: StringFilter<"IntakeProfile"> | string
    introSensitivity?: StringFilter<"IntakeProfile"> | string
    geographicRelevance?: StringFilter<"IntakeProfile"> | string
    urgencyReason?: StringFilter<"IntakeProfile"> | string
    missingInfoFlags?: StringFilter<"IntakeProfile"> | string
    readinessScore?: FloatFilter<"IntakeProfile"> | number
    createdAt?: DateTimeFilter<"IntakeProfile"> | Date | string
    updatedAt?: DateTimeFilter<"IntakeProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "conversationId">

  export type IntakeProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    stageEvidence?: SortOrder
    commercializationBlocker?: SortOrder
    requestedOutcome?: SortOrder
    technicalMaturity?: SortOrder
    regulatoryExposure?: SortOrder
    fundingStatus?: SortOrder
    customerDiscoveryEvidence?: SortOrder
    introSensitivity?: SortOrder
    geographicRelevance?: SortOrder
    urgencyReason?: SortOrder
    missingInfoFlags?: SortOrder
    readinessScore?: SortOrder
    conversationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IntakeProfileCountOrderByAggregateInput
    _avg?: IntakeProfileAvgOrderByAggregateInput
    _max?: IntakeProfileMaxOrderByAggregateInput
    _min?: IntakeProfileMinOrderByAggregateInput
    _sum?: IntakeProfileSumOrderByAggregateInput
  }

  export type IntakeProfileScalarWhereWithAggregatesInput = {
    AND?: IntakeProfileScalarWhereWithAggregatesInput | IntakeProfileScalarWhereWithAggregatesInput[]
    OR?: IntakeProfileScalarWhereWithAggregatesInput[]
    NOT?: IntakeProfileScalarWhereWithAggregatesInput | IntakeProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IntakeProfile"> | string
    userId?: StringWithAggregatesFilter<"IntakeProfile"> | string
    stageEvidence?: StringWithAggregatesFilter<"IntakeProfile"> | string
    commercializationBlocker?: StringWithAggregatesFilter<"IntakeProfile"> | string
    requestedOutcome?: StringWithAggregatesFilter<"IntakeProfile"> | string
    technicalMaturity?: FloatWithAggregatesFilter<"IntakeProfile"> | number
    regulatoryExposure?: StringWithAggregatesFilter<"IntakeProfile"> | string
    fundingStatus?: StringWithAggregatesFilter<"IntakeProfile"> | string
    customerDiscoveryEvidence?: StringWithAggregatesFilter<"IntakeProfile"> | string
    introSensitivity?: StringWithAggregatesFilter<"IntakeProfile"> | string
    geographicRelevance?: StringWithAggregatesFilter<"IntakeProfile"> | string
    urgencyReason?: StringWithAggregatesFilter<"IntakeProfile"> | string
    missingInfoFlags?: StringWithAggregatesFilter<"IntakeProfile"> | string
    readinessScore?: FloatWithAggregatesFilter<"IntakeProfile"> | number
    conversationId?: StringNullableWithAggregatesFilter<"IntakeProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IntakeProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IntakeProfile"> | Date | string
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: StringFilter<"Conversation"> | string
    userId?: StringFilter<"Conversation"> | string
    personaId?: StringNullableFilter<"Conversation"> | string | null
    title?: StringNullableFilter<"Conversation"> | string | null
    state?: StringFilter<"Conversation"> | string
    readinessScore?: FloatNullableFilter<"Conversation"> | number | null
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    persona?: XOR<PersonaNullableScalarRelationFilter, PersonaWhereInput> | null
    messages?: MessageListRelationFilter
    matches?: MatchResultListRelationFilter
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    personaId?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    state?: SortOrder
    readinessScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    persona?: PersonaOrderByWithRelationInput
    messages?: MessageOrderByRelationAggregateInput
    matches?: MatchResultOrderByRelationAggregateInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    userId?: StringFilter<"Conversation"> | string
    personaId?: StringNullableFilter<"Conversation"> | string | null
    title?: StringNullableFilter<"Conversation"> | string | null
    state?: StringFilter<"Conversation"> | string
    readinessScore?: FloatNullableFilter<"Conversation"> | number | null
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    persona?: XOR<PersonaNullableScalarRelationFilter, PersonaWhereInput> | null
    messages?: MessageListRelationFilter
    matches?: MatchResultListRelationFilter
  }, "id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    personaId?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    state?: SortOrder
    readinessScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _avg?: ConversationAvgOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
    _sum?: ConversationSumOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Conversation"> | string
    userId?: StringWithAggregatesFilter<"Conversation"> | string
    personaId?: StringNullableWithAggregatesFilter<"Conversation"> | string | null
    title?: StringNullableWithAggregatesFilter<"Conversation"> | string | null
    state?: StringWithAggregatesFilter<"Conversation"> | string
    readinessScore?: FloatNullableWithAggregatesFilter<"Conversation"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conversation"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    conversationId?: StringFilter<"Message"> | string
    role?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    conversation?: ConversationOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    conversationId?: StringFilter<"Message"> | string
    role?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    conversation?: XOR<ConversationScalarRelationFilter, ConversationWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    conversationId?: StringWithAggregatesFilter<"Message"> | string
    role?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type MatchResultWhereInput = {
    AND?: MatchResultWhereInput | MatchResultWhereInput[]
    OR?: MatchResultWhereInput[]
    NOT?: MatchResultWhereInput | MatchResultWhereInput[]
    id?: StringFilter<"MatchResult"> | string
    userId?: StringFilter<"MatchResult"> | string
    personaId?: StringFilter<"MatchResult"> | string
    intakeId?: StringNullableFilter<"MatchResult"> | string | null
    score?: FloatFilter<"MatchResult"> | number
    eligibilityScore?: FloatFilter<"MatchResult"> | number
    readinessScore?: FloatFilter<"MatchResult"> | number
    constraintFitScore?: FloatFilter<"MatchResult"> | number
    expertiseFitScore?: FloatFilter<"MatchResult"> | number
    relationshipFitScore?: FloatFilter<"MatchResult"> | number
    timingFitScore?: FloatFilter<"MatchResult"> | number
    outcomeScore?: FloatFilter<"MatchResult"> | number
    reasons?: StringNullableFilter<"MatchResult"> | string | null
    risks?: StringNullableFilter<"MatchResult"> | string | null
    rationale?: StringNullableFilter<"MatchResult"> | string | null
    status?: EnumMatchStatusFilter<"MatchResult"> | $Enums.MatchStatus
    revealAuthorizedAt?: DateTimeNullableFilter<"MatchResult"> | Date | string | null
    revealedAt?: DateTimeNullableFilter<"MatchResult"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"MatchResult"> | Date | string | null
    rawJson?: StringNullableFilter<"MatchResult"> | string | null
    conversationId?: StringNullableFilter<"MatchResult"> | string | null
    createdAt?: DateTimeFilter<"MatchResult"> | Date | string
    updatedAt?: DateTimeFilter<"MatchResult"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    persona?: XOR<PersonaNullableScalarRelationFilter, PersonaWhereInput> | null
    conversation?: XOR<ConversationNullableScalarRelationFilter, ConversationWhereInput> | null
    outcome?: XOR<MatchOutcomeNullableScalarRelationFilter, MatchOutcomeWhereInput> | null
  }

  export type MatchResultOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    personaId?: SortOrder
    intakeId?: SortOrderInput | SortOrder
    score?: SortOrder
    eligibilityScore?: SortOrder
    readinessScore?: SortOrder
    constraintFitScore?: SortOrder
    expertiseFitScore?: SortOrder
    relationshipFitScore?: SortOrder
    timingFitScore?: SortOrder
    outcomeScore?: SortOrder
    reasons?: SortOrderInput | SortOrder
    risks?: SortOrderInput | SortOrder
    rationale?: SortOrderInput | SortOrder
    status?: SortOrder
    revealAuthorizedAt?: SortOrderInput | SortOrder
    revealedAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    rawJson?: SortOrderInput | SortOrder
    conversationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    persona?: PersonaOrderByWithRelationInput
    conversation?: ConversationOrderByWithRelationInput
    outcome?: MatchOutcomeOrderByWithRelationInput
  }

  export type MatchResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_personaId?: MatchResultUserIdPersonaIdCompoundUniqueInput
    AND?: MatchResultWhereInput | MatchResultWhereInput[]
    OR?: MatchResultWhereInput[]
    NOT?: MatchResultWhereInput | MatchResultWhereInput[]
    userId?: StringFilter<"MatchResult"> | string
    personaId?: StringFilter<"MatchResult"> | string
    intakeId?: StringNullableFilter<"MatchResult"> | string | null
    score?: FloatFilter<"MatchResult"> | number
    eligibilityScore?: FloatFilter<"MatchResult"> | number
    readinessScore?: FloatFilter<"MatchResult"> | number
    constraintFitScore?: FloatFilter<"MatchResult"> | number
    expertiseFitScore?: FloatFilter<"MatchResult"> | number
    relationshipFitScore?: FloatFilter<"MatchResult"> | number
    timingFitScore?: FloatFilter<"MatchResult"> | number
    outcomeScore?: FloatFilter<"MatchResult"> | number
    reasons?: StringNullableFilter<"MatchResult"> | string | null
    risks?: StringNullableFilter<"MatchResult"> | string | null
    rationale?: StringNullableFilter<"MatchResult"> | string | null
    status?: EnumMatchStatusFilter<"MatchResult"> | $Enums.MatchStatus
    revealAuthorizedAt?: DateTimeNullableFilter<"MatchResult"> | Date | string | null
    revealedAt?: DateTimeNullableFilter<"MatchResult"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"MatchResult"> | Date | string | null
    rawJson?: StringNullableFilter<"MatchResult"> | string | null
    conversationId?: StringNullableFilter<"MatchResult"> | string | null
    createdAt?: DateTimeFilter<"MatchResult"> | Date | string
    updatedAt?: DateTimeFilter<"MatchResult"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    persona?: XOR<PersonaNullableScalarRelationFilter, PersonaWhereInput> | null
    conversation?: XOR<ConversationNullableScalarRelationFilter, ConversationWhereInput> | null
    outcome?: XOR<MatchOutcomeNullableScalarRelationFilter, MatchOutcomeWhereInput> | null
  }, "id" | "userId_personaId">

  export type MatchResultOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    personaId?: SortOrder
    intakeId?: SortOrderInput | SortOrder
    score?: SortOrder
    eligibilityScore?: SortOrder
    readinessScore?: SortOrder
    constraintFitScore?: SortOrder
    expertiseFitScore?: SortOrder
    relationshipFitScore?: SortOrder
    timingFitScore?: SortOrder
    outcomeScore?: SortOrder
    reasons?: SortOrderInput | SortOrder
    risks?: SortOrderInput | SortOrder
    rationale?: SortOrderInput | SortOrder
    status?: SortOrder
    revealAuthorizedAt?: SortOrderInput | SortOrder
    revealedAt?: SortOrderInput | SortOrder
    revokedAt?: SortOrderInput | SortOrder
    rawJson?: SortOrderInput | SortOrder
    conversationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchResultCountOrderByAggregateInput
    _avg?: MatchResultAvgOrderByAggregateInput
    _max?: MatchResultMaxOrderByAggregateInput
    _min?: MatchResultMinOrderByAggregateInput
    _sum?: MatchResultSumOrderByAggregateInput
  }

  export type MatchResultScalarWhereWithAggregatesInput = {
    AND?: MatchResultScalarWhereWithAggregatesInput | MatchResultScalarWhereWithAggregatesInput[]
    OR?: MatchResultScalarWhereWithAggregatesInput[]
    NOT?: MatchResultScalarWhereWithAggregatesInput | MatchResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchResult"> | string
    userId?: StringWithAggregatesFilter<"MatchResult"> | string
    personaId?: StringWithAggregatesFilter<"MatchResult"> | string
    intakeId?: StringNullableWithAggregatesFilter<"MatchResult"> | string | null
    score?: FloatWithAggregatesFilter<"MatchResult"> | number
    eligibilityScore?: FloatWithAggregatesFilter<"MatchResult"> | number
    readinessScore?: FloatWithAggregatesFilter<"MatchResult"> | number
    constraintFitScore?: FloatWithAggregatesFilter<"MatchResult"> | number
    expertiseFitScore?: FloatWithAggregatesFilter<"MatchResult"> | number
    relationshipFitScore?: FloatWithAggregatesFilter<"MatchResult"> | number
    timingFitScore?: FloatWithAggregatesFilter<"MatchResult"> | number
    outcomeScore?: FloatWithAggregatesFilter<"MatchResult"> | number
    reasons?: StringNullableWithAggregatesFilter<"MatchResult"> | string | null
    risks?: StringNullableWithAggregatesFilter<"MatchResult"> | string | null
    rationale?: StringNullableWithAggregatesFilter<"MatchResult"> | string | null
    status?: EnumMatchStatusWithAggregatesFilter<"MatchResult"> | $Enums.MatchStatus
    revealAuthorizedAt?: DateTimeNullableWithAggregatesFilter<"MatchResult"> | Date | string | null
    revealedAt?: DateTimeNullableWithAggregatesFilter<"MatchResult"> | Date | string | null
    revokedAt?: DateTimeNullableWithAggregatesFilter<"MatchResult"> | Date | string | null
    rawJson?: StringNullableWithAggregatesFilter<"MatchResult"> | string | null
    conversationId?: StringNullableWithAggregatesFilter<"MatchResult"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MatchResult"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MatchResult"> | Date | string
  }

  export type MatchOutcomeWhereInput = {
    AND?: MatchOutcomeWhereInput | MatchOutcomeWhereInput[]
    OR?: MatchOutcomeWhereInput[]
    NOT?: MatchOutcomeWhereInput | MatchOutcomeWhereInput[]
    id?: StringFilter<"MatchOutcome"> | string
    matchId?: StringFilter<"MatchOutcome"> | string
    introRequestedAt?: DateTimeNullableFilter<"MatchOutcome"> | Date | string | null
    introApprovedAt?: DateTimeNullableFilter<"MatchOutcome"> | Date | string | null
    meetingOccurredAt?: DateTimeNullableFilter<"MatchOutcome"> | Date | string | null
    followUpOccurred?: BoolFilter<"MatchOutcome"> | boolean
    result?: EnumMatchOutcomeResultFilter<"MatchOutcome"> | $Enums.MatchOutcomeResult
    founderRating?: IntNullableFilter<"MatchOutcome"> | number | null
    expertRating?: IntNullableFilter<"MatchOutcome"> | number | null
    notes?: StringNullableFilter<"MatchOutcome"> | string | null
    createdAt?: DateTimeFilter<"MatchOutcome"> | Date | string
    updatedAt?: DateTimeFilter<"MatchOutcome"> | Date | string
    match?: XOR<MatchResultScalarRelationFilter, MatchResultWhereInput>
  }

  export type MatchOutcomeOrderByWithRelationInput = {
    id?: SortOrder
    matchId?: SortOrder
    introRequestedAt?: SortOrderInput | SortOrder
    introApprovedAt?: SortOrderInput | SortOrder
    meetingOccurredAt?: SortOrderInput | SortOrder
    followUpOccurred?: SortOrder
    result?: SortOrder
    founderRating?: SortOrderInput | SortOrder
    expertRating?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    match?: MatchResultOrderByWithRelationInput
  }

  export type MatchOutcomeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matchId?: string
    AND?: MatchOutcomeWhereInput | MatchOutcomeWhereInput[]
    OR?: MatchOutcomeWhereInput[]
    NOT?: MatchOutcomeWhereInput | MatchOutcomeWhereInput[]
    introRequestedAt?: DateTimeNullableFilter<"MatchOutcome"> | Date | string | null
    introApprovedAt?: DateTimeNullableFilter<"MatchOutcome"> | Date | string | null
    meetingOccurredAt?: DateTimeNullableFilter<"MatchOutcome"> | Date | string | null
    followUpOccurred?: BoolFilter<"MatchOutcome"> | boolean
    result?: EnumMatchOutcomeResultFilter<"MatchOutcome"> | $Enums.MatchOutcomeResult
    founderRating?: IntNullableFilter<"MatchOutcome"> | number | null
    expertRating?: IntNullableFilter<"MatchOutcome"> | number | null
    notes?: StringNullableFilter<"MatchOutcome"> | string | null
    createdAt?: DateTimeFilter<"MatchOutcome"> | Date | string
    updatedAt?: DateTimeFilter<"MatchOutcome"> | Date | string
    match?: XOR<MatchResultScalarRelationFilter, MatchResultWhereInput>
  }, "id" | "matchId">

  export type MatchOutcomeOrderByWithAggregationInput = {
    id?: SortOrder
    matchId?: SortOrder
    introRequestedAt?: SortOrderInput | SortOrder
    introApprovedAt?: SortOrderInput | SortOrder
    meetingOccurredAt?: SortOrderInput | SortOrder
    followUpOccurred?: SortOrder
    result?: SortOrder
    founderRating?: SortOrderInput | SortOrder
    expertRating?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchOutcomeCountOrderByAggregateInput
    _avg?: MatchOutcomeAvgOrderByAggregateInput
    _max?: MatchOutcomeMaxOrderByAggregateInput
    _min?: MatchOutcomeMinOrderByAggregateInput
    _sum?: MatchOutcomeSumOrderByAggregateInput
  }

  export type MatchOutcomeScalarWhereWithAggregatesInput = {
    AND?: MatchOutcomeScalarWhereWithAggregatesInput | MatchOutcomeScalarWhereWithAggregatesInput[]
    OR?: MatchOutcomeScalarWhereWithAggregatesInput[]
    NOT?: MatchOutcomeScalarWhereWithAggregatesInput | MatchOutcomeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchOutcome"> | string
    matchId?: StringWithAggregatesFilter<"MatchOutcome"> | string
    introRequestedAt?: DateTimeNullableWithAggregatesFilter<"MatchOutcome"> | Date | string | null
    introApprovedAt?: DateTimeNullableWithAggregatesFilter<"MatchOutcome"> | Date | string | null
    meetingOccurredAt?: DateTimeNullableWithAggregatesFilter<"MatchOutcome"> | Date | string | null
    followUpOccurred?: BoolWithAggregatesFilter<"MatchOutcome"> | boolean
    result?: EnumMatchOutcomeResultWithAggregatesFilter<"MatchOutcome"> | $Enums.MatchOutcomeResult
    founderRating?: IntNullableWithAggregatesFilter<"MatchOutcome"> | number | null
    expertRating?: IntNullableWithAggregatesFilter<"MatchOutcome"> | number | null
    notes?: StringNullableWithAggregatesFilter<"MatchOutcome"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MatchOutcome"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MatchOutcome"> | Date | string
  }

  export type ReputationProfileWhereInput = {
    AND?: ReputationProfileWhereInput | ReputationProfileWhereInput[]
    OR?: ReputationProfileWhereInput[]
    NOT?: ReputationProfileWhereInput | ReputationProfileWhereInput[]
    id?: StringFilter<"ReputationProfile"> | string
    userId?: StringFilter<"ReputationProfile"> | string
    responseRate?: FloatFilter<"ReputationProfile"> | number
    meetingShowRate?: FloatFilter<"ReputationProfile"> | number
    followThroughRate?: FloatFilter<"ReputationProfile"> | number
    introQualityScore?: FloatFilter<"ReputationProfile"> | number
    ecosystemContributionScore?: FloatFilter<"ReputationProfile"> | number
    complaintCount?: IntFilter<"ReputationProfile"> | number
    trustTier?: EnumTrustTierFilter<"ReputationProfile"> | $Enums.TrustTier
    createdAt?: DateTimeFilter<"ReputationProfile"> | Date | string
    updatedAt?: DateTimeFilter<"ReputationProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReputationProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    responseRate?: SortOrder
    meetingShowRate?: SortOrder
    followThroughRate?: SortOrder
    introQualityScore?: SortOrder
    ecosystemContributionScore?: SortOrder
    complaintCount?: SortOrder
    trustTier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ReputationProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ReputationProfileWhereInput | ReputationProfileWhereInput[]
    OR?: ReputationProfileWhereInput[]
    NOT?: ReputationProfileWhereInput | ReputationProfileWhereInput[]
    responseRate?: FloatFilter<"ReputationProfile"> | number
    meetingShowRate?: FloatFilter<"ReputationProfile"> | number
    followThroughRate?: FloatFilter<"ReputationProfile"> | number
    introQualityScore?: FloatFilter<"ReputationProfile"> | number
    ecosystemContributionScore?: FloatFilter<"ReputationProfile"> | number
    complaintCount?: IntFilter<"ReputationProfile"> | number
    trustTier?: EnumTrustTierFilter<"ReputationProfile"> | $Enums.TrustTier
    createdAt?: DateTimeFilter<"ReputationProfile"> | Date | string
    updatedAt?: DateTimeFilter<"ReputationProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ReputationProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    responseRate?: SortOrder
    meetingShowRate?: SortOrder
    followThroughRate?: SortOrder
    introQualityScore?: SortOrder
    ecosystemContributionScore?: SortOrder
    complaintCount?: SortOrder
    trustTier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReputationProfileCountOrderByAggregateInput
    _avg?: ReputationProfileAvgOrderByAggregateInput
    _max?: ReputationProfileMaxOrderByAggregateInput
    _min?: ReputationProfileMinOrderByAggregateInput
    _sum?: ReputationProfileSumOrderByAggregateInput
  }

  export type ReputationProfileScalarWhereWithAggregatesInput = {
    AND?: ReputationProfileScalarWhereWithAggregatesInput | ReputationProfileScalarWhereWithAggregatesInput[]
    OR?: ReputationProfileScalarWhereWithAggregatesInput[]
    NOT?: ReputationProfileScalarWhereWithAggregatesInput | ReputationProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReputationProfile"> | string
    userId?: StringWithAggregatesFilter<"ReputationProfile"> | string
    responseRate?: FloatWithAggregatesFilter<"ReputationProfile"> | number
    meetingShowRate?: FloatWithAggregatesFilter<"ReputationProfile"> | number
    followThroughRate?: FloatWithAggregatesFilter<"ReputationProfile"> | number
    introQualityScore?: FloatWithAggregatesFilter<"ReputationProfile"> | number
    ecosystemContributionScore?: FloatWithAggregatesFilter<"ReputationProfile"> | number
    complaintCount?: IntWithAggregatesFilter<"ReputationProfile"> | number
    trustTier?: EnumTrustTierWithAggregatesFilter<"ReputationProfile"> | $Enums.TrustTier
    createdAt?: DateTimeWithAggregatesFilter<"ReputationProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReputationProfile"> | Date | string
  }

  export type RevealAuditLogWhereInput = {
    AND?: RevealAuditLogWhereInput | RevealAuditLogWhereInput[]
    OR?: RevealAuditLogWhereInput[]
    NOT?: RevealAuditLogWhereInput | RevealAuditLogWhereInput[]
    id?: StringFilter<"RevealAuditLog"> | string
    userId?: StringFilter<"RevealAuditLog"> | string
    matchId?: StringFilter<"RevealAuditLog"> | string
    action?: StringFilter<"RevealAuditLog"> | string
    metadata?: StringNullableFilter<"RevealAuditLog"> | string | null
    createdAt?: DateTimeFilter<"RevealAuditLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RevealAuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    action?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RevealAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RevealAuditLogWhereInput | RevealAuditLogWhereInput[]
    OR?: RevealAuditLogWhereInput[]
    NOT?: RevealAuditLogWhereInput | RevealAuditLogWhereInput[]
    userId?: StringFilter<"RevealAuditLog"> | string
    matchId?: StringFilter<"RevealAuditLog"> | string
    action?: StringFilter<"RevealAuditLog"> | string
    metadata?: StringNullableFilter<"RevealAuditLog"> | string | null
    createdAt?: DateTimeFilter<"RevealAuditLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RevealAuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    action?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RevealAuditLogCountOrderByAggregateInput
    _max?: RevealAuditLogMaxOrderByAggregateInput
    _min?: RevealAuditLogMinOrderByAggregateInput
  }

  export type RevealAuditLogScalarWhereWithAggregatesInput = {
    AND?: RevealAuditLogScalarWhereWithAggregatesInput | RevealAuditLogScalarWhereWithAggregatesInput[]
    OR?: RevealAuditLogScalarWhereWithAggregatesInput[]
    NOT?: RevealAuditLogScalarWhereWithAggregatesInput | RevealAuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RevealAuditLog"> | string
    userId?: StringWithAggregatesFilter<"RevealAuditLog"> | string
    matchId?: StringWithAggregatesFilter<"RevealAuditLog"> | string
    action?: StringWithAggregatesFilter<"RevealAuditLog"> | string
    metadata?: StringNullableWithAggregatesFilter<"RevealAuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RevealAuditLog"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    actorId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    resourceType?: StringFilter<"AuditLog"> | string
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    actorId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    resourceType?: StringFilter<"AuditLog"> | string
    resourceId?: StringNullableFilter<"AuditLog"> | string | null
    metadata?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    actorId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    resourceType?: StringWithAggregatesFilter<"AuditLog"> | string
    resourceId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    metadata?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    roleType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
    matches?: MatchResultCreateNestedManyWithoutUserInput
    reputation?: ReputationProfileCreateNestedOneWithoutUserInput
    intakeProfiles?: IntakeProfileCreateNestedManyWithoutUserInput
    auditLogs?: RevealAuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    roleType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchResultUncheckedCreateNestedManyWithoutUserInput
    reputation?: ReputationProfileUncheckedCreateNestedOneWithoutUserInput
    intakeProfiles?: IntakeProfileUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: RevealAuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    matches?: MatchResultUpdateManyWithoutUserNestedInput
    reputation?: ReputationProfileUpdateOneWithoutUserNestedInput
    intakeProfiles?: IntakeProfileUpdateManyWithoutUserNestedInput
    auditLogs?: RevealAuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchResultUncheckedUpdateManyWithoutUserNestedInput
    reputation?: ReputationProfileUncheckedUpdateOneWithoutUserNestedInput
    intakeProfiles?: IntakeProfileUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: RevealAuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    roleType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonaCreateInput = {
    id?: string
    name: string
    personaType: string
    title?: string | null
    organization?: string | null
    background: string
    goals: string
    skills: string
    industries: string
    stagePreference?: string | null
    availability?: string | null
    capacity?: number
    currentLoad?: number
    riskTolerance?: string | null
    missionInterests?: string | null
    avatarUrl?: string | null
    profileJson?: string | null
    isHighValue?: boolean
    createdAt?: Date | string
    conversations?: ConversationCreateNestedManyWithoutPersonaInput
    matches?: MatchResultCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUncheckedCreateInput = {
    id?: string
    name: string
    personaType: string
    title?: string | null
    organization?: string | null
    background: string
    goals: string
    skills: string
    industries: string
    stagePreference?: string | null
    availability?: string | null
    capacity?: number
    currentLoad?: number
    riskTolerance?: string | null
    missionInterests?: string | null
    avatarUrl?: string | null
    profileJson?: string | null
    isHighValue?: boolean
    createdAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutPersonaInput
    matches?: MatchResultUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personaType?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    background?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    industries?: StringFieldUpdateOperationsInput | string
    stagePreference?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    riskTolerance?: NullableStringFieldUpdateOperationsInput | string | null
    missionInterests?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileJson?: NullableStringFieldUpdateOperationsInput | string | null
    isHighValue?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUpdateManyWithoutPersonaNestedInput
    matches?: MatchResultUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personaType?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    background?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    industries?: StringFieldUpdateOperationsInput | string
    stagePreference?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    riskTolerance?: NullableStringFieldUpdateOperationsInput | string | null
    missionInterests?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileJson?: NullableStringFieldUpdateOperationsInput | string | null
    isHighValue?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutPersonaNestedInput
    matches?: MatchResultUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaCreateManyInput = {
    id?: string
    name: string
    personaType: string
    title?: string | null
    organization?: string | null
    background: string
    goals: string
    skills: string
    industries: string
    stagePreference?: string | null
    availability?: string | null
    capacity?: number
    currentLoad?: number
    riskTolerance?: string | null
    missionInterests?: string | null
    avatarUrl?: string | null
    profileJson?: string | null
    isHighValue?: boolean
    createdAt?: Date | string
  }

  export type PersonaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personaType?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    background?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    industries?: StringFieldUpdateOperationsInput | string
    stagePreference?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    riskTolerance?: NullableStringFieldUpdateOperationsInput | string | null
    missionInterests?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileJson?: NullableStringFieldUpdateOperationsInput | string | null
    isHighValue?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personaType?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    background?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    industries?: StringFieldUpdateOperationsInput | string
    stagePreference?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    riskTolerance?: NullableStringFieldUpdateOperationsInput | string | null
    missionInterests?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileJson?: NullableStringFieldUpdateOperationsInput | string | null
    isHighValue?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeProfileCreateInput = {
    id?: string
    stageEvidence: string
    commercializationBlocker: string
    requestedOutcome: string
    technicalMaturity: number
    regulatoryExposure: string
    fundingStatus: string
    customerDiscoveryEvidence: string
    introSensitivity: string
    geographicRelevance: string
    urgencyReason: string
    missingInfoFlags: string
    readinessScore: number
    conversationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIntakeProfilesInput
  }

  export type IntakeProfileUncheckedCreateInput = {
    id?: string
    userId: string
    stageEvidence: string
    commercializationBlocker: string
    requestedOutcome: string
    technicalMaturity: number
    regulatoryExposure: string
    fundingStatus: string
    customerDiscoveryEvidence: string
    introSensitivity: string
    geographicRelevance: string
    urgencyReason: string
    missingInfoFlags: string
    readinessScore: number
    conversationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntakeProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageEvidence?: StringFieldUpdateOperationsInput | string
    commercializationBlocker?: StringFieldUpdateOperationsInput | string
    requestedOutcome?: StringFieldUpdateOperationsInput | string
    technicalMaturity?: FloatFieldUpdateOperationsInput | number
    regulatoryExposure?: StringFieldUpdateOperationsInput | string
    fundingStatus?: StringFieldUpdateOperationsInput | string
    customerDiscoveryEvidence?: StringFieldUpdateOperationsInput | string
    introSensitivity?: StringFieldUpdateOperationsInput | string
    geographicRelevance?: StringFieldUpdateOperationsInput | string
    urgencyReason?: StringFieldUpdateOperationsInput | string
    missingInfoFlags?: StringFieldUpdateOperationsInput | string
    readinessScore?: FloatFieldUpdateOperationsInput | number
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIntakeProfilesNestedInput
  }

  export type IntakeProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stageEvidence?: StringFieldUpdateOperationsInput | string
    commercializationBlocker?: StringFieldUpdateOperationsInput | string
    requestedOutcome?: StringFieldUpdateOperationsInput | string
    technicalMaturity?: FloatFieldUpdateOperationsInput | number
    regulatoryExposure?: StringFieldUpdateOperationsInput | string
    fundingStatus?: StringFieldUpdateOperationsInput | string
    customerDiscoveryEvidence?: StringFieldUpdateOperationsInput | string
    introSensitivity?: StringFieldUpdateOperationsInput | string
    geographicRelevance?: StringFieldUpdateOperationsInput | string
    urgencyReason?: StringFieldUpdateOperationsInput | string
    missingInfoFlags?: StringFieldUpdateOperationsInput | string
    readinessScore?: FloatFieldUpdateOperationsInput | number
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeProfileCreateManyInput = {
    id?: string
    userId: string
    stageEvidence: string
    commercializationBlocker: string
    requestedOutcome: string
    technicalMaturity: number
    regulatoryExposure: string
    fundingStatus: string
    customerDiscoveryEvidence: string
    introSensitivity: string
    geographicRelevance: string
    urgencyReason: string
    missingInfoFlags: string
    readinessScore: number
    conversationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntakeProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageEvidence?: StringFieldUpdateOperationsInput | string
    commercializationBlocker?: StringFieldUpdateOperationsInput | string
    requestedOutcome?: StringFieldUpdateOperationsInput | string
    technicalMaturity?: FloatFieldUpdateOperationsInput | number
    regulatoryExposure?: StringFieldUpdateOperationsInput | string
    fundingStatus?: StringFieldUpdateOperationsInput | string
    customerDiscoveryEvidence?: StringFieldUpdateOperationsInput | string
    introSensitivity?: StringFieldUpdateOperationsInput | string
    geographicRelevance?: StringFieldUpdateOperationsInput | string
    urgencyReason?: StringFieldUpdateOperationsInput | string
    missingInfoFlags?: StringFieldUpdateOperationsInput | string
    readinessScore?: FloatFieldUpdateOperationsInput | number
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    stageEvidence?: StringFieldUpdateOperationsInput | string
    commercializationBlocker?: StringFieldUpdateOperationsInput | string
    requestedOutcome?: StringFieldUpdateOperationsInput | string
    technicalMaturity?: FloatFieldUpdateOperationsInput | number
    regulatoryExposure?: StringFieldUpdateOperationsInput | string
    fundingStatus?: StringFieldUpdateOperationsInput | string
    customerDiscoveryEvidence?: StringFieldUpdateOperationsInput | string
    introSensitivity?: StringFieldUpdateOperationsInput | string
    geographicRelevance?: StringFieldUpdateOperationsInput | string
    urgencyReason?: StringFieldUpdateOperationsInput | string
    missingInfoFlags?: StringFieldUpdateOperationsInput | string
    readinessScore?: FloatFieldUpdateOperationsInput | number
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateInput = {
    id?: string
    title?: string | null
    state?: string
    readinessScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConversationsInput
    persona?: PersonaCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
    matches?: MatchResultCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: string
    userId: string
    personaId?: string | null
    title?: string | null
    state?: string
    readinessScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
    matches?: MatchResultUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    readinessScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConversationsNestedInput
    persona?: PersonaUpdateOneWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
    matches?: MatchResultUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    personaId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    readinessScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
    matches?: MatchResultUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationCreateManyInput = {
    id?: string
    userId: string
    personaId?: string | null
    title?: string | null
    state?: string
    readinessScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    readinessScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    personaId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    readinessScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
    conversation: ConversationCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    conversationId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversation?: ConversationUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    conversationId: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    conversationId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultCreateInput = {
    id?: string
    intakeId?: string | null
    score: number
    eligibilityScore?: number
    readinessScore?: number
    constraintFitScore?: number
    expertiseFitScore?: number
    relationshipFitScore?: number
    timingFitScore?: number
    outcomeScore?: number
    reasons?: string | null
    risks?: string | null
    rationale?: string | null
    status?: $Enums.MatchStatus
    revealAuthorizedAt?: Date | string | null
    revealedAt?: Date | string | null
    revokedAt?: Date | string | null
    rawJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMatchesInput
    persona?: PersonaCreateNestedOneWithoutMatchesInput
    conversation?: ConversationCreateNestedOneWithoutMatchesInput
    outcome?: MatchOutcomeCreateNestedOneWithoutMatchInput
  }

  export type MatchResultUncheckedCreateInput = {
    id?: string
    userId: string
    personaId: string
    intakeId?: string | null
    score: number
    eligibilityScore?: number
    readinessScore?: number
    constraintFitScore?: number
    expertiseFitScore?: number
    relationshipFitScore?: number
    timingFitScore?: number
    outcomeScore?: number
    reasons?: string | null
    risks?: string | null
    rationale?: string | null
    status?: $Enums.MatchStatus
    revealAuthorizedAt?: Date | string | null
    revealedAt?: Date | string | null
    revokedAt?: Date | string | null
    rawJson?: string | null
    conversationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outcome?: MatchOutcomeUncheckedCreateNestedOneWithoutMatchInput
  }

  export type MatchResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    intakeId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    eligibilityScore?: FloatFieldUpdateOperationsInput | number
    readinessScore?: FloatFieldUpdateOperationsInput | number
    constraintFitScore?: FloatFieldUpdateOperationsInput | number
    expertiseFitScore?: FloatFieldUpdateOperationsInput | number
    relationshipFitScore?: FloatFieldUpdateOperationsInput | number
    timingFitScore?: FloatFieldUpdateOperationsInput | number
    outcomeScore?: FloatFieldUpdateOperationsInput | number
    reasons?: NullableStringFieldUpdateOperationsInput | string | null
    risks?: NullableStringFieldUpdateOperationsInput | string | null
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    revealAuthorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMatchesNestedInput
    persona?: PersonaUpdateOneWithoutMatchesNestedInput
    conversation?: ConversationUpdateOneWithoutMatchesNestedInput
    outcome?: MatchOutcomeUpdateOneWithoutMatchNestedInput
  }

  export type MatchResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    personaId?: StringFieldUpdateOperationsInput | string
    intakeId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    eligibilityScore?: FloatFieldUpdateOperationsInput | number
    readinessScore?: FloatFieldUpdateOperationsInput | number
    constraintFitScore?: FloatFieldUpdateOperationsInput | number
    expertiseFitScore?: FloatFieldUpdateOperationsInput | number
    relationshipFitScore?: FloatFieldUpdateOperationsInput | number
    timingFitScore?: FloatFieldUpdateOperationsInput | number
    outcomeScore?: FloatFieldUpdateOperationsInput | number
    reasons?: NullableStringFieldUpdateOperationsInput | string | null
    risks?: NullableStringFieldUpdateOperationsInput | string | null
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    revealAuthorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawJson?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: MatchOutcomeUncheckedUpdateOneWithoutMatchNestedInput
  }

  export type MatchResultCreateManyInput = {
    id?: string
    userId: string
    personaId: string
    intakeId?: string | null
    score: number
    eligibilityScore?: number
    readinessScore?: number
    constraintFitScore?: number
    expertiseFitScore?: number
    relationshipFitScore?: number
    timingFitScore?: number
    outcomeScore?: number
    reasons?: string | null
    risks?: string | null
    rationale?: string | null
    status?: $Enums.MatchStatus
    revealAuthorizedAt?: Date | string | null
    revealedAt?: Date | string | null
    revokedAt?: Date | string | null
    rawJson?: string | null
    conversationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    intakeId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    eligibilityScore?: FloatFieldUpdateOperationsInput | number
    readinessScore?: FloatFieldUpdateOperationsInput | number
    constraintFitScore?: FloatFieldUpdateOperationsInput | number
    expertiseFitScore?: FloatFieldUpdateOperationsInput | number
    relationshipFitScore?: FloatFieldUpdateOperationsInput | number
    timingFitScore?: FloatFieldUpdateOperationsInput | number
    outcomeScore?: FloatFieldUpdateOperationsInput | number
    reasons?: NullableStringFieldUpdateOperationsInput | string | null
    risks?: NullableStringFieldUpdateOperationsInput | string | null
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    revealAuthorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    personaId?: StringFieldUpdateOperationsInput | string
    intakeId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    eligibilityScore?: FloatFieldUpdateOperationsInput | number
    readinessScore?: FloatFieldUpdateOperationsInput | number
    constraintFitScore?: FloatFieldUpdateOperationsInput | number
    expertiseFitScore?: FloatFieldUpdateOperationsInput | number
    relationshipFitScore?: FloatFieldUpdateOperationsInput | number
    timingFitScore?: FloatFieldUpdateOperationsInput | number
    outcomeScore?: FloatFieldUpdateOperationsInput | number
    reasons?: NullableStringFieldUpdateOperationsInput | string | null
    risks?: NullableStringFieldUpdateOperationsInput | string | null
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    revealAuthorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawJson?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchOutcomeCreateInput = {
    id?: string
    introRequestedAt?: Date | string | null
    introApprovedAt?: Date | string | null
    meetingOccurredAt?: Date | string | null
    followUpOccurred?: boolean
    result?: $Enums.MatchOutcomeResult
    founderRating?: number | null
    expertRating?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    match: MatchResultCreateNestedOneWithoutOutcomeInput
  }

  export type MatchOutcomeUncheckedCreateInput = {
    id?: string
    matchId: string
    introRequestedAt?: Date | string | null
    introApprovedAt?: Date | string | null
    meetingOccurredAt?: Date | string | null
    followUpOccurred?: boolean
    result?: $Enums.MatchOutcomeResult
    founderRating?: number | null
    expertRating?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchOutcomeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    introRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    introApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingOccurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpOccurred?: BoolFieldUpdateOperationsInput | boolean
    result?: EnumMatchOutcomeResultFieldUpdateOperationsInput | $Enums.MatchOutcomeResult
    founderRating?: NullableIntFieldUpdateOperationsInput | number | null
    expertRating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    match?: MatchResultUpdateOneRequiredWithoutOutcomeNestedInput
  }

  export type MatchOutcomeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    introRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    introApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingOccurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpOccurred?: BoolFieldUpdateOperationsInput | boolean
    result?: EnumMatchOutcomeResultFieldUpdateOperationsInput | $Enums.MatchOutcomeResult
    founderRating?: NullableIntFieldUpdateOperationsInput | number | null
    expertRating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchOutcomeCreateManyInput = {
    id?: string
    matchId: string
    introRequestedAt?: Date | string | null
    introApprovedAt?: Date | string | null
    meetingOccurredAt?: Date | string | null
    followUpOccurred?: boolean
    result?: $Enums.MatchOutcomeResult
    founderRating?: number | null
    expertRating?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchOutcomeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    introRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    introApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingOccurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpOccurred?: BoolFieldUpdateOperationsInput | boolean
    result?: EnumMatchOutcomeResultFieldUpdateOperationsInput | $Enums.MatchOutcomeResult
    founderRating?: NullableIntFieldUpdateOperationsInput | number | null
    expertRating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchOutcomeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    introRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    introApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingOccurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpOccurred?: BoolFieldUpdateOperationsInput | boolean
    result?: EnumMatchOutcomeResultFieldUpdateOperationsInput | $Enums.MatchOutcomeResult
    founderRating?: NullableIntFieldUpdateOperationsInput | number | null
    expertRating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReputationProfileCreateInput = {
    id?: string
    responseRate?: number
    meetingShowRate?: number
    followThroughRate?: number
    introQualityScore?: number
    ecosystemContributionScore?: number
    complaintCount?: number
    trustTier?: $Enums.TrustTier
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReputationInput
  }

  export type ReputationProfileUncheckedCreateInput = {
    id?: string
    userId: string
    responseRate?: number
    meetingShowRate?: number
    followThroughRate?: number
    introQualityScore?: number
    ecosystemContributionScore?: number
    complaintCount?: number
    trustTier?: $Enums.TrustTier
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReputationProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseRate?: FloatFieldUpdateOperationsInput | number
    meetingShowRate?: FloatFieldUpdateOperationsInput | number
    followThroughRate?: FloatFieldUpdateOperationsInput | number
    introQualityScore?: FloatFieldUpdateOperationsInput | number
    ecosystemContributionScore?: FloatFieldUpdateOperationsInput | number
    complaintCount?: IntFieldUpdateOperationsInput | number
    trustTier?: EnumTrustTierFieldUpdateOperationsInput | $Enums.TrustTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReputationNestedInput
  }

  export type ReputationProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    responseRate?: FloatFieldUpdateOperationsInput | number
    meetingShowRate?: FloatFieldUpdateOperationsInput | number
    followThroughRate?: FloatFieldUpdateOperationsInput | number
    introQualityScore?: FloatFieldUpdateOperationsInput | number
    ecosystemContributionScore?: FloatFieldUpdateOperationsInput | number
    complaintCount?: IntFieldUpdateOperationsInput | number
    trustTier?: EnumTrustTierFieldUpdateOperationsInput | $Enums.TrustTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReputationProfileCreateManyInput = {
    id?: string
    userId: string
    responseRate?: number
    meetingShowRate?: number
    followThroughRate?: number
    introQualityScore?: number
    ecosystemContributionScore?: number
    complaintCount?: number
    trustTier?: $Enums.TrustTier
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReputationProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseRate?: FloatFieldUpdateOperationsInput | number
    meetingShowRate?: FloatFieldUpdateOperationsInput | number
    followThroughRate?: FloatFieldUpdateOperationsInput | number
    introQualityScore?: FloatFieldUpdateOperationsInput | number
    ecosystemContributionScore?: FloatFieldUpdateOperationsInput | number
    complaintCount?: IntFieldUpdateOperationsInput | number
    trustTier?: EnumTrustTierFieldUpdateOperationsInput | $Enums.TrustTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReputationProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    responseRate?: FloatFieldUpdateOperationsInput | number
    meetingShowRate?: FloatFieldUpdateOperationsInput | number
    followThroughRate?: FloatFieldUpdateOperationsInput | number
    introQualityScore?: FloatFieldUpdateOperationsInput | number
    ecosystemContributionScore?: FloatFieldUpdateOperationsInput | number
    complaintCount?: IntFieldUpdateOperationsInput | number
    trustTier?: EnumTrustTierFieldUpdateOperationsInput | $Enums.TrustTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevealAuditLogCreateInput = {
    id?: string
    matchId: string
    action: string
    metadata?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type RevealAuditLogUncheckedCreateInput = {
    id?: string
    userId: string
    matchId: string
    action: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type RevealAuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type RevealAuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevealAuditLogCreateManyInput = {
    id?: string
    userId: string
    matchId: string
    action: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type RevealAuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevealAuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    actorId: string
    action: string
    resourceType: string
    resourceId?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    actorId: string
    action: string
    resourceType: string
    resourceId?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    actorId: string
    action: string
    resourceType: string
    resourceId?: string | null
    metadata?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    resourceType?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type MatchResultListRelationFilter = {
    every?: MatchResultWhereInput
    some?: MatchResultWhereInput
    none?: MatchResultWhereInput
  }

  export type ReputationProfileNullableScalarRelationFilter = {
    is?: ReputationProfileWhereInput | null
    isNot?: ReputationProfileWhereInput | null
  }

  export type IntakeProfileListRelationFilter = {
    every?: IntakeProfileWhereInput
    some?: IntakeProfileWhereInput
    none?: IntakeProfileWhereInput
  }

  export type RevealAuditLogListRelationFilter = {
    every?: RevealAuditLogWhereInput
    some?: RevealAuditLogWhereInput
    none?: RevealAuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IntakeProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RevealAuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    roleType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PersonaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    personaType?: SortOrder
    title?: SortOrder
    organization?: SortOrder
    background?: SortOrder
    goals?: SortOrder
    skills?: SortOrder
    industries?: SortOrder
    stagePreference?: SortOrder
    availability?: SortOrder
    capacity?: SortOrder
    currentLoad?: SortOrder
    riskTolerance?: SortOrder
    missionInterests?: SortOrder
    avatarUrl?: SortOrder
    profileJson?: SortOrder
    isHighValue?: SortOrder
    createdAt?: SortOrder
  }

  export type PersonaAvgOrderByAggregateInput = {
    capacity?: SortOrder
    currentLoad?: SortOrder
  }

  export type PersonaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    personaType?: SortOrder
    title?: SortOrder
    organization?: SortOrder
    background?: SortOrder
    goals?: SortOrder
    skills?: SortOrder
    industries?: SortOrder
    stagePreference?: SortOrder
    availability?: SortOrder
    capacity?: SortOrder
    currentLoad?: SortOrder
    riskTolerance?: SortOrder
    missionInterests?: SortOrder
    avatarUrl?: SortOrder
    profileJson?: SortOrder
    isHighValue?: SortOrder
    createdAt?: SortOrder
  }

  export type PersonaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    personaType?: SortOrder
    title?: SortOrder
    organization?: SortOrder
    background?: SortOrder
    goals?: SortOrder
    skills?: SortOrder
    industries?: SortOrder
    stagePreference?: SortOrder
    availability?: SortOrder
    capacity?: SortOrder
    currentLoad?: SortOrder
    riskTolerance?: SortOrder
    missionInterests?: SortOrder
    avatarUrl?: SortOrder
    profileJson?: SortOrder
    isHighValue?: SortOrder
    createdAt?: SortOrder
  }

  export type PersonaSumOrderByAggregateInput = {
    capacity?: SortOrder
    currentLoad?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type IntakeProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stageEvidence?: SortOrder
    commercializationBlocker?: SortOrder
    requestedOutcome?: SortOrder
    technicalMaturity?: SortOrder
    regulatoryExposure?: SortOrder
    fundingStatus?: SortOrder
    customerDiscoveryEvidence?: SortOrder
    introSensitivity?: SortOrder
    geographicRelevance?: SortOrder
    urgencyReason?: SortOrder
    missingInfoFlags?: SortOrder
    readinessScore?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntakeProfileAvgOrderByAggregateInput = {
    technicalMaturity?: SortOrder
    readinessScore?: SortOrder
  }

  export type IntakeProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stageEvidence?: SortOrder
    commercializationBlocker?: SortOrder
    requestedOutcome?: SortOrder
    technicalMaturity?: SortOrder
    regulatoryExposure?: SortOrder
    fundingStatus?: SortOrder
    customerDiscoveryEvidence?: SortOrder
    introSensitivity?: SortOrder
    geographicRelevance?: SortOrder
    urgencyReason?: SortOrder
    missingInfoFlags?: SortOrder
    readinessScore?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntakeProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    stageEvidence?: SortOrder
    commercializationBlocker?: SortOrder
    requestedOutcome?: SortOrder
    technicalMaturity?: SortOrder
    regulatoryExposure?: SortOrder
    fundingStatus?: SortOrder
    customerDiscoveryEvidence?: SortOrder
    introSensitivity?: SortOrder
    geographicRelevance?: SortOrder
    urgencyReason?: SortOrder
    missingInfoFlags?: SortOrder
    readinessScore?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntakeProfileSumOrderByAggregateInput = {
    technicalMaturity?: SortOrder
    readinessScore?: SortOrder
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

  export type PersonaNullableScalarRelationFilter = {
    is?: PersonaWhereInput | null
    isNot?: PersonaWhereInput | null
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    personaId?: SortOrder
    title?: SortOrder
    state?: SortOrder
    readinessScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationAvgOrderByAggregateInput = {
    readinessScore?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    personaId?: SortOrder
    title?: SortOrder
    state?: SortOrder
    readinessScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    personaId?: SortOrder
    title?: SortOrder
    state?: SortOrder
    readinessScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConversationSumOrderByAggregateInput = {
    readinessScore?: SortOrder
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

  export type ConversationScalarRelationFilter = {
    is?: ConversationWhereInput
    isNot?: ConversationWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    conversationId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[]
    notIn?: $Enums.MatchStatus[]
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ConversationNullableScalarRelationFilter = {
    is?: ConversationWhereInput | null
    isNot?: ConversationWhereInput | null
  }

  export type MatchOutcomeNullableScalarRelationFilter = {
    is?: MatchOutcomeWhereInput | null
    isNot?: MatchOutcomeWhereInput | null
  }

  export type MatchResultUserIdPersonaIdCompoundUniqueInput = {
    userId: string
    personaId: string
  }

  export type MatchResultCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    personaId?: SortOrder
    intakeId?: SortOrder
    score?: SortOrder
    eligibilityScore?: SortOrder
    readinessScore?: SortOrder
    constraintFitScore?: SortOrder
    expertiseFitScore?: SortOrder
    relationshipFitScore?: SortOrder
    timingFitScore?: SortOrder
    outcomeScore?: SortOrder
    reasons?: SortOrder
    risks?: SortOrder
    rationale?: SortOrder
    status?: SortOrder
    revealAuthorizedAt?: SortOrder
    revealedAt?: SortOrder
    revokedAt?: SortOrder
    rawJson?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchResultAvgOrderByAggregateInput = {
    score?: SortOrder
    eligibilityScore?: SortOrder
    readinessScore?: SortOrder
    constraintFitScore?: SortOrder
    expertiseFitScore?: SortOrder
    relationshipFitScore?: SortOrder
    timingFitScore?: SortOrder
    outcomeScore?: SortOrder
  }

  export type MatchResultMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    personaId?: SortOrder
    intakeId?: SortOrder
    score?: SortOrder
    eligibilityScore?: SortOrder
    readinessScore?: SortOrder
    constraintFitScore?: SortOrder
    expertiseFitScore?: SortOrder
    relationshipFitScore?: SortOrder
    timingFitScore?: SortOrder
    outcomeScore?: SortOrder
    reasons?: SortOrder
    risks?: SortOrder
    rationale?: SortOrder
    status?: SortOrder
    revealAuthorizedAt?: SortOrder
    revealedAt?: SortOrder
    revokedAt?: SortOrder
    rawJson?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchResultMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    personaId?: SortOrder
    intakeId?: SortOrder
    score?: SortOrder
    eligibilityScore?: SortOrder
    readinessScore?: SortOrder
    constraintFitScore?: SortOrder
    expertiseFitScore?: SortOrder
    relationshipFitScore?: SortOrder
    timingFitScore?: SortOrder
    outcomeScore?: SortOrder
    reasons?: SortOrder
    risks?: SortOrder
    rationale?: SortOrder
    status?: SortOrder
    revealAuthorizedAt?: SortOrder
    revealedAt?: SortOrder
    revokedAt?: SortOrder
    rawJson?: SortOrder
    conversationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchResultSumOrderByAggregateInput = {
    score?: SortOrder
    eligibilityScore?: SortOrder
    readinessScore?: SortOrder
    constraintFitScore?: SortOrder
    expertiseFitScore?: SortOrder
    relationshipFitScore?: SortOrder
    timingFitScore?: SortOrder
    outcomeScore?: SortOrder
  }

  export type EnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[]
    notIn?: $Enums.MatchStatus[]
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumMatchOutcomeResultFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchOutcomeResult | EnumMatchOutcomeResultFieldRefInput<$PrismaModel>
    in?: $Enums.MatchOutcomeResult[]
    notIn?: $Enums.MatchOutcomeResult[]
    not?: NestedEnumMatchOutcomeResultFilter<$PrismaModel> | $Enums.MatchOutcomeResult
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

  export type MatchResultScalarRelationFilter = {
    is?: MatchResultWhereInput
    isNot?: MatchResultWhereInput
  }

  export type MatchOutcomeCountOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    introRequestedAt?: SortOrder
    introApprovedAt?: SortOrder
    meetingOccurredAt?: SortOrder
    followUpOccurred?: SortOrder
    result?: SortOrder
    founderRating?: SortOrder
    expertRating?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchOutcomeAvgOrderByAggregateInput = {
    founderRating?: SortOrder
    expertRating?: SortOrder
  }

  export type MatchOutcomeMaxOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    introRequestedAt?: SortOrder
    introApprovedAt?: SortOrder
    meetingOccurredAt?: SortOrder
    followUpOccurred?: SortOrder
    result?: SortOrder
    founderRating?: SortOrder
    expertRating?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchOutcomeMinOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    introRequestedAt?: SortOrder
    introApprovedAt?: SortOrder
    meetingOccurredAt?: SortOrder
    followUpOccurred?: SortOrder
    result?: SortOrder
    founderRating?: SortOrder
    expertRating?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchOutcomeSumOrderByAggregateInput = {
    founderRating?: SortOrder
    expertRating?: SortOrder
  }

  export type EnumMatchOutcomeResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchOutcomeResult | EnumMatchOutcomeResultFieldRefInput<$PrismaModel>
    in?: $Enums.MatchOutcomeResult[]
    notIn?: $Enums.MatchOutcomeResult[]
    not?: NestedEnumMatchOutcomeResultWithAggregatesFilter<$PrismaModel> | $Enums.MatchOutcomeResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchOutcomeResultFilter<$PrismaModel>
    _max?: NestedEnumMatchOutcomeResultFilter<$PrismaModel>
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

  export type EnumTrustTierFilter<$PrismaModel = never> = {
    equals?: $Enums.TrustTier | EnumTrustTierFieldRefInput<$PrismaModel>
    in?: $Enums.TrustTier[]
    notIn?: $Enums.TrustTier[]
    not?: NestedEnumTrustTierFilter<$PrismaModel> | $Enums.TrustTier
  }

  export type ReputationProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    responseRate?: SortOrder
    meetingShowRate?: SortOrder
    followThroughRate?: SortOrder
    introQualityScore?: SortOrder
    ecosystemContributionScore?: SortOrder
    complaintCount?: SortOrder
    trustTier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReputationProfileAvgOrderByAggregateInput = {
    responseRate?: SortOrder
    meetingShowRate?: SortOrder
    followThroughRate?: SortOrder
    introQualityScore?: SortOrder
    ecosystemContributionScore?: SortOrder
    complaintCount?: SortOrder
  }

  export type ReputationProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    responseRate?: SortOrder
    meetingShowRate?: SortOrder
    followThroughRate?: SortOrder
    introQualityScore?: SortOrder
    ecosystemContributionScore?: SortOrder
    complaintCount?: SortOrder
    trustTier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReputationProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    responseRate?: SortOrder
    meetingShowRate?: SortOrder
    followThroughRate?: SortOrder
    introQualityScore?: SortOrder
    ecosystemContributionScore?: SortOrder
    complaintCount?: SortOrder
    trustTier?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReputationProfileSumOrderByAggregateInput = {
    responseRate?: SortOrder
    meetingShowRate?: SortOrder
    followThroughRate?: SortOrder
    introQualityScore?: SortOrder
    ecosystemContributionScore?: SortOrder
    complaintCount?: SortOrder
  }

  export type EnumTrustTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrustTier | EnumTrustTierFieldRefInput<$PrismaModel>
    in?: $Enums.TrustTier[]
    notIn?: $Enums.TrustTier[]
    not?: NestedEnumTrustTierWithAggregatesFilter<$PrismaModel> | $Enums.TrustTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrustTierFilter<$PrismaModel>
    _max?: NestedEnumTrustTierFilter<$PrismaModel>
  }

  export type RevealAuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    action?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type RevealAuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    action?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type RevealAuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    action?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    resourceType?: SortOrder
    resourceId?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type MatchResultCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchResultCreateWithoutUserInput, MatchResultUncheckedCreateWithoutUserInput> | MatchResultCreateWithoutUserInput[] | MatchResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutUserInput | MatchResultCreateOrConnectWithoutUserInput[]
    createMany?: MatchResultCreateManyUserInputEnvelope
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
  }

  export type ReputationProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ReputationProfileCreateWithoutUserInput, ReputationProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReputationProfileCreateOrConnectWithoutUserInput
    connect?: ReputationProfileWhereUniqueInput
  }

  export type IntakeProfileCreateNestedManyWithoutUserInput = {
    create?: XOR<IntakeProfileCreateWithoutUserInput, IntakeProfileUncheckedCreateWithoutUserInput> | IntakeProfileCreateWithoutUserInput[] | IntakeProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntakeProfileCreateOrConnectWithoutUserInput | IntakeProfileCreateOrConnectWithoutUserInput[]
    createMany?: IntakeProfileCreateManyUserInputEnvelope
    connect?: IntakeProfileWhereUniqueInput | IntakeProfileWhereUniqueInput[]
  }

  export type RevealAuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<RevealAuditLogCreateWithoutUserInput, RevealAuditLogUncheckedCreateWithoutUserInput> | RevealAuditLogCreateWithoutUserInput[] | RevealAuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevealAuditLogCreateOrConnectWithoutUserInput | RevealAuditLogCreateOrConnectWithoutUserInput[]
    createMany?: RevealAuditLogCreateManyUserInputEnvelope
    connect?: RevealAuditLogWhereUniqueInput | RevealAuditLogWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type MatchResultUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchResultCreateWithoutUserInput, MatchResultUncheckedCreateWithoutUserInput> | MatchResultCreateWithoutUserInput[] | MatchResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutUserInput | MatchResultCreateOrConnectWithoutUserInput[]
    createMany?: MatchResultCreateManyUserInputEnvelope
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
  }

  export type ReputationProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ReputationProfileCreateWithoutUserInput, ReputationProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReputationProfileCreateOrConnectWithoutUserInput
    connect?: ReputationProfileWhereUniqueInput
  }

  export type IntakeProfileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IntakeProfileCreateWithoutUserInput, IntakeProfileUncheckedCreateWithoutUserInput> | IntakeProfileCreateWithoutUserInput[] | IntakeProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntakeProfileCreateOrConnectWithoutUserInput | IntakeProfileCreateOrConnectWithoutUserInput[]
    createMany?: IntakeProfileCreateManyUserInputEnvelope
    connect?: IntakeProfileWhereUniqueInput | IntakeProfileWhereUniqueInput[]
  }

  export type RevealAuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RevealAuditLogCreateWithoutUserInput, RevealAuditLogUncheckedCreateWithoutUserInput> | RevealAuditLogCreateWithoutUserInput[] | RevealAuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevealAuditLogCreateOrConnectWithoutUserInput | RevealAuditLogCreateOrConnectWithoutUserInput[]
    createMany?: RevealAuditLogCreateManyUserInputEnvelope
    connect?: RevealAuditLogWhereUniqueInput | RevealAuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUserInput | ConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUserInput | ConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUserInput | ConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type MatchResultUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchResultCreateWithoutUserInput, MatchResultUncheckedCreateWithoutUserInput> | MatchResultCreateWithoutUserInput[] | MatchResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutUserInput | MatchResultCreateOrConnectWithoutUserInput[]
    upsert?: MatchResultUpsertWithWhereUniqueWithoutUserInput | MatchResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchResultCreateManyUserInputEnvelope
    set?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    disconnect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    delete?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    update?: MatchResultUpdateWithWhereUniqueWithoutUserInput | MatchResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchResultUpdateManyWithWhereWithoutUserInput | MatchResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchResultScalarWhereInput | MatchResultScalarWhereInput[]
  }

  export type ReputationProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ReputationProfileCreateWithoutUserInput, ReputationProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReputationProfileCreateOrConnectWithoutUserInput
    upsert?: ReputationProfileUpsertWithoutUserInput
    disconnect?: ReputationProfileWhereInput | boolean
    delete?: ReputationProfileWhereInput | boolean
    connect?: ReputationProfileWhereUniqueInput
    update?: XOR<XOR<ReputationProfileUpdateToOneWithWhereWithoutUserInput, ReputationProfileUpdateWithoutUserInput>, ReputationProfileUncheckedUpdateWithoutUserInput>
  }

  export type IntakeProfileUpdateManyWithoutUserNestedInput = {
    create?: XOR<IntakeProfileCreateWithoutUserInput, IntakeProfileUncheckedCreateWithoutUserInput> | IntakeProfileCreateWithoutUserInput[] | IntakeProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntakeProfileCreateOrConnectWithoutUserInput | IntakeProfileCreateOrConnectWithoutUserInput[]
    upsert?: IntakeProfileUpsertWithWhereUniqueWithoutUserInput | IntakeProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IntakeProfileCreateManyUserInputEnvelope
    set?: IntakeProfileWhereUniqueInput | IntakeProfileWhereUniqueInput[]
    disconnect?: IntakeProfileWhereUniqueInput | IntakeProfileWhereUniqueInput[]
    delete?: IntakeProfileWhereUniqueInput | IntakeProfileWhereUniqueInput[]
    connect?: IntakeProfileWhereUniqueInput | IntakeProfileWhereUniqueInput[]
    update?: IntakeProfileUpdateWithWhereUniqueWithoutUserInput | IntakeProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IntakeProfileUpdateManyWithWhereWithoutUserInput | IntakeProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IntakeProfileScalarWhereInput | IntakeProfileScalarWhereInput[]
  }

  export type RevealAuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<RevealAuditLogCreateWithoutUserInput, RevealAuditLogUncheckedCreateWithoutUserInput> | RevealAuditLogCreateWithoutUserInput[] | RevealAuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevealAuditLogCreateOrConnectWithoutUserInput | RevealAuditLogCreateOrConnectWithoutUserInput[]
    upsert?: RevealAuditLogUpsertWithWhereUniqueWithoutUserInput | RevealAuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RevealAuditLogCreateManyUserInputEnvelope
    set?: RevealAuditLogWhereUniqueInput | RevealAuditLogWhereUniqueInput[]
    disconnect?: RevealAuditLogWhereUniqueInput | RevealAuditLogWhereUniqueInput[]
    delete?: RevealAuditLogWhereUniqueInput | RevealAuditLogWhereUniqueInput[]
    connect?: RevealAuditLogWhereUniqueInput | RevealAuditLogWhereUniqueInput[]
    update?: RevealAuditLogUpdateWithWhereUniqueWithoutUserInput | RevealAuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RevealAuditLogUpdateManyWithWhereWithoutUserInput | RevealAuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RevealAuditLogScalarWhereInput | RevealAuditLogScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUserInput | ConversationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConversationCreateManyUserInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUserInput | ConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUserInput | ConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type MatchResultUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchResultCreateWithoutUserInput, MatchResultUncheckedCreateWithoutUserInput> | MatchResultCreateWithoutUserInput[] | MatchResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutUserInput | MatchResultCreateOrConnectWithoutUserInput[]
    upsert?: MatchResultUpsertWithWhereUniqueWithoutUserInput | MatchResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchResultCreateManyUserInputEnvelope
    set?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    disconnect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    delete?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    update?: MatchResultUpdateWithWhereUniqueWithoutUserInput | MatchResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchResultUpdateManyWithWhereWithoutUserInput | MatchResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchResultScalarWhereInput | MatchResultScalarWhereInput[]
  }

  export type ReputationProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ReputationProfileCreateWithoutUserInput, ReputationProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReputationProfileCreateOrConnectWithoutUserInput
    upsert?: ReputationProfileUpsertWithoutUserInput
    disconnect?: ReputationProfileWhereInput | boolean
    delete?: ReputationProfileWhereInput | boolean
    connect?: ReputationProfileWhereUniqueInput
    update?: XOR<XOR<ReputationProfileUpdateToOneWithWhereWithoutUserInput, ReputationProfileUpdateWithoutUserInput>, ReputationProfileUncheckedUpdateWithoutUserInput>
  }

  export type IntakeProfileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IntakeProfileCreateWithoutUserInput, IntakeProfileUncheckedCreateWithoutUserInput> | IntakeProfileCreateWithoutUserInput[] | IntakeProfileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntakeProfileCreateOrConnectWithoutUserInput | IntakeProfileCreateOrConnectWithoutUserInput[]
    upsert?: IntakeProfileUpsertWithWhereUniqueWithoutUserInput | IntakeProfileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IntakeProfileCreateManyUserInputEnvelope
    set?: IntakeProfileWhereUniqueInput | IntakeProfileWhereUniqueInput[]
    disconnect?: IntakeProfileWhereUniqueInput | IntakeProfileWhereUniqueInput[]
    delete?: IntakeProfileWhereUniqueInput | IntakeProfileWhereUniqueInput[]
    connect?: IntakeProfileWhereUniqueInput | IntakeProfileWhereUniqueInput[]
    update?: IntakeProfileUpdateWithWhereUniqueWithoutUserInput | IntakeProfileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IntakeProfileUpdateManyWithWhereWithoutUserInput | IntakeProfileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IntakeProfileScalarWhereInput | IntakeProfileScalarWhereInput[]
  }

  export type RevealAuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RevealAuditLogCreateWithoutUserInput, RevealAuditLogUncheckedCreateWithoutUserInput> | RevealAuditLogCreateWithoutUserInput[] | RevealAuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RevealAuditLogCreateOrConnectWithoutUserInput | RevealAuditLogCreateOrConnectWithoutUserInput[]
    upsert?: RevealAuditLogUpsertWithWhereUniqueWithoutUserInput | RevealAuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RevealAuditLogCreateManyUserInputEnvelope
    set?: RevealAuditLogWhereUniqueInput | RevealAuditLogWhereUniqueInput[]
    disconnect?: RevealAuditLogWhereUniqueInput | RevealAuditLogWhereUniqueInput[]
    delete?: RevealAuditLogWhereUniqueInput | RevealAuditLogWhereUniqueInput[]
    connect?: RevealAuditLogWhereUniqueInput | RevealAuditLogWhereUniqueInput[]
    update?: RevealAuditLogUpdateWithWhereUniqueWithoutUserInput | RevealAuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RevealAuditLogUpdateManyWithWhereWithoutUserInput | RevealAuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RevealAuditLogScalarWhereInput | RevealAuditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type ConversationCreateNestedManyWithoutPersonaInput = {
    create?: XOR<ConversationCreateWithoutPersonaInput, ConversationUncheckedCreateWithoutPersonaInput> | ConversationCreateWithoutPersonaInput[] | ConversationUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutPersonaInput | ConversationCreateOrConnectWithoutPersonaInput[]
    createMany?: ConversationCreateManyPersonaInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type MatchResultCreateNestedManyWithoutPersonaInput = {
    create?: XOR<MatchResultCreateWithoutPersonaInput, MatchResultUncheckedCreateWithoutPersonaInput> | MatchResultCreateWithoutPersonaInput[] | MatchResultUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutPersonaInput | MatchResultCreateOrConnectWithoutPersonaInput[]
    createMany?: MatchResultCreateManyPersonaInputEnvelope
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<ConversationCreateWithoutPersonaInput, ConversationUncheckedCreateWithoutPersonaInput> | ConversationCreateWithoutPersonaInput[] | ConversationUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutPersonaInput | ConversationCreateOrConnectWithoutPersonaInput[]
    createMany?: ConversationCreateManyPersonaInputEnvelope
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type MatchResultUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<MatchResultCreateWithoutPersonaInput, MatchResultUncheckedCreateWithoutPersonaInput> | MatchResultCreateWithoutPersonaInput[] | MatchResultUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutPersonaInput | MatchResultCreateOrConnectWithoutPersonaInput[]
    createMany?: MatchResultCreateManyPersonaInputEnvelope
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ConversationUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<ConversationCreateWithoutPersonaInput, ConversationUncheckedCreateWithoutPersonaInput> | ConversationCreateWithoutPersonaInput[] | ConversationUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutPersonaInput | ConversationCreateOrConnectWithoutPersonaInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutPersonaInput | ConversationUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: ConversationCreateManyPersonaInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutPersonaInput | ConversationUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutPersonaInput | ConversationUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type MatchResultUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<MatchResultCreateWithoutPersonaInput, MatchResultUncheckedCreateWithoutPersonaInput> | MatchResultCreateWithoutPersonaInput[] | MatchResultUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutPersonaInput | MatchResultCreateOrConnectWithoutPersonaInput[]
    upsert?: MatchResultUpsertWithWhereUniqueWithoutPersonaInput | MatchResultUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: MatchResultCreateManyPersonaInputEnvelope
    set?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    disconnect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    delete?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    update?: MatchResultUpdateWithWhereUniqueWithoutPersonaInput | MatchResultUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: MatchResultUpdateManyWithWhereWithoutPersonaInput | MatchResultUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: MatchResultScalarWhereInput | MatchResultScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<ConversationCreateWithoutPersonaInput, ConversationUncheckedCreateWithoutPersonaInput> | ConversationCreateWithoutPersonaInput[] | ConversationUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutPersonaInput | ConversationCreateOrConnectWithoutPersonaInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutPersonaInput | ConversationUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: ConversationCreateManyPersonaInputEnvelope
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutPersonaInput | ConversationUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutPersonaInput | ConversationUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type MatchResultUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<MatchResultCreateWithoutPersonaInput, MatchResultUncheckedCreateWithoutPersonaInput> | MatchResultCreateWithoutPersonaInput[] | MatchResultUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutPersonaInput | MatchResultCreateOrConnectWithoutPersonaInput[]
    upsert?: MatchResultUpsertWithWhereUniqueWithoutPersonaInput | MatchResultUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: MatchResultCreateManyPersonaInputEnvelope
    set?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    disconnect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    delete?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    update?: MatchResultUpdateWithWhereUniqueWithoutPersonaInput | MatchResultUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: MatchResultUpdateManyWithWhereWithoutPersonaInput | MatchResultUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: MatchResultScalarWhereInput | MatchResultScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutIntakeProfilesInput = {
    create?: XOR<UserCreateWithoutIntakeProfilesInput, UserUncheckedCreateWithoutIntakeProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutIntakeProfilesInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutIntakeProfilesNestedInput = {
    create?: XOR<UserCreateWithoutIntakeProfilesInput, UserUncheckedCreateWithoutIntakeProfilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutIntakeProfilesInput
    upsert?: UserUpsertWithoutIntakeProfilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIntakeProfilesInput, UserUpdateWithoutIntakeProfilesInput>, UserUncheckedUpdateWithoutIntakeProfilesInput>
  }

  export type UserCreateNestedOneWithoutConversationsInput = {
    create?: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversationsInput
    connect?: UserWhereUniqueInput
  }

  export type PersonaCreateNestedOneWithoutConversationsInput = {
    create?: XOR<PersonaCreateWithoutConversationsInput, PersonaUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutConversationsInput
    connect?: PersonaWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MatchResultCreateNestedManyWithoutConversationInput = {
    create?: XOR<MatchResultCreateWithoutConversationInput, MatchResultUncheckedCreateWithoutConversationInput> | MatchResultCreateWithoutConversationInput[] | MatchResultUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutConversationInput | MatchResultCreateOrConnectWithoutConversationInput[]
    createMany?: MatchResultCreateManyConversationInputEnvelope
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MatchResultUncheckedCreateNestedManyWithoutConversationInput = {
    create?: XOR<MatchResultCreateWithoutConversationInput, MatchResultUncheckedCreateWithoutConversationInput> | MatchResultCreateWithoutConversationInput[] | MatchResultUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutConversationInput | MatchResultCreateOrConnectWithoutConversationInput[]
    createMany?: MatchResultCreateManyConversationInputEnvelope
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversationsInput
    upsert?: UserUpsertWithoutConversationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConversationsInput, UserUpdateWithoutConversationsInput>, UserUncheckedUpdateWithoutConversationsInput>
  }

  export type PersonaUpdateOneWithoutConversationsNestedInput = {
    create?: XOR<PersonaCreateWithoutConversationsInput, PersonaUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutConversationsInput
    upsert?: PersonaUpsertWithoutConversationsInput
    disconnect?: PersonaWhereInput | boolean
    delete?: PersonaWhereInput | boolean
    connect?: PersonaWhereUniqueInput
    update?: XOR<XOR<PersonaUpdateToOneWithWhereWithoutConversationsInput, PersonaUpdateWithoutConversationsInput>, PersonaUncheckedUpdateWithoutConversationsInput>
  }

  export type MessageUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MatchResultUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MatchResultCreateWithoutConversationInput, MatchResultUncheckedCreateWithoutConversationInput> | MatchResultCreateWithoutConversationInput[] | MatchResultUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutConversationInput | MatchResultCreateOrConnectWithoutConversationInput[]
    upsert?: MatchResultUpsertWithWhereUniqueWithoutConversationInput | MatchResultUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MatchResultCreateManyConversationInputEnvelope
    set?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    disconnect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    delete?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    update?: MatchResultUpdateWithWhereUniqueWithoutConversationInput | MatchResultUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MatchResultUpdateManyWithWhereWithoutConversationInput | MatchResultUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MatchResultScalarWhereInput | MatchResultScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput> | MessageCreateWithoutConversationInput[] | MessageUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutConversationInput | MessageCreateOrConnectWithoutConversationInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutConversationInput | MessageUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MessageCreateManyConversationInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutConversationInput | MessageUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutConversationInput | MessageUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MatchResultUncheckedUpdateManyWithoutConversationNestedInput = {
    create?: XOR<MatchResultCreateWithoutConversationInput, MatchResultUncheckedCreateWithoutConversationInput> | MatchResultCreateWithoutConversationInput[] | MatchResultUncheckedCreateWithoutConversationInput[]
    connectOrCreate?: MatchResultCreateOrConnectWithoutConversationInput | MatchResultCreateOrConnectWithoutConversationInput[]
    upsert?: MatchResultUpsertWithWhereUniqueWithoutConversationInput | MatchResultUpsertWithWhereUniqueWithoutConversationInput[]
    createMany?: MatchResultCreateManyConversationInputEnvelope
    set?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    disconnect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    delete?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    connect?: MatchResultWhereUniqueInput | MatchResultWhereUniqueInput[]
    update?: MatchResultUpdateWithWhereUniqueWithoutConversationInput | MatchResultUpdateWithWhereUniqueWithoutConversationInput[]
    updateMany?: MatchResultUpdateManyWithWhereWithoutConversationInput | MatchResultUpdateManyWithWhereWithoutConversationInput[]
    deleteMany?: MatchResultScalarWhereInput | MatchResultScalarWhereInput[]
  }

  export type ConversationCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
  }

  export type ConversationUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMessagesInput
    upsert?: ConversationUpsertWithoutMessagesInput
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMessagesInput, ConversationUpdateWithoutMessagesInput>, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutMatchesInput = {
    create?: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesInput
    connect?: UserWhereUniqueInput
  }

  export type PersonaCreateNestedOneWithoutMatchesInput = {
    create?: XOR<PersonaCreateWithoutMatchesInput, PersonaUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutMatchesInput
    connect?: PersonaWhereUniqueInput
  }

  export type ConversationCreateNestedOneWithoutMatchesInput = {
    create?: XOR<ConversationCreateWithoutMatchesInput, ConversationUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMatchesInput
    connect?: ConversationWhereUniqueInput
  }

  export type MatchOutcomeCreateNestedOneWithoutMatchInput = {
    create?: XOR<MatchOutcomeCreateWithoutMatchInput, MatchOutcomeUncheckedCreateWithoutMatchInput>
    connectOrCreate?: MatchOutcomeCreateOrConnectWithoutMatchInput
    connect?: MatchOutcomeWhereUniqueInput
  }

  export type MatchOutcomeUncheckedCreateNestedOneWithoutMatchInput = {
    create?: XOR<MatchOutcomeCreateWithoutMatchInput, MatchOutcomeUncheckedCreateWithoutMatchInput>
    connectOrCreate?: MatchOutcomeCreateOrConnectWithoutMatchInput
    connect?: MatchOutcomeWhereUniqueInput
  }

  export type EnumMatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.MatchStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesInput
    upsert?: UserUpsertWithoutMatchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesInput, UserUpdateWithoutMatchesInput>, UserUncheckedUpdateWithoutMatchesInput>
  }

  export type PersonaUpdateOneWithoutMatchesNestedInput = {
    create?: XOR<PersonaCreateWithoutMatchesInput, PersonaUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: PersonaCreateOrConnectWithoutMatchesInput
    upsert?: PersonaUpsertWithoutMatchesInput
    disconnect?: PersonaWhereInput | boolean
    delete?: PersonaWhereInput | boolean
    connect?: PersonaWhereUniqueInput
    update?: XOR<XOR<PersonaUpdateToOneWithWhereWithoutMatchesInput, PersonaUpdateWithoutMatchesInput>, PersonaUncheckedUpdateWithoutMatchesInput>
  }

  export type ConversationUpdateOneWithoutMatchesNestedInput = {
    create?: XOR<ConversationCreateWithoutMatchesInput, ConversationUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: ConversationCreateOrConnectWithoutMatchesInput
    upsert?: ConversationUpsertWithoutMatchesInput
    disconnect?: ConversationWhereInput | boolean
    delete?: ConversationWhereInput | boolean
    connect?: ConversationWhereUniqueInput
    update?: XOR<XOR<ConversationUpdateToOneWithWhereWithoutMatchesInput, ConversationUpdateWithoutMatchesInput>, ConversationUncheckedUpdateWithoutMatchesInput>
  }

  export type MatchOutcomeUpdateOneWithoutMatchNestedInput = {
    create?: XOR<MatchOutcomeCreateWithoutMatchInput, MatchOutcomeUncheckedCreateWithoutMatchInput>
    connectOrCreate?: MatchOutcomeCreateOrConnectWithoutMatchInput
    upsert?: MatchOutcomeUpsertWithoutMatchInput
    disconnect?: MatchOutcomeWhereInput | boolean
    delete?: MatchOutcomeWhereInput | boolean
    connect?: MatchOutcomeWhereUniqueInput
    update?: XOR<XOR<MatchOutcomeUpdateToOneWithWhereWithoutMatchInput, MatchOutcomeUpdateWithoutMatchInput>, MatchOutcomeUncheckedUpdateWithoutMatchInput>
  }

  export type MatchOutcomeUncheckedUpdateOneWithoutMatchNestedInput = {
    create?: XOR<MatchOutcomeCreateWithoutMatchInput, MatchOutcomeUncheckedCreateWithoutMatchInput>
    connectOrCreate?: MatchOutcomeCreateOrConnectWithoutMatchInput
    upsert?: MatchOutcomeUpsertWithoutMatchInput
    disconnect?: MatchOutcomeWhereInput | boolean
    delete?: MatchOutcomeWhereInput | boolean
    connect?: MatchOutcomeWhereUniqueInput
    update?: XOR<XOR<MatchOutcomeUpdateToOneWithWhereWithoutMatchInput, MatchOutcomeUpdateWithoutMatchInput>, MatchOutcomeUncheckedUpdateWithoutMatchInput>
  }

  export type MatchResultCreateNestedOneWithoutOutcomeInput = {
    create?: XOR<MatchResultCreateWithoutOutcomeInput, MatchResultUncheckedCreateWithoutOutcomeInput>
    connectOrCreate?: MatchResultCreateOrConnectWithoutOutcomeInput
    connect?: MatchResultWhereUniqueInput
  }

  export type EnumMatchOutcomeResultFieldUpdateOperationsInput = {
    set?: $Enums.MatchOutcomeResult
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MatchResultUpdateOneRequiredWithoutOutcomeNestedInput = {
    create?: XOR<MatchResultCreateWithoutOutcomeInput, MatchResultUncheckedCreateWithoutOutcomeInput>
    connectOrCreate?: MatchResultCreateOrConnectWithoutOutcomeInput
    upsert?: MatchResultUpsertWithoutOutcomeInput
    connect?: MatchResultWhereUniqueInput
    update?: XOR<XOR<MatchResultUpdateToOneWithWhereWithoutOutcomeInput, MatchResultUpdateWithoutOutcomeInput>, MatchResultUncheckedUpdateWithoutOutcomeInput>
  }

  export type UserCreateNestedOneWithoutReputationInput = {
    create?: XOR<UserCreateWithoutReputationInput, UserUncheckedCreateWithoutReputationInput>
    connectOrCreate?: UserCreateOrConnectWithoutReputationInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTrustTierFieldUpdateOperationsInput = {
    set?: $Enums.TrustTier
  }

  export type UserUpdateOneRequiredWithoutReputationNestedInput = {
    create?: XOR<UserCreateWithoutReputationInput, UserUncheckedCreateWithoutReputationInput>
    connectOrCreate?: UserCreateOrConnectWithoutReputationInput
    upsert?: UserUpsertWithoutReputationInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReputationInput, UserUpdateWithoutReputationInput>, UserUncheckedUpdateWithoutReputationInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumMatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[]
    notIn?: $Enums.MatchStatus[]
    not?: NestedEnumMatchStatusFilter<$PrismaModel> | $Enums.MatchStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchStatus | EnumMatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MatchStatus[]
    notIn?: $Enums.MatchStatus[]
    not?: NestedEnumMatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.MatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchStatusFilter<$PrismaModel>
    _max?: NestedEnumMatchStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumMatchOutcomeResultFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchOutcomeResult | EnumMatchOutcomeResultFieldRefInput<$PrismaModel>
    in?: $Enums.MatchOutcomeResult[]
    notIn?: $Enums.MatchOutcomeResult[]
    not?: NestedEnumMatchOutcomeResultFilter<$PrismaModel> | $Enums.MatchOutcomeResult
  }

  export type NestedEnumMatchOutcomeResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MatchOutcomeResult | EnumMatchOutcomeResultFieldRefInput<$PrismaModel>
    in?: $Enums.MatchOutcomeResult[]
    notIn?: $Enums.MatchOutcomeResult[]
    not?: NestedEnumMatchOutcomeResultWithAggregatesFilter<$PrismaModel> | $Enums.MatchOutcomeResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMatchOutcomeResultFilter<$PrismaModel>
    _max?: NestedEnumMatchOutcomeResultFilter<$PrismaModel>
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

  export type NestedEnumTrustTierFilter<$PrismaModel = never> = {
    equals?: $Enums.TrustTier | EnumTrustTierFieldRefInput<$PrismaModel>
    in?: $Enums.TrustTier[]
    notIn?: $Enums.TrustTier[]
    not?: NestedEnumTrustTierFilter<$PrismaModel> | $Enums.TrustTier
  }

  export type NestedEnumTrustTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TrustTier | EnumTrustTierFieldRefInput<$PrismaModel>
    in?: $Enums.TrustTier[]
    notIn?: $Enums.TrustTier[]
    not?: NestedEnumTrustTierWithAggregatesFilter<$PrismaModel> | $Enums.TrustTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTrustTierFilter<$PrismaModel>
    _max?: NestedEnumTrustTierFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type ConversationCreateWithoutUserInput = {
    id?: string
    title?: string | null
    state?: string
    readinessScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    persona?: PersonaCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
    matches?: MatchResultCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutUserInput = {
    id?: string
    personaId?: string | null
    title?: string | null
    state?: string
    readinessScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
    matches?: MatchResultUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutUserInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput>
  }

  export type ConversationCreateManyUserInputEnvelope = {
    data: ConversationCreateManyUserInput | ConversationCreateManyUserInput[]
  }

  export type MatchResultCreateWithoutUserInput = {
    id?: string
    intakeId?: string | null
    score: number
    eligibilityScore?: number
    readinessScore?: number
    constraintFitScore?: number
    expertiseFitScore?: number
    relationshipFitScore?: number
    timingFitScore?: number
    outcomeScore?: number
    reasons?: string | null
    risks?: string | null
    rationale?: string | null
    status?: $Enums.MatchStatus
    revealAuthorizedAt?: Date | string | null
    revealedAt?: Date | string | null
    revokedAt?: Date | string | null
    rawJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    persona?: PersonaCreateNestedOneWithoutMatchesInput
    conversation?: ConversationCreateNestedOneWithoutMatchesInput
    outcome?: MatchOutcomeCreateNestedOneWithoutMatchInput
  }

  export type MatchResultUncheckedCreateWithoutUserInput = {
    id?: string
    personaId: string
    intakeId?: string | null
    score: number
    eligibilityScore?: number
    readinessScore?: number
    constraintFitScore?: number
    expertiseFitScore?: number
    relationshipFitScore?: number
    timingFitScore?: number
    outcomeScore?: number
    reasons?: string | null
    risks?: string | null
    rationale?: string | null
    status?: $Enums.MatchStatus
    revealAuthorizedAt?: Date | string | null
    revealedAt?: Date | string | null
    revokedAt?: Date | string | null
    rawJson?: string | null
    conversationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outcome?: MatchOutcomeUncheckedCreateNestedOneWithoutMatchInput
  }

  export type MatchResultCreateOrConnectWithoutUserInput = {
    where: MatchResultWhereUniqueInput
    create: XOR<MatchResultCreateWithoutUserInput, MatchResultUncheckedCreateWithoutUserInput>
  }

  export type MatchResultCreateManyUserInputEnvelope = {
    data: MatchResultCreateManyUserInput | MatchResultCreateManyUserInput[]
  }

  export type ReputationProfileCreateWithoutUserInput = {
    id?: string
    responseRate?: number
    meetingShowRate?: number
    followThroughRate?: number
    introQualityScore?: number
    ecosystemContributionScore?: number
    complaintCount?: number
    trustTier?: $Enums.TrustTier
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReputationProfileUncheckedCreateWithoutUserInput = {
    id?: string
    responseRate?: number
    meetingShowRate?: number
    followThroughRate?: number
    introQualityScore?: number
    ecosystemContributionScore?: number
    complaintCount?: number
    trustTier?: $Enums.TrustTier
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReputationProfileCreateOrConnectWithoutUserInput = {
    where: ReputationProfileWhereUniqueInput
    create: XOR<ReputationProfileCreateWithoutUserInput, ReputationProfileUncheckedCreateWithoutUserInput>
  }

  export type IntakeProfileCreateWithoutUserInput = {
    id?: string
    stageEvidence: string
    commercializationBlocker: string
    requestedOutcome: string
    technicalMaturity: number
    regulatoryExposure: string
    fundingStatus: string
    customerDiscoveryEvidence: string
    introSensitivity: string
    geographicRelevance: string
    urgencyReason: string
    missingInfoFlags: string
    readinessScore: number
    conversationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntakeProfileUncheckedCreateWithoutUserInput = {
    id?: string
    stageEvidence: string
    commercializationBlocker: string
    requestedOutcome: string
    technicalMaturity: number
    regulatoryExposure: string
    fundingStatus: string
    customerDiscoveryEvidence: string
    introSensitivity: string
    geographicRelevance: string
    urgencyReason: string
    missingInfoFlags: string
    readinessScore: number
    conversationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntakeProfileCreateOrConnectWithoutUserInput = {
    where: IntakeProfileWhereUniqueInput
    create: XOR<IntakeProfileCreateWithoutUserInput, IntakeProfileUncheckedCreateWithoutUserInput>
  }

  export type IntakeProfileCreateManyUserInputEnvelope = {
    data: IntakeProfileCreateManyUserInput | IntakeProfileCreateManyUserInput[]
  }

  export type RevealAuditLogCreateWithoutUserInput = {
    id?: string
    matchId: string
    action: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type RevealAuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    matchId: string
    action: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type RevealAuditLogCreateOrConnectWithoutUserInput = {
    where: RevealAuditLogWhereUniqueInput
    create: XOR<RevealAuditLogCreateWithoutUserInput, RevealAuditLogUncheckedCreateWithoutUserInput>
  }

  export type RevealAuditLogCreateManyUserInputEnvelope = {
    data: RevealAuditLogCreateManyUserInput | RevealAuditLogCreateManyUserInput[]
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type ConversationUpsertWithWhereUniqueWithoutUserInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutUserInput, ConversationUncheckedUpdateWithoutUserInput>
    create: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutUserInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutUserInput, ConversationUncheckedUpdateWithoutUserInput>
  }

  export type ConversationUpdateManyWithWhereWithoutUserInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutUserInput>
  }

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    OR?: ConversationScalarWhereInput[]
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    id?: StringFilter<"Conversation"> | string
    userId?: StringFilter<"Conversation"> | string
    personaId?: StringNullableFilter<"Conversation"> | string | null
    title?: StringNullableFilter<"Conversation"> | string | null
    state?: StringFilter<"Conversation"> | string
    readinessScore?: FloatNullableFilter<"Conversation"> | number | null
    createdAt?: DateTimeFilter<"Conversation"> | Date | string
    updatedAt?: DateTimeFilter<"Conversation"> | Date | string
  }

  export type MatchResultUpsertWithWhereUniqueWithoutUserInput = {
    where: MatchResultWhereUniqueInput
    update: XOR<MatchResultUpdateWithoutUserInput, MatchResultUncheckedUpdateWithoutUserInput>
    create: XOR<MatchResultCreateWithoutUserInput, MatchResultUncheckedCreateWithoutUserInput>
  }

  export type MatchResultUpdateWithWhereUniqueWithoutUserInput = {
    where: MatchResultWhereUniqueInput
    data: XOR<MatchResultUpdateWithoutUserInput, MatchResultUncheckedUpdateWithoutUserInput>
  }

  export type MatchResultUpdateManyWithWhereWithoutUserInput = {
    where: MatchResultScalarWhereInput
    data: XOR<MatchResultUpdateManyMutationInput, MatchResultUncheckedUpdateManyWithoutUserInput>
  }

  export type MatchResultScalarWhereInput = {
    AND?: MatchResultScalarWhereInput | MatchResultScalarWhereInput[]
    OR?: MatchResultScalarWhereInput[]
    NOT?: MatchResultScalarWhereInput | MatchResultScalarWhereInput[]
    id?: StringFilter<"MatchResult"> | string
    userId?: StringFilter<"MatchResult"> | string
    personaId?: StringFilter<"MatchResult"> | string
    intakeId?: StringNullableFilter<"MatchResult"> | string | null
    score?: FloatFilter<"MatchResult"> | number
    eligibilityScore?: FloatFilter<"MatchResult"> | number
    readinessScore?: FloatFilter<"MatchResult"> | number
    constraintFitScore?: FloatFilter<"MatchResult"> | number
    expertiseFitScore?: FloatFilter<"MatchResult"> | number
    relationshipFitScore?: FloatFilter<"MatchResult"> | number
    timingFitScore?: FloatFilter<"MatchResult"> | number
    outcomeScore?: FloatFilter<"MatchResult"> | number
    reasons?: StringNullableFilter<"MatchResult"> | string | null
    risks?: StringNullableFilter<"MatchResult"> | string | null
    rationale?: StringNullableFilter<"MatchResult"> | string | null
    status?: EnumMatchStatusFilter<"MatchResult"> | $Enums.MatchStatus
    revealAuthorizedAt?: DateTimeNullableFilter<"MatchResult"> | Date | string | null
    revealedAt?: DateTimeNullableFilter<"MatchResult"> | Date | string | null
    revokedAt?: DateTimeNullableFilter<"MatchResult"> | Date | string | null
    rawJson?: StringNullableFilter<"MatchResult"> | string | null
    conversationId?: StringNullableFilter<"MatchResult"> | string | null
    createdAt?: DateTimeFilter<"MatchResult"> | Date | string
    updatedAt?: DateTimeFilter<"MatchResult"> | Date | string
  }

  export type ReputationProfileUpsertWithoutUserInput = {
    update: XOR<ReputationProfileUpdateWithoutUserInput, ReputationProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ReputationProfileCreateWithoutUserInput, ReputationProfileUncheckedCreateWithoutUserInput>
    where?: ReputationProfileWhereInput
  }

  export type ReputationProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ReputationProfileWhereInput
    data: XOR<ReputationProfileUpdateWithoutUserInput, ReputationProfileUncheckedUpdateWithoutUserInput>
  }

  export type ReputationProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseRate?: FloatFieldUpdateOperationsInput | number
    meetingShowRate?: FloatFieldUpdateOperationsInput | number
    followThroughRate?: FloatFieldUpdateOperationsInput | number
    introQualityScore?: FloatFieldUpdateOperationsInput | number
    ecosystemContributionScore?: FloatFieldUpdateOperationsInput | number
    complaintCount?: IntFieldUpdateOperationsInput | number
    trustTier?: EnumTrustTierFieldUpdateOperationsInput | $Enums.TrustTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReputationProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    responseRate?: FloatFieldUpdateOperationsInput | number
    meetingShowRate?: FloatFieldUpdateOperationsInput | number
    followThroughRate?: FloatFieldUpdateOperationsInput | number
    introQualityScore?: FloatFieldUpdateOperationsInput | number
    ecosystemContributionScore?: FloatFieldUpdateOperationsInput | number
    complaintCount?: IntFieldUpdateOperationsInput | number
    trustTier?: EnumTrustTierFieldUpdateOperationsInput | $Enums.TrustTier
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeProfileUpsertWithWhereUniqueWithoutUserInput = {
    where: IntakeProfileWhereUniqueInput
    update: XOR<IntakeProfileUpdateWithoutUserInput, IntakeProfileUncheckedUpdateWithoutUserInput>
    create: XOR<IntakeProfileCreateWithoutUserInput, IntakeProfileUncheckedCreateWithoutUserInput>
  }

  export type IntakeProfileUpdateWithWhereUniqueWithoutUserInput = {
    where: IntakeProfileWhereUniqueInput
    data: XOR<IntakeProfileUpdateWithoutUserInput, IntakeProfileUncheckedUpdateWithoutUserInput>
  }

  export type IntakeProfileUpdateManyWithWhereWithoutUserInput = {
    where: IntakeProfileScalarWhereInput
    data: XOR<IntakeProfileUpdateManyMutationInput, IntakeProfileUncheckedUpdateManyWithoutUserInput>
  }

  export type IntakeProfileScalarWhereInput = {
    AND?: IntakeProfileScalarWhereInput | IntakeProfileScalarWhereInput[]
    OR?: IntakeProfileScalarWhereInput[]
    NOT?: IntakeProfileScalarWhereInput | IntakeProfileScalarWhereInput[]
    id?: StringFilter<"IntakeProfile"> | string
    userId?: StringFilter<"IntakeProfile"> | string
    stageEvidence?: StringFilter<"IntakeProfile"> | string
    commercializationBlocker?: StringFilter<"IntakeProfile"> | string
    requestedOutcome?: StringFilter<"IntakeProfile"> | string
    technicalMaturity?: FloatFilter<"IntakeProfile"> | number
    regulatoryExposure?: StringFilter<"IntakeProfile"> | string
    fundingStatus?: StringFilter<"IntakeProfile"> | string
    customerDiscoveryEvidence?: StringFilter<"IntakeProfile"> | string
    introSensitivity?: StringFilter<"IntakeProfile"> | string
    geographicRelevance?: StringFilter<"IntakeProfile"> | string
    urgencyReason?: StringFilter<"IntakeProfile"> | string
    missingInfoFlags?: StringFilter<"IntakeProfile"> | string
    readinessScore?: FloatFilter<"IntakeProfile"> | number
    conversationId?: StringNullableFilter<"IntakeProfile"> | string | null
    createdAt?: DateTimeFilter<"IntakeProfile"> | Date | string
    updatedAt?: DateTimeFilter<"IntakeProfile"> | Date | string
  }

  export type RevealAuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: RevealAuditLogWhereUniqueInput
    update: XOR<RevealAuditLogUpdateWithoutUserInput, RevealAuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<RevealAuditLogCreateWithoutUserInput, RevealAuditLogUncheckedCreateWithoutUserInput>
  }

  export type RevealAuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: RevealAuditLogWhereUniqueInput
    data: XOR<RevealAuditLogUpdateWithoutUserInput, RevealAuditLogUncheckedUpdateWithoutUserInput>
  }

  export type RevealAuditLogUpdateManyWithWhereWithoutUserInput = {
    where: RevealAuditLogScalarWhereInput
    data: XOR<RevealAuditLogUpdateManyMutationInput, RevealAuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type RevealAuditLogScalarWhereInput = {
    AND?: RevealAuditLogScalarWhereInput | RevealAuditLogScalarWhereInput[]
    OR?: RevealAuditLogScalarWhereInput[]
    NOT?: RevealAuditLogScalarWhereInput | RevealAuditLogScalarWhereInput[]
    id?: StringFilter<"RevealAuditLog"> | string
    userId?: StringFilter<"RevealAuditLog"> | string
    matchId?: StringFilter<"RevealAuditLog"> | string
    action?: StringFilter<"RevealAuditLog"> | string
    metadata?: StringNullableFilter<"RevealAuditLog"> | string | null
    createdAt?: DateTimeFilter<"RevealAuditLog"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    roleType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationCreateNestedManyWithoutUserInput
    matches?: MatchResultCreateNestedManyWithoutUserInput
    reputation?: ReputationProfileCreateNestedOneWithoutUserInput
    intakeProfiles?: IntakeProfileCreateNestedManyWithoutUserInput
    auditLogs?: RevealAuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    roleType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchResultUncheckedCreateNestedManyWithoutUserInput
    reputation?: ReputationProfileUncheckedCreateNestedOneWithoutUserInput
    intakeProfiles?: IntakeProfileUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: RevealAuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    matches?: MatchResultUpdateManyWithoutUserNestedInput
    reputation?: ReputationProfileUpdateOneWithoutUserNestedInput
    intakeProfiles?: IntakeProfileUpdateManyWithoutUserNestedInput
    auditLogs?: RevealAuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchResultUncheckedUpdateManyWithoutUserNestedInput
    reputation?: ReputationProfileUncheckedUpdateOneWithoutUserNestedInput
    intakeProfiles?: IntakeProfileUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: RevealAuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConversationCreateWithoutPersonaInput = {
    id?: string
    title?: string | null
    state?: string
    readinessScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
    matches?: MatchResultCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutPersonaInput = {
    id?: string
    userId: string
    title?: string | null
    state?: string
    readinessScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
    matches?: MatchResultUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutPersonaInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutPersonaInput, ConversationUncheckedCreateWithoutPersonaInput>
  }

  export type ConversationCreateManyPersonaInputEnvelope = {
    data: ConversationCreateManyPersonaInput | ConversationCreateManyPersonaInput[]
  }

  export type MatchResultCreateWithoutPersonaInput = {
    id?: string
    intakeId?: string | null
    score: number
    eligibilityScore?: number
    readinessScore?: number
    constraintFitScore?: number
    expertiseFitScore?: number
    relationshipFitScore?: number
    timingFitScore?: number
    outcomeScore?: number
    reasons?: string | null
    risks?: string | null
    rationale?: string | null
    status?: $Enums.MatchStatus
    revealAuthorizedAt?: Date | string | null
    revealedAt?: Date | string | null
    revokedAt?: Date | string | null
    rawJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMatchesInput
    conversation?: ConversationCreateNestedOneWithoutMatchesInput
    outcome?: MatchOutcomeCreateNestedOneWithoutMatchInput
  }

  export type MatchResultUncheckedCreateWithoutPersonaInput = {
    id?: string
    userId: string
    intakeId?: string | null
    score: number
    eligibilityScore?: number
    readinessScore?: number
    constraintFitScore?: number
    expertiseFitScore?: number
    relationshipFitScore?: number
    timingFitScore?: number
    outcomeScore?: number
    reasons?: string | null
    risks?: string | null
    rationale?: string | null
    status?: $Enums.MatchStatus
    revealAuthorizedAt?: Date | string | null
    revealedAt?: Date | string | null
    revokedAt?: Date | string | null
    rawJson?: string | null
    conversationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outcome?: MatchOutcomeUncheckedCreateNestedOneWithoutMatchInput
  }

  export type MatchResultCreateOrConnectWithoutPersonaInput = {
    where: MatchResultWhereUniqueInput
    create: XOR<MatchResultCreateWithoutPersonaInput, MatchResultUncheckedCreateWithoutPersonaInput>
  }

  export type MatchResultCreateManyPersonaInputEnvelope = {
    data: MatchResultCreateManyPersonaInput | MatchResultCreateManyPersonaInput[]
  }

  export type ConversationUpsertWithWhereUniqueWithoutPersonaInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutPersonaInput, ConversationUncheckedUpdateWithoutPersonaInput>
    create: XOR<ConversationCreateWithoutPersonaInput, ConversationUncheckedCreateWithoutPersonaInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutPersonaInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutPersonaInput, ConversationUncheckedUpdateWithoutPersonaInput>
  }

  export type ConversationUpdateManyWithWhereWithoutPersonaInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutPersonaInput>
  }

  export type MatchResultUpsertWithWhereUniqueWithoutPersonaInput = {
    where: MatchResultWhereUniqueInput
    update: XOR<MatchResultUpdateWithoutPersonaInput, MatchResultUncheckedUpdateWithoutPersonaInput>
    create: XOR<MatchResultCreateWithoutPersonaInput, MatchResultUncheckedCreateWithoutPersonaInput>
  }

  export type MatchResultUpdateWithWhereUniqueWithoutPersonaInput = {
    where: MatchResultWhereUniqueInput
    data: XOR<MatchResultUpdateWithoutPersonaInput, MatchResultUncheckedUpdateWithoutPersonaInput>
  }

  export type MatchResultUpdateManyWithWhereWithoutPersonaInput = {
    where: MatchResultScalarWhereInput
    data: XOR<MatchResultUpdateManyMutationInput, MatchResultUncheckedUpdateManyWithoutPersonaInput>
  }

  export type UserCreateWithoutIntakeProfilesInput = {
    id?: string
    name: string
    email: string
    roleType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
    matches?: MatchResultCreateNestedManyWithoutUserInput
    reputation?: ReputationProfileCreateNestedOneWithoutUserInput
    auditLogs?: RevealAuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIntakeProfilesInput = {
    id?: string
    name: string
    email: string
    roleType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchResultUncheckedCreateNestedManyWithoutUserInput
    reputation?: ReputationProfileUncheckedCreateNestedOneWithoutUserInput
    auditLogs?: RevealAuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIntakeProfilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIntakeProfilesInput, UserUncheckedCreateWithoutIntakeProfilesInput>
  }

  export type UserUpsertWithoutIntakeProfilesInput = {
    update: XOR<UserUpdateWithoutIntakeProfilesInput, UserUncheckedUpdateWithoutIntakeProfilesInput>
    create: XOR<UserCreateWithoutIntakeProfilesInput, UserUncheckedCreateWithoutIntakeProfilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIntakeProfilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIntakeProfilesInput, UserUncheckedUpdateWithoutIntakeProfilesInput>
  }

  export type UserUpdateWithoutIntakeProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    matches?: MatchResultUpdateManyWithoutUserNestedInput
    reputation?: ReputationProfileUpdateOneWithoutUserNestedInput
    auditLogs?: RevealAuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIntakeProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchResultUncheckedUpdateManyWithoutUserNestedInput
    reputation?: ReputationProfileUncheckedUpdateOneWithoutUserNestedInput
    auditLogs?: RevealAuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutConversationsInput = {
    id?: string
    name: string
    email: string
    roleType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    matches?: MatchResultCreateNestedManyWithoutUserInput
    reputation?: ReputationProfileCreateNestedOneWithoutUserInput
    intakeProfiles?: IntakeProfileCreateNestedManyWithoutUserInput
    auditLogs?: RevealAuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConversationsInput = {
    id?: string
    name: string
    email: string
    roleType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchResultUncheckedCreateNestedManyWithoutUserInput
    reputation?: ReputationProfileUncheckedCreateNestedOneWithoutUserInput
    intakeProfiles?: IntakeProfileUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: RevealAuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConversationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
  }

  export type PersonaCreateWithoutConversationsInput = {
    id?: string
    name: string
    personaType: string
    title?: string | null
    organization?: string | null
    background: string
    goals: string
    skills: string
    industries: string
    stagePreference?: string | null
    availability?: string | null
    capacity?: number
    currentLoad?: number
    riskTolerance?: string | null
    missionInterests?: string | null
    avatarUrl?: string | null
    profileJson?: string | null
    isHighValue?: boolean
    createdAt?: Date | string
    matches?: MatchResultCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUncheckedCreateWithoutConversationsInput = {
    id?: string
    name: string
    personaType: string
    title?: string | null
    organization?: string | null
    background: string
    goals: string
    skills: string
    industries: string
    stagePreference?: string | null
    availability?: string | null
    capacity?: number
    currentLoad?: number
    riskTolerance?: string | null
    missionInterests?: string | null
    avatarUrl?: string | null
    profileJson?: string | null
    isHighValue?: boolean
    createdAt?: Date | string
    matches?: MatchResultUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type PersonaCreateOrConnectWithoutConversationsInput = {
    where: PersonaWhereUniqueInput
    create: XOR<PersonaCreateWithoutConversationsInput, PersonaUncheckedCreateWithoutConversationsInput>
  }

  export type MessageCreateWithoutConversationInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutConversationInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutConversationInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageCreateManyConversationInputEnvelope = {
    data: MessageCreateManyConversationInput | MessageCreateManyConversationInput[]
  }

  export type MatchResultCreateWithoutConversationInput = {
    id?: string
    intakeId?: string | null
    score: number
    eligibilityScore?: number
    readinessScore?: number
    constraintFitScore?: number
    expertiseFitScore?: number
    relationshipFitScore?: number
    timingFitScore?: number
    outcomeScore?: number
    reasons?: string | null
    risks?: string | null
    rationale?: string | null
    status?: $Enums.MatchStatus
    revealAuthorizedAt?: Date | string | null
    revealedAt?: Date | string | null
    revokedAt?: Date | string | null
    rawJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMatchesInput
    persona?: PersonaCreateNestedOneWithoutMatchesInput
    outcome?: MatchOutcomeCreateNestedOneWithoutMatchInput
  }

  export type MatchResultUncheckedCreateWithoutConversationInput = {
    id?: string
    userId: string
    personaId: string
    intakeId?: string | null
    score: number
    eligibilityScore?: number
    readinessScore?: number
    constraintFitScore?: number
    expertiseFitScore?: number
    relationshipFitScore?: number
    timingFitScore?: number
    outcomeScore?: number
    reasons?: string | null
    risks?: string | null
    rationale?: string | null
    status?: $Enums.MatchStatus
    revealAuthorizedAt?: Date | string | null
    revealedAt?: Date | string | null
    revokedAt?: Date | string | null
    rawJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    outcome?: MatchOutcomeUncheckedCreateNestedOneWithoutMatchInput
  }

  export type MatchResultCreateOrConnectWithoutConversationInput = {
    where: MatchResultWhereUniqueInput
    create: XOR<MatchResultCreateWithoutConversationInput, MatchResultUncheckedCreateWithoutConversationInput>
  }

  export type MatchResultCreateManyConversationInputEnvelope = {
    data: MatchResultCreateManyConversationInput | MatchResultCreateManyConversationInput[]
  }

  export type UserUpsertWithoutConversationsInput = {
    update: XOR<UserUpdateWithoutConversationsInput, UserUncheckedUpdateWithoutConversationsInput>
    create: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConversationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConversationsInput, UserUncheckedUpdateWithoutConversationsInput>
  }

  export type UserUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    matches?: MatchResultUpdateManyWithoutUserNestedInput
    reputation?: ReputationProfileUpdateOneWithoutUserNestedInput
    intakeProfiles?: IntakeProfileUpdateManyWithoutUserNestedInput
    auditLogs?: RevealAuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchResultUncheckedUpdateManyWithoutUserNestedInput
    reputation?: ReputationProfileUncheckedUpdateOneWithoutUserNestedInput
    intakeProfiles?: IntakeProfileUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: RevealAuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PersonaUpsertWithoutConversationsInput = {
    update: XOR<PersonaUpdateWithoutConversationsInput, PersonaUncheckedUpdateWithoutConversationsInput>
    create: XOR<PersonaCreateWithoutConversationsInput, PersonaUncheckedCreateWithoutConversationsInput>
    where?: PersonaWhereInput
  }

  export type PersonaUpdateToOneWithWhereWithoutConversationsInput = {
    where?: PersonaWhereInput
    data: XOR<PersonaUpdateWithoutConversationsInput, PersonaUncheckedUpdateWithoutConversationsInput>
  }

  export type PersonaUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personaType?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    background?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    industries?: StringFieldUpdateOperationsInput | string
    stagePreference?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    riskTolerance?: NullableStringFieldUpdateOperationsInput | string | null
    missionInterests?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileJson?: NullableStringFieldUpdateOperationsInput | string | null
    isHighValue?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchResultUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaUncheckedUpdateWithoutConversationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personaType?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    background?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    industries?: StringFieldUpdateOperationsInput | string
    stagePreference?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    riskTolerance?: NullableStringFieldUpdateOperationsInput | string | null
    missionInterests?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileJson?: NullableStringFieldUpdateOperationsInput | string | null
    isHighValue?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchResultUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
    create: XOR<MessageCreateWithoutConversationInput, MessageUncheckedCreateWithoutConversationInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutConversationInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutConversationInput, MessageUncheckedUpdateWithoutConversationInput>
  }

  export type MessageUpdateManyWithWhereWithoutConversationInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutConversationInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    conversationId?: StringFilter<"Message"> | string
    role?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MatchResultUpsertWithWhereUniqueWithoutConversationInput = {
    where: MatchResultWhereUniqueInput
    update: XOR<MatchResultUpdateWithoutConversationInput, MatchResultUncheckedUpdateWithoutConversationInput>
    create: XOR<MatchResultCreateWithoutConversationInput, MatchResultUncheckedCreateWithoutConversationInput>
  }

  export type MatchResultUpdateWithWhereUniqueWithoutConversationInput = {
    where: MatchResultWhereUniqueInput
    data: XOR<MatchResultUpdateWithoutConversationInput, MatchResultUncheckedUpdateWithoutConversationInput>
  }

  export type MatchResultUpdateManyWithWhereWithoutConversationInput = {
    where: MatchResultScalarWhereInput
    data: XOR<MatchResultUpdateManyMutationInput, MatchResultUncheckedUpdateManyWithoutConversationInput>
  }

  export type ConversationCreateWithoutMessagesInput = {
    id?: string
    title?: string | null
    state?: string
    readinessScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConversationsInput
    persona?: PersonaCreateNestedOneWithoutConversationsInput
    matches?: MatchResultCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: string
    personaId?: string | null
    title?: string | null
    state?: string
    readinessScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    matches?: MatchResultUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutMessagesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
  }

  export type ConversationUpsertWithoutMessagesInput = {
    update: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
    create: XOR<ConversationCreateWithoutMessagesInput, ConversationUncheckedCreateWithoutMessagesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMessagesInput, ConversationUncheckedUpdateWithoutMessagesInput>
  }

  export type ConversationUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    readinessScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConversationsNestedInput
    persona?: PersonaUpdateOneWithoutConversationsNestedInput
    matches?: MatchResultUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    personaId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    readinessScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchResultUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type UserCreateWithoutMatchesInput = {
    id?: string
    name: string
    email: string
    roleType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
    reputation?: ReputationProfileCreateNestedOneWithoutUserInput
    intakeProfiles?: IntakeProfileCreateNestedManyWithoutUserInput
    auditLogs?: RevealAuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMatchesInput = {
    id?: string
    name: string
    email: string
    roleType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    reputation?: ReputationProfileUncheckedCreateNestedOneWithoutUserInput
    intakeProfiles?: IntakeProfileUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: RevealAuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMatchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
  }

  export type PersonaCreateWithoutMatchesInput = {
    id?: string
    name: string
    personaType: string
    title?: string | null
    organization?: string | null
    background: string
    goals: string
    skills: string
    industries: string
    stagePreference?: string | null
    availability?: string | null
    capacity?: number
    currentLoad?: number
    riskTolerance?: string | null
    missionInterests?: string | null
    avatarUrl?: string | null
    profileJson?: string | null
    isHighValue?: boolean
    createdAt?: Date | string
    conversations?: ConversationCreateNestedManyWithoutPersonaInput
  }

  export type PersonaUncheckedCreateWithoutMatchesInput = {
    id?: string
    name: string
    personaType: string
    title?: string | null
    organization?: string | null
    background: string
    goals: string
    skills: string
    industries: string
    stagePreference?: string | null
    availability?: string | null
    capacity?: number
    currentLoad?: number
    riskTolerance?: string | null
    missionInterests?: string | null
    avatarUrl?: string | null
    profileJson?: string | null
    isHighValue?: boolean
    createdAt?: Date | string
    conversations?: ConversationUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type PersonaCreateOrConnectWithoutMatchesInput = {
    where: PersonaWhereUniqueInput
    create: XOR<PersonaCreateWithoutMatchesInput, PersonaUncheckedCreateWithoutMatchesInput>
  }

  export type ConversationCreateWithoutMatchesInput = {
    id?: string
    title?: string | null
    state?: string
    readinessScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutConversationsInput
    persona?: PersonaCreateNestedOneWithoutConversationsInput
    messages?: MessageCreateNestedManyWithoutConversationInput
  }

  export type ConversationUncheckedCreateWithoutMatchesInput = {
    id?: string
    userId: string
    personaId?: string | null
    title?: string | null
    state?: string
    readinessScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: MessageUncheckedCreateNestedManyWithoutConversationInput
  }

  export type ConversationCreateOrConnectWithoutMatchesInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutMatchesInput, ConversationUncheckedCreateWithoutMatchesInput>
  }

  export type MatchOutcomeCreateWithoutMatchInput = {
    id?: string
    introRequestedAt?: Date | string | null
    introApprovedAt?: Date | string | null
    meetingOccurredAt?: Date | string | null
    followUpOccurred?: boolean
    result?: $Enums.MatchOutcomeResult
    founderRating?: number | null
    expertRating?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchOutcomeUncheckedCreateWithoutMatchInput = {
    id?: string
    introRequestedAt?: Date | string | null
    introApprovedAt?: Date | string | null
    meetingOccurredAt?: Date | string | null
    followUpOccurred?: boolean
    result?: $Enums.MatchOutcomeResult
    founderRating?: number | null
    expertRating?: number | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchOutcomeCreateOrConnectWithoutMatchInput = {
    where: MatchOutcomeWhereUniqueInput
    create: XOR<MatchOutcomeCreateWithoutMatchInput, MatchOutcomeUncheckedCreateWithoutMatchInput>
  }

  export type UserUpsertWithoutMatchesInput = {
    update: XOR<UserUpdateWithoutMatchesInput, UserUncheckedUpdateWithoutMatchesInput>
    create: XOR<UserCreateWithoutMatchesInput, UserUncheckedCreateWithoutMatchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesInput, UserUncheckedUpdateWithoutMatchesInput>
  }

  export type UserUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    reputation?: ReputationProfileUpdateOneWithoutUserNestedInput
    intakeProfiles?: IntakeProfileUpdateManyWithoutUserNestedInput
    auditLogs?: RevealAuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    reputation?: ReputationProfileUncheckedUpdateOneWithoutUserNestedInput
    intakeProfiles?: IntakeProfileUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: RevealAuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PersonaUpsertWithoutMatchesInput = {
    update: XOR<PersonaUpdateWithoutMatchesInput, PersonaUncheckedUpdateWithoutMatchesInput>
    create: XOR<PersonaCreateWithoutMatchesInput, PersonaUncheckedCreateWithoutMatchesInput>
    where?: PersonaWhereInput
  }

  export type PersonaUpdateToOneWithWhereWithoutMatchesInput = {
    where?: PersonaWhereInput
    data: XOR<PersonaUpdateWithoutMatchesInput, PersonaUncheckedUpdateWithoutMatchesInput>
  }

  export type PersonaUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personaType?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    background?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    industries?: StringFieldUpdateOperationsInput | string
    stagePreference?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    riskTolerance?: NullableStringFieldUpdateOperationsInput | string | null
    missionInterests?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileJson?: NullableStringFieldUpdateOperationsInput | string | null
    isHighValue?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUpdateManyWithoutPersonaNestedInput
  }

  export type PersonaUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personaType?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: NullableStringFieldUpdateOperationsInput | string | null
    background?: StringFieldUpdateOperationsInput | string
    goals?: StringFieldUpdateOperationsInput | string
    skills?: StringFieldUpdateOperationsInput | string
    industries?: StringFieldUpdateOperationsInput | string
    stagePreference?: NullableStringFieldUpdateOperationsInput | string | null
    availability?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    riskTolerance?: NullableStringFieldUpdateOperationsInput | string | null
    missionInterests?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    profileJson?: NullableStringFieldUpdateOperationsInput | string | null
    isHighValue?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conversations?: ConversationUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type ConversationUpsertWithoutMatchesInput = {
    update: XOR<ConversationUpdateWithoutMatchesInput, ConversationUncheckedUpdateWithoutMatchesInput>
    create: XOR<ConversationCreateWithoutMatchesInput, ConversationUncheckedCreateWithoutMatchesInput>
    where?: ConversationWhereInput
  }

  export type ConversationUpdateToOneWithWhereWithoutMatchesInput = {
    where?: ConversationWhereInput
    data: XOR<ConversationUpdateWithoutMatchesInput, ConversationUncheckedUpdateWithoutMatchesInput>
  }

  export type ConversationUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    readinessScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConversationsNestedInput
    persona?: PersonaUpdateOneWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    personaId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    readinessScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type MatchOutcomeUpsertWithoutMatchInput = {
    update: XOR<MatchOutcomeUpdateWithoutMatchInput, MatchOutcomeUncheckedUpdateWithoutMatchInput>
    create: XOR<MatchOutcomeCreateWithoutMatchInput, MatchOutcomeUncheckedCreateWithoutMatchInput>
    where?: MatchOutcomeWhereInput
  }

  export type MatchOutcomeUpdateToOneWithWhereWithoutMatchInput = {
    where?: MatchOutcomeWhereInput
    data: XOR<MatchOutcomeUpdateWithoutMatchInput, MatchOutcomeUncheckedUpdateWithoutMatchInput>
  }

  export type MatchOutcomeUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    introRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    introApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingOccurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpOccurred?: BoolFieldUpdateOperationsInput | boolean
    result?: EnumMatchOutcomeResultFieldUpdateOperationsInput | $Enums.MatchOutcomeResult
    founderRating?: NullableIntFieldUpdateOperationsInput | number | null
    expertRating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchOutcomeUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    introRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    introApprovedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    meetingOccurredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    followUpOccurred?: BoolFieldUpdateOperationsInput | boolean
    result?: EnumMatchOutcomeResultFieldUpdateOperationsInput | $Enums.MatchOutcomeResult
    founderRating?: NullableIntFieldUpdateOperationsInput | number | null
    expertRating?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultCreateWithoutOutcomeInput = {
    id?: string
    intakeId?: string | null
    score: number
    eligibilityScore?: number
    readinessScore?: number
    constraintFitScore?: number
    expertiseFitScore?: number
    relationshipFitScore?: number
    timingFitScore?: number
    outcomeScore?: number
    reasons?: string | null
    risks?: string | null
    rationale?: string | null
    status?: $Enums.MatchStatus
    revealAuthorizedAt?: Date | string | null
    revealedAt?: Date | string | null
    revokedAt?: Date | string | null
    rawJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMatchesInput
    persona?: PersonaCreateNestedOneWithoutMatchesInput
    conversation?: ConversationCreateNestedOneWithoutMatchesInput
  }

  export type MatchResultUncheckedCreateWithoutOutcomeInput = {
    id?: string
    userId: string
    personaId: string
    intakeId?: string | null
    score: number
    eligibilityScore?: number
    readinessScore?: number
    constraintFitScore?: number
    expertiseFitScore?: number
    relationshipFitScore?: number
    timingFitScore?: number
    outcomeScore?: number
    reasons?: string | null
    risks?: string | null
    rationale?: string | null
    status?: $Enums.MatchStatus
    revealAuthorizedAt?: Date | string | null
    revealedAt?: Date | string | null
    revokedAt?: Date | string | null
    rawJson?: string | null
    conversationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchResultCreateOrConnectWithoutOutcomeInput = {
    where: MatchResultWhereUniqueInput
    create: XOR<MatchResultCreateWithoutOutcomeInput, MatchResultUncheckedCreateWithoutOutcomeInput>
  }

  export type MatchResultUpsertWithoutOutcomeInput = {
    update: XOR<MatchResultUpdateWithoutOutcomeInput, MatchResultUncheckedUpdateWithoutOutcomeInput>
    create: XOR<MatchResultCreateWithoutOutcomeInput, MatchResultUncheckedCreateWithoutOutcomeInput>
    where?: MatchResultWhereInput
  }

  export type MatchResultUpdateToOneWithWhereWithoutOutcomeInput = {
    where?: MatchResultWhereInput
    data: XOR<MatchResultUpdateWithoutOutcomeInput, MatchResultUncheckedUpdateWithoutOutcomeInput>
  }

  export type MatchResultUpdateWithoutOutcomeInput = {
    id?: StringFieldUpdateOperationsInput | string
    intakeId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    eligibilityScore?: FloatFieldUpdateOperationsInput | number
    readinessScore?: FloatFieldUpdateOperationsInput | number
    constraintFitScore?: FloatFieldUpdateOperationsInput | number
    expertiseFitScore?: FloatFieldUpdateOperationsInput | number
    relationshipFitScore?: FloatFieldUpdateOperationsInput | number
    timingFitScore?: FloatFieldUpdateOperationsInput | number
    outcomeScore?: FloatFieldUpdateOperationsInput | number
    reasons?: NullableStringFieldUpdateOperationsInput | string | null
    risks?: NullableStringFieldUpdateOperationsInput | string | null
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    revealAuthorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMatchesNestedInput
    persona?: PersonaUpdateOneWithoutMatchesNestedInput
    conversation?: ConversationUpdateOneWithoutMatchesNestedInput
  }

  export type MatchResultUncheckedUpdateWithoutOutcomeInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    personaId?: StringFieldUpdateOperationsInput | string
    intakeId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    eligibilityScore?: FloatFieldUpdateOperationsInput | number
    readinessScore?: FloatFieldUpdateOperationsInput | number
    constraintFitScore?: FloatFieldUpdateOperationsInput | number
    expertiseFitScore?: FloatFieldUpdateOperationsInput | number
    relationshipFitScore?: FloatFieldUpdateOperationsInput | number
    timingFitScore?: FloatFieldUpdateOperationsInput | number
    outcomeScore?: FloatFieldUpdateOperationsInput | number
    reasons?: NullableStringFieldUpdateOperationsInput | string | null
    risks?: NullableStringFieldUpdateOperationsInput | string | null
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    revealAuthorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawJson?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutReputationInput = {
    id?: string
    name: string
    email: string
    roleType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
    matches?: MatchResultCreateNestedManyWithoutUserInput
    intakeProfiles?: IntakeProfileCreateNestedManyWithoutUserInput
    auditLogs?: RevealAuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReputationInput = {
    id?: string
    name: string
    email: string
    roleType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchResultUncheckedCreateNestedManyWithoutUserInput
    intakeProfiles?: IntakeProfileUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: RevealAuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReputationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReputationInput, UserUncheckedCreateWithoutReputationInput>
  }

  export type UserUpsertWithoutReputationInput = {
    update: XOR<UserUpdateWithoutReputationInput, UserUncheckedUpdateWithoutReputationInput>
    create: XOR<UserCreateWithoutReputationInput, UserUncheckedCreateWithoutReputationInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReputationInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReputationInput, UserUncheckedUpdateWithoutReputationInput>
  }

  export type UserUpdateWithoutReputationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    matches?: MatchResultUpdateManyWithoutUserNestedInput
    intakeProfiles?: IntakeProfileUpdateManyWithoutUserNestedInput
    auditLogs?: RevealAuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReputationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchResultUncheckedUpdateManyWithoutUserNestedInput
    intakeProfiles?: IntakeProfileUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: RevealAuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    email: string
    roleType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
    matches?: MatchResultCreateNestedManyWithoutUserInput
    reputation?: ReputationProfileCreateNestedOneWithoutUserInput
    intakeProfiles?: IntakeProfileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    email: string
    roleType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
    matches?: MatchResultUncheckedCreateNestedManyWithoutUserInput
    reputation?: ReputationProfileUncheckedCreateNestedOneWithoutUserInput
    intakeProfiles?: IntakeProfileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
    matches?: MatchResultUpdateManyWithoutUserNestedInput
    reputation?: ReputationProfileUpdateOneWithoutUserNestedInput
    intakeProfiles?: IntakeProfileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
    matches?: MatchResultUncheckedUpdateManyWithoutUserNestedInput
    reputation?: ReputationProfileUncheckedUpdateOneWithoutUserNestedInput
    intakeProfiles?: IntakeProfileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type ConversationCreateManyUserInput = {
    id?: string
    personaId?: string | null
    title?: string | null
    state?: string
    readinessScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchResultCreateManyUserInput = {
    id?: string
    personaId: string
    intakeId?: string | null
    score: number
    eligibilityScore?: number
    readinessScore?: number
    constraintFitScore?: number
    expertiseFitScore?: number
    relationshipFitScore?: number
    timingFitScore?: number
    outcomeScore?: number
    reasons?: string | null
    risks?: string | null
    rationale?: string | null
    status?: $Enums.MatchStatus
    revealAuthorizedAt?: Date | string | null
    revealedAt?: Date | string | null
    revokedAt?: Date | string | null
    rawJson?: string | null
    conversationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IntakeProfileCreateManyUserInput = {
    id?: string
    stageEvidence: string
    commercializationBlocker: string
    requestedOutcome: string
    technicalMaturity: number
    regulatoryExposure: string
    fundingStatus: string
    customerDiscoveryEvidence: string
    introSensitivity: string
    geographicRelevance: string
    urgencyReason: string
    missingInfoFlags: string
    readinessScore: number
    conversationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RevealAuditLogCreateManyUserInput = {
    id?: string
    matchId: string
    action: string
    metadata?: string | null
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    readinessScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    persona?: PersonaUpdateOneWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
    matches?: MatchResultUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    personaId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    readinessScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
    matches?: MatchResultUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    personaId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    readinessScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    intakeId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    eligibilityScore?: FloatFieldUpdateOperationsInput | number
    readinessScore?: FloatFieldUpdateOperationsInput | number
    constraintFitScore?: FloatFieldUpdateOperationsInput | number
    expertiseFitScore?: FloatFieldUpdateOperationsInput | number
    relationshipFitScore?: FloatFieldUpdateOperationsInput | number
    timingFitScore?: FloatFieldUpdateOperationsInput | number
    outcomeScore?: FloatFieldUpdateOperationsInput | number
    reasons?: NullableStringFieldUpdateOperationsInput | string | null
    risks?: NullableStringFieldUpdateOperationsInput | string | null
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    revealAuthorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    persona?: PersonaUpdateOneWithoutMatchesNestedInput
    conversation?: ConversationUpdateOneWithoutMatchesNestedInput
    outcome?: MatchOutcomeUpdateOneWithoutMatchNestedInput
  }

  export type MatchResultUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    personaId?: StringFieldUpdateOperationsInput | string
    intakeId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    eligibilityScore?: FloatFieldUpdateOperationsInput | number
    readinessScore?: FloatFieldUpdateOperationsInput | number
    constraintFitScore?: FloatFieldUpdateOperationsInput | number
    expertiseFitScore?: FloatFieldUpdateOperationsInput | number
    relationshipFitScore?: FloatFieldUpdateOperationsInput | number
    timingFitScore?: FloatFieldUpdateOperationsInput | number
    outcomeScore?: FloatFieldUpdateOperationsInput | number
    reasons?: NullableStringFieldUpdateOperationsInput | string | null
    risks?: NullableStringFieldUpdateOperationsInput | string | null
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    revealAuthorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawJson?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: MatchOutcomeUncheckedUpdateOneWithoutMatchNestedInput
  }

  export type MatchResultUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    personaId?: StringFieldUpdateOperationsInput | string
    intakeId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    eligibilityScore?: FloatFieldUpdateOperationsInput | number
    readinessScore?: FloatFieldUpdateOperationsInput | number
    constraintFitScore?: FloatFieldUpdateOperationsInput | number
    expertiseFitScore?: FloatFieldUpdateOperationsInput | number
    relationshipFitScore?: FloatFieldUpdateOperationsInput | number
    timingFitScore?: FloatFieldUpdateOperationsInput | number
    outcomeScore?: FloatFieldUpdateOperationsInput | number
    reasons?: NullableStringFieldUpdateOperationsInput | string | null
    risks?: NullableStringFieldUpdateOperationsInput | string | null
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    revealAuthorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawJson?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageEvidence?: StringFieldUpdateOperationsInput | string
    commercializationBlocker?: StringFieldUpdateOperationsInput | string
    requestedOutcome?: StringFieldUpdateOperationsInput | string
    technicalMaturity?: FloatFieldUpdateOperationsInput | number
    regulatoryExposure?: StringFieldUpdateOperationsInput | string
    fundingStatus?: StringFieldUpdateOperationsInput | string
    customerDiscoveryEvidence?: StringFieldUpdateOperationsInput | string
    introSensitivity?: StringFieldUpdateOperationsInput | string
    geographicRelevance?: StringFieldUpdateOperationsInput | string
    urgencyReason?: StringFieldUpdateOperationsInput | string
    missingInfoFlags?: StringFieldUpdateOperationsInput | string
    readinessScore?: FloatFieldUpdateOperationsInput | number
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageEvidence?: StringFieldUpdateOperationsInput | string
    commercializationBlocker?: StringFieldUpdateOperationsInput | string
    requestedOutcome?: StringFieldUpdateOperationsInput | string
    technicalMaturity?: FloatFieldUpdateOperationsInput | number
    regulatoryExposure?: StringFieldUpdateOperationsInput | string
    fundingStatus?: StringFieldUpdateOperationsInput | string
    customerDiscoveryEvidence?: StringFieldUpdateOperationsInput | string
    introSensitivity?: StringFieldUpdateOperationsInput | string
    geographicRelevance?: StringFieldUpdateOperationsInput | string
    urgencyReason?: StringFieldUpdateOperationsInput | string
    missingInfoFlags?: StringFieldUpdateOperationsInput | string
    readinessScore?: FloatFieldUpdateOperationsInput | number
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntakeProfileUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    stageEvidence?: StringFieldUpdateOperationsInput | string
    commercializationBlocker?: StringFieldUpdateOperationsInput | string
    requestedOutcome?: StringFieldUpdateOperationsInput | string
    technicalMaturity?: FloatFieldUpdateOperationsInput | number
    regulatoryExposure?: StringFieldUpdateOperationsInput | string
    fundingStatus?: StringFieldUpdateOperationsInput | string
    customerDiscoveryEvidence?: StringFieldUpdateOperationsInput | string
    introSensitivity?: StringFieldUpdateOperationsInput | string
    geographicRelevance?: StringFieldUpdateOperationsInput | string
    urgencyReason?: StringFieldUpdateOperationsInput | string
    missingInfoFlags?: StringFieldUpdateOperationsInput | string
    readinessScore?: FloatFieldUpdateOperationsInput | number
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevealAuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevealAuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevealAuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationCreateManyPersonaInput = {
    id?: string
    userId: string
    title?: string | null
    state?: string
    readinessScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchResultCreateManyPersonaInput = {
    id?: string
    userId: string
    intakeId?: string | null
    score: number
    eligibilityScore?: number
    readinessScore?: number
    constraintFitScore?: number
    expertiseFitScore?: number
    relationshipFitScore?: number
    timingFitScore?: number
    outcomeScore?: number
    reasons?: string | null
    risks?: string | null
    rationale?: string | null
    status?: $Enums.MatchStatus
    revealAuthorizedAt?: Date | string | null
    revealedAt?: Date | string | null
    revokedAt?: Date | string | null
    rawJson?: string | null
    conversationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConversationUpdateWithoutPersonaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    readinessScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutConversationsNestedInput
    messages?: MessageUpdateManyWithoutConversationNestedInput
    matches?: MatchResultUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateWithoutPersonaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    readinessScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: MessageUncheckedUpdateManyWithoutConversationNestedInput
    matches?: MatchResultUncheckedUpdateManyWithoutConversationNestedInput
  }

  export type ConversationUncheckedUpdateManyWithoutPersonaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    readinessScore?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultUpdateWithoutPersonaInput = {
    id?: StringFieldUpdateOperationsInput | string
    intakeId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    eligibilityScore?: FloatFieldUpdateOperationsInput | number
    readinessScore?: FloatFieldUpdateOperationsInput | number
    constraintFitScore?: FloatFieldUpdateOperationsInput | number
    expertiseFitScore?: FloatFieldUpdateOperationsInput | number
    relationshipFitScore?: FloatFieldUpdateOperationsInput | number
    timingFitScore?: FloatFieldUpdateOperationsInput | number
    outcomeScore?: FloatFieldUpdateOperationsInput | number
    reasons?: NullableStringFieldUpdateOperationsInput | string | null
    risks?: NullableStringFieldUpdateOperationsInput | string | null
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    revealAuthorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMatchesNestedInput
    conversation?: ConversationUpdateOneWithoutMatchesNestedInput
    outcome?: MatchOutcomeUpdateOneWithoutMatchNestedInput
  }

  export type MatchResultUncheckedUpdateWithoutPersonaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    intakeId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    eligibilityScore?: FloatFieldUpdateOperationsInput | number
    readinessScore?: FloatFieldUpdateOperationsInput | number
    constraintFitScore?: FloatFieldUpdateOperationsInput | number
    expertiseFitScore?: FloatFieldUpdateOperationsInput | number
    relationshipFitScore?: FloatFieldUpdateOperationsInput | number
    timingFitScore?: FloatFieldUpdateOperationsInput | number
    outcomeScore?: FloatFieldUpdateOperationsInput | number
    reasons?: NullableStringFieldUpdateOperationsInput | string | null
    risks?: NullableStringFieldUpdateOperationsInput | string | null
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    revealAuthorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawJson?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: MatchOutcomeUncheckedUpdateOneWithoutMatchNestedInput
  }

  export type MatchResultUncheckedUpdateManyWithoutPersonaInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    intakeId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    eligibilityScore?: FloatFieldUpdateOperationsInput | number
    readinessScore?: FloatFieldUpdateOperationsInput | number
    constraintFitScore?: FloatFieldUpdateOperationsInput | number
    expertiseFitScore?: FloatFieldUpdateOperationsInput | number
    relationshipFitScore?: FloatFieldUpdateOperationsInput | number
    timingFitScore?: FloatFieldUpdateOperationsInput | number
    outcomeScore?: FloatFieldUpdateOperationsInput | number
    reasons?: NullableStringFieldUpdateOperationsInput | string | null
    risks?: NullableStringFieldUpdateOperationsInput | string | null
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    revealAuthorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawJson?: NullableStringFieldUpdateOperationsInput | string | null
    conversationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyConversationInput = {
    id?: string
    role: string
    content: string
    createdAt?: Date | string
  }

  export type MatchResultCreateManyConversationInput = {
    id?: string
    userId: string
    personaId: string
    intakeId?: string | null
    score: number
    eligibilityScore?: number
    readinessScore?: number
    constraintFitScore?: number
    expertiseFitScore?: number
    relationshipFitScore?: number
    timingFitScore?: number
    outcomeScore?: number
    reasons?: string | null
    risks?: string | null
    rationale?: string | null
    status?: $Enums.MatchStatus
    revealAuthorizedAt?: Date | string | null
    revealedAt?: Date | string | null
    revokedAt?: Date | string | null
    rawJson?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchResultUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    intakeId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    eligibilityScore?: FloatFieldUpdateOperationsInput | number
    readinessScore?: FloatFieldUpdateOperationsInput | number
    constraintFitScore?: FloatFieldUpdateOperationsInput | number
    expertiseFitScore?: FloatFieldUpdateOperationsInput | number
    relationshipFitScore?: FloatFieldUpdateOperationsInput | number
    timingFitScore?: FloatFieldUpdateOperationsInput | number
    outcomeScore?: FloatFieldUpdateOperationsInput | number
    reasons?: NullableStringFieldUpdateOperationsInput | string | null
    risks?: NullableStringFieldUpdateOperationsInput | string | null
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    revealAuthorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMatchesNestedInput
    persona?: PersonaUpdateOneWithoutMatchesNestedInput
    outcome?: MatchOutcomeUpdateOneWithoutMatchNestedInput
  }

  export type MatchResultUncheckedUpdateWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    personaId?: StringFieldUpdateOperationsInput | string
    intakeId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    eligibilityScore?: FloatFieldUpdateOperationsInput | number
    readinessScore?: FloatFieldUpdateOperationsInput | number
    constraintFitScore?: FloatFieldUpdateOperationsInput | number
    expertiseFitScore?: FloatFieldUpdateOperationsInput | number
    relationshipFitScore?: FloatFieldUpdateOperationsInput | number
    timingFitScore?: FloatFieldUpdateOperationsInput | number
    outcomeScore?: FloatFieldUpdateOperationsInput | number
    reasons?: NullableStringFieldUpdateOperationsInput | string | null
    risks?: NullableStringFieldUpdateOperationsInput | string | null
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    revealAuthorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outcome?: MatchOutcomeUncheckedUpdateOneWithoutMatchNestedInput
  }

  export type MatchResultUncheckedUpdateManyWithoutConversationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    personaId?: StringFieldUpdateOperationsInput | string
    intakeId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    eligibilityScore?: FloatFieldUpdateOperationsInput | number
    readinessScore?: FloatFieldUpdateOperationsInput | number
    constraintFitScore?: FloatFieldUpdateOperationsInput | number
    expertiseFitScore?: FloatFieldUpdateOperationsInput | number
    relationshipFitScore?: FloatFieldUpdateOperationsInput | number
    timingFitScore?: FloatFieldUpdateOperationsInput | number
    outcomeScore?: FloatFieldUpdateOperationsInput | number
    reasons?: NullableStringFieldUpdateOperationsInput | string | null
    risks?: NullableStringFieldUpdateOperationsInput | string | null
    rationale?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMatchStatusFieldUpdateOperationsInput | $Enums.MatchStatus
    revealAuthorizedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rawJson?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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