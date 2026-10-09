
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
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderDocument
 * 
 */
export type OrderDocument = $Result.DefaultSelection<Prisma.$OrderDocumentPayload>
/**
 * Model DocumentPrintSpec
 * 
 */
export type DocumentPrintSpec = $Result.DefaultSelection<Prisma.$DocumentPrintSpecPayload>
/**
 * Model PrintAgent
 * 
 */
export type PrintAgent = $Result.DefaultSelection<Prisma.$PrintAgentPayload>
/**
 * Model Printer
 * 
 */
export type Printer = $Result.DefaultSelection<Prisma.$PrinterPayload>
/**
 * Model PrintJob
 * 
 */
export type PrintJob = $Result.DefaultSelection<Prisma.$PrintJobPayload>
/**
 * Model PricingRule
 * 
 */
export type PricingRule = $Result.DefaultSelection<Prisma.$PricingRulePayload>
/**
 * Model SubscriptionPlan
 * 
 */
export type SubscriptionPlan = $Result.DefaultSelection<Prisma.$SubscriptionPlanPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model DocumentStorage
 * 
 */
export type DocumentStorage = $Result.DefaultSelection<Prisma.$DocumentStoragePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Shops
 * const shops = await prisma.shop.findMany()
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
   * // Fetch zero or more Shops
   * const shops = await prisma.shop.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderDocument`: Exposes CRUD operations for the **OrderDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderDocuments
    * const orderDocuments = await prisma.orderDocument.findMany()
    * ```
    */
  get orderDocument(): Prisma.OrderDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentPrintSpec`: Exposes CRUD operations for the **DocumentPrintSpec** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentPrintSpecs
    * const documentPrintSpecs = await prisma.documentPrintSpec.findMany()
    * ```
    */
  get documentPrintSpec(): Prisma.DocumentPrintSpecDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.printAgent`: Exposes CRUD operations for the **PrintAgent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrintAgents
    * const printAgents = await prisma.printAgent.findMany()
    * ```
    */
  get printAgent(): Prisma.PrintAgentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.printer`: Exposes CRUD operations for the **Printer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Printers
    * const printers = await prisma.printer.findMany()
    * ```
    */
  get printer(): Prisma.PrinterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.printJob`: Exposes CRUD operations for the **PrintJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrintJobs
    * const printJobs = await prisma.printJob.findMany()
    * ```
    */
  get printJob(): Prisma.PrintJobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pricingRule`: Exposes CRUD operations for the **PricingRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PricingRules
    * const pricingRules = await prisma.pricingRule.findMany()
    * ```
    */
  get pricingRule(): Prisma.PricingRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionPlan`: Exposes CRUD operations for the **SubscriptionPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionPlans
    * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
    * ```
    */
  get subscriptionPlan(): Prisma.SubscriptionPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentStorage`: Exposes CRUD operations for the **DocumentStorage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentStorages
    * const documentStorages = await prisma.documentStorage.findMany()
    * ```
    */
  get documentStorage(): Prisma.DocumentStorageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
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
    Shop: 'Shop',
    User: 'User',
    Customer: 'Customer',
    Order: 'Order',
    OrderDocument: 'OrderDocument',
    DocumentPrintSpec: 'DocumentPrintSpec',
    PrintAgent: 'PrintAgent',
    Printer: 'Printer',
    PrintJob: 'PrintJob',
    PricingRule: 'PricingRule',
    SubscriptionPlan: 'SubscriptionPlan',
    Subscription: 'Subscription',
    AuditLog: 'AuditLog',
    DocumentStorage: 'DocumentStorage'
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
      modelProps: "shop" | "user" | "customer" | "order" | "orderDocument" | "documentPrintSpec" | "printAgent" | "printer" | "printJob" | "pricingRule" | "subscriptionPlan" | "subscription" | "auditLog" | "documentStorage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          createMany: {
            args: Prisma.ShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
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
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderDocument: {
        payload: Prisma.$OrderDocumentPayload<ExtArgs>
        fields: Prisma.OrderDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDocumentPayload>
          }
          findFirst: {
            args: Prisma.OrderDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDocumentPayload>
          }
          findMany: {
            args: Prisma.OrderDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDocumentPayload>[]
          }
          create: {
            args: Prisma.OrderDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDocumentPayload>
          }
          createMany: {
            args: Prisma.OrderDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDocumentPayload>
          }
          update: {
            args: Prisma.OrderDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDocumentPayload>
          }
          deleteMany: {
            args: Prisma.OrderDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderDocumentPayload>
          }
          aggregate: {
            args: Prisma.OrderDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderDocument>
          }
          groupBy: {
            args: Prisma.OrderDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<OrderDocumentCountAggregateOutputType> | number
          }
        }
      }
      DocumentPrintSpec: {
        payload: Prisma.$DocumentPrintSpecPayload<ExtArgs>
        fields: Prisma.DocumentPrintSpecFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentPrintSpecFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPrintSpecPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentPrintSpecFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPrintSpecPayload>
          }
          findFirst: {
            args: Prisma.DocumentPrintSpecFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPrintSpecPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentPrintSpecFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPrintSpecPayload>
          }
          findMany: {
            args: Prisma.DocumentPrintSpecFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPrintSpecPayload>[]
          }
          create: {
            args: Prisma.DocumentPrintSpecCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPrintSpecPayload>
          }
          createMany: {
            args: Prisma.DocumentPrintSpecCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DocumentPrintSpecDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPrintSpecPayload>
          }
          update: {
            args: Prisma.DocumentPrintSpecUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPrintSpecPayload>
          }
          deleteMany: {
            args: Prisma.DocumentPrintSpecDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentPrintSpecUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentPrintSpecUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPrintSpecPayload>
          }
          aggregate: {
            args: Prisma.DocumentPrintSpecAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentPrintSpec>
          }
          groupBy: {
            args: Prisma.DocumentPrintSpecGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentPrintSpecGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentPrintSpecCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentPrintSpecCountAggregateOutputType> | number
          }
        }
      }
      PrintAgent: {
        payload: Prisma.$PrintAgentPayload<ExtArgs>
        fields: Prisma.PrintAgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrintAgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintAgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrintAgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintAgentPayload>
          }
          findFirst: {
            args: Prisma.PrintAgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintAgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrintAgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintAgentPayload>
          }
          findMany: {
            args: Prisma.PrintAgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintAgentPayload>[]
          }
          create: {
            args: Prisma.PrintAgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintAgentPayload>
          }
          createMany: {
            args: Prisma.PrintAgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PrintAgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintAgentPayload>
          }
          update: {
            args: Prisma.PrintAgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintAgentPayload>
          }
          deleteMany: {
            args: Prisma.PrintAgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrintAgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PrintAgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintAgentPayload>
          }
          aggregate: {
            args: Prisma.PrintAgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrintAgent>
          }
          groupBy: {
            args: Prisma.PrintAgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrintAgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrintAgentCountArgs<ExtArgs>
            result: $Utils.Optional<PrintAgentCountAggregateOutputType> | number
          }
        }
      }
      Printer: {
        payload: Prisma.$PrinterPayload<ExtArgs>
        fields: Prisma.PrinterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrinterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrinterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          findFirst: {
            args: Prisma.PrinterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrinterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          findMany: {
            args: Prisma.PrinterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>[]
          }
          create: {
            args: Prisma.PrinterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          createMany: {
            args: Prisma.PrinterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PrinterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          update: {
            args: Prisma.PrinterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          deleteMany: {
            args: Prisma.PrinterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrinterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PrinterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrinterPayload>
          }
          aggregate: {
            args: Prisma.PrinterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrinter>
          }
          groupBy: {
            args: Prisma.PrinterGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrinterGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrinterCountArgs<ExtArgs>
            result: $Utils.Optional<PrinterCountAggregateOutputType> | number
          }
        }
      }
      PrintJob: {
        payload: Prisma.$PrintJobPayload<ExtArgs>
        fields: Prisma.PrintJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrintJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrintJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintJobPayload>
          }
          findFirst: {
            args: Prisma.PrintJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrintJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintJobPayload>
          }
          findMany: {
            args: Prisma.PrintJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintJobPayload>[]
          }
          create: {
            args: Prisma.PrintJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintJobPayload>
          }
          createMany: {
            args: Prisma.PrintJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PrintJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintJobPayload>
          }
          update: {
            args: Prisma.PrintJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintJobPayload>
          }
          deleteMany: {
            args: Prisma.PrintJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrintJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PrintJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrintJobPayload>
          }
          aggregate: {
            args: Prisma.PrintJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrintJob>
          }
          groupBy: {
            args: Prisma.PrintJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrintJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrintJobCountArgs<ExtArgs>
            result: $Utils.Optional<PrintJobCountAggregateOutputType> | number
          }
        }
      }
      PricingRule: {
        payload: Prisma.$PricingRulePayload<ExtArgs>
        fields: Prisma.PricingRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PricingRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PricingRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          findFirst: {
            args: Prisma.PricingRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PricingRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          findMany: {
            args: Prisma.PricingRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>[]
          }
          create: {
            args: Prisma.PricingRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          createMany: {
            args: Prisma.PricingRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PricingRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          update: {
            args: Prisma.PricingRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          deleteMany: {
            args: Prisma.PricingRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PricingRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PricingRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricingRulePayload>
          }
          aggregate: {
            args: Prisma.PricingRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePricingRule>
          }
          groupBy: {
            args: Prisma.PricingRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<PricingRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.PricingRuleCountArgs<ExtArgs>
            result: $Utils.Optional<PricingRuleCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionPlan: {
        payload: Prisma.$SubscriptionPlanPayload<ExtArgs>
        fields: Prisma.SubscriptionPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findMany: {
            args: Prisma.SubscriptionPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          create: {
            args: Prisma.SubscriptionPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          createMany: {
            args: Prisma.SubscriptionPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscriptionPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          update: {
            args: Prisma.SubscriptionPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionPlan>
          }
          groupBy: {
            args: Prisma.SubscriptionPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionPlanCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
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
      DocumentStorage: {
        payload: Prisma.$DocumentStoragePayload<ExtArgs>
        fields: Prisma.DocumentStorageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentStorageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentStoragePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentStorageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentStoragePayload>
          }
          findFirst: {
            args: Prisma.DocumentStorageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentStoragePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentStorageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentStoragePayload>
          }
          findMany: {
            args: Prisma.DocumentStorageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentStoragePayload>[]
          }
          create: {
            args: Prisma.DocumentStorageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentStoragePayload>
          }
          createMany: {
            args: Prisma.DocumentStorageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DocumentStorageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentStoragePayload>
          }
          update: {
            args: Prisma.DocumentStorageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentStoragePayload>
          }
          deleteMany: {
            args: Prisma.DocumentStorageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentStorageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DocumentStorageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentStoragePayload>
          }
          aggregate: {
            args: Prisma.DocumentStorageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentStorage>
          }
          groupBy: {
            args: Prisma.DocumentStorageGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentStorageGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentStorageCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentStorageCountAggregateOutputType> | number
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
    shop?: ShopOmit
    user?: UserOmit
    customer?: CustomerOmit
    order?: OrderOmit
    orderDocument?: OrderDocumentOmit
    documentPrintSpec?: DocumentPrintSpecOmit
    printAgent?: PrintAgentOmit
    printer?: PrinterOmit
    printJob?: PrintJobOmit
    pricingRule?: PricingRuleOmit
    subscriptionPlan?: SubscriptionPlanOmit
    subscription?: SubscriptionOmit
    auditLog?: AuditLogOmit
    documentStorage?: DocumentStorageOmit
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
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    auditLogs: number
    customers: number
    orders: number
    pricingRules: number
    printAgents: number
    printers: number
    users: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogs?: boolean | ShopCountOutputTypeCountAuditLogsArgs
    customers?: boolean | ShopCountOutputTypeCountCustomersArgs
    orders?: boolean | ShopCountOutputTypeCountOrdersArgs
    pricingRules?: boolean | ShopCountOutputTypeCountPricingRulesArgs
    printAgents?: boolean | ShopCountOutputTypeCountPrintAgentsArgs
    printers?: boolean | ShopCountOutputTypeCountPrintersArgs
    users?: boolean | ShopCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountPricingRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingRuleWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountPrintAgentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrintAgentWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountPrintersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrinterWhereInput
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    orders: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | CustomerCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    documents: number
    printJobs: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | OrderCountOutputTypeCountDocumentsArgs
    printJobs?: boolean | OrderCountOutputTypeCountPrintJobsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDocumentWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountPrintJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrintJobWhereInput
  }


  /**
   * Count Type OrderDocumentCountOutputType
   */

  export type OrderDocumentCountOutputType = {
    printJobs: number
  }

  export type OrderDocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    printJobs?: boolean | OrderDocumentCountOutputTypeCountPrintJobsArgs
  }

  // Custom InputTypes
  /**
   * OrderDocumentCountOutputType without action
   */
  export type OrderDocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDocumentCountOutputType
     */
    select?: OrderDocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderDocumentCountOutputType without action
   */
  export type OrderDocumentCountOutputTypeCountPrintJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrintJobWhereInput
  }


  /**
   * Count Type PrintAgentCountOutputType
   */

  export type PrintAgentCountOutputType = {
    printJobs: number
    printers: number
  }

  export type PrintAgentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    printJobs?: boolean | PrintAgentCountOutputTypeCountPrintJobsArgs
    printers?: boolean | PrintAgentCountOutputTypeCountPrintersArgs
  }

  // Custom InputTypes
  /**
   * PrintAgentCountOutputType without action
   */
  export type PrintAgentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintAgentCountOutputType
     */
    select?: PrintAgentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrintAgentCountOutputType without action
   */
  export type PrintAgentCountOutputTypeCountPrintJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrintJobWhereInput
  }

  /**
   * PrintAgentCountOutputType without action
   */
  export type PrintAgentCountOutputTypeCountPrintersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrinterWhereInput
  }


  /**
   * Count Type PrinterCountOutputType
   */

  export type PrinterCountOutputType = {
    printJobs: number
  }

  export type PrinterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    printJobs?: boolean | PrinterCountOutputTypeCountPrintJobsArgs
  }

  // Custom InputTypes
  /**
   * PrinterCountOutputType without action
   */
  export type PrinterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrinterCountOutputType
     */
    select?: PrinterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrinterCountOutputType without action
   */
  export type PrinterCountOutputTypeCountPrintJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrintJobWhereInput
  }


  /**
   * Count Type SubscriptionPlanCountOutputType
   */

  export type SubscriptionPlanCountOutputType = {
    subscriptions: number
  }

  export type SubscriptionPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | SubscriptionPlanCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanCountOutputType
     */
    select?: SubscriptionPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopMinAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    city: string | null
    state: string | null
    pincode: string | null
    gstNumber: string | null
    qrCodeUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    city: string | null
    state: string | null
    pincode: string | null
    gstNumber: string | null
    qrCodeUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    slug: number
    name: number
    phone: number
    email: number
    address: number
    city: number
    state: number
    pincode: number
    gstNumber: number
    qrCodeUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShopMinAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    city?: true
    state?: true
    pincode?: true
    gstNumber?: true
    qrCodeUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    city?: true
    state?: true
    pincode?: true
    gstNumber?: true
    qrCodeUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    slug?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    city?: true
    state?: true
    pincode?: true
    gstNumber?: true
    qrCodeUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: string
    slug: string
    name: string
    phone: string
    email: string
    address: string | null
    city: string | null
    state: string | null
    pincode: string | null
    gstNumber: string | null
    qrCodeUrl: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ShopCountAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    gstNumber?: boolean
    qrCodeUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auditLogs?: boolean | Shop$auditLogsArgs<ExtArgs>
    customers?: boolean | Shop$customersArgs<ExtArgs>
    orders?: boolean | Shop$ordersArgs<ExtArgs>
    pricingRules?: boolean | Shop$pricingRulesArgs<ExtArgs>
    printAgents?: boolean | Shop$printAgentsArgs<ExtArgs>
    printers?: boolean | Shop$printersArgs<ExtArgs>
    subscription?: boolean | Shop$subscriptionArgs<ExtArgs>
    users?: boolean | Shop$usersArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>



  export type ShopSelectScalar = {
    id?: boolean
    slug?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    gstNumber?: boolean
    qrCodeUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "name" | "phone" | "email" | "address" | "city" | "state" | "pincode" | "gstNumber" | "qrCodeUrl" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["shop"]>
  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogs?: boolean | Shop$auditLogsArgs<ExtArgs>
    customers?: boolean | Shop$customersArgs<ExtArgs>
    orders?: boolean | Shop$ordersArgs<ExtArgs>
    pricingRules?: boolean | Shop$pricingRulesArgs<ExtArgs>
    printAgents?: boolean | Shop$printAgentsArgs<ExtArgs>
    printers?: boolean | Shop$printersArgs<ExtArgs>
    subscription?: boolean | Shop$subscriptionArgs<ExtArgs>
    users?: boolean | Shop$usersArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      customers: Prisma.$CustomerPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      pricingRules: Prisma.$PricingRulePayload<ExtArgs>[]
      printAgents: Prisma.$PrintAgentPayload<ExtArgs>[]
      printers: Prisma.$PrinterPayload<ExtArgs>[]
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      name: string
      phone: string
      email: string
      address: string | null
      city: string | null
      state: string | null
      pincode: string | null
      gstNumber: string | null
      qrCodeUrl: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }

  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopFindUniqueArgs>(args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Shop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopFindFirstArgs>(args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopFindManyArgs>(args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
     */
    create<T extends ShopCreateArgs>(args: SelectSubset<T, ShopCreateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Shops.
     * @param {ShopCreateManyArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopCreateManyArgs>(args?: SelectSubset<T, ShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
     */
    delete<T extends ShopDeleteArgs>(args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUpdateArgs>(args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopDeleteManyArgs>(args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUpdateManyArgs>(args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
     */
    upsert<T extends ShopUpsertArgs>(args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
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
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auditLogs<T extends Shop$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Shop$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    customers<T extends Shop$customersArgs<ExtArgs> = {}>(args?: Subset<T, Shop$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    orders<T extends Shop$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Shop$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    pricingRules<T extends Shop$pricingRulesArgs<ExtArgs> = {}>(args?: Subset<T, Shop$pricingRulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    printAgents<T extends Shop$printAgentsArgs<ExtArgs> = {}>(args?: Subset<T, Shop$printAgentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrintAgentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    printers<T extends Shop$printersArgs<ExtArgs> = {}>(args?: Subset<T, Shop$printersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    subscription<T extends Shop$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Shop$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    users<T extends Shop$usersArgs<ExtArgs> = {}>(args?: Subset<T, Shop$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Shop model
   */ 
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'String'>
    readonly slug: FieldRef<"Shop", 'String'>
    readonly name: FieldRef<"Shop", 'String'>
    readonly phone: FieldRef<"Shop", 'String'>
    readonly email: FieldRef<"Shop", 'String'>
    readonly address: FieldRef<"Shop", 'String'>
    readonly city: FieldRef<"Shop", 'String'>
    readonly state: FieldRef<"Shop", 'String'>
    readonly pincode: FieldRef<"Shop", 'String'>
    readonly gstNumber: FieldRef<"Shop", 'String'>
    readonly qrCodeUrl: FieldRef<"Shop", 'String'>
    readonly isActive: FieldRef<"Shop", 'Boolean'>
    readonly createdAt: FieldRef<"Shop", 'DateTime'>
    readonly updatedAt: FieldRef<"Shop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }

  /**
   * Shop createMany
   */
  export type ShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }

  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to delete.
     */
    limit?: number
  }

  /**
   * Shop.auditLogs
   */
  export type Shop$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Shop.customers
   */
  export type Shop$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Shop.orders
   */
  export type Shop$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Shop.pricingRules
   */
  export type Shop$pricingRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    where?: PricingRuleWhereInput
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    cursor?: PricingRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PricingRuleScalarFieldEnum | PricingRuleScalarFieldEnum[]
  }

  /**
   * Shop.printAgents
   */
  export type Shop$printAgentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintAgent
     */
    select?: PrintAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintAgent
     */
    omit?: PrintAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintAgentInclude<ExtArgs> | null
    where?: PrintAgentWhereInput
    orderBy?: PrintAgentOrderByWithRelationInput | PrintAgentOrderByWithRelationInput[]
    cursor?: PrintAgentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrintAgentScalarFieldEnum | PrintAgentScalarFieldEnum[]
  }

  /**
   * Shop.printers
   */
  export type Shop$printersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    where?: PrinterWhereInput
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    cursor?: PrinterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrinterScalarFieldEnum | PrinterScalarFieldEnum[]
  }

  /**
   * Shop.subscription
   */
  export type Shop$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * Shop.users
   */
  export type Shop$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
  }


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
    shopId: string | null
    email: string | null
    passwordHash: string | null
    fullName: string | null
    phone: string | null
    role: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    email: string | null
    passwordHash: string | null
    fullName: string | null
    phone: string | null
    role: string | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    shopId: number
    email: number
    passwordHash: number
    fullName: number
    phone: number
    role: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    shopId?: true
    email?: true
    passwordHash?: true
    fullName?: true
    phone?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    shopId?: true
    email?: true
    passwordHash?: true
    fullName?: true
    phone?: true
    role?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    shopId?: true
    email?: true
    passwordHash?: true
    fullName?: true
    phone?: true
    role?: true
    isVerified?: true
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
    shopId: string | null
    email: string
    passwordHash: string
    fullName: string
    phone: string | null
    role: string
    isVerified: boolean
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
    shopId?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    shop?: boolean | User$shopArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    shopId?: boolean
    email?: boolean
    passwordHash?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "email" | "passwordHash" | "fullName" | "phone" | "role" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    shop?: boolean | User$shopArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
      shop: Prisma.$ShopPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string | null
      email: string
      passwordHash: string
      fullName: string
      phone: string | null
      role: string
      isVerified: boolean
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

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    shop<T extends User$shopArgs<ExtArgs> = {}>(args?: Subset<T, User$shopArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
    readonly shopId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
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
    skipDuplicates?: boolean
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
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User.shop
   */
  export type User$shopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    where?: ShopWhereInput
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
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    phone: string | null
    fullName: string | null
    email: string | null
    createdAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    phone: string | null
    fullName: string | null
    email: string | null
    createdAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    shopId: number
    phone: number
    fullName: number
    email: number
    createdAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    shopId?: true
    phone?: true
    fullName?: true
    email?: true
    createdAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    shopId?: true
    phone?: true
    fullName?: true
    email?: true
    createdAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    shopId?: true
    phone?: true
    fullName?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    shopId: string
    phone: string
    fullName: string
    email: string | null
    createdAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    phone?: boolean
    fullName?: boolean
    email?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>



  export type CustomerSelectScalar = {
    id?: boolean
    shopId?: boolean
    phone?: boolean
    fullName?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "phone" | "fullName" | "email" | "createdAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      phone: string
      fullName: string
      email: string | null
      createdAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    orders<T extends Customer$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly shopId: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly fullName: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.orders
   */
  export type Customer$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    totalDocuments: number | null
    totalPages: number | null
    estimatedAmount: number | null
    finalAmount: number | null
  }

  export type OrderSumAggregateOutputType = {
    totalDocuments: number | null
    totalPages: number | null
    estimatedAmount: number | null
    finalAmount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    shopId: string | null
    customerId: string | null
    customerPhone: string | null
    status: string | null
    paymentStatus: string | null
    paymentMethod: string | null
    paymentReference: string | null
    paidAt: Date | null
    totalDocuments: number | null
    totalPages: number | null
    estimatedAmount: number | null
    finalAmount: number | null
    customerNotes: string | null
    rejectionReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    shopId: string | null
    customerId: string | null
    customerPhone: string | null
    status: string | null
    paymentStatus: string | null
    paymentMethod: string | null
    paymentReference: string | null
    paidAt: Date | null
    totalDocuments: number | null
    totalPages: number | null
    estimatedAmount: number | null
    finalAmount: number | null
    customerNotes: string | null
    rejectionReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderNumber: number
    shopId: number
    customerId: number
    customerPhone: number
    status: number
    paymentStatus: number
    paymentMethod: number
    paymentReference: number
    paidAt: number
    totalDocuments: number
    totalPages: number
    estimatedAmount: number
    finalAmount: number
    customerNotes: number
    rejectionReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    totalDocuments?: true
    totalPages?: true
    estimatedAmount?: true
    finalAmount?: true
  }

  export type OrderSumAggregateInputType = {
    totalDocuments?: true
    totalPages?: true
    estimatedAmount?: true
    finalAmount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    orderNumber?: true
    shopId?: true
    customerId?: true
    customerPhone?: true
    status?: true
    paymentStatus?: true
    paymentMethod?: true
    paymentReference?: true
    paidAt?: true
    totalDocuments?: true
    totalPages?: true
    estimatedAmount?: true
    finalAmount?: true
    customerNotes?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    shopId?: true
    customerId?: true
    customerPhone?: true
    status?: true
    paymentStatus?: true
    paymentMethod?: true
    paymentReference?: true
    paidAt?: true
    totalDocuments?: true
    totalPages?: true
    estimatedAmount?: true
    finalAmount?: true
    customerNotes?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderNumber?: true
    shopId?: true
    customerId?: true
    customerPhone?: true
    status?: true
    paymentStatus?: true
    paymentMethod?: true
    paymentReference?: true
    paidAt?: true
    totalDocuments?: true
    totalPages?: true
    estimatedAmount?: true
    finalAmount?: true
    customerNotes?: true
    rejectionReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    orderNumber: string
    shopId: string
    customerId: string
    customerPhone: string | null
    status: string
    paymentStatus: string
    paymentMethod: string | null
    paymentReference: string | null
    paidAt: Date | null
    totalDocuments: number
    totalPages: number
    estimatedAmount: number
    finalAmount: number | null
    customerNotes: string | null
    rejectionReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    shopId?: boolean
    customerId?: boolean
    customerPhone?: boolean
    status?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    paymentReference?: boolean
    paidAt?: boolean
    totalDocuments?: boolean
    totalPages?: boolean
    estimatedAmount?: boolean
    finalAmount?: boolean
    customerNotes?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    documents?: boolean | Order$documentsArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    printJobs?: boolean | Order$printJobsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>



  export type OrderSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    shopId?: boolean
    customerId?: boolean
    customerPhone?: boolean
    status?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    paymentReference?: boolean
    paidAt?: boolean
    totalDocuments?: boolean
    totalPages?: boolean
    estimatedAmount?: boolean
    finalAmount?: boolean
    customerNotes?: boolean
    rejectionReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "shopId" | "customerId" | "customerPhone" | "status" | "paymentStatus" | "paymentMethod" | "paymentReference" | "paidAt" | "totalDocuments" | "totalPages" | "estimatedAmount" | "finalAmount" | "customerNotes" | "rejectionReason" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | Order$documentsArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    printJobs?: boolean | Order$printJobsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      documents: Prisma.$OrderDocumentPayload<ExtArgs>[]
      customer: Prisma.$CustomerPayload<ExtArgs>
      shop: Prisma.$ShopPayload<ExtArgs>
      printJobs: Prisma.$PrintJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderNumber: string
      shopId: string
      customerId: string
      customerPhone: string | null
      status: string
      paymentStatus: string
      paymentMethod: string | null
      paymentReference: string | null
      paidAt: Date | null
      totalDocuments: number
      totalPages: number
      estimatedAmount: number
      finalAmount: number | null
      customerNotes: string | null
      rejectionReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends Order$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Order$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDocumentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    printJobs<T extends Order$printJobsArgs<ExtArgs> = {}>(args?: Subset<T, Order$printJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrintJobPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly orderNumber: FieldRef<"Order", 'String'>
    readonly shopId: FieldRef<"Order", 'String'>
    readonly customerId: FieldRef<"Order", 'String'>
    readonly customerPhone: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'String'>
    readonly paymentStatus: FieldRef<"Order", 'String'>
    readonly paymentMethod: FieldRef<"Order", 'String'>
    readonly paymentReference: FieldRef<"Order", 'String'>
    readonly paidAt: FieldRef<"Order", 'DateTime'>
    readonly totalDocuments: FieldRef<"Order", 'Int'>
    readonly totalPages: FieldRef<"Order", 'Int'>
    readonly estimatedAmount: FieldRef<"Order", 'Float'>
    readonly finalAmount: FieldRef<"Order", 'Float'>
    readonly customerNotes: FieldRef<"Order", 'String'>
    readonly rejectionReason: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.documents
   */
  export type Order$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDocument
     */
    select?: OrderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDocument
     */
    omit?: OrderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDocumentInclude<ExtArgs> | null
    where?: OrderDocumentWhereInput
    orderBy?: OrderDocumentOrderByWithRelationInput | OrderDocumentOrderByWithRelationInput[]
    cursor?: OrderDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDocumentScalarFieldEnum | OrderDocumentScalarFieldEnum[]
  }

  /**
   * Order.printJobs
   */
  export type Order$printJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintJob
     */
    select?: PrintJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintJob
     */
    omit?: PrintJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintJobInclude<ExtArgs> | null
    where?: PrintJobWhereInput
    orderBy?: PrintJobOrderByWithRelationInput | PrintJobOrderByWithRelationInput[]
    cursor?: PrintJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrintJobScalarFieldEnum | PrintJobScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderDocument
   */

  export type AggregateOrderDocument = {
    _count: OrderDocumentCountAggregateOutputType | null
    _avg: OrderDocumentAvgAggregateOutputType | null
    _sum: OrderDocumentSumAggregateOutputType | null
    _min: OrderDocumentMinAggregateOutputType | null
    _max: OrderDocumentMaxAggregateOutputType | null
  }

  export type OrderDocumentAvgAggregateOutputType = {
    fileSizeBytes: number | null
    detectedPageCount: number | null
  }

  export type OrderDocumentSumAggregateOutputType = {
    fileSizeBytes: number | null
    detectedPageCount: number | null
  }

  export type OrderDocumentMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    originalFilename: string | null
    storageKey: string | null
    fileSizeBytes: number | null
    mimeType: string | null
    sha256Checksum: string | null
    detectedPageCount: number | null
    previewImageKey: string | null
    createdAt: Date | null
  }

  export type OrderDocumentMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    originalFilename: string | null
    storageKey: string | null
    fileSizeBytes: number | null
    mimeType: string | null
    sha256Checksum: string | null
    detectedPageCount: number | null
    previewImageKey: string | null
    createdAt: Date | null
  }

  export type OrderDocumentCountAggregateOutputType = {
    id: number
    orderId: number
    originalFilename: number
    storageKey: number
    fileSizeBytes: number
    mimeType: number
    sha256Checksum: number
    detectedPageCount: number
    previewImageKey: number
    createdAt: number
    _all: number
  }


  export type OrderDocumentAvgAggregateInputType = {
    fileSizeBytes?: true
    detectedPageCount?: true
  }

  export type OrderDocumentSumAggregateInputType = {
    fileSizeBytes?: true
    detectedPageCount?: true
  }

  export type OrderDocumentMinAggregateInputType = {
    id?: true
    orderId?: true
    originalFilename?: true
    storageKey?: true
    fileSizeBytes?: true
    mimeType?: true
    sha256Checksum?: true
    detectedPageCount?: true
    previewImageKey?: true
    createdAt?: true
  }

  export type OrderDocumentMaxAggregateInputType = {
    id?: true
    orderId?: true
    originalFilename?: true
    storageKey?: true
    fileSizeBytes?: true
    mimeType?: true
    sha256Checksum?: true
    detectedPageCount?: true
    previewImageKey?: true
    createdAt?: true
  }

  export type OrderDocumentCountAggregateInputType = {
    id?: true
    orderId?: true
    originalFilename?: true
    storageKey?: true
    fileSizeBytes?: true
    mimeType?: true
    sha256Checksum?: true
    detectedPageCount?: true
    previewImageKey?: true
    createdAt?: true
    _all?: true
  }

  export type OrderDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDocument to aggregate.
     */
    where?: OrderDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDocuments to fetch.
     */
    orderBy?: OrderDocumentOrderByWithRelationInput | OrderDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderDocuments
    **/
    _count?: true | OrderDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderDocumentMaxAggregateInputType
  }

  export type GetOrderDocumentAggregateType<T extends OrderDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderDocument[P]>
      : GetScalarType<T[P], AggregateOrderDocument[P]>
  }




  export type OrderDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDocumentWhereInput
    orderBy?: OrderDocumentOrderByWithAggregationInput | OrderDocumentOrderByWithAggregationInput[]
    by: OrderDocumentScalarFieldEnum[] | OrderDocumentScalarFieldEnum
    having?: OrderDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderDocumentCountAggregateInputType | true
    _avg?: OrderDocumentAvgAggregateInputType
    _sum?: OrderDocumentSumAggregateInputType
    _min?: OrderDocumentMinAggregateInputType
    _max?: OrderDocumentMaxAggregateInputType
  }

  export type OrderDocumentGroupByOutputType = {
    id: string
    orderId: string
    originalFilename: string
    storageKey: string
    fileSizeBytes: number
    mimeType: string
    sha256Checksum: string
    detectedPageCount: number
    previewImageKey: string | null
    createdAt: Date
    _count: OrderDocumentCountAggregateOutputType | null
    _avg: OrderDocumentAvgAggregateOutputType | null
    _sum: OrderDocumentSumAggregateOutputType | null
    _min: OrderDocumentMinAggregateOutputType | null
    _max: OrderDocumentMaxAggregateOutputType | null
  }

  type GetOrderDocumentGroupByPayload<T extends OrderDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], OrderDocumentGroupByOutputType[P]>
        }
      >
    >


  export type OrderDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    originalFilename?: boolean
    storageKey?: boolean
    fileSizeBytes?: boolean
    mimeType?: boolean
    sha256Checksum?: boolean
    detectedPageCount?: boolean
    previewImageKey?: boolean
    createdAt?: boolean
    specs?: boolean | OrderDocument$specsArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    printJobs?: boolean | OrderDocument$printJobsArgs<ExtArgs>
    _count?: boolean | OrderDocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDocument"]>



  export type OrderDocumentSelectScalar = {
    id?: boolean
    orderId?: boolean
    originalFilename?: boolean
    storageKey?: boolean
    fileSizeBytes?: boolean
    mimeType?: boolean
    sha256Checksum?: boolean
    detectedPageCount?: boolean
    previewImageKey?: boolean
    createdAt?: boolean
  }

  export type OrderDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "originalFilename" | "storageKey" | "fileSizeBytes" | "mimeType" | "sha256Checksum" | "detectedPageCount" | "previewImageKey" | "createdAt", ExtArgs["result"]["orderDocument"]>
  export type OrderDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specs?: boolean | OrderDocument$specsArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    printJobs?: boolean | OrderDocument$printJobsArgs<ExtArgs>
    _count?: boolean | OrderDocumentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrderDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderDocument"
    objects: {
      specs: Prisma.$DocumentPrintSpecPayload<ExtArgs> | null
      order: Prisma.$OrderPayload<ExtArgs>
      printJobs: Prisma.$PrintJobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      originalFilename: string
      storageKey: string
      fileSizeBytes: number
      mimeType: string
      sha256Checksum: string
      detectedPageCount: number
      previewImageKey: string | null
      createdAt: Date
    }, ExtArgs["result"]["orderDocument"]>
    composites: {}
  }

  type OrderDocumentGetPayload<S extends boolean | null | undefined | OrderDocumentDefaultArgs> = $Result.GetResult<Prisma.$OrderDocumentPayload, S>

  type OrderDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderDocumentCountAggregateInputType | true
    }

  export interface OrderDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderDocument'], meta: { name: 'OrderDocument' } }
    /**
     * Find zero or one OrderDocument that matches the filter.
     * @param {OrderDocumentFindUniqueArgs} args - Arguments to find a OrderDocument
     * @example
     * // Get one OrderDocument
     * const orderDocument = await prisma.orderDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderDocumentFindUniqueArgs>(args: SelectSubset<T, OrderDocumentFindUniqueArgs<ExtArgs>>): Prisma__OrderDocumentClient<$Result.GetResult<Prisma.$OrderDocumentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one OrderDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderDocumentFindUniqueOrThrowArgs} args - Arguments to find a OrderDocument
     * @example
     * // Get one OrderDocument
     * const orderDocument = await prisma.orderDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderDocumentClient<$Result.GetResult<Prisma.$OrderDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first OrderDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDocumentFindFirstArgs} args - Arguments to find a OrderDocument
     * @example
     * // Get one OrderDocument
     * const orderDocument = await prisma.orderDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderDocumentFindFirstArgs>(args?: SelectSubset<T, OrderDocumentFindFirstArgs<ExtArgs>>): Prisma__OrderDocumentClient<$Result.GetResult<Prisma.$OrderDocumentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first OrderDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDocumentFindFirstOrThrowArgs} args - Arguments to find a OrderDocument
     * @example
     * // Get one OrderDocument
     * const orderDocument = await prisma.orderDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderDocumentClient<$Result.GetResult<Prisma.$OrderDocumentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more OrderDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderDocuments
     * const orderDocuments = await prisma.orderDocument.findMany()
     * 
     * // Get first 10 OrderDocuments
     * const orderDocuments = await prisma.orderDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderDocumentWithIdOnly = await prisma.orderDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderDocumentFindManyArgs>(args?: SelectSubset<T, OrderDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDocumentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a OrderDocument.
     * @param {OrderDocumentCreateArgs} args - Arguments to create a OrderDocument.
     * @example
     * // Create one OrderDocument
     * const OrderDocument = await prisma.orderDocument.create({
     *   data: {
     *     // ... data to create a OrderDocument
     *   }
     * })
     * 
     */
    create<T extends OrderDocumentCreateArgs>(args: SelectSubset<T, OrderDocumentCreateArgs<ExtArgs>>): Prisma__OrderDocumentClient<$Result.GetResult<Prisma.$OrderDocumentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many OrderDocuments.
     * @param {OrderDocumentCreateManyArgs} args - Arguments to create many OrderDocuments.
     * @example
     * // Create many OrderDocuments
     * const orderDocument = await prisma.orderDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderDocumentCreateManyArgs>(args?: SelectSubset<T, OrderDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderDocument.
     * @param {OrderDocumentDeleteArgs} args - Arguments to delete one OrderDocument.
     * @example
     * // Delete one OrderDocument
     * const OrderDocument = await prisma.orderDocument.delete({
     *   where: {
     *     // ... filter to delete one OrderDocument
     *   }
     * })
     * 
     */
    delete<T extends OrderDocumentDeleteArgs>(args: SelectSubset<T, OrderDocumentDeleteArgs<ExtArgs>>): Prisma__OrderDocumentClient<$Result.GetResult<Prisma.$OrderDocumentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one OrderDocument.
     * @param {OrderDocumentUpdateArgs} args - Arguments to update one OrderDocument.
     * @example
     * // Update one OrderDocument
     * const orderDocument = await prisma.orderDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderDocumentUpdateArgs>(args: SelectSubset<T, OrderDocumentUpdateArgs<ExtArgs>>): Prisma__OrderDocumentClient<$Result.GetResult<Prisma.$OrderDocumentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more OrderDocuments.
     * @param {OrderDocumentDeleteManyArgs} args - Arguments to filter OrderDocuments to delete.
     * @example
     * // Delete a few OrderDocuments
     * const { count } = await prisma.orderDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDocumentDeleteManyArgs>(args?: SelectSubset<T, OrderDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderDocuments
     * const orderDocument = await prisma.orderDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderDocumentUpdateManyArgs>(args: SelectSubset<T, OrderDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderDocument.
     * @param {OrderDocumentUpsertArgs} args - Arguments to update or create a OrderDocument.
     * @example
     * // Update or create a OrderDocument
     * const orderDocument = await prisma.orderDocument.upsert({
     *   create: {
     *     // ... data to create a OrderDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderDocument we want to update
     *   }
     * })
     */
    upsert<T extends OrderDocumentUpsertArgs>(args: SelectSubset<T, OrderDocumentUpsertArgs<ExtArgs>>): Prisma__OrderDocumentClient<$Result.GetResult<Prisma.$OrderDocumentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of OrderDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDocumentCountArgs} args - Arguments to filter OrderDocuments to count.
     * @example
     * // Count the number of OrderDocuments
     * const count = await prisma.orderDocument.count({
     *   where: {
     *     // ... the filter for the OrderDocuments we want to count
     *   }
     * })
    **/
    count<T extends OrderDocumentCountArgs>(
      args?: Subset<T, OrderDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderDocumentAggregateArgs>(args: Subset<T, OrderDocumentAggregateArgs>): Prisma.PrismaPromise<GetOrderDocumentAggregateType<T>>

    /**
     * Group by OrderDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDocumentGroupByArgs} args - Group by arguments.
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
      T extends OrderDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderDocumentGroupByArgs['orderBy'] }
        : { orderBy?: OrderDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderDocument model
   */
  readonly fields: OrderDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    specs<T extends OrderDocument$specsArgs<ExtArgs> = {}>(args?: Subset<T, OrderDocument$specsArgs<ExtArgs>>): Prisma__DocumentPrintSpecClient<$Result.GetResult<Prisma.$DocumentPrintSpecPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    printJobs<T extends OrderDocument$printJobsArgs<ExtArgs> = {}>(args?: Subset<T, OrderDocument$printJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrintJobPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the OrderDocument model
   */ 
  interface OrderDocumentFieldRefs {
    readonly id: FieldRef<"OrderDocument", 'String'>
    readonly orderId: FieldRef<"OrderDocument", 'String'>
    readonly originalFilename: FieldRef<"OrderDocument", 'String'>
    readonly storageKey: FieldRef<"OrderDocument", 'String'>
    readonly fileSizeBytes: FieldRef<"OrderDocument", 'Int'>
    readonly mimeType: FieldRef<"OrderDocument", 'String'>
    readonly sha256Checksum: FieldRef<"OrderDocument", 'String'>
    readonly detectedPageCount: FieldRef<"OrderDocument", 'Int'>
    readonly previewImageKey: FieldRef<"OrderDocument", 'String'>
    readonly createdAt: FieldRef<"OrderDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderDocument findUnique
   */
  export type OrderDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDocument
     */
    select?: OrderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDocument
     */
    omit?: OrderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDocumentInclude<ExtArgs> | null
    /**
     * Filter, which OrderDocument to fetch.
     */
    where: OrderDocumentWhereUniqueInput
  }

  /**
   * OrderDocument findUniqueOrThrow
   */
  export type OrderDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDocument
     */
    select?: OrderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDocument
     */
    omit?: OrderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDocumentInclude<ExtArgs> | null
    /**
     * Filter, which OrderDocument to fetch.
     */
    where: OrderDocumentWhereUniqueInput
  }

  /**
   * OrderDocument findFirst
   */
  export type OrderDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDocument
     */
    select?: OrderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDocument
     */
    omit?: OrderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDocumentInclude<ExtArgs> | null
    /**
     * Filter, which OrderDocument to fetch.
     */
    where?: OrderDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDocuments to fetch.
     */
    orderBy?: OrderDocumentOrderByWithRelationInput | OrderDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDocuments.
     */
    cursor?: OrderDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDocuments.
     */
    distinct?: OrderDocumentScalarFieldEnum | OrderDocumentScalarFieldEnum[]
  }

  /**
   * OrderDocument findFirstOrThrow
   */
  export type OrderDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDocument
     */
    select?: OrderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDocument
     */
    omit?: OrderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDocumentInclude<ExtArgs> | null
    /**
     * Filter, which OrderDocument to fetch.
     */
    where?: OrderDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDocuments to fetch.
     */
    orderBy?: OrderDocumentOrderByWithRelationInput | OrderDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDocuments.
     */
    cursor?: OrderDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDocuments.
     */
    distinct?: OrderDocumentScalarFieldEnum | OrderDocumentScalarFieldEnum[]
  }

  /**
   * OrderDocument findMany
   */
  export type OrderDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDocument
     */
    select?: OrderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDocument
     */
    omit?: OrderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDocumentInclude<ExtArgs> | null
    /**
     * Filter, which OrderDocuments to fetch.
     */
    where?: OrderDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDocuments to fetch.
     */
    orderBy?: OrderDocumentOrderByWithRelationInput | OrderDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderDocuments.
     */
    cursor?: OrderDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDocuments.
     */
    skip?: number
    distinct?: OrderDocumentScalarFieldEnum | OrderDocumentScalarFieldEnum[]
  }

  /**
   * OrderDocument create
   */
  export type OrderDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDocument
     */
    select?: OrderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDocument
     */
    omit?: OrderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderDocument.
     */
    data: XOR<OrderDocumentCreateInput, OrderDocumentUncheckedCreateInput>
  }

  /**
   * OrderDocument createMany
   */
  export type OrderDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderDocuments.
     */
    data: OrderDocumentCreateManyInput | OrderDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderDocument update
   */
  export type OrderDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDocument
     */
    select?: OrderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDocument
     */
    omit?: OrderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderDocument.
     */
    data: XOR<OrderDocumentUpdateInput, OrderDocumentUncheckedUpdateInput>
    /**
     * Choose, which OrderDocument to update.
     */
    where: OrderDocumentWhereUniqueInput
  }

  /**
   * OrderDocument updateMany
   */
  export type OrderDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderDocuments.
     */
    data: XOR<OrderDocumentUpdateManyMutationInput, OrderDocumentUncheckedUpdateManyInput>
    /**
     * Filter which OrderDocuments to update
     */
    where?: OrderDocumentWhereInput
    /**
     * Limit how many OrderDocuments to update.
     */
    limit?: number
  }

  /**
   * OrderDocument upsert
   */
  export type OrderDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDocument
     */
    select?: OrderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDocument
     */
    omit?: OrderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderDocument to update in case it exists.
     */
    where: OrderDocumentWhereUniqueInput
    /**
     * In case the OrderDocument found by the `where` argument doesn't exist, create a new OrderDocument with this data.
     */
    create: XOR<OrderDocumentCreateInput, OrderDocumentUncheckedCreateInput>
    /**
     * In case the OrderDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderDocumentUpdateInput, OrderDocumentUncheckedUpdateInput>
  }

  /**
   * OrderDocument delete
   */
  export type OrderDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDocument
     */
    select?: OrderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDocument
     */
    omit?: OrderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDocumentInclude<ExtArgs> | null
    /**
     * Filter which OrderDocument to delete.
     */
    where: OrderDocumentWhereUniqueInput
  }

  /**
   * OrderDocument deleteMany
   */
  export type OrderDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDocuments to delete
     */
    where?: OrderDocumentWhereInput
    /**
     * Limit how many OrderDocuments to delete.
     */
    limit?: number
  }

  /**
   * OrderDocument.specs
   */
  export type OrderDocument$specsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentPrintSpec
     */
    select?: DocumentPrintSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentPrintSpec
     */
    omit?: DocumentPrintSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentPrintSpecInclude<ExtArgs> | null
    where?: DocumentPrintSpecWhereInput
  }

  /**
   * OrderDocument.printJobs
   */
  export type OrderDocument$printJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintJob
     */
    select?: PrintJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintJob
     */
    omit?: PrintJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintJobInclude<ExtArgs> | null
    where?: PrintJobWhereInput
    orderBy?: PrintJobOrderByWithRelationInput | PrintJobOrderByWithRelationInput[]
    cursor?: PrintJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrintJobScalarFieldEnum | PrintJobScalarFieldEnum[]
  }

  /**
   * OrderDocument without action
   */
  export type OrderDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDocument
     */
    select?: OrderDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderDocument
     */
    omit?: OrderDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderDocumentInclude<ExtArgs> | null
  }


  /**
   * Model DocumentPrintSpec
   */

  export type AggregateDocumentPrintSpec = {
    _count: DocumentPrintSpecCountAggregateOutputType | null
    _avg: DocumentPrintSpecAvgAggregateOutputType | null
    _sum: DocumentPrintSpecSumAggregateOutputType | null
    _min: DocumentPrintSpecMinAggregateOutputType | null
    _max: DocumentPrintSpecMaxAggregateOutputType | null
  }

  export type DocumentPrintSpecAvgAggregateOutputType = {
    copies: number | null
    pagesPerSheet: number | null
  }

  export type DocumentPrintSpecSumAggregateOutputType = {
    copies: number | null
    pagesPerSheet: number | null
  }

  export type DocumentPrintSpecMinAggregateOutputType = {
    id: string | null
    documentId: string | null
    copies: number | null
    color: string | null
    duplex: string | null
    paperSize: string | null
    orientation: string | null
    pageRange: string | null
    pagesPerSheet: number | null
    collate: boolean | null
    stapling: string | null
    binding: string | null
    lamination: string | null
    finishingNotes: string | null
    priceDetails: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentPrintSpecMaxAggregateOutputType = {
    id: string | null
    documentId: string | null
    copies: number | null
    color: string | null
    duplex: string | null
    paperSize: string | null
    orientation: string | null
    pageRange: string | null
    pagesPerSheet: number | null
    collate: boolean | null
    stapling: string | null
    binding: string | null
    lamination: string | null
    finishingNotes: string | null
    priceDetails: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentPrintSpecCountAggregateOutputType = {
    id: number
    documentId: number
    copies: number
    color: number
    duplex: number
    paperSize: number
    orientation: number
    pageRange: number
    pagesPerSheet: number
    collate: number
    stapling: number
    binding: number
    lamination: number
    finishingNotes: number
    priceDetails: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentPrintSpecAvgAggregateInputType = {
    copies?: true
    pagesPerSheet?: true
  }

  export type DocumentPrintSpecSumAggregateInputType = {
    copies?: true
    pagesPerSheet?: true
  }

  export type DocumentPrintSpecMinAggregateInputType = {
    id?: true
    documentId?: true
    copies?: true
    color?: true
    duplex?: true
    paperSize?: true
    orientation?: true
    pageRange?: true
    pagesPerSheet?: true
    collate?: true
    stapling?: true
    binding?: true
    lamination?: true
    finishingNotes?: true
    priceDetails?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentPrintSpecMaxAggregateInputType = {
    id?: true
    documentId?: true
    copies?: true
    color?: true
    duplex?: true
    paperSize?: true
    orientation?: true
    pageRange?: true
    pagesPerSheet?: true
    collate?: true
    stapling?: true
    binding?: true
    lamination?: true
    finishingNotes?: true
    priceDetails?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentPrintSpecCountAggregateInputType = {
    id?: true
    documentId?: true
    copies?: true
    color?: true
    duplex?: true
    paperSize?: true
    orientation?: true
    pageRange?: true
    pagesPerSheet?: true
    collate?: true
    stapling?: true
    binding?: true
    lamination?: true
    finishingNotes?: true
    priceDetails?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentPrintSpecAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentPrintSpec to aggregate.
     */
    where?: DocumentPrintSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentPrintSpecs to fetch.
     */
    orderBy?: DocumentPrintSpecOrderByWithRelationInput | DocumentPrintSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentPrintSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentPrintSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentPrintSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentPrintSpecs
    **/
    _count?: true | DocumentPrintSpecCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentPrintSpecAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentPrintSpecSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentPrintSpecMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentPrintSpecMaxAggregateInputType
  }

  export type GetDocumentPrintSpecAggregateType<T extends DocumentPrintSpecAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentPrintSpec]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentPrintSpec[P]>
      : GetScalarType<T[P], AggregateDocumentPrintSpec[P]>
  }




  export type DocumentPrintSpecGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentPrintSpecWhereInput
    orderBy?: DocumentPrintSpecOrderByWithAggregationInput | DocumentPrintSpecOrderByWithAggregationInput[]
    by: DocumentPrintSpecScalarFieldEnum[] | DocumentPrintSpecScalarFieldEnum
    having?: DocumentPrintSpecScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentPrintSpecCountAggregateInputType | true
    _avg?: DocumentPrintSpecAvgAggregateInputType
    _sum?: DocumentPrintSpecSumAggregateInputType
    _min?: DocumentPrintSpecMinAggregateInputType
    _max?: DocumentPrintSpecMaxAggregateInputType
  }

  export type DocumentPrintSpecGroupByOutputType = {
    id: string
    documentId: string
    copies: number
    color: string
    duplex: string
    paperSize: string
    orientation: string
    pageRange: string
    pagesPerSheet: number
    collate: boolean
    stapling: string
    binding: string
    lamination: string
    finishingNotes: string | null
    priceDetails: string | null
    createdAt: Date
    updatedAt: Date
    _count: DocumentPrintSpecCountAggregateOutputType | null
    _avg: DocumentPrintSpecAvgAggregateOutputType | null
    _sum: DocumentPrintSpecSumAggregateOutputType | null
    _min: DocumentPrintSpecMinAggregateOutputType | null
    _max: DocumentPrintSpecMaxAggregateOutputType | null
  }

  type GetDocumentPrintSpecGroupByPayload<T extends DocumentPrintSpecGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentPrintSpecGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentPrintSpecGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentPrintSpecGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentPrintSpecGroupByOutputType[P]>
        }
      >
    >


  export type DocumentPrintSpecSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    copies?: boolean
    color?: boolean
    duplex?: boolean
    paperSize?: boolean
    orientation?: boolean
    pageRange?: boolean
    pagesPerSheet?: boolean
    collate?: boolean
    stapling?: boolean
    binding?: boolean
    lamination?: boolean
    finishingNotes?: boolean
    priceDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    document?: boolean | OrderDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentPrintSpec"]>



  export type DocumentPrintSpecSelectScalar = {
    id?: boolean
    documentId?: boolean
    copies?: boolean
    color?: boolean
    duplex?: boolean
    paperSize?: boolean
    orientation?: boolean
    pageRange?: boolean
    pagesPerSheet?: boolean
    collate?: boolean
    stapling?: boolean
    binding?: boolean
    lamination?: boolean
    finishingNotes?: boolean
    priceDetails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentPrintSpecOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "copies" | "color" | "duplex" | "paperSize" | "orientation" | "pageRange" | "pagesPerSheet" | "collate" | "stapling" | "binding" | "lamination" | "finishingNotes" | "priceDetails" | "createdAt" | "updatedAt", ExtArgs["result"]["documentPrintSpec"]>
  export type DocumentPrintSpecInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | OrderDocumentDefaultArgs<ExtArgs>
  }

  export type $DocumentPrintSpecPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentPrintSpec"
    objects: {
      document: Prisma.$OrderDocumentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentId: string
      copies: number
      color: string
      duplex: string
      paperSize: string
      orientation: string
      pageRange: string
      pagesPerSheet: number
      collate: boolean
      stapling: string
      binding: string
      lamination: string
      finishingNotes: string | null
      priceDetails: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["documentPrintSpec"]>
    composites: {}
  }

  type DocumentPrintSpecGetPayload<S extends boolean | null | undefined | DocumentPrintSpecDefaultArgs> = $Result.GetResult<Prisma.$DocumentPrintSpecPayload, S>

  type DocumentPrintSpecCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentPrintSpecFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentPrintSpecCountAggregateInputType | true
    }

  export interface DocumentPrintSpecDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentPrintSpec'], meta: { name: 'DocumentPrintSpec' } }
    /**
     * Find zero or one DocumentPrintSpec that matches the filter.
     * @param {DocumentPrintSpecFindUniqueArgs} args - Arguments to find a DocumentPrintSpec
     * @example
     * // Get one DocumentPrintSpec
     * const documentPrintSpec = await prisma.documentPrintSpec.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentPrintSpecFindUniqueArgs>(args: SelectSubset<T, DocumentPrintSpecFindUniqueArgs<ExtArgs>>): Prisma__DocumentPrintSpecClient<$Result.GetResult<Prisma.$DocumentPrintSpecPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one DocumentPrintSpec that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentPrintSpecFindUniqueOrThrowArgs} args - Arguments to find a DocumentPrintSpec
     * @example
     * // Get one DocumentPrintSpec
     * const documentPrintSpec = await prisma.documentPrintSpec.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentPrintSpecFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentPrintSpecFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentPrintSpecClient<$Result.GetResult<Prisma.$DocumentPrintSpecPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first DocumentPrintSpec that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentPrintSpecFindFirstArgs} args - Arguments to find a DocumentPrintSpec
     * @example
     * // Get one DocumentPrintSpec
     * const documentPrintSpec = await prisma.documentPrintSpec.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentPrintSpecFindFirstArgs>(args?: SelectSubset<T, DocumentPrintSpecFindFirstArgs<ExtArgs>>): Prisma__DocumentPrintSpecClient<$Result.GetResult<Prisma.$DocumentPrintSpecPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first DocumentPrintSpec that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentPrintSpecFindFirstOrThrowArgs} args - Arguments to find a DocumentPrintSpec
     * @example
     * // Get one DocumentPrintSpec
     * const documentPrintSpec = await prisma.documentPrintSpec.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentPrintSpecFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentPrintSpecFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentPrintSpecClient<$Result.GetResult<Prisma.$DocumentPrintSpecPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more DocumentPrintSpecs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentPrintSpecFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentPrintSpecs
     * const documentPrintSpecs = await prisma.documentPrintSpec.findMany()
     * 
     * // Get first 10 DocumentPrintSpecs
     * const documentPrintSpecs = await prisma.documentPrintSpec.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentPrintSpecWithIdOnly = await prisma.documentPrintSpec.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentPrintSpecFindManyArgs>(args?: SelectSubset<T, DocumentPrintSpecFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPrintSpecPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a DocumentPrintSpec.
     * @param {DocumentPrintSpecCreateArgs} args - Arguments to create a DocumentPrintSpec.
     * @example
     * // Create one DocumentPrintSpec
     * const DocumentPrintSpec = await prisma.documentPrintSpec.create({
     *   data: {
     *     // ... data to create a DocumentPrintSpec
     *   }
     * })
     * 
     */
    create<T extends DocumentPrintSpecCreateArgs>(args: SelectSubset<T, DocumentPrintSpecCreateArgs<ExtArgs>>): Prisma__DocumentPrintSpecClient<$Result.GetResult<Prisma.$DocumentPrintSpecPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many DocumentPrintSpecs.
     * @param {DocumentPrintSpecCreateManyArgs} args - Arguments to create many DocumentPrintSpecs.
     * @example
     * // Create many DocumentPrintSpecs
     * const documentPrintSpec = await prisma.documentPrintSpec.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentPrintSpecCreateManyArgs>(args?: SelectSubset<T, DocumentPrintSpecCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DocumentPrintSpec.
     * @param {DocumentPrintSpecDeleteArgs} args - Arguments to delete one DocumentPrintSpec.
     * @example
     * // Delete one DocumentPrintSpec
     * const DocumentPrintSpec = await prisma.documentPrintSpec.delete({
     *   where: {
     *     // ... filter to delete one DocumentPrintSpec
     *   }
     * })
     * 
     */
    delete<T extends DocumentPrintSpecDeleteArgs>(args: SelectSubset<T, DocumentPrintSpecDeleteArgs<ExtArgs>>): Prisma__DocumentPrintSpecClient<$Result.GetResult<Prisma.$DocumentPrintSpecPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one DocumentPrintSpec.
     * @param {DocumentPrintSpecUpdateArgs} args - Arguments to update one DocumentPrintSpec.
     * @example
     * // Update one DocumentPrintSpec
     * const documentPrintSpec = await prisma.documentPrintSpec.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentPrintSpecUpdateArgs>(args: SelectSubset<T, DocumentPrintSpecUpdateArgs<ExtArgs>>): Prisma__DocumentPrintSpecClient<$Result.GetResult<Prisma.$DocumentPrintSpecPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more DocumentPrintSpecs.
     * @param {DocumentPrintSpecDeleteManyArgs} args - Arguments to filter DocumentPrintSpecs to delete.
     * @example
     * // Delete a few DocumentPrintSpecs
     * const { count } = await prisma.documentPrintSpec.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentPrintSpecDeleteManyArgs>(args?: SelectSubset<T, DocumentPrintSpecDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentPrintSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentPrintSpecUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentPrintSpecs
     * const documentPrintSpec = await prisma.documentPrintSpec.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentPrintSpecUpdateManyArgs>(args: SelectSubset<T, DocumentPrintSpecUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DocumentPrintSpec.
     * @param {DocumentPrintSpecUpsertArgs} args - Arguments to update or create a DocumentPrintSpec.
     * @example
     * // Update or create a DocumentPrintSpec
     * const documentPrintSpec = await prisma.documentPrintSpec.upsert({
     *   create: {
     *     // ... data to create a DocumentPrintSpec
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentPrintSpec we want to update
     *   }
     * })
     */
    upsert<T extends DocumentPrintSpecUpsertArgs>(args: SelectSubset<T, DocumentPrintSpecUpsertArgs<ExtArgs>>): Prisma__DocumentPrintSpecClient<$Result.GetResult<Prisma.$DocumentPrintSpecPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of DocumentPrintSpecs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentPrintSpecCountArgs} args - Arguments to filter DocumentPrintSpecs to count.
     * @example
     * // Count the number of DocumentPrintSpecs
     * const count = await prisma.documentPrintSpec.count({
     *   where: {
     *     // ... the filter for the DocumentPrintSpecs we want to count
     *   }
     * })
    **/
    count<T extends DocumentPrintSpecCountArgs>(
      args?: Subset<T, DocumentPrintSpecCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentPrintSpecCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentPrintSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentPrintSpecAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentPrintSpecAggregateArgs>(args: Subset<T, DocumentPrintSpecAggregateArgs>): Prisma.PrismaPromise<GetDocumentPrintSpecAggregateType<T>>

    /**
     * Group by DocumentPrintSpec.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentPrintSpecGroupByArgs} args - Group by arguments.
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
      T extends DocumentPrintSpecGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentPrintSpecGroupByArgs['orderBy'] }
        : { orderBy?: DocumentPrintSpecGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentPrintSpecGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentPrintSpecGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentPrintSpec model
   */
  readonly fields: DocumentPrintSpecFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentPrintSpec.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentPrintSpecClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends OrderDocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDocumentDefaultArgs<ExtArgs>>): Prisma__OrderDocumentClient<$Result.GetResult<Prisma.$OrderDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the DocumentPrintSpec model
   */ 
  interface DocumentPrintSpecFieldRefs {
    readonly id: FieldRef<"DocumentPrintSpec", 'String'>
    readonly documentId: FieldRef<"DocumentPrintSpec", 'String'>
    readonly copies: FieldRef<"DocumentPrintSpec", 'Int'>
    readonly color: FieldRef<"DocumentPrintSpec", 'String'>
    readonly duplex: FieldRef<"DocumentPrintSpec", 'String'>
    readonly paperSize: FieldRef<"DocumentPrintSpec", 'String'>
    readonly orientation: FieldRef<"DocumentPrintSpec", 'String'>
    readonly pageRange: FieldRef<"DocumentPrintSpec", 'String'>
    readonly pagesPerSheet: FieldRef<"DocumentPrintSpec", 'Int'>
    readonly collate: FieldRef<"DocumentPrintSpec", 'Boolean'>
    readonly stapling: FieldRef<"DocumentPrintSpec", 'String'>
    readonly binding: FieldRef<"DocumentPrintSpec", 'String'>
    readonly lamination: FieldRef<"DocumentPrintSpec", 'String'>
    readonly finishingNotes: FieldRef<"DocumentPrintSpec", 'String'>
    readonly priceDetails: FieldRef<"DocumentPrintSpec", 'String'>
    readonly createdAt: FieldRef<"DocumentPrintSpec", 'DateTime'>
    readonly updatedAt: FieldRef<"DocumentPrintSpec", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentPrintSpec findUnique
   */
  export type DocumentPrintSpecFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentPrintSpec
     */
    select?: DocumentPrintSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentPrintSpec
     */
    omit?: DocumentPrintSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentPrintSpecInclude<ExtArgs> | null
    /**
     * Filter, which DocumentPrintSpec to fetch.
     */
    where: DocumentPrintSpecWhereUniqueInput
  }

  /**
   * DocumentPrintSpec findUniqueOrThrow
   */
  export type DocumentPrintSpecFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentPrintSpec
     */
    select?: DocumentPrintSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentPrintSpec
     */
    omit?: DocumentPrintSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentPrintSpecInclude<ExtArgs> | null
    /**
     * Filter, which DocumentPrintSpec to fetch.
     */
    where: DocumentPrintSpecWhereUniqueInput
  }

  /**
   * DocumentPrintSpec findFirst
   */
  export type DocumentPrintSpecFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentPrintSpec
     */
    select?: DocumentPrintSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentPrintSpec
     */
    omit?: DocumentPrintSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentPrintSpecInclude<ExtArgs> | null
    /**
     * Filter, which DocumentPrintSpec to fetch.
     */
    where?: DocumentPrintSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentPrintSpecs to fetch.
     */
    orderBy?: DocumentPrintSpecOrderByWithRelationInput | DocumentPrintSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentPrintSpecs.
     */
    cursor?: DocumentPrintSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentPrintSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentPrintSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentPrintSpecs.
     */
    distinct?: DocumentPrintSpecScalarFieldEnum | DocumentPrintSpecScalarFieldEnum[]
  }

  /**
   * DocumentPrintSpec findFirstOrThrow
   */
  export type DocumentPrintSpecFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentPrintSpec
     */
    select?: DocumentPrintSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentPrintSpec
     */
    omit?: DocumentPrintSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentPrintSpecInclude<ExtArgs> | null
    /**
     * Filter, which DocumentPrintSpec to fetch.
     */
    where?: DocumentPrintSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentPrintSpecs to fetch.
     */
    orderBy?: DocumentPrintSpecOrderByWithRelationInput | DocumentPrintSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentPrintSpecs.
     */
    cursor?: DocumentPrintSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentPrintSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentPrintSpecs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentPrintSpecs.
     */
    distinct?: DocumentPrintSpecScalarFieldEnum | DocumentPrintSpecScalarFieldEnum[]
  }

  /**
   * DocumentPrintSpec findMany
   */
  export type DocumentPrintSpecFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentPrintSpec
     */
    select?: DocumentPrintSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentPrintSpec
     */
    omit?: DocumentPrintSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentPrintSpecInclude<ExtArgs> | null
    /**
     * Filter, which DocumentPrintSpecs to fetch.
     */
    where?: DocumentPrintSpecWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentPrintSpecs to fetch.
     */
    orderBy?: DocumentPrintSpecOrderByWithRelationInput | DocumentPrintSpecOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentPrintSpecs.
     */
    cursor?: DocumentPrintSpecWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentPrintSpecs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentPrintSpecs.
     */
    skip?: number
    distinct?: DocumentPrintSpecScalarFieldEnum | DocumentPrintSpecScalarFieldEnum[]
  }

  /**
   * DocumentPrintSpec create
   */
  export type DocumentPrintSpecCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentPrintSpec
     */
    select?: DocumentPrintSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentPrintSpec
     */
    omit?: DocumentPrintSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentPrintSpecInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentPrintSpec.
     */
    data: XOR<DocumentPrintSpecCreateInput, DocumentPrintSpecUncheckedCreateInput>
  }

  /**
   * DocumentPrintSpec createMany
   */
  export type DocumentPrintSpecCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentPrintSpecs.
     */
    data: DocumentPrintSpecCreateManyInput | DocumentPrintSpecCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentPrintSpec update
   */
  export type DocumentPrintSpecUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentPrintSpec
     */
    select?: DocumentPrintSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentPrintSpec
     */
    omit?: DocumentPrintSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentPrintSpecInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentPrintSpec.
     */
    data: XOR<DocumentPrintSpecUpdateInput, DocumentPrintSpecUncheckedUpdateInput>
    /**
     * Choose, which DocumentPrintSpec to update.
     */
    where: DocumentPrintSpecWhereUniqueInput
  }

  /**
   * DocumentPrintSpec updateMany
   */
  export type DocumentPrintSpecUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentPrintSpecs.
     */
    data: XOR<DocumentPrintSpecUpdateManyMutationInput, DocumentPrintSpecUncheckedUpdateManyInput>
    /**
     * Filter which DocumentPrintSpecs to update
     */
    where?: DocumentPrintSpecWhereInput
    /**
     * Limit how many DocumentPrintSpecs to update.
     */
    limit?: number
  }

  /**
   * DocumentPrintSpec upsert
   */
  export type DocumentPrintSpecUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentPrintSpec
     */
    select?: DocumentPrintSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentPrintSpec
     */
    omit?: DocumentPrintSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentPrintSpecInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentPrintSpec to update in case it exists.
     */
    where: DocumentPrintSpecWhereUniqueInput
    /**
     * In case the DocumentPrintSpec found by the `where` argument doesn't exist, create a new DocumentPrintSpec with this data.
     */
    create: XOR<DocumentPrintSpecCreateInput, DocumentPrintSpecUncheckedCreateInput>
    /**
     * In case the DocumentPrintSpec was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentPrintSpecUpdateInput, DocumentPrintSpecUncheckedUpdateInput>
  }

  /**
   * DocumentPrintSpec delete
   */
  export type DocumentPrintSpecDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentPrintSpec
     */
    select?: DocumentPrintSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentPrintSpec
     */
    omit?: DocumentPrintSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentPrintSpecInclude<ExtArgs> | null
    /**
     * Filter which DocumentPrintSpec to delete.
     */
    where: DocumentPrintSpecWhereUniqueInput
  }

  /**
   * DocumentPrintSpec deleteMany
   */
  export type DocumentPrintSpecDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentPrintSpecs to delete
     */
    where?: DocumentPrintSpecWhereInput
    /**
     * Limit how many DocumentPrintSpecs to delete.
     */
    limit?: number
  }

  /**
   * DocumentPrintSpec without action
   */
  export type DocumentPrintSpecDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentPrintSpec
     */
    select?: DocumentPrintSpecSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentPrintSpec
     */
    omit?: DocumentPrintSpecOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentPrintSpecInclude<ExtArgs> | null
  }


  /**
   * Model PrintAgent
   */

  export type AggregatePrintAgent = {
    _count: PrintAgentCountAggregateOutputType | null
    _min: PrintAgentMinAggregateOutputType | null
    _max: PrintAgentMaxAggregateOutputType | null
  }

  export type PrintAgentMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    agentName: string | null
    machineHostname: string | null
    osVersion: string | null
    ipAddress: string | null
    authTokenHash: string | null
    isConnected: boolean | null
    lastHeartbeatAt: Date | null
    createdAt: Date | null
  }

  export type PrintAgentMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    agentName: string | null
    machineHostname: string | null
    osVersion: string | null
    ipAddress: string | null
    authTokenHash: string | null
    isConnected: boolean | null
    lastHeartbeatAt: Date | null
    createdAt: Date | null
  }

  export type PrintAgentCountAggregateOutputType = {
    id: number
    shopId: number
    agentName: number
    machineHostname: number
    osVersion: number
    ipAddress: number
    authTokenHash: number
    isConnected: number
    lastHeartbeatAt: number
    createdAt: number
    _all: number
  }


  export type PrintAgentMinAggregateInputType = {
    id?: true
    shopId?: true
    agentName?: true
    machineHostname?: true
    osVersion?: true
    ipAddress?: true
    authTokenHash?: true
    isConnected?: true
    lastHeartbeatAt?: true
    createdAt?: true
  }

  export type PrintAgentMaxAggregateInputType = {
    id?: true
    shopId?: true
    agentName?: true
    machineHostname?: true
    osVersion?: true
    ipAddress?: true
    authTokenHash?: true
    isConnected?: true
    lastHeartbeatAt?: true
    createdAt?: true
  }

  export type PrintAgentCountAggregateInputType = {
    id?: true
    shopId?: true
    agentName?: true
    machineHostname?: true
    osVersion?: true
    ipAddress?: true
    authTokenHash?: true
    isConnected?: true
    lastHeartbeatAt?: true
    createdAt?: true
    _all?: true
  }

  export type PrintAgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrintAgent to aggregate.
     */
    where?: PrintAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrintAgents to fetch.
     */
    orderBy?: PrintAgentOrderByWithRelationInput | PrintAgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrintAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrintAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrintAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrintAgents
    **/
    _count?: true | PrintAgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrintAgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrintAgentMaxAggregateInputType
  }

  export type GetPrintAgentAggregateType<T extends PrintAgentAggregateArgs> = {
        [P in keyof T & keyof AggregatePrintAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrintAgent[P]>
      : GetScalarType<T[P], AggregatePrintAgent[P]>
  }




  export type PrintAgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrintAgentWhereInput
    orderBy?: PrintAgentOrderByWithAggregationInput | PrintAgentOrderByWithAggregationInput[]
    by: PrintAgentScalarFieldEnum[] | PrintAgentScalarFieldEnum
    having?: PrintAgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrintAgentCountAggregateInputType | true
    _min?: PrintAgentMinAggregateInputType
    _max?: PrintAgentMaxAggregateInputType
  }

  export type PrintAgentGroupByOutputType = {
    id: string
    shopId: string
    agentName: string
    machineHostname: string | null
    osVersion: string | null
    ipAddress: string | null
    authTokenHash: string
    isConnected: boolean
    lastHeartbeatAt: Date | null
    createdAt: Date
    _count: PrintAgentCountAggregateOutputType | null
    _min: PrintAgentMinAggregateOutputType | null
    _max: PrintAgentMaxAggregateOutputType | null
  }

  type GetPrintAgentGroupByPayload<T extends PrintAgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrintAgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrintAgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrintAgentGroupByOutputType[P]>
            : GetScalarType<T[P], PrintAgentGroupByOutputType[P]>
        }
      >
    >


  export type PrintAgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    agentName?: boolean
    machineHostname?: boolean
    osVersion?: boolean
    ipAddress?: boolean
    authTokenHash?: boolean
    isConnected?: boolean
    lastHeartbeatAt?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    printJobs?: boolean | PrintAgent$printJobsArgs<ExtArgs>
    printers?: boolean | PrintAgent$printersArgs<ExtArgs>
    _count?: boolean | PrintAgentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["printAgent"]>



  export type PrintAgentSelectScalar = {
    id?: boolean
    shopId?: boolean
    agentName?: boolean
    machineHostname?: boolean
    osVersion?: boolean
    ipAddress?: boolean
    authTokenHash?: boolean
    isConnected?: boolean
    lastHeartbeatAt?: boolean
    createdAt?: boolean
  }

  export type PrintAgentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "agentName" | "machineHostname" | "osVersion" | "ipAddress" | "authTokenHash" | "isConnected" | "lastHeartbeatAt" | "createdAt", ExtArgs["result"]["printAgent"]>
  export type PrintAgentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    printJobs?: boolean | PrintAgent$printJobsArgs<ExtArgs>
    printers?: boolean | PrintAgent$printersArgs<ExtArgs>
    _count?: boolean | PrintAgentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PrintAgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrintAgent"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
      printJobs: Prisma.$PrintJobPayload<ExtArgs>[]
      printers: Prisma.$PrinterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      agentName: string
      machineHostname: string | null
      osVersion: string | null
      ipAddress: string | null
      authTokenHash: string
      isConnected: boolean
      lastHeartbeatAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["printAgent"]>
    composites: {}
  }

  type PrintAgentGetPayload<S extends boolean | null | undefined | PrintAgentDefaultArgs> = $Result.GetResult<Prisma.$PrintAgentPayload, S>

  type PrintAgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrintAgentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrintAgentCountAggregateInputType | true
    }

  export interface PrintAgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrintAgent'], meta: { name: 'PrintAgent' } }
    /**
     * Find zero or one PrintAgent that matches the filter.
     * @param {PrintAgentFindUniqueArgs} args - Arguments to find a PrintAgent
     * @example
     * // Get one PrintAgent
     * const printAgent = await prisma.printAgent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrintAgentFindUniqueArgs>(args: SelectSubset<T, PrintAgentFindUniqueArgs<ExtArgs>>): Prisma__PrintAgentClient<$Result.GetResult<Prisma.$PrintAgentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PrintAgent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrintAgentFindUniqueOrThrowArgs} args - Arguments to find a PrintAgent
     * @example
     * // Get one PrintAgent
     * const printAgent = await prisma.printAgent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrintAgentFindUniqueOrThrowArgs>(args: SelectSubset<T, PrintAgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrintAgentClient<$Result.GetResult<Prisma.$PrintAgentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PrintAgent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintAgentFindFirstArgs} args - Arguments to find a PrintAgent
     * @example
     * // Get one PrintAgent
     * const printAgent = await prisma.printAgent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrintAgentFindFirstArgs>(args?: SelectSubset<T, PrintAgentFindFirstArgs<ExtArgs>>): Prisma__PrintAgentClient<$Result.GetResult<Prisma.$PrintAgentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PrintAgent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintAgentFindFirstOrThrowArgs} args - Arguments to find a PrintAgent
     * @example
     * // Get one PrintAgent
     * const printAgent = await prisma.printAgent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrintAgentFindFirstOrThrowArgs>(args?: SelectSubset<T, PrintAgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrintAgentClient<$Result.GetResult<Prisma.$PrintAgentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PrintAgents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintAgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrintAgents
     * const printAgents = await prisma.printAgent.findMany()
     * 
     * // Get first 10 PrintAgents
     * const printAgents = await prisma.printAgent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const printAgentWithIdOnly = await prisma.printAgent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrintAgentFindManyArgs>(args?: SelectSubset<T, PrintAgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrintAgentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PrintAgent.
     * @param {PrintAgentCreateArgs} args - Arguments to create a PrintAgent.
     * @example
     * // Create one PrintAgent
     * const PrintAgent = await prisma.printAgent.create({
     *   data: {
     *     // ... data to create a PrintAgent
     *   }
     * })
     * 
     */
    create<T extends PrintAgentCreateArgs>(args: SelectSubset<T, PrintAgentCreateArgs<ExtArgs>>): Prisma__PrintAgentClient<$Result.GetResult<Prisma.$PrintAgentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PrintAgents.
     * @param {PrintAgentCreateManyArgs} args - Arguments to create many PrintAgents.
     * @example
     * // Create many PrintAgents
     * const printAgent = await prisma.printAgent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrintAgentCreateManyArgs>(args?: SelectSubset<T, PrintAgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PrintAgent.
     * @param {PrintAgentDeleteArgs} args - Arguments to delete one PrintAgent.
     * @example
     * // Delete one PrintAgent
     * const PrintAgent = await prisma.printAgent.delete({
     *   where: {
     *     // ... filter to delete one PrintAgent
     *   }
     * })
     * 
     */
    delete<T extends PrintAgentDeleteArgs>(args: SelectSubset<T, PrintAgentDeleteArgs<ExtArgs>>): Prisma__PrintAgentClient<$Result.GetResult<Prisma.$PrintAgentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PrintAgent.
     * @param {PrintAgentUpdateArgs} args - Arguments to update one PrintAgent.
     * @example
     * // Update one PrintAgent
     * const printAgent = await prisma.printAgent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrintAgentUpdateArgs>(args: SelectSubset<T, PrintAgentUpdateArgs<ExtArgs>>): Prisma__PrintAgentClient<$Result.GetResult<Prisma.$PrintAgentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PrintAgents.
     * @param {PrintAgentDeleteManyArgs} args - Arguments to filter PrintAgents to delete.
     * @example
     * // Delete a few PrintAgents
     * const { count } = await prisma.printAgent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrintAgentDeleteManyArgs>(args?: SelectSubset<T, PrintAgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrintAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintAgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrintAgents
     * const printAgent = await prisma.printAgent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrintAgentUpdateManyArgs>(args: SelectSubset<T, PrintAgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PrintAgent.
     * @param {PrintAgentUpsertArgs} args - Arguments to update or create a PrintAgent.
     * @example
     * // Update or create a PrintAgent
     * const printAgent = await prisma.printAgent.upsert({
     *   create: {
     *     // ... data to create a PrintAgent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrintAgent we want to update
     *   }
     * })
     */
    upsert<T extends PrintAgentUpsertArgs>(args: SelectSubset<T, PrintAgentUpsertArgs<ExtArgs>>): Prisma__PrintAgentClient<$Result.GetResult<Prisma.$PrintAgentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PrintAgents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintAgentCountArgs} args - Arguments to filter PrintAgents to count.
     * @example
     * // Count the number of PrintAgents
     * const count = await prisma.printAgent.count({
     *   where: {
     *     // ... the filter for the PrintAgents we want to count
     *   }
     * })
    **/
    count<T extends PrintAgentCountArgs>(
      args?: Subset<T, PrintAgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrintAgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrintAgent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintAgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrintAgentAggregateArgs>(args: Subset<T, PrintAgentAggregateArgs>): Prisma.PrismaPromise<GetPrintAgentAggregateType<T>>

    /**
     * Group by PrintAgent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintAgentGroupByArgs} args - Group by arguments.
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
      T extends PrintAgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrintAgentGroupByArgs['orderBy'] }
        : { orderBy?: PrintAgentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrintAgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrintAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrintAgent model
   */
  readonly fields: PrintAgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrintAgent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrintAgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    printJobs<T extends PrintAgent$printJobsArgs<ExtArgs> = {}>(args?: Subset<T, PrintAgent$printJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrintJobPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    printers<T extends PrintAgent$printersArgs<ExtArgs> = {}>(args?: Subset<T, PrintAgent$printersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the PrintAgent model
   */ 
  interface PrintAgentFieldRefs {
    readonly id: FieldRef<"PrintAgent", 'String'>
    readonly shopId: FieldRef<"PrintAgent", 'String'>
    readonly agentName: FieldRef<"PrintAgent", 'String'>
    readonly machineHostname: FieldRef<"PrintAgent", 'String'>
    readonly osVersion: FieldRef<"PrintAgent", 'String'>
    readonly ipAddress: FieldRef<"PrintAgent", 'String'>
    readonly authTokenHash: FieldRef<"PrintAgent", 'String'>
    readonly isConnected: FieldRef<"PrintAgent", 'Boolean'>
    readonly lastHeartbeatAt: FieldRef<"PrintAgent", 'DateTime'>
    readonly createdAt: FieldRef<"PrintAgent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PrintAgent findUnique
   */
  export type PrintAgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintAgent
     */
    select?: PrintAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintAgent
     */
    omit?: PrintAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintAgentInclude<ExtArgs> | null
    /**
     * Filter, which PrintAgent to fetch.
     */
    where: PrintAgentWhereUniqueInput
  }

  /**
   * PrintAgent findUniqueOrThrow
   */
  export type PrintAgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintAgent
     */
    select?: PrintAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintAgent
     */
    omit?: PrintAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintAgentInclude<ExtArgs> | null
    /**
     * Filter, which PrintAgent to fetch.
     */
    where: PrintAgentWhereUniqueInput
  }

  /**
   * PrintAgent findFirst
   */
  export type PrintAgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintAgent
     */
    select?: PrintAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintAgent
     */
    omit?: PrintAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintAgentInclude<ExtArgs> | null
    /**
     * Filter, which PrintAgent to fetch.
     */
    where?: PrintAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrintAgents to fetch.
     */
    orderBy?: PrintAgentOrderByWithRelationInput | PrintAgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrintAgents.
     */
    cursor?: PrintAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrintAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrintAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrintAgents.
     */
    distinct?: PrintAgentScalarFieldEnum | PrintAgentScalarFieldEnum[]
  }

  /**
   * PrintAgent findFirstOrThrow
   */
  export type PrintAgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintAgent
     */
    select?: PrintAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintAgent
     */
    omit?: PrintAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintAgentInclude<ExtArgs> | null
    /**
     * Filter, which PrintAgent to fetch.
     */
    where?: PrintAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrintAgents to fetch.
     */
    orderBy?: PrintAgentOrderByWithRelationInput | PrintAgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrintAgents.
     */
    cursor?: PrintAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrintAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrintAgents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrintAgents.
     */
    distinct?: PrintAgentScalarFieldEnum | PrintAgentScalarFieldEnum[]
  }

  /**
   * PrintAgent findMany
   */
  export type PrintAgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintAgent
     */
    select?: PrintAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintAgent
     */
    omit?: PrintAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintAgentInclude<ExtArgs> | null
    /**
     * Filter, which PrintAgents to fetch.
     */
    where?: PrintAgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrintAgents to fetch.
     */
    orderBy?: PrintAgentOrderByWithRelationInput | PrintAgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrintAgents.
     */
    cursor?: PrintAgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrintAgents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrintAgents.
     */
    skip?: number
    distinct?: PrintAgentScalarFieldEnum | PrintAgentScalarFieldEnum[]
  }

  /**
   * PrintAgent create
   */
  export type PrintAgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintAgent
     */
    select?: PrintAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintAgent
     */
    omit?: PrintAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintAgentInclude<ExtArgs> | null
    /**
     * The data needed to create a PrintAgent.
     */
    data: XOR<PrintAgentCreateInput, PrintAgentUncheckedCreateInput>
  }

  /**
   * PrintAgent createMany
   */
  export type PrintAgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrintAgents.
     */
    data: PrintAgentCreateManyInput | PrintAgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrintAgent update
   */
  export type PrintAgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintAgent
     */
    select?: PrintAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintAgent
     */
    omit?: PrintAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintAgentInclude<ExtArgs> | null
    /**
     * The data needed to update a PrintAgent.
     */
    data: XOR<PrintAgentUpdateInput, PrintAgentUncheckedUpdateInput>
    /**
     * Choose, which PrintAgent to update.
     */
    where: PrintAgentWhereUniqueInput
  }

  /**
   * PrintAgent updateMany
   */
  export type PrintAgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrintAgents.
     */
    data: XOR<PrintAgentUpdateManyMutationInput, PrintAgentUncheckedUpdateManyInput>
    /**
     * Filter which PrintAgents to update
     */
    where?: PrintAgentWhereInput
    /**
     * Limit how many PrintAgents to update.
     */
    limit?: number
  }

  /**
   * PrintAgent upsert
   */
  export type PrintAgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintAgent
     */
    select?: PrintAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintAgent
     */
    omit?: PrintAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintAgentInclude<ExtArgs> | null
    /**
     * The filter to search for the PrintAgent to update in case it exists.
     */
    where: PrintAgentWhereUniqueInput
    /**
     * In case the PrintAgent found by the `where` argument doesn't exist, create a new PrintAgent with this data.
     */
    create: XOR<PrintAgentCreateInput, PrintAgentUncheckedCreateInput>
    /**
     * In case the PrintAgent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrintAgentUpdateInput, PrintAgentUncheckedUpdateInput>
  }

  /**
   * PrintAgent delete
   */
  export type PrintAgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintAgent
     */
    select?: PrintAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintAgent
     */
    omit?: PrintAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintAgentInclude<ExtArgs> | null
    /**
     * Filter which PrintAgent to delete.
     */
    where: PrintAgentWhereUniqueInput
  }

  /**
   * PrintAgent deleteMany
   */
  export type PrintAgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrintAgents to delete
     */
    where?: PrintAgentWhereInput
    /**
     * Limit how many PrintAgents to delete.
     */
    limit?: number
  }

  /**
   * PrintAgent.printJobs
   */
  export type PrintAgent$printJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintJob
     */
    select?: PrintJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintJob
     */
    omit?: PrintJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintJobInclude<ExtArgs> | null
    where?: PrintJobWhereInput
    orderBy?: PrintJobOrderByWithRelationInput | PrintJobOrderByWithRelationInput[]
    cursor?: PrintJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrintJobScalarFieldEnum | PrintJobScalarFieldEnum[]
  }

  /**
   * PrintAgent.printers
   */
  export type PrintAgent$printersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    where?: PrinterWhereInput
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    cursor?: PrinterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrinterScalarFieldEnum | PrinterScalarFieldEnum[]
  }

  /**
   * PrintAgent without action
   */
  export type PrintAgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintAgent
     */
    select?: PrintAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintAgent
     */
    omit?: PrintAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintAgentInclude<ExtArgs> | null
  }


  /**
   * Model Printer
   */

  export type AggregatePrinter = {
    _count: PrinterCountAggregateOutputType | null
    _avg: PrinterAvgAggregateOutputType | null
    _sum: PrinterSumAggregateOutputType | null
    _min: PrinterMinAggregateOutputType | null
    _max: PrinterMaxAggregateOutputType | null
  }

  export type PrinterAvgAggregateOutputType = {
    currentQueueCount: number | null
  }

  export type PrinterSumAggregateOutputType = {
    currentQueueCount: number | null
  }

  export type PrinterMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    agentId: string | null
    windowsPrinterName: string | null
    displayName: string | null
    manufacturer: string | null
    model: string | null
    connectionType: string | null
    ipAddress: string | null
    supportsColor: boolean | null
    supportsDuplex: boolean | null
    supportedPaperSizes: string | null
    status: string | null
    isActive: boolean | null
    currentQueueCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrinterMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    agentId: string | null
    windowsPrinterName: string | null
    displayName: string | null
    manufacturer: string | null
    model: string | null
    connectionType: string | null
    ipAddress: string | null
    supportsColor: boolean | null
    supportsDuplex: boolean | null
    supportedPaperSizes: string | null
    status: string | null
    isActive: boolean | null
    currentQueueCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PrinterCountAggregateOutputType = {
    id: number
    shopId: number
    agentId: number
    windowsPrinterName: number
    displayName: number
    manufacturer: number
    model: number
    connectionType: number
    ipAddress: number
    supportsColor: number
    supportsDuplex: number
    supportedPaperSizes: number
    status: number
    isActive: number
    currentQueueCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PrinterAvgAggregateInputType = {
    currentQueueCount?: true
  }

  export type PrinterSumAggregateInputType = {
    currentQueueCount?: true
  }

  export type PrinterMinAggregateInputType = {
    id?: true
    shopId?: true
    agentId?: true
    windowsPrinterName?: true
    displayName?: true
    manufacturer?: true
    model?: true
    connectionType?: true
    ipAddress?: true
    supportsColor?: true
    supportsDuplex?: true
    supportedPaperSizes?: true
    status?: true
    isActive?: true
    currentQueueCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrinterMaxAggregateInputType = {
    id?: true
    shopId?: true
    agentId?: true
    windowsPrinterName?: true
    displayName?: true
    manufacturer?: true
    model?: true
    connectionType?: true
    ipAddress?: true
    supportsColor?: true
    supportsDuplex?: true
    supportedPaperSizes?: true
    status?: true
    isActive?: true
    currentQueueCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PrinterCountAggregateInputType = {
    id?: true
    shopId?: true
    agentId?: true
    windowsPrinterName?: true
    displayName?: true
    manufacturer?: true
    model?: true
    connectionType?: true
    ipAddress?: true
    supportsColor?: true
    supportsDuplex?: true
    supportedPaperSizes?: true
    status?: true
    isActive?: true
    currentQueueCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PrinterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Printer to aggregate.
     */
    where?: PrinterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Printers to fetch.
     */
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrinterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Printers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Printers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Printers
    **/
    _count?: true | PrinterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrinterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrinterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrinterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrinterMaxAggregateInputType
  }

  export type GetPrinterAggregateType<T extends PrinterAggregateArgs> = {
        [P in keyof T & keyof AggregatePrinter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrinter[P]>
      : GetScalarType<T[P], AggregatePrinter[P]>
  }




  export type PrinterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrinterWhereInput
    orderBy?: PrinterOrderByWithAggregationInput | PrinterOrderByWithAggregationInput[]
    by: PrinterScalarFieldEnum[] | PrinterScalarFieldEnum
    having?: PrinterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrinterCountAggregateInputType | true
    _avg?: PrinterAvgAggregateInputType
    _sum?: PrinterSumAggregateInputType
    _min?: PrinterMinAggregateInputType
    _max?: PrinterMaxAggregateInputType
  }

  export type PrinterGroupByOutputType = {
    id: string
    shopId: string
    agentId: string | null
    windowsPrinterName: string
    displayName: string
    manufacturer: string | null
    model: string | null
    connectionType: string
    ipAddress: string | null
    supportsColor: boolean
    supportsDuplex: boolean
    supportedPaperSizes: string
    status: string
    isActive: boolean
    currentQueueCount: number
    createdAt: Date
    updatedAt: Date
    _count: PrinterCountAggregateOutputType | null
    _avg: PrinterAvgAggregateOutputType | null
    _sum: PrinterSumAggregateOutputType | null
    _min: PrinterMinAggregateOutputType | null
    _max: PrinterMaxAggregateOutputType | null
  }

  type GetPrinterGroupByPayload<T extends PrinterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrinterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrinterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrinterGroupByOutputType[P]>
            : GetScalarType<T[P], PrinterGroupByOutputType[P]>
        }
      >
    >


  export type PrinterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    agentId?: boolean
    windowsPrinterName?: boolean
    displayName?: boolean
    manufacturer?: boolean
    model?: boolean
    connectionType?: boolean
    ipAddress?: boolean
    supportsColor?: boolean
    supportsDuplex?: boolean
    supportedPaperSizes?: boolean
    status?: boolean
    isActive?: boolean
    currentQueueCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    printJobs?: boolean | Printer$printJobsArgs<ExtArgs>
    agent?: boolean | Printer$agentArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    _count?: boolean | PrinterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["printer"]>



  export type PrinterSelectScalar = {
    id?: boolean
    shopId?: boolean
    agentId?: boolean
    windowsPrinterName?: boolean
    displayName?: boolean
    manufacturer?: boolean
    model?: boolean
    connectionType?: boolean
    ipAddress?: boolean
    supportsColor?: boolean
    supportsDuplex?: boolean
    supportedPaperSizes?: boolean
    status?: boolean
    isActive?: boolean
    currentQueueCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PrinterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "agentId" | "windowsPrinterName" | "displayName" | "manufacturer" | "model" | "connectionType" | "ipAddress" | "supportsColor" | "supportsDuplex" | "supportedPaperSizes" | "status" | "isActive" | "currentQueueCount" | "createdAt" | "updatedAt", ExtArgs["result"]["printer"]>
  export type PrinterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    printJobs?: boolean | Printer$printJobsArgs<ExtArgs>
    agent?: boolean | Printer$agentArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
    _count?: boolean | PrinterCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PrinterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Printer"
    objects: {
      printJobs: Prisma.$PrintJobPayload<ExtArgs>[]
      agent: Prisma.$PrintAgentPayload<ExtArgs> | null
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      agentId: string | null
      windowsPrinterName: string
      displayName: string
      manufacturer: string | null
      model: string | null
      connectionType: string
      ipAddress: string | null
      supportsColor: boolean
      supportsDuplex: boolean
      supportedPaperSizes: string
      status: string
      isActive: boolean
      currentQueueCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["printer"]>
    composites: {}
  }

  type PrinterGetPayload<S extends boolean | null | undefined | PrinterDefaultArgs> = $Result.GetResult<Prisma.$PrinterPayload, S>

  type PrinterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrinterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrinterCountAggregateInputType | true
    }

  export interface PrinterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Printer'], meta: { name: 'Printer' } }
    /**
     * Find zero or one Printer that matches the filter.
     * @param {PrinterFindUniqueArgs} args - Arguments to find a Printer
     * @example
     * // Get one Printer
     * const printer = await prisma.printer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrinterFindUniqueArgs>(args: SelectSubset<T, PrinterFindUniqueArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Printer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrinterFindUniqueOrThrowArgs} args - Arguments to find a Printer
     * @example
     * // Get one Printer
     * const printer = await prisma.printer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrinterFindUniqueOrThrowArgs>(args: SelectSubset<T, PrinterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Printer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterFindFirstArgs} args - Arguments to find a Printer
     * @example
     * // Get one Printer
     * const printer = await prisma.printer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrinterFindFirstArgs>(args?: SelectSubset<T, PrinterFindFirstArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Printer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterFindFirstOrThrowArgs} args - Arguments to find a Printer
     * @example
     * // Get one Printer
     * const printer = await prisma.printer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrinterFindFirstOrThrowArgs>(args?: SelectSubset<T, PrinterFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Printers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Printers
     * const printers = await prisma.printer.findMany()
     * 
     * // Get first 10 Printers
     * const printers = await prisma.printer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const printerWithIdOnly = await prisma.printer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrinterFindManyArgs>(args?: SelectSubset<T, PrinterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Printer.
     * @param {PrinterCreateArgs} args - Arguments to create a Printer.
     * @example
     * // Create one Printer
     * const Printer = await prisma.printer.create({
     *   data: {
     *     // ... data to create a Printer
     *   }
     * })
     * 
     */
    create<T extends PrinterCreateArgs>(args: SelectSubset<T, PrinterCreateArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Printers.
     * @param {PrinterCreateManyArgs} args - Arguments to create many Printers.
     * @example
     * // Create many Printers
     * const printer = await prisma.printer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrinterCreateManyArgs>(args?: SelectSubset<T, PrinterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Printer.
     * @param {PrinterDeleteArgs} args - Arguments to delete one Printer.
     * @example
     * // Delete one Printer
     * const Printer = await prisma.printer.delete({
     *   where: {
     *     // ... filter to delete one Printer
     *   }
     * })
     * 
     */
    delete<T extends PrinterDeleteArgs>(args: SelectSubset<T, PrinterDeleteArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Printer.
     * @param {PrinterUpdateArgs} args - Arguments to update one Printer.
     * @example
     * // Update one Printer
     * const printer = await prisma.printer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrinterUpdateArgs>(args: SelectSubset<T, PrinterUpdateArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Printers.
     * @param {PrinterDeleteManyArgs} args - Arguments to filter Printers to delete.
     * @example
     * // Delete a few Printers
     * const { count } = await prisma.printer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrinterDeleteManyArgs>(args?: SelectSubset<T, PrinterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Printers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Printers
     * const printer = await prisma.printer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrinterUpdateManyArgs>(args: SelectSubset<T, PrinterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Printer.
     * @param {PrinterUpsertArgs} args - Arguments to update or create a Printer.
     * @example
     * // Update or create a Printer
     * const printer = await prisma.printer.upsert({
     *   create: {
     *     // ... data to create a Printer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Printer we want to update
     *   }
     * })
     */
    upsert<T extends PrinterUpsertArgs>(args: SelectSubset<T, PrinterUpsertArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Printers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterCountArgs} args - Arguments to filter Printers to count.
     * @example
     * // Count the number of Printers
     * const count = await prisma.printer.count({
     *   where: {
     *     // ... the filter for the Printers we want to count
     *   }
     * })
    **/
    count<T extends PrinterCountArgs>(
      args?: Subset<T, PrinterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrinterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Printer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrinterAggregateArgs>(args: Subset<T, PrinterAggregateArgs>): Prisma.PrismaPromise<GetPrinterAggregateType<T>>

    /**
     * Group by Printer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrinterGroupByArgs} args - Group by arguments.
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
      T extends PrinterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrinterGroupByArgs['orderBy'] }
        : { orderBy?: PrinterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrinterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrinterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Printer model
   */
  readonly fields: PrinterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Printer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrinterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    printJobs<T extends Printer$printJobsArgs<ExtArgs> = {}>(args?: Subset<T, Printer$printJobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrintJobPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    agent<T extends Printer$agentArgs<ExtArgs> = {}>(args?: Subset<T, Printer$agentArgs<ExtArgs>>): Prisma__PrintAgentClient<$Result.GetResult<Prisma.$PrintAgentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Printer model
   */ 
  interface PrinterFieldRefs {
    readonly id: FieldRef<"Printer", 'String'>
    readonly shopId: FieldRef<"Printer", 'String'>
    readonly agentId: FieldRef<"Printer", 'String'>
    readonly windowsPrinterName: FieldRef<"Printer", 'String'>
    readonly displayName: FieldRef<"Printer", 'String'>
    readonly manufacturer: FieldRef<"Printer", 'String'>
    readonly model: FieldRef<"Printer", 'String'>
    readonly connectionType: FieldRef<"Printer", 'String'>
    readonly ipAddress: FieldRef<"Printer", 'String'>
    readonly supportsColor: FieldRef<"Printer", 'Boolean'>
    readonly supportsDuplex: FieldRef<"Printer", 'Boolean'>
    readonly supportedPaperSizes: FieldRef<"Printer", 'String'>
    readonly status: FieldRef<"Printer", 'String'>
    readonly isActive: FieldRef<"Printer", 'Boolean'>
    readonly currentQueueCount: FieldRef<"Printer", 'Int'>
    readonly createdAt: FieldRef<"Printer", 'DateTime'>
    readonly updatedAt: FieldRef<"Printer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Printer findUnique
   */
  export type PrinterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * Filter, which Printer to fetch.
     */
    where: PrinterWhereUniqueInput
  }

  /**
   * Printer findUniqueOrThrow
   */
  export type PrinterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * Filter, which Printer to fetch.
     */
    where: PrinterWhereUniqueInput
  }

  /**
   * Printer findFirst
   */
  export type PrinterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * Filter, which Printer to fetch.
     */
    where?: PrinterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Printers to fetch.
     */
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Printers.
     */
    cursor?: PrinterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Printers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Printers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Printers.
     */
    distinct?: PrinterScalarFieldEnum | PrinterScalarFieldEnum[]
  }

  /**
   * Printer findFirstOrThrow
   */
  export type PrinterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * Filter, which Printer to fetch.
     */
    where?: PrinterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Printers to fetch.
     */
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Printers.
     */
    cursor?: PrinterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Printers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Printers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Printers.
     */
    distinct?: PrinterScalarFieldEnum | PrinterScalarFieldEnum[]
  }

  /**
   * Printer findMany
   */
  export type PrinterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * Filter, which Printers to fetch.
     */
    where?: PrinterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Printers to fetch.
     */
    orderBy?: PrinterOrderByWithRelationInput | PrinterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Printers.
     */
    cursor?: PrinterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Printers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Printers.
     */
    skip?: number
    distinct?: PrinterScalarFieldEnum | PrinterScalarFieldEnum[]
  }

  /**
   * Printer create
   */
  export type PrinterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * The data needed to create a Printer.
     */
    data: XOR<PrinterCreateInput, PrinterUncheckedCreateInput>
  }

  /**
   * Printer createMany
   */
  export type PrinterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Printers.
     */
    data: PrinterCreateManyInput | PrinterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Printer update
   */
  export type PrinterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * The data needed to update a Printer.
     */
    data: XOR<PrinterUpdateInput, PrinterUncheckedUpdateInput>
    /**
     * Choose, which Printer to update.
     */
    where: PrinterWhereUniqueInput
  }

  /**
   * Printer updateMany
   */
  export type PrinterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Printers.
     */
    data: XOR<PrinterUpdateManyMutationInput, PrinterUncheckedUpdateManyInput>
    /**
     * Filter which Printers to update
     */
    where?: PrinterWhereInput
    /**
     * Limit how many Printers to update.
     */
    limit?: number
  }

  /**
   * Printer upsert
   */
  export type PrinterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * The filter to search for the Printer to update in case it exists.
     */
    where: PrinterWhereUniqueInput
    /**
     * In case the Printer found by the `where` argument doesn't exist, create a new Printer with this data.
     */
    create: XOR<PrinterCreateInput, PrinterUncheckedCreateInput>
    /**
     * In case the Printer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrinterUpdateInput, PrinterUncheckedUpdateInput>
  }

  /**
   * Printer delete
   */
  export type PrinterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    /**
     * Filter which Printer to delete.
     */
    where: PrinterWhereUniqueInput
  }

  /**
   * Printer deleteMany
   */
  export type PrinterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Printers to delete
     */
    where?: PrinterWhereInput
    /**
     * Limit how many Printers to delete.
     */
    limit?: number
  }

  /**
   * Printer.printJobs
   */
  export type Printer$printJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintJob
     */
    select?: PrintJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintJob
     */
    omit?: PrintJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintJobInclude<ExtArgs> | null
    where?: PrintJobWhereInput
    orderBy?: PrintJobOrderByWithRelationInput | PrintJobOrderByWithRelationInput[]
    cursor?: PrintJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrintJobScalarFieldEnum | PrintJobScalarFieldEnum[]
  }

  /**
   * Printer.agent
   */
  export type Printer$agentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintAgent
     */
    select?: PrintAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintAgent
     */
    omit?: PrintAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintAgentInclude<ExtArgs> | null
    where?: PrintAgentWhereInput
  }

  /**
   * Printer without action
   */
  export type PrinterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
  }


  /**
   * Model PrintJob
   */

  export type AggregatePrintJob = {
    _count: PrintJobCountAggregateOutputType | null
    _avg: PrintJobAvgAggregateOutputType | null
    _sum: PrintJobSumAggregateOutputType | null
    _min: PrintJobMinAggregateOutputType | null
    _max: PrintJobMaxAggregateOutputType | null
  }

  export type PrintJobAvgAggregateOutputType = {
    spoolerJobId: number | null
  }

  export type PrintJobSumAggregateOutputType = {
    spoolerJobId: number | null
  }

  export type PrintJobMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    documentId: string | null
    printerId: string | null
    agentId: string | null
    status: string | null
    spoolerJobId: number | null
    errorMessage: string | null
    dispatchedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type PrintJobMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    documentId: string | null
    printerId: string | null
    agentId: string | null
    status: string | null
    spoolerJobId: number | null
    errorMessage: string | null
    dispatchedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
  }

  export type PrintJobCountAggregateOutputType = {
    id: number
    orderId: number
    documentId: number
    printerId: number
    agentId: number
    status: number
    spoolerJobId: number
    errorMessage: number
    dispatchedAt: number
    completedAt: number
    createdAt: number
    _all: number
  }


  export type PrintJobAvgAggregateInputType = {
    spoolerJobId?: true
  }

  export type PrintJobSumAggregateInputType = {
    spoolerJobId?: true
  }

  export type PrintJobMinAggregateInputType = {
    id?: true
    orderId?: true
    documentId?: true
    printerId?: true
    agentId?: true
    status?: true
    spoolerJobId?: true
    errorMessage?: true
    dispatchedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type PrintJobMaxAggregateInputType = {
    id?: true
    orderId?: true
    documentId?: true
    printerId?: true
    agentId?: true
    status?: true
    spoolerJobId?: true
    errorMessage?: true
    dispatchedAt?: true
    completedAt?: true
    createdAt?: true
  }

  export type PrintJobCountAggregateInputType = {
    id?: true
    orderId?: true
    documentId?: true
    printerId?: true
    agentId?: true
    status?: true
    spoolerJobId?: true
    errorMessage?: true
    dispatchedAt?: true
    completedAt?: true
    createdAt?: true
    _all?: true
  }

  export type PrintJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrintJob to aggregate.
     */
    where?: PrintJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrintJobs to fetch.
     */
    orderBy?: PrintJobOrderByWithRelationInput | PrintJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrintJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrintJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrintJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrintJobs
    **/
    _count?: true | PrintJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrintJobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrintJobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrintJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrintJobMaxAggregateInputType
  }

  export type GetPrintJobAggregateType<T extends PrintJobAggregateArgs> = {
        [P in keyof T & keyof AggregatePrintJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrintJob[P]>
      : GetScalarType<T[P], AggregatePrintJob[P]>
  }




  export type PrintJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrintJobWhereInput
    orderBy?: PrintJobOrderByWithAggregationInput | PrintJobOrderByWithAggregationInput[]
    by: PrintJobScalarFieldEnum[] | PrintJobScalarFieldEnum
    having?: PrintJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrintJobCountAggregateInputType | true
    _avg?: PrintJobAvgAggregateInputType
    _sum?: PrintJobSumAggregateInputType
    _min?: PrintJobMinAggregateInputType
    _max?: PrintJobMaxAggregateInputType
  }

  export type PrintJobGroupByOutputType = {
    id: string
    orderId: string
    documentId: string
    printerId: string | null
    agentId: string | null
    status: string
    spoolerJobId: number | null
    errorMessage: string | null
    dispatchedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    _count: PrintJobCountAggregateOutputType | null
    _avg: PrintJobAvgAggregateOutputType | null
    _sum: PrintJobSumAggregateOutputType | null
    _min: PrintJobMinAggregateOutputType | null
    _max: PrintJobMaxAggregateOutputType | null
  }

  type GetPrintJobGroupByPayload<T extends PrintJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrintJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrintJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrintJobGroupByOutputType[P]>
            : GetScalarType<T[P], PrintJobGroupByOutputType[P]>
        }
      >
    >


  export type PrintJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    documentId?: boolean
    printerId?: boolean
    agentId?: boolean
    status?: boolean
    spoolerJobId?: boolean
    errorMessage?: boolean
    dispatchedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    agent?: boolean | PrintJob$agentArgs<ExtArgs>
    document?: boolean | OrderDocumentDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    printer?: boolean | PrintJob$printerArgs<ExtArgs>
  }, ExtArgs["result"]["printJob"]>



  export type PrintJobSelectScalar = {
    id?: boolean
    orderId?: boolean
    documentId?: boolean
    printerId?: boolean
    agentId?: boolean
    status?: boolean
    spoolerJobId?: boolean
    errorMessage?: boolean
    dispatchedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
  }

  export type PrintJobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "documentId" | "printerId" | "agentId" | "status" | "spoolerJobId" | "errorMessage" | "dispatchedAt" | "completedAt" | "createdAt", ExtArgs["result"]["printJob"]>
  export type PrintJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent?: boolean | PrintJob$agentArgs<ExtArgs>
    document?: boolean | OrderDocumentDefaultArgs<ExtArgs>
    order?: boolean | OrderDefaultArgs<ExtArgs>
    printer?: boolean | PrintJob$printerArgs<ExtArgs>
  }

  export type $PrintJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrintJob"
    objects: {
      agent: Prisma.$PrintAgentPayload<ExtArgs> | null
      document: Prisma.$OrderDocumentPayload<ExtArgs>
      order: Prisma.$OrderPayload<ExtArgs>
      printer: Prisma.$PrinterPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      documentId: string
      printerId: string | null
      agentId: string | null
      status: string
      spoolerJobId: number | null
      errorMessage: string | null
      dispatchedAt: Date | null
      completedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["printJob"]>
    composites: {}
  }

  type PrintJobGetPayload<S extends boolean | null | undefined | PrintJobDefaultArgs> = $Result.GetResult<Prisma.$PrintJobPayload, S>

  type PrintJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrintJobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrintJobCountAggregateInputType | true
    }

  export interface PrintJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrintJob'], meta: { name: 'PrintJob' } }
    /**
     * Find zero or one PrintJob that matches the filter.
     * @param {PrintJobFindUniqueArgs} args - Arguments to find a PrintJob
     * @example
     * // Get one PrintJob
     * const printJob = await prisma.printJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrintJobFindUniqueArgs>(args: SelectSubset<T, PrintJobFindUniqueArgs<ExtArgs>>): Prisma__PrintJobClient<$Result.GetResult<Prisma.$PrintJobPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PrintJob that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrintJobFindUniqueOrThrowArgs} args - Arguments to find a PrintJob
     * @example
     * // Get one PrintJob
     * const printJob = await prisma.printJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrintJobFindUniqueOrThrowArgs>(args: SelectSubset<T, PrintJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrintJobClient<$Result.GetResult<Prisma.$PrintJobPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PrintJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintJobFindFirstArgs} args - Arguments to find a PrintJob
     * @example
     * // Get one PrintJob
     * const printJob = await prisma.printJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrintJobFindFirstArgs>(args?: SelectSubset<T, PrintJobFindFirstArgs<ExtArgs>>): Prisma__PrintJobClient<$Result.GetResult<Prisma.$PrintJobPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PrintJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintJobFindFirstOrThrowArgs} args - Arguments to find a PrintJob
     * @example
     * // Get one PrintJob
     * const printJob = await prisma.printJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrintJobFindFirstOrThrowArgs>(args?: SelectSubset<T, PrintJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrintJobClient<$Result.GetResult<Prisma.$PrintJobPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PrintJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrintJobs
     * const printJobs = await prisma.printJob.findMany()
     * 
     * // Get first 10 PrintJobs
     * const printJobs = await prisma.printJob.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const printJobWithIdOnly = await prisma.printJob.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrintJobFindManyArgs>(args?: SelectSubset<T, PrintJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrintJobPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PrintJob.
     * @param {PrintJobCreateArgs} args - Arguments to create a PrintJob.
     * @example
     * // Create one PrintJob
     * const PrintJob = await prisma.printJob.create({
     *   data: {
     *     // ... data to create a PrintJob
     *   }
     * })
     * 
     */
    create<T extends PrintJobCreateArgs>(args: SelectSubset<T, PrintJobCreateArgs<ExtArgs>>): Prisma__PrintJobClient<$Result.GetResult<Prisma.$PrintJobPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PrintJobs.
     * @param {PrintJobCreateManyArgs} args - Arguments to create many PrintJobs.
     * @example
     * // Create many PrintJobs
     * const printJob = await prisma.printJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrintJobCreateManyArgs>(args?: SelectSubset<T, PrintJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PrintJob.
     * @param {PrintJobDeleteArgs} args - Arguments to delete one PrintJob.
     * @example
     * // Delete one PrintJob
     * const PrintJob = await prisma.printJob.delete({
     *   where: {
     *     // ... filter to delete one PrintJob
     *   }
     * })
     * 
     */
    delete<T extends PrintJobDeleteArgs>(args: SelectSubset<T, PrintJobDeleteArgs<ExtArgs>>): Prisma__PrintJobClient<$Result.GetResult<Prisma.$PrintJobPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PrintJob.
     * @param {PrintJobUpdateArgs} args - Arguments to update one PrintJob.
     * @example
     * // Update one PrintJob
     * const printJob = await prisma.printJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrintJobUpdateArgs>(args: SelectSubset<T, PrintJobUpdateArgs<ExtArgs>>): Prisma__PrintJobClient<$Result.GetResult<Prisma.$PrintJobPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PrintJobs.
     * @param {PrintJobDeleteManyArgs} args - Arguments to filter PrintJobs to delete.
     * @example
     * // Delete a few PrintJobs
     * const { count } = await prisma.printJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrintJobDeleteManyArgs>(args?: SelectSubset<T, PrintJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrintJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrintJobs
     * const printJob = await prisma.printJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrintJobUpdateManyArgs>(args: SelectSubset<T, PrintJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PrintJob.
     * @param {PrintJobUpsertArgs} args - Arguments to update or create a PrintJob.
     * @example
     * // Update or create a PrintJob
     * const printJob = await prisma.printJob.upsert({
     *   create: {
     *     // ... data to create a PrintJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrintJob we want to update
     *   }
     * })
     */
    upsert<T extends PrintJobUpsertArgs>(args: SelectSubset<T, PrintJobUpsertArgs<ExtArgs>>): Prisma__PrintJobClient<$Result.GetResult<Prisma.$PrintJobPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PrintJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintJobCountArgs} args - Arguments to filter PrintJobs to count.
     * @example
     * // Count the number of PrintJobs
     * const count = await prisma.printJob.count({
     *   where: {
     *     // ... the filter for the PrintJobs we want to count
     *   }
     * })
    **/
    count<T extends PrintJobCountArgs>(
      args?: Subset<T, PrintJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrintJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrintJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PrintJobAggregateArgs>(args: Subset<T, PrintJobAggregateArgs>): Prisma.PrismaPromise<GetPrintJobAggregateType<T>>

    /**
     * Group by PrintJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrintJobGroupByArgs} args - Group by arguments.
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
      T extends PrintJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrintJobGroupByArgs['orderBy'] }
        : { orderBy?: PrintJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PrintJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrintJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrintJob model
   */
  readonly fields: PrintJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrintJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrintJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agent<T extends PrintJob$agentArgs<ExtArgs> = {}>(args?: Subset<T, PrintJob$agentArgs<ExtArgs>>): Prisma__PrintAgentClient<$Result.GetResult<Prisma.$PrintAgentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    document<T extends OrderDocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDocumentDefaultArgs<ExtArgs>>): Prisma__OrderDocumentClient<$Result.GetResult<Prisma.$OrderDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    printer<T extends PrintJob$printerArgs<ExtArgs> = {}>(args?: Subset<T, PrintJob$printerArgs<ExtArgs>>): Prisma__PrinterClient<$Result.GetResult<Prisma.$PrinterPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
   * Fields of the PrintJob model
   */ 
  interface PrintJobFieldRefs {
    readonly id: FieldRef<"PrintJob", 'String'>
    readonly orderId: FieldRef<"PrintJob", 'String'>
    readonly documentId: FieldRef<"PrintJob", 'String'>
    readonly printerId: FieldRef<"PrintJob", 'String'>
    readonly agentId: FieldRef<"PrintJob", 'String'>
    readonly status: FieldRef<"PrintJob", 'String'>
    readonly spoolerJobId: FieldRef<"PrintJob", 'Int'>
    readonly errorMessage: FieldRef<"PrintJob", 'String'>
    readonly dispatchedAt: FieldRef<"PrintJob", 'DateTime'>
    readonly completedAt: FieldRef<"PrintJob", 'DateTime'>
    readonly createdAt: FieldRef<"PrintJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PrintJob findUnique
   */
  export type PrintJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintJob
     */
    select?: PrintJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintJob
     */
    omit?: PrintJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintJobInclude<ExtArgs> | null
    /**
     * Filter, which PrintJob to fetch.
     */
    where: PrintJobWhereUniqueInput
  }

  /**
   * PrintJob findUniqueOrThrow
   */
  export type PrintJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintJob
     */
    select?: PrintJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintJob
     */
    omit?: PrintJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintJobInclude<ExtArgs> | null
    /**
     * Filter, which PrintJob to fetch.
     */
    where: PrintJobWhereUniqueInput
  }

  /**
   * PrintJob findFirst
   */
  export type PrintJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintJob
     */
    select?: PrintJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintJob
     */
    omit?: PrintJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintJobInclude<ExtArgs> | null
    /**
     * Filter, which PrintJob to fetch.
     */
    where?: PrintJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrintJobs to fetch.
     */
    orderBy?: PrintJobOrderByWithRelationInput | PrintJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrintJobs.
     */
    cursor?: PrintJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrintJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrintJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrintJobs.
     */
    distinct?: PrintJobScalarFieldEnum | PrintJobScalarFieldEnum[]
  }

  /**
   * PrintJob findFirstOrThrow
   */
  export type PrintJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintJob
     */
    select?: PrintJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintJob
     */
    omit?: PrintJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintJobInclude<ExtArgs> | null
    /**
     * Filter, which PrintJob to fetch.
     */
    where?: PrintJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrintJobs to fetch.
     */
    orderBy?: PrintJobOrderByWithRelationInput | PrintJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrintJobs.
     */
    cursor?: PrintJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrintJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrintJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrintJobs.
     */
    distinct?: PrintJobScalarFieldEnum | PrintJobScalarFieldEnum[]
  }

  /**
   * PrintJob findMany
   */
  export type PrintJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintJob
     */
    select?: PrintJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintJob
     */
    omit?: PrintJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintJobInclude<ExtArgs> | null
    /**
     * Filter, which PrintJobs to fetch.
     */
    where?: PrintJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrintJobs to fetch.
     */
    orderBy?: PrintJobOrderByWithRelationInput | PrintJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrintJobs.
     */
    cursor?: PrintJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrintJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrintJobs.
     */
    skip?: number
    distinct?: PrintJobScalarFieldEnum | PrintJobScalarFieldEnum[]
  }

  /**
   * PrintJob create
   */
  export type PrintJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintJob
     */
    select?: PrintJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintJob
     */
    omit?: PrintJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintJobInclude<ExtArgs> | null
    /**
     * The data needed to create a PrintJob.
     */
    data: XOR<PrintJobCreateInput, PrintJobUncheckedCreateInput>
  }

  /**
   * PrintJob createMany
   */
  export type PrintJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrintJobs.
     */
    data: PrintJobCreateManyInput | PrintJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrintJob update
   */
  export type PrintJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintJob
     */
    select?: PrintJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintJob
     */
    omit?: PrintJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintJobInclude<ExtArgs> | null
    /**
     * The data needed to update a PrintJob.
     */
    data: XOR<PrintJobUpdateInput, PrintJobUncheckedUpdateInput>
    /**
     * Choose, which PrintJob to update.
     */
    where: PrintJobWhereUniqueInput
  }

  /**
   * PrintJob updateMany
   */
  export type PrintJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrintJobs.
     */
    data: XOR<PrintJobUpdateManyMutationInput, PrintJobUncheckedUpdateManyInput>
    /**
     * Filter which PrintJobs to update
     */
    where?: PrintJobWhereInput
    /**
     * Limit how many PrintJobs to update.
     */
    limit?: number
  }

  /**
   * PrintJob upsert
   */
  export type PrintJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintJob
     */
    select?: PrintJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintJob
     */
    omit?: PrintJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintJobInclude<ExtArgs> | null
    /**
     * The filter to search for the PrintJob to update in case it exists.
     */
    where: PrintJobWhereUniqueInput
    /**
     * In case the PrintJob found by the `where` argument doesn't exist, create a new PrintJob with this data.
     */
    create: XOR<PrintJobCreateInput, PrintJobUncheckedCreateInput>
    /**
     * In case the PrintJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrintJobUpdateInput, PrintJobUncheckedUpdateInput>
  }

  /**
   * PrintJob delete
   */
  export type PrintJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintJob
     */
    select?: PrintJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintJob
     */
    omit?: PrintJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintJobInclude<ExtArgs> | null
    /**
     * Filter which PrintJob to delete.
     */
    where: PrintJobWhereUniqueInput
  }

  /**
   * PrintJob deleteMany
   */
  export type PrintJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrintJobs to delete
     */
    where?: PrintJobWhereInput
    /**
     * Limit how many PrintJobs to delete.
     */
    limit?: number
  }

  /**
   * PrintJob.agent
   */
  export type PrintJob$agentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintAgent
     */
    select?: PrintAgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintAgent
     */
    omit?: PrintAgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintAgentInclude<ExtArgs> | null
    where?: PrintAgentWhereInput
  }

  /**
   * PrintJob.printer
   */
  export type PrintJob$printerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Printer
     */
    select?: PrinterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Printer
     */
    omit?: PrinterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrinterInclude<ExtArgs> | null
    where?: PrinterWhereInput
  }

  /**
   * PrintJob without action
   */
  export type PrintJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrintJob
     */
    select?: PrintJobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrintJob
     */
    omit?: PrintJobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrintJobInclude<ExtArgs> | null
  }


  /**
   * Model PricingRule
   */

  export type AggregatePricingRule = {
    _count: PricingRuleCountAggregateOutputType | null
    _avg: PricingRuleAvgAggregateOutputType | null
    _sum: PricingRuleSumAggregateOutputType | null
    _min: PricingRuleMinAggregateOutputType | null
    _max: PricingRuleMaxAggregateOutputType | null
  }

  export type PricingRuleAvgAggregateOutputType = {
    bwSinglePrice: number | null
    bwDoublePrice: number | null
    colorSinglePrice: number | null
    colorDoublePrice: number | null
  }

  export type PricingRuleSumAggregateOutputType = {
    bwSinglePrice: number | null
    bwDoublePrice: number | null
    colorSinglePrice: number | null
    colorDoublePrice: number | null
  }

  export type PricingRuleMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    paperSize: string | null
    bwSinglePrice: number | null
    bwDoublePrice: number | null
    colorSinglePrice: number | null
    colorDoublePrice: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type PricingRuleMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    paperSize: string | null
    bwSinglePrice: number | null
    bwDoublePrice: number | null
    colorSinglePrice: number | null
    colorDoublePrice: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type PricingRuleCountAggregateOutputType = {
    id: number
    shopId: number
    paperSize: number
    bwSinglePrice: number
    bwDoublePrice: number
    colorSinglePrice: number
    colorDoublePrice: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type PricingRuleAvgAggregateInputType = {
    bwSinglePrice?: true
    bwDoublePrice?: true
    colorSinglePrice?: true
    colorDoublePrice?: true
  }

  export type PricingRuleSumAggregateInputType = {
    bwSinglePrice?: true
    bwDoublePrice?: true
    colorSinglePrice?: true
    colorDoublePrice?: true
  }

  export type PricingRuleMinAggregateInputType = {
    id?: true
    shopId?: true
    paperSize?: true
    bwSinglePrice?: true
    bwDoublePrice?: true
    colorSinglePrice?: true
    colorDoublePrice?: true
    isActive?: true
    createdAt?: true
  }

  export type PricingRuleMaxAggregateInputType = {
    id?: true
    shopId?: true
    paperSize?: true
    bwSinglePrice?: true
    bwDoublePrice?: true
    colorSinglePrice?: true
    colorDoublePrice?: true
    isActive?: true
    createdAt?: true
  }

  export type PricingRuleCountAggregateInputType = {
    id?: true
    shopId?: true
    paperSize?: true
    bwSinglePrice?: true
    bwDoublePrice?: true
    colorSinglePrice?: true
    colorDoublePrice?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type PricingRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingRule to aggregate.
     */
    where?: PricingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRules to fetch.
     */
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PricingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PricingRules
    **/
    _count?: true | PricingRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PricingRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PricingRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PricingRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PricingRuleMaxAggregateInputType
  }

  export type GetPricingRuleAggregateType<T extends PricingRuleAggregateArgs> = {
        [P in keyof T & keyof AggregatePricingRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePricingRule[P]>
      : GetScalarType<T[P], AggregatePricingRule[P]>
  }




  export type PricingRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PricingRuleWhereInput
    orderBy?: PricingRuleOrderByWithAggregationInput | PricingRuleOrderByWithAggregationInput[]
    by: PricingRuleScalarFieldEnum[] | PricingRuleScalarFieldEnum
    having?: PricingRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PricingRuleCountAggregateInputType | true
    _avg?: PricingRuleAvgAggregateInputType
    _sum?: PricingRuleSumAggregateInputType
    _min?: PricingRuleMinAggregateInputType
    _max?: PricingRuleMaxAggregateInputType
  }

  export type PricingRuleGroupByOutputType = {
    id: string
    shopId: string
    paperSize: string
    bwSinglePrice: number
    bwDoublePrice: number
    colorSinglePrice: number
    colorDoublePrice: number
    isActive: boolean
    createdAt: Date
    _count: PricingRuleCountAggregateOutputType | null
    _avg: PricingRuleAvgAggregateOutputType | null
    _sum: PricingRuleSumAggregateOutputType | null
    _min: PricingRuleMinAggregateOutputType | null
    _max: PricingRuleMaxAggregateOutputType | null
  }

  type GetPricingRuleGroupByPayload<T extends PricingRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PricingRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PricingRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PricingRuleGroupByOutputType[P]>
            : GetScalarType<T[P], PricingRuleGroupByOutputType[P]>
        }
      >
    >


  export type PricingRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    paperSize?: boolean
    bwSinglePrice?: boolean
    bwDoublePrice?: boolean
    colorSinglePrice?: boolean
    colorDoublePrice?: boolean
    isActive?: boolean
    createdAt?: boolean
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pricingRule"]>



  export type PricingRuleSelectScalar = {
    id?: boolean
    shopId?: boolean
    paperSize?: boolean
    bwSinglePrice?: boolean
    bwDoublePrice?: boolean
    colorSinglePrice?: boolean
    colorDoublePrice?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type PricingRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "paperSize" | "bwSinglePrice" | "bwDoublePrice" | "colorSinglePrice" | "colorDoublePrice" | "isActive" | "createdAt", ExtArgs["result"]["pricingRule"]>
  export type PricingRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $PricingRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PricingRule"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      paperSize: string
      bwSinglePrice: number
      bwDoublePrice: number
      colorSinglePrice: number
      colorDoublePrice: number
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["pricingRule"]>
    composites: {}
  }

  type PricingRuleGetPayload<S extends boolean | null | undefined | PricingRuleDefaultArgs> = $Result.GetResult<Prisma.$PricingRulePayload, S>

  type PricingRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PricingRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PricingRuleCountAggregateInputType | true
    }

  export interface PricingRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PricingRule'], meta: { name: 'PricingRule' } }
    /**
     * Find zero or one PricingRule that matches the filter.
     * @param {PricingRuleFindUniqueArgs} args - Arguments to find a PricingRule
     * @example
     * // Get one PricingRule
     * const pricingRule = await prisma.pricingRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PricingRuleFindUniqueArgs>(args: SelectSubset<T, PricingRuleFindUniqueArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PricingRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PricingRuleFindUniqueOrThrowArgs} args - Arguments to find a PricingRule
     * @example
     * // Get one PricingRule
     * const pricingRule = await prisma.pricingRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PricingRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, PricingRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PricingRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleFindFirstArgs} args - Arguments to find a PricingRule
     * @example
     * // Get one PricingRule
     * const pricingRule = await prisma.pricingRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PricingRuleFindFirstArgs>(args?: SelectSubset<T, PricingRuleFindFirstArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PricingRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleFindFirstOrThrowArgs} args - Arguments to find a PricingRule
     * @example
     * // Get one PricingRule
     * const pricingRule = await prisma.pricingRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PricingRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, PricingRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PricingRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PricingRules
     * const pricingRules = await prisma.pricingRule.findMany()
     * 
     * // Get first 10 PricingRules
     * const pricingRules = await prisma.pricingRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pricingRuleWithIdOnly = await prisma.pricingRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PricingRuleFindManyArgs>(args?: SelectSubset<T, PricingRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PricingRule.
     * @param {PricingRuleCreateArgs} args - Arguments to create a PricingRule.
     * @example
     * // Create one PricingRule
     * const PricingRule = await prisma.pricingRule.create({
     *   data: {
     *     // ... data to create a PricingRule
     *   }
     * })
     * 
     */
    create<T extends PricingRuleCreateArgs>(args: SelectSubset<T, PricingRuleCreateArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PricingRules.
     * @param {PricingRuleCreateManyArgs} args - Arguments to create many PricingRules.
     * @example
     * // Create many PricingRules
     * const pricingRule = await prisma.pricingRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PricingRuleCreateManyArgs>(args?: SelectSubset<T, PricingRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PricingRule.
     * @param {PricingRuleDeleteArgs} args - Arguments to delete one PricingRule.
     * @example
     * // Delete one PricingRule
     * const PricingRule = await prisma.pricingRule.delete({
     *   where: {
     *     // ... filter to delete one PricingRule
     *   }
     * })
     * 
     */
    delete<T extends PricingRuleDeleteArgs>(args: SelectSubset<T, PricingRuleDeleteArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PricingRule.
     * @param {PricingRuleUpdateArgs} args - Arguments to update one PricingRule.
     * @example
     * // Update one PricingRule
     * const pricingRule = await prisma.pricingRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PricingRuleUpdateArgs>(args: SelectSubset<T, PricingRuleUpdateArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PricingRules.
     * @param {PricingRuleDeleteManyArgs} args - Arguments to filter PricingRules to delete.
     * @example
     * // Delete a few PricingRules
     * const { count } = await prisma.pricingRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PricingRuleDeleteManyArgs>(args?: SelectSubset<T, PricingRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PricingRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PricingRules
     * const pricingRule = await prisma.pricingRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PricingRuleUpdateManyArgs>(args: SelectSubset<T, PricingRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PricingRule.
     * @param {PricingRuleUpsertArgs} args - Arguments to update or create a PricingRule.
     * @example
     * // Update or create a PricingRule
     * const pricingRule = await prisma.pricingRule.upsert({
     *   create: {
     *     // ... data to create a PricingRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PricingRule we want to update
     *   }
     * })
     */
    upsert<T extends PricingRuleUpsertArgs>(args: SelectSubset<T, PricingRuleUpsertArgs<ExtArgs>>): Prisma__PricingRuleClient<$Result.GetResult<Prisma.$PricingRulePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PricingRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleCountArgs} args - Arguments to filter PricingRules to count.
     * @example
     * // Count the number of PricingRules
     * const count = await prisma.pricingRule.count({
     *   where: {
     *     // ... the filter for the PricingRules we want to count
     *   }
     * })
    **/
    count<T extends PricingRuleCountArgs>(
      args?: Subset<T, PricingRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PricingRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PricingRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PricingRuleAggregateArgs>(args: Subset<T, PricingRuleAggregateArgs>): Prisma.PrismaPromise<GetPricingRuleAggregateType<T>>

    /**
     * Group by PricingRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PricingRuleGroupByArgs} args - Group by arguments.
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
      T extends PricingRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PricingRuleGroupByArgs['orderBy'] }
        : { orderBy?: PricingRuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PricingRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPricingRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PricingRule model
   */
  readonly fields: PricingRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PricingRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PricingRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the PricingRule model
   */ 
  interface PricingRuleFieldRefs {
    readonly id: FieldRef<"PricingRule", 'String'>
    readonly shopId: FieldRef<"PricingRule", 'String'>
    readonly paperSize: FieldRef<"PricingRule", 'String'>
    readonly bwSinglePrice: FieldRef<"PricingRule", 'Float'>
    readonly bwDoublePrice: FieldRef<"PricingRule", 'Float'>
    readonly colorSinglePrice: FieldRef<"PricingRule", 'Float'>
    readonly colorDoublePrice: FieldRef<"PricingRule", 'Float'>
    readonly isActive: FieldRef<"PricingRule", 'Boolean'>
    readonly createdAt: FieldRef<"PricingRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PricingRule findUnique
   */
  export type PricingRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRule to fetch.
     */
    where: PricingRuleWhereUniqueInput
  }

  /**
   * PricingRule findUniqueOrThrow
   */
  export type PricingRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRule to fetch.
     */
    where: PricingRuleWhereUniqueInput
  }

  /**
   * PricingRule findFirst
   */
  export type PricingRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRule to fetch.
     */
    where?: PricingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRules to fetch.
     */
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingRules.
     */
    cursor?: PricingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingRules.
     */
    distinct?: PricingRuleScalarFieldEnum | PricingRuleScalarFieldEnum[]
  }

  /**
   * PricingRule findFirstOrThrow
   */
  export type PricingRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRule to fetch.
     */
    where?: PricingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRules to fetch.
     */
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PricingRules.
     */
    cursor?: PricingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PricingRules.
     */
    distinct?: PricingRuleScalarFieldEnum | PricingRuleScalarFieldEnum[]
  }

  /**
   * PricingRule findMany
   */
  export type PricingRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter, which PricingRules to fetch.
     */
    where?: PricingRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PricingRules to fetch.
     */
    orderBy?: PricingRuleOrderByWithRelationInput | PricingRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PricingRules.
     */
    cursor?: PricingRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PricingRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PricingRules.
     */
    skip?: number
    distinct?: PricingRuleScalarFieldEnum | PricingRuleScalarFieldEnum[]
  }

  /**
   * PricingRule create
   */
  export type PricingRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a PricingRule.
     */
    data: XOR<PricingRuleCreateInput, PricingRuleUncheckedCreateInput>
  }

  /**
   * PricingRule createMany
   */
  export type PricingRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PricingRules.
     */
    data: PricingRuleCreateManyInput | PricingRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PricingRule update
   */
  export type PricingRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a PricingRule.
     */
    data: XOR<PricingRuleUpdateInput, PricingRuleUncheckedUpdateInput>
    /**
     * Choose, which PricingRule to update.
     */
    where: PricingRuleWhereUniqueInput
  }

  /**
   * PricingRule updateMany
   */
  export type PricingRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PricingRules.
     */
    data: XOR<PricingRuleUpdateManyMutationInput, PricingRuleUncheckedUpdateManyInput>
    /**
     * Filter which PricingRules to update
     */
    where?: PricingRuleWhereInput
    /**
     * Limit how many PricingRules to update.
     */
    limit?: number
  }

  /**
   * PricingRule upsert
   */
  export type PricingRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the PricingRule to update in case it exists.
     */
    where: PricingRuleWhereUniqueInput
    /**
     * In case the PricingRule found by the `where` argument doesn't exist, create a new PricingRule with this data.
     */
    create: XOR<PricingRuleCreateInput, PricingRuleUncheckedCreateInput>
    /**
     * In case the PricingRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PricingRuleUpdateInput, PricingRuleUncheckedUpdateInput>
  }

  /**
   * PricingRule delete
   */
  export type PricingRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
    /**
     * Filter which PricingRule to delete.
     */
    where: PricingRuleWhereUniqueInput
  }

  /**
   * PricingRule deleteMany
   */
  export type PricingRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PricingRules to delete
     */
    where?: PricingRuleWhereInput
    /**
     * Limit how many PricingRules to delete.
     */
    limit?: number
  }

  /**
   * PricingRule without action
   */
  export type PricingRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PricingRule
     */
    select?: PricingRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PricingRule
     */
    omit?: PricingRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PricingRuleInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionPlan
   */

  export type AggregateSubscriptionPlan = {
    _count: SubscriptionPlanCountAggregateOutputType | null
    _avg: SubscriptionPlanAvgAggregateOutputType | null
    _sum: SubscriptionPlanSumAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  export type SubscriptionPlanAvgAggregateOutputType = {
    monthlyPrice: number | null
    yearlyPrice: number | null
    maxPrinters: number | null
    maxMonthlyOrders: number | null
  }

  export type SubscriptionPlanSumAggregateOutputType = {
    monthlyPrice: number | null
    yearlyPrice: number | null
    maxPrinters: number | null
    maxMonthlyOrders: number | null
  }

  export type SubscriptionPlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    monthlyPrice: number | null
    yearlyPrice: number | null
    maxPrinters: number | null
    maxMonthlyOrders: number | null
    featuresJson: string | null
    createdAt: Date | null
  }

  export type SubscriptionPlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    monthlyPrice: number | null
    yearlyPrice: number | null
    maxPrinters: number | null
    maxMonthlyOrders: number | null
    featuresJson: string | null
    createdAt: Date | null
  }

  export type SubscriptionPlanCountAggregateOutputType = {
    id: number
    name: number
    monthlyPrice: number
    yearlyPrice: number
    maxPrinters: number
    maxMonthlyOrders: number
    featuresJson: number
    createdAt: number
    _all: number
  }


  export type SubscriptionPlanAvgAggregateInputType = {
    monthlyPrice?: true
    yearlyPrice?: true
    maxPrinters?: true
    maxMonthlyOrders?: true
  }

  export type SubscriptionPlanSumAggregateInputType = {
    monthlyPrice?: true
    yearlyPrice?: true
    maxPrinters?: true
    maxMonthlyOrders?: true
  }

  export type SubscriptionPlanMinAggregateInputType = {
    id?: true
    name?: true
    monthlyPrice?: true
    yearlyPrice?: true
    maxPrinters?: true
    maxMonthlyOrders?: true
    featuresJson?: true
    createdAt?: true
  }

  export type SubscriptionPlanMaxAggregateInputType = {
    id?: true
    name?: true
    monthlyPrice?: true
    yearlyPrice?: true
    maxPrinters?: true
    maxMonthlyOrders?: true
    featuresJson?: true
    createdAt?: true
  }

  export type SubscriptionPlanCountAggregateInputType = {
    id?: true
    name?: true
    monthlyPrice?: true
    yearlyPrice?: true
    maxPrinters?: true
    maxMonthlyOrders?: true
    featuresJson?: true
    createdAt?: true
    _all?: true
  }

  export type SubscriptionPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlan to aggregate.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionPlans
    **/
    _count?: true | SubscriptionPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type GetSubscriptionPlanAggregateType<T extends SubscriptionPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
      : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
  }




  export type SubscriptionPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionPlanWhereInput
    orderBy?: SubscriptionPlanOrderByWithAggregationInput | SubscriptionPlanOrderByWithAggregationInput[]
    by: SubscriptionPlanScalarFieldEnum[] | SubscriptionPlanScalarFieldEnum
    having?: SubscriptionPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionPlanCountAggregateInputType | true
    _avg?: SubscriptionPlanAvgAggregateInputType
    _sum?: SubscriptionPlanSumAggregateInputType
    _min?: SubscriptionPlanMinAggregateInputType
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type SubscriptionPlanGroupByOutputType = {
    id: string
    name: string
    monthlyPrice: number
    yearlyPrice: number
    maxPrinters: number
    maxMonthlyOrders: number
    featuresJson: string
    createdAt: Date
    _count: SubscriptionPlanCountAggregateOutputType | null
    _avg: SubscriptionPlanAvgAggregateOutputType | null
    _sum: SubscriptionPlanSumAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  type GetSubscriptionPlanGroupByPayload<T extends SubscriptionPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    monthlyPrice?: boolean
    yearlyPrice?: boolean
    maxPrinters?: boolean
    maxMonthlyOrders?: boolean
    featuresJson?: boolean
    createdAt?: boolean
    subscriptions?: boolean | SubscriptionPlan$subscriptionsArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionPlan"]>



  export type SubscriptionPlanSelectScalar = {
    id?: boolean
    name?: boolean
    monthlyPrice?: boolean
    yearlyPrice?: boolean
    maxPrinters?: boolean
    maxMonthlyOrders?: boolean
    featuresJson?: boolean
    createdAt?: boolean
  }

  export type SubscriptionPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "monthlyPrice" | "yearlyPrice" | "maxPrinters" | "maxMonthlyOrders" | "featuresJson" | "createdAt", ExtArgs["result"]["subscriptionPlan"]>
  export type SubscriptionPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptions?: boolean | SubscriptionPlan$subscriptionsArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionPlan"
    objects: {
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      monthlyPrice: number
      yearlyPrice: number
      maxPrinters: number
      maxMonthlyOrders: number
      featuresJson: string
      createdAt: Date
    }, ExtArgs["result"]["subscriptionPlan"]>
    composites: {}
  }

  type SubscriptionPlanGetPayload<S extends boolean | null | undefined | SubscriptionPlanDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPlanPayload, S>

  type SubscriptionPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionPlanCountAggregateInputType | true
    }

  export interface SubscriptionPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionPlan'], meta: { name: 'SubscriptionPlan' } }
    /**
     * Find zero or one SubscriptionPlan that matches the filter.
     * @param {SubscriptionPlanFindUniqueArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionPlanFindUniqueArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one SubscriptionPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionPlanFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first SubscriptionPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionPlanFindFirstArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first SubscriptionPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more SubscriptionPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
     * 
     * // Get first 10 SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionPlanFindManyArgs>(args?: SelectSubset<T, SubscriptionPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a SubscriptionPlan.
     * @param {SubscriptionPlanCreateArgs} args - Arguments to create a SubscriptionPlan.
     * @example
     * // Create one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.create({
     *   data: {
     *     // ... data to create a SubscriptionPlan
     *   }
     * })
     * 
     */
    create<T extends SubscriptionPlanCreateArgs>(args: SelectSubset<T, SubscriptionPlanCreateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many SubscriptionPlans.
     * @param {SubscriptionPlanCreateManyArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionPlanCreateManyArgs>(args?: SelectSubset<T, SubscriptionPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubscriptionPlan.
     * @param {SubscriptionPlanDeleteArgs} args - Arguments to delete one SubscriptionPlan.
     * @example
     * // Delete one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionPlan
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionPlanDeleteArgs>(args: SelectSubset<T, SubscriptionPlanDeleteArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one SubscriptionPlan.
     * @param {SubscriptionPlanUpdateArgs} args - Arguments to update one SubscriptionPlan.
     * @example
     * // Update one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionPlanUpdateArgs>(args: SelectSubset<T, SubscriptionPlanUpdateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more SubscriptionPlans.
     * @param {SubscriptionPlanDeleteManyArgs} args - Arguments to filter SubscriptionPlans to delete.
     * @example
     * // Delete a few SubscriptionPlans
     * const { count } = await prisma.subscriptionPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionPlanDeleteManyArgs>(args?: SelectSubset<T, SubscriptionPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionPlanUpdateManyArgs>(args: SelectSubset<T, SubscriptionPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubscriptionPlan.
     * @param {SubscriptionPlanUpsertArgs} args - Arguments to update or create a SubscriptionPlan.
     * @example
     * // Update or create a SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.upsert({
     *   create: {
     *     // ... data to create a SubscriptionPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionPlan we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionPlanUpsertArgs>(args: SelectSubset<T, SubscriptionPlanUpsertArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanCountArgs} args - Arguments to filter SubscriptionPlans to count.
     * @example
     * // Count the number of SubscriptionPlans
     * const count = await prisma.subscriptionPlan.count({
     *   where: {
     *     // ... the filter for the SubscriptionPlans we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionPlanCountArgs>(
      args?: Subset<T, SubscriptionPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionPlanAggregateArgs>(args: Subset<T, SubscriptionPlanAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionPlanAggregateType<T>>

    /**
     * Group by SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionPlanGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionPlan model
   */
  readonly fields: SubscriptionPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptions<T extends SubscriptionPlan$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlan$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the SubscriptionPlan model
   */ 
  interface SubscriptionPlanFieldRefs {
    readonly id: FieldRef<"SubscriptionPlan", 'String'>
    readonly name: FieldRef<"SubscriptionPlan", 'String'>
    readonly monthlyPrice: FieldRef<"SubscriptionPlan", 'Float'>
    readonly yearlyPrice: FieldRef<"SubscriptionPlan", 'Float'>
    readonly maxPrinters: FieldRef<"SubscriptionPlan", 'Int'>
    readonly maxMonthlyOrders: FieldRef<"SubscriptionPlan", 'Int'>
    readonly featuresJson: FieldRef<"SubscriptionPlan", 'String'>
    readonly createdAt: FieldRef<"SubscriptionPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionPlan findUnique
   */
  export type SubscriptionPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findUniqueOrThrow
   */
  export type SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findFirst
   */
  export type SubscriptionPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findFirstOrThrow
   */
  export type SubscriptionPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findMany
   */
  export type SubscriptionPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlans to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan create
   */
  export type SubscriptionPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
  }

  /**
   * SubscriptionPlan createMany
   */
  export type SubscriptionPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPlan update
   */
  export type SubscriptionPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionPlan to update.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan updateMany
   */
  export type SubscriptionPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan upsert
   */
  export type SubscriptionPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionPlan to update in case it exists.
     */
    where: SubscriptionPlanWhereUniqueInput
    /**
     * In case the SubscriptionPlan found by the `where` argument doesn't exist, create a new SubscriptionPlan with this data.
     */
    create: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
    /**
     * In case the SubscriptionPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
  }

  /**
   * SubscriptionPlan delete
   */
  export type SubscriptionPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionPlan to delete.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan deleteMany
   */
  export type SubscriptionPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlans to delete
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan.subscriptions
   */
  export type SubscriptionPlan$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan without action
   */
  export type SubscriptionPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    shopId: string | null
    planId: string | null
    status: string | null
    trialStartAt: Date | null
    trialEndAt: Date | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    createdAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    planId: string | null
    status: string | null
    trialStartAt: Date | null
    trialEndAt: Date | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    createdAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    shopId: number
    planId: number
    status: number
    trialStartAt: number
    trialEndAt: number
    currentPeriodStart: number
    currentPeriodEnd: number
    createdAt: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    shopId?: true
    planId?: true
    status?: true
    trialStartAt?: true
    trialEndAt?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    createdAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    shopId?: true
    planId?: true
    status?: true
    trialStartAt?: true
    trialEndAt?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    createdAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    shopId?: true
    planId?: true
    status?: true
    trialStartAt?: true
    trialEndAt?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    createdAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    shopId: string
    planId: string
    status: string
    trialStartAt: Date
    trialEndAt: Date
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    createdAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopId?: boolean
    planId?: boolean
    status?: boolean
    trialStartAt?: boolean
    trialEndAt?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>



  export type SubscriptionSelectScalar = {
    id?: boolean
    shopId?: boolean
    planId?: boolean
    status?: boolean
    trialStartAt?: boolean
    trialEndAt?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    createdAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "planId" | "status" | "trialStartAt" | "trialEndAt" | "currentPeriodStart" | "currentPeriodEnd" | "createdAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    shop?: boolean | ShopDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      plan: Prisma.$SubscriptionPlanPayload<ExtArgs>
      shop: Prisma.$ShopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string
      planId: string
      status: string
      trialStartAt: Date
      trialEndAt: Date
      currentPeriodStart: Date | null
      currentPeriodEnd: Date | null
      createdAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends SubscriptionPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlanDefaultArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    shop<T extends ShopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShopDefaultArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Subscription model
   */ 
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly shopId: FieldRef<"Subscription", 'String'>
    readonly planId: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly trialStartAt: FieldRef<"Subscription", 'DateTime'>
    readonly trialEndAt: FieldRef<"Subscription", 'DateTime'>
    readonly currentPeriodStart: FieldRef<"Subscription", 'DateTime'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
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
    shopId: string | null
    userId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    details: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    shopId: string | null
    userId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    details: string | null
    ipAddress: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    shopId: number
    userId: number
    action: number
    entityType: number
    entityId: number
    details: number
    ipAddress: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    details?: true
    ipAddress?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    details?: true
    ipAddress?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    shopId?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    details?: true
    ipAddress?: true
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
    shopId: string | null
    userId: string | null
    action: string
    entityType: string
    entityId: string
    details: string | null
    ipAddress: string | null
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
    shopId?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    details?: boolean
    ipAddress?: boolean
    createdAt?: boolean
    shop?: boolean | AuditLog$shopArgs<ExtArgs>
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>



  export type AuditLogSelectScalar = {
    id?: boolean
    shopId?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    details?: boolean
    ipAddress?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopId" | "userId" | "action" | "entityType" | "entityId" | "details" | "ipAddress" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | AuditLog$shopArgs<ExtArgs>
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopId: string | null
      userId: string | null
      action: string
      entityType: string
      entityId: string
      details: string | null
      ipAddress: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
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
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

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
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

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
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", ClientOptions>>

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
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

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
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

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
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

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
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


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
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends AuditLog$shopArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$shopArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    user<T extends AuditLog$userArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
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
    readonly shopId: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly details: FieldRef<"AuditLog", 'String'>
    readonly ipAddress: FieldRef<"AuditLog", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
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
    skipDuplicates?: boolean
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
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
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
   * AuditLog.shop
   */
  export type AuditLog$shopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    where?: ShopWhereInput
  }

  /**
   * AuditLog.user
   */
  export type AuditLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model DocumentStorage
   */

  export type AggregateDocumentStorage = {
    _count: DocumentStorageCountAggregateOutputType | null
    _avg: DocumentStorageAvgAggregateOutputType | null
    _sum: DocumentStorageSumAggregateOutputType | null
    _min: DocumentStorageMinAggregateOutputType | null
    _max: DocumentStorageMaxAggregateOutputType | null
  }

  export type DocumentStorageAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type DocumentStorageSumAggregateOutputType = {
    fileSize: number | null
  }

  export type DocumentStorageMinAggregateOutputType = {
    id: string | null
    storageKey: string | null
    fileData: Uint8Array | null
    mimeType: string | null
    filename: string | null
    fileSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentStorageMaxAggregateOutputType = {
    id: string | null
    storageKey: string | null
    fileData: Uint8Array | null
    mimeType: string | null
    filename: string | null
    fileSize: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentStorageCountAggregateOutputType = {
    id: number
    storageKey: number
    fileData: number
    mimeType: number
    filename: number
    fileSize: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentStorageAvgAggregateInputType = {
    fileSize?: true
  }

  export type DocumentStorageSumAggregateInputType = {
    fileSize?: true
  }

  export type DocumentStorageMinAggregateInputType = {
    id?: true
    storageKey?: true
    fileData?: true
    mimeType?: true
    filename?: true
    fileSize?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentStorageMaxAggregateInputType = {
    id?: true
    storageKey?: true
    fileData?: true
    mimeType?: true
    filename?: true
    fileSize?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentStorageCountAggregateInputType = {
    id?: true
    storageKey?: true
    fileData?: true
    mimeType?: true
    filename?: true
    fileSize?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentStorageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentStorage to aggregate.
     */
    where?: DocumentStorageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentStorages to fetch.
     */
    orderBy?: DocumentStorageOrderByWithRelationInput | DocumentStorageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentStorageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentStorages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentStorages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentStorages
    **/
    _count?: true | DocumentStorageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentStorageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentStorageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentStorageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentStorageMaxAggregateInputType
  }

  export type GetDocumentStorageAggregateType<T extends DocumentStorageAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentStorage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentStorage[P]>
      : GetScalarType<T[P], AggregateDocumentStorage[P]>
  }




  export type DocumentStorageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentStorageWhereInput
    orderBy?: DocumentStorageOrderByWithAggregationInput | DocumentStorageOrderByWithAggregationInput[]
    by: DocumentStorageScalarFieldEnum[] | DocumentStorageScalarFieldEnum
    having?: DocumentStorageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentStorageCountAggregateInputType | true
    _avg?: DocumentStorageAvgAggregateInputType
    _sum?: DocumentStorageSumAggregateInputType
    _min?: DocumentStorageMinAggregateInputType
    _max?: DocumentStorageMaxAggregateInputType
  }

  export type DocumentStorageGroupByOutputType = {
    id: string
    storageKey: string
    fileData: Uint8Array
    mimeType: string
    filename: string
    fileSize: number
    createdAt: Date
    updatedAt: Date
    _count: DocumentStorageCountAggregateOutputType | null
    _avg: DocumentStorageAvgAggregateOutputType | null
    _sum: DocumentStorageSumAggregateOutputType | null
    _min: DocumentStorageMinAggregateOutputType | null
    _max: DocumentStorageMaxAggregateOutputType | null
  }

  type GetDocumentStorageGroupByPayload<T extends DocumentStorageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentStorageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentStorageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentStorageGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentStorageGroupByOutputType[P]>
        }
      >
    >


  export type DocumentStorageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storageKey?: boolean
    fileData?: boolean
    mimeType?: boolean
    filename?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["documentStorage"]>



  export type DocumentStorageSelectScalar = {
    id?: boolean
    storageKey?: boolean
    fileData?: boolean
    mimeType?: boolean
    filename?: boolean
    fileSize?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentStorageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storageKey" | "fileData" | "mimeType" | "filename" | "fileSize" | "createdAt" | "updatedAt", ExtArgs["result"]["documentStorage"]>

  export type $DocumentStoragePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentStorage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storageKey: string
      fileData: Uint8Array
      mimeType: string
      filename: string
      fileSize: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["documentStorage"]>
    composites: {}
  }

  type DocumentStorageGetPayload<S extends boolean | null | undefined | DocumentStorageDefaultArgs> = $Result.GetResult<Prisma.$DocumentStoragePayload, S>

  type DocumentStorageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentStorageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentStorageCountAggregateInputType | true
    }

  export interface DocumentStorageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentStorage'], meta: { name: 'DocumentStorage' } }
    /**
     * Find zero or one DocumentStorage that matches the filter.
     * @param {DocumentStorageFindUniqueArgs} args - Arguments to find a DocumentStorage
     * @example
     * // Get one DocumentStorage
     * const documentStorage = await prisma.documentStorage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentStorageFindUniqueArgs>(args: SelectSubset<T, DocumentStorageFindUniqueArgs<ExtArgs>>): Prisma__DocumentStorageClient<$Result.GetResult<Prisma.$DocumentStoragePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one DocumentStorage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentStorageFindUniqueOrThrowArgs} args - Arguments to find a DocumentStorage
     * @example
     * // Get one DocumentStorage
     * const documentStorage = await prisma.documentStorage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentStorageFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentStorageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentStorageClient<$Result.GetResult<Prisma.$DocumentStoragePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first DocumentStorage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentStorageFindFirstArgs} args - Arguments to find a DocumentStorage
     * @example
     * // Get one DocumentStorage
     * const documentStorage = await prisma.documentStorage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentStorageFindFirstArgs>(args?: SelectSubset<T, DocumentStorageFindFirstArgs<ExtArgs>>): Prisma__DocumentStorageClient<$Result.GetResult<Prisma.$DocumentStoragePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first DocumentStorage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentStorageFindFirstOrThrowArgs} args - Arguments to find a DocumentStorage
     * @example
     * // Get one DocumentStorage
     * const documentStorage = await prisma.documentStorage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentStorageFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentStorageFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentStorageClient<$Result.GetResult<Prisma.$DocumentStoragePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more DocumentStorages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentStorageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentStorages
     * const documentStorages = await prisma.documentStorage.findMany()
     * 
     * // Get first 10 DocumentStorages
     * const documentStorages = await prisma.documentStorage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentStorageWithIdOnly = await prisma.documentStorage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentStorageFindManyArgs>(args?: SelectSubset<T, DocumentStorageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentStoragePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a DocumentStorage.
     * @param {DocumentStorageCreateArgs} args - Arguments to create a DocumentStorage.
     * @example
     * // Create one DocumentStorage
     * const DocumentStorage = await prisma.documentStorage.create({
     *   data: {
     *     // ... data to create a DocumentStorage
     *   }
     * })
     * 
     */
    create<T extends DocumentStorageCreateArgs>(args: SelectSubset<T, DocumentStorageCreateArgs<ExtArgs>>): Prisma__DocumentStorageClient<$Result.GetResult<Prisma.$DocumentStoragePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many DocumentStorages.
     * @param {DocumentStorageCreateManyArgs} args - Arguments to create many DocumentStorages.
     * @example
     * // Create many DocumentStorages
     * const documentStorage = await prisma.documentStorage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentStorageCreateManyArgs>(args?: SelectSubset<T, DocumentStorageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DocumentStorage.
     * @param {DocumentStorageDeleteArgs} args - Arguments to delete one DocumentStorage.
     * @example
     * // Delete one DocumentStorage
     * const DocumentStorage = await prisma.documentStorage.delete({
     *   where: {
     *     // ... filter to delete one DocumentStorage
     *   }
     * })
     * 
     */
    delete<T extends DocumentStorageDeleteArgs>(args: SelectSubset<T, DocumentStorageDeleteArgs<ExtArgs>>): Prisma__DocumentStorageClient<$Result.GetResult<Prisma.$DocumentStoragePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one DocumentStorage.
     * @param {DocumentStorageUpdateArgs} args - Arguments to update one DocumentStorage.
     * @example
     * // Update one DocumentStorage
     * const documentStorage = await prisma.documentStorage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentStorageUpdateArgs>(args: SelectSubset<T, DocumentStorageUpdateArgs<ExtArgs>>): Prisma__DocumentStorageClient<$Result.GetResult<Prisma.$DocumentStoragePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more DocumentStorages.
     * @param {DocumentStorageDeleteManyArgs} args - Arguments to filter DocumentStorages to delete.
     * @example
     * // Delete a few DocumentStorages
     * const { count } = await prisma.documentStorage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentStorageDeleteManyArgs>(args?: SelectSubset<T, DocumentStorageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentStorages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentStorageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentStorages
     * const documentStorage = await prisma.documentStorage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentStorageUpdateManyArgs>(args: SelectSubset<T, DocumentStorageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DocumentStorage.
     * @param {DocumentStorageUpsertArgs} args - Arguments to update or create a DocumentStorage.
     * @example
     * // Update or create a DocumentStorage
     * const documentStorage = await prisma.documentStorage.upsert({
     *   create: {
     *     // ... data to create a DocumentStorage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentStorage we want to update
     *   }
     * })
     */
    upsert<T extends DocumentStorageUpsertArgs>(args: SelectSubset<T, DocumentStorageUpsertArgs<ExtArgs>>): Prisma__DocumentStorageClient<$Result.GetResult<Prisma.$DocumentStoragePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of DocumentStorages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentStorageCountArgs} args - Arguments to filter DocumentStorages to count.
     * @example
     * // Count the number of DocumentStorages
     * const count = await prisma.documentStorage.count({
     *   where: {
     *     // ... the filter for the DocumentStorages we want to count
     *   }
     * })
    **/
    count<T extends DocumentStorageCountArgs>(
      args?: Subset<T, DocumentStorageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentStorageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentStorage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentStorageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DocumentStorageAggregateArgs>(args: Subset<T, DocumentStorageAggregateArgs>): Prisma.PrismaPromise<GetDocumentStorageAggregateType<T>>

    /**
     * Group by DocumentStorage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentStorageGroupByArgs} args - Group by arguments.
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
      T extends DocumentStorageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentStorageGroupByArgs['orderBy'] }
        : { orderBy?: DocumentStorageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DocumentStorageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentStorageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentStorage model
   */
  readonly fields: DocumentStorageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentStorage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentStorageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DocumentStorage model
   */ 
  interface DocumentStorageFieldRefs {
    readonly id: FieldRef<"DocumentStorage", 'String'>
    readonly storageKey: FieldRef<"DocumentStorage", 'String'>
    readonly fileData: FieldRef<"DocumentStorage", 'Bytes'>
    readonly mimeType: FieldRef<"DocumentStorage", 'String'>
    readonly filename: FieldRef<"DocumentStorage", 'String'>
    readonly fileSize: FieldRef<"DocumentStorage", 'Int'>
    readonly createdAt: FieldRef<"DocumentStorage", 'DateTime'>
    readonly updatedAt: FieldRef<"DocumentStorage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentStorage findUnique
   */
  export type DocumentStorageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStorage
     */
    select?: DocumentStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStorage
     */
    omit?: DocumentStorageOmit<ExtArgs> | null
    /**
     * Filter, which DocumentStorage to fetch.
     */
    where: DocumentStorageWhereUniqueInput
  }

  /**
   * DocumentStorage findUniqueOrThrow
   */
  export type DocumentStorageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStorage
     */
    select?: DocumentStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStorage
     */
    omit?: DocumentStorageOmit<ExtArgs> | null
    /**
     * Filter, which DocumentStorage to fetch.
     */
    where: DocumentStorageWhereUniqueInput
  }

  /**
   * DocumentStorage findFirst
   */
  export type DocumentStorageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStorage
     */
    select?: DocumentStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStorage
     */
    omit?: DocumentStorageOmit<ExtArgs> | null
    /**
     * Filter, which DocumentStorage to fetch.
     */
    where?: DocumentStorageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentStorages to fetch.
     */
    orderBy?: DocumentStorageOrderByWithRelationInput | DocumentStorageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentStorages.
     */
    cursor?: DocumentStorageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentStorages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentStorages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentStorages.
     */
    distinct?: DocumentStorageScalarFieldEnum | DocumentStorageScalarFieldEnum[]
  }

  /**
   * DocumentStorage findFirstOrThrow
   */
  export type DocumentStorageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStorage
     */
    select?: DocumentStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStorage
     */
    omit?: DocumentStorageOmit<ExtArgs> | null
    /**
     * Filter, which DocumentStorage to fetch.
     */
    where?: DocumentStorageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentStorages to fetch.
     */
    orderBy?: DocumentStorageOrderByWithRelationInput | DocumentStorageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentStorages.
     */
    cursor?: DocumentStorageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentStorages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentStorages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentStorages.
     */
    distinct?: DocumentStorageScalarFieldEnum | DocumentStorageScalarFieldEnum[]
  }

  /**
   * DocumentStorage findMany
   */
  export type DocumentStorageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStorage
     */
    select?: DocumentStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStorage
     */
    omit?: DocumentStorageOmit<ExtArgs> | null
    /**
     * Filter, which DocumentStorages to fetch.
     */
    where?: DocumentStorageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentStorages to fetch.
     */
    orderBy?: DocumentStorageOrderByWithRelationInput | DocumentStorageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentStorages.
     */
    cursor?: DocumentStorageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentStorages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentStorages.
     */
    skip?: number
    distinct?: DocumentStorageScalarFieldEnum | DocumentStorageScalarFieldEnum[]
  }

  /**
   * DocumentStorage create
   */
  export type DocumentStorageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStorage
     */
    select?: DocumentStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStorage
     */
    omit?: DocumentStorageOmit<ExtArgs> | null
    /**
     * The data needed to create a DocumentStorage.
     */
    data: XOR<DocumentStorageCreateInput, DocumentStorageUncheckedCreateInput>
  }

  /**
   * DocumentStorage createMany
   */
  export type DocumentStorageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentStorages.
     */
    data: DocumentStorageCreateManyInput | DocumentStorageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentStorage update
   */
  export type DocumentStorageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStorage
     */
    select?: DocumentStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStorage
     */
    omit?: DocumentStorageOmit<ExtArgs> | null
    /**
     * The data needed to update a DocumentStorage.
     */
    data: XOR<DocumentStorageUpdateInput, DocumentStorageUncheckedUpdateInput>
    /**
     * Choose, which DocumentStorage to update.
     */
    where: DocumentStorageWhereUniqueInput
  }

  /**
   * DocumentStorage updateMany
   */
  export type DocumentStorageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentStorages.
     */
    data: XOR<DocumentStorageUpdateManyMutationInput, DocumentStorageUncheckedUpdateManyInput>
    /**
     * Filter which DocumentStorages to update
     */
    where?: DocumentStorageWhereInput
    /**
     * Limit how many DocumentStorages to update.
     */
    limit?: number
  }

  /**
   * DocumentStorage upsert
   */
  export type DocumentStorageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStorage
     */
    select?: DocumentStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStorage
     */
    omit?: DocumentStorageOmit<ExtArgs> | null
    /**
     * The filter to search for the DocumentStorage to update in case it exists.
     */
    where: DocumentStorageWhereUniqueInput
    /**
     * In case the DocumentStorage found by the `where` argument doesn't exist, create a new DocumentStorage with this data.
     */
    create: XOR<DocumentStorageCreateInput, DocumentStorageUncheckedCreateInput>
    /**
     * In case the DocumentStorage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentStorageUpdateInput, DocumentStorageUncheckedUpdateInput>
  }

  /**
   * DocumentStorage delete
   */
  export type DocumentStorageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStorage
     */
    select?: DocumentStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStorage
     */
    omit?: DocumentStorageOmit<ExtArgs> | null
    /**
     * Filter which DocumentStorage to delete.
     */
    where: DocumentStorageWhereUniqueInput
  }

  /**
   * DocumentStorage deleteMany
   */
  export type DocumentStorageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentStorages to delete
     */
    where?: DocumentStorageWhereInput
    /**
     * Limit how many DocumentStorages to delete.
     */
    limit?: number
  }

  /**
   * DocumentStorage without action
   */
  export type DocumentStorageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentStorage
     */
    select?: DocumentStorageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentStorage
     */
    omit?: DocumentStorageOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ShopScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    phone: 'phone',
    email: 'email',
    address: 'address',
    city: 'city',
    state: 'state',
    pincode: 'pincode',
    gstNumber: 'gstNumber',
    qrCodeUrl: 'qrCodeUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    email: 'email',
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    phone: 'phone',
    role: 'role',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    phone: 'phone',
    fullName: 'fullName',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    shopId: 'shopId',
    customerId: 'customerId',
    customerPhone: 'customerPhone',
    status: 'status',
    paymentStatus: 'paymentStatus',
    paymentMethod: 'paymentMethod',
    paymentReference: 'paymentReference',
    paidAt: 'paidAt',
    totalDocuments: 'totalDocuments',
    totalPages: 'totalPages',
    estimatedAmount: 'estimatedAmount',
    finalAmount: 'finalAmount',
    customerNotes: 'customerNotes',
    rejectionReason: 'rejectionReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderDocumentScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    originalFilename: 'originalFilename',
    storageKey: 'storageKey',
    fileSizeBytes: 'fileSizeBytes',
    mimeType: 'mimeType',
    sha256Checksum: 'sha256Checksum',
    detectedPageCount: 'detectedPageCount',
    previewImageKey: 'previewImageKey',
    createdAt: 'createdAt'
  };

  export type OrderDocumentScalarFieldEnum = (typeof OrderDocumentScalarFieldEnum)[keyof typeof OrderDocumentScalarFieldEnum]


  export const DocumentPrintSpecScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    copies: 'copies',
    color: 'color',
    duplex: 'duplex',
    paperSize: 'paperSize',
    orientation: 'orientation',
    pageRange: 'pageRange',
    pagesPerSheet: 'pagesPerSheet',
    collate: 'collate',
    stapling: 'stapling',
    binding: 'binding',
    lamination: 'lamination',
    finishingNotes: 'finishingNotes',
    priceDetails: 'priceDetails',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentPrintSpecScalarFieldEnum = (typeof DocumentPrintSpecScalarFieldEnum)[keyof typeof DocumentPrintSpecScalarFieldEnum]


  export const PrintAgentScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    agentName: 'agentName',
    machineHostname: 'machineHostname',
    osVersion: 'osVersion',
    ipAddress: 'ipAddress',
    authTokenHash: 'authTokenHash',
    isConnected: 'isConnected',
    lastHeartbeatAt: 'lastHeartbeatAt',
    createdAt: 'createdAt'
  };

  export type PrintAgentScalarFieldEnum = (typeof PrintAgentScalarFieldEnum)[keyof typeof PrintAgentScalarFieldEnum]


  export const PrinterScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    agentId: 'agentId',
    windowsPrinterName: 'windowsPrinterName',
    displayName: 'displayName',
    manufacturer: 'manufacturer',
    model: 'model',
    connectionType: 'connectionType',
    ipAddress: 'ipAddress',
    supportsColor: 'supportsColor',
    supportsDuplex: 'supportsDuplex',
    supportedPaperSizes: 'supportedPaperSizes',
    status: 'status',
    isActive: 'isActive',
    currentQueueCount: 'currentQueueCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PrinterScalarFieldEnum = (typeof PrinterScalarFieldEnum)[keyof typeof PrinterScalarFieldEnum]


  export const PrintJobScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    documentId: 'documentId',
    printerId: 'printerId',
    agentId: 'agentId',
    status: 'status',
    spoolerJobId: 'spoolerJobId',
    errorMessage: 'errorMessage',
    dispatchedAt: 'dispatchedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt'
  };

  export type PrintJobScalarFieldEnum = (typeof PrintJobScalarFieldEnum)[keyof typeof PrintJobScalarFieldEnum]


  export const PricingRuleScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    paperSize: 'paperSize',
    bwSinglePrice: 'bwSinglePrice',
    bwDoublePrice: 'bwDoublePrice',
    colorSinglePrice: 'colorSinglePrice',
    colorDoublePrice: 'colorDoublePrice',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type PricingRuleScalarFieldEnum = (typeof PricingRuleScalarFieldEnum)[keyof typeof PricingRuleScalarFieldEnum]


  export const SubscriptionPlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    monthlyPrice: 'monthlyPrice',
    yearlyPrice: 'yearlyPrice',
    maxPrinters: 'maxPrinters',
    maxMonthlyOrders: 'maxMonthlyOrders',
    featuresJson: 'featuresJson',
    createdAt: 'createdAt'
  };

  export type SubscriptionPlanScalarFieldEnum = (typeof SubscriptionPlanScalarFieldEnum)[keyof typeof SubscriptionPlanScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    planId: 'planId',
    status: 'status',
    trialStartAt: 'trialStartAt',
    trialEndAt: 'trialEndAt',
    currentPeriodStart: 'currentPeriodStart',
    currentPeriodEnd: 'currentPeriodEnd',
    createdAt: 'createdAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    userId: 'userId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    details: 'details',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const DocumentStorageScalarFieldEnum: {
    id: 'id',
    storageKey: 'storageKey',
    fileData: 'fileData',
    mimeType: 'mimeType',
    filename: 'filename',
    fileSize: 'fileSize',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentStorageScalarFieldEnum = (typeof DocumentStorageScalarFieldEnum)[keyof typeof DocumentStorageScalarFieldEnum]


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


  export const ShopOrderByRelevanceFieldEnum: {
    id: 'id',
    slug: 'slug',
    name: 'name',
    phone: 'phone',
    email: 'email',
    address: 'address',
    city: 'city',
    state: 'state',
    pincode: 'pincode',
    gstNumber: 'gstNumber',
    qrCodeUrl: 'qrCodeUrl'
  };

  export type ShopOrderByRelevanceFieldEnum = (typeof ShopOrderByRelevanceFieldEnum)[keyof typeof ShopOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    email: 'email',
    passwordHash: 'passwordHash',
    fullName: 'fullName',
    phone: 'phone',
    role: 'role'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const CustomerOrderByRelevanceFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    phone: 'phone',
    fullName: 'fullName',
    email: 'email'
  };

  export type CustomerOrderByRelevanceFieldEnum = (typeof CustomerOrderByRelevanceFieldEnum)[keyof typeof CustomerOrderByRelevanceFieldEnum]


  export const OrderOrderByRelevanceFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    shopId: 'shopId',
    customerId: 'customerId',
    customerPhone: 'customerPhone',
    status: 'status',
    paymentStatus: 'paymentStatus',
    paymentMethod: 'paymentMethod',
    paymentReference: 'paymentReference',
    customerNotes: 'customerNotes',
    rejectionReason: 'rejectionReason'
  };

  export type OrderOrderByRelevanceFieldEnum = (typeof OrderOrderByRelevanceFieldEnum)[keyof typeof OrderOrderByRelevanceFieldEnum]


  export const OrderDocumentOrderByRelevanceFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    originalFilename: 'originalFilename',
    storageKey: 'storageKey',
    mimeType: 'mimeType',
    sha256Checksum: 'sha256Checksum',
    previewImageKey: 'previewImageKey'
  };

  export type OrderDocumentOrderByRelevanceFieldEnum = (typeof OrderDocumentOrderByRelevanceFieldEnum)[keyof typeof OrderDocumentOrderByRelevanceFieldEnum]


  export const DocumentPrintSpecOrderByRelevanceFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    color: 'color',
    duplex: 'duplex',
    paperSize: 'paperSize',
    orientation: 'orientation',
    pageRange: 'pageRange',
    stapling: 'stapling',
    binding: 'binding',
    lamination: 'lamination',
    finishingNotes: 'finishingNotes',
    priceDetails: 'priceDetails'
  };

  export type DocumentPrintSpecOrderByRelevanceFieldEnum = (typeof DocumentPrintSpecOrderByRelevanceFieldEnum)[keyof typeof DocumentPrintSpecOrderByRelevanceFieldEnum]


  export const PrintAgentOrderByRelevanceFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    agentName: 'agentName',
    machineHostname: 'machineHostname',
    osVersion: 'osVersion',
    ipAddress: 'ipAddress',
    authTokenHash: 'authTokenHash'
  };

  export type PrintAgentOrderByRelevanceFieldEnum = (typeof PrintAgentOrderByRelevanceFieldEnum)[keyof typeof PrintAgentOrderByRelevanceFieldEnum]


  export const PrinterOrderByRelevanceFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    agentId: 'agentId',
    windowsPrinterName: 'windowsPrinterName',
    displayName: 'displayName',
    manufacturer: 'manufacturer',
    model: 'model',
    connectionType: 'connectionType',
    ipAddress: 'ipAddress',
    supportedPaperSizes: 'supportedPaperSizes',
    status: 'status'
  };

  export type PrinterOrderByRelevanceFieldEnum = (typeof PrinterOrderByRelevanceFieldEnum)[keyof typeof PrinterOrderByRelevanceFieldEnum]


  export const PrintJobOrderByRelevanceFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    documentId: 'documentId',
    printerId: 'printerId',
    agentId: 'agentId',
    status: 'status',
    errorMessage: 'errorMessage'
  };

  export type PrintJobOrderByRelevanceFieldEnum = (typeof PrintJobOrderByRelevanceFieldEnum)[keyof typeof PrintJobOrderByRelevanceFieldEnum]


  export const PricingRuleOrderByRelevanceFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    paperSize: 'paperSize'
  };

  export type PricingRuleOrderByRelevanceFieldEnum = (typeof PricingRuleOrderByRelevanceFieldEnum)[keyof typeof PricingRuleOrderByRelevanceFieldEnum]


  export const SubscriptionPlanOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    featuresJson: 'featuresJson'
  };

  export type SubscriptionPlanOrderByRelevanceFieldEnum = (typeof SubscriptionPlanOrderByRelevanceFieldEnum)[keyof typeof SubscriptionPlanOrderByRelevanceFieldEnum]


  export const SubscriptionOrderByRelevanceFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    planId: 'planId',
    status: 'status'
  };

  export type SubscriptionOrderByRelevanceFieldEnum = (typeof SubscriptionOrderByRelevanceFieldEnum)[keyof typeof SubscriptionOrderByRelevanceFieldEnum]


  export const AuditLogOrderByRelevanceFieldEnum: {
    id: 'id',
    shopId: 'shopId',
    userId: 'userId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    details: 'details',
    ipAddress: 'ipAddress'
  };

  export type AuditLogOrderByRelevanceFieldEnum = (typeof AuditLogOrderByRelevanceFieldEnum)[keyof typeof AuditLogOrderByRelevanceFieldEnum]


  export const DocumentStorageOrderByRelevanceFieldEnum: {
    id: 'id',
    storageKey: 'storageKey',
    mimeType: 'mimeType',
    filename: 'filename'
  };

  export type DocumentStorageOrderByRelevanceFieldEnum = (typeof DocumentStorageOrderByRelevanceFieldEnum)[keyof typeof DocumentStorageOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    
  /**
   * Deep Input Types
   */


  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: StringFilter<"Shop"> | string
    slug?: StringFilter<"Shop"> | string
    name?: StringFilter<"Shop"> | string
    phone?: StringFilter<"Shop"> | string
    email?: StringFilter<"Shop"> | string
    address?: StringNullableFilter<"Shop"> | string | null
    city?: StringNullableFilter<"Shop"> | string | null
    state?: StringNullableFilter<"Shop"> | string | null
    pincode?: StringNullableFilter<"Shop"> | string | null
    gstNumber?: StringNullableFilter<"Shop"> | string | null
    qrCodeUrl?: StringNullableFilter<"Shop"> | string | null
    isActive?: BoolFilter<"Shop"> | boolean
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    auditLogs?: AuditLogListRelationFilter
    customers?: CustomerListRelationFilter
    orders?: OrderListRelationFilter
    pricingRules?: PricingRuleListRelationFilter
    printAgents?: PrintAgentListRelationFilter
    printers?: PrinterListRelationFilter
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    users?: UserListRelationFilter
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    gstNumber?: SortOrderInput | SortOrder
    qrCodeUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auditLogs?: AuditLogOrderByRelationAggregateInput
    customers?: CustomerOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    pricingRules?: PricingRuleOrderByRelationAggregateInput
    printAgents?: PrintAgentOrderByRelationAggregateInput
    printers?: PrinterOrderByRelationAggregateInput
    subscription?: SubscriptionOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    _relevance?: ShopOrderByRelevanceInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    name?: StringFilter<"Shop"> | string
    phone?: StringFilter<"Shop"> | string
    email?: StringFilter<"Shop"> | string
    address?: StringNullableFilter<"Shop"> | string | null
    city?: StringNullableFilter<"Shop"> | string | null
    state?: StringNullableFilter<"Shop"> | string | null
    pincode?: StringNullableFilter<"Shop"> | string | null
    gstNumber?: StringNullableFilter<"Shop"> | string | null
    qrCodeUrl?: StringNullableFilter<"Shop"> | string | null
    isActive?: BoolFilter<"Shop"> | boolean
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    auditLogs?: AuditLogListRelationFilter
    customers?: CustomerListRelationFilter
    orders?: OrderListRelationFilter
    pricingRules?: PricingRuleListRelationFilter
    printAgents?: PrintAgentListRelationFilter
    printers?: PrinterListRelationFilter
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    users?: UserListRelationFilter
  }, "id" | "slug">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    gstNumber?: SortOrderInput | SortOrder
    qrCodeUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShopCountOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shop"> | string
    slug?: StringWithAggregatesFilter<"Shop"> | string
    name?: StringWithAggregatesFilter<"Shop"> | string
    phone?: StringWithAggregatesFilter<"Shop"> | string
    email?: StringWithAggregatesFilter<"Shop"> | string
    address?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    city?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    state?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    pincode?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    gstNumber?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    qrCodeUrl?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    isActive?: BoolWithAggregatesFilter<"Shop"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    shopId?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    auditLogs?: AuditLogListRelationFilter
    shop?: XOR<ShopNullableScalarRelationFilter, ShopWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrderInput | SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    auditLogs?: AuditLogOrderByRelationAggregateInput
    shop?: ShopOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    shopId?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    auditLogs?: AuditLogListRelationFilter
    shop?: XOR<ShopNullableScalarRelationFilter, ShopWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrderInput | SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isVerified?: SortOrder
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
    shopId?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    shopId?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    fullName?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    orders?: OrderListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    phone?: SortOrder
    fullName?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
    _relevance?: CustomerOrderByRelevanceInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    shopId?: StringFilter<"Customer"> | string
    fullName?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    orders?: OrderListRelationFilter
  }, "id" | "phone">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    phone?: SortOrder
    fullName?: SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    shopId?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringWithAggregatesFilter<"Customer"> | string
    fullName?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    shopId?: StringFilter<"Order"> | string
    customerId?: StringFilter<"Order"> | string
    customerPhone?: StringNullableFilter<"Order"> | string | null
    status?: StringFilter<"Order"> | string
    paymentStatus?: StringFilter<"Order"> | string
    paymentMethod?: StringNullableFilter<"Order"> | string | null
    paymentReference?: StringNullableFilter<"Order"> | string | null
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    totalDocuments?: IntFilter<"Order"> | number
    totalPages?: IntFilter<"Order"> | number
    estimatedAmount?: FloatFilter<"Order"> | number
    finalAmount?: FloatNullableFilter<"Order"> | number | null
    customerNotes?: StringNullableFilter<"Order"> | string | null
    rejectionReason?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    documents?: OrderDocumentListRelationFilter
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    printJobs?: PrintJobListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    customerPhone?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paymentReference?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    totalDocuments?: SortOrder
    totalPages?: SortOrder
    estimatedAmount?: SortOrder
    finalAmount?: SortOrderInput | SortOrder
    customerNotes?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    documents?: OrderDocumentOrderByRelationAggregateInput
    customer?: CustomerOrderByWithRelationInput
    shop?: ShopOrderByWithRelationInput
    printJobs?: PrintJobOrderByRelationAggregateInput
    _relevance?: OrderOrderByRelevanceInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    shopId?: StringFilter<"Order"> | string
    customerId?: StringFilter<"Order"> | string
    customerPhone?: StringNullableFilter<"Order"> | string | null
    status?: StringFilter<"Order"> | string
    paymentStatus?: StringFilter<"Order"> | string
    paymentMethod?: StringNullableFilter<"Order"> | string | null
    paymentReference?: StringNullableFilter<"Order"> | string | null
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    totalDocuments?: IntFilter<"Order"> | number
    totalPages?: IntFilter<"Order"> | number
    estimatedAmount?: FloatFilter<"Order"> | number
    finalAmount?: FloatNullableFilter<"Order"> | number | null
    customerNotes?: StringNullableFilter<"Order"> | string | null
    rejectionReason?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    documents?: OrderDocumentListRelationFilter
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    printJobs?: PrintJobListRelationFilter
  }, "id" | "orderNumber">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    customerPhone?: SortOrderInput | SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paymentReference?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    totalDocuments?: SortOrder
    totalPages?: SortOrder
    estimatedAmount?: SortOrder
    finalAmount?: SortOrderInput | SortOrder
    customerNotes?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    orderNumber?: StringWithAggregatesFilter<"Order"> | string
    shopId?: StringWithAggregatesFilter<"Order"> | string
    customerId?: StringWithAggregatesFilter<"Order"> | string
    customerPhone?: StringNullableWithAggregatesFilter<"Order"> | string | null
    status?: StringWithAggregatesFilter<"Order"> | string
    paymentStatus?: StringWithAggregatesFilter<"Order"> | string
    paymentMethod?: StringNullableWithAggregatesFilter<"Order"> | string | null
    paymentReference?: StringNullableWithAggregatesFilter<"Order"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    totalDocuments?: IntWithAggregatesFilter<"Order"> | number
    totalPages?: IntWithAggregatesFilter<"Order"> | number
    estimatedAmount?: FloatWithAggregatesFilter<"Order"> | number
    finalAmount?: FloatNullableWithAggregatesFilter<"Order"> | number | null
    customerNotes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    rejectionReason?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderDocumentWhereInput = {
    AND?: OrderDocumentWhereInput | OrderDocumentWhereInput[]
    OR?: OrderDocumentWhereInput[]
    NOT?: OrderDocumentWhereInput | OrderDocumentWhereInput[]
    id?: StringFilter<"OrderDocument"> | string
    orderId?: StringFilter<"OrderDocument"> | string
    originalFilename?: StringFilter<"OrderDocument"> | string
    storageKey?: StringFilter<"OrderDocument"> | string
    fileSizeBytes?: IntFilter<"OrderDocument"> | number
    mimeType?: StringFilter<"OrderDocument"> | string
    sha256Checksum?: StringFilter<"OrderDocument"> | string
    detectedPageCount?: IntFilter<"OrderDocument"> | number
    previewImageKey?: StringNullableFilter<"OrderDocument"> | string | null
    createdAt?: DateTimeFilter<"OrderDocument"> | Date | string
    specs?: XOR<DocumentPrintSpecNullableScalarRelationFilter, DocumentPrintSpecWhereInput> | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    printJobs?: PrintJobListRelationFilter
  }

  export type OrderDocumentOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    originalFilename?: SortOrder
    storageKey?: SortOrder
    fileSizeBytes?: SortOrder
    mimeType?: SortOrder
    sha256Checksum?: SortOrder
    detectedPageCount?: SortOrder
    previewImageKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    specs?: DocumentPrintSpecOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
    printJobs?: PrintJobOrderByRelationAggregateInput
    _relevance?: OrderDocumentOrderByRelevanceInput
  }

  export type OrderDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderDocumentWhereInput | OrderDocumentWhereInput[]
    OR?: OrderDocumentWhereInput[]
    NOT?: OrderDocumentWhereInput | OrderDocumentWhereInput[]
    orderId?: StringFilter<"OrderDocument"> | string
    originalFilename?: StringFilter<"OrderDocument"> | string
    storageKey?: StringFilter<"OrderDocument"> | string
    fileSizeBytes?: IntFilter<"OrderDocument"> | number
    mimeType?: StringFilter<"OrderDocument"> | string
    sha256Checksum?: StringFilter<"OrderDocument"> | string
    detectedPageCount?: IntFilter<"OrderDocument"> | number
    previewImageKey?: StringNullableFilter<"OrderDocument"> | string | null
    createdAt?: DateTimeFilter<"OrderDocument"> | Date | string
    specs?: XOR<DocumentPrintSpecNullableScalarRelationFilter, DocumentPrintSpecWhereInput> | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    printJobs?: PrintJobListRelationFilter
  }, "id">

  export type OrderDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    originalFilename?: SortOrder
    storageKey?: SortOrder
    fileSizeBytes?: SortOrder
    mimeType?: SortOrder
    sha256Checksum?: SortOrder
    detectedPageCount?: SortOrder
    previewImageKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OrderDocumentCountOrderByAggregateInput
    _avg?: OrderDocumentAvgOrderByAggregateInput
    _max?: OrderDocumentMaxOrderByAggregateInput
    _min?: OrderDocumentMinOrderByAggregateInput
    _sum?: OrderDocumentSumOrderByAggregateInput
  }

  export type OrderDocumentScalarWhereWithAggregatesInput = {
    AND?: OrderDocumentScalarWhereWithAggregatesInput | OrderDocumentScalarWhereWithAggregatesInput[]
    OR?: OrderDocumentScalarWhereWithAggregatesInput[]
    NOT?: OrderDocumentScalarWhereWithAggregatesInput | OrderDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderDocument"> | string
    orderId?: StringWithAggregatesFilter<"OrderDocument"> | string
    originalFilename?: StringWithAggregatesFilter<"OrderDocument"> | string
    storageKey?: StringWithAggregatesFilter<"OrderDocument"> | string
    fileSizeBytes?: IntWithAggregatesFilter<"OrderDocument"> | number
    mimeType?: StringWithAggregatesFilter<"OrderDocument"> | string
    sha256Checksum?: StringWithAggregatesFilter<"OrderDocument"> | string
    detectedPageCount?: IntWithAggregatesFilter<"OrderDocument"> | number
    previewImageKey?: StringNullableWithAggregatesFilter<"OrderDocument"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OrderDocument"> | Date | string
  }

  export type DocumentPrintSpecWhereInput = {
    AND?: DocumentPrintSpecWhereInput | DocumentPrintSpecWhereInput[]
    OR?: DocumentPrintSpecWhereInput[]
    NOT?: DocumentPrintSpecWhereInput | DocumentPrintSpecWhereInput[]
    id?: StringFilter<"DocumentPrintSpec"> | string
    documentId?: StringFilter<"DocumentPrintSpec"> | string
    copies?: IntFilter<"DocumentPrintSpec"> | number
    color?: StringFilter<"DocumentPrintSpec"> | string
    duplex?: StringFilter<"DocumentPrintSpec"> | string
    paperSize?: StringFilter<"DocumentPrintSpec"> | string
    orientation?: StringFilter<"DocumentPrintSpec"> | string
    pageRange?: StringFilter<"DocumentPrintSpec"> | string
    pagesPerSheet?: IntFilter<"DocumentPrintSpec"> | number
    collate?: BoolFilter<"DocumentPrintSpec"> | boolean
    stapling?: StringFilter<"DocumentPrintSpec"> | string
    binding?: StringFilter<"DocumentPrintSpec"> | string
    lamination?: StringFilter<"DocumentPrintSpec"> | string
    finishingNotes?: StringNullableFilter<"DocumentPrintSpec"> | string | null
    priceDetails?: StringNullableFilter<"DocumentPrintSpec"> | string | null
    createdAt?: DateTimeFilter<"DocumentPrintSpec"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentPrintSpec"> | Date | string
    document?: XOR<OrderDocumentScalarRelationFilter, OrderDocumentWhereInput>
  }

  export type DocumentPrintSpecOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    copies?: SortOrder
    color?: SortOrder
    duplex?: SortOrder
    paperSize?: SortOrder
    orientation?: SortOrder
    pageRange?: SortOrder
    pagesPerSheet?: SortOrder
    collate?: SortOrder
    stapling?: SortOrder
    binding?: SortOrder
    lamination?: SortOrder
    finishingNotes?: SortOrderInput | SortOrder
    priceDetails?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    document?: OrderDocumentOrderByWithRelationInput
    _relevance?: DocumentPrintSpecOrderByRelevanceInput
  }

  export type DocumentPrintSpecWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    documentId?: string
    AND?: DocumentPrintSpecWhereInput | DocumentPrintSpecWhereInput[]
    OR?: DocumentPrintSpecWhereInput[]
    NOT?: DocumentPrintSpecWhereInput | DocumentPrintSpecWhereInput[]
    copies?: IntFilter<"DocumentPrintSpec"> | number
    color?: StringFilter<"DocumentPrintSpec"> | string
    duplex?: StringFilter<"DocumentPrintSpec"> | string
    paperSize?: StringFilter<"DocumentPrintSpec"> | string
    orientation?: StringFilter<"DocumentPrintSpec"> | string
    pageRange?: StringFilter<"DocumentPrintSpec"> | string
    pagesPerSheet?: IntFilter<"DocumentPrintSpec"> | number
    collate?: BoolFilter<"DocumentPrintSpec"> | boolean
    stapling?: StringFilter<"DocumentPrintSpec"> | string
    binding?: StringFilter<"DocumentPrintSpec"> | string
    lamination?: StringFilter<"DocumentPrintSpec"> | string
    finishingNotes?: StringNullableFilter<"DocumentPrintSpec"> | string | null
    priceDetails?: StringNullableFilter<"DocumentPrintSpec"> | string | null
    createdAt?: DateTimeFilter<"DocumentPrintSpec"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentPrintSpec"> | Date | string
    document?: XOR<OrderDocumentScalarRelationFilter, OrderDocumentWhereInput>
  }, "id" | "documentId">

  export type DocumentPrintSpecOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    copies?: SortOrder
    color?: SortOrder
    duplex?: SortOrder
    paperSize?: SortOrder
    orientation?: SortOrder
    pageRange?: SortOrder
    pagesPerSheet?: SortOrder
    collate?: SortOrder
    stapling?: SortOrder
    binding?: SortOrder
    lamination?: SortOrder
    finishingNotes?: SortOrderInput | SortOrder
    priceDetails?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentPrintSpecCountOrderByAggregateInput
    _avg?: DocumentPrintSpecAvgOrderByAggregateInput
    _max?: DocumentPrintSpecMaxOrderByAggregateInput
    _min?: DocumentPrintSpecMinOrderByAggregateInput
    _sum?: DocumentPrintSpecSumOrderByAggregateInput
  }

  export type DocumentPrintSpecScalarWhereWithAggregatesInput = {
    AND?: DocumentPrintSpecScalarWhereWithAggregatesInput | DocumentPrintSpecScalarWhereWithAggregatesInput[]
    OR?: DocumentPrintSpecScalarWhereWithAggregatesInput[]
    NOT?: DocumentPrintSpecScalarWhereWithAggregatesInput | DocumentPrintSpecScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentPrintSpec"> | string
    documentId?: StringWithAggregatesFilter<"DocumentPrintSpec"> | string
    copies?: IntWithAggregatesFilter<"DocumentPrintSpec"> | number
    color?: StringWithAggregatesFilter<"DocumentPrintSpec"> | string
    duplex?: StringWithAggregatesFilter<"DocumentPrintSpec"> | string
    paperSize?: StringWithAggregatesFilter<"DocumentPrintSpec"> | string
    orientation?: StringWithAggregatesFilter<"DocumentPrintSpec"> | string
    pageRange?: StringWithAggregatesFilter<"DocumentPrintSpec"> | string
    pagesPerSheet?: IntWithAggregatesFilter<"DocumentPrintSpec"> | number
    collate?: BoolWithAggregatesFilter<"DocumentPrintSpec"> | boolean
    stapling?: StringWithAggregatesFilter<"DocumentPrintSpec"> | string
    binding?: StringWithAggregatesFilter<"DocumentPrintSpec"> | string
    lamination?: StringWithAggregatesFilter<"DocumentPrintSpec"> | string
    finishingNotes?: StringNullableWithAggregatesFilter<"DocumentPrintSpec"> | string | null
    priceDetails?: StringNullableWithAggregatesFilter<"DocumentPrintSpec"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DocumentPrintSpec"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DocumentPrintSpec"> | Date | string
  }

  export type PrintAgentWhereInput = {
    AND?: PrintAgentWhereInput | PrintAgentWhereInput[]
    OR?: PrintAgentWhereInput[]
    NOT?: PrintAgentWhereInput | PrintAgentWhereInput[]
    id?: StringFilter<"PrintAgent"> | string
    shopId?: StringFilter<"PrintAgent"> | string
    agentName?: StringFilter<"PrintAgent"> | string
    machineHostname?: StringNullableFilter<"PrintAgent"> | string | null
    osVersion?: StringNullableFilter<"PrintAgent"> | string | null
    ipAddress?: StringNullableFilter<"PrintAgent"> | string | null
    authTokenHash?: StringFilter<"PrintAgent"> | string
    isConnected?: BoolFilter<"PrintAgent"> | boolean
    lastHeartbeatAt?: DateTimeNullableFilter<"PrintAgent"> | Date | string | null
    createdAt?: DateTimeFilter<"PrintAgent"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    printJobs?: PrintJobListRelationFilter
    printers?: PrinterListRelationFilter
  }

  export type PrintAgentOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    agentName?: SortOrder
    machineHostname?: SortOrderInput | SortOrder
    osVersion?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    authTokenHash?: SortOrder
    isConnected?: SortOrder
    lastHeartbeatAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    printJobs?: PrintJobOrderByRelationAggregateInput
    printers?: PrinterOrderByRelationAggregateInput
    _relevance?: PrintAgentOrderByRelevanceInput
  }

  export type PrintAgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrintAgentWhereInput | PrintAgentWhereInput[]
    OR?: PrintAgentWhereInput[]
    NOT?: PrintAgentWhereInput | PrintAgentWhereInput[]
    shopId?: StringFilter<"PrintAgent"> | string
    agentName?: StringFilter<"PrintAgent"> | string
    machineHostname?: StringNullableFilter<"PrintAgent"> | string | null
    osVersion?: StringNullableFilter<"PrintAgent"> | string | null
    ipAddress?: StringNullableFilter<"PrintAgent"> | string | null
    authTokenHash?: StringFilter<"PrintAgent"> | string
    isConnected?: BoolFilter<"PrintAgent"> | boolean
    lastHeartbeatAt?: DateTimeNullableFilter<"PrintAgent"> | Date | string | null
    createdAt?: DateTimeFilter<"PrintAgent"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
    printJobs?: PrintJobListRelationFilter
    printers?: PrinterListRelationFilter
  }, "id">

  export type PrintAgentOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    agentName?: SortOrder
    machineHostname?: SortOrderInput | SortOrder
    osVersion?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    authTokenHash?: SortOrder
    isConnected?: SortOrder
    lastHeartbeatAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PrintAgentCountOrderByAggregateInput
    _max?: PrintAgentMaxOrderByAggregateInput
    _min?: PrintAgentMinOrderByAggregateInput
  }

  export type PrintAgentScalarWhereWithAggregatesInput = {
    AND?: PrintAgentScalarWhereWithAggregatesInput | PrintAgentScalarWhereWithAggregatesInput[]
    OR?: PrintAgentScalarWhereWithAggregatesInput[]
    NOT?: PrintAgentScalarWhereWithAggregatesInput | PrintAgentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PrintAgent"> | string
    shopId?: StringWithAggregatesFilter<"PrintAgent"> | string
    agentName?: StringWithAggregatesFilter<"PrintAgent"> | string
    machineHostname?: StringNullableWithAggregatesFilter<"PrintAgent"> | string | null
    osVersion?: StringNullableWithAggregatesFilter<"PrintAgent"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"PrintAgent"> | string | null
    authTokenHash?: StringWithAggregatesFilter<"PrintAgent"> | string
    isConnected?: BoolWithAggregatesFilter<"PrintAgent"> | boolean
    lastHeartbeatAt?: DateTimeNullableWithAggregatesFilter<"PrintAgent"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PrintAgent"> | Date | string
  }

  export type PrinterWhereInput = {
    AND?: PrinterWhereInput | PrinterWhereInput[]
    OR?: PrinterWhereInput[]
    NOT?: PrinterWhereInput | PrinterWhereInput[]
    id?: StringFilter<"Printer"> | string
    shopId?: StringFilter<"Printer"> | string
    agentId?: StringNullableFilter<"Printer"> | string | null
    windowsPrinterName?: StringFilter<"Printer"> | string
    displayName?: StringFilter<"Printer"> | string
    manufacturer?: StringNullableFilter<"Printer"> | string | null
    model?: StringNullableFilter<"Printer"> | string | null
    connectionType?: StringFilter<"Printer"> | string
    ipAddress?: StringNullableFilter<"Printer"> | string | null
    supportsColor?: BoolFilter<"Printer"> | boolean
    supportsDuplex?: BoolFilter<"Printer"> | boolean
    supportedPaperSizes?: StringFilter<"Printer"> | string
    status?: StringFilter<"Printer"> | string
    isActive?: BoolFilter<"Printer"> | boolean
    currentQueueCount?: IntFilter<"Printer"> | number
    createdAt?: DateTimeFilter<"Printer"> | Date | string
    updatedAt?: DateTimeFilter<"Printer"> | Date | string
    printJobs?: PrintJobListRelationFilter
    agent?: XOR<PrintAgentNullableScalarRelationFilter, PrintAgentWhereInput> | null
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type PrinterOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    agentId?: SortOrderInput | SortOrder
    windowsPrinterName?: SortOrder
    displayName?: SortOrder
    manufacturer?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    connectionType?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    supportsColor?: SortOrder
    supportsDuplex?: SortOrder
    supportedPaperSizes?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    currentQueueCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    printJobs?: PrintJobOrderByRelationAggregateInput
    agent?: PrintAgentOrderByWithRelationInput
    shop?: ShopOrderByWithRelationInput
    _relevance?: PrinterOrderByRelevanceInput
  }

  export type PrinterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrinterWhereInput | PrinterWhereInput[]
    OR?: PrinterWhereInput[]
    NOT?: PrinterWhereInput | PrinterWhereInput[]
    shopId?: StringFilter<"Printer"> | string
    agentId?: StringNullableFilter<"Printer"> | string | null
    windowsPrinterName?: StringFilter<"Printer"> | string
    displayName?: StringFilter<"Printer"> | string
    manufacturer?: StringNullableFilter<"Printer"> | string | null
    model?: StringNullableFilter<"Printer"> | string | null
    connectionType?: StringFilter<"Printer"> | string
    ipAddress?: StringNullableFilter<"Printer"> | string | null
    supportsColor?: BoolFilter<"Printer"> | boolean
    supportsDuplex?: BoolFilter<"Printer"> | boolean
    supportedPaperSizes?: StringFilter<"Printer"> | string
    status?: StringFilter<"Printer"> | string
    isActive?: BoolFilter<"Printer"> | boolean
    currentQueueCount?: IntFilter<"Printer"> | number
    createdAt?: DateTimeFilter<"Printer"> | Date | string
    updatedAt?: DateTimeFilter<"Printer"> | Date | string
    printJobs?: PrintJobListRelationFilter
    agent?: XOR<PrintAgentNullableScalarRelationFilter, PrintAgentWhereInput> | null
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "id">

  export type PrinterOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    agentId?: SortOrderInput | SortOrder
    windowsPrinterName?: SortOrder
    displayName?: SortOrder
    manufacturer?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    connectionType?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    supportsColor?: SortOrder
    supportsDuplex?: SortOrder
    supportedPaperSizes?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    currentQueueCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PrinterCountOrderByAggregateInput
    _avg?: PrinterAvgOrderByAggregateInput
    _max?: PrinterMaxOrderByAggregateInput
    _min?: PrinterMinOrderByAggregateInput
    _sum?: PrinterSumOrderByAggregateInput
  }

  export type PrinterScalarWhereWithAggregatesInput = {
    AND?: PrinterScalarWhereWithAggregatesInput | PrinterScalarWhereWithAggregatesInput[]
    OR?: PrinterScalarWhereWithAggregatesInput[]
    NOT?: PrinterScalarWhereWithAggregatesInput | PrinterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Printer"> | string
    shopId?: StringWithAggregatesFilter<"Printer"> | string
    agentId?: StringNullableWithAggregatesFilter<"Printer"> | string | null
    windowsPrinterName?: StringWithAggregatesFilter<"Printer"> | string
    displayName?: StringWithAggregatesFilter<"Printer"> | string
    manufacturer?: StringNullableWithAggregatesFilter<"Printer"> | string | null
    model?: StringNullableWithAggregatesFilter<"Printer"> | string | null
    connectionType?: StringWithAggregatesFilter<"Printer"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"Printer"> | string | null
    supportsColor?: BoolWithAggregatesFilter<"Printer"> | boolean
    supportsDuplex?: BoolWithAggregatesFilter<"Printer"> | boolean
    supportedPaperSizes?: StringWithAggregatesFilter<"Printer"> | string
    status?: StringWithAggregatesFilter<"Printer"> | string
    isActive?: BoolWithAggregatesFilter<"Printer"> | boolean
    currentQueueCount?: IntWithAggregatesFilter<"Printer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Printer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Printer"> | Date | string
  }

  export type PrintJobWhereInput = {
    AND?: PrintJobWhereInput | PrintJobWhereInput[]
    OR?: PrintJobWhereInput[]
    NOT?: PrintJobWhereInput | PrintJobWhereInput[]
    id?: StringFilter<"PrintJob"> | string
    orderId?: StringFilter<"PrintJob"> | string
    documentId?: StringFilter<"PrintJob"> | string
    printerId?: StringNullableFilter<"PrintJob"> | string | null
    agentId?: StringNullableFilter<"PrintJob"> | string | null
    status?: StringFilter<"PrintJob"> | string
    spoolerJobId?: IntNullableFilter<"PrintJob"> | number | null
    errorMessage?: StringNullableFilter<"PrintJob"> | string | null
    dispatchedAt?: DateTimeNullableFilter<"PrintJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"PrintJob"> | Date | string | null
    createdAt?: DateTimeFilter<"PrintJob"> | Date | string
    agent?: XOR<PrintAgentNullableScalarRelationFilter, PrintAgentWhereInput> | null
    document?: XOR<OrderDocumentScalarRelationFilter, OrderDocumentWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    printer?: XOR<PrinterNullableScalarRelationFilter, PrinterWhereInput> | null
  }

  export type PrintJobOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    documentId?: SortOrder
    printerId?: SortOrderInput | SortOrder
    agentId?: SortOrderInput | SortOrder
    status?: SortOrder
    spoolerJobId?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    dispatchedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    agent?: PrintAgentOrderByWithRelationInput
    document?: OrderDocumentOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
    printer?: PrinterOrderByWithRelationInput
    _relevance?: PrintJobOrderByRelevanceInput
  }

  export type PrintJobWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrintJobWhereInput | PrintJobWhereInput[]
    OR?: PrintJobWhereInput[]
    NOT?: PrintJobWhereInput | PrintJobWhereInput[]
    orderId?: StringFilter<"PrintJob"> | string
    documentId?: StringFilter<"PrintJob"> | string
    printerId?: StringNullableFilter<"PrintJob"> | string | null
    agentId?: StringNullableFilter<"PrintJob"> | string | null
    status?: StringFilter<"PrintJob"> | string
    spoolerJobId?: IntNullableFilter<"PrintJob"> | number | null
    errorMessage?: StringNullableFilter<"PrintJob"> | string | null
    dispatchedAt?: DateTimeNullableFilter<"PrintJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"PrintJob"> | Date | string | null
    createdAt?: DateTimeFilter<"PrintJob"> | Date | string
    agent?: XOR<PrintAgentNullableScalarRelationFilter, PrintAgentWhereInput> | null
    document?: XOR<OrderDocumentScalarRelationFilter, OrderDocumentWhereInput>
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    printer?: XOR<PrinterNullableScalarRelationFilter, PrinterWhereInput> | null
  }, "id">

  export type PrintJobOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    documentId?: SortOrder
    printerId?: SortOrderInput | SortOrder
    agentId?: SortOrderInput | SortOrder
    status?: SortOrder
    spoolerJobId?: SortOrderInput | SortOrder
    errorMessage?: SortOrderInput | SortOrder
    dispatchedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PrintJobCountOrderByAggregateInput
    _avg?: PrintJobAvgOrderByAggregateInput
    _max?: PrintJobMaxOrderByAggregateInput
    _min?: PrintJobMinOrderByAggregateInput
    _sum?: PrintJobSumOrderByAggregateInput
  }

  export type PrintJobScalarWhereWithAggregatesInput = {
    AND?: PrintJobScalarWhereWithAggregatesInput | PrintJobScalarWhereWithAggregatesInput[]
    OR?: PrintJobScalarWhereWithAggregatesInput[]
    NOT?: PrintJobScalarWhereWithAggregatesInput | PrintJobScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PrintJob"> | string
    orderId?: StringWithAggregatesFilter<"PrintJob"> | string
    documentId?: StringWithAggregatesFilter<"PrintJob"> | string
    printerId?: StringNullableWithAggregatesFilter<"PrintJob"> | string | null
    agentId?: StringNullableWithAggregatesFilter<"PrintJob"> | string | null
    status?: StringWithAggregatesFilter<"PrintJob"> | string
    spoolerJobId?: IntNullableWithAggregatesFilter<"PrintJob"> | number | null
    errorMessage?: StringNullableWithAggregatesFilter<"PrintJob"> | string | null
    dispatchedAt?: DateTimeNullableWithAggregatesFilter<"PrintJob"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"PrintJob"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PrintJob"> | Date | string
  }

  export type PricingRuleWhereInput = {
    AND?: PricingRuleWhereInput | PricingRuleWhereInput[]
    OR?: PricingRuleWhereInput[]
    NOT?: PricingRuleWhereInput | PricingRuleWhereInput[]
    id?: StringFilter<"PricingRule"> | string
    shopId?: StringFilter<"PricingRule"> | string
    paperSize?: StringFilter<"PricingRule"> | string
    bwSinglePrice?: FloatFilter<"PricingRule"> | number
    bwDoublePrice?: FloatFilter<"PricingRule"> | number
    colorSinglePrice?: FloatFilter<"PricingRule"> | number
    colorDoublePrice?: FloatFilter<"PricingRule"> | number
    isActive?: BoolFilter<"PricingRule"> | boolean
    createdAt?: DateTimeFilter<"PricingRule"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type PricingRuleOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    paperSize?: SortOrder
    bwSinglePrice?: SortOrder
    bwDoublePrice?: SortOrder
    colorSinglePrice?: SortOrder
    colorDoublePrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    _relevance?: PricingRuleOrderByRelevanceInput
  }

  export type PricingRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shopId_paperSize?: PricingRuleShopIdPaperSizeCompoundUniqueInput
    AND?: PricingRuleWhereInput | PricingRuleWhereInput[]
    OR?: PricingRuleWhereInput[]
    NOT?: PricingRuleWhereInput | PricingRuleWhereInput[]
    shopId?: StringFilter<"PricingRule"> | string
    paperSize?: StringFilter<"PricingRule"> | string
    bwSinglePrice?: FloatFilter<"PricingRule"> | number
    bwDoublePrice?: FloatFilter<"PricingRule"> | number
    colorSinglePrice?: FloatFilter<"PricingRule"> | number
    colorDoublePrice?: FloatFilter<"PricingRule"> | number
    isActive?: BoolFilter<"PricingRule"> | boolean
    createdAt?: DateTimeFilter<"PricingRule"> | Date | string
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "id" | "shopId_paperSize">

  export type PricingRuleOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    paperSize?: SortOrder
    bwSinglePrice?: SortOrder
    bwDoublePrice?: SortOrder
    colorSinglePrice?: SortOrder
    colorDoublePrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: PricingRuleCountOrderByAggregateInput
    _avg?: PricingRuleAvgOrderByAggregateInput
    _max?: PricingRuleMaxOrderByAggregateInput
    _min?: PricingRuleMinOrderByAggregateInput
    _sum?: PricingRuleSumOrderByAggregateInput
  }

  export type PricingRuleScalarWhereWithAggregatesInput = {
    AND?: PricingRuleScalarWhereWithAggregatesInput | PricingRuleScalarWhereWithAggregatesInput[]
    OR?: PricingRuleScalarWhereWithAggregatesInput[]
    NOT?: PricingRuleScalarWhereWithAggregatesInput | PricingRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PricingRule"> | string
    shopId?: StringWithAggregatesFilter<"PricingRule"> | string
    paperSize?: StringWithAggregatesFilter<"PricingRule"> | string
    bwSinglePrice?: FloatWithAggregatesFilter<"PricingRule"> | number
    bwDoublePrice?: FloatWithAggregatesFilter<"PricingRule"> | number
    colorSinglePrice?: FloatWithAggregatesFilter<"PricingRule"> | number
    colorDoublePrice?: FloatWithAggregatesFilter<"PricingRule"> | number
    isActive?: BoolWithAggregatesFilter<"PricingRule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PricingRule"> | Date | string
  }

  export type SubscriptionPlanWhereInput = {
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    id?: StringFilter<"SubscriptionPlan"> | string
    name?: StringFilter<"SubscriptionPlan"> | string
    monthlyPrice?: FloatFilter<"SubscriptionPlan"> | number
    yearlyPrice?: FloatFilter<"SubscriptionPlan"> | number
    maxPrinters?: IntFilter<"SubscriptionPlan"> | number
    maxMonthlyOrders?: IntFilter<"SubscriptionPlan"> | number
    featuresJson?: StringFilter<"SubscriptionPlan"> | string
    createdAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
  }

  export type SubscriptionPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    monthlyPrice?: SortOrder
    yearlyPrice?: SortOrder
    maxPrinters?: SortOrder
    maxMonthlyOrders?: SortOrder
    featuresJson?: SortOrder
    createdAt?: SortOrder
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    _relevance?: SubscriptionPlanOrderByRelevanceInput
  }

  export type SubscriptionPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    name?: StringFilter<"SubscriptionPlan"> | string
    monthlyPrice?: FloatFilter<"SubscriptionPlan"> | number
    yearlyPrice?: FloatFilter<"SubscriptionPlan"> | number
    maxPrinters?: IntFilter<"SubscriptionPlan"> | number
    maxMonthlyOrders?: IntFilter<"SubscriptionPlan"> | number
    featuresJson?: StringFilter<"SubscriptionPlan"> | string
    createdAt?: DateTimeFilter<"SubscriptionPlan"> | Date | string
    subscriptions?: SubscriptionListRelationFilter
  }, "id">

  export type SubscriptionPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    monthlyPrice?: SortOrder
    yearlyPrice?: SortOrder
    maxPrinters?: SortOrder
    maxMonthlyOrders?: SortOrder
    featuresJson?: SortOrder
    createdAt?: SortOrder
    _count?: SubscriptionPlanCountOrderByAggregateInput
    _avg?: SubscriptionPlanAvgOrderByAggregateInput
    _max?: SubscriptionPlanMaxOrderByAggregateInput
    _min?: SubscriptionPlanMinOrderByAggregateInput
    _sum?: SubscriptionPlanSumOrderByAggregateInput
  }

  export type SubscriptionPlanScalarWhereWithAggregatesInput = {
    AND?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    OR?: SubscriptionPlanScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    name?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    monthlyPrice?: FloatWithAggregatesFilter<"SubscriptionPlan"> | number
    yearlyPrice?: FloatWithAggregatesFilter<"SubscriptionPlan"> | number
    maxPrinters?: IntWithAggregatesFilter<"SubscriptionPlan"> | number
    maxMonthlyOrders?: IntWithAggregatesFilter<"SubscriptionPlan"> | number
    featuresJson?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionPlan"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    shopId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    trialStartAt?: DateTimeFilter<"Subscription"> | Date | string
    trialEndAt?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    trialStartAt?: SortOrder
    trialEndAt?: SortOrder
    currentPeriodStart?: SortOrderInput | SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    plan?: SubscriptionPlanOrderByWithRelationInput
    shop?: ShopOrderByWithRelationInput
    _relevance?: SubscriptionOrderByRelevanceInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shopId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    planId?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    trialStartAt?: DateTimeFilter<"Subscription"> | Date | string
    trialEndAt?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    plan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
    shop?: XOR<ShopScalarRelationFilter, ShopWhereInput>
  }, "id" | "shopId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    trialStartAt?: SortOrder
    trialEndAt?: SortOrder
    currentPeriodStart?: SortOrderInput | SortOrder
    currentPeriodEnd?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    shopId?: StringWithAggregatesFilter<"Subscription"> | string
    planId?: StringWithAggregatesFilter<"Subscription"> | string
    status?: StringWithAggregatesFilter<"Subscription"> | string
    trialStartAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    trialEndAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    currentPeriodStart?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    shopId?: StringNullableFilter<"AuditLog"> | string | null
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    shop?: XOR<ShopNullableScalarRelationFilter, ShopWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    shopId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    details?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: AuditLogOrderByRelevanceInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    shopId?: StringNullableFilter<"AuditLog"> | string | null
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    shop?: XOR<ShopNullableScalarRelationFilter, ShopWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    shopId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    details?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
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
    shopId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    userId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringWithAggregatesFilter<"AuditLog"> | string
    details?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type DocumentStorageWhereInput = {
    AND?: DocumentStorageWhereInput | DocumentStorageWhereInput[]
    OR?: DocumentStorageWhereInput[]
    NOT?: DocumentStorageWhereInput | DocumentStorageWhereInput[]
    id?: StringFilter<"DocumentStorage"> | string
    storageKey?: StringFilter<"DocumentStorage"> | string
    fileData?: BytesFilter<"DocumentStorage"> | Uint8Array
    mimeType?: StringFilter<"DocumentStorage"> | string
    filename?: StringFilter<"DocumentStorage"> | string
    fileSize?: IntFilter<"DocumentStorage"> | number
    createdAt?: DateTimeFilter<"DocumentStorage"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentStorage"> | Date | string
  }

  export type DocumentStorageOrderByWithRelationInput = {
    id?: SortOrder
    storageKey?: SortOrder
    fileData?: SortOrder
    mimeType?: SortOrder
    filename?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: DocumentStorageOrderByRelevanceInput
  }

  export type DocumentStorageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    storageKey?: string
    AND?: DocumentStorageWhereInput | DocumentStorageWhereInput[]
    OR?: DocumentStorageWhereInput[]
    NOT?: DocumentStorageWhereInput | DocumentStorageWhereInput[]
    fileData?: BytesFilter<"DocumentStorage"> | Uint8Array
    mimeType?: StringFilter<"DocumentStorage"> | string
    filename?: StringFilter<"DocumentStorage"> | string
    fileSize?: IntFilter<"DocumentStorage"> | number
    createdAt?: DateTimeFilter<"DocumentStorage"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentStorage"> | Date | string
  }, "id" | "storageKey">

  export type DocumentStorageOrderByWithAggregationInput = {
    id?: SortOrder
    storageKey?: SortOrder
    fileData?: SortOrder
    mimeType?: SortOrder
    filename?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentStorageCountOrderByAggregateInput
    _avg?: DocumentStorageAvgOrderByAggregateInput
    _max?: DocumentStorageMaxOrderByAggregateInput
    _min?: DocumentStorageMinOrderByAggregateInput
    _sum?: DocumentStorageSumOrderByAggregateInput
  }

  export type DocumentStorageScalarWhereWithAggregatesInput = {
    AND?: DocumentStorageScalarWhereWithAggregatesInput | DocumentStorageScalarWhereWithAggregatesInput[]
    OR?: DocumentStorageScalarWhereWithAggregatesInput[]
    NOT?: DocumentStorageScalarWhereWithAggregatesInput | DocumentStorageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentStorage"> | string
    storageKey?: StringWithAggregatesFilter<"DocumentStorage"> | string
    fileData?: BytesWithAggregatesFilter<"DocumentStorage"> | Uint8Array
    mimeType?: StringWithAggregatesFilter<"DocumentStorage"> | string
    filename?: StringWithAggregatesFilter<"DocumentStorage"> | string
    fileSize?: IntWithAggregatesFilter<"DocumentStorage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DocumentStorage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DocumentStorage"> | Date | string
  }

  export type ShopCreateInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutShopInput
    customers?: CustomerCreateNestedManyWithoutShopInput
    orders?: OrderCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleCreateNestedManyWithoutShopInput
    printAgents?: PrintAgentCreateNestedManyWithoutShopInput
    printers?: PrinterCreateNestedManyWithoutShopInput
    subscription?: SubscriptionCreateNestedOneWithoutShopInput
    users?: UserCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutShopInput
    customers?: CustomerUncheckedCreateNestedManyWithoutShopInput
    orders?: OrderUncheckedCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutShopInput
    printAgents?: PrintAgentUncheckedCreateNestedManyWithoutShopInput
    printers?: PrinterUncheckedCreateNestedManyWithoutShopInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutShopInput
    users?: UserUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutShopNestedInput
    customers?: CustomerUpdateManyWithoutShopNestedInput
    orders?: OrderUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutShopNestedInput
    printAgents?: PrintAgentUpdateManyWithoutShopNestedInput
    printers?: PrinterUpdateManyWithoutShopNestedInput
    subscription?: SubscriptionUpdateOneWithoutShopNestedInput
    users?: UserUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutShopNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutShopNestedInput
    orders?: OrderUncheckedUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutShopNestedInput
    printAgents?: PrintAgentUncheckedUpdateManyWithoutShopNestedInput
    printers?: PrinterUncheckedUpdateManyWithoutShopNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutShopNestedInput
    users?: UserUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateManyInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    phone?: string | null
    role?: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
    shop?: ShopCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    shopId?: string | null
    email: string
    passwordHash: string
    fullName: string
    phone?: string | null
    role?: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
    shop?: ShopUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    shopId?: string | null
    email: string
    passwordHash: string
    fullName: string
    phone?: string | null
    role?: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    phone: string
    fullName: string
    email?: string | null
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutCustomersInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    shopId: string
    phone: string
    fullName: string
    email?: string | null
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutCustomersNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    shopId: string
    phone: string
    fullName: string
    email?: string | null
    createdAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    orderNumber: string
    customerPhone?: string | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string | null
    paymentReference?: string | null
    paidAt?: Date | string | null
    totalDocuments?: number
    totalPages?: number
    estimatedAmount?: number
    finalAmount?: number | null
    customerNotes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: OrderDocumentCreateNestedManyWithoutOrderInput
    customer: CustomerCreateNestedOneWithoutOrdersInput
    shop: ShopCreateNestedOneWithoutOrdersInput
    printJobs?: PrintJobCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    orderNumber: string
    shopId: string
    customerId: string
    customerPhone?: string | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string | null
    paymentReference?: string | null
    paidAt?: Date | string | null
    totalDocuments?: number
    totalPages?: number
    estimatedAmount?: number
    finalAmount?: number | null
    customerNotes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: OrderDocumentUncheckedCreateNestedManyWithoutOrderInput
    printJobs?: PrintJobUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDocuments?: IntFieldUpdateOperationsInput | number
    totalPages?: IntFieldUpdateOperationsInput | number
    estimatedAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    customerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: OrderDocumentUpdateManyWithoutOrderNestedInput
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    shop?: ShopUpdateOneRequiredWithoutOrdersNestedInput
    printJobs?: PrintJobUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDocuments?: IntFieldUpdateOperationsInput | number
    totalPages?: IntFieldUpdateOperationsInput | number
    estimatedAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    customerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: OrderDocumentUncheckedUpdateManyWithoutOrderNestedInput
    printJobs?: PrintJobUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    orderNumber: string
    shopId: string
    customerId: string
    customerPhone?: string | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string | null
    paymentReference?: string | null
    paidAt?: Date | string | null
    totalDocuments?: number
    totalPages?: number
    estimatedAmount?: number
    finalAmount?: number | null
    customerNotes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDocuments?: IntFieldUpdateOperationsInput | number
    totalPages?: IntFieldUpdateOperationsInput | number
    estimatedAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    customerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDocuments?: IntFieldUpdateOperationsInput | number
    totalPages?: IntFieldUpdateOperationsInput | number
    estimatedAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    customerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDocumentCreateInput = {
    id?: string
    originalFilename: string
    storageKey: string
    fileSizeBytes: number
    mimeType: string
    sha256Checksum: string
    detectedPageCount?: number
    previewImageKey?: string | null
    createdAt?: Date | string
    specs?: DocumentPrintSpecCreateNestedOneWithoutDocumentInput
    order: OrderCreateNestedOneWithoutDocumentsInput
    printJobs?: PrintJobCreateNestedManyWithoutDocumentInput
  }

  export type OrderDocumentUncheckedCreateInput = {
    id?: string
    orderId: string
    originalFilename: string
    storageKey: string
    fileSizeBytes: number
    mimeType: string
    sha256Checksum: string
    detectedPageCount?: number
    previewImageKey?: string | null
    createdAt?: Date | string
    specs?: DocumentPrintSpecUncheckedCreateNestedOneWithoutDocumentInput
    printJobs?: PrintJobUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type OrderDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFilename?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    fileSizeBytes?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    sha256Checksum?: StringFieldUpdateOperationsInput | string
    detectedPageCount?: IntFieldUpdateOperationsInput | number
    previewImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specs?: DocumentPrintSpecUpdateOneWithoutDocumentNestedInput
    order?: OrderUpdateOneRequiredWithoutDocumentsNestedInput
    printJobs?: PrintJobUpdateManyWithoutDocumentNestedInput
  }

  export type OrderDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    originalFilename?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    fileSizeBytes?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    sha256Checksum?: StringFieldUpdateOperationsInput | string
    detectedPageCount?: IntFieldUpdateOperationsInput | number
    previewImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specs?: DocumentPrintSpecUncheckedUpdateOneWithoutDocumentNestedInput
    printJobs?: PrintJobUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type OrderDocumentCreateManyInput = {
    id?: string
    orderId: string
    originalFilename: string
    storageKey: string
    fileSizeBytes: number
    mimeType: string
    sha256Checksum: string
    detectedPageCount?: number
    previewImageKey?: string | null
    createdAt?: Date | string
  }

  export type OrderDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFilename?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    fileSizeBytes?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    sha256Checksum?: StringFieldUpdateOperationsInput | string
    detectedPageCount?: IntFieldUpdateOperationsInput | number
    previewImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    originalFilename?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    fileSizeBytes?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    sha256Checksum?: StringFieldUpdateOperationsInput | string
    detectedPageCount?: IntFieldUpdateOperationsInput | number
    previewImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentPrintSpecCreateInput = {
    id?: string
    copies?: number
    color?: string
    duplex?: string
    paperSize?: string
    orientation?: string
    pageRange?: string
    pagesPerSheet?: number
    collate?: boolean
    stapling?: string
    binding?: string
    lamination?: string
    finishingNotes?: string | null
    priceDetails?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    document: OrderDocumentCreateNestedOneWithoutSpecsInput
  }

  export type DocumentPrintSpecUncheckedCreateInput = {
    id?: string
    documentId: string
    copies?: number
    color?: string
    duplex?: string
    paperSize?: string
    orientation?: string
    pageRange?: string
    pagesPerSheet?: number
    collate?: boolean
    stapling?: string
    binding?: string
    lamination?: string
    finishingNotes?: string | null
    priceDetails?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentPrintSpecUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    duplex?: StringFieldUpdateOperationsInput | string
    paperSize?: StringFieldUpdateOperationsInput | string
    orientation?: StringFieldUpdateOperationsInput | string
    pageRange?: StringFieldUpdateOperationsInput | string
    pagesPerSheet?: IntFieldUpdateOperationsInput | number
    collate?: BoolFieldUpdateOperationsInput | boolean
    stapling?: StringFieldUpdateOperationsInput | string
    binding?: StringFieldUpdateOperationsInput | string
    lamination?: StringFieldUpdateOperationsInput | string
    finishingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    priceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: OrderDocumentUpdateOneRequiredWithoutSpecsNestedInput
  }

  export type DocumentPrintSpecUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    duplex?: StringFieldUpdateOperationsInput | string
    paperSize?: StringFieldUpdateOperationsInput | string
    orientation?: StringFieldUpdateOperationsInput | string
    pageRange?: StringFieldUpdateOperationsInput | string
    pagesPerSheet?: IntFieldUpdateOperationsInput | number
    collate?: BoolFieldUpdateOperationsInput | boolean
    stapling?: StringFieldUpdateOperationsInput | string
    binding?: StringFieldUpdateOperationsInput | string
    lamination?: StringFieldUpdateOperationsInput | string
    finishingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    priceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentPrintSpecCreateManyInput = {
    id?: string
    documentId: string
    copies?: number
    color?: string
    duplex?: string
    paperSize?: string
    orientation?: string
    pageRange?: string
    pagesPerSheet?: number
    collate?: boolean
    stapling?: string
    binding?: string
    lamination?: string
    finishingNotes?: string | null
    priceDetails?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentPrintSpecUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    duplex?: StringFieldUpdateOperationsInput | string
    paperSize?: StringFieldUpdateOperationsInput | string
    orientation?: StringFieldUpdateOperationsInput | string
    pageRange?: StringFieldUpdateOperationsInput | string
    pagesPerSheet?: IntFieldUpdateOperationsInput | number
    collate?: BoolFieldUpdateOperationsInput | boolean
    stapling?: StringFieldUpdateOperationsInput | string
    binding?: StringFieldUpdateOperationsInput | string
    lamination?: StringFieldUpdateOperationsInput | string
    finishingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    priceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentPrintSpecUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    duplex?: StringFieldUpdateOperationsInput | string
    paperSize?: StringFieldUpdateOperationsInput | string
    orientation?: StringFieldUpdateOperationsInput | string
    pageRange?: StringFieldUpdateOperationsInput | string
    pagesPerSheet?: IntFieldUpdateOperationsInput | number
    collate?: BoolFieldUpdateOperationsInput | boolean
    stapling?: StringFieldUpdateOperationsInput | string
    binding?: StringFieldUpdateOperationsInput | string
    lamination?: StringFieldUpdateOperationsInput | string
    finishingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    priceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrintAgentCreateInput = {
    id?: string
    agentName: string
    machineHostname?: string | null
    osVersion?: string | null
    ipAddress?: string | null
    authTokenHash: string
    isConnected?: boolean
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutPrintAgentsInput
    printJobs?: PrintJobCreateNestedManyWithoutAgentInput
    printers?: PrinterCreateNestedManyWithoutAgentInput
  }

  export type PrintAgentUncheckedCreateInput = {
    id?: string
    shopId: string
    agentName: string
    machineHostname?: string | null
    osVersion?: string | null
    ipAddress?: string | null
    authTokenHash: string
    isConnected?: boolean
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
    printJobs?: PrintJobUncheckedCreateNestedManyWithoutAgentInput
    printers?: PrinterUncheckedCreateNestedManyWithoutAgentInput
  }

  export type PrintAgentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    machineHostname?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    authTokenHash?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutPrintAgentsNestedInput
    printJobs?: PrintJobUpdateManyWithoutAgentNestedInput
    printers?: PrinterUpdateManyWithoutAgentNestedInput
  }

  export type PrintAgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    machineHostname?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    authTokenHash?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printJobs?: PrintJobUncheckedUpdateManyWithoutAgentNestedInput
    printers?: PrinterUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type PrintAgentCreateManyInput = {
    id?: string
    shopId: string
    agentName: string
    machineHostname?: string | null
    osVersion?: string | null
    ipAddress?: string | null
    authTokenHash: string
    isConnected?: boolean
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PrintAgentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    machineHostname?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    authTokenHash?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrintAgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    machineHostname?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    authTokenHash?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrinterCreateInput = {
    id?: string
    windowsPrinterName: string
    displayName: string
    manufacturer?: string | null
    model?: string | null
    connectionType?: string
    ipAddress?: string | null
    supportsColor?: boolean
    supportsDuplex?: boolean
    supportedPaperSizes?: string
    status?: string
    isActive?: boolean
    currentQueueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    printJobs?: PrintJobCreateNestedManyWithoutPrinterInput
    agent?: PrintAgentCreateNestedOneWithoutPrintersInput
    shop: ShopCreateNestedOneWithoutPrintersInput
  }

  export type PrinterUncheckedCreateInput = {
    id?: string
    shopId: string
    agentId?: string | null
    windowsPrinterName: string
    displayName: string
    manufacturer?: string | null
    model?: string | null
    connectionType?: string
    ipAddress?: string | null
    supportsColor?: boolean
    supportsDuplex?: boolean
    supportedPaperSizes?: string
    status?: string
    isActive?: boolean
    currentQueueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    printJobs?: PrintJobUncheckedCreateNestedManyWithoutPrinterInput
  }

  export type PrinterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    windowsPrinterName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supportsColor?: BoolFieldUpdateOperationsInput | boolean
    supportsDuplex?: BoolFieldUpdateOperationsInput | boolean
    supportedPaperSizes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentQueueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printJobs?: PrintJobUpdateManyWithoutPrinterNestedInput
    agent?: PrintAgentUpdateOneWithoutPrintersNestedInput
    shop?: ShopUpdateOneRequiredWithoutPrintersNestedInput
  }

  export type PrinterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    windowsPrinterName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supportsColor?: BoolFieldUpdateOperationsInput | boolean
    supportsDuplex?: BoolFieldUpdateOperationsInput | boolean
    supportedPaperSizes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentQueueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printJobs?: PrintJobUncheckedUpdateManyWithoutPrinterNestedInput
  }

  export type PrinterCreateManyInput = {
    id?: string
    shopId: string
    agentId?: string | null
    windowsPrinterName: string
    displayName: string
    manufacturer?: string | null
    model?: string | null
    connectionType?: string
    ipAddress?: string | null
    supportsColor?: boolean
    supportsDuplex?: boolean
    supportedPaperSizes?: string
    status?: string
    isActive?: boolean
    currentQueueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrinterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    windowsPrinterName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supportsColor?: BoolFieldUpdateOperationsInput | boolean
    supportsDuplex?: BoolFieldUpdateOperationsInput | boolean
    supportedPaperSizes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentQueueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrinterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    windowsPrinterName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supportsColor?: BoolFieldUpdateOperationsInput | boolean
    supportsDuplex?: BoolFieldUpdateOperationsInput | boolean
    supportedPaperSizes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentQueueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrintJobCreateInput = {
    id?: string
    status?: string
    spoolerJobId?: number | null
    errorMessage?: string | null
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    agent?: PrintAgentCreateNestedOneWithoutPrintJobsInput
    document: OrderDocumentCreateNestedOneWithoutPrintJobsInput
    order: OrderCreateNestedOneWithoutPrintJobsInput
    printer?: PrinterCreateNestedOneWithoutPrintJobsInput
  }

  export type PrintJobUncheckedCreateInput = {
    id?: string
    orderId: string
    documentId: string
    printerId?: string | null
    agentId?: string | null
    status?: string
    spoolerJobId?: number | null
    errorMessage?: string | null
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PrintJobUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    spoolerJobId?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: PrintAgentUpdateOneWithoutPrintJobsNestedInput
    document?: OrderDocumentUpdateOneRequiredWithoutPrintJobsNestedInput
    order?: OrderUpdateOneRequiredWithoutPrintJobsNestedInput
    printer?: PrinterUpdateOneWithoutPrintJobsNestedInput
  }

  export type PrintJobUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    printerId?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    spoolerJobId?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrintJobCreateManyInput = {
    id?: string
    orderId: string
    documentId: string
    printerId?: string | null
    agentId?: string | null
    status?: string
    spoolerJobId?: number | null
    errorMessage?: string | null
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PrintJobUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    spoolerJobId?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrintJobUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    printerId?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    spoolerJobId?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingRuleCreateInput = {
    id?: string
    paperSize?: string
    bwSinglePrice?: number
    bwDoublePrice?: number
    colorSinglePrice?: number
    colorDoublePrice?: number
    isActive?: boolean
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutPricingRulesInput
  }

  export type PricingRuleUncheckedCreateInput = {
    id?: string
    shopId: string
    paperSize?: string
    bwSinglePrice?: number
    bwDoublePrice?: number
    colorSinglePrice?: number
    colorDoublePrice?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PricingRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paperSize?: StringFieldUpdateOperationsInput | string
    bwSinglePrice?: FloatFieldUpdateOperationsInput | number
    bwDoublePrice?: FloatFieldUpdateOperationsInput | number
    colorSinglePrice?: FloatFieldUpdateOperationsInput | number
    colorDoublePrice?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutPricingRulesNestedInput
  }

  export type PricingRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    paperSize?: StringFieldUpdateOperationsInput | string
    bwSinglePrice?: FloatFieldUpdateOperationsInput | number
    bwDoublePrice?: FloatFieldUpdateOperationsInput | number
    colorSinglePrice?: FloatFieldUpdateOperationsInput | number
    colorDoublePrice?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingRuleCreateManyInput = {
    id?: string
    shopId: string
    paperSize?: string
    bwSinglePrice?: number
    bwDoublePrice?: number
    colorSinglePrice?: number
    colorDoublePrice?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PricingRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paperSize?: StringFieldUpdateOperationsInput | string
    bwSinglePrice?: FloatFieldUpdateOperationsInput | number
    bwDoublePrice?: FloatFieldUpdateOperationsInput | number
    colorSinglePrice?: FloatFieldUpdateOperationsInput | number
    colorDoublePrice?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    paperSize?: StringFieldUpdateOperationsInput | string
    bwSinglePrice?: FloatFieldUpdateOperationsInput | number
    bwDoublePrice?: FloatFieldUpdateOperationsInput | number
    colorSinglePrice?: FloatFieldUpdateOperationsInput | number
    colorDoublePrice?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanCreateInput = {
    id: string
    name: string
    monthlyPrice: number
    yearlyPrice: number
    maxPrinters: number
    maxMonthlyOrders: number
    featuresJson: string
    createdAt?: Date | string
    subscriptions?: SubscriptionCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUncheckedCreateInput = {
    id: string
    name: string
    monthlyPrice: number
    yearlyPrice: number
    maxPrinters: number
    maxMonthlyOrders: number
    featuresJson: string
    createdAt?: Date | string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type SubscriptionPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    yearlyPrice?: FloatFieldUpdateOperationsInput | number
    maxPrinters?: IntFieldUpdateOperationsInput | number
    maxMonthlyOrders?: IntFieldUpdateOperationsInput | number
    featuresJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    yearlyPrice?: FloatFieldUpdateOperationsInput | number
    maxPrinters?: IntFieldUpdateOperationsInput | number
    maxMonthlyOrders?: IntFieldUpdateOperationsInput | number
    featuresJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type SubscriptionPlanCreateManyInput = {
    id: string
    name: string
    monthlyPrice: number
    yearlyPrice: number
    maxPrinters: number
    maxMonthlyOrders: number
    featuresJson: string
    createdAt?: Date | string
  }

  export type SubscriptionPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    yearlyPrice?: FloatFieldUpdateOperationsInput | number
    maxPrinters?: IntFieldUpdateOperationsInput | number
    maxMonthlyOrders?: IntFieldUpdateOperationsInput | number
    featuresJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    yearlyPrice?: FloatFieldUpdateOperationsInput | number
    maxPrinters?: IntFieldUpdateOperationsInput | number
    maxMonthlyOrders?: IntFieldUpdateOperationsInput | number
    featuresJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    status?: string
    trialStartAt?: Date | string
    trialEndAt: Date | string
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    plan: SubscriptionPlanCreateNestedOneWithoutSubscriptionsInput
    shop: ShopCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    shopId: string
    planId: string
    status?: string
    trialStartAt?: Date | string
    trialEndAt: Date | string
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trialStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trialEndAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: SubscriptionPlanUpdateOneRequiredWithoutSubscriptionsNestedInput
    shop?: ShopUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trialStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trialEndAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    shopId: string
    planId: string
    status?: string
    trialStartAt?: Date | string
    trialEndAt: Date | string
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trialStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trialEndAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trialStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trialEndAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    shop?: ShopCreateNestedOneWithoutAuditLogsInput
    user?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    shopId?: string | null
    userId?: string | null
    action: string
    entityType: string
    entityId: string
    details?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneWithoutAuditLogsNestedInput
    user?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    shopId?: string | null
    userId?: string | null
    action: string
    entityType: string
    entityId: string
    details?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentStorageCreateInput = {
    id?: string
    storageKey: string
    fileData: Uint8Array
    mimeType?: string
    filename: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentStorageUncheckedCreateInput = {
    id?: string
    storageKey: string
    fileData: Uint8Array
    mimeType?: string
    filename: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentStorageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    fileData?: BytesFieldUpdateOperationsInput | Uint8Array
    mimeType?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentStorageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    fileData?: BytesFieldUpdateOperationsInput | Uint8Array
    mimeType?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentStorageCreateManyInput = {
    id?: string
    storageKey: string
    fileData: Uint8Array
    mimeType?: string
    filename: string
    fileSize: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentStorageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    fileData?: BytesFieldUpdateOperationsInput | Uint8Array
    mimeType?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentStorageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    fileData?: BytesFieldUpdateOperationsInput | Uint8Array
    mimeType?: StringFieldUpdateOperationsInput | string
    filename?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    search?: string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type PricingRuleListRelationFilter = {
    every?: PricingRuleWhereInput
    some?: PricingRuleWhereInput
    none?: PricingRuleWhereInput
  }

  export type PrintAgentListRelationFilter = {
    every?: PrintAgentWhereInput
    some?: PrintAgentWhereInput
    none?: PrintAgentWhereInput
  }

  export type PrinterListRelationFilter = {
    every?: PrinterWhereInput
    some?: PrinterWhereInput
    none?: PrinterWhereInput
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PricingRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrintAgentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrinterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopOrderByRelevanceInput = {
    fields: ShopOrderByRelevanceFieldEnum | ShopOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    gstNumber?: SortOrder
    qrCodeUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    gstNumber?: SortOrder
    qrCodeUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    gstNumber?: SortOrder
    qrCodeUrl?: SortOrder
    isActive?: SortOrder
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
    search?: string
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
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ShopNullableScalarRelationFilter = {
    is?: ShopWhereInput | null
    isNot?: ShopWhereInput | null
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopScalarRelationFilter = {
    is?: ShopWhereInput
    isNot?: ShopWhereInput
  }

  export type CustomerOrderByRelevanceInput = {
    fields: CustomerOrderByRelevanceFieldEnum | CustomerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    phone?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    phone?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    phone?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
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

  export type OrderDocumentListRelationFilter = {
    every?: OrderDocumentWhereInput
    some?: OrderDocumentWhereInput
    none?: OrderDocumentWhereInput
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type PrintJobListRelationFilter = {
    every?: PrintJobWhereInput
    some?: PrintJobWhereInput
    none?: PrintJobWhereInput
  }

  export type OrderDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrintJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelevanceInput = {
    fields: OrderOrderByRelevanceFieldEnum | OrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    customerPhone?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    paymentReference?: SortOrder
    paidAt?: SortOrder
    totalDocuments?: SortOrder
    totalPages?: SortOrder
    estimatedAmount?: SortOrder
    finalAmount?: SortOrder
    customerNotes?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    totalDocuments?: SortOrder
    totalPages?: SortOrder
    estimatedAmount?: SortOrder
    finalAmount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    customerPhone?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    paymentReference?: SortOrder
    paidAt?: SortOrder
    totalDocuments?: SortOrder
    totalPages?: SortOrder
    estimatedAmount?: SortOrder
    finalAmount?: SortOrder
    customerNotes?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    shopId?: SortOrder
    customerId?: SortOrder
    customerPhone?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    paymentReference?: SortOrder
    paidAt?: SortOrder
    totalDocuments?: SortOrder
    totalPages?: SortOrder
    estimatedAmount?: SortOrder
    finalAmount?: SortOrder
    customerNotes?: SortOrder
    rejectionReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    totalDocuments?: SortOrder
    totalPages?: SortOrder
    estimatedAmount?: SortOrder
    finalAmount?: SortOrder
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

  export type DocumentPrintSpecNullableScalarRelationFilter = {
    is?: DocumentPrintSpecWhereInput | null
    isNot?: DocumentPrintSpecWhereInput | null
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderDocumentOrderByRelevanceInput = {
    fields: OrderDocumentOrderByRelevanceFieldEnum | OrderDocumentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    originalFilename?: SortOrder
    storageKey?: SortOrder
    fileSizeBytes?: SortOrder
    mimeType?: SortOrder
    sha256Checksum?: SortOrder
    detectedPageCount?: SortOrder
    previewImageKey?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderDocumentAvgOrderByAggregateInput = {
    fileSizeBytes?: SortOrder
    detectedPageCount?: SortOrder
  }

  export type OrderDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    originalFilename?: SortOrder
    storageKey?: SortOrder
    fileSizeBytes?: SortOrder
    mimeType?: SortOrder
    sha256Checksum?: SortOrder
    detectedPageCount?: SortOrder
    previewImageKey?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    originalFilename?: SortOrder
    storageKey?: SortOrder
    fileSizeBytes?: SortOrder
    mimeType?: SortOrder
    sha256Checksum?: SortOrder
    detectedPageCount?: SortOrder
    previewImageKey?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderDocumentSumOrderByAggregateInput = {
    fileSizeBytes?: SortOrder
    detectedPageCount?: SortOrder
  }

  export type OrderDocumentScalarRelationFilter = {
    is?: OrderDocumentWhereInput
    isNot?: OrderDocumentWhereInput
  }

  export type DocumentPrintSpecOrderByRelevanceInput = {
    fields: DocumentPrintSpecOrderByRelevanceFieldEnum | DocumentPrintSpecOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DocumentPrintSpecCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    copies?: SortOrder
    color?: SortOrder
    duplex?: SortOrder
    paperSize?: SortOrder
    orientation?: SortOrder
    pageRange?: SortOrder
    pagesPerSheet?: SortOrder
    collate?: SortOrder
    stapling?: SortOrder
    binding?: SortOrder
    lamination?: SortOrder
    finishingNotes?: SortOrder
    priceDetails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentPrintSpecAvgOrderByAggregateInput = {
    copies?: SortOrder
    pagesPerSheet?: SortOrder
  }

  export type DocumentPrintSpecMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    copies?: SortOrder
    color?: SortOrder
    duplex?: SortOrder
    paperSize?: SortOrder
    orientation?: SortOrder
    pageRange?: SortOrder
    pagesPerSheet?: SortOrder
    collate?: SortOrder
    stapling?: SortOrder
    binding?: SortOrder
    lamination?: SortOrder
    finishingNotes?: SortOrder
    priceDetails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentPrintSpecMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    copies?: SortOrder
    color?: SortOrder
    duplex?: SortOrder
    paperSize?: SortOrder
    orientation?: SortOrder
    pageRange?: SortOrder
    pagesPerSheet?: SortOrder
    collate?: SortOrder
    stapling?: SortOrder
    binding?: SortOrder
    lamination?: SortOrder
    finishingNotes?: SortOrder
    priceDetails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentPrintSpecSumOrderByAggregateInput = {
    copies?: SortOrder
    pagesPerSheet?: SortOrder
  }

  export type PrintAgentOrderByRelevanceInput = {
    fields: PrintAgentOrderByRelevanceFieldEnum | PrintAgentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PrintAgentCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    agentName?: SortOrder
    machineHostname?: SortOrder
    osVersion?: SortOrder
    ipAddress?: SortOrder
    authTokenHash?: SortOrder
    isConnected?: SortOrder
    lastHeartbeatAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PrintAgentMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    agentName?: SortOrder
    machineHostname?: SortOrder
    osVersion?: SortOrder
    ipAddress?: SortOrder
    authTokenHash?: SortOrder
    isConnected?: SortOrder
    lastHeartbeatAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PrintAgentMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    agentName?: SortOrder
    machineHostname?: SortOrder
    osVersion?: SortOrder
    ipAddress?: SortOrder
    authTokenHash?: SortOrder
    isConnected?: SortOrder
    lastHeartbeatAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PrintAgentNullableScalarRelationFilter = {
    is?: PrintAgentWhereInput | null
    isNot?: PrintAgentWhereInput | null
  }

  export type PrinterOrderByRelevanceInput = {
    fields: PrinterOrderByRelevanceFieldEnum | PrinterOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PrinterCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    agentId?: SortOrder
    windowsPrinterName?: SortOrder
    displayName?: SortOrder
    manufacturer?: SortOrder
    model?: SortOrder
    connectionType?: SortOrder
    ipAddress?: SortOrder
    supportsColor?: SortOrder
    supportsDuplex?: SortOrder
    supportedPaperSizes?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    currentQueueCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrinterAvgOrderByAggregateInput = {
    currentQueueCount?: SortOrder
  }

  export type PrinterMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    agentId?: SortOrder
    windowsPrinterName?: SortOrder
    displayName?: SortOrder
    manufacturer?: SortOrder
    model?: SortOrder
    connectionType?: SortOrder
    ipAddress?: SortOrder
    supportsColor?: SortOrder
    supportsDuplex?: SortOrder
    supportedPaperSizes?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    currentQueueCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrinterMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    agentId?: SortOrder
    windowsPrinterName?: SortOrder
    displayName?: SortOrder
    manufacturer?: SortOrder
    model?: SortOrder
    connectionType?: SortOrder
    ipAddress?: SortOrder
    supportsColor?: SortOrder
    supportsDuplex?: SortOrder
    supportedPaperSizes?: SortOrder
    status?: SortOrder
    isActive?: SortOrder
    currentQueueCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PrinterSumOrderByAggregateInput = {
    currentQueueCount?: SortOrder
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

  export type PrinterNullableScalarRelationFilter = {
    is?: PrinterWhereInput | null
    isNot?: PrinterWhereInput | null
  }

  export type PrintJobOrderByRelevanceInput = {
    fields: PrintJobOrderByRelevanceFieldEnum | PrintJobOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PrintJobCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    documentId?: SortOrder
    printerId?: SortOrder
    agentId?: SortOrder
    status?: SortOrder
    spoolerJobId?: SortOrder
    errorMessage?: SortOrder
    dispatchedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PrintJobAvgOrderByAggregateInput = {
    spoolerJobId?: SortOrder
  }

  export type PrintJobMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    documentId?: SortOrder
    printerId?: SortOrder
    agentId?: SortOrder
    status?: SortOrder
    spoolerJobId?: SortOrder
    errorMessage?: SortOrder
    dispatchedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PrintJobMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    documentId?: SortOrder
    printerId?: SortOrder
    agentId?: SortOrder
    status?: SortOrder
    spoolerJobId?: SortOrder
    errorMessage?: SortOrder
    dispatchedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PrintJobSumOrderByAggregateInput = {
    spoolerJobId?: SortOrder
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

  export type PricingRuleOrderByRelevanceInput = {
    fields: PricingRuleOrderByRelevanceFieldEnum | PricingRuleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PricingRuleShopIdPaperSizeCompoundUniqueInput = {
    shopId: string
    paperSize: string
  }

  export type PricingRuleCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    paperSize?: SortOrder
    bwSinglePrice?: SortOrder
    bwDoublePrice?: SortOrder
    colorSinglePrice?: SortOrder
    colorDoublePrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type PricingRuleAvgOrderByAggregateInput = {
    bwSinglePrice?: SortOrder
    bwDoublePrice?: SortOrder
    colorSinglePrice?: SortOrder
    colorDoublePrice?: SortOrder
  }

  export type PricingRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    paperSize?: SortOrder
    bwSinglePrice?: SortOrder
    bwDoublePrice?: SortOrder
    colorSinglePrice?: SortOrder
    colorDoublePrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type PricingRuleMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    paperSize?: SortOrder
    bwSinglePrice?: SortOrder
    bwDoublePrice?: SortOrder
    colorSinglePrice?: SortOrder
    colorDoublePrice?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type PricingRuleSumOrderByAggregateInput = {
    bwSinglePrice?: SortOrder
    bwDoublePrice?: SortOrder
    colorSinglePrice?: SortOrder
    colorDoublePrice?: SortOrder
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionPlanOrderByRelevanceInput = {
    fields: SubscriptionPlanOrderByRelevanceFieldEnum | SubscriptionPlanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubscriptionPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    monthlyPrice?: SortOrder
    yearlyPrice?: SortOrder
    maxPrinters?: SortOrder
    maxMonthlyOrders?: SortOrder
    featuresJson?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionPlanAvgOrderByAggregateInput = {
    monthlyPrice?: SortOrder
    yearlyPrice?: SortOrder
    maxPrinters?: SortOrder
    maxMonthlyOrders?: SortOrder
  }

  export type SubscriptionPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    monthlyPrice?: SortOrder
    yearlyPrice?: SortOrder
    maxPrinters?: SortOrder
    maxMonthlyOrders?: SortOrder
    featuresJson?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    monthlyPrice?: SortOrder
    yearlyPrice?: SortOrder
    maxPrinters?: SortOrder
    maxMonthlyOrders?: SortOrder
    featuresJson?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionPlanSumOrderByAggregateInput = {
    monthlyPrice?: SortOrder
    yearlyPrice?: SortOrder
    maxPrinters?: SortOrder
    maxMonthlyOrders?: SortOrder
  }

  export type SubscriptionPlanScalarRelationFilter = {
    is?: SubscriptionPlanWhereInput
    isNot?: SubscriptionPlanWhereInput
  }

  export type SubscriptionOrderByRelevanceInput = {
    fields: SubscriptionOrderByRelevanceFieldEnum | SubscriptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    trialStartAt?: SortOrder
    trialEndAt?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    trialStartAt?: SortOrder
    trialEndAt?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    planId?: SortOrder
    status?: SortOrder
    trialStartAt?: SortOrder
    trialEndAt?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    createdAt?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AuditLogOrderByRelevanceInput = {
    fields: AuditLogOrderByRelevanceFieldEnum | AuditLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    details?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    details?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    details?: SortOrder
    ipAddress?: SortOrder
    createdAt?: SortOrder
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type DocumentStorageOrderByRelevanceInput = {
    fields: DocumentStorageOrderByRelevanceFieldEnum | DocumentStorageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DocumentStorageCountOrderByAggregateInput = {
    id?: SortOrder
    storageKey?: SortOrder
    fileData?: SortOrder
    mimeType?: SortOrder
    filename?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentStorageAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type DocumentStorageMaxOrderByAggregateInput = {
    id?: SortOrder
    storageKey?: SortOrder
    fileData?: SortOrder
    mimeType?: SortOrder
    filename?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentStorageMinOrderByAggregateInput = {
    id?: SortOrder
    storageKey?: SortOrder
    fileData?: SortOrder
    mimeType?: SortOrder
    filename?: SortOrder
    fileSize?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentStorageSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type AuditLogCreateNestedManyWithoutShopInput = {
    create?: XOR<AuditLogCreateWithoutShopInput, AuditLogUncheckedCreateWithoutShopInput> | AuditLogCreateWithoutShopInput[] | AuditLogUncheckedCreateWithoutShopInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutShopInput | AuditLogCreateOrConnectWithoutShopInput[]
    createMany?: AuditLogCreateManyShopInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type CustomerCreateNestedManyWithoutShopInput = {
    create?: XOR<CustomerCreateWithoutShopInput, CustomerUncheckedCreateWithoutShopInput> | CustomerCreateWithoutShopInput[] | CustomerUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutShopInput | CustomerCreateOrConnectWithoutShopInput[]
    createMany?: CustomerCreateManyShopInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutShopInput = {
    create?: XOR<OrderCreateWithoutShopInput, OrderUncheckedCreateWithoutShopInput> | OrderCreateWithoutShopInput[] | OrderUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShopInput | OrderCreateOrConnectWithoutShopInput[]
    createMany?: OrderCreateManyShopInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PricingRuleCreateNestedManyWithoutShopInput = {
    create?: XOR<PricingRuleCreateWithoutShopInput, PricingRuleUncheckedCreateWithoutShopInput> | PricingRuleCreateWithoutShopInput[] | PricingRuleUncheckedCreateWithoutShopInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutShopInput | PricingRuleCreateOrConnectWithoutShopInput[]
    createMany?: PricingRuleCreateManyShopInputEnvelope
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
  }

  export type PrintAgentCreateNestedManyWithoutShopInput = {
    create?: XOR<PrintAgentCreateWithoutShopInput, PrintAgentUncheckedCreateWithoutShopInput> | PrintAgentCreateWithoutShopInput[] | PrintAgentUncheckedCreateWithoutShopInput[]
    connectOrCreate?: PrintAgentCreateOrConnectWithoutShopInput | PrintAgentCreateOrConnectWithoutShopInput[]
    createMany?: PrintAgentCreateManyShopInputEnvelope
    connect?: PrintAgentWhereUniqueInput | PrintAgentWhereUniqueInput[]
  }

  export type PrinterCreateNestedManyWithoutShopInput = {
    create?: XOR<PrinterCreateWithoutShopInput, PrinterUncheckedCreateWithoutShopInput> | PrinterCreateWithoutShopInput[] | PrinterUncheckedCreateWithoutShopInput[]
    connectOrCreate?: PrinterCreateOrConnectWithoutShopInput | PrinterCreateOrConnectWithoutShopInput[]
    createMany?: PrinterCreateManyShopInputEnvelope
    connect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedOneWithoutShopInput = {
    create?: XOR<SubscriptionCreateWithoutShopInput, SubscriptionUncheckedCreateWithoutShopInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutShopInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutShopInput = {
    create?: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput> | UserCreateWithoutShopInput[] | UserUncheckedCreateWithoutShopInput[]
    connectOrCreate?: UserCreateOrConnectWithoutShopInput | UserCreateOrConnectWithoutShopInput[]
    createMany?: UserCreateManyShopInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<AuditLogCreateWithoutShopInput, AuditLogUncheckedCreateWithoutShopInput> | AuditLogCreateWithoutShopInput[] | AuditLogUncheckedCreateWithoutShopInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutShopInput | AuditLogCreateOrConnectWithoutShopInput[]
    createMany?: AuditLogCreateManyShopInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<CustomerCreateWithoutShopInput, CustomerUncheckedCreateWithoutShopInput> | CustomerCreateWithoutShopInput[] | CustomerUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutShopInput | CustomerCreateOrConnectWithoutShopInput[]
    createMany?: CustomerCreateManyShopInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<OrderCreateWithoutShopInput, OrderUncheckedCreateWithoutShopInput> | OrderCreateWithoutShopInput[] | OrderUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShopInput | OrderCreateOrConnectWithoutShopInput[]
    createMany?: OrderCreateManyShopInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PricingRuleUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<PricingRuleCreateWithoutShopInput, PricingRuleUncheckedCreateWithoutShopInput> | PricingRuleCreateWithoutShopInput[] | PricingRuleUncheckedCreateWithoutShopInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutShopInput | PricingRuleCreateOrConnectWithoutShopInput[]
    createMany?: PricingRuleCreateManyShopInputEnvelope
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
  }

  export type PrintAgentUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<PrintAgentCreateWithoutShopInput, PrintAgentUncheckedCreateWithoutShopInput> | PrintAgentCreateWithoutShopInput[] | PrintAgentUncheckedCreateWithoutShopInput[]
    connectOrCreate?: PrintAgentCreateOrConnectWithoutShopInput | PrintAgentCreateOrConnectWithoutShopInput[]
    createMany?: PrintAgentCreateManyShopInputEnvelope
    connect?: PrintAgentWhereUniqueInput | PrintAgentWhereUniqueInput[]
  }

  export type PrinterUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<PrinterCreateWithoutShopInput, PrinterUncheckedCreateWithoutShopInput> | PrinterCreateWithoutShopInput[] | PrinterUncheckedCreateWithoutShopInput[]
    connectOrCreate?: PrinterCreateOrConnectWithoutShopInput | PrinterCreateOrConnectWithoutShopInput[]
    createMany?: PrinterCreateManyShopInputEnvelope
    connect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutShopInput = {
    create?: XOR<SubscriptionCreateWithoutShopInput, SubscriptionUncheckedCreateWithoutShopInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutShopInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput> | UserCreateWithoutShopInput[] | UserUncheckedCreateWithoutShopInput[]
    connectOrCreate?: UserCreateOrConnectWithoutShopInput | UserCreateOrConnectWithoutShopInput[]
    createMany?: UserCreateManyShopInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AuditLogUpdateManyWithoutShopNestedInput = {
    create?: XOR<AuditLogCreateWithoutShopInput, AuditLogUncheckedCreateWithoutShopInput> | AuditLogCreateWithoutShopInput[] | AuditLogUncheckedCreateWithoutShopInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutShopInput | AuditLogCreateOrConnectWithoutShopInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutShopInput | AuditLogUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: AuditLogCreateManyShopInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutShopInput | AuditLogUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutShopInput | AuditLogUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type CustomerUpdateManyWithoutShopNestedInput = {
    create?: XOR<CustomerCreateWithoutShopInput, CustomerUncheckedCreateWithoutShopInput> | CustomerCreateWithoutShopInput[] | CustomerUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutShopInput | CustomerCreateOrConnectWithoutShopInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutShopInput | CustomerUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: CustomerCreateManyShopInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutShopInput | CustomerUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutShopInput | CustomerUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutShopNestedInput = {
    create?: XOR<OrderCreateWithoutShopInput, OrderUncheckedCreateWithoutShopInput> | OrderCreateWithoutShopInput[] | OrderUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShopInput | OrderCreateOrConnectWithoutShopInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutShopInput | OrderUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: OrderCreateManyShopInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutShopInput | OrderUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutShopInput | OrderUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PricingRuleUpdateManyWithoutShopNestedInput = {
    create?: XOR<PricingRuleCreateWithoutShopInput, PricingRuleUncheckedCreateWithoutShopInput> | PricingRuleCreateWithoutShopInput[] | PricingRuleUncheckedCreateWithoutShopInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutShopInput | PricingRuleCreateOrConnectWithoutShopInput[]
    upsert?: PricingRuleUpsertWithWhereUniqueWithoutShopInput | PricingRuleUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: PricingRuleCreateManyShopInputEnvelope
    set?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    disconnect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    delete?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    update?: PricingRuleUpdateWithWhereUniqueWithoutShopInput | PricingRuleUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: PricingRuleUpdateManyWithWhereWithoutShopInput | PricingRuleUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: PricingRuleScalarWhereInput | PricingRuleScalarWhereInput[]
  }

  export type PrintAgentUpdateManyWithoutShopNestedInput = {
    create?: XOR<PrintAgentCreateWithoutShopInput, PrintAgentUncheckedCreateWithoutShopInput> | PrintAgentCreateWithoutShopInput[] | PrintAgentUncheckedCreateWithoutShopInput[]
    connectOrCreate?: PrintAgentCreateOrConnectWithoutShopInput | PrintAgentCreateOrConnectWithoutShopInput[]
    upsert?: PrintAgentUpsertWithWhereUniqueWithoutShopInput | PrintAgentUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: PrintAgentCreateManyShopInputEnvelope
    set?: PrintAgentWhereUniqueInput | PrintAgentWhereUniqueInput[]
    disconnect?: PrintAgentWhereUniqueInput | PrintAgentWhereUniqueInput[]
    delete?: PrintAgentWhereUniqueInput | PrintAgentWhereUniqueInput[]
    connect?: PrintAgentWhereUniqueInput | PrintAgentWhereUniqueInput[]
    update?: PrintAgentUpdateWithWhereUniqueWithoutShopInput | PrintAgentUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: PrintAgentUpdateManyWithWhereWithoutShopInput | PrintAgentUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: PrintAgentScalarWhereInput | PrintAgentScalarWhereInput[]
  }

  export type PrinterUpdateManyWithoutShopNestedInput = {
    create?: XOR<PrinterCreateWithoutShopInput, PrinterUncheckedCreateWithoutShopInput> | PrinterCreateWithoutShopInput[] | PrinterUncheckedCreateWithoutShopInput[]
    connectOrCreate?: PrinterCreateOrConnectWithoutShopInput | PrinterCreateOrConnectWithoutShopInput[]
    upsert?: PrinterUpsertWithWhereUniqueWithoutShopInput | PrinterUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: PrinterCreateManyShopInputEnvelope
    set?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    disconnect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    delete?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    connect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    update?: PrinterUpdateWithWhereUniqueWithoutShopInput | PrinterUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: PrinterUpdateManyWithWhereWithoutShopInput | PrinterUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: PrinterScalarWhereInput | PrinterScalarWhereInput[]
  }

  export type SubscriptionUpdateOneWithoutShopNestedInput = {
    create?: XOR<SubscriptionCreateWithoutShopInput, SubscriptionUncheckedCreateWithoutShopInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutShopInput
    upsert?: SubscriptionUpsertWithoutShopInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutShopInput, SubscriptionUpdateWithoutShopInput>, SubscriptionUncheckedUpdateWithoutShopInput>
  }

  export type UserUpdateManyWithoutShopNestedInput = {
    create?: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput> | UserCreateWithoutShopInput[] | UserUncheckedCreateWithoutShopInput[]
    connectOrCreate?: UserCreateOrConnectWithoutShopInput | UserCreateOrConnectWithoutShopInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutShopInput | UserUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: UserCreateManyShopInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutShopInput | UserUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: UserUpdateManyWithWhereWithoutShopInput | UserUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<AuditLogCreateWithoutShopInput, AuditLogUncheckedCreateWithoutShopInput> | AuditLogCreateWithoutShopInput[] | AuditLogUncheckedCreateWithoutShopInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutShopInput | AuditLogCreateOrConnectWithoutShopInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutShopInput | AuditLogUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: AuditLogCreateManyShopInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutShopInput | AuditLogUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutShopInput | AuditLogUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<CustomerCreateWithoutShopInput, CustomerUncheckedCreateWithoutShopInput> | CustomerCreateWithoutShopInput[] | CustomerUncheckedCreateWithoutShopInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutShopInput | CustomerCreateOrConnectWithoutShopInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutShopInput | CustomerUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: CustomerCreateManyShopInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutShopInput | CustomerUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutShopInput | CustomerUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<OrderCreateWithoutShopInput, OrderUncheckedCreateWithoutShopInput> | OrderCreateWithoutShopInput[] | OrderUncheckedCreateWithoutShopInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutShopInput | OrderCreateOrConnectWithoutShopInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutShopInput | OrderUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: OrderCreateManyShopInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutShopInput | OrderUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutShopInput | OrderUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PricingRuleUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<PricingRuleCreateWithoutShopInput, PricingRuleUncheckedCreateWithoutShopInput> | PricingRuleCreateWithoutShopInput[] | PricingRuleUncheckedCreateWithoutShopInput[]
    connectOrCreate?: PricingRuleCreateOrConnectWithoutShopInput | PricingRuleCreateOrConnectWithoutShopInput[]
    upsert?: PricingRuleUpsertWithWhereUniqueWithoutShopInput | PricingRuleUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: PricingRuleCreateManyShopInputEnvelope
    set?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    disconnect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    delete?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    connect?: PricingRuleWhereUniqueInput | PricingRuleWhereUniqueInput[]
    update?: PricingRuleUpdateWithWhereUniqueWithoutShopInput | PricingRuleUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: PricingRuleUpdateManyWithWhereWithoutShopInput | PricingRuleUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: PricingRuleScalarWhereInput | PricingRuleScalarWhereInput[]
  }

  export type PrintAgentUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<PrintAgentCreateWithoutShopInput, PrintAgentUncheckedCreateWithoutShopInput> | PrintAgentCreateWithoutShopInput[] | PrintAgentUncheckedCreateWithoutShopInput[]
    connectOrCreate?: PrintAgentCreateOrConnectWithoutShopInput | PrintAgentCreateOrConnectWithoutShopInput[]
    upsert?: PrintAgentUpsertWithWhereUniqueWithoutShopInput | PrintAgentUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: PrintAgentCreateManyShopInputEnvelope
    set?: PrintAgentWhereUniqueInput | PrintAgentWhereUniqueInput[]
    disconnect?: PrintAgentWhereUniqueInput | PrintAgentWhereUniqueInput[]
    delete?: PrintAgentWhereUniqueInput | PrintAgentWhereUniqueInput[]
    connect?: PrintAgentWhereUniqueInput | PrintAgentWhereUniqueInput[]
    update?: PrintAgentUpdateWithWhereUniqueWithoutShopInput | PrintAgentUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: PrintAgentUpdateManyWithWhereWithoutShopInput | PrintAgentUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: PrintAgentScalarWhereInput | PrintAgentScalarWhereInput[]
  }

  export type PrinterUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<PrinterCreateWithoutShopInput, PrinterUncheckedCreateWithoutShopInput> | PrinterCreateWithoutShopInput[] | PrinterUncheckedCreateWithoutShopInput[]
    connectOrCreate?: PrinterCreateOrConnectWithoutShopInput | PrinterCreateOrConnectWithoutShopInput[]
    upsert?: PrinterUpsertWithWhereUniqueWithoutShopInput | PrinterUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: PrinterCreateManyShopInputEnvelope
    set?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    disconnect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    delete?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    connect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    update?: PrinterUpdateWithWhereUniqueWithoutShopInput | PrinterUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: PrinterUpdateManyWithWhereWithoutShopInput | PrinterUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: PrinterScalarWhereInput | PrinterScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutShopNestedInput = {
    create?: XOR<SubscriptionCreateWithoutShopInput, SubscriptionUncheckedCreateWithoutShopInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutShopInput
    upsert?: SubscriptionUpsertWithoutShopInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutShopInput, SubscriptionUpdateWithoutShopInput>, SubscriptionUncheckedUpdateWithoutShopInput>
  }

  export type UserUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput> | UserCreateWithoutShopInput[] | UserUncheckedCreateWithoutShopInput[]
    connectOrCreate?: UserCreateOrConnectWithoutShopInput | UserCreateOrConnectWithoutShopInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutShopInput | UserUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: UserCreateManyShopInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutShopInput | UserUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: UserUpdateManyWithWhereWithoutShopInput | UserUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type ShopCreateNestedOneWithoutUsersInput = {
    create?: XOR<ShopCreateWithoutUsersInput, ShopUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutUsersInput
    connect?: ShopWhereUniqueInput
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ShopUpdateOneWithoutUsersNestedInput = {
    create?: XOR<ShopCreateWithoutUsersInput, ShopUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutUsersInput
    upsert?: ShopUpsertWithoutUsersInput
    disconnect?: ShopWhereInput | boolean
    delete?: ShopWhereInput | boolean
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutUsersInput, ShopUpdateWithoutUsersInput>, ShopUncheckedUpdateWithoutUsersInput>
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type ShopCreateNestedOneWithoutCustomersInput = {
    create?: XOR<ShopCreateWithoutCustomersInput, ShopUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutCustomersInput
    connect?: ShopWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ShopUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<ShopCreateWithoutCustomersInput, ShopUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutCustomersInput
    upsert?: ShopUpsertWithoutCustomersInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutCustomersInput, ShopUpdateWithoutCustomersInput>, ShopUncheckedUpdateWithoutCustomersInput>
  }

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderDocumentCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderDocumentCreateWithoutOrderInput, OrderDocumentUncheckedCreateWithoutOrderInput> | OrderDocumentCreateWithoutOrderInput[] | OrderDocumentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDocumentCreateOrConnectWithoutOrderInput | OrderDocumentCreateOrConnectWithoutOrderInput[]
    createMany?: OrderDocumentCreateManyOrderInputEnvelope
    connect?: OrderDocumentWhereUniqueInput | OrderDocumentWhereUniqueInput[]
  }

  export type CustomerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type ShopCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ShopCreateWithoutOrdersInput, ShopUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutOrdersInput
    connect?: ShopWhereUniqueInput
  }

  export type PrintJobCreateNestedManyWithoutOrderInput = {
    create?: XOR<PrintJobCreateWithoutOrderInput, PrintJobUncheckedCreateWithoutOrderInput> | PrintJobCreateWithoutOrderInput[] | PrintJobUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PrintJobCreateOrConnectWithoutOrderInput | PrintJobCreateOrConnectWithoutOrderInput[]
    createMany?: PrintJobCreateManyOrderInputEnvelope
    connect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
  }

  export type OrderDocumentUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderDocumentCreateWithoutOrderInput, OrderDocumentUncheckedCreateWithoutOrderInput> | OrderDocumentCreateWithoutOrderInput[] | OrderDocumentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDocumentCreateOrConnectWithoutOrderInput | OrderDocumentCreateOrConnectWithoutOrderInput[]
    createMany?: OrderDocumentCreateManyOrderInputEnvelope
    connect?: OrderDocumentWhereUniqueInput | OrderDocumentWhereUniqueInput[]
  }

  export type PrintJobUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<PrintJobCreateWithoutOrderInput, PrintJobUncheckedCreateWithoutOrderInput> | PrintJobCreateWithoutOrderInput[] | PrintJobUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PrintJobCreateOrConnectWithoutOrderInput | PrintJobCreateOrConnectWithoutOrderInput[]
    createMany?: PrintJobCreateManyOrderInputEnvelope
    connect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderDocumentUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderDocumentCreateWithoutOrderInput, OrderDocumentUncheckedCreateWithoutOrderInput> | OrderDocumentCreateWithoutOrderInput[] | OrderDocumentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDocumentCreateOrConnectWithoutOrderInput | OrderDocumentCreateOrConnectWithoutOrderInput[]
    upsert?: OrderDocumentUpsertWithWhereUniqueWithoutOrderInput | OrderDocumentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderDocumentCreateManyOrderInputEnvelope
    set?: OrderDocumentWhereUniqueInput | OrderDocumentWhereUniqueInput[]
    disconnect?: OrderDocumentWhereUniqueInput | OrderDocumentWhereUniqueInput[]
    delete?: OrderDocumentWhereUniqueInput | OrderDocumentWhereUniqueInput[]
    connect?: OrderDocumentWhereUniqueInput | OrderDocumentWhereUniqueInput[]
    update?: OrderDocumentUpdateWithWhereUniqueWithoutOrderInput | OrderDocumentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderDocumentUpdateManyWithWhereWithoutOrderInput | OrderDocumentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderDocumentScalarWhereInput | OrderDocumentScalarWhereInput[]
  }

  export type CustomerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    upsert?: CustomerUpsertWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrdersInput, CustomerUpdateWithoutOrdersInput>, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type ShopUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ShopCreateWithoutOrdersInput, ShopUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutOrdersInput
    upsert?: ShopUpsertWithoutOrdersInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutOrdersInput, ShopUpdateWithoutOrdersInput>, ShopUncheckedUpdateWithoutOrdersInput>
  }

  export type PrintJobUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PrintJobCreateWithoutOrderInput, PrintJobUncheckedCreateWithoutOrderInput> | PrintJobCreateWithoutOrderInput[] | PrintJobUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PrintJobCreateOrConnectWithoutOrderInput | PrintJobCreateOrConnectWithoutOrderInput[]
    upsert?: PrintJobUpsertWithWhereUniqueWithoutOrderInput | PrintJobUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PrintJobCreateManyOrderInputEnvelope
    set?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    disconnect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    delete?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    connect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    update?: PrintJobUpdateWithWhereUniqueWithoutOrderInput | PrintJobUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PrintJobUpdateManyWithWhereWithoutOrderInput | PrintJobUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PrintJobScalarWhereInput | PrintJobScalarWhereInput[]
  }

  export type OrderDocumentUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderDocumentCreateWithoutOrderInput, OrderDocumentUncheckedCreateWithoutOrderInput> | OrderDocumentCreateWithoutOrderInput[] | OrderDocumentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderDocumentCreateOrConnectWithoutOrderInput | OrderDocumentCreateOrConnectWithoutOrderInput[]
    upsert?: OrderDocumentUpsertWithWhereUniqueWithoutOrderInput | OrderDocumentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderDocumentCreateManyOrderInputEnvelope
    set?: OrderDocumentWhereUniqueInput | OrderDocumentWhereUniqueInput[]
    disconnect?: OrderDocumentWhereUniqueInput | OrderDocumentWhereUniqueInput[]
    delete?: OrderDocumentWhereUniqueInput | OrderDocumentWhereUniqueInput[]
    connect?: OrderDocumentWhereUniqueInput | OrderDocumentWhereUniqueInput[]
    update?: OrderDocumentUpdateWithWhereUniqueWithoutOrderInput | OrderDocumentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderDocumentUpdateManyWithWhereWithoutOrderInput | OrderDocumentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderDocumentScalarWhereInput | OrderDocumentScalarWhereInput[]
  }

  export type PrintJobUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PrintJobCreateWithoutOrderInput, PrintJobUncheckedCreateWithoutOrderInput> | PrintJobCreateWithoutOrderInput[] | PrintJobUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PrintJobCreateOrConnectWithoutOrderInput | PrintJobCreateOrConnectWithoutOrderInput[]
    upsert?: PrintJobUpsertWithWhereUniqueWithoutOrderInput | PrintJobUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PrintJobCreateManyOrderInputEnvelope
    set?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    disconnect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    delete?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    connect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    update?: PrintJobUpdateWithWhereUniqueWithoutOrderInput | PrintJobUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PrintJobUpdateManyWithWhereWithoutOrderInput | PrintJobUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PrintJobScalarWhereInput | PrintJobScalarWhereInput[]
  }

  export type DocumentPrintSpecCreateNestedOneWithoutDocumentInput = {
    create?: XOR<DocumentPrintSpecCreateWithoutDocumentInput, DocumentPrintSpecUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: DocumentPrintSpecCreateOrConnectWithoutDocumentInput
    connect?: DocumentPrintSpecWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<OrderCreateWithoutDocumentsInput, OrderUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDocumentsInput
    connect?: OrderWhereUniqueInput
  }

  export type PrintJobCreateNestedManyWithoutDocumentInput = {
    create?: XOR<PrintJobCreateWithoutDocumentInput, PrintJobUncheckedCreateWithoutDocumentInput> | PrintJobCreateWithoutDocumentInput[] | PrintJobUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: PrintJobCreateOrConnectWithoutDocumentInput | PrintJobCreateOrConnectWithoutDocumentInput[]
    createMany?: PrintJobCreateManyDocumentInputEnvelope
    connect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
  }

  export type DocumentPrintSpecUncheckedCreateNestedOneWithoutDocumentInput = {
    create?: XOR<DocumentPrintSpecCreateWithoutDocumentInput, DocumentPrintSpecUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: DocumentPrintSpecCreateOrConnectWithoutDocumentInput
    connect?: DocumentPrintSpecWhereUniqueInput
  }

  export type PrintJobUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<PrintJobCreateWithoutDocumentInput, PrintJobUncheckedCreateWithoutDocumentInput> | PrintJobCreateWithoutDocumentInput[] | PrintJobUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: PrintJobCreateOrConnectWithoutDocumentInput | PrintJobCreateOrConnectWithoutDocumentInput[]
    createMany?: PrintJobCreateManyDocumentInputEnvelope
    connect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
  }

  export type DocumentPrintSpecUpdateOneWithoutDocumentNestedInput = {
    create?: XOR<DocumentPrintSpecCreateWithoutDocumentInput, DocumentPrintSpecUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: DocumentPrintSpecCreateOrConnectWithoutDocumentInput
    upsert?: DocumentPrintSpecUpsertWithoutDocumentInput
    disconnect?: DocumentPrintSpecWhereInput | boolean
    delete?: DocumentPrintSpecWhereInput | boolean
    connect?: DocumentPrintSpecWhereUniqueInput
    update?: XOR<XOR<DocumentPrintSpecUpdateToOneWithWhereWithoutDocumentInput, DocumentPrintSpecUpdateWithoutDocumentInput>, DocumentPrintSpecUncheckedUpdateWithoutDocumentInput>
  }

  export type OrderUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<OrderCreateWithoutDocumentsInput, OrderUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDocumentsInput
    upsert?: OrderUpsertWithoutDocumentsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutDocumentsInput, OrderUpdateWithoutDocumentsInput>, OrderUncheckedUpdateWithoutDocumentsInput>
  }

  export type PrintJobUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<PrintJobCreateWithoutDocumentInput, PrintJobUncheckedCreateWithoutDocumentInput> | PrintJobCreateWithoutDocumentInput[] | PrintJobUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: PrintJobCreateOrConnectWithoutDocumentInput | PrintJobCreateOrConnectWithoutDocumentInput[]
    upsert?: PrintJobUpsertWithWhereUniqueWithoutDocumentInput | PrintJobUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: PrintJobCreateManyDocumentInputEnvelope
    set?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    disconnect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    delete?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    connect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    update?: PrintJobUpdateWithWhereUniqueWithoutDocumentInput | PrintJobUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: PrintJobUpdateManyWithWhereWithoutDocumentInput | PrintJobUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: PrintJobScalarWhereInput | PrintJobScalarWhereInput[]
  }

  export type DocumentPrintSpecUncheckedUpdateOneWithoutDocumentNestedInput = {
    create?: XOR<DocumentPrintSpecCreateWithoutDocumentInput, DocumentPrintSpecUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: DocumentPrintSpecCreateOrConnectWithoutDocumentInput
    upsert?: DocumentPrintSpecUpsertWithoutDocumentInput
    disconnect?: DocumentPrintSpecWhereInput | boolean
    delete?: DocumentPrintSpecWhereInput | boolean
    connect?: DocumentPrintSpecWhereUniqueInput
    update?: XOR<XOR<DocumentPrintSpecUpdateToOneWithWhereWithoutDocumentInput, DocumentPrintSpecUpdateWithoutDocumentInput>, DocumentPrintSpecUncheckedUpdateWithoutDocumentInput>
  }

  export type PrintJobUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<PrintJobCreateWithoutDocumentInput, PrintJobUncheckedCreateWithoutDocumentInput> | PrintJobCreateWithoutDocumentInput[] | PrintJobUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: PrintJobCreateOrConnectWithoutDocumentInput | PrintJobCreateOrConnectWithoutDocumentInput[]
    upsert?: PrintJobUpsertWithWhereUniqueWithoutDocumentInput | PrintJobUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: PrintJobCreateManyDocumentInputEnvelope
    set?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    disconnect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    delete?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    connect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    update?: PrintJobUpdateWithWhereUniqueWithoutDocumentInput | PrintJobUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: PrintJobUpdateManyWithWhereWithoutDocumentInput | PrintJobUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: PrintJobScalarWhereInput | PrintJobScalarWhereInput[]
  }

  export type OrderDocumentCreateNestedOneWithoutSpecsInput = {
    create?: XOR<OrderDocumentCreateWithoutSpecsInput, OrderDocumentUncheckedCreateWithoutSpecsInput>
    connectOrCreate?: OrderDocumentCreateOrConnectWithoutSpecsInput
    connect?: OrderDocumentWhereUniqueInput
  }

  export type OrderDocumentUpdateOneRequiredWithoutSpecsNestedInput = {
    create?: XOR<OrderDocumentCreateWithoutSpecsInput, OrderDocumentUncheckedCreateWithoutSpecsInput>
    connectOrCreate?: OrderDocumentCreateOrConnectWithoutSpecsInput
    upsert?: OrderDocumentUpsertWithoutSpecsInput
    connect?: OrderDocumentWhereUniqueInput
    update?: XOR<XOR<OrderDocumentUpdateToOneWithWhereWithoutSpecsInput, OrderDocumentUpdateWithoutSpecsInput>, OrderDocumentUncheckedUpdateWithoutSpecsInput>
  }

  export type ShopCreateNestedOneWithoutPrintAgentsInput = {
    create?: XOR<ShopCreateWithoutPrintAgentsInput, ShopUncheckedCreateWithoutPrintAgentsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutPrintAgentsInput
    connect?: ShopWhereUniqueInput
  }

  export type PrintJobCreateNestedManyWithoutAgentInput = {
    create?: XOR<PrintJobCreateWithoutAgentInput, PrintJobUncheckedCreateWithoutAgentInput> | PrintJobCreateWithoutAgentInput[] | PrintJobUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: PrintJobCreateOrConnectWithoutAgentInput | PrintJobCreateOrConnectWithoutAgentInput[]
    createMany?: PrintJobCreateManyAgentInputEnvelope
    connect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
  }

  export type PrinterCreateNestedManyWithoutAgentInput = {
    create?: XOR<PrinterCreateWithoutAgentInput, PrinterUncheckedCreateWithoutAgentInput> | PrinterCreateWithoutAgentInput[] | PrinterUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: PrinterCreateOrConnectWithoutAgentInput | PrinterCreateOrConnectWithoutAgentInput[]
    createMany?: PrinterCreateManyAgentInputEnvelope
    connect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
  }

  export type PrintJobUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<PrintJobCreateWithoutAgentInput, PrintJobUncheckedCreateWithoutAgentInput> | PrintJobCreateWithoutAgentInput[] | PrintJobUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: PrintJobCreateOrConnectWithoutAgentInput | PrintJobCreateOrConnectWithoutAgentInput[]
    createMany?: PrintJobCreateManyAgentInputEnvelope
    connect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
  }

  export type PrinterUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<PrinterCreateWithoutAgentInput, PrinterUncheckedCreateWithoutAgentInput> | PrinterCreateWithoutAgentInput[] | PrinterUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: PrinterCreateOrConnectWithoutAgentInput | PrinterCreateOrConnectWithoutAgentInput[]
    createMany?: PrinterCreateManyAgentInputEnvelope
    connect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
  }

  export type ShopUpdateOneRequiredWithoutPrintAgentsNestedInput = {
    create?: XOR<ShopCreateWithoutPrintAgentsInput, ShopUncheckedCreateWithoutPrintAgentsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutPrintAgentsInput
    upsert?: ShopUpsertWithoutPrintAgentsInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutPrintAgentsInput, ShopUpdateWithoutPrintAgentsInput>, ShopUncheckedUpdateWithoutPrintAgentsInput>
  }

  export type PrintJobUpdateManyWithoutAgentNestedInput = {
    create?: XOR<PrintJobCreateWithoutAgentInput, PrintJobUncheckedCreateWithoutAgentInput> | PrintJobCreateWithoutAgentInput[] | PrintJobUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: PrintJobCreateOrConnectWithoutAgentInput | PrintJobCreateOrConnectWithoutAgentInput[]
    upsert?: PrintJobUpsertWithWhereUniqueWithoutAgentInput | PrintJobUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: PrintJobCreateManyAgentInputEnvelope
    set?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    disconnect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    delete?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    connect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    update?: PrintJobUpdateWithWhereUniqueWithoutAgentInput | PrintJobUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: PrintJobUpdateManyWithWhereWithoutAgentInput | PrintJobUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: PrintJobScalarWhereInput | PrintJobScalarWhereInput[]
  }

  export type PrinterUpdateManyWithoutAgentNestedInput = {
    create?: XOR<PrinterCreateWithoutAgentInput, PrinterUncheckedCreateWithoutAgentInput> | PrinterCreateWithoutAgentInput[] | PrinterUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: PrinterCreateOrConnectWithoutAgentInput | PrinterCreateOrConnectWithoutAgentInput[]
    upsert?: PrinterUpsertWithWhereUniqueWithoutAgentInput | PrinterUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: PrinterCreateManyAgentInputEnvelope
    set?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    disconnect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    delete?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    connect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    update?: PrinterUpdateWithWhereUniqueWithoutAgentInput | PrinterUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: PrinterUpdateManyWithWhereWithoutAgentInput | PrinterUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: PrinterScalarWhereInput | PrinterScalarWhereInput[]
  }

  export type PrintJobUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<PrintJobCreateWithoutAgentInput, PrintJobUncheckedCreateWithoutAgentInput> | PrintJobCreateWithoutAgentInput[] | PrintJobUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: PrintJobCreateOrConnectWithoutAgentInput | PrintJobCreateOrConnectWithoutAgentInput[]
    upsert?: PrintJobUpsertWithWhereUniqueWithoutAgentInput | PrintJobUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: PrintJobCreateManyAgentInputEnvelope
    set?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    disconnect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    delete?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    connect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    update?: PrintJobUpdateWithWhereUniqueWithoutAgentInput | PrintJobUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: PrintJobUpdateManyWithWhereWithoutAgentInput | PrintJobUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: PrintJobScalarWhereInput | PrintJobScalarWhereInput[]
  }

  export type PrinterUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<PrinterCreateWithoutAgentInput, PrinterUncheckedCreateWithoutAgentInput> | PrinterCreateWithoutAgentInput[] | PrinterUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: PrinterCreateOrConnectWithoutAgentInput | PrinterCreateOrConnectWithoutAgentInput[]
    upsert?: PrinterUpsertWithWhereUniqueWithoutAgentInput | PrinterUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: PrinterCreateManyAgentInputEnvelope
    set?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    disconnect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    delete?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    connect?: PrinterWhereUniqueInput | PrinterWhereUniqueInput[]
    update?: PrinterUpdateWithWhereUniqueWithoutAgentInput | PrinterUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: PrinterUpdateManyWithWhereWithoutAgentInput | PrinterUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: PrinterScalarWhereInput | PrinterScalarWhereInput[]
  }

  export type PrintJobCreateNestedManyWithoutPrinterInput = {
    create?: XOR<PrintJobCreateWithoutPrinterInput, PrintJobUncheckedCreateWithoutPrinterInput> | PrintJobCreateWithoutPrinterInput[] | PrintJobUncheckedCreateWithoutPrinterInput[]
    connectOrCreate?: PrintJobCreateOrConnectWithoutPrinterInput | PrintJobCreateOrConnectWithoutPrinterInput[]
    createMany?: PrintJobCreateManyPrinterInputEnvelope
    connect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
  }

  export type PrintAgentCreateNestedOneWithoutPrintersInput = {
    create?: XOR<PrintAgentCreateWithoutPrintersInput, PrintAgentUncheckedCreateWithoutPrintersInput>
    connectOrCreate?: PrintAgentCreateOrConnectWithoutPrintersInput
    connect?: PrintAgentWhereUniqueInput
  }

  export type ShopCreateNestedOneWithoutPrintersInput = {
    create?: XOR<ShopCreateWithoutPrintersInput, ShopUncheckedCreateWithoutPrintersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutPrintersInput
    connect?: ShopWhereUniqueInput
  }

  export type PrintJobUncheckedCreateNestedManyWithoutPrinterInput = {
    create?: XOR<PrintJobCreateWithoutPrinterInput, PrintJobUncheckedCreateWithoutPrinterInput> | PrintJobCreateWithoutPrinterInput[] | PrintJobUncheckedCreateWithoutPrinterInput[]
    connectOrCreate?: PrintJobCreateOrConnectWithoutPrinterInput | PrintJobCreateOrConnectWithoutPrinterInput[]
    createMany?: PrintJobCreateManyPrinterInputEnvelope
    connect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
  }

  export type PrintJobUpdateManyWithoutPrinterNestedInput = {
    create?: XOR<PrintJobCreateWithoutPrinterInput, PrintJobUncheckedCreateWithoutPrinterInput> | PrintJobCreateWithoutPrinterInput[] | PrintJobUncheckedCreateWithoutPrinterInput[]
    connectOrCreate?: PrintJobCreateOrConnectWithoutPrinterInput | PrintJobCreateOrConnectWithoutPrinterInput[]
    upsert?: PrintJobUpsertWithWhereUniqueWithoutPrinterInput | PrintJobUpsertWithWhereUniqueWithoutPrinterInput[]
    createMany?: PrintJobCreateManyPrinterInputEnvelope
    set?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    disconnect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    delete?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    connect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    update?: PrintJobUpdateWithWhereUniqueWithoutPrinterInput | PrintJobUpdateWithWhereUniqueWithoutPrinterInput[]
    updateMany?: PrintJobUpdateManyWithWhereWithoutPrinterInput | PrintJobUpdateManyWithWhereWithoutPrinterInput[]
    deleteMany?: PrintJobScalarWhereInput | PrintJobScalarWhereInput[]
  }

  export type PrintAgentUpdateOneWithoutPrintersNestedInput = {
    create?: XOR<PrintAgentCreateWithoutPrintersInput, PrintAgentUncheckedCreateWithoutPrintersInput>
    connectOrCreate?: PrintAgentCreateOrConnectWithoutPrintersInput
    upsert?: PrintAgentUpsertWithoutPrintersInput
    disconnect?: PrintAgentWhereInput | boolean
    delete?: PrintAgentWhereInput | boolean
    connect?: PrintAgentWhereUniqueInput
    update?: XOR<XOR<PrintAgentUpdateToOneWithWhereWithoutPrintersInput, PrintAgentUpdateWithoutPrintersInput>, PrintAgentUncheckedUpdateWithoutPrintersInput>
  }

  export type ShopUpdateOneRequiredWithoutPrintersNestedInput = {
    create?: XOR<ShopCreateWithoutPrintersInput, ShopUncheckedCreateWithoutPrintersInput>
    connectOrCreate?: ShopCreateOrConnectWithoutPrintersInput
    upsert?: ShopUpsertWithoutPrintersInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutPrintersInput, ShopUpdateWithoutPrintersInput>, ShopUncheckedUpdateWithoutPrintersInput>
  }

  export type PrintJobUncheckedUpdateManyWithoutPrinterNestedInput = {
    create?: XOR<PrintJobCreateWithoutPrinterInput, PrintJobUncheckedCreateWithoutPrinterInput> | PrintJobCreateWithoutPrinterInput[] | PrintJobUncheckedCreateWithoutPrinterInput[]
    connectOrCreate?: PrintJobCreateOrConnectWithoutPrinterInput | PrintJobCreateOrConnectWithoutPrinterInput[]
    upsert?: PrintJobUpsertWithWhereUniqueWithoutPrinterInput | PrintJobUpsertWithWhereUniqueWithoutPrinterInput[]
    createMany?: PrintJobCreateManyPrinterInputEnvelope
    set?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    disconnect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    delete?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    connect?: PrintJobWhereUniqueInput | PrintJobWhereUniqueInput[]
    update?: PrintJobUpdateWithWhereUniqueWithoutPrinterInput | PrintJobUpdateWithWhereUniqueWithoutPrinterInput[]
    updateMany?: PrintJobUpdateManyWithWhereWithoutPrinterInput | PrintJobUpdateManyWithWhereWithoutPrinterInput[]
    deleteMany?: PrintJobScalarWhereInput | PrintJobScalarWhereInput[]
  }

  export type PrintAgentCreateNestedOneWithoutPrintJobsInput = {
    create?: XOR<PrintAgentCreateWithoutPrintJobsInput, PrintAgentUncheckedCreateWithoutPrintJobsInput>
    connectOrCreate?: PrintAgentCreateOrConnectWithoutPrintJobsInput
    connect?: PrintAgentWhereUniqueInput
  }

  export type OrderDocumentCreateNestedOneWithoutPrintJobsInput = {
    create?: XOR<OrderDocumentCreateWithoutPrintJobsInput, OrderDocumentUncheckedCreateWithoutPrintJobsInput>
    connectOrCreate?: OrderDocumentCreateOrConnectWithoutPrintJobsInput
    connect?: OrderDocumentWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutPrintJobsInput = {
    create?: XOR<OrderCreateWithoutPrintJobsInput, OrderUncheckedCreateWithoutPrintJobsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPrintJobsInput
    connect?: OrderWhereUniqueInput
  }

  export type PrinterCreateNestedOneWithoutPrintJobsInput = {
    create?: XOR<PrinterCreateWithoutPrintJobsInput, PrinterUncheckedCreateWithoutPrintJobsInput>
    connectOrCreate?: PrinterCreateOrConnectWithoutPrintJobsInput
    connect?: PrinterWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PrintAgentUpdateOneWithoutPrintJobsNestedInput = {
    create?: XOR<PrintAgentCreateWithoutPrintJobsInput, PrintAgentUncheckedCreateWithoutPrintJobsInput>
    connectOrCreate?: PrintAgentCreateOrConnectWithoutPrintJobsInput
    upsert?: PrintAgentUpsertWithoutPrintJobsInput
    disconnect?: PrintAgentWhereInput | boolean
    delete?: PrintAgentWhereInput | boolean
    connect?: PrintAgentWhereUniqueInput
    update?: XOR<XOR<PrintAgentUpdateToOneWithWhereWithoutPrintJobsInput, PrintAgentUpdateWithoutPrintJobsInput>, PrintAgentUncheckedUpdateWithoutPrintJobsInput>
  }

  export type OrderDocumentUpdateOneRequiredWithoutPrintJobsNestedInput = {
    create?: XOR<OrderDocumentCreateWithoutPrintJobsInput, OrderDocumentUncheckedCreateWithoutPrintJobsInput>
    connectOrCreate?: OrderDocumentCreateOrConnectWithoutPrintJobsInput
    upsert?: OrderDocumentUpsertWithoutPrintJobsInput
    connect?: OrderDocumentWhereUniqueInput
    update?: XOR<XOR<OrderDocumentUpdateToOneWithWhereWithoutPrintJobsInput, OrderDocumentUpdateWithoutPrintJobsInput>, OrderDocumentUncheckedUpdateWithoutPrintJobsInput>
  }

  export type OrderUpdateOneRequiredWithoutPrintJobsNestedInput = {
    create?: XOR<OrderCreateWithoutPrintJobsInput, OrderUncheckedCreateWithoutPrintJobsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPrintJobsInput
    upsert?: OrderUpsertWithoutPrintJobsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPrintJobsInput, OrderUpdateWithoutPrintJobsInput>, OrderUncheckedUpdateWithoutPrintJobsInput>
  }

  export type PrinterUpdateOneWithoutPrintJobsNestedInput = {
    create?: XOR<PrinterCreateWithoutPrintJobsInput, PrinterUncheckedCreateWithoutPrintJobsInput>
    connectOrCreate?: PrinterCreateOrConnectWithoutPrintJobsInput
    upsert?: PrinterUpsertWithoutPrintJobsInput
    disconnect?: PrinterWhereInput | boolean
    delete?: PrinterWhereInput | boolean
    connect?: PrinterWhereUniqueInput
    update?: XOR<XOR<PrinterUpdateToOneWithWhereWithoutPrintJobsInput, PrinterUpdateWithoutPrintJobsInput>, PrinterUncheckedUpdateWithoutPrintJobsInput>
  }

  export type ShopCreateNestedOneWithoutPricingRulesInput = {
    create?: XOR<ShopCreateWithoutPricingRulesInput, ShopUncheckedCreateWithoutPricingRulesInput>
    connectOrCreate?: ShopCreateOrConnectWithoutPricingRulesInput
    connect?: ShopWhereUniqueInput
  }

  export type ShopUpdateOneRequiredWithoutPricingRulesNestedInput = {
    create?: XOR<ShopCreateWithoutPricingRulesInput, ShopUncheckedCreateWithoutPricingRulesInput>
    connectOrCreate?: ShopCreateOrConnectWithoutPricingRulesInput
    upsert?: ShopUpsertWithoutPricingRulesInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutPricingRulesInput, ShopUpdateWithoutPricingRulesInput>, ShopUncheckedUpdateWithoutPricingRulesInput>
  }

  export type SubscriptionCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionPlanCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<SubscriptionPlanCreateWithoutSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutSubscriptionsInput
    connect?: SubscriptionPlanWhereUniqueInput
  }

  export type ShopCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<ShopCreateWithoutSubscriptionInput, ShopUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: ShopCreateOrConnectWithoutSubscriptionInput
    connect?: ShopWhereUniqueInput
  }

  export type SubscriptionPlanUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutSubscriptionsInput
    upsert?: SubscriptionPlanUpsertWithoutSubscriptionsInput
    connect?: SubscriptionPlanWhereUniqueInput
    update?: XOR<XOR<SubscriptionPlanUpdateToOneWithWhereWithoutSubscriptionsInput, SubscriptionPlanUpdateWithoutSubscriptionsInput>, SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type ShopUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<ShopCreateWithoutSubscriptionInput, ShopUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: ShopCreateOrConnectWithoutSubscriptionInput
    upsert?: ShopUpsertWithoutSubscriptionInput
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutSubscriptionInput, ShopUpdateWithoutSubscriptionInput>, ShopUncheckedUpdateWithoutSubscriptionInput>
  }

  export type ShopCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<ShopCreateWithoutAuditLogsInput, ShopUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutAuditLogsInput
    connect?: ShopWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type ShopUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<ShopCreateWithoutAuditLogsInput, ShopUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutAuditLogsInput
    upsert?: ShopUpsertWithoutAuditLogsInput
    disconnect?: ShopWhereInput | boolean
    delete?: ShopWhereInput | boolean
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutAuditLogsInput, ShopUpdateWithoutAuditLogsInput>, ShopUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
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
    search?: string
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
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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
    search?: string
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
    search?: string
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type AuditLogCreateWithoutShopInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutShopInput = {
    id?: string
    userId?: string | null
    action: string
    entityType: string
    entityId: string
    details?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutShopInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutShopInput, AuditLogUncheckedCreateWithoutShopInput>
  }

  export type AuditLogCreateManyShopInputEnvelope = {
    data: AuditLogCreateManyShopInput | AuditLogCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutShopInput = {
    id?: string
    phone: string
    fullName: string
    email?: string | null
    createdAt?: Date | string
    orders?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutShopInput = {
    id?: string
    phone: string
    fullName: string
    email?: string | null
    createdAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutShopInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutShopInput, CustomerUncheckedCreateWithoutShopInput>
  }

  export type CustomerCreateManyShopInputEnvelope = {
    data: CustomerCreateManyShopInput | CustomerCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutShopInput = {
    id?: string
    orderNumber: string
    customerPhone?: string | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string | null
    paymentReference?: string | null
    paidAt?: Date | string | null
    totalDocuments?: number
    totalPages?: number
    estimatedAmount?: number
    finalAmount?: number | null
    customerNotes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: OrderDocumentCreateNestedManyWithoutOrderInput
    customer: CustomerCreateNestedOneWithoutOrdersInput
    printJobs?: PrintJobCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutShopInput = {
    id?: string
    orderNumber: string
    customerId: string
    customerPhone?: string | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string | null
    paymentReference?: string | null
    paidAt?: Date | string | null
    totalDocuments?: number
    totalPages?: number
    estimatedAmount?: number
    finalAmount?: number | null
    customerNotes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: OrderDocumentUncheckedCreateNestedManyWithoutOrderInput
    printJobs?: PrintJobUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutShopInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutShopInput, OrderUncheckedCreateWithoutShopInput>
  }

  export type OrderCreateManyShopInputEnvelope = {
    data: OrderCreateManyShopInput | OrderCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type PricingRuleCreateWithoutShopInput = {
    id?: string
    paperSize?: string
    bwSinglePrice?: number
    bwDoublePrice?: number
    colorSinglePrice?: number
    colorDoublePrice?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PricingRuleUncheckedCreateWithoutShopInput = {
    id?: string
    paperSize?: string
    bwSinglePrice?: number
    bwDoublePrice?: number
    colorSinglePrice?: number
    colorDoublePrice?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PricingRuleCreateOrConnectWithoutShopInput = {
    where: PricingRuleWhereUniqueInput
    create: XOR<PricingRuleCreateWithoutShopInput, PricingRuleUncheckedCreateWithoutShopInput>
  }

  export type PricingRuleCreateManyShopInputEnvelope = {
    data: PricingRuleCreateManyShopInput | PricingRuleCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type PrintAgentCreateWithoutShopInput = {
    id?: string
    agentName: string
    machineHostname?: string | null
    osVersion?: string | null
    ipAddress?: string | null
    authTokenHash: string
    isConnected?: boolean
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
    printJobs?: PrintJobCreateNestedManyWithoutAgentInput
    printers?: PrinterCreateNestedManyWithoutAgentInput
  }

  export type PrintAgentUncheckedCreateWithoutShopInput = {
    id?: string
    agentName: string
    machineHostname?: string | null
    osVersion?: string | null
    ipAddress?: string | null
    authTokenHash: string
    isConnected?: boolean
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
    printJobs?: PrintJobUncheckedCreateNestedManyWithoutAgentInput
    printers?: PrinterUncheckedCreateNestedManyWithoutAgentInput
  }

  export type PrintAgentCreateOrConnectWithoutShopInput = {
    where: PrintAgentWhereUniqueInput
    create: XOR<PrintAgentCreateWithoutShopInput, PrintAgentUncheckedCreateWithoutShopInput>
  }

  export type PrintAgentCreateManyShopInputEnvelope = {
    data: PrintAgentCreateManyShopInput | PrintAgentCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type PrinterCreateWithoutShopInput = {
    id?: string
    windowsPrinterName: string
    displayName: string
    manufacturer?: string | null
    model?: string | null
    connectionType?: string
    ipAddress?: string | null
    supportsColor?: boolean
    supportsDuplex?: boolean
    supportedPaperSizes?: string
    status?: string
    isActive?: boolean
    currentQueueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    printJobs?: PrintJobCreateNestedManyWithoutPrinterInput
    agent?: PrintAgentCreateNestedOneWithoutPrintersInput
  }

  export type PrinterUncheckedCreateWithoutShopInput = {
    id?: string
    agentId?: string | null
    windowsPrinterName: string
    displayName: string
    manufacturer?: string | null
    model?: string | null
    connectionType?: string
    ipAddress?: string | null
    supportsColor?: boolean
    supportsDuplex?: boolean
    supportedPaperSizes?: string
    status?: string
    isActive?: boolean
    currentQueueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    printJobs?: PrintJobUncheckedCreateNestedManyWithoutPrinterInput
  }

  export type PrinterCreateOrConnectWithoutShopInput = {
    where: PrinterWhereUniqueInput
    create: XOR<PrinterCreateWithoutShopInput, PrinterUncheckedCreateWithoutShopInput>
  }

  export type PrinterCreateManyShopInputEnvelope = {
    data: PrinterCreateManyShopInput | PrinterCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutShopInput = {
    id?: string
    status?: string
    trialStartAt?: Date | string
    trialEndAt: Date | string
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    plan: SubscriptionPlanCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutShopInput = {
    id?: string
    planId: string
    status?: string
    trialStartAt?: Date | string
    trialEndAt: Date | string
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutShopInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutShopInput, SubscriptionUncheckedCreateWithoutShopInput>
  }

  export type UserCreateWithoutShopInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    phone?: string | null
    role?: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShopInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    phone?: string | null
    role?: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShopInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput>
  }

  export type UserCreateManyShopInputEnvelope = {
    data: UserCreateManyShopInput | UserCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogUpsertWithWhereUniqueWithoutShopInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutShopInput, AuditLogUncheckedUpdateWithoutShopInput>
    create: XOR<AuditLogCreateWithoutShopInput, AuditLogUncheckedCreateWithoutShopInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutShopInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutShopInput, AuditLogUncheckedUpdateWithoutShopInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutShopInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutShopInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    shopId?: StringNullableFilter<"AuditLog"> | string | null
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringFilter<"AuditLog"> | string
    details?: StringNullableFilter<"AuditLog"> | string | null
    ipAddress?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type CustomerUpsertWithWhereUniqueWithoutShopInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutShopInput, CustomerUncheckedUpdateWithoutShopInput>
    create: XOR<CustomerCreateWithoutShopInput, CustomerUncheckedCreateWithoutShopInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutShopInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutShopInput, CustomerUncheckedUpdateWithoutShopInput>
  }

  export type CustomerUpdateManyWithWhereWithoutShopInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutShopInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: StringFilter<"Customer"> | string
    shopId?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    fullName?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutShopInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutShopInput, OrderUncheckedUpdateWithoutShopInput>
    create: XOR<OrderCreateWithoutShopInput, OrderUncheckedCreateWithoutShopInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutShopInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutShopInput, OrderUncheckedUpdateWithoutShopInput>
  }

  export type OrderUpdateManyWithWhereWithoutShopInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutShopInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    shopId?: StringFilter<"Order"> | string
    customerId?: StringFilter<"Order"> | string
    customerPhone?: StringNullableFilter<"Order"> | string | null
    status?: StringFilter<"Order"> | string
    paymentStatus?: StringFilter<"Order"> | string
    paymentMethod?: StringNullableFilter<"Order"> | string | null
    paymentReference?: StringNullableFilter<"Order"> | string | null
    paidAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    totalDocuments?: IntFilter<"Order"> | number
    totalPages?: IntFilter<"Order"> | number
    estimatedAmount?: FloatFilter<"Order"> | number
    finalAmount?: FloatNullableFilter<"Order"> | number | null
    customerNotes?: StringNullableFilter<"Order"> | string | null
    rejectionReason?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type PricingRuleUpsertWithWhereUniqueWithoutShopInput = {
    where: PricingRuleWhereUniqueInput
    update: XOR<PricingRuleUpdateWithoutShopInput, PricingRuleUncheckedUpdateWithoutShopInput>
    create: XOR<PricingRuleCreateWithoutShopInput, PricingRuleUncheckedCreateWithoutShopInput>
  }

  export type PricingRuleUpdateWithWhereUniqueWithoutShopInput = {
    where: PricingRuleWhereUniqueInput
    data: XOR<PricingRuleUpdateWithoutShopInput, PricingRuleUncheckedUpdateWithoutShopInput>
  }

  export type PricingRuleUpdateManyWithWhereWithoutShopInput = {
    where: PricingRuleScalarWhereInput
    data: XOR<PricingRuleUpdateManyMutationInput, PricingRuleUncheckedUpdateManyWithoutShopInput>
  }

  export type PricingRuleScalarWhereInput = {
    AND?: PricingRuleScalarWhereInput | PricingRuleScalarWhereInput[]
    OR?: PricingRuleScalarWhereInput[]
    NOT?: PricingRuleScalarWhereInput | PricingRuleScalarWhereInput[]
    id?: StringFilter<"PricingRule"> | string
    shopId?: StringFilter<"PricingRule"> | string
    paperSize?: StringFilter<"PricingRule"> | string
    bwSinglePrice?: FloatFilter<"PricingRule"> | number
    bwDoublePrice?: FloatFilter<"PricingRule"> | number
    colorSinglePrice?: FloatFilter<"PricingRule"> | number
    colorDoublePrice?: FloatFilter<"PricingRule"> | number
    isActive?: BoolFilter<"PricingRule"> | boolean
    createdAt?: DateTimeFilter<"PricingRule"> | Date | string
  }

  export type PrintAgentUpsertWithWhereUniqueWithoutShopInput = {
    where: PrintAgentWhereUniqueInput
    update: XOR<PrintAgentUpdateWithoutShopInput, PrintAgentUncheckedUpdateWithoutShopInput>
    create: XOR<PrintAgentCreateWithoutShopInput, PrintAgentUncheckedCreateWithoutShopInput>
  }

  export type PrintAgentUpdateWithWhereUniqueWithoutShopInput = {
    where: PrintAgentWhereUniqueInput
    data: XOR<PrintAgentUpdateWithoutShopInput, PrintAgentUncheckedUpdateWithoutShopInput>
  }

  export type PrintAgentUpdateManyWithWhereWithoutShopInput = {
    where: PrintAgentScalarWhereInput
    data: XOR<PrintAgentUpdateManyMutationInput, PrintAgentUncheckedUpdateManyWithoutShopInput>
  }

  export type PrintAgentScalarWhereInput = {
    AND?: PrintAgentScalarWhereInput | PrintAgentScalarWhereInput[]
    OR?: PrintAgentScalarWhereInput[]
    NOT?: PrintAgentScalarWhereInput | PrintAgentScalarWhereInput[]
    id?: StringFilter<"PrintAgent"> | string
    shopId?: StringFilter<"PrintAgent"> | string
    agentName?: StringFilter<"PrintAgent"> | string
    machineHostname?: StringNullableFilter<"PrintAgent"> | string | null
    osVersion?: StringNullableFilter<"PrintAgent"> | string | null
    ipAddress?: StringNullableFilter<"PrintAgent"> | string | null
    authTokenHash?: StringFilter<"PrintAgent"> | string
    isConnected?: BoolFilter<"PrintAgent"> | boolean
    lastHeartbeatAt?: DateTimeNullableFilter<"PrintAgent"> | Date | string | null
    createdAt?: DateTimeFilter<"PrintAgent"> | Date | string
  }

  export type PrinterUpsertWithWhereUniqueWithoutShopInput = {
    where: PrinterWhereUniqueInput
    update: XOR<PrinterUpdateWithoutShopInput, PrinterUncheckedUpdateWithoutShopInput>
    create: XOR<PrinterCreateWithoutShopInput, PrinterUncheckedCreateWithoutShopInput>
  }

  export type PrinterUpdateWithWhereUniqueWithoutShopInput = {
    where: PrinterWhereUniqueInput
    data: XOR<PrinterUpdateWithoutShopInput, PrinterUncheckedUpdateWithoutShopInput>
  }

  export type PrinterUpdateManyWithWhereWithoutShopInput = {
    where: PrinterScalarWhereInput
    data: XOR<PrinterUpdateManyMutationInput, PrinterUncheckedUpdateManyWithoutShopInput>
  }

  export type PrinterScalarWhereInput = {
    AND?: PrinterScalarWhereInput | PrinterScalarWhereInput[]
    OR?: PrinterScalarWhereInput[]
    NOT?: PrinterScalarWhereInput | PrinterScalarWhereInput[]
    id?: StringFilter<"Printer"> | string
    shopId?: StringFilter<"Printer"> | string
    agentId?: StringNullableFilter<"Printer"> | string | null
    windowsPrinterName?: StringFilter<"Printer"> | string
    displayName?: StringFilter<"Printer"> | string
    manufacturer?: StringNullableFilter<"Printer"> | string | null
    model?: StringNullableFilter<"Printer"> | string | null
    connectionType?: StringFilter<"Printer"> | string
    ipAddress?: StringNullableFilter<"Printer"> | string | null
    supportsColor?: BoolFilter<"Printer"> | boolean
    supportsDuplex?: BoolFilter<"Printer"> | boolean
    supportedPaperSizes?: StringFilter<"Printer"> | string
    status?: StringFilter<"Printer"> | string
    isActive?: BoolFilter<"Printer"> | boolean
    currentQueueCount?: IntFilter<"Printer"> | number
    createdAt?: DateTimeFilter<"Printer"> | Date | string
    updatedAt?: DateTimeFilter<"Printer"> | Date | string
  }

  export type SubscriptionUpsertWithoutShopInput = {
    update: XOR<SubscriptionUpdateWithoutShopInput, SubscriptionUncheckedUpdateWithoutShopInput>
    create: XOR<SubscriptionCreateWithoutShopInput, SubscriptionUncheckedCreateWithoutShopInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutShopInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutShopInput, SubscriptionUncheckedUpdateWithoutShopInput>
  }

  export type SubscriptionUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trialStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trialEndAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: SubscriptionPlanUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trialStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trialEndAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutShopInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutShopInput, UserUncheckedUpdateWithoutShopInput>
    create: XOR<UserCreateWithoutShopInput, UserUncheckedCreateWithoutShopInput>
  }

  export type UserUpdateWithWhereUniqueWithoutShopInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutShopInput, UserUncheckedUpdateWithoutShopInput>
  }

  export type UserUpdateManyWithWhereWithoutShopInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutShopInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    shopId?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    action: string
    entityType: string
    entityId: string
    details?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
    shop?: ShopCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    shopId?: string | null
    action: string
    entityType: string
    entityId: string
    details?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ShopCreateWithoutUsersInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutShopInput
    customers?: CustomerCreateNestedManyWithoutShopInput
    orders?: OrderCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleCreateNestedManyWithoutShopInput
    printAgents?: PrintAgentCreateNestedManyWithoutShopInput
    printers?: PrinterCreateNestedManyWithoutShopInput
    subscription?: SubscriptionCreateNestedOneWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutUsersInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutShopInput
    customers?: CustomerUncheckedCreateNestedManyWithoutShopInput
    orders?: OrderUncheckedCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutShopInput
    printAgents?: PrintAgentUncheckedCreateNestedManyWithoutShopInput
    printers?: PrinterUncheckedCreateNestedManyWithoutShopInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutUsersInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutUsersInput, ShopUncheckedCreateWithoutUsersInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ShopUpsertWithoutUsersInput = {
    update: XOR<ShopUpdateWithoutUsersInput, ShopUncheckedUpdateWithoutUsersInput>
    create: XOR<ShopCreateWithoutUsersInput, ShopUncheckedCreateWithoutUsersInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutUsersInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutUsersInput, ShopUncheckedUpdateWithoutUsersInput>
  }

  export type ShopUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutShopNestedInput
    customers?: CustomerUpdateManyWithoutShopNestedInput
    orders?: OrderUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutShopNestedInput
    printAgents?: PrintAgentUpdateManyWithoutShopNestedInput
    printers?: PrinterUpdateManyWithoutShopNestedInput
    subscription?: SubscriptionUpdateOneWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutShopNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutShopNestedInput
    orders?: OrderUncheckedUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutShopNestedInput
    printAgents?: PrintAgentUncheckedUpdateManyWithoutShopNestedInput
    printers?: PrinterUncheckedUpdateManyWithoutShopNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutShopNestedInput
  }

  export type ShopCreateWithoutCustomersInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutShopInput
    orders?: OrderCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleCreateNestedManyWithoutShopInput
    printAgents?: PrintAgentCreateNestedManyWithoutShopInput
    printers?: PrinterCreateNestedManyWithoutShopInput
    subscription?: SubscriptionCreateNestedOneWithoutShopInput
    users?: UserCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutCustomersInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutShopInput
    orders?: OrderUncheckedCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutShopInput
    printAgents?: PrintAgentUncheckedCreateNestedManyWithoutShopInput
    printers?: PrinterUncheckedCreateNestedManyWithoutShopInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutShopInput
    users?: UserUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutCustomersInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutCustomersInput, ShopUncheckedCreateWithoutCustomersInput>
  }

  export type OrderCreateWithoutCustomerInput = {
    id?: string
    orderNumber: string
    customerPhone?: string | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string | null
    paymentReference?: string | null
    paidAt?: Date | string | null
    totalDocuments?: number
    totalPages?: number
    estimatedAmount?: number
    finalAmount?: number | null
    customerNotes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: OrderDocumentCreateNestedManyWithoutOrderInput
    shop: ShopCreateNestedOneWithoutOrdersInput
    printJobs?: PrintJobCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: string
    orderNumber: string
    shopId: string
    customerPhone?: string | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string | null
    paymentReference?: string | null
    paidAt?: Date | string | null
    totalDocuments?: number
    totalPages?: number
    estimatedAmount?: number
    finalAmount?: number | null
    customerNotes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: OrderDocumentUncheckedCreateNestedManyWithoutOrderInput
    printJobs?: PrintJobUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateManyCustomerInputEnvelope = {
    data: OrderCreateManyCustomerInput | OrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithoutCustomersInput = {
    update: XOR<ShopUpdateWithoutCustomersInput, ShopUncheckedUpdateWithoutCustomersInput>
    create: XOR<ShopCreateWithoutCustomersInput, ShopUncheckedCreateWithoutCustomersInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutCustomersInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutCustomersInput, ShopUncheckedUpdateWithoutCustomersInput>
  }

  export type ShopUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutShopNestedInput
    orders?: OrderUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutShopNestedInput
    printAgents?: PrintAgentUpdateManyWithoutShopNestedInput
    printers?: PrinterUpdateManyWithoutShopNestedInput
    subscription?: SubscriptionUpdateOneWithoutShopNestedInput
    users?: UserUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutShopNestedInput
    orders?: OrderUncheckedUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutShopNestedInput
    printAgents?: PrintAgentUncheckedUpdateManyWithoutShopNestedInput
    printers?: PrinterUncheckedUpdateManyWithoutShopNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutShopNestedInput
    users?: UserUncheckedUpdateManyWithoutShopNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type OrderDocumentCreateWithoutOrderInput = {
    id?: string
    originalFilename: string
    storageKey: string
    fileSizeBytes: number
    mimeType: string
    sha256Checksum: string
    detectedPageCount?: number
    previewImageKey?: string | null
    createdAt?: Date | string
    specs?: DocumentPrintSpecCreateNestedOneWithoutDocumentInput
    printJobs?: PrintJobCreateNestedManyWithoutDocumentInput
  }

  export type OrderDocumentUncheckedCreateWithoutOrderInput = {
    id?: string
    originalFilename: string
    storageKey: string
    fileSizeBytes: number
    mimeType: string
    sha256Checksum: string
    detectedPageCount?: number
    previewImageKey?: string | null
    createdAt?: Date | string
    specs?: DocumentPrintSpecUncheckedCreateNestedOneWithoutDocumentInput
    printJobs?: PrintJobUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type OrderDocumentCreateOrConnectWithoutOrderInput = {
    where: OrderDocumentWhereUniqueInput
    create: XOR<OrderDocumentCreateWithoutOrderInput, OrderDocumentUncheckedCreateWithoutOrderInput>
  }

  export type OrderDocumentCreateManyOrderInputEnvelope = {
    data: OrderDocumentCreateManyOrderInput | OrderDocumentCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutOrdersInput = {
    id?: string
    phone: string
    fullName: string
    email?: string | null
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutCustomersInput
  }

  export type CustomerUncheckedCreateWithoutOrdersInput = {
    id?: string
    shopId: string
    phone: string
    fullName: string
    email?: string | null
    createdAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type ShopCreateWithoutOrdersInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutShopInput
    customers?: CustomerCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleCreateNestedManyWithoutShopInput
    printAgents?: PrintAgentCreateNestedManyWithoutShopInput
    printers?: PrinterCreateNestedManyWithoutShopInput
    subscription?: SubscriptionCreateNestedOneWithoutShopInput
    users?: UserCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutOrdersInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutShopInput
    customers?: CustomerUncheckedCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutShopInput
    printAgents?: PrintAgentUncheckedCreateNestedManyWithoutShopInput
    printers?: PrinterUncheckedCreateNestedManyWithoutShopInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutShopInput
    users?: UserUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutOrdersInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutOrdersInput, ShopUncheckedCreateWithoutOrdersInput>
  }

  export type PrintJobCreateWithoutOrderInput = {
    id?: string
    status?: string
    spoolerJobId?: number | null
    errorMessage?: string | null
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    agent?: PrintAgentCreateNestedOneWithoutPrintJobsInput
    document: OrderDocumentCreateNestedOneWithoutPrintJobsInput
    printer?: PrinterCreateNestedOneWithoutPrintJobsInput
  }

  export type PrintJobUncheckedCreateWithoutOrderInput = {
    id?: string
    documentId: string
    printerId?: string | null
    agentId?: string | null
    status?: string
    spoolerJobId?: number | null
    errorMessage?: string | null
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PrintJobCreateOrConnectWithoutOrderInput = {
    where: PrintJobWhereUniqueInput
    create: XOR<PrintJobCreateWithoutOrderInput, PrintJobUncheckedCreateWithoutOrderInput>
  }

  export type PrintJobCreateManyOrderInputEnvelope = {
    data: PrintJobCreateManyOrderInput | PrintJobCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderDocumentUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderDocumentWhereUniqueInput
    update: XOR<OrderDocumentUpdateWithoutOrderInput, OrderDocumentUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderDocumentCreateWithoutOrderInput, OrderDocumentUncheckedCreateWithoutOrderInput>
  }

  export type OrderDocumentUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderDocumentWhereUniqueInput
    data: XOR<OrderDocumentUpdateWithoutOrderInput, OrderDocumentUncheckedUpdateWithoutOrderInput>
  }

  export type OrderDocumentUpdateManyWithWhereWithoutOrderInput = {
    where: OrderDocumentScalarWhereInput
    data: XOR<OrderDocumentUpdateManyMutationInput, OrderDocumentUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderDocumentScalarWhereInput = {
    AND?: OrderDocumentScalarWhereInput | OrderDocumentScalarWhereInput[]
    OR?: OrderDocumentScalarWhereInput[]
    NOT?: OrderDocumentScalarWhereInput | OrderDocumentScalarWhereInput[]
    id?: StringFilter<"OrderDocument"> | string
    orderId?: StringFilter<"OrderDocument"> | string
    originalFilename?: StringFilter<"OrderDocument"> | string
    storageKey?: StringFilter<"OrderDocument"> | string
    fileSizeBytes?: IntFilter<"OrderDocument"> | number
    mimeType?: StringFilter<"OrderDocument"> | string
    sha256Checksum?: StringFilter<"OrderDocument"> | string
    detectedPageCount?: IntFilter<"OrderDocument"> | number
    previewImageKey?: StringNullableFilter<"OrderDocument"> | string | null
    createdAt?: DateTimeFilter<"OrderDocument"> | Date | string
  }

  export type CustomerUpsertWithoutOrdersInput = {
    update: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomerUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutCustomersNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUpsertWithoutOrdersInput = {
    update: XOR<ShopUpdateWithoutOrdersInput, ShopUncheckedUpdateWithoutOrdersInput>
    create: XOR<ShopCreateWithoutOrdersInput, ShopUncheckedCreateWithoutOrdersInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutOrdersInput, ShopUncheckedUpdateWithoutOrdersInput>
  }

  export type ShopUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutShopNestedInput
    customers?: CustomerUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutShopNestedInput
    printAgents?: PrintAgentUpdateManyWithoutShopNestedInput
    printers?: PrinterUpdateManyWithoutShopNestedInput
    subscription?: SubscriptionUpdateOneWithoutShopNestedInput
    users?: UserUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutShopNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutShopNestedInput
    printAgents?: PrintAgentUncheckedUpdateManyWithoutShopNestedInput
    printers?: PrinterUncheckedUpdateManyWithoutShopNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutShopNestedInput
    users?: UserUncheckedUpdateManyWithoutShopNestedInput
  }

  export type PrintJobUpsertWithWhereUniqueWithoutOrderInput = {
    where: PrintJobWhereUniqueInput
    update: XOR<PrintJobUpdateWithoutOrderInput, PrintJobUncheckedUpdateWithoutOrderInput>
    create: XOR<PrintJobCreateWithoutOrderInput, PrintJobUncheckedCreateWithoutOrderInput>
  }

  export type PrintJobUpdateWithWhereUniqueWithoutOrderInput = {
    where: PrintJobWhereUniqueInput
    data: XOR<PrintJobUpdateWithoutOrderInput, PrintJobUncheckedUpdateWithoutOrderInput>
  }

  export type PrintJobUpdateManyWithWhereWithoutOrderInput = {
    where: PrintJobScalarWhereInput
    data: XOR<PrintJobUpdateManyMutationInput, PrintJobUncheckedUpdateManyWithoutOrderInput>
  }

  export type PrintJobScalarWhereInput = {
    AND?: PrintJobScalarWhereInput | PrintJobScalarWhereInput[]
    OR?: PrintJobScalarWhereInput[]
    NOT?: PrintJobScalarWhereInput | PrintJobScalarWhereInput[]
    id?: StringFilter<"PrintJob"> | string
    orderId?: StringFilter<"PrintJob"> | string
    documentId?: StringFilter<"PrintJob"> | string
    printerId?: StringNullableFilter<"PrintJob"> | string | null
    agentId?: StringNullableFilter<"PrintJob"> | string | null
    status?: StringFilter<"PrintJob"> | string
    spoolerJobId?: IntNullableFilter<"PrintJob"> | number | null
    errorMessage?: StringNullableFilter<"PrintJob"> | string | null
    dispatchedAt?: DateTimeNullableFilter<"PrintJob"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"PrintJob"> | Date | string | null
    createdAt?: DateTimeFilter<"PrintJob"> | Date | string
  }

  export type DocumentPrintSpecCreateWithoutDocumentInput = {
    id?: string
    copies?: number
    color?: string
    duplex?: string
    paperSize?: string
    orientation?: string
    pageRange?: string
    pagesPerSheet?: number
    collate?: boolean
    stapling?: string
    binding?: string
    lamination?: string
    finishingNotes?: string | null
    priceDetails?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentPrintSpecUncheckedCreateWithoutDocumentInput = {
    id?: string
    copies?: number
    color?: string
    duplex?: string
    paperSize?: string
    orientation?: string
    pageRange?: string
    pagesPerSheet?: number
    collate?: boolean
    stapling?: string
    binding?: string
    lamination?: string
    finishingNotes?: string | null
    priceDetails?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentPrintSpecCreateOrConnectWithoutDocumentInput = {
    where: DocumentPrintSpecWhereUniqueInput
    create: XOR<DocumentPrintSpecCreateWithoutDocumentInput, DocumentPrintSpecUncheckedCreateWithoutDocumentInput>
  }

  export type OrderCreateWithoutDocumentsInput = {
    id?: string
    orderNumber: string
    customerPhone?: string | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string | null
    paymentReference?: string | null
    paidAt?: Date | string | null
    totalDocuments?: number
    totalPages?: number
    estimatedAmount?: number
    finalAmount?: number | null
    customerNotes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutOrdersInput
    shop: ShopCreateNestedOneWithoutOrdersInput
    printJobs?: PrintJobCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutDocumentsInput = {
    id?: string
    orderNumber: string
    shopId: string
    customerId: string
    customerPhone?: string | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string | null
    paymentReference?: string | null
    paidAt?: Date | string | null
    totalDocuments?: number
    totalPages?: number
    estimatedAmount?: number
    finalAmount?: number | null
    customerNotes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    printJobs?: PrintJobUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutDocumentsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDocumentsInput, OrderUncheckedCreateWithoutDocumentsInput>
  }

  export type PrintJobCreateWithoutDocumentInput = {
    id?: string
    status?: string
    spoolerJobId?: number | null
    errorMessage?: string | null
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    agent?: PrintAgentCreateNestedOneWithoutPrintJobsInput
    order: OrderCreateNestedOneWithoutPrintJobsInput
    printer?: PrinterCreateNestedOneWithoutPrintJobsInput
  }

  export type PrintJobUncheckedCreateWithoutDocumentInput = {
    id?: string
    orderId: string
    printerId?: string | null
    agentId?: string | null
    status?: string
    spoolerJobId?: number | null
    errorMessage?: string | null
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PrintJobCreateOrConnectWithoutDocumentInput = {
    where: PrintJobWhereUniqueInput
    create: XOR<PrintJobCreateWithoutDocumentInput, PrintJobUncheckedCreateWithoutDocumentInput>
  }

  export type PrintJobCreateManyDocumentInputEnvelope = {
    data: PrintJobCreateManyDocumentInput | PrintJobCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type DocumentPrintSpecUpsertWithoutDocumentInput = {
    update: XOR<DocumentPrintSpecUpdateWithoutDocumentInput, DocumentPrintSpecUncheckedUpdateWithoutDocumentInput>
    create: XOR<DocumentPrintSpecCreateWithoutDocumentInput, DocumentPrintSpecUncheckedCreateWithoutDocumentInput>
    where?: DocumentPrintSpecWhereInput
  }

  export type DocumentPrintSpecUpdateToOneWithWhereWithoutDocumentInput = {
    where?: DocumentPrintSpecWhereInput
    data: XOR<DocumentPrintSpecUpdateWithoutDocumentInput, DocumentPrintSpecUncheckedUpdateWithoutDocumentInput>
  }

  export type DocumentPrintSpecUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    duplex?: StringFieldUpdateOperationsInput | string
    paperSize?: StringFieldUpdateOperationsInput | string
    orientation?: StringFieldUpdateOperationsInput | string
    pageRange?: StringFieldUpdateOperationsInput | string
    pagesPerSheet?: IntFieldUpdateOperationsInput | number
    collate?: BoolFieldUpdateOperationsInput | boolean
    stapling?: StringFieldUpdateOperationsInput | string
    binding?: StringFieldUpdateOperationsInput | string
    lamination?: StringFieldUpdateOperationsInput | string
    finishingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    priceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentPrintSpecUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    copies?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    duplex?: StringFieldUpdateOperationsInput | string
    paperSize?: StringFieldUpdateOperationsInput | string
    orientation?: StringFieldUpdateOperationsInput | string
    pageRange?: StringFieldUpdateOperationsInput | string
    pagesPerSheet?: IntFieldUpdateOperationsInput | number
    collate?: BoolFieldUpdateOperationsInput | boolean
    stapling?: StringFieldUpdateOperationsInput | string
    binding?: StringFieldUpdateOperationsInput | string
    lamination?: StringFieldUpdateOperationsInput | string
    finishingNotes?: NullableStringFieldUpdateOperationsInput | string | null
    priceDetails?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpsertWithoutDocumentsInput = {
    update: XOR<OrderUpdateWithoutDocumentsInput, OrderUncheckedUpdateWithoutDocumentsInput>
    create: XOR<OrderCreateWithoutDocumentsInput, OrderUncheckedCreateWithoutDocumentsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutDocumentsInput, OrderUncheckedUpdateWithoutDocumentsInput>
  }

  export type OrderUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDocuments?: IntFieldUpdateOperationsInput | number
    totalPages?: IntFieldUpdateOperationsInput | number
    estimatedAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    customerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    shop?: ShopUpdateOneRequiredWithoutOrdersNestedInput
    printJobs?: PrintJobUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDocuments?: IntFieldUpdateOperationsInput | number
    totalPages?: IntFieldUpdateOperationsInput | number
    estimatedAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    customerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printJobs?: PrintJobUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type PrintJobUpsertWithWhereUniqueWithoutDocumentInput = {
    where: PrintJobWhereUniqueInput
    update: XOR<PrintJobUpdateWithoutDocumentInput, PrintJobUncheckedUpdateWithoutDocumentInput>
    create: XOR<PrintJobCreateWithoutDocumentInput, PrintJobUncheckedCreateWithoutDocumentInput>
  }

  export type PrintJobUpdateWithWhereUniqueWithoutDocumentInput = {
    where: PrintJobWhereUniqueInput
    data: XOR<PrintJobUpdateWithoutDocumentInput, PrintJobUncheckedUpdateWithoutDocumentInput>
  }

  export type PrintJobUpdateManyWithWhereWithoutDocumentInput = {
    where: PrintJobScalarWhereInput
    data: XOR<PrintJobUpdateManyMutationInput, PrintJobUncheckedUpdateManyWithoutDocumentInput>
  }

  export type OrderDocumentCreateWithoutSpecsInput = {
    id?: string
    originalFilename: string
    storageKey: string
    fileSizeBytes: number
    mimeType: string
    sha256Checksum: string
    detectedPageCount?: number
    previewImageKey?: string | null
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutDocumentsInput
    printJobs?: PrintJobCreateNestedManyWithoutDocumentInput
  }

  export type OrderDocumentUncheckedCreateWithoutSpecsInput = {
    id?: string
    orderId: string
    originalFilename: string
    storageKey: string
    fileSizeBytes: number
    mimeType: string
    sha256Checksum: string
    detectedPageCount?: number
    previewImageKey?: string | null
    createdAt?: Date | string
    printJobs?: PrintJobUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type OrderDocumentCreateOrConnectWithoutSpecsInput = {
    where: OrderDocumentWhereUniqueInput
    create: XOR<OrderDocumentCreateWithoutSpecsInput, OrderDocumentUncheckedCreateWithoutSpecsInput>
  }

  export type OrderDocumentUpsertWithoutSpecsInput = {
    update: XOR<OrderDocumentUpdateWithoutSpecsInput, OrderDocumentUncheckedUpdateWithoutSpecsInput>
    create: XOR<OrderDocumentCreateWithoutSpecsInput, OrderDocumentUncheckedCreateWithoutSpecsInput>
    where?: OrderDocumentWhereInput
  }

  export type OrderDocumentUpdateToOneWithWhereWithoutSpecsInput = {
    where?: OrderDocumentWhereInput
    data: XOR<OrderDocumentUpdateWithoutSpecsInput, OrderDocumentUncheckedUpdateWithoutSpecsInput>
  }

  export type OrderDocumentUpdateWithoutSpecsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFilename?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    fileSizeBytes?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    sha256Checksum?: StringFieldUpdateOperationsInput | string
    detectedPageCount?: IntFieldUpdateOperationsInput | number
    previewImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutDocumentsNestedInput
    printJobs?: PrintJobUpdateManyWithoutDocumentNestedInput
  }

  export type OrderDocumentUncheckedUpdateWithoutSpecsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    originalFilename?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    fileSizeBytes?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    sha256Checksum?: StringFieldUpdateOperationsInput | string
    detectedPageCount?: IntFieldUpdateOperationsInput | number
    previewImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printJobs?: PrintJobUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type ShopCreateWithoutPrintAgentsInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutShopInput
    customers?: CustomerCreateNestedManyWithoutShopInput
    orders?: OrderCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleCreateNestedManyWithoutShopInput
    printers?: PrinterCreateNestedManyWithoutShopInput
    subscription?: SubscriptionCreateNestedOneWithoutShopInput
    users?: UserCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutPrintAgentsInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutShopInput
    customers?: CustomerUncheckedCreateNestedManyWithoutShopInput
    orders?: OrderUncheckedCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutShopInput
    printers?: PrinterUncheckedCreateNestedManyWithoutShopInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutShopInput
    users?: UserUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutPrintAgentsInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutPrintAgentsInput, ShopUncheckedCreateWithoutPrintAgentsInput>
  }

  export type PrintJobCreateWithoutAgentInput = {
    id?: string
    status?: string
    spoolerJobId?: number | null
    errorMessage?: string | null
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    document: OrderDocumentCreateNestedOneWithoutPrintJobsInput
    order: OrderCreateNestedOneWithoutPrintJobsInput
    printer?: PrinterCreateNestedOneWithoutPrintJobsInput
  }

  export type PrintJobUncheckedCreateWithoutAgentInput = {
    id?: string
    orderId: string
    documentId: string
    printerId?: string | null
    status?: string
    spoolerJobId?: number | null
    errorMessage?: string | null
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PrintJobCreateOrConnectWithoutAgentInput = {
    where: PrintJobWhereUniqueInput
    create: XOR<PrintJobCreateWithoutAgentInput, PrintJobUncheckedCreateWithoutAgentInput>
  }

  export type PrintJobCreateManyAgentInputEnvelope = {
    data: PrintJobCreateManyAgentInput | PrintJobCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type PrinterCreateWithoutAgentInput = {
    id?: string
    windowsPrinterName: string
    displayName: string
    manufacturer?: string | null
    model?: string | null
    connectionType?: string
    ipAddress?: string | null
    supportsColor?: boolean
    supportsDuplex?: boolean
    supportedPaperSizes?: string
    status?: string
    isActive?: boolean
    currentQueueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    printJobs?: PrintJobCreateNestedManyWithoutPrinterInput
    shop: ShopCreateNestedOneWithoutPrintersInput
  }

  export type PrinterUncheckedCreateWithoutAgentInput = {
    id?: string
    shopId: string
    windowsPrinterName: string
    displayName: string
    manufacturer?: string | null
    model?: string | null
    connectionType?: string
    ipAddress?: string | null
    supportsColor?: boolean
    supportsDuplex?: boolean
    supportedPaperSizes?: string
    status?: string
    isActive?: boolean
    currentQueueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    printJobs?: PrintJobUncheckedCreateNestedManyWithoutPrinterInput
  }

  export type PrinterCreateOrConnectWithoutAgentInput = {
    where: PrinterWhereUniqueInput
    create: XOR<PrinterCreateWithoutAgentInput, PrinterUncheckedCreateWithoutAgentInput>
  }

  export type PrinterCreateManyAgentInputEnvelope = {
    data: PrinterCreateManyAgentInput | PrinterCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithoutPrintAgentsInput = {
    update: XOR<ShopUpdateWithoutPrintAgentsInput, ShopUncheckedUpdateWithoutPrintAgentsInput>
    create: XOR<ShopCreateWithoutPrintAgentsInput, ShopUncheckedCreateWithoutPrintAgentsInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutPrintAgentsInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutPrintAgentsInput, ShopUncheckedUpdateWithoutPrintAgentsInput>
  }

  export type ShopUpdateWithoutPrintAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutShopNestedInput
    customers?: CustomerUpdateManyWithoutShopNestedInput
    orders?: OrderUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutShopNestedInput
    printers?: PrinterUpdateManyWithoutShopNestedInput
    subscription?: SubscriptionUpdateOneWithoutShopNestedInput
    users?: UserUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutPrintAgentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutShopNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutShopNestedInput
    orders?: OrderUncheckedUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutShopNestedInput
    printers?: PrinterUncheckedUpdateManyWithoutShopNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutShopNestedInput
    users?: UserUncheckedUpdateManyWithoutShopNestedInput
  }

  export type PrintJobUpsertWithWhereUniqueWithoutAgentInput = {
    where: PrintJobWhereUniqueInput
    update: XOR<PrintJobUpdateWithoutAgentInput, PrintJobUncheckedUpdateWithoutAgentInput>
    create: XOR<PrintJobCreateWithoutAgentInput, PrintJobUncheckedCreateWithoutAgentInput>
  }

  export type PrintJobUpdateWithWhereUniqueWithoutAgentInput = {
    where: PrintJobWhereUniqueInput
    data: XOR<PrintJobUpdateWithoutAgentInput, PrintJobUncheckedUpdateWithoutAgentInput>
  }

  export type PrintJobUpdateManyWithWhereWithoutAgentInput = {
    where: PrintJobScalarWhereInput
    data: XOR<PrintJobUpdateManyMutationInput, PrintJobUncheckedUpdateManyWithoutAgentInput>
  }

  export type PrinterUpsertWithWhereUniqueWithoutAgentInput = {
    where: PrinterWhereUniqueInput
    update: XOR<PrinterUpdateWithoutAgentInput, PrinterUncheckedUpdateWithoutAgentInput>
    create: XOR<PrinterCreateWithoutAgentInput, PrinterUncheckedCreateWithoutAgentInput>
  }

  export type PrinterUpdateWithWhereUniqueWithoutAgentInput = {
    where: PrinterWhereUniqueInput
    data: XOR<PrinterUpdateWithoutAgentInput, PrinterUncheckedUpdateWithoutAgentInput>
  }

  export type PrinterUpdateManyWithWhereWithoutAgentInput = {
    where: PrinterScalarWhereInput
    data: XOR<PrinterUpdateManyMutationInput, PrinterUncheckedUpdateManyWithoutAgentInput>
  }

  export type PrintJobCreateWithoutPrinterInput = {
    id?: string
    status?: string
    spoolerJobId?: number | null
    errorMessage?: string | null
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    agent?: PrintAgentCreateNestedOneWithoutPrintJobsInput
    document: OrderDocumentCreateNestedOneWithoutPrintJobsInput
    order: OrderCreateNestedOneWithoutPrintJobsInput
  }

  export type PrintJobUncheckedCreateWithoutPrinterInput = {
    id?: string
    orderId: string
    documentId: string
    agentId?: string | null
    status?: string
    spoolerJobId?: number | null
    errorMessage?: string | null
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PrintJobCreateOrConnectWithoutPrinterInput = {
    where: PrintJobWhereUniqueInput
    create: XOR<PrintJobCreateWithoutPrinterInput, PrintJobUncheckedCreateWithoutPrinterInput>
  }

  export type PrintJobCreateManyPrinterInputEnvelope = {
    data: PrintJobCreateManyPrinterInput | PrintJobCreateManyPrinterInput[]
    skipDuplicates?: boolean
  }

  export type PrintAgentCreateWithoutPrintersInput = {
    id?: string
    agentName: string
    machineHostname?: string | null
    osVersion?: string | null
    ipAddress?: string | null
    authTokenHash: string
    isConnected?: boolean
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutPrintAgentsInput
    printJobs?: PrintJobCreateNestedManyWithoutAgentInput
  }

  export type PrintAgentUncheckedCreateWithoutPrintersInput = {
    id?: string
    shopId: string
    agentName: string
    machineHostname?: string | null
    osVersion?: string | null
    ipAddress?: string | null
    authTokenHash: string
    isConnected?: boolean
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
    printJobs?: PrintJobUncheckedCreateNestedManyWithoutAgentInput
  }

  export type PrintAgentCreateOrConnectWithoutPrintersInput = {
    where: PrintAgentWhereUniqueInput
    create: XOR<PrintAgentCreateWithoutPrintersInput, PrintAgentUncheckedCreateWithoutPrintersInput>
  }

  export type ShopCreateWithoutPrintersInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutShopInput
    customers?: CustomerCreateNestedManyWithoutShopInput
    orders?: OrderCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleCreateNestedManyWithoutShopInput
    printAgents?: PrintAgentCreateNestedManyWithoutShopInput
    subscription?: SubscriptionCreateNestedOneWithoutShopInput
    users?: UserCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutPrintersInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutShopInput
    customers?: CustomerUncheckedCreateNestedManyWithoutShopInput
    orders?: OrderUncheckedCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutShopInput
    printAgents?: PrintAgentUncheckedCreateNestedManyWithoutShopInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutShopInput
    users?: UserUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutPrintersInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutPrintersInput, ShopUncheckedCreateWithoutPrintersInput>
  }

  export type PrintJobUpsertWithWhereUniqueWithoutPrinterInput = {
    where: PrintJobWhereUniqueInput
    update: XOR<PrintJobUpdateWithoutPrinterInput, PrintJobUncheckedUpdateWithoutPrinterInput>
    create: XOR<PrintJobCreateWithoutPrinterInput, PrintJobUncheckedCreateWithoutPrinterInput>
  }

  export type PrintJobUpdateWithWhereUniqueWithoutPrinterInput = {
    where: PrintJobWhereUniqueInput
    data: XOR<PrintJobUpdateWithoutPrinterInput, PrintJobUncheckedUpdateWithoutPrinterInput>
  }

  export type PrintJobUpdateManyWithWhereWithoutPrinterInput = {
    where: PrintJobScalarWhereInput
    data: XOR<PrintJobUpdateManyMutationInput, PrintJobUncheckedUpdateManyWithoutPrinterInput>
  }

  export type PrintAgentUpsertWithoutPrintersInput = {
    update: XOR<PrintAgentUpdateWithoutPrintersInput, PrintAgentUncheckedUpdateWithoutPrintersInput>
    create: XOR<PrintAgentCreateWithoutPrintersInput, PrintAgentUncheckedCreateWithoutPrintersInput>
    where?: PrintAgentWhereInput
  }

  export type PrintAgentUpdateToOneWithWhereWithoutPrintersInput = {
    where?: PrintAgentWhereInput
    data: XOR<PrintAgentUpdateWithoutPrintersInput, PrintAgentUncheckedUpdateWithoutPrintersInput>
  }

  export type PrintAgentUpdateWithoutPrintersInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    machineHostname?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    authTokenHash?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutPrintAgentsNestedInput
    printJobs?: PrintJobUpdateManyWithoutAgentNestedInput
  }

  export type PrintAgentUncheckedUpdateWithoutPrintersInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    machineHostname?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    authTokenHash?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printJobs?: PrintJobUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type ShopUpsertWithoutPrintersInput = {
    update: XOR<ShopUpdateWithoutPrintersInput, ShopUncheckedUpdateWithoutPrintersInput>
    create: XOR<ShopCreateWithoutPrintersInput, ShopUncheckedCreateWithoutPrintersInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutPrintersInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutPrintersInput, ShopUncheckedUpdateWithoutPrintersInput>
  }

  export type ShopUpdateWithoutPrintersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutShopNestedInput
    customers?: CustomerUpdateManyWithoutShopNestedInput
    orders?: OrderUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutShopNestedInput
    printAgents?: PrintAgentUpdateManyWithoutShopNestedInput
    subscription?: SubscriptionUpdateOneWithoutShopNestedInput
    users?: UserUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutPrintersInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutShopNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutShopNestedInput
    orders?: OrderUncheckedUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutShopNestedInput
    printAgents?: PrintAgentUncheckedUpdateManyWithoutShopNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutShopNestedInput
    users?: UserUncheckedUpdateManyWithoutShopNestedInput
  }

  export type PrintAgentCreateWithoutPrintJobsInput = {
    id?: string
    agentName: string
    machineHostname?: string | null
    osVersion?: string | null
    ipAddress?: string | null
    authTokenHash: string
    isConnected?: boolean
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutPrintAgentsInput
    printers?: PrinterCreateNestedManyWithoutAgentInput
  }

  export type PrintAgentUncheckedCreateWithoutPrintJobsInput = {
    id?: string
    shopId: string
    agentName: string
    machineHostname?: string | null
    osVersion?: string | null
    ipAddress?: string | null
    authTokenHash: string
    isConnected?: boolean
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
    printers?: PrinterUncheckedCreateNestedManyWithoutAgentInput
  }

  export type PrintAgentCreateOrConnectWithoutPrintJobsInput = {
    where: PrintAgentWhereUniqueInput
    create: XOR<PrintAgentCreateWithoutPrintJobsInput, PrintAgentUncheckedCreateWithoutPrintJobsInput>
  }

  export type OrderDocumentCreateWithoutPrintJobsInput = {
    id?: string
    originalFilename: string
    storageKey: string
    fileSizeBytes: number
    mimeType: string
    sha256Checksum: string
    detectedPageCount?: number
    previewImageKey?: string | null
    createdAt?: Date | string
    specs?: DocumentPrintSpecCreateNestedOneWithoutDocumentInput
    order: OrderCreateNestedOneWithoutDocumentsInput
  }

  export type OrderDocumentUncheckedCreateWithoutPrintJobsInput = {
    id?: string
    orderId: string
    originalFilename: string
    storageKey: string
    fileSizeBytes: number
    mimeType: string
    sha256Checksum: string
    detectedPageCount?: number
    previewImageKey?: string | null
    createdAt?: Date | string
    specs?: DocumentPrintSpecUncheckedCreateNestedOneWithoutDocumentInput
  }

  export type OrderDocumentCreateOrConnectWithoutPrintJobsInput = {
    where: OrderDocumentWhereUniqueInput
    create: XOR<OrderDocumentCreateWithoutPrintJobsInput, OrderDocumentUncheckedCreateWithoutPrintJobsInput>
  }

  export type OrderCreateWithoutPrintJobsInput = {
    id?: string
    orderNumber: string
    customerPhone?: string | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string | null
    paymentReference?: string | null
    paidAt?: Date | string | null
    totalDocuments?: number
    totalPages?: number
    estimatedAmount?: number
    finalAmount?: number | null
    customerNotes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: OrderDocumentCreateNestedManyWithoutOrderInput
    customer: CustomerCreateNestedOneWithoutOrdersInput
    shop: ShopCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutPrintJobsInput = {
    id?: string
    orderNumber: string
    shopId: string
    customerId: string
    customerPhone?: string | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string | null
    paymentReference?: string | null
    paidAt?: Date | string | null
    totalDocuments?: number
    totalPages?: number
    estimatedAmount?: number
    finalAmount?: number | null
    customerNotes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: OrderDocumentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPrintJobsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPrintJobsInput, OrderUncheckedCreateWithoutPrintJobsInput>
  }

  export type PrinterCreateWithoutPrintJobsInput = {
    id?: string
    windowsPrinterName: string
    displayName: string
    manufacturer?: string | null
    model?: string | null
    connectionType?: string
    ipAddress?: string | null
    supportsColor?: boolean
    supportsDuplex?: boolean
    supportedPaperSizes?: string
    status?: string
    isActive?: boolean
    currentQueueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    agent?: PrintAgentCreateNestedOneWithoutPrintersInput
    shop: ShopCreateNestedOneWithoutPrintersInput
  }

  export type PrinterUncheckedCreateWithoutPrintJobsInput = {
    id?: string
    shopId: string
    agentId?: string | null
    windowsPrinterName: string
    displayName: string
    manufacturer?: string | null
    model?: string | null
    connectionType?: string
    ipAddress?: string | null
    supportsColor?: boolean
    supportsDuplex?: boolean
    supportedPaperSizes?: string
    status?: string
    isActive?: boolean
    currentQueueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrinterCreateOrConnectWithoutPrintJobsInput = {
    where: PrinterWhereUniqueInput
    create: XOR<PrinterCreateWithoutPrintJobsInput, PrinterUncheckedCreateWithoutPrintJobsInput>
  }

  export type PrintAgentUpsertWithoutPrintJobsInput = {
    update: XOR<PrintAgentUpdateWithoutPrintJobsInput, PrintAgentUncheckedUpdateWithoutPrintJobsInput>
    create: XOR<PrintAgentCreateWithoutPrintJobsInput, PrintAgentUncheckedCreateWithoutPrintJobsInput>
    where?: PrintAgentWhereInput
  }

  export type PrintAgentUpdateToOneWithWhereWithoutPrintJobsInput = {
    where?: PrintAgentWhereInput
    data: XOR<PrintAgentUpdateWithoutPrintJobsInput, PrintAgentUncheckedUpdateWithoutPrintJobsInput>
  }

  export type PrintAgentUpdateWithoutPrintJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    machineHostname?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    authTokenHash?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutPrintAgentsNestedInput
    printers?: PrinterUpdateManyWithoutAgentNestedInput
  }

  export type PrintAgentUncheckedUpdateWithoutPrintJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    machineHostname?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    authTokenHash?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printers?: PrinterUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type OrderDocumentUpsertWithoutPrintJobsInput = {
    update: XOR<OrderDocumentUpdateWithoutPrintJobsInput, OrderDocumentUncheckedUpdateWithoutPrintJobsInput>
    create: XOR<OrderDocumentCreateWithoutPrintJobsInput, OrderDocumentUncheckedCreateWithoutPrintJobsInput>
    where?: OrderDocumentWhereInput
  }

  export type OrderDocumentUpdateToOneWithWhereWithoutPrintJobsInput = {
    where?: OrderDocumentWhereInput
    data: XOR<OrderDocumentUpdateWithoutPrintJobsInput, OrderDocumentUncheckedUpdateWithoutPrintJobsInput>
  }

  export type OrderDocumentUpdateWithoutPrintJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFilename?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    fileSizeBytes?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    sha256Checksum?: StringFieldUpdateOperationsInput | string
    detectedPageCount?: IntFieldUpdateOperationsInput | number
    previewImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specs?: DocumentPrintSpecUpdateOneWithoutDocumentNestedInput
    order?: OrderUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type OrderDocumentUncheckedUpdateWithoutPrintJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    originalFilename?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    fileSizeBytes?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    sha256Checksum?: StringFieldUpdateOperationsInput | string
    detectedPageCount?: IntFieldUpdateOperationsInput | number
    previewImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specs?: DocumentPrintSpecUncheckedUpdateOneWithoutDocumentNestedInput
  }

  export type OrderUpsertWithoutPrintJobsInput = {
    update: XOR<OrderUpdateWithoutPrintJobsInput, OrderUncheckedUpdateWithoutPrintJobsInput>
    create: XOR<OrderCreateWithoutPrintJobsInput, OrderUncheckedCreateWithoutPrintJobsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPrintJobsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPrintJobsInput, OrderUncheckedUpdateWithoutPrintJobsInput>
  }

  export type OrderUpdateWithoutPrintJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDocuments?: IntFieldUpdateOperationsInput | number
    totalPages?: IntFieldUpdateOperationsInput | number
    estimatedAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    customerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: OrderDocumentUpdateManyWithoutOrderNestedInput
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    shop?: ShopUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutPrintJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDocuments?: IntFieldUpdateOperationsInput | number
    totalPages?: IntFieldUpdateOperationsInput | number
    estimatedAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    customerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: OrderDocumentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type PrinterUpsertWithoutPrintJobsInput = {
    update: XOR<PrinterUpdateWithoutPrintJobsInput, PrinterUncheckedUpdateWithoutPrintJobsInput>
    create: XOR<PrinterCreateWithoutPrintJobsInput, PrinterUncheckedCreateWithoutPrintJobsInput>
    where?: PrinterWhereInput
  }

  export type PrinterUpdateToOneWithWhereWithoutPrintJobsInput = {
    where?: PrinterWhereInput
    data: XOR<PrinterUpdateWithoutPrintJobsInput, PrinterUncheckedUpdateWithoutPrintJobsInput>
  }

  export type PrinterUpdateWithoutPrintJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    windowsPrinterName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supportsColor?: BoolFieldUpdateOperationsInput | boolean
    supportsDuplex?: BoolFieldUpdateOperationsInput | boolean
    supportedPaperSizes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentQueueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: PrintAgentUpdateOneWithoutPrintersNestedInput
    shop?: ShopUpdateOneRequiredWithoutPrintersNestedInput
  }

  export type PrinterUncheckedUpdateWithoutPrintJobsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    windowsPrinterName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supportsColor?: BoolFieldUpdateOperationsInput | boolean
    supportsDuplex?: BoolFieldUpdateOperationsInput | boolean
    supportedPaperSizes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentQueueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopCreateWithoutPricingRulesInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutShopInput
    customers?: CustomerCreateNestedManyWithoutShopInput
    orders?: OrderCreateNestedManyWithoutShopInput
    printAgents?: PrintAgentCreateNestedManyWithoutShopInput
    printers?: PrinterCreateNestedManyWithoutShopInput
    subscription?: SubscriptionCreateNestedOneWithoutShopInput
    users?: UserCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutPricingRulesInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutShopInput
    customers?: CustomerUncheckedCreateNestedManyWithoutShopInput
    orders?: OrderUncheckedCreateNestedManyWithoutShopInput
    printAgents?: PrintAgentUncheckedCreateNestedManyWithoutShopInput
    printers?: PrinterUncheckedCreateNestedManyWithoutShopInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutShopInput
    users?: UserUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutPricingRulesInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutPricingRulesInput, ShopUncheckedCreateWithoutPricingRulesInput>
  }

  export type ShopUpsertWithoutPricingRulesInput = {
    update: XOR<ShopUpdateWithoutPricingRulesInput, ShopUncheckedUpdateWithoutPricingRulesInput>
    create: XOR<ShopCreateWithoutPricingRulesInput, ShopUncheckedCreateWithoutPricingRulesInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutPricingRulesInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutPricingRulesInput, ShopUncheckedUpdateWithoutPricingRulesInput>
  }

  export type ShopUpdateWithoutPricingRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutShopNestedInput
    customers?: CustomerUpdateManyWithoutShopNestedInput
    orders?: OrderUpdateManyWithoutShopNestedInput
    printAgents?: PrintAgentUpdateManyWithoutShopNestedInput
    printers?: PrinterUpdateManyWithoutShopNestedInput
    subscription?: SubscriptionUpdateOneWithoutShopNestedInput
    users?: UserUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutPricingRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutShopNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutShopNestedInput
    orders?: OrderUncheckedUpdateManyWithoutShopNestedInput
    printAgents?: PrintAgentUncheckedUpdateManyWithoutShopNestedInput
    printers?: PrinterUncheckedUpdateManyWithoutShopNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutShopNestedInput
    users?: UserUncheckedUpdateManyWithoutShopNestedInput
  }

  export type SubscriptionCreateWithoutPlanInput = {
    id?: string
    status?: string
    trialStartAt?: Date | string
    trialEndAt: Date | string
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
    shop: ShopCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutPlanInput = {
    id?: string
    shopId: string
    status?: string
    trialStartAt?: Date | string
    trialEndAt: Date | string
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionCreateManyPlanInputEnvelope = {
    data: SubscriptionCreateManyPlanInput | SubscriptionCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutPlanInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    shopId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    trialStartAt?: DateTimeFilter<"Subscription"> | Date | string
    trialEndAt?: DateTimeFilter<"Subscription"> | Date | string
    currentPeriodStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type SubscriptionPlanCreateWithoutSubscriptionsInput = {
    id: string
    name: string
    monthlyPrice: number
    yearlyPrice: number
    maxPrinters: number
    maxMonthlyOrders: number
    featuresJson: string
    createdAt?: Date | string
  }

  export type SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput = {
    id: string
    name: string
    monthlyPrice: number
    yearlyPrice: number
    maxPrinters: number
    maxMonthlyOrders: number
    featuresJson: string
    createdAt?: Date | string
  }

  export type SubscriptionPlanCreateOrConnectWithoutSubscriptionsInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<SubscriptionPlanCreateWithoutSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput>
  }

  export type ShopCreateWithoutSubscriptionInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogCreateNestedManyWithoutShopInput
    customers?: CustomerCreateNestedManyWithoutShopInput
    orders?: OrderCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleCreateNestedManyWithoutShopInput
    printAgents?: PrintAgentCreateNestedManyWithoutShopInput
    printers?: PrinterCreateNestedManyWithoutShopInput
    users?: UserCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutShopInput
    customers?: CustomerUncheckedCreateNestedManyWithoutShopInput
    orders?: OrderUncheckedCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutShopInput
    printAgents?: PrintAgentUncheckedCreateNestedManyWithoutShopInput
    printers?: PrinterUncheckedCreateNestedManyWithoutShopInput
    users?: UserUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutSubscriptionInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutSubscriptionInput, ShopUncheckedCreateWithoutSubscriptionInput>
  }

  export type SubscriptionPlanUpsertWithoutSubscriptionsInput = {
    update: XOR<SubscriptionPlanUpdateWithoutSubscriptionsInput, SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<SubscriptionPlanCreateWithoutSubscriptionsInput, SubscriptionPlanUncheckedCreateWithoutSubscriptionsInput>
    where?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPlanUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: SubscriptionPlanWhereInput
    data: XOR<SubscriptionPlanUpdateWithoutSubscriptionsInput, SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type SubscriptionPlanUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    yearlyPrice?: FloatFieldUpdateOperationsInput | number
    maxPrinters?: IntFieldUpdateOperationsInput | number
    maxMonthlyOrders?: IntFieldUpdateOperationsInput | number
    featuresJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    monthlyPrice?: FloatFieldUpdateOperationsInput | number
    yearlyPrice?: FloatFieldUpdateOperationsInput | number
    maxPrinters?: IntFieldUpdateOperationsInput | number
    maxMonthlyOrders?: IntFieldUpdateOperationsInput | number
    featuresJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUpsertWithoutSubscriptionInput = {
    update: XOR<ShopUpdateWithoutSubscriptionInput, ShopUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<ShopCreateWithoutSubscriptionInput, ShopUncheckedCreateWithoutSubscriptionInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutSubscriptionInput, ShopUncheckedUpdateWithoutSubscriptionInput>
  }

  export type ShopUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutShopNestedInput
    customers?: CustomerUpdateManyWithoutShopNestedInput
    orders?: OrderUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutShopNestedInput
    printAgents?: PrintAgentUpdateManyWithoutShopNestedInput
    printers?: PrinterUpdateManyWithoutShopNestedInput
    users?: UserUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutShopNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutShopNestedInput
    orders?: OrderUncheckedUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutShopNestedInput
    printAgents?: PrintAgentUncheckedUpdateManyWithoutShopNestedInput
    printers?: PrinterUncheckedUpdateManyWithoutShopNestedInput
    users?: UserUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateWithoutAuditLogsInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerCreateNestedManyWithoutShopInput
    orders?: OrderCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleCreateNestedManyWithoutShopInput
    printAgents?: PrintAgentCreateNestedManyWithoutShopInput
    printers?: PrinterCreateNestedManyWithoutShopInput
    subscription?: SubscriptionCreateNestedOneWithoutShopInput
    users?: UserCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    slug: string
    name: string
    phone: string
    email: string
    address?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    gstNumber?: string | null
    qrCodeUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    customers?: CustomerUncheckedCreateNestedManyWithoutShopInput
    orders?: OrderUncheckedCreateNestedManyWithoutShopInput
    pricingRules?: PricingRuleUncheckedCreateNestedManyWithoutShopInput
    printAgents?: PrintAgentUncheckedCreateNestedManyWithoutShopInput
    printers?: PrinterUncheckedCreateNestedManyWithoutShopInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutShopInput
    users?: UserUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopCreateOrConnectWithoutAuditLogsInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutAuditLogsInput, ShopUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    phone?: string | null
    role?: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shop?: ShopCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    shopId?: string | null
    email: string
    passwordHash: string
    fullName: string
    phone?: string | null
    role?: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type ShopUpsertWithoutAuditLogsInput = {
    update: XOR<ShopUpdateWithoutAuditLogsInput, ShopUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<ShopCreateWithoutAuditLogsInput, ShopUncheckedCreateWithoutAuditLogsInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutAuditLogsInput, ShopUncheckedUpdateWithoutAuditLogsInput>
  }

  export type ShopUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUpdateManyWithoutShopNestedInput
    orders?: OrderUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUpdateManyWithoutShopNestedInput
    printAgents?: PrintAgentUpdateManyWithoutShopNestedInput
    printers?: PrinterUpdateManyWithoutShopNestedInput
    subscription?: SubscriptionUpdateOneWithoutShopNestedInput
    users?: UserUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUncheckedUpdateManyWithoutShopNestedInput
    orders?: OrderUncheckedUpdateManyWithoutShopNestedInput
    pricingRules?: PricingRuleUncheckedUpdateManyWithoutShopNestedInput
    printAgents?: PrintAgentUncheckedUpdateManyWithoutShopNestedInput
    printers?: PrinterUncheckedUpdateManyWithoutShopNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutShopNestedInput
    users?: UserUncheckedUpdateManyWithoutShopNestedInput
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
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyShopInput = {
    id?: string
    userId?: string | null
    action: string
    entityType: string
    entityId: string
    details?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type CustomerCreateManyShopInput = {
    id?: string
    phone: string
    fullName: string
    email?: string | null
    createdAt?: Date | string
  }

  export type OrderCreateManyShopInput = {
    id?: string
    orderNumber: string
    customerId: string
    customerPhone?: string | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string | null
    paymentReference?: string | null
    paidAt?: Date | string | null
    totalDocuments?: number
    totalPages?: number
    estimatedAmount?: number
    finalAmount?: number | null
    customerNotes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PricingRuleCreateManyShopInput = {
    id?: string
    paperSize?: string
    bwSinglePrice?: number
    bwDoublePrice?: number
    colorSinglePrice?: number
    colorDoublePrice?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type PrintAgentCreateManyShopInput = {
    id?: string
    agentName: string
    machineHostname?: string | null
    osVersion?: string | null
    ipAddress?: string | null
    authTokenHash: string
    isConnected?: boolean
    lastHeartbeatAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PrinterCreateManyShopInput = {
    id?: string
    agentId?: string | null
    windowsPrinterName: string
    displayName: string
    manufacturer?: string | null
    model?: string | null
    connectionType?: string
    ipAddress?: string | null
    supportsColor?: boolean
    supportsDuplex?: boolean
    supportedPaperSizes?: string
    status?: string
    isActive?: boolean
    currentQueueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyShopInput = {
    id?: string
    email: string
    passwordHash: string
    fullName: string
    phone?: string | null
    role?: string
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDocuments?: IntFieldUpdateOperationsInput | number
    totalPages?: IntFieldUpdateOperationsInput | number
    estimatedAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    customerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: OrderDocumentUpdateManyWithoutOrderNestedInput
    customer?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    printJobs?: PrintJobUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDocuments?: IntFieldUpdateOperationsInput | number
    totalPages?: IntFieldUpdateOperationsInput | number
    estimatedAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    customerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: OrderDocumentUncheckedUpdateManyWithoutOrderNestedInput
    printJobs?: PrintJobUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDocuments?: IntFieldUpdateOperationsInput | number
    totalPages?: IntFieldUpdateOperationsInput | number
    estimatedAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    customerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingRuleUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    paperSize?: StringFieldUpdateOperationsInput | string
    bwSinglePrice?: FloatFieldUpdateOperationsInput | number
    bwDoublePrice?: FloatFieldUpdateOperationsInput | number
    colorSinglePrice?: FloatFieldUpdateOperationsInput | number
    colorDoublePrice?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingRuleUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    paperSize?: StringFieldUpdateOperationsInput | string
    bwSinglePrice?: FloatFieldUpdateOperationsInput | number
    bwDoublePrice?: FloatFieldUpdateOperationsInput | number
    colorSinglePrice?: FloatFieldUpdateOperationsInput | number
    colorDoublePrice?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PricingRuleUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    paperSize?: StringFieldUpdateOperationsInput | string
    bwSinglePrice?: FloatFieldUpdateOperationsInput | number
    bwDoublePrice?: FloatFieldUpdateOperationsInput | number
    colorSinglePrice?: FloatFieldUpdateOperationsInput | number
    colorDoublePrice?: FloatFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrintAgentUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    machineHostname?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    authTokenHash?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printJobs?: PrintJobUpdateManyWithoutAgentNestedInput
    printers?: PrinterUpdateManyWithoutAgentNestedInput
  }

  export type PrintAgentUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    machineHostname?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    authTokenHash?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printJobs?: PrintJobUncheckedUpdateManyWithoutAgentNestedInput
    printers?: PrinterUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type PrintAgentUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentName?: StringFieldUpdateOperationsInput | string
    machineHostname?: NullableStringFieldUpdateOperationsInput | string | null
    osVersion?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    authTokenHash?: StringFieldUpdateOperationsInput | string
    isConnected?: BoolFieldUpdateOperationsInput | boolean
    lastHeartbeatAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrinterUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    windowsPrinterName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supportsColor?: BoolFieldUpdateOperationsInput | boolean
    supportsDuplex?: BoolFieldUpdateOperationsInput | boolean
    supportedPaperSizes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentQueueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printJobs?: PrintJobUpdateManyWithoutPrinterNestedInput
    agent?: PrintAgentUpdateOneWithoutPrintersNestedInput
  }

  export type PrinterUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    windowsPrinterName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supportsColor?: BoolFieldUpdateOperationsInput | boolean
    supportsDuplex?: BoolFieldUpdateOperationsInput | boolean
    supportedPaperSizes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentQueueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printJobs?: PrintJobUncheckedUpdateManyWithoutPrinterNestedInput
  }

  export type PrinterUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    windowsPrinterName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supportsColor?: BoolFieldUpdateOperationsInput | boolean
    supportsDuplex?: BoolFieldUpdateOperationsInput | boolean
    supportedPaperSizes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentQueueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutShopInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    shopId?: string | null
    action: string
    entityType: string
    entityId: string
    details?: string | null
    ipAddress?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyCustomerInput = {
    id?: string
    orderNumber: string
    shopId: string
    customerPhone?: string | null
    status?: string
    paymentStatus?: string
    paymentMethod?: string | null
    paymentReference?: string | null
    paidAt?: Date | string | null
    totalDocuments?: number
    totalPages?: number
    estimatedAmount?: number
    finalAmount?: number | null
    customerNotes?: string | null
    rejectionReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDocuments?: IntFieldUpdateOperationsInput | number
    totalPages?: IntFieldUpdateOperationsInput | number
    estimatedAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    customerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: OrderDocumentUpdateManyWithoutOrderNestedInput
    shop?: ShopUpdateOneRequiredWithoutOrdersNestedInput
    printJobs?: PrintJobUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDocuments?: IntFieldUpdateOperationsInput | number
    totalPages?: IntFieldUpdateOperationsInput | number
    estimatedAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    customerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: OrderDocumentUncheckedUpdateManyWithoutOrderNestedInput
    printJobs?: PrintJobUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    paymentStatus?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paymentReference?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    totalDocuments?: IntFieldUpdateOperationsInput | number
    totalPages?: IntFieldUpdateOperationsInput | number
    estimatedAmount?: FloatFieldUpdateOperationsInput | number
    finalAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    customerNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDocumentCreateManyOrderInput = {
    id?: string
    originalFilename: string
    storageKey: string
    fileSizeBytes: number
    mimeType: string
    sha256Checksum: string
    detectedPageCount?: number
    previewImageKey?: string | null
    createdAt?: Date | string
  }

  export type PrintJobCreateManyOrderInput = {
    id?: string
    documentId: string
    printerId?: string | null
    agentId?: string | null
    status?: string
    spoolerJobId?: number | null
    errorMessage?: string | null
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type OrderDocumentUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFilename?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    fileSizeBytes?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    sha256Checksum?: StringFieldUpdateOperationsInput | string
    detectedPageCount?: IntFieldUpdateOperationsInput | number
    previewImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specs?: DocumentPrintSpecUpdateOneWithoutDocumentNestedInput
    printJobs?: PrintJobUpdateManyWithoutDocumentNestedInput
  }

  export type OrderDocumentUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFilename?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    fileSizeBytes?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    sha256Checksum?: StringFieldUpdateOperationsInput | string
    detectedPageCount?: IntFieldUpdateOperationsInput | number
    previewImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specs?: DocumentPrintSpecUncheckedUpdateOneWithoutDocumentNestedInput
    printJobs?: PrintJobUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type OrderDocumentUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    originalFilename?: StringFieldUpdateOperationsInput | string
    storageKey?: StringFieldUpdateOperationsInput | string
    fileSizeBytes?: IntFieldUpdateOperationsInput | number
    mimeType?: StringFieldUpdateOperationsInput | string
    sha256Checksum?: StringFieldUpdateOperationsInput | string
    detectedPageCount?: IntFieldUpdateOperationsInput | number
    previewImageKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrintJobUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    spoolerJobId?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: PrintAgentUpdateOneWithoutPrintJobsNestedInput
    document?: OrderDocumentUpdateOneRequiredWithoutPrintJobsNestedInput
    printer?: PrinterUpdateOneWithoutPrintJobsNestedInput
  }

  export type PrintJobUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    printerId?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    spoolerJobId?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrintJobUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    printerId?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    spoolerJobId?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrintJobCreateManyDocumentInput = {
    id?: string
    orderId: string
    printerId?: string | null
    agentId?: string | null
    status?: string
    spoolerJobId?: number | null
    errorMessage?: string | null
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PrintJobUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    spoolerJobId?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: PrintAgentUpdateOneWithoutPrintJobsNestedInput
    order?: OrderUpdateOneRequiredWithoutPrintJobsNestedInput
    printer?: PrinterUpdateOneWithoutPrintJobsNestedInput
  }

  export type PrintJobUncheckedUpdateWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    printerId?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    spoolerJobId?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrintJobUncheckedUpdateManyWithoutDocumentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    printerId?: NullableStringFieldUpdateOperationsInput | string | null
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    spoolerJobId?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrintJobCreateManyAgentInput = {
    id?: string
    orderId: string
    documentId: string
    printerId?: string | null
    status?: string
    spoolerJobId?: number | null
    errorMessage?: string | null
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PrinterCreateManyAgentInput = {
    id?: string
    shopId: string
    windowsPrinterName: string
    displayName: string
    manufacturer?: string | null
    model?: string | null
    connectionType?: string
    ipAddress?: string | null
    supportsColor?: boolean
    supportsDuplex?: boolean
    supportedPaperSizes?: string
    status?: string
    isActive?: boolean
    currentQueueCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PrintJobUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    spoolerJobId?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: OrderDocumentUpdateOneRequiredWithoutPrintJobsNestedInput
    order?: OrderUpdateOneRequiredWithoutPrintJobsNestedInput
    printer?: PrinterUpdateOneWithoutPrintJobsNestedInput
  }

  export type PrintJobUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    printerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    spoolerJobId?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrintJobUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    printerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    spoolerJobId?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrinterUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    windowsPrinterName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supportsColor?: BoolFieldUpdateOperationsInput | boolean
    supportsDuplex?: BoolFieldUpdateOperationsInput | boolean
    supportedPaperSizes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentQueueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printJobs?: PrintJobUpdateManyWithoutPrinterNestedInput
    shop?: ShopUpdateOneRequiredWithoutPrintersNestedInput
  }

  export type PrinterUncheckedUpdateWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    windowsPrinterName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supportsColor?: BoolFieldUpdateOperationsInput | boolean
    supportsDuplex?: BoolFieldUpdateOperationsInput | boolean
    supportedPaperSizes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentQueueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printJobs?: PrintJobUncheckedUpdateManyWithoutPrinterNestedInput
  }

  export type PrinterUncheckedUpdateManyWithoutAgentInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    windowsPrinterName?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    manufacturer?: NullableStringFieldUpdateOperationsInput | string | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    connectionType?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    supportsColor?: BoolFieldUpdateOperationsInput | boolean
    supportsDuplex?: BoolFieldUpdateOperationsInput | boolean
    supportedPaperSizes?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentQueueCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrintJobCreateManyPrinterInput = {
    id?: string
    orderId: string
    documentId: string
    agentId?: string | null
    status?: string
    spoolerJobId?: number | null
    errorMessage?: string | null
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type PrintJobUpdateWithoutPrinterInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    spoolerJobId?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agent?: PrintAgentUpdateOneWithoutPrintJobsNestedInput
    document?: OrderDocumentUpdateOneRequiredWithoutPrintJobsNestedInput
    order?: OrderUpdateOneRequiredWithoutPrintJobsNestedInput
  }

  export type PrintJobUncheckedUpdateWithoutPrinterInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    spoolerJobId?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrintJobUncheckedUpdateManyWithoutPrinterInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    documentId?: StringFieldUpdateOperationsInput | string
    agentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    spoolerJobId?: NullableIntFieldUpdateOperationsInput | number | null
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyPlanInput = {
    id?: string
    shopId: string
    status?: string
    trialStartAt?: Date | string
    trialEndAt: Date | string
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    createdAt?: Date | string
  }

  export type SubscriptionUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trialStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trialEndAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trialStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trialEndAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    trialStartAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trialEndAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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