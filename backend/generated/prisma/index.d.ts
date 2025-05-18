
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
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Vehicle_details
 * 
 */
export type Vehicle_details = $Result.DefaultSelection<Prisma.$Vehicle_detailsPayload>
/**
 * Model ParkingSlot
 * 
 */
export type ParkingSlot = $Result.DefaultSelection<Prisma.$ParkingSlotPayload>
/**
 * Model ParkingSession
 * 
 */
export type ParkingSession = $Result.DefaultSelection<Prisma.$ParkingSessionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SlotStatus: {
  INUSE: 'INUSE',
  FREE: 'FREE'
};

export type SlotStatus = (typeof SlotStatus)[keyof typeof SlotStatus]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const VehiclesessionStatus: {
  PARKING: 'PARKING',
  OUT: 'OUT'
};

export type VehiclesessionStatus = (typeof VehiclesessionStatus)[keyof typeof VehiclesessionStatus]

}

export type SlotStatus = $Enums.SlotStatus

export const SlotStatus: typeof $Enums.SlotStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type VehiclesessionStatus = $Enums.VehiclesessionStatus

export const VehiclesessionStatus: typeof $Enums.VehiclesessionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clients
 * const clients = await prisma.client.findMany()
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
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle_details`: Exposes CRUD operations for the **Vehicle_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicle_details
    * const vehicle_details = await prisma.vehicle_details.findMany()
    * ```
    */
  get vehicle_details(): Prisma.Vehicle_detailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingSlot`: Exposes CRUD operations for the **ParkingSlot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingSlots
    * const parkingSlots = await prisma.parkingSlot.findMany()
    * ```
    */
  get parkingSlot(): Prisma.ParkingSlotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingSession`: Exposes CRUD operations for the **ParkingSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingSessions
    * const parkingSessions = await prisma.parkingSession.findMany()
    * ```
    */
  get parkingSession(): Prisma.ParkingSessionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Client: 'Client',
    Vehicle_details: 'Vehicle_details',
    ParkingSlot: 'ParkingSlot',
    ParkingSession: 'ParkingSession'
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
      modelProps: "client" | "vehicle_details" | "parkingSlot" | "parkingSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Vehicle_details: {
        payload: Prisma.$Vehicle_detailsPayload<ExtArgs>
        fields: Prisma.Vehicle_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Vehicle_detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Vehicle_detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_detailsPayload>
          }
          findFirst: {
            args: Prisma.Vehicle_detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Vehicle_detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_detailsPayload>
          }
          findMany: {
            args: Prisma.Vehicle_detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_detailsPayload>[]
          }
          create: {
            args: Prisma.Vehicle_detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_detailsPayload>
          }
          createMany: {
            args: Prisma.Vehicle_detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Vehicle_detailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_detailsPayload>[]
          }
          delete: {
            args: Prisma.Vehicle_detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_detailsPayload>
          }
          update: {
            args: Prisma.Vehicle_detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_detailsPayload>
          }
          deleteMany: {
            args: Prisma.Vehicle_detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Vehicle_detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Vehicle_detailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_detailsPayload>[]
          }
          upsert: {
            args: Prisma.Vehicle_detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Vehicle_detailsPayload>
          }
          aggregate: {
            args: Prisma.Vehicle_detailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle_details>
          }
          groupBy: {
            args: Prisma.Vehicle_detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Vehicle_detailsCountArgs<ExtArgs>
            result: $Utils.Optional<Vehicle_detailsCountAggregateOutputType> | number
          }
        }
      }
      ParkingSlot: {
        payload: Prisma.$ParkingSlotPayload<ExtArgs>
        fields: Prisma.ParkingSlotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingSlotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingSlotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          findFirst: {
            args: Prisma.ParkingSlotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingSlotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          findMany: {
            args: Prisma.ParkingSlotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>[]
          }
          create: {
            args: Prisma.ParkingSlotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          createMany: {
            args: Prisma.ParkingSlotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingSlotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>[]
          }
          delete: {
            args: Prisma.ParkingSlotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          update: {
            args: Prisma.ParkingSlotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          deleteMany: {
            args: Prisma.ParkingSlotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingSlotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingSlotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>[]
          }
          upsert: {
            args: Prisma.ParkingSlotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSlotPayload>
          }
          aggregate: {
            args: Prisma.ParkingSlotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingSlot>
          }
          groupBy: {
            args: Prisma.ParkingSlotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingSlotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingSlotCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingSlotCountAggregateOutputType> | number
          }
        }
      }
      ParkingSession: {
        payload: Prisma.$ParkingSessionPayload<ExtArgs>
        fields: Prisma.ParkingSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload>
          }
          findFirst: {
            args: Prisma.ParkingSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload>
          }
          findMany: {
            args: Prisma.ParkingSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload>[]
          }
          create: {
            args: Prisma.ParkingSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload>
          }
          createMany: {
            args: Prisma.ParkingSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload>[]
          }
          delete: {
            args: Prisma.ParkingSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload>
          }
          update: {
            args: Prisma.ParkingSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload>
          }
          deleteMany: {
            args: Prisma.ParkingSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload>[]
          }
          upsert: {
            args: Prisma.ParkingSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSessionPayload>
          }
          aggregate: {
            args: Prisma.ParkingSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingSession>
          }
          groupBy: {
            args: Prisma.ParkingSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingSessionCountAggregateOutputType> | number
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
    client?: ClientOmit
    vehicle_details?: Vehicle_detailsOmit
    parkingSlot?: ParkingSlotOmit
    parkingSession?: ParkingSessionOmit
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
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    vehicle_details: number
    ParkingSession: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle_details?: boolean | ClientCountOutputTypeCountVehicle_detailsArgs
    ParkingSession?: boolean | ClientCountOutputTypeCountParkingSessionArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountVehicle_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vehicle_detailsWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountParkingSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSessionWhereInput
  }


  /**
   * Count Type Vehicle_detailsCountOutputType
   */

  export type Vehicle_detailsCountOutputType = {
    ParkingSession: number
  }

  export type Vehicle_detailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ParkingSession?: boolean | Vehicle_detailsCountOutputTypeCountParkingSessionArgs
  }

  // Custom InputTypes
  /**
   * Vehicle_detailsCountOutputType without action
   */
  export type Vehicle_detailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_detailsCountOutputType
     */
    select?: Vehicle_detailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Vehicle_detailsCountOutputType without action
   */
  export type Vehicle_detailsCountOutputTypeCountParkingSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSessionWhereInput
  }


  /**
   * Count Type ParkingSlotCountOutputType
   */

  export type ParkingSlotCountOutputType = {
    parkingSessions: number
  }

  export type ParkingSlotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingSessions?: boolean | ParkingSlotCountOutputTypeCountParkingSessionsArgs
  }

  // Custom InputTypes
  /**
   * ParkingSlotCountOutputType without action
   */
  export type ParkingSlotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlotCountOutputType
     */
    select?: ParkingSlotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingSlotCountOutputType without action
   */
  export type ParkingSlotCountOutputTypeCountParkingSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    role: $Enums.Role
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    vehicle_details?: boolean | Client$vehicle_detailsArgs<ExtArgs>
    ParkingSession?: boolean | Client$ParkingSessionArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "role", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle_details?: boolean | Client$vehicle_detailsArgs<ExtArgs>
    ParkingSession?: boolean | Client$ParkingSessionArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      vehicle_details: Prisma.$Vehicle_detailsPayload<ExtArgs>[]
      ParkingSession: Prisma.$ParkingSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      role: $Enums.Role
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle_details<T extends Client$vehicle_detailsArgs<ExtArgs> = {}>(args?: Subset<T, Client$vehicle_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ParkingSession<T extends Client$ParkingSessionArgs<ExtArgs> = {}>(args?: Subset<T, Client$ParkingSessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly username: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly password: FieldRef<"Client", 'String'>
    readonly role: FieldRef<"Client", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.vehicle_details
   */
  export type Client$vehicle_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_details
     */
    select?: Vehicle_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_details
     */
    omit?: Vehicle_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_detailsInclude<ExtArgs> | null
    where?: Vehicle_detailsWhereInput
    orderBy?: Vehicle_detailsOrderByWithRelationInput | Vehicle_detailsOrderByWithRelationInput[]
    cursor?: Vehicle_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Vehicle_detailsScalarFieldEnum | Vehicle_detailsScalarFieldEnum[]
  }

  /**
   * Client.ParkingSession
   */
  export type Client$ParkingSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    where?: ParkingSessionWhereInput
    orderBy?: ParkingSessionOrderByWithRelationInput | ParkingSessionOrderByWithRelationInput[]
    cursor?: ParkingSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingSessionScalarFieldEnum | ParkingSessionScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle_details
   */

  export type AggregateVehicle_details = {
    _count: Vehicle_detailsCountAggregateOutputType | null
    _avg: Vehicle_detailsAvgAggregateOutputType | null
    _sum: Vehicle_detailsSumAggregateOutputType | null
    _min: Vehicle_detailsMinAggregateOutputType | null
    _max: Vehicle_detailsMaxAggregateOutputType | null
  }

  export type Vehicle_detailsAvgAggregateOutputType = {
    id: number | null
    client_Id: number | null
  }

  export type Vehicle_detailsSumAggregateOutputType = {
    id: number | null
    client_Id: number | null
  }

  export type Vehicle_detailsMinAggregateOutputType = {
    id: number | null
    client_Id: number | null
    vehicle_plate: string | null
    vehicle_type: string | null
  }

  export type Vehicle_detailsMaxAggregateOutputType = {
    id: number | null
    client_Id: number | null
    vehicle_plate: string | null
    vehicle_type: string | null
  }

  export type Vehicle_detailsCountAggregateOutputType = {
    id: number
    client_Id: number
    vehicle_plate: number
    vehicle_type: number
    _all: number
  }


  export type Vehicle_detailsAvgAggregateInputType = {
    id?: true
    client_Id?: true
  }

  export type Vehicle_detailsSumAggregateInputType = {
    id?: true
    client_Id?: true
  }

  export type Vehicle_detailsMinAggregateInputType = {
    id?: true
    client_Id?: true
    vehicle_plate?: true
    vehicle_type?: true
  }

  export type Vehicle_detailsMaxAggregateInputType = {
    id?: true
    client_Id?: true
    vehicle_plate?: true
    vehicle_type?: true
  }

  export type Vehicle_detailsCountAggregateInputType = {
    id?: true
    client_Id?: true
    vehicle_plate?: true
    vehicle_type?: true
    _all?: true
  }

  export type Vehicle_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle_details to aggregate.
     */
    where?: Vehicle_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_details to fetch.
     */
    orderBy?: Vehicle_detailsOrderByWithRelationInput | Vehicle_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Vehicle_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicle_details
    **/
    _count?: true | Vehicle_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vehicle_detailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vehicle_detailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vehicle_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vehicle_detailsMaxAggregateInputType
  }

  export type GetVehicle_detailsAggregateType<T extends Vehicle_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle_details[P]>
      : GetScalarType<T[P], AggregateVehicle_details[P]>
  }




  export type Vehicle_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Vehicle_detailsWhereInput
    orderBy?: Vehicle_detailsOrderByWithAggregationInput | Vehicle_detailsOrderByWithAggregationInput[]
    by: Vehicle_detailsScalarFieldEnum[] | Vehicle_detailsScalarFieldEnum
    having?: Vehicle_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vehicle_detailsCountAggregateInputType | true
    _avg?: Vehicle_detailsAvgAggregateInputType
    _sum?: Vehicle_detailsSumAggregateInputType
    _min?: Vehicle_detailsMinAggregateInputType
    _max?: Vehicle_detailsMaxAggregateInputType
  }

  export type Vehicle_detailsGroupByOutputType = {
    id: number
    client_Id: number
    vehicle_plate: string
    vehicle_type: string
    _count: Vehicle_detailsCountAggregateOutputType | null
    _avg: Vehicle_detailsAvgAggregateOutputType | null
    _sum: Vehicle_detailsSumAggregateOutputType | null
    _min: Vehicle_detailsMinAggregateOutputType | null
    _max: Vehicle_detailsMaxAggregateOutputType | null
  }

  type GetVehicle_detailsGroupByPayload<T extends Vehicle_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vehicle_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vehicle_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vehicle_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Vehicle_detailsGroupByOutputType[P]>
        }
      >
    >


  export type Vehicle_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_Id?: boolean
    vehicle_plate?: boolean
    vehicle_type?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    ParkingSession?: boolean | Vehicle_details$ParkingSessionArgs<ExtArgs>
    _count?: boolean | Vehicle_detailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle_details"]>

  export type Vehicle_detailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_Id?: boolean
    vehicle_plate?: boolean
    vehicle_type?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle_details"]>

  export type Vehicle_detailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_Id?: boolean
    vehicle_plate?: boolean
    vehicle_type?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle_details"]>

  export type Vehicle_detailsSelectScalar = {
    id?: boolean
    client_Id?: boolean
    vehicle_plate?: boolean
    vehicle_type?: boolean
  }

  export type Vehicle_detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "client_Id" | "vehicle_plate" | "vehicle_type", ExtArgs["result"]["vehicle_details"]>
  export type Vehicle_detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    ParkingSession?: boolean | Vehicle_details$ParkingSessionArgs<ExtArgs>
    _count?: boolean | Vehicle_detailsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Vehicle_detailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type Vehicle_detailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $Vehicle_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle_details"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      ParkingSession: Prisma.$ParkingSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      client_Id: number
      vehicle_plate: string
      vehicle_type: string
    }, ExtArgs["result"]["vehicle_details"]>
    composites: {}
  }

  type Vehicle_detailsGetPayload<S extends boolean | null | undefined | Vehicle_detailsDefaultArgs> = $Result.GetResult<Prisma.$Vehicle_detailsPayload, S>

  type Vehicle_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Vehicle_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vehicle_detailsCountAggregateInputType | true
    }

  export interface Vehicle_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle_details'], meta: { name: 'Vehicle_details' } }
    /**
     * Find zero or one Vehicle_details that matches the filter.
     * @param {Vehicle_detailsFindUniqueArgs} args - Arguments to find a Vehicle_details
     * @example
     * // Get one Vehicle_details
     * const vehicle_details = await prisma.vehicle_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Vehicle_detailsFindUniqueArgs>(args: SelectSubset<T, Vehicle_detailsFindUniqueArgs<ExtArgs>>): Prisma__Vehicle_detailsClient<$Result.GetResult<Prisma.$Vehicle_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Vehicle_detailsFindUniqueOrThrowArgs} args - Arguments to find a Vehicle_details
     * @example
     * // Get one Vehicle_details
     * const vehicle_details = await prisma.vehicle_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Vehicle_detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, Vehicle_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Vehicle_detailsClient<$Result.GetResult<Prisma.$Vehicle_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_detailsFindFirstArgs} args - Arguments to find a Vehicle_details
     * @example
     * // Get one Vehicle_details
     * const vehicle_details = await prisma.vehicle_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Vehicle_detailsFindFirstArgs>(args?: SelectSubset<T, Vehicle_detailsFindFirstArgs<ExtArgs>>): Prisma__Vehicle_detailsClient<$Result.GetResult<Prisma.$Vehicle_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_detailsFindFirstOrThrowArgs} args - Arguments to find a Vehicle_details
     * @example
     * // Get one Vehicle_details
     * const vehicle_details = await prisma.vehicle_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Vehicle_detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, Vehicle_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Vehicle_detailsClient<$Result.GetResult<Prisma.$Vehicle_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicle_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicle_details
     * const vehicle_details = await prisma.vehicle_details.findMany()
     * 
     * // Get first 10 Vehicle_details
     * const vehicle_details = await prisma.vehicle_details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicle_detailsWithIdOnly = await prisma.vehicle_details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Vehicle_detailsFindManyArgs>(args?: SelectSubset<T, Vehicle_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle_details.
     * @param {Vehicle_detailsCreateArgs} args - Arguments to create a Vehicle_details.
     * @example
     * // Create one Vehicle_details
     * const Vehicle_details = await prisma.vehicle_details.create({
     *   data: {
     *     // ... data to create a Vehicle_details
     *   }
     * })
     * 
     */
    create<T extends Vehicle_detailsCreateArgs>(args: SelectSubset<T, Vehicle_detailsCreateArgs<ExtArgs>>): Prisma__Vehicle_detailsClient<$Result.GetResult<Prisma.$Vehicle_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicle_details.
     * @param {Vehicle_detailsCreateManyArgs} args - Arguments to create many Vehicle_details.
     * @example
     * // Create many Vehicle_details
     * const vehicle_details = await prisma.vehicle_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Vehicle_detailsCreateManyArgs>(args?: SelectSubset<T, Vehicle_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicle_details and returns the data saved in the database.
     * @param {Vehicle_detailsCreateManyAndReturnArgs} args - Arguments to create many Vehicle_details.
     * @example
     * // Create many Vehicle_details
     * const vehicle_details = await prisma.vehicle_details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicle_details and only return the `id`
     * const vehicle_detailsWithIdOnly = await prisma.vehicle_details.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Vehicle_detailsCreateManyAndReturnArgs>(args?: SelectSubset<T, Vehicle_detailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_detailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle_details.
     * @param {Vehicle_detailsDeleteArgs} args - Arguments to delete one Vehicle_details.
     * @example
     * // Delete one Vehicle_details
     * const Vehicle_details = await prisma.vehicle_details.delete({
     *   where: {
     *     // ... filter to delete one Vehicle_details
     *   }
     * })
     * 
     */
    delete<T extends Vehicle_detailsDeleteArgs>(args: SelectSubset<T, Vehicle_detailsDeleteArgs<ExtArgs>>): Prisma__Vehicle_detailsClient<$Result.GetResult<Prisma.$Vehicle_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle_details.
     * @param {Vehicle_detailsUpdateArgs} args - Arguments to update one Vehicle_details.
     * @example
     * // Update one Vehicle_details
     * const vehicle_details = await prisma.vehicle_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Vehicle_detailsUpdateArgs>(args: SelectSubset<T, Vehicle_detailsUpdateArgs<ExtArgs>>): Prisma__Vehicle_detailsClient<$Result.GetResult<Prisma.$Vehicle_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicle_details.
     * @param {Vehicle_detailsDeleteManyArgs} args - Arguments to filter Vehicle_details to delete.
     * @example
     * // Delete a few Vehicle_details
     * const { count } = await prisma.vehicle_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Vehicle_detailsDeleteManyArgs>(args?: SelectSubset<T, Vehicle_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicle_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicle_details
     * const vehicle_details = await prisma.vehicle_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Vehicle_detailsUpdateManyArgs>(args: SelectSubset<T, Vehicle_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicle_details and returns the data updated in the database.
     * @param {Vehicle_detailsUpdateManyAndReturnArgs} args - Arguments to update many Vehicle_details.
     * @example
     * // Update many Vehicle_details
     * const vehicle_details = await prisma.vehicle_details.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicle_details and only return the `id`
     * const vehicle_detailsWithIdOnly = await prisma.vehicle_details.updateManyAndReturn({
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
    updateManyAndReturn<T extends Vehicle_detailsUpdateManyAndReturnArgs>(args: SelectSubset<T, Vehicle_detailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Vehicle_detailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle_details.
     * @param {Vehicle_detailsUpsertArgs} args - Arguments to update or create a Vehicle_details.
     * @example
     * // Update or create a Vehicle_details
     * const vehicle_details = await prisma.vehicle_details.upsert({
     *   create: {
     *     // ... data to create a Vehicle_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle_details we want to update
     *   }
     * })
     */
    upsert<T extends Vehicle_detailsUpsertArgs>(args: SelectSubset<T, Vehicle_detailsUpsertArgs<ExtArgs>>): Prisma__Vehicle_detailsClient<$Result.GetResult<Prisma.$Vehicle_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicle_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_detailsCountArgs} args - Arguments to filter Vehicle_details to count.
     * @example
     * // Count the number of Vehicle_details
     * const count = await prisma.vehicle_details.count({
     *   where: {
     *     // ... the filter for the Vehicle_details we want to count
     *   }
     * })
    **/
    count<T extends Vehicle_detailsCountArgs>(
      args?: Subset<T, Vehicle_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vehicle_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Vehicle_detailsAggregateArgs>(args: Subset<T, Vehicle_detailsAggregateArgs>): Prisma.PrismaPromise<GetVehicle_detailsAggregateType<T>>

    /**
     * Group by Vehicle_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vehicle_detailsGroupByArgs} args - Group by arguments.
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
      T extends Vehicle_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Vehicle_detailsGroupByArgs['orderBy'] }
        : { orderBy?: Vehicle_detailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Vehicle_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicle_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle_details model
   */
  readonly fields: Vehicle_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Vehicle_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ParkingSession<T extends Vehicle_details$ParkingSessionArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle_details$ParkingSessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vehicle_details model
   */
  interface Vehicle_detailsFieldRefs {
    readonly id: FieldRef<"Vehicle_details", 'Int'>
    readonly client_Id: FieldRef<"Vehicle_details", 'Int'>
    readonly vehicle_plate: FieldRef<"Vehicle_details", 'String'>
    readonly vehicle_type: FieldRef<"Vehicle_details", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle_details findUnique
   */
  export type Vehicle_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_details
     */
    select?: Vehicle_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_details
     */
    omit?: Vehicle_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_detailsInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_details to fetch.
     */
    where: Vehicle_detailsWhereUniqueInput
  }

  /**
   * Vehicle_details findUniqueOrThrow
   */
  export type Vehicle_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_details
     */
    select?: Vehicle_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_details
     */
    omit?: Vehicle_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_detailsInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_details to fetch.
     */
    where: Vehicle_detailsWhereUniqueInput
  }

  /**
   * Vehicle_details findFirst
   */
  export type Vehicle_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_details
     */
    select?: Vehicle_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_details
     */
    omit?: Vehicle_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_detailsInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_details to fetch.
     */
    where?: Vehicle_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_details to fetch.
     */
    orderBy?: Vehicle_detailsOrderByWithRelationInput | Vehicle_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicle_details.
     */
    cursor?: Vehicle_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicle_details.
     */
    distinct?: Vehicle_detailsScalarFieldEnum | Vehicle_detailsScalarFieldEnum[]
  }

  /**
   * Vehicle_details findFirstOrThrow
   */
  export type Vehicle_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_details
     */
    select?: Vehicle_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_details
     */
    omit?: Vehicle_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_detailsInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_details to fetch.
     */
    where?: Vehicle_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_details to fetch.
     */
    orderBy?: Vehicle_detailsOrderByWithRelationInput | Vehicle_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicle_details.
     */
    cursor?: Vehicle_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicle_details.
     */
    distinct?: Vehicle_detailsScalarFieldEnum | Vehicle_detailsScalarFieldEnum[]
  }

  /**
   * Vehicle_details findMany
   */
  export type Vehicle_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_details
     */
    select?: Vehicle_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_details
     */
    omit?: Vehicle_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_detailsInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle_details to fetch.
     */
    where?: Vehicle_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicle_details to fetch.
     */
    orderBy?: Vehicle_detailsOrderByWithRelationInput | Vehicle_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicle_details.
     */
    cursor?: Vehicle_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicle_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicle_details.
     */
    skip?: number
    distinct?: Vehicle_detailsScalarFieldEnum | Vehicle_detailsScalarFieldEnum[]
  }

  /**
   * Vehicle_details create
   */
  export type Vehicle_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_details
     */
    select?: Vehicle_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_details
     */
    omit?: Vehicle_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_detailsInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle_details.
     */
    data: XOR<Vehicle_detailsCreateInput, Vehicle_detailsUncheckedCreateInput>
  }

  /**
   * Vehicle_details createMany
   */
  export type Vehicle_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicle_details.
     */
    data: Vehicle_detailsCreateManyInput | Vehicle_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle_details createManyAndReturn
   */
  export type Vehicle_detailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_details
     */
    select?: Vehicle_detailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_details
     */
    omit?: Vehicle_detailsOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicle_details.
     */
    data: Vehicle_detailsCreateManyInput | Vehicle_detailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_detailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle_details update
   */
  export type Vehicle_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_details
     */
    select?: Vehicle_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_details
     */
    omit?: Vehicle_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_detailsInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle_details.
     */
    data: XOR<Vehicle_detailsUpdateInput, Vehicle_detailsUncheckedUpdateInput>
    /**
     * Choose, which Vehicle_details to update.
     */
    where: Vehicle_detailsWhereUniqueInput
  }

  /**
   * Vehicle_details updateMany
   */
  export type Vehicle_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicle_details.
     */
    data: XOR<Vehicle_detailsUpdateManyMutationInput, Vehicle_detailsUncheckedUpdateManyInput>
    /**
     * Filter which Vehicle_details to update
     */
    where?: Vehicle_detailsWhereInput
    /**
     * Limit how many Vehicle_details to update.
     */
    limit?: number
  }

  /**
   * Vehicle_details updateManyAndReturn
   */
  export type Vehicle_detailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_details
     */
    select?: Vehicle_detailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_details
     */
    omit?: Vehicle_detailsOmit<ExtArgs> | null
    /**
     * The data used to update Vehicle_details.
     */
    data: XOR<Vehicle_detailsUpdateManyMutationInput, Vehicle_detailsUncheckedUpdateManyInput>
    /**
     * Filter which Vehicle_details to update
     */
    where?: Vehicle_detailsWhereInput
    /**
     * Limit how many Vehicle_details to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_detailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle_details upsert
   */
  export type Vehicle_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_details
     */
    select?: Vehicle_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_details
     */
    omit?: Vehicle_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_detailsInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle_details to update in case it exists.
     */
    where: Vehicle_detailsWhereUniqueInput
    /**
     * In case the Vehicle_details found by the `where` argument doesn't exist, create a new Vehicle_details with this data.
     */
    create: XOR<Vehicle_detailsCreateInput, Vehicle_detailsUncheckedCreateInput>
    /**
     * In case the Vehicle_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Vehicle_detailsUpdateInput, Vehicle_detailsUncheckedUpdateInput>
  }

  /**
   * Vehicle_details delete
   */
  export type Vehicle_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_details
     */
    select?: Vehicle_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_details
     */
    omit?: Vehicle_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_detailsInclude<ExtArgs> | null
    /**
     * Filter which Vehicle_details to delete.
     */
    where: Vehicle_detailsWhereUniqueInput
  }

  /**
   * Vehicle_details deleteMany
   */
  export type Vehicle_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle_details to delete
     */
    where?: Vehicle_detailsWhereInput
    /**
     * Limit how many Vehicle_details to delete.
     */
    limit?: number
  }

  /**
   * Vehicle_details.ParkingSession
   */
  export type Vehicle_details$ParkingSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    where?: ParkingSessionWhereInput
    orderBy?: ParkingSessionOrderByWithRelationInput | ParkingSessionOrderByWithRelationInput[]
    cursor?: ParkingSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingSessionScalarFieldEnum | ParkingSessionScalarFieldEnum[]
  }

  /**
   * Vehicle_details without action
   */
  export type Vehicle_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle_details
     */
    select?: Vehicle_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle_details
     */
    omit?: Vehicle_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Vehicle_detailsInclude<ExtArgs> | null
  }


  /**
   * Model ParkingSlot
   */

  export type AggregateParkingSlot = {
    _count: ParkingSlotCountAggregateOutputType | null
    _avg: ParkingSlotAvgAggregateOutputType | null
    _sum: ParkingSlotSumAggregateOutputType | null
    _min: ParkingSlotMinAggregateOutputType | null
    _max: ParkingSlotMaxAggregateOutputType | null
  }

  export type ParkingSlotAvgAggregateOutputType = {
    id: number | null
    slotNumber: number | null
  }

  export type ParkingSlotSumAggregateOutputType = {
    id: number | null
    slotNumber: number | null
  }

  export type ParkingSlotMinAggregateOutputType = {
    id: number | null
    slotNumber: number | null
    status: $Enums.SlotStatus | null
  }

  export type ParkingSlotMaxAggregateOutputType = {
    id: number | null
    slotNumber: number | null
    status: $Enums.SlotStatus | null
  }

  export type ParkingSlotCountAggregateOutputType = {
    id: number
    slotNumber: number
    status: number
    _all: number
  }


  export type ParkingSlotAvgAggregateInputType = {
    id?: true
    slotNumber?: true
  }

  export type ParkingSlotSumAggregateInputType = {
    id?: true
    slotNumber?: true
  }

  export type ParkingSlotMinAggregateInputType = {
    id?: true
    slotNumber?: true
    status?: true
  }

  export type ParkingSlotMaxAggregateInputType = {
    id?: true
    slotNumber?: true
    status?: true
  }

  export type ParkingSlotCountAggregateInputType = {
    id?: true
    slotNumber?: true
    status?: true
    _all?: true
  }

  export type ParkingSlotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSlot to aggregate.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingSlots
    **/
    _count?: true | ParkingSlotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingSlotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingSlotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingSlotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingSlotMaxAggregateInputType
  }

  export type GetParkingSlotAggregateType<T extends ParkingSlotAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingSlot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingSlot[P]>
      : GetScalarType<T[P], AggregateParkingSlot[P]>
  }




  export type ParkingSlotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSlotWhereInput
    orderBy?: ParkingSlotOrderByWithAggregationInput | ParkingSlotOrderByWithAggregationInput[]
    by: ParkingSlotScalarFieldEnum[] | ParkingSlotScalarFieldEnum
    having?: ParkingSlotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingSlotCountAggregateInputType | true
    _avg?: ParkingSlotAvgAggregateInputType
    _sum?: ParkingSlotSumAggregateInputType
    _min?: ParkingSlotMinAggregateInputType
    _max?: ParkingSlotMaxAggregateInputType
  }

  export type ParkingSlotGroupByOutputType = {
    id: number
    slotNumber: number
    status: $Enums.SlotStatus
    _count: ParkingSlotCountAggregateOutputType | null
    _avg: ParkingSlotAvgAggregateOutputType | null
    _sum: ParkingSlotSumAggregateOutputType | null
    _min: ParkingSlotMinAggregateOutputType | null
    _max: ParkingSlotMaxAggregateOutputType | null
  }

  type GetParkingSlotGroupByPayload<T extends ParkingSlotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingSlotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingSlotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingSlotGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingSlotGroupByOutputType[P]>
        }
      >
    >


  export type ParkingSlotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotNumber?: boolean
    status?: boolean
    parkingSessions?: boolean | ParkingSlot$parkingSessionsArgs<ExtArgs>
    _count?: boolean | ParkingSlotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSlot"]>

  export type ParkingSlotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotNumber?: boolean
    status?: boolean
  }, ExtArgs["result"]["parkingSlot"]>

  export type ParkingSlotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slotNumber?: boolean
    status?: boolean
  }, ExtArgs["result"]["parkingSlot"]>

  export type ParkingSlotSelectScalar = {
    id?: boolean
    slotNumber?: boolean
    status?: boolean
  }

  export type ParkingSlotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slotNumber" | "status", ExtArgs["result"]["parkingSlot"]>
  export type ParkingSlotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parkingSessions?: boolean | ParkingSlot$parkingSessionsArgs<ExtArgs>
    _count?: boolean | ParkingSlotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkingSlotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ParkingSlotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ParkingSlotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingSlot"
    objects: {
      parkingSessions: Prisma.$ParkingSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      slotNumber: number
      status: $Enums.SlotStatus
    }, ExtArgs["result"]["parkingSlot"]>
    composites: {}
  }

  type ParkingSlotGetPayload<S extends boolean | null | undefined | ParkingSlotDefaultArgs> = $Result.GetResult<Prisma.$ParkingSlotPayload, S>

  type ParkingSlotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingSlotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingSlotCountAggregateInputType | true
    }

  export interface ParkingSlotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingSlot'], meta: { name: 'ParkingSlot' } }
    /**
     * Find zero or one ParkingSlot that matches the filter.
     * @param {ParkingSlotFindUniqueArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingSlotFindUniqueArgs>(args: SelectSubset<T, ParkingSlotFindUniqueArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingSlot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingSlotFindUniqueOrThrowArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingSlotFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingSlotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSlot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotFindFirstArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingSlotFindFirstArgs>(args?: SelectSubset<T, ParkingSlotFindFirstArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSlot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotFindFirstOrThrowArgs} args - Arguments to find a ParkingSlot
     * @example
     * // Get one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingSlotFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingSlotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingSlots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingSlots
     * const parkingSlots = await prisma.parkingSlot.findMany()
     * 
     * // Get first 10 ParkingSlots
     * const parkingSlots = await prisma.parkingSlot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingSlotWithIdOnly = await prisma.parkingSlot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingSlotFindManyArgs>(args?: SelectSubset<T, ParkingSlotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingSlot.
     * @param {ParkingSlotCreateArgs} args - Arguments to create a ParkingSlot.
     * @example
     * // Create one ParkingSlot
     * const ParkingSlot = await prisma.parkingSlot.create({
     *   data: {
     *     // ... data to create a ParkingSlot
     *   }
     * })
     * 
     */
    create<T extends ParkingSlotCreateArgs>(args: SelectSubset<T, ParkingSlotCreateArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingSlots.
     * @param {ParkingSlotCreateManyArgs} args - Arguments to create many ParkingSlots.
     * @example
     * // Create many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingSlotCreateManyArgs>(args?: SelectSubset<T, ParkingSlotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingSlots and returns the data saved in the database.
     * @param {ParkingSlotCreateManyAndReturnArgs} args - Arguments to create many ParkingSlots.
     * @example
     * // Create many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingSlots and only return the `id`
     * const parkingSlotWithIdOnly = await prisma.parkingSlot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingSlotCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingSlotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingSlot.
     * @param {ParkingSlotDeleteArgs} args - Arguments to delete one ParkingSlot.
     * @example
     * // Delete one ParkingSlot
     * const ParkingSlot = await prisma.parkingSlot.delete({
     *   where: {
     *     // ... filter to delete one ParkingSlot
     *   }
     * })
     * 
     */
    delete<T extends ParkingSlotDeleteArgs>(args: SelectSubset<T, ParkingSlotDeleteArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingSlot.
     * @param {ParkingSlotUpdateArgs} args - Arguments to update one ParkingSlot.
     * @example
     * // Update one ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingSlotUpdateArgs>(args: SelectSubset<T, ParkingSlotUpdateArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingSlots.
     * @param {ParkingSlotDeleteManyArgs} args - Arguments to filter ParkingSlots to delete.
     * @example
     * // Delete a few ParkingSlots
     * const { count } = await prisma.parkingSlot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingSlotDeleteManyArgs>(args?: SelectSubset<T, ParkingSlotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingSlotUpdateManyArgs>(args: SelectSubset<T, ParkingSlotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSlots and returns the data updated in the database.
     * @param {ParkingSlotUpdateManyAndReturnArgs} args - Arguments to update many ParkingSlots.
     * @example
     * // Update many ParkingSlots
     * const parkingSlot = await prisma.parkingSlot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingSlots and only return the `id`
     * const parkingSlotWithIdOnly = await prisma.parkingSlot.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParkingSlotUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingSlotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingSlot.
     * @param {ParkingSlotUpsertArgs} args - Arguments to update or create a ParkingSlot.
     * @example
     * // Update or create a ParkingSlot
     * const parkingSlot = await prisma.parkingSlot.upsert({
     *   create: {
     *     // ... data to create a ParkingSlot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingSlot we want to update
     *   }
     * })
     */
    upsert<T extends ParkingSlotUpsertArgs>(args: SelectSubset<T, ParkingSlotUpsertArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingSlots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotCountArgs} args - Arguments to filter ParkingSlots to count.
     * @example
     * // Count the number of ParkingSlots
     * const count = await prisma.parkingSlot.count({
     *   where: {
     *     // ... the filter for the ParkingSlots we want to count
     *   }
     * })
    **/
    count<T extends ParkingSlotCountArgs>(
      args?: Subset<T, ParkingSlotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingSlotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParkingSlotAggregateArgs>(args: Subset<T, ParkingSlotAggregateArgs>): Prisma.PrismaPromise<GetParkingSlotAggregateType<T>>

    /**
     * Group by ParkingSlot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSlotGroupByArgs} args - Group by arguments.
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
      T extends ParkingSlotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingSlotGroupByArgs['orderBy'] }
        : { orderBy?: ParkingSlotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParkingSlotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingSlotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingSlot model
   */
  readonly fields: ParkingSlotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingSlot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingSlotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parkingSessions<T extends ParkingSlot$parkingSessionsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSlot$parkingSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ParkingSlot model
   */
  interface ParkingSlotFieldRefs {
    readonly id: FieldRef<"ParkingSlot", 'Int'>
    readonly slotNumber: FieldRef<"ParkingSlot", 'Int'>
    readonly status: FieldRef<"ParkingSlot", 'SlotStatus'>
  }
    

  // Custom InputTypes
  /**
   * ParkingSlot findUnique
   */
  export type ParkingSlotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot findUniqueOrThrow
   */
  export type ParkingSlotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot findFirst
   */
  export type ParkingSlotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSlots.
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSlots.
     */
    distinct?: ParkingSlotScalarFieldEnum | ParkingSlotScalarFieldEnum[]
  }

  /**
   * ParkingSlot findFirstOrThrow
   */
  export type ParkingSlotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlot to fetch.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSlots.
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSlots.
     */
    distinct?: ParkingSlotScalarFieldEnum | ParkingSlotScalarFieldEnum[]
  }

  /**
   * ParkingSlot findMany
   */
  export type ParkingSlotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSlots to fetch.
     */
    where?: ParkingSlotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSlots to fetch.
     */
    orderBy?: ParkingSlotOrderByWithRelationInput | ParkingSlotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingSlots.
     */
    cursor?: ParkingSlotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSlots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSlots.
     */
    skip?: number
    distinct?: ParkingSlotScalarFieldEnum | ParkingSlotScalarFieldEnum[]
  }

  /**
   * ParkingSlot create
   */
  export type ParkingSlotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingSlot.
     */
    data: XOR<ParkingSlotCreateInput, ParkingSlotUncheckedCreateInput>
  }

  /**
   * ParkingSlot createMany
   */
  export type ParkingSlotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingSlots.
     */
    data: ParkingSlotCreateManyInput | ParkingSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingSlot createManyAndReturn
   */
  export type ParkingSlotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingSlots.
     */
    data: ParkingSlotCreateManyInput | ParkingSlotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingSlot update
   */
  export type ParkingSlotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingSlot.
     */
    data: XOR<ParkingSlotUpdateInput, ParkingSlotUncheckedUpdateInput>
    /**
     * Choose, which ParkingSlot to update.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot updateMany
   */
  export type ParkingSlotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingSlots.
     */
    data: XOR<ParkingSlotUpdateManyMutationInput, ParkingSlotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSlots to update
     */
    where?: ParkingSlotWhereInput
    /**
     * Limit how many ParkingSlots to update.
     */
    limit?: number
  }

  /**
   * ParkingSlot updateManyAndReturn
   */
  export type ParkingSlotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * The data used to update ParkingSlots.
     */
    data: XOR<ParkingSlotUpdateManyMutationInput, ParkingSlotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSlots to update
     */
    where?: ParkingSlotWhereInput
    /**
     * Limit how many ParkingSlots to update.
     */
    limit?: number
  }

  /**
   * ParkingSlot upsert
   */
  export type ParkingSlotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingSlot to update in case it exists.
     */
    where: ParkingSlotWhereUniqueInput
    /**
     * In case the ParkingSlot found by the `where` argument doesn't exist, create a new ParkingSlot with this data.
     */
    create: XOR<ParkingSlotCreateInput, ParkingSlotUncheckedCreateInput>
    /**
     * In case the ParkingSlot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingSlotUpdateInput, ParkingSlotUncheckedUpdateInput>
  }

  /**
   * ParkingSlot delete
   */
  export type ParkingSlotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
    /**
     * Filter which ParkingSlot to delete.
     */
    where: ParkingSlotWhereUniqueInput
  }

  /**
   * ParkingSlot deleteMany
   */
  export type ParkingSlotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSlots to delete
     */
    where?: ParkingSlotWhereInput
    /**
     * Limit how many ParkingSlots to delete.
     */
    limit?: number
  }

  /**
   * ParkingSlot.parkingSessions
   */
  export type ParkingSlot$parkingSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    where?: ParkingSessionWhereInput
    orderBy?: ParkingSessionOrderByWithRelationInput | ParkingSessionOrderByWithRelationInput[]
    cursor?: ParkingSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingSessionScalarFieldEnum | ParkingSessionScalarFieldEnum[]
  }

  /**
   * ParkingSlot without action
   */
  export type ParkingSlotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSlot
     */
    select?: ParkingSlotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSlot
     */
    omit?: ParkingSlotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSlotInclude<ExtArgs> | null
  }


  /**
   * Model ParkingSession
   */

  export type AggregateParkingSession = {
    _count: ParkingSessionCountAggregateOutputType | null
    _avg: ParkingSessionAvgAggregateOutputType | null
    _sum: ParkingSessionSumAggregateOutputType | null
    _min: ParkingSessionMinAggregateOutputType | null
    _max: ParkingSessionMaxAggregateOutputType | null
  }

  export type ParkingSessionAvgAggregateOutputType = {
    id: number | null
    parking_slot_id: number | null
  }

  export type ParkingSessionSumAggregateOutputType = {
    id: number | null
    parking_slot_id: number | null
  }

  export type ParkingSessionMinAggregateOutputType = {
    id: number | null
    vehicle_number_plate: string | null
    parking_slot_id: number | null
    owner_email: string | null
    ower_name: string | null
    entry_time: Date | null
    exit_time: Date | null
    status: $Enums.VehiclesessionStatus | null
  }

  export type ParkingSessionMaxAggregateOutputType = {
    id: number | null
    vehicle_number_plate: string | null
    parking_slot_id: number | null
    owner_email: string | null
    ower_name: string | null
    entry_time: Date | null
    exit_time: Date | null
    status: $Enums.VehiclesessionStatus | null
  }

  export type ParkingSessionCountAggregateOutputType = {
    id: number
    vehicle_number_plate: number
    parking_slot_id: number
    owner_email: number
    ower_name: number
    entry_time: number
    exit_time: number
    status: number
    _all: number
  }


  export type ParkingSessionAvgAggregateInputType = {
    id?: true
    parking_slot_id?: true
  }

  export type ParkingSessionSumAggregateInputType = {
    id?: true
    parking_slot_id?: true
  }

  export type ParkingSessionMinAggregateInputType = {
    id?: true
    vehicle_number_plate?: true
    parking_slot_id?: true
    owner_email?: true
    ower_name?: true
    entry_time?: true
    exit_time?: true
    status?: true
  }

  export type ParkingSessionMaxAggregateInputType = {
    id?: true
    vehicle_number_plate?: true
    parking_slot_id?: true
    owner_email?: true
    ower_name?: true
    entry_time?: true
    exit_time?: true
    status?: true
  }

  export type ParkingSessionCountAggregateInputType = {
    id?: true
    vehicle_number_plate?: true
    parking_slot_id?: true
    owner_email?: true
    ower_name?: true
    entry_time?: true
    exit_time?: true
    status?: true
    _all?: true
  }

  export type ParkingSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSession to aggregate.
     */
    where?: ParkingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSessions to fetch.
     */
    orderBy?: ParkingSessionOrderByWithRelationInput | ParkingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingSessions
    **/
    _count?: true | ParkingSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingSessionMaxAggregateInputType
  }

  export type GetParkingSessionAggregateType<T extends ParkingSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingSession[P]>
      : GetScalarType<T[P], AggregateParkingSession[P]>
  }




  export type ParkingSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSessionWhereInput
    orderBy?: ParkingSessionOrderByWithAggregationInput | ParkingSessionOrderByWithAggregationInput[]
    by: ParkingSessionScalarFieldEnum[] | ParkingSessionScalarFieldEnum
    having?: ParkingSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingSessionCountAggregateInputType | true
    _avg?: ParkingSessionAvgAggregateInputType
    _sum?: ParkingSessionSumAggregateInputType
    _min?: ParkingSessionMinAggregateInputType
    _max?: ParkingSessionMaxAggregateInputType
  }

  export type ParkingSessionGroupByOutputType = {
    id: number
    vehicle_number_plate: string
    parking_slot_id: number
    owner_email: string
    ower_name: string
    entry_time: Date
    exit_time: Date
    status: $Enums.VehiclesessionStatus
    _count: ParkingSessionCountAggregateOutputType | null
    _avg: ParkingSessionAvgAggregateOutputType | null
    _sum: ParkingSessionSumAggregateOutputType | null
    _min: ParkingSessionMinAggregateOutputType | null
    _max: ParkingSessionMaxAggregateOutputType | null
  }

  type GetParkingSessionGroupByPayload<T extends ParkingSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingSessionGroupByOutputType[P]>
        }
      >
    >


  export type ParkingSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicle_number_plate?: boolean
    parking_slot_id?: boolean
    owner_email?: boolean
    ower_name?: boolean
    entry_time?: boolean
    exit_time?: boolean
    status?: boolean
    vehichle?: boolean | Vehicle_detailsDefaultArgs<ExtArgs>
    parking_slot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    owner?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSession"]>

  export type ParkingSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicle_number_plate?: boolean
    parking_slot_id?: boolean
    owner_email?: boolean
    ower_name?: boolean
    entry_time?: boolean
    exit_time?: boolean
    status?: boolean
    vehichle?: boolean | Vehicle_detailsDefaultArgs<ExtArgs>
    parking_slot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    owner?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSession"]>

  export type ParkingSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicle_number_plate?: boolean
    parking_slot_id?: boolean
    owner_email?: boolean
    ower_name?: boolean
    entry_time?: boolean
    exit_time?: boolean
    status?: boolean
    vehichle?: boolean | Vehicle_detailsDefaultArgs<ExtArgs>
    parking_slot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    owner?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSession"]>

  export type ParkingSessionSelectScalar = {
    id?: boolean
    vehicle_number_plate?: boolean
    parking_slot_id?: boolean
    owner_email?: boolean
    ower_name?: boolean
    entry_time?: boolean
    exit_time?: boolean
    status?: boolean
  }

  export type ParkingSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicle_number_plate" | "parking_slot_id" | "owner_email" | "ower_name" | "entry_time" | "exit_time" | "status", ExtArgs["result"]["parkingSession"]>
  export type ParkingSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehichle?: boolean | Vehicle_detailsDefaultArgs<ExtArgs>
    parking_slot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    owner?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type ParkingSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehichle?: boolean | Vehicle_detailsDefaultArgs<ExtArgs>
    parking_slot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    owner?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type ParkingSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehichle?: boolean | Vehicle_detailsDefaultArgs<ExtArgs>
    parking_slot?: boolean | ParkingSlotDefaultArgs<ExtArgs>
    owner?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $ParkingSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingSession"
    objects: {
      vehichle: Prisma.$Vehicle_detailsPayload<ExtArgs>
      parking_slot: Prisma.$ParkingSlotPayload<ExtArgs>
      owner: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vehicle_number_plate: string
      parking_slot_id: number
      owner_email: string
      ower_name: string
      entry_time: Date
      exit_time: Date
      status: $Enums.VehiclesessionStatus
    }, ExtArgs["result"]["parkingSession"]>
    composites: {}
  }

  type ParkingSessionGetPayload<S extends boolean | null | undefined | ParkingSessionDefaultArgs> = $Result.GetResult<Prisma.$ParkingSessionPayload, S>

  type ParkingSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingSessionCountAggregateInputType | true
    }

  export interface ParkingSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingSession'], meta: { name: 'ParkingSession' } }
    /**
     * Find zero or one ParkingSession that matches the filter.
     * @param {ParkingSessionFindUniqueArgs} args - Arguments to find a ParkingSession
     * @example
     * // Get one ParkingSession
     * const parkingSession = await prisma.parkingSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingSessionFindUniqueArgs>(args: SelectSubset<T, ParkingSessionFindUniqueArgs<ExtArgs>>): Prisma__ParkingSessionClient<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingSessionFindUniqueOrThrowArgs} args - Arguments to find a ParkingSession
     * @example
     * // Get one ParkingSession
     * const parkingSession = await prisma.parkingSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingSessionClient<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSessionFindFirstArgs} args - Arguments to find a ParkingSession
     * @example
     * // Get one ParkingSession
     * const parkingSession = await prisma.parkingSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingSessionFindFirstArgs>(args?: SelectSubset<T, ParkingSessionFindFirstArgs<ExtArgs>>): Prisma__ParkingSessionClient<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSessionFindFirstOrThrowArgs} args - Arguments to find a ParkingSession
     * @example
     * // Get one ParkingSession
     * const parkingSession = await prisma.parkingSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingSessionClient<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingSessions
     * const parkingSessions = await prisma.parkingSession.findMany()
     * 
     * // Get first 10 ParkingSessions
     * const parkingSessions = await prisma.parkingSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingSessionWithIdOnly = await prisma.parkingSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingSessionFindManyArgs>(args?: SelectSubset<T, ParkingSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingSession.
     * @param {ParkingSessionCreateArgs} args - Arguments to create a ParkingSession.
     * @example
     * // Create one ParkingSession
     * const ParkingSession = await prisma.parkingSession.create({
     *   data: {
     *     // ... data to create a ParkingSession
     *   }
     * })
     * 
     */
    create<T extends ParkingSessionCreateArgs>(args: SelectSubset<T, ParkingSessionCreateArgs<ExtArgs>>): Prisma__ParkingSessionClient<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingSessions.
     * @param {ParkingSessionCreateManyArgs} args - Arguments to create many ParkingSessions.
     * @example
     * // Create many ParkingSessions
     * const parkingSession = await prisma.parkingSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingSessionCreateManyArgs>(args?: SelectSubset<T, ParkingSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingSessions and returns the data saved in the database.
     * @param {ParkingSessionCreateManyAndReturnArgs} args - Arguments to create many ParkingSessions.
     * @example
     * // Create many ParkingSessions
     * const parkingSession = await prisma.parkingSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingSessions and only return the `id`
     * const parkingSessionWithIdOnly = await prisma.parkingSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingSession.
     * @param {ParkingSessionDeleteArgs} args - Arguments to delete one ParkingSession.
     * @example
     * // Delete one ParkingSession
     * const ParkingSession = await prisma.parkingSession.delete({
     *   where: {
     *     // ... filter to delete one ParkingSession
     *   }
     * })
     * 
     */
    delete<T extends ParkingSessionDeleteArgs>(args: SelectSubset<T, ParkingSessionDeleteArgs<ExtArgs>>): Prisma__ParkingSessionClient<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingSession.
     * @param {ParkingSessionUpdateArgs} args - Arguments to update one ParkingSession.
     * @example
     * // Update one ParkingSession
     * const parkingSession = await prisma.parkingSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingSessionUpdateArgs>(args: SelectSubset<T, ParkingSessionUpdateArgs<ExtArgs>>): Prisma__ParkingSessionClient<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingSessions.
     * @param {ParkingSessionDeleteManyArgs} args - Arguments to filter ParkingSessions to delete.
     * @example
     * // Delete a few ParkingSessions
     * const { count } = await prisma.parkingSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingSessionDeleteManyArgs>(args?: SelectSubset<T, ParkingSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingSessions
     * const parkingSession = await prisma.parkingSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingSessionUpdateManyArgs>(args: SelectSubset<T, ParkingSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSessions and returns the data updated in the database.
     * @param {ParkingSessionUpdateManyAndReturnArgs} args - Arguments to update many ParkingSessions.
     * @example
     * // Update many ParkingSessions
     * const parkingSession = await prisma.parkingSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingSessions and only return the `id`
     * const parkingSessionWithIdOnly = await prisma.parkingSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParkingSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingSession.
     * @param {ParkingSessionUpsertArgs} args - Arguments to update or create a ParkingSession.
     * @example
     * // Update or create a ParkingSession
     * const parkingSession = await prisma.parkingSession.upsert({
     *   create: {
     *     // ... data to create a ParkingSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingSession we want to update
     *   }
     * })
     */
    upsert<T extends ParkingSessionUpsertArgs>(args: SelectSubset<T, ParkingSessionUpsertArgs<ExtArgs>>): Prisma__ParkingSessionClient<$Result.GetResult<Prisma.$ParkingSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSessionCountArgs} args - Arguments to filter ParkingSessions to count.
     * @example
     * // Count the number of ParkingSessions
     * const count = await prisma.parkingSession.count({
     *   where: {
     *     // ... the filter for the ParkingSessions we want to count
     *   }
     * })
    **/
    count<T extends ParkingSessionCountArgs>(
      args?: Subset<T, ParkingSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParkingSessionAggregateArgs>(args: Subset<T, ParkingSessionAggregateArgs>): Prisma.PrismaPromise<GetParkingSessionAggregateType<T>>

    /**
     * Group by ParkingSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSessionGroupByArgs} args - Group by arguments.
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
      T extends ParkingSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingSessionGroupByArgs['orderBy'] }
        : { orderBy?: ParkingSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParkingSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingSession model
   */
  readonly fields: ParkingSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehichle<T extends Vehicle_detailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle_detailsDefaultArgs<ExtArgs>>): Prisma__Vehicle_detailsClient<$Result.GetResult<Prisma.$Vehicle_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parking_slot<T extends ParkingSlotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSlotDefaultArgs<ExtArgs>>): Prisma__ParkingSlotClient<$Result.GetResult<Prisma.$ParkingSlotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owner<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ParkingSession model
   */
  interface ParkingSessionFieldRefs {
    readonly id: FieldRef<"ParkingSession", 'Int'>
    readonly vehicle_number_plate: FieldRef<"ParkingSession", 'String'>
    readonly parking_slot_id: FieldRef<"ParkingSession", 'Int'>
    readonly owner_email: FieldRef<"ParkingSession", 'String'>
    readonly ower_name: FieldRef<"ParkingSession", 'String'>
    readonly entry_time: FieldRef<"ParkingSession", 'DateTime'>
    readonly exit_time: FieldRef<"ParkingSession", 'DateTime'>
    readonly status: FieldRef<"ParkingSession", 'VehiclesessionStatus'>
  }
    

  // Custom InputTypes
  /**
   * ParkingSession findUnique
   */
  export type ParkingSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSession to fetch.
     */
    where: ParkingSessionWhereUniqueInput
  }

  /**
   * ParkingSession findUniqueOrThrow
   */
  export type ParkingSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSession to fetch.
     */
    where: ParkingSessionWhereUniqueInput
  }

  /**
   * ParkingSession findFirst
   */
  export type ParkingSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSession to fetch.
     */
    where?: ParkingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSessions to fetch.
     */
    orderBy?: ParkingSessionOrderByWithRelationInput | ParkingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSessions.
     */
    cursor?: ParkingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSessions.
     */
    distinct?: ParkingSessionScalarFieldEnum | ParkingSessionScalarFieldEnum[]
  }

  /**
   * ParkingSession findFirstOrThrow
   */
  export type ParkingSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSession to fetch.
     */
    where?: ParkingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSessions to fetch.
     */
    orderBy?: ParkingSessionOrderByWithRelationInput | ParkingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSessions.
     */
    cursor?: ParkingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSessions.
     */
    distinct?: ParkingSessionScalarFieldEnum | ParkingSessionScalarFieldEnum[]
  }

  /**
   * ParkingSession findMany
   */
  export type ParkingSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSessions to fetch.
     */
    where?: ParkingSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSessions to fetch.
     */
    orderBy?: ParkingSessionOrderByWithRelationInput | ParkingSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingSessions.
     */
    cursor?: ParkingSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSessions.
     */
    skip?: number
    distinct?: ParkingSessionScalarFieldEnum | ParkingSessionScalarFieldEnum[]
  }

  /**
   * ParkingSession create
   */
  export type ParkingSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingSession.
     */
    data: XOR<ParkingSessionCreateInput, ParkingSessionUncheckedCreateInput>
  }

  /**
   * ParkingSession createMany
   */
  export type ParkingSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingSessions.
     */
    data: ParkingSessionCreateManyInput | ParkingSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingSession createManyAndReturn
   */
  export type ParkingSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingSessions.
     */
    data: ParkingSessionCreateManyInput | ParkingSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSession update
   */
  export type ParkingSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingSession.
     */
    data: XOR<ParkingSessionUpdateInput, ParkingSessionUncheckedUpdateInput>
    /**
     * Choose, which ParkingSession to update.
     */
    where: ParkingSessionWhereUniqueInput
  }

  /**
   * ParkingSession updateMany
   */
  export type ParkingSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingSessions.
     */
    data: XOR<ParkingSessionUpdateManyMutationInput, ParkingSessionUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSessions to update
     */
    where?: ParkingSessionWhereInput
    /**
     * Limit how many ParkingSessions to update.
     */
    limit?: number
  }

  /**
   * ParkingSession updateManyAndReturn
   */
  export type ParkingSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * The data used to update ParkingSessions.
     */
    data: XOR<ParkingSessionUpdateManyMutationInput, ParkingSessionUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSessions to update
     */
    where?: ParkingSessionWhereInput
    /**
     * Limit how many ParkingSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSession upsert
   */
  export type ParkingSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingSession to update in case it exists.
     */
    where: ParkingSessionWhereUniqueInput
    /**
     * In case the ParkingSession found by the `where` argument doesn't exist, create a new ParkingSession with this data.
     */
    create: XOR<ParkingSessionCreateInput, ParkingSessionUncheckedCreateInput>
    /**
     * In case the ParkingSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingSessionUpdateInput, ParkingSessionUncheckedUpdateInput>
  }

  /**
   * ParkingSession delete
   */
  export type ParkingSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
    /**
     * Filter which ParkingSession to delete.
     */
    where: ParkingSessionWhereUniqueInput
  }

  /**
   * ParkingSession deleteMany
   */
  export type ParkingSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSessions to delete
     */
    where?: ParkingSessionWhereInput
    /**
     * Limit how many ParkingSessions to delete.
     */
    limit?: number
  }

  /**
   * ParkingSession without action
   */
  export type ParkingSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSession
     */
    select?: ParkingSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSession
     */
    omit?: ParkingSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSessionInclude<ExtArgs> | null
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


  export const ClientScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const Vehicle_detailsScalarFieldEnum: {
    id: 'id',
    client_Id: 'client_Id',
    vehicle_plate: 'vehicle_plate',
    vehicle_type: 'vehicle_type'
  };

  export type Vehicle_detailsScalarFieldEnum = (typeof Vehicle_detailsScalarFieldEnum)[keyof typeof Vehicle_detailsScalarFieldEnum]


  export const ParkingSlotScalarFieldEnum: {
    id: 'id',
    slotNumber: 'slotNumber',
    status: 'status'
  };

  export type ParkingSlotScalarFieldEnum = (typeof ParkingSlotScalarFieldEnum)[keyof typeof ParkingSlotScalarFieldEnum]


  export const ParkingSessionScalarFieldEnum: {
    id: 'id',
    vehicle_number_plate: 'vehicle_number_plate',
    parking_slot_id: 'parking_slot_id',
    owner_email: 'owner_email',
    ower_name: 'ower_name',
    entry_time: 'entry_time',
    exit_time: 'exit_time',
    status: 'status'
  };

  export type ParkingSessionScalarFieldEnum = (typeof ParkingSessionScalarFieldEnum)[keyof typeof ParkingSessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'SlotStatus'
   */
  export type EnumSlotStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlotStatus'>
    


  /**
   * Reference to a field of type 'SlotStatus[]'
   */
  export type ListEnumSlotStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SlotStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'VehiclesessionStatus'
   */
  export type EnumVehiclesessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehiclesessionStatus'>
    


  /**
   * Reference to a field of type 'VehiclesessionStatus[]'
   */
  export type ListEnumVehiclesessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehiclesessionStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    username?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    password?: StringFilter<"Client"> | string
    role?: EnumRoleFilter<"Client"> | $Enums.Role
    vehicle_details?: Vehicle_detailsListRelationFilter
    ParkingSession?: ParkingSessionListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    vehicle_details?: Vehicle_detailsOrderByRelationAggregateInput
    ParkingSession?: ParkingSessionOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    username?: StringFilter<"Client"> | string
    password?: StringFilter<"Client"> | string
    role?: EnumRoleFilter<"Client"> | $Enums.Role
    vehicle_details?: Vehicle_detailsListRelationFilter
    ParkingSession?: ParkingSessionListRelationFilter
  }, "id" | "email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    username?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    password?: StringWithAggregatesFilter<"Client"> | string
    role?: EnumRoleWithAggregatesFilter<"Client"> | $Enums.Role
  }

  export type Vehicle_detailsWhereInput = {
    AND?: Vehicle_detailsWhereInput | Vehicle_detailsWhereInput[]
    OR?: Vehicle_detailsWhereInput[]
    NOT?: Vehicle_detailsWhereInput | Vehicle_detailsWhereInput[]
    id?: IntFilter<"Vehicle_details"> | number
    client_Id?: IntFilter<"Vehicle_details"> | number
    vehicle_plate?: StringFilter<"Vehicle_details"> | string
    vehicle_type?: StringFilter<"Vehicle_details"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    ParkingSession?: ParkingSessionListRelationFilter
  }

  export type Vehicle_detailsOrderByWithRelationInput = {
    id?: SortOrder
    client_Id?: SortOrder
    vehicle_plate?: SortOrder
    vehicle_type?: SortOrder
    client?: ClientOrderByWithRelationInput
    ParkingSession?: ParkingSessionOrderByRelationAggregateInput
  }

  export type Vehicle_detailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    vehicle_plate?: string
    AND?: Vehicle_detailsWhereInput | Vehicle_detailsWhereInput[]
    OR?: Vehicle_detailsWhereInput[]
    NOT?: Vehicle_detailsWhereInput | Vehicle_detailsWhereInput[]
    client_Id?: IntFilter<"Vehicle_details"> | number
    vehicle_type?: StringFilter<"Vehicle_details"> | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    ParkingSession?: ParkingSessionListRelationFilter
  }, "id" | "vehicle_plate">

  export type Vehicle_detailsOrderByWithAggregationInput = {
    id?: SortOrder
    client_Id?: SortOrder
    vehicle_plate?: SortOrder
    vehicle_type?: SortOrder
    _count?: Vehicle_detailsCountOrderByAggregateInput
    _avg?: Vehicle_detailsAvgOrderByAggregateInput
    _max?: Vehicle_detailsMaxOrderByAggregateInput
    _min?: Vehicle_detailsMinOrderByAggregateInput
    _sum?: Vehicle_detailsSumOrderByAggregateInput
  }

  export type Vehicle_detailsScalarWhereWithAggregatesInput = {
    AND?: Vehicle_detailsScalarWhereWithAggregatesInput | Vehicle_detailsScalarWhereWithAggregatesInput[]
    OR?: Vehicle_detailsScalarWhereWithAggregatesInput[]
    NOT?: Vehicle_detailsScalarWhereWithAggregatesInput | Vehicle_detailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vehicle_details"> | number
    client_Id?: IntWithAggregatesFilter<"Vehicle_details"> | number
    vehicle_plate?: StringWithAggregatesFilter<"Vehicle_details"> | string
    vehicle_type?: StringWithAggregatesFilter<"Vehicle_details"> | string
  }

  export type ParkingSlotWhereInput = {
    AND?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    OR?: ParkingSlotWhereInput[]
    NOT?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    id?: IntFilter<"ParkingSlot"> | number
    slotNumber?: IntFilter<"ParkingSlot"> | number
    status?: EnumSlotStatusFilter<"ParkingSlot"> | $Enums.SlotStatus
    parkingSessions?: ParkingSessionListRelationFilter
  }

  export type ParkingSlotOrderByWithRelationInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    status?: SortOrder
    parkingSessions?: ParkingSessionOrderByRelationAggregateInput
  }

  export type ParkingSlotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    OR?: ParkingSlotWhereInput[]
    NOT?: ParkingSlotWhereInput | ParkingSlotWhereInput[]
    slotNumber?: IntFilter<"ParkingSlot"> | number
    status?: EnumSlotStatusFilter<"ParkingSlot"> | $Enums.SlotStatus
    parkingSessions?: ParkingSessionListRelationFilter
  }, "id">

  export type ParkingSlotOrderByWithAggregationInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    status?: SortOrder
    _count?: ParkingSlotCountOrderByAggregateInput
    _avg?: ParkingSlotAvgOrderByAggregateInput
    _max?: ParkingSlotMaxOrderByAggregateInput
    _min?: ParkingSlotMinOrderByAggregateInput
    _sum?: ParkingSlotSumOrderByAggregateInput
  }

  export type ParkingSlotScalarWhereWithAggregatesInput = {
    AND?: ParkingSlotScalarWhereWithAggregatesInput | ParkingSlotScalarWhereWithAggregatesInput[]
    OR?: ParkingSlotScalarWhereWithAggregatesInput[]
    NOT?: ParkingSlotScalarWhereWithAggregatesInput | ParkingSlotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParkingSlot"> | number
    slotNumber?: IntWithAggregatesFilter<"ParkingSlot"> | number
    status?: EnumSlotStatusWithAggregatesFilter<"ParkingSlot"> | $Enums.SlotStatus
  }

  export type ParkingSessionWhereInput = {
    AND?: ParkingSessionWhereInput | ParkingSessionWhereInput[]
    OR?: ParkingSessionWhereInput[]
    NOT?: ParkingSessionWhereInput | ParkingSessionWhereInput[]
    id?: IntFilter<"ParkingSession"> | number
    vehicle_number_plate?: StringFilter<"ParkingSession"> | string
    parking_slot_id?: IntFilter<"ParkingSession"> | number
    owner_email?: StringFilter<"ParkingSession"> | string
    ower_name?: StringFilter<"ParkingSession"> | string
    entry_time?: DateTimeFilter<"ParkingSession"> | Date | string
    exit_time?: DateTimeFilter<"ParkingSession"> | Date | string
    status?: EnumVehiclesessionStatusFilter<"ParkingSession"> | $Enums.VehiclesessionStatus
    vehichle?: XOR<Vehicle_detailsScalarRelationFilter, Vehicle_detailsWhereInput>
    parking_slot?: XOR<ParkingSlotScalarRelationFilter, ParkingSlotWhereInput>
    owner?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type ParkingSessionOrderByWithRelationInput = {
    id?: SortOrder
    vehicle_number_plate?: SortOrder
    parking_slot_id?: SortOrder
    owner_email?: SortOrder
    ower_name?: SortOrder
    entry_time?: SortOrder
    exit_time?: SortOrder
    status?: SortOrder
    vehichle?: Vehicle_detailsOrderByWithRelationInput
    parking_slot?: ParkingSlotOrderByWithRelationInput
    owner?: ClientOrderByWithRelationInput
  }

  export type ParkingSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParkingSessionWhereInput | ParkingSessionWhereInput[]
    OR?: ParkingSessionWhereInput[]
    NOT?: ParkingSessionWhereInput | ParkingSessionWhereInput[]
    vehicle_number_plate?: StringFilter<"ParkingSession"> | string
    parking_slot_id?: IntFilter<"ParkingSession"> | number
    owner_email?: StringFilter<"ParkingSession"> | string
    ower_name?: StringFilter<"ParkingSession"> | string
    entry_time?: DateTimeFilter<"ParkingSession"> | Date | string
    exit_time?: DateTimeFilter<"ParkingSession"> | Date | string
    status?: EnumVehiclesessionStatusFilter<"ParkingSession"> | $Enums.VehiclesessionStatus
    vehichle?: XOR<Vehicle_detailsScalarRelationFilter, Vehicle_detailsWhereInput>
    parking_slot?: XOR<ParkingSlotScalarRelationFilter, ParkingSlotWhereInput>
    owner?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type ParkingSessionOrderByWithAggregationInput = {
    id?: SortOrder
    vehicle_number_plate?: SortOrder
    parking_slot_id?: SortOrder
    owner_email?: SortOrder
    ower_name?: SortOrder
    entry_time?: SortOrder
    exit_time?: SortOrder
    status?: SortOrder
    _count?: ParkingSessionCountOrderByAggregateInput
    _avg?: ParkingSessionAvgOrderByAggregateInput
    _max?: ParkingSessionMaxOrderByAggregateInput
    _min?: ParkingSessionMinOrderByAggregateInput
    _sum?: ParkingSessionSumOrderByAggregateInput
  }

  export type ParkingSessionScalarWhereWithAggregatesInput = {
    AND?: ParkingSessionScalarWhereWithAggregatesInput | ParkingSessionScalarWhereWithAggregatesInput[]
    OR?: ParkingSessionScalarWhereWithAggregatesInput[]
    NOT?: ParkingSessionScalarWhereWithAggregatesInput | ParkingSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParkingSession"> | number
    vehicle_number_plate?: StringWithAggregatesFilter<"ParkingSession"> | string
    parking_slot_id?: IntWithAggregatesFilter<"ParkingSession"> | number
    owner_email?: StringWithAggregatesFilter<"ParkingSession"> | string
    ower_name?: StringWithAggregatesFilter<"ParkingSession"> | string
    entry_time?: DateTimeWithAggregatesFilter<"ParkingSession"> | Date | string
    exit_time?: DateTimeWithAggregatesFilter<"ParkingSession"> | Date | string
    status?: EnumVehiclesessionStatusWithAggregatesFilter<"ParkingSession"> | $Enums.VehiclesessionStatus
  }

  export type ClientCreateInput = {
    username: string
    email: string
    password: string
    role: $Enums.Role
    vehicle_details?: Vehicle_detailsCreateNestedManyWithoutClientInput
    ParkingSession?: ParkingSessionCreateNestedManyWithoutOwnerInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.Role
    vehicle_details?: Vehicle_detailsUncheckedCreateNestedManyWithoutClientInput
    ParkingSession?: ParkingSessionUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type ClientUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    vehicle_details?: Vehicle_detailsUpdateManyWithoutClientNestedInput
    ParkingSession?: ParkingSessionUpdateManyWithoutOwnerNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    vehicle_details?: Vehicle_detailsUncheckedUpdateManyWithoutClientNestedInput
    ParkingSession?: ParkingSessionUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type ClientCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.Role
  }

  export type ClientUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type Vehicle_detailsCreateInput = {
    vehicle_plate: string
    vehicle_type: string
    client: ClientCreateNestedOneWithoutVehicle_detailsInput
    ParkingSession?: ParkingSessionCreateNestedManyWithoutVehichleInput
  }

  export type Vehicle_detailsUncheckedCreateInput = {
    id?: number
    client_Id: number
    vehicle_plate: string
    vehicle_type: string
    ParkingSession?: ParkingSessionUncheckedCreateNestedManyWithoutVehichleInput
  }

  export type Vehicle_detailsUpdateInput = {
    vehicle_plate?: StringFieldUpdateOperationsInput | string
    vehicle_type?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutVehicle_detailsNestedInput
    ParkingSession?: ParkingSessionUpdateManyWithoutVehichleNestedInput
  }

  export type Vehicle_detailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_Id?: IntFieldUpdateOperationsInput | number
    vehicle_plate?: StringFieldUpdateOperationsInput | string
    vehicle_type?: StringFieldUpdateOperationsInput | string
    ParkingSession?: ParkingSessionUncheckedUpdateManyWithoutVehichleNestedInput
  }

  export type Vehicle_detailsCreateManyInput = {
    id?: number
    client_Id: number
    vehicle_plate: string
    vehicle_type: string
  }

  export type Vehicle_detailsUpdateManyMutationInput = {
    vehicle_plate?: StringFieldUpdateOperationsInput | string
    vehicle_type?: StringFieldUpdateOperationsInput | string
  }

  export type Vehicle_detailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_Id?: IntFieldUpdateOperationsInput | number
    vehicle_plate?: StringFieldUpdateOperationsInput | string
    vehicle_type?: StringFieldUpdateOperationsInput | string
  }

  export type ParkingSlotCreateInput = {
    slotNumber: number
    status: $Enums.SlotStatus
    parkingSessions?: ParkingSessionCreateNestedManyWithoutParking_slotInput
  }

  export type ParkingSlotUncheckedCreateInput = {
    id?: number
    slotNumber: number
    status: $Enums.SlotStatus
    parkingSessions?: ParkingSessionUncheckedCreateNestedManyWithoutParking_slotInput
  }

  export type ParkingSlotUpdateInput = {
    slotNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    parkingSessions?: ParkingSessionUpdateManyWithoutParking_slotNestedInput
  }

  export type ParkingSlotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slotNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
    parkingSessions?: ParkingSessionUncheckedUpdateManyWithoutParking_slotNestedInput
  }

  export type ParkingSlotCreateManyInput = {
    id?: number
    slotNumber: number
    status: $Enums.SlotStatus
  }

  export type ParkingSlotUpdateManyMutationInput = {
    slotNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
  }

  export type ParkingSlotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slotNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
  }

  export type ParkingSessionCreateInput = {
    ower_name: string
    entry_time: Date | string
    exit_time: Date | string
    status: $Enums.VehiclesessionStatus
    vehichle: Vehicle_detailsCreateNestedOneWithoutParkingSessionInput
    parking_slot: ParkingSlotCreateNestedOneWithoutParkingSessionsInput
    owner: ClientCreateNestedOneWithoutParkingSessionInput
  }

  export type ParkingSessionUncheckedCreateInput = {
    id?: number
    vehicle_number_plate: string
    parking_slot_id: number
    owner_email: string
    ower_name: string
    entry_time: Date | string
    exit_time: Date | string
    status: $Enums.VehiclesessionStatus
  }

  export type ParkingSessionUpdateInput = {
    ower_name?: StringFieldUpdateOperationsInput | string
    entry_time?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVehiclesessionStatusFieldUpdateOperationsInput | $Enums.VehiclesessionStatus
    vehichle?: Vehicle_detailsUpdateOneRequiredWithoutParkingSessionNestedInput
    parking_slot?: ParkingSlotUpdateOneRequiredWithoutParkingSessionsNestedInput
    owner?: ClientUpdateOneRequiredWithoutParkingSessionNestedInput
  }

  export type ParkingSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicle_number_plate?: StringFieldUpdateOperationsInput | string
    parking_slot_id?: IntFieldUpdateOperationsInput | number
    owner_email?: StringFieldUpdateOperationsInput | string
    ower_name?: StringFieldUpdateOperationsInput | string
    entry_time?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVehiclesessionStatusFieldUpdateOperationsInput | $Enums.VehiclesessionStatus
  }

  export type ParkingSessionCreateManyInput = {
    id?: number
    vehicle_number_plate: string
    parking_slot_id: number
    owner_email: string
    ower_name: string
    entry_time: Date | string
    exit_time: Date | string
    status: $Enums.VehiclesessionStatus
  }

  export type ParkingSessionUpdateManyMutationInput = {
    ower_name?: StringFieldUpdateOperationsInput | string
    entry_time?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVehiclesessionStatusFieldUpdateOperationsInput | $Enums.VehiclesessionStatus
  }

  export type ParkingSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicle_number_plate?: StringFieldUpdateOperationsInput | string
    parking_slot_id?: IntFieldUpdateOperationsInput | number
    owner_email?: StringFieldUpdateOperationsInput | string
    ower_name?: StringFieldUpdateOperationsInput | string
    entry_time?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVehiclesessionStatusFieldUpdateOperationsInput | $Enums.VehiclesessionStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type Vehicle_detailsListRelationFilter = {
    every?: Vehicle_detailsWhereInput
    some?: Vehicle_detailsWhereInput
    none?: Vehicle_detailsWhereInput
  }

  export type ParkingSessionListRelationFilter = {
    every?: ParkingSessionWhereInput
    some?: ParkingSessionWhereInput
    none?: ParkingSessionWhereInput
  }

  export type Vehicle_detailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkingSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type Vehicle_detailsCountOrderByAggregateInput = {
    id?: SortOrder
    client_Id?: SortOrder
    vehicle_plate?: SortOrder
    vehicle_type?: SortOrder
  }

  export type Vehicle_detailsAvgOrderByAggregateInput = {
    id?: SortOrder
    client_Id?: SortOrder
  }

  export type Vehicle_detailsMaxOrderByAggregateInput = {
    id?: SortOrder
    client_Id?: SortOrder
    vehicle_plate?: SortOrder
    vehicle_type?: SortOrder
  }

  export type Vehicle_detailsMinOrderByAggregateInput = {
    id?: SortOrder
    client_Id?: SortOrder
    vehicle_plate?: SortOrder
    vehicle_type?: SortOrder
  }

  export type Vehicle_detailsSumOrderByAggregateInput = {
    id?: SortOrder
    client_Id?: SortOrder
  }

  export type EnumSlotStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotStatus | EnumSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotStatusFilter<$PrismaModel> | $Enums.SlotStatus
  }

  export type ParkingSlotCountOrderByAggregateInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    status?: SortOrder
  }

  export type ParkingSlotAvgOrderByAggregateInput = {
    id?: SortOrder
    slotNumber?: SortOrder
  }

  export type ParkingSlotMaxOrderByAggregateInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    status?: SortOrder
  }

  export type ParkingSlotMinOrderByAggregateInput = {
    id?: SortOrder
    slotNumber?: SortOrder
    status?: SortOrder
  }

  export type ParkingSlotSumOrderByAggregateInput = {
    id?: SortOrder
    slotNumber?: SortOrder
  }

  export type EnumSlotStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotStatus | EnumSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotStatusWithAggregatesFilter<$PrismaModel> | $Enums.SlotStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlotStatusFilter<$PrismaModel>
    _max?: NestedEnumSlotStatusFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumVehiclesessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehiclesessionStatus | EnumVehiclesessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehiclesessionStatus[] | ListEnumVehiclesessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehiclesessionStatus[] | ListEnumVehiclesessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehiclesessionStatusFilter<$PrismaModel> | $Enums.VehiclesessionStatus
  }

  export type Vehicle_detailsScalarRelationFilter = {
    is?: Vehicle_detailsWhereInput
    isNot?: Vehicle_detailsWhereInput
  }

  export type ParkingSlotScalarRelationFilter = {
    is?: ParkingSlotWhereInput
    isNot?: ParkingSlotWhereInput
  }

  export type ParkingSessionCountOrderByAggregateInput = {
    id?: SortOrder
    vehicle_number_plate?: SortOrder
    parking_slot_id?: SortOrder
    owner_email?: SortOrder
    ower_name?: SortOrder
    entry_time?: SortOrder
    exit_time?: SortOrder
    status?: SortOrder
  }

  export type ParkingSessionAvgOrderByAggregateInput = {
    id?: SortOrder
    parking_slot_id?: SortOrder
  }

  export type ParkingSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicle_number_plate?: SortOrder
    parking_slot_id?: SortOrder
    owner_email?: SortOrder
    ower_name?: SortOrder
    entry_time?: SortOrder
    exit_time?: SortOrder
    status?: SortOrder
  }

  export type ParkingSessionMinOrderByAggregateInput = {
    id?: SortOrder
    vehicle_number_plate?: SortOrder
    parking_slot_id?: SortOrder
    owner_email?: SortOrder
    ower_name?: SortOrder
    entry_time?: SortOrder
    exit_time?: SortOrder
    status?: SortOrder
  }

  export type ParkingSessionSumOrderByAggregateInput = {
    id?: SortOrder
    parking_slot_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumVehiclesessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehiclesessionStatus | EnumVehiclesessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehiclesessionStatus[] | ListEnumVehiclesessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehiclesessionStatus[] | ListEnumVehiclesessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehiclesessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehiclesessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehiclesessionStatusFilter<$PrismaModel>
    _max?: NestedEnumVehiclesessionStatusFilter<$PrismaModel>
  }

  export type Vehicle_detailsCreateNestedManyWithoutClientInput = {
    create?: XOR<Vehicle_detailsCreateWithoutClientInput, Vehicle_detailsUncheckedCreateWithoutClientInput> | Vehicle_detailsCreateWithoutClientInput[] | Vehicle_detailsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: Vehicle_detailsCreateOrConnectWithoutClientInput | Vehicle_detailsCreateOrConnectWithoutClientInput[]
    createMany?: Vehicle_detailsCreateManyClientInputEnvelope
    connect?: Vehicle_detailsWhereUniqueInput | Vehicle_detailsWhereUniqueInput[]
  }

  export type ParkingSessionCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ParkingSessionCreateWithoutOwnerInput, ParkingSessionUncheckedCreateWithoutOwnerInput> | ParkingSessionCreateWithoutOwnerInput[] | ParkingSessionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutOwnerInput | ParkingSessionCreateOrConnectWithoutOwnerInput[]
    createMany?: ParkingSessionCreateManyOwnerInputEnvelope
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
  }

  export type Vehicle_detailsUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<Vehicle_detailsCreateWithoutClientInput, Vehicle_detailsUncheckedCreateWithoutClientInput> | Vehicle_detailsCreateWithoutClientInput[] | Vehicle_detailsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: Vehicle_detailsCreateOrConnectWithoutClientInput | Vehicle_detailsCreateOrConnectWithoutClientInput[]
    createMany?: Vehicle_detailsCreateManyClientInputEnvelope
    connect?: Vehicle_detailsWhereUniqueInput | Vehicle_detailsWhereUniqueInput[]
  }

  export type ParkingSessionUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ParkingSessionCreateWithoutOwnerInput, ParkingSessionUncheckedCreateWithoutOwnerInput> | ParkingSessionCreateWithoutOwnerInput[] | ParkingSessionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutOwnerInput | ParkingSessionCreateOrConnectWithoutOwnerInput[]
    createMany?: ParkingSessionCreateManyOwnerInputEnvelope
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type Vehicle_detailsUpdateManyWithoutClientNestedInput = {
    create?: XOR<Vehicle_detailsCreateWithoutClientInput, Vehicle_detailsUncheckedCreateWithoutClientInput> | Vehicle_detailsCreateWithoutClientInput[] | Vehicle_detailsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: Vehicle_detailsCreateOrConnectWithoutClientInput | Vehicle_detailsCreateOrConnectWithoutClientInput[]
    upsert?: Vehicle_detailsUpsertWithWhereUniqueWithoutClientInput | Vehicle_detailsUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: Vehicle_detailsCreateManyClientInputEnvelope
    set?: Vehicle_detailsWhereUniqueInput | Vehicle_detailsWhereUniqueInput[]
    disconnect?: Vehicle_detailsWhereUniqueInput | Vehicle_detailsWhereUniqueInput[]
    delete?: Vehicle_detailsWhereUniqueInput | Vehicle_detailsWhereUniqueInput[]
    connect?: Vehicle_detailsWhereUniqueInput | Vehicle_detailsWhereUniqueInput[]
    update?: Vehicle_detailsUpdateWithWhereUniqueWithoutClientInput | Vehicle_detailsUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: Vehicle_detailsUpdateManyWithWhereWithoutClientInput | Vehicle_detailsUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: Vehicle_detailsScalarWhereInput | Vehicle_detailsScalarWhereInput[]
  }

  export type ParkingSessionUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ParkingSessionCreateWithoutOwnerInput, ParkingSessionUncheckedCreateWithoutOwnerInput> | ParkingSessionCreateWithoutOwnerInput[] | ParkingSessionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutOwnerInput | ParkingSessionCreateOrConnectWithoutOwnerInput[]
    upsert?: ParkingSessionUpsertWithWhereUniqueWithoutOwnerInput | ParkingSessionUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ParkingSessionCreateManyOwnerInputEnvelope
    set?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    disconnect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    delete?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    update?: ParkingSessionUpdateWithWhereUniqueWithoutOwnerInput | ParkingSessionUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ParkingSessionUpdateManyWithWhereWithoutOwnerInput | ParkingSessionUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ParkingSessionScalarWhereInput | ParkingSessionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Vehicle_detailsUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<Vehicle_detailsCreateWithoutClientInput, Vehicle_detailsUncheckedCreateWithoutClientInput> | Vehicle_detailsCreateWithoutClientInput[] | Vehicle_detailsUncheckedCreateWithoutClientInput[]
    connectOrCreate?: Vehicle_detailsCreateOrConnectWithoutClientInput | Vehicle_detailsCreateOrConnectWithoutClientInput[]
    upsert?: Vehicle_detailsUpsertWithWhereUniqueWithoutClientInput | Vehicle_detailsUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: Vehicle_detailsCreateManyClientInputEnvelope
    set?: Vehicle_detailsWhereUniqueInput | Vehicle_detailsWhereUniqueInput[]
    disconnect?: Vehicle_detailsWhereUniqueInput | Vehicle_detailsWhereUniqueInput[]
    delete?: Vehicle_detailsWhereUniqueInput | Vehicle_detailsWhereUniqueInput[]
    connect?: Vehicle_detailsWhereUniqueInput | Vehicle_detailsWhereUniqueInput[]
    update?: Vehicle_detailsUpdateWithWhereUniqueWithoutClientInput | Vehicle_detailsUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: Vehicle_detailsUpdateManyWithWhereWithoutClientInput | Vehicle_detailsUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: Vehicle_detailsScalarWhereInput | Vehicle_detailsScalarWhereInput[]
  }

  export type ParkingSessionUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ParkingSessionCreateWithoutOwnerInput, ParkingSessionUncheckedCreateWithoutOwnerInput> | ParkingSessionCreateWithoutOwnerInput[] | ParkingSessionUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutOwnerInput | ParkingSessionCreateOrConnectWithoutOwnerInput[]
    upsert?: ParkingSessionUpsertWithWhereUniqueWithoutOwnerInput | ParkingSessionUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ParkingSessionCreateManyOwnerInputEnvelope
    set?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    disconnect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    delete?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    update?: ParkingSessionUpdateWithWhereUniqueWithoutOwnerInput | ParkingSessionUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ParkingSessionUpdateManyWithWhereWithoutOwnerInput | ParkingSessionUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ParkingSessionScalarWhereInput | ParkingSessionScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutVehicle_detailsInput = {
    create?: XOR<ClientCreateWithoutVehicle_detailsInput, ClientUncheckedCreateWithoutVehicle_detailsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutVehicle_detailsInput
    connect?: ClientWhereUniqueInput
  }

  export type ParkingSessionCreateNestedManyWithoutVehichleInput = {
    create?: XOR<ParkingSessionCreateWithoutVehichleInput, ParkingSessionUncheckedCreateWithoutVehichleInput> | ParkingSessionCreateWithoutVehichleInput[] | ParkingSessionUncheckedCreateWithoutVehichleInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutVehichleInput | ParkingSessionCreateOrConnectWithoutVehichleInput[]
    createMany?: ParkingSessionCreateManyVehichleInputEnvelope
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
  }

  export type ParkingSessionUncheckedCreateNestedManyWithoutVehichleInput = {
    create?: XOR<ParkingSessionCreateWithoutVehichleInput, ParkingSessionUncheckedCreateWithoutVehichleInput> | ParkingSessionCreateWithoutVehichleInput[] | ParkingSessionUncheckedCreateWithoutVehichleInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutVehichleInput | ParkingSessionCreateOrConnectWithoutVehichleInput[]
    createMany?: ParkingSessionCreateManyVehichleInputEnvelope
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
  }

  export type ClientUpdateOneRequiredWithoutVehicle_detailsNestedInput = {
    create?: XOR<ClientCreateWithoutVehicle_detailsInput, ClientUncheckedCreateWithoutVehicle_detailsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutVehicle_detailsInput
    upsert?: ClientUpsertWithoutVehicle_detailsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutVehicle_detailsInput, ClientUpdateWithoutVehicle_detailsInput>, ClientUncheckedUpdateWithoutVehicle_detailsInput>
  }

  export type ParkingSessionUpdateManyWithoutVehichleNestedInput = {
    create?: XOR<ParkingSessionCreateWithoutVehichleInput, ParkingSessionUncheckedCreateWithoutVehichleInput> | ParkingSessionCreateWithoutVehichleInput[] | ParkingSessionUncheckedCreateWithoutVehichleInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutVehichleInput | ParkingSessionCreateOrConnectWithoutVehichleInput[]
    upsert?: ParkingSessionUpsertWithWhereUniqueWithoutVehichleInput | ParkingSessionUpsertWithWhereUniqueWithoutVehichleInput[]
    createMany?: ParkingSessionCreateManyVehichleInputEnvelope
    set?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    disconnect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    delete?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    update?: ParkingSessionUpdateWithWhereUniqueWithoutVehichleInput | ParkingSessionUpdateWithWhereUniqueWithoutVehichleInput[]
    updateMany?: ParkingSessionUpdateManyWithWhereWithoutVehichleInput | ParkingSessionUpdateManyWithWhereWithoutVehichleInput[]
    deleteMany?: ParkingSessionScalarWhereInput | ParkingSessionScalarWhereInput[]
  }

  export type ParkingSessionUncheckedUpdateManyWithoutVehichleNestedInput = {
    create?: XOR<ParkingSessionCreateWithoutVehichleInput, ParkingSessionUncheckedCreateWithoutVehichleInput> | ParkingSessionCreateWithoutVehichleInput[] | ParkingSessionUncheckedCreateWithoutVehichleInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutVehichleInput | ParkingSessionCreateOrConnectWithoutVehichleInput[]
    upsert?: ParkingSessionUpsertWithWhereUniqueWithoutVehichleInput | ParkingSessionUpsertWithWhereUniqueWithoutVehichleInput[]
    createMany?: ParkingSessionCreateManyVehichleInputEnvelope
    set?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    disconnect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    delete?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    update?: ParkingSessionUpdateWithWhereUniqueWithoutVehichleInput | ParkingSessionUpdateWithWhereUniqueWithoutVehichleInput[]
    updateMany?: ParkingSessionUpdateManyWithWhereWithoutVehichleInput | ParkingSessionUpdateManyWithWhereWithoutVehichleInput[]
    deleteMany?: ParkingSessionScalarWhereInput | ParkingSessionScalarWhereInput[]
  }

  export type ParkingSessionCreateNestedManyWithoutParking_slotInput = {
    create?: XOR<ParkingSessionCreateWithoutParking_slotInput, ParkingSessionUncheckedCreateWithoutParking_slotInput> | ParkingSessionCreateWithoutParking_slotInput[] | ParkingSessionUncheckedCreateWithoutParking_slotInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutParking_slotInput | ParkingSessionCreateOrConnectWithoutParking_slotInput[]
    createMany?: ParkingSessionCreateManyParking_slotInputEnvelope
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
  }

  export type ParkingSessionUncheckedCreateNestedManyWithoutParking_slotInput = {
    create?: XOR<ParkingSessionCreateWithoutParking_slotInput, ParkingSessionUncheckedCreateWithoutParking_slotInput> | ParkingSessionCreateWithoutParking_slotInput[] | ParkingSessionUncheckedCreateWithoutParking_slotInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutParking_slotInput | ParkingSessionCreateOrConnectWithoutParking_slotInput[]
    createMany?: ParkingSessionCreateManyParking_slotInputEnvelope
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
  }

  export type EnumSlotStatusFieldUpdateOperationsInput = {
    set?: $Enums.SlotStatus
  }

  export type ParkingSessionUpdateManyWithoutParking_slotNestedInput = {
    create?: XOR<ParkingSessionCreateWithoutParking_slotInput, ParkingSessionUncheckedCreateWithoutParking_slotInput> | ParkingSessionCreateWithoutParking_slotInput[] | ParkingSessionUncheckedCreateWithoutParking_slotInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutParking_slotInput | ParkingSessionCreateOrConnectWithoutParking_slotInput[]
    upsert?: ParkingSessionUpsertWithWhereUniqueWithoutParking_slotInput | ParkingSessionUpsertWithWhereUniqueWithoutParking_slotInput[]
    createMany?: ParkingSessionCreateManyParking_slotInputEnvelope
    set?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    disconnect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    delete?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    update?: ParkingSessionUpdateWithWhereUniqueWithoutParking_slotInput | ParkingSessionUpdateWithWhereUniqueWithoutParking_slotInput[]
    updateMany?: ParkingSessionUpdateManyWithWhereWithoutParking_slotInput | ParkingSessionUpdateManyWithWhereWithoutParking_slotInput[]
    deleteMany?: ParkingSessionScalarWhereInput | ParkingSessionScalarWhereInput[]
  }

  export type ParkingSessionUncheckedUpdateManyWithoutParking_slotNestedInput = {
    create?: XOR<ParkingSessionCreateWithoutParking_slotInput, ParkingSessionUncheckedCreateWithoutParking_slotInput> | ParkingSessionCreateWithoutParking_slotInput[] | ParkingSessionUncheckedCreateWithoutParking_slotInput[]
    connectOrCreate?: ParkingSessionCreateOrConnectWithoutParking_slotInput | ParkingSessionCreateOrConnectWithoutParking_slotInput[]
    upsert?: ParkingSessionUpsertWithWhereUniqueWithoutParking_slotInput | ParkingSessionUpsertWithWhereUniqueWithoutParking_slotInput[]
    createMany?: ParkingSessionCreateManyParking_slotInputEnvelope
    set?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    disconnect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    delete?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    connect?: ParkingSessionWhereUniqueInput | ParkingSessionWhereUniqueInput[]
    update?: ParkingSessionUpdateWithWhereUniqueWithoutParking_slotInput | ParkingSessionUpdateWithWhereUniqueWithoutParking_slotInput[]
    updateMany?: ParkingSessionUpdateManyWithWhereWithoutParking_slotInput | ParkingSessionUpdateManyWithWhereWithoutParking_slotInput[]
    deleteMany?: ParkingSessionScalarWhereInput | ParkingSessionScalarWhereInput[]
  }

  export type Vehicle_detailsCreateNestedOneWithoutParkingSessionInput = {
    create?: XOR<Vehicle_detailsCreateWithoutParkingSessionInput, Vehicle_detailsUncheckedCreateWithoutParkingSessionInput>
    connectOrCreate?: Vehicle_detailsCreateOrConnectWithoutParkingSessionInput
    connect?: Vehicle_detailsWhereUniqueInput
  }

  export type ParkingSlotCreateNestedOneWithoutParkingSessionsInput = {
    create?: XOR<ParkingSlotCreateWithoutParkingSessionsInput, ParkingSlotUncheckedCreateWithoutParkingSessionsInput>
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutParkingSessionsInput
    connect?: ParkingSlotWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutParkingSessionInput = {
    create?: XOR<ClientCreateWithoutParkingSessionInput, ClientUncheckedCreateWithoutParkingSessionInput>
    connectOrCreate?: ClientCreateOrConnectWithoutParkingSessionInput
    connect?: ClientWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumVehiclesessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.VehiclesessionStatus
  }

  export type Vehicle_detailsUpdateOneRequiredWithoutParkingSessionNestedInput = {
    create?: XOR<Vehicle_detailsCreateWithoutParkingSessionInput, Vehicle_detailsUncheckedCreateWithoutParkingSessionInput>
    connectOrCreate?: Vehicle_detailsCreateOrConnectWithoutParkingSessionInput
    upsert?: Vehicle_detailsUpsertWithoutParkingSessionInput
    connect?: Vehicle_detailsWhereUniqueInput
    update?: XOR<XOR<Vehicle_detailsUpdateToOneWithWhereWithoutParkingSessionInput, Vehicle_detailsUpdateWithoutParkingSessionInput>, Vehicle_detailsUncheckedUpdateWithoutParkingSessionInput>
  }

  export type ParkingSlotUpdateOneRequiredWithoutParkingSessionsNestedInput = {
    create?: XOR<ParkingSlotCreateWithoutParkingSessionsInput, ParkingSlotUncheckedCreateWithoutParkingSessionsInput>
    connectOrCreate?: ParkingSlotCreateOrConnectWithoutParkingSessionsInput
    upsert?: ParkingSlotUpsertWithoutParkingSessionsInput
    connect?: ParkingSlotWhereUniqueInput
    update?: XOR<XOR<ParkingSlotUpdateToOneWithWhereWithoutParkingSessionsInput, ParkingSlotUpdateWithoutParkingSessionsInput>, ParkingSlotUncheckedUpdateWithoutParkingSessionsInput>
  }

  export type ClientUpdateOneRequiredWithoutParkingSessionNestedInput = {
    create?: XOR<ClientCreateWithoutParkingSessionInput, ClientUncheckedCreateWithoutParkingSessionInput>
    connectOrCreate?: ClientCreateOrConnectWithoutParkingSessionInput
    upsert?: ClientUpsertWithoutParkingSessionInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutParkingSessionInput, ClientUpdateWithoutParkingSessionInput>, ClientUncheckedUpdateWithoutParkingSessionInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumSlotStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotStatus | EnumSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotStatusFilter<$PrismaModel> | $Enums.SlotStatus
  }

  export type NestedEnumSlotStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SlotStatus | EnumSlotStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SlotStatus[] | ListEnumSlotStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSlotStatusWithAggregatesFilter<$PrismaModel> | $Enums.SlotStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSlotStatusFilter<$PrismaModel>
    _max?: NestedEnumSlotStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumVehiclesessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehiclesessionStatus | EnumVehiclesessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehiclesessionStatus[] | ListEnumVehiclesessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehiclesessionStatus[] | ListEnumVehiclesessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehiclesessionStatusFilter<$PrismaModel> | $Enums.VehiclesessionStatus
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumVehiclesessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehiclesessionStatus | EnumVehiclesessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehiclesessionStatus[] | ListEnumVehiclesessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehiclesessionStatus[] | ListEnumVehiclesessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehiclesessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehiclesessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehiclesessionStatusFilter<$PrismaModel>
    _max?: NestedEnumVehiclesessionStatusFilter<$PrismaModel>
  }

  export type Vehicle_detailsCreateWithoutClientInput = {
    vehicle_plate: string
    vehicle_type: string
    ParkingSession?: ParkingSessionCreateNestedManyWithoutVehichleInput
  }

  export type Vehicle_detailsUncheckedCreateWithoutClientInput = {
    id?: number
    vehicle_plate: string
    vehicle_type: string
    ParkingSession?: ParkingSessionUncheckedCreateNestedManyWithoutVehichleInput
  }

  export type Vehicle_detailsCreateOrConnectWithoutClientInput = {
    where: Vehicle_detailsWhereUniqueInput
    create: XOR<Vehicle_detailsCreateWithoutClientInput, Vehicle_detailsUncheckedCreateWithoutClientInput>
  }

  export type Vehicle_detailsCreateManyClientInputEnvelope = {
    data: Vehicle_detailsCreateManyClientInput | Vehicle_detailsCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ParkingSessionCreateWithoutOwnerInput = {
    ower_name: string
    entry_time: Date | string
    exit_time: Date | string
    status: $Enums.VehiclesessionStatus
    vehichle: Vehicle_detailsCreateNestedOneWithoutParkingSessionInput
    parking_slot: ParkingSlotCreateNestedOneWithoutParkingSessionsInput
  }

  export type ParkingSessionUncheckedCreateWithoutOwnerInput = {
    id?: number
    vehicle_number_plate: string
    parking_slot_id: number
    ower_name: string
    entry_time: Date | string
    exit_time: Date | string
    status: $Enums.VehiclesessionStatus
  }

  export type ParkingSessionCreateOrConnectWithoutOwnerInput = {
    where: ParkingSessionWhereUniqueInput
    create: XOR<ParkingSessionCreateWithoutOwnerInput, ParkingSessionUncheckedCreateWithoutOwnerInput>
  }

  export type ParkingSessionCreateManyOwnerInputEnvelope = {
    data: ParkingSessionCreateManyOwnerInput | ParkingSessionCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type Vehicle_detailsUpsertWithWhereUniqueWithoutClientInput = {
    where: Vehicle_detailsWhereUniqueInput
    update: XOR<Vehicle_detailsUpdateWithoutClientInput, Vehicle_detailsUncheckedUpdateWithoutClientInput>
    create: XOR<Vehicle_detailsCreateWithoutClientInput, Vehicle_detailsUncheckedCreateWithoutClientInput>
  }

  export type Vehicle_detailsUpdateWithWhereUniqueWithoutClientInput = {
    where: Vehicle_detailsWhereUniqueInput
    data: XOR<Vehicle_detailsUpdateWithoutClientInput, Vehicle_detailsUncheckedUpdateWithoutClientInput>
  }

  export type Vehicle_detailsUpdateManyWithWhereWithoutClientInput = {
    where: Vehicle_detailsScalarWhereInput
    data: XOR<Vehicle_detailsUpdateManyMutationInput, Vehicle_detailsUncheckedUpdateManyWithoutClientInput>
  }

  export type Vehicle_detailsScalarWhereInput = {
    AND?: Vehicle_detailsScalarWhereInput | Vehicle_detailsScalarWhereInput[]
    OR?: Vehicle_detailsScalarWhereInput[]
    NOT?: Vehicle_detailsScalarWhereInput | Vehicle_detailsScalarWhereInput[]
    id?: IntFilter<"Vehicle_details"> | number
    client_Id?: IntFilter<"Vehicle_details"> | number
    vehicle_plate?: StringFilter<"Vehicle_details"> | string
    vehicle_type?: StringFilter<"Vehicle_details"> | string
  }

  export type ParkingSessionUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ParkingSessionWhereUniqueInput
    update: XOR<ParkingSessionUpdateWithoutOwnerInput, ParkingSessionUncheckedUpdateWithoutOwnerInput>
    create: XOR<ParkingSessionCreateWithoutOwnerInput, ParkingSessionUncheckedCreateWithoutOwnerInput>
  }

  export type ParkingSessionUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ParkingSessionWhereUniqueInput
    data: XOR<ParkingSessionUpdateWithoutOwnerInput, ParkingSessionUncheckedUpdateWithoutOwnerInput>
  }

  export type ParkingSessionUpdateManyWithWhereWithoutOwnerInput = {
    where: ParkingSessionScalarWhereInput
    data: XOR<ParkingSessionUpdateManyMutationInput, ParkingSessionUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ParkingSessionScalarWhereInput = {
    AND?: ParkingSessionScalarWhereInput | ParkingSessionScalarWhereInput[]
    OR?: ParkingSessionScalarWhereInput[]
    NOT?: ParkingSessionScalarWhereInput | ParkingSessionScalarWhereInput[]
    id?: IntFilter<"ParkingSession"> | number
    vehicle_number_plate?: StringFilter<"ParkingSession"> | string
    parking_slot_id?: IntFilter<"ParkingSession"> | number
    owner_email?: StringFilter<"ParkingSession"> | string
    ower_name?: StringFilter<"ParkingSession"> | string
    entry_time?: DateTimeFilter<"ParkingSession"> | Date | string
    exit_time?: DateTimeFilter<"ParkingSession"> | Date | string
    status?: EnumVehiclesessionStatusFilter<"ParkingSession"> | $Enums.VehiclesessionStatus
  }

  export type ClientCreateWithoutVehicle_detailsInput = {
    username: string
    email: string
    password: string
    role: $Enums.Role
    ParkingSession?: ParkingSessionCreateNestedManyWithoutOwnerInput
  }

  export type ClientUncheckedCreateWithoutVehicle_detailsInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.Role
    ParkingSession?: ParkingSessionUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type ClientCreateOrConnectWithoutVehicle_detailsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutVehicle_detailsInput, ClientUncheckedCreateWithoutVehicle_detailsInput>
  }

  export type ParkingSessionCreateWithoutVehichleInput = {
    ower_name: string
    entry_time: Date | string
    exit_time: Date | string
    status: $Enums.VehiclesessionStatus
    parking_slot: ParkingSlotCreateNestedOneWithoutParkingSessionsInput
    owner: ClientCreateNestedOneWithoutParkingSessionInput
  }

  export type ParkingSessionUncheckedCreateWithoutVehichleInput = {
    id?: number
    parking_slot_id: number
    owner_email: string
    ower_name: string
    entry_time: Date | string
    exit_time: Date | string
    status: $Enums.VehiclesessionStatus
  }

  export type ParkingSessionCreateOrConnectWithoutVehichleInput = {
    where: ParkingSessionWhereUniqueInput
    create: XOR<ParkingSessionCreateWithoutVehichleInput, ParkingSessionUncheckedCreateWithoutVehichleInput>
  }

  export type ParkingSessionCreateManyVehichleInputEnvelope = {
    data: ParkingSessionCreateManyVehichleInput | ParkingSessionCreateManyVehichleInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutVehicle_detailsInput = {
    update: XOR<ClientUpdateWithoutVehicle_detailsInput, ClientUncheckedUpdateWithoutVehicle_detailsInput>
    create: XOR<ClientCreateWithoutVehicle_detailsInput, ClientUncheckedCreateWithoutVehicle_detailsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutVehicle_detailsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutVehicle_detailsInput, ClientUncheckedUpdateWithoutVehicle_detailsInput>
  }

  export type ClientUpdateWithoutVehicle_detailsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ParkingSession?: ParkingSessionUpdateManyWithoutOwnerNestedInput
  }

  export type ClientUncheckedUpdateWithoutVehicle_detailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ParkingSession?: ParkingSessionUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type ParkingSessionUpsertWithWhereUniqueWithoutVehichleInput = {
    where: ParkingSessionWhereUniqueInput
    update: XOR<ParkingSessionUpdateWithoutVehichleInput, ParkingSessionUncheckedUpdateWithoutVehichleInput>
    create: XOR<ParkingSessionCreateWithoutVehichleInput, ParkingSessionUncheckedCreateWithoutVehichleInput>
  }

  export type ParkingSessionUpdateWithWhereUniqueWithoutVehichleInput = {
    where: ParkingSessionWhereUniqueInput
    data: XOR<ParkingSessionUpdateWithoutVehichleInput, ParkingSessionUncheckedUpdateWithoutVehichleInput>
  }

  export type ParkingSessionUpdateManyWithWhereWithoutVehichleInput = {
    where: ParkingSessionScalarWhereInput
    data: XOR<ParkingSessionUpdateManyMutationInput, ParkingSessionUncheckedUpdateManyWithoutVehichleInput>
  }

  export type ParkingSessionCreateWithoutParking_slotInput = {
    ower_name: string
    entry_time: Date | string
    exit_time: Date | string
    status: $Enums.VehiclesessionStatus
    vehichle: Vehicle_detailsCreateNestedOneWithoutParkingSessionInput
    owner: ClientCreateNestedOneWithoutParkingSessionInput
  }

  export type ParkingSessionUncheckedCreateWithoutParking_slotInput = {
    id?: number
    vehicle_number_plate: string
    owner_email: string
    ower_name: string
    entry_time: Date | string
    exit_time: Date | string
    status: $Enums.VehiclesessionStatus
  }

  export type ParkingSessionCreateOrConnectWithoutParking_slotInput = {
    where: ParkingSessionWhereUniqueInput
    create: XOR<ParkingSessionCreateWithoutParking_slotInput, ParkingSessionUncheckedCreateWithoutParking_slotInput>
  }

  export type ParkingSessionCreateManyParking_slotInputEnvelope = {
    data: ParkingSessionCreateManyParking_slotInput | ParkingSessionCreateManyParking_slotInput[]
    skipDuplicates?: boolean
  }

  export type ParkingSessionUpsertWithWhereUniqueWithoutParking_slotInput = {
    where: ParkingSessionWhereUniqueInput
    update: XOR<ParkingSessionUpdateWithoutParking_slotInput, ParkingSessionUncheckedUpdateWithoutParking_slotInput>
    create: XOR<ParkingSessionCreateWithoutParking_slotInput, ParkingSessionUncheckedCreateWithoutParking_slotInput>
  }

  export type ParkingSessionUpdateWithWhereUniqueWithoutParking_slotInput = {
    where: ParkingSessionWhereUniqueInput
    data: XOR<ParkingSessionUpdateWithoutParking_slotInput, ParkingSessionUncheckedUpdateWithoutParking_slotInput>
  }

  export type ParkingSessionUpdateManyWithWhereWithoutParking_slotInput = {
    where: ParkingSessionScalarWhereInput
    data: XOR<ParkingSessionUpdateManyMutationInput, ParkingSessionUncheckedUpdateManyWithoutParking_slotInput>
  }

  export type Vehicle_detailsCreateWithoutParkingSessionInput = {
    vehicle_plate: string
    vehicle_type: string
    client: ClientCreateNestedOneWithoutVehicle_detailsInput
  }

  export type Vehicle_detailsUncheckedCreateWithoutParkingSessionInput = {
    id?: number
    client_Id: number
    vehicle_plate: string
    vehicle_type: string
  }

  export type Vehicle_detailsCreateOrConnectWithoutParkingSessionInput = {
    where: Vehicle_detailsWhereUniqueInput
    create: XOR<Vehicle_detailsCreateWithoutParkingSessionInput, Vehicle_detailsUncheckedCreateWithoutParkingSessionInput>
  }

  export type ParkingSlotCreateWithoutParkingSessionsInput = {
    slotNumber: number
    status: $Enums.SlotStatus
  }

  export type ParkingSlotUncheckedCreateWithoutParkingSessionsInput = {
    id?: number
    slotNumber: number
    status: $Enums.SlotStatus
  }

  export type ParkingSlotCreateOrConnectWithoutParkingSessionsInput = {
    where: ParkingSlotWhereUniqueInput
    create: XOR<ParkingSlotCreateWithoutParkingSessionsInput, ParkingSlotUncheckedCreateWithoutParkingSessionsInput>
  }

  export type ClientCreateWithoutParkingSessionInput = {
    username: string
    email: string
    password: string
    role: $Enums.Role
    vehicle_details?: Vehicle_detailsCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutParkingSessionInput = {
    id?: number
    username: string
    email: string
    password: string
    role: $Enums.Role
    vehicle_details?: Vehicle_detailsUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutParkingSessionInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutParkingSessionInput, ClientUncheckedCreateWithoutParkingSessionInput>
  }

  export type Vehicle_detailsUpsertWithoutParkingSessionInput = {
    update: XOR<Vehicle_detailsUpdateWithoutParkingSessionInput, Vehicle_detailsUncheckedUpdateWithoutParkingSessionInput>
    create: XOR<Vehicle_detailsCreateWithoutParkingSessionInput, Vehicle_detailsUncheckedCreateWithoutParkingSessionInput>
    where?: Vehicle_detailsWhereInput
  }

  export type Vehicle_detailsUpdateToOneWithWhereWithoutParkingSessionInput = {
    where?: Vehicle_detailsWhereInput
    data: XOR<Vehicle_detailsUpdateWithoutParkingSessionInput, Vehicle_detailsUncheckedUpdateWithoutParkingSessionInput>
  }

  export type Vehicle_detailsUpdateWithoutParkingSessionInput = {
    vehicle_plate?: StringFieldUpdateOperationsInput | string
    vehicle_type?: StringFieldUpdateOperationsInput | string
    client?: ClientUpdateOneRequiredWithoutVehicle_detailsNestedInput
  }

  export type Vehicle_detailsUncheckedUpdateWithoutParkingSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    client_Id?: IntFieldUpdateOperationsInput | number
    vehicle_plate?: StringFieldUpdateOperationsInput | string
    vehicle_type?: StringFieldUpdateOperationsInput | string
  }

  export type ParkingSlotUpsertWithoutParkingSessionsInput = {
    update: XOR<ParkingSlotUpdateWithoutParkingSessionsInput, ParkingSlotUncheckedUpdateWithoutParkingSessionsInput>
    create: XOR<ParkingSlotCreateWithoutParkingSessionsInput, ParkingSlotUncheckedCreateWithoutParkingSessionsInput>
    where?: ParkingSlotWhereInput
  }

  export type ParkingSlotUpdateToOneWithWhereWithoutParkingSessionsInput = {
    where?: ParkingSlotWhereInput
    data: XOR<ParkingSlotUpdateWithoutParkingSessionsInput, ParkingSlotUncheckedUpdateWithoutParkingSessionsInput>
  }

  export type ParkingSlotUpdateWithoutParkingSessionsInput = {
    slotNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
  }

  export type ParkingSlotUncheckedUpdateWithoutParkingSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slotNumber?: IntFieldUpdateOperationsInput | number
    status?: EnumSlotStatusFieldUpdateOperationsInput | $Enums.SlotStatus
  }

  export type ClientUpsertWithoutParkingSessionInput = {
    update: XOR<ClientUpdateWithoutParkingSessionInput, ClientUncheckedUpdateWithoutParkingSessionInput>
    create: XOR<ClientCreateWithoutParkingSessionInput, ClientUncheckedCreateWithoutParkingSessionInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutParkingSessionInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutParkingSessionInput, ClientUncheckedUpdateWithoutParkingSessionInput>
  }

  export type ClientUpdateWithoutParkingSessionInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    vehicle_details?: Vehicle_detailsUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutParkingSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    vehicle_details?: Vehicle_detailsUncheckedUpdateManyWithoutClientNestedInput
  }

  export type Vehicle_detailsCreateManyClientInput = {
    id?: number
    vehicle_plate: string
    vehicle_type: string
  }

  export type ParkingSessionCreateManyOwnerInput = {
    id?: number
    vehicle_number_plate: string
    parking_slot_id: number
    ower_name: string
    entry_time: Date | string
    exit_time: Date | string
    status: $Enums.VehiclesessionStatus
  }

  export type Vehicle_detailsUpdateWithoutClientInput = {
    vehicle_plate?: StringFieldUpdateOperationsInput | string
    vehicle_type?: StringFieldUpdateOperationsInput | string
    ParkingSession?: ParkingSessionUpdateManyWithoutVehichleNestedInput
  }

  export type Vehicle_detailsUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicle_plate?: StringFieldUpdateOperationsInput | string
    vehicle_type?: StringFieldUpdateOperationsInput | string
    ParkingSession?: ParkingSessionUncheckedUpdateManyWithoutVehichleNestedInput
  }

  export type Vehicle_detailsUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicle_plate?: StringFieldUpdateOperationsInput | string
    vehicle_type?: StringFieldUpdateOperationsInput | string
  }

  export type ParkingSessionUpdateWithoutOwnerInput = {
    ower_name?: StringFieldUpdateOperationsInput | string
    entry_time?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVehiclesessionStatusFieldUpdateOperationsInput | $Enums.VehiclesessionStatus
    vehichle?: Vehicle_detailsUpdateOneRequiredWithoutParkingSessionNestedInput
    parking_slot?: ParkingSlotUpdateOneRequiredWithoutParkingSessionsNestedInput
  }

  export type ParkingSessionUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicle_number_plate?: StringFieldUpdateOperationsInput | string
    parking_slot_id?: IntFieldUpdateOperationsInput | number
    ower_name?: StringFieldUpdateOperationsInput | string
    entry_time?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVehiclesessionStatusFieldUpdateOperationsInput | $Enums.VehiclesessionStatus
  }

  export type ParkingSessionUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicle_number_plate?: StringFieldUpdateOperationsInput | string
    parking_slot_id?: IntFieldUpdateOperationsInput | number
    ower_name?: StringFieldUpdateOperationsInput | string
    entry_time?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVehiclesessionStatusFieldUpdateOperationsInput | $Enums.VehiclesessionStatus
  }

  export type ParkingSessionCreateManyVehichleInput = {
    id?: number
    parking_slot_id: number
    owner_email: string
    ower_name: string
    entry_time: Date | string
    exit_time: Date | string
    status: $Enums.VehiclesessionStatus
  }

  export type ParkingSessionUpdateWithoutVehichleInput = {
    ower_name?: StringFieldUpdateOperationsInput | string
    entry_time?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVehiclesessionStatusFieldUpdateOperationsInput | $Enums.VehiclesessionStatus
    parking_slot?: ParkingSlotUpdateOneRequiredWithoutParkingSessionsNestedInput
    owner?: ClientUpdateOneRequiredWithoutParkingSessionNestedInput
  }

  export type ParkingSessionUncheckedUpdateWithoutVehichleInput = {
    id?: IntFieldUpdateOperationsInput | number
    parking_slot_id?: IntFieldUpdateOperationsInput | number
    owner_email?: StringFieldUpdateOperationsInput | string
    ower_name?: StringFieldUpdateOperationsInput | string
    entry_time?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVehiclesessionStatusFieldUpdateOperationsInput | $Enums.VehiclesessionStatus
  }

  export type ParkingSessionUncheckedUpdateManyWithoutVehichleInput = {
    id?: IntFieldUpdateOperationsInput | number
    parking_slot_id?: IntFieldUpdateOperationsInput | number
    owner_email?: StringFieldUpdateOperationsInput | string
    ower_name?: StringFieldUpdateOperationsInput | string
    entry_time?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVehiclesessionStatusFieldUpdateOperationsInput | $Enums.VehiclesessionStatus
  }

  export type ParkingSessionCreateManyParking_slotInput = {
    id?: number
    vehicle_number_plate: string
    owner_email: string
    ower_name: string
    entry_time: Date | string
    exit_time: Date | string
    status: $Enums.VehiclesessionStatus
  }

  export type ParkingSessionUpdateWithoutParking_slotInput = {
    ower_name?: StringFieldUpdateOperationsInput | string
    entry_time?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVehiclesessionStatusFieldUpdateOperationsInput | $Enums.VehiclesessionStatus
    vehichle?: Vehicle_detailsUpdateOneRequiredWithoutParkingSessionNestedInput
    owner?: ClientUpdateOneRequiredWithoutParkingSessionNestedInput
  }

  export type ParkingSessionUncheckedUpdateWithoutParking_slotInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicle_number_plate?: StringFieldUpdateOperationsInput | string
    owner_email?: StringFieldUpdateOperationsInput | string
    ower_name?: StringFieldUpdateOperationsInput | string
    entry_time?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVehiclesessionStatusFieldUpdateOperationsInput | $Enums.VehiclesessionStatus
  }

  export type ParkingSessionUncheckedUpdateManyWithoutParking_slotInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicle_number_plate?: StringFieldUpdateOperationsInput | string
    owner_email?: StringFieldUpdateOperationsInput | string
    ower_name?: StringFieldUpdateOperationsInput | string
    entry_time?: DateTimeFieldUpdateOperationsInput | Date | string
    exit_time?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumVehiclesessionStatusFieldUpdateOperationsInput | $Enums.VehiclesessionStatus
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