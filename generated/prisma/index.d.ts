
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
 * Model Direction
 * 
 */
export type Direction = $Result.DefaultSelection<Prisma.$DirectionPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Personnel
 * 
 */
export type Personnel = $Result.DefaultSelection<Prisma.$PersonnelPayload>
/**
 * Model TypeConge
 * 
 */
export type TypeConge = $Result.DefaultSelection<Prisma.$TypeCongePayload>
/**
 * Model PeriodeConge
 * 
 */
export type PeriodeConge = $Result.DefaultSelection<Prisma.$PeriodeCongePayload>
/**
 * Model Demande
 * 
 */
export type Demande = $Result.DefaultSelection<Prisma.$DemandePayload>
/**
 * Model Discussion
 * 
 */
export type Discussion = $Result.DefaultSelection<Prisma.$DiscussionPayload>
/**
 * Model FicheDeConge
 * 
 */
export type FicheDeConge = $Result.DefaultSelection<Prisma.$FicheDeCongePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatutDemande: {
  EN_ATTENTE: 'EN_ATTENTE',
  APPROUVEE: 'APPROUVEE',
  REFUSEE: 'REFUSEE'
};

export type StatutDemande = (typeof StatutDemande)[keyof typeof StatutDemande]


export const RolePersonnel: {
  ADMIN: 'ADMIN',
  RH: 'RH',
  CHEF_SERVICE: 'CHEF_SERVICE',
  EMPLOYE: 'EMPLOYE'
};

export type RolePersonnel = (typeof RolePersonnel)[keyof typeof RolePersonnel]


export const TypePersonnel: {
  PERMANENT: 'PERMANENT',
  CONTRACTUEL: 'CONTRACTUEL',
  STAGIAIRE: 'STAGIAIRE'
};

export type TypePersonnel = (typeof TypePersonnel)[keyof typeof TypePersonnel]

}

export type StatutDemande = $Enums.StatutDemande

export const StatutDemande: typeof $Enums.StatutDemande

export type RolePersonnel = $Enums.RolePersonnel

export const RolePersonnel: typeof $Enums.RolePersonnel

export type TypePersonnel = $Enums.TypePersonnel

export const TypePersonnel: typeof $Enums.TypePersonnel

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Directions
 * const directions = await prisma.direction.findMany()
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
   * // Fetch zero or more Directions
   * const directions = await prisma.direction.findMany()
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
   * `prisma.direction`: Exposes CRUD operations for the **Direction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Directions
    * const directions = await prisma.direction.findMany()
    * ```
    */
  get direction(): Prisma.DirectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personnel`: Exposes CRUD operations for the **Personnel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Personnel
    * const personnel = await prisma.personnel.findMany()
    * ```
    */
  get personnel(): Prisma.PersonnelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.typeConge`: Exposes CRUD operations for the **TypeConge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TypeConges
    * const typeConges = await prisma.typeConge.findMany()
    * ```
    */
  get typeConge(): Prisma.TypeCongeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.periodeConge`: Exposes CRUD operations for the **PeriodeConge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PeriodeConges
    * const periodeConges = await prisma.periodeConge.findMany()
    * ```
    */
  get periodeConge(): Prisma.PeriodeCongeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.demande`: Exposes CRUD operations for the **Demande** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Demandes
    * const demandes = await prisma.demande.findMany()
    * ```
    */
  get demande(): Prisma.DemandeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discussion`: Exposes CRUD operations for the **Discussion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discussions
    * const discussions = await prisma.discussion.findMany()
    * ```
    */
  get discussion(): Prisma.DiscussionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ficheDeConge`: Exposes CRUD operations for the **FicheDeConge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FicheDeConges
    * const ficheDeConges = await prisma.ficheDeConge.findMany()
    * ```
    */
  get ficheDeConge(): Prisma.FicheDeCongeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
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
    Direction: 'Direction',
    Service: 'Service',
    Personnel: 'Personnel',
    TypeConge: 'TypeConge',
    PeriodeConge: 'PeriodeConge',
    Demande: 'Demande',
    Discussion: 'Discussion',
    FicheDeConge: 'FicheDeConge'
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
      modelProps: "direction" | "service" | "personnel" | "typeConge" | "periodeConge" | "demande" | "discussion" | "ficheDeConge"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Direction: {
        payload: Prisma.$DirectionPayload<ExtArgs>
        fields: Prisma.DirectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DirectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DirectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload>
          }
          findFirst: {
            args: Prisma.DirectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DirectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload>
          }
          findMany: {
            args: Prisma.DirectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload>[]
          }
          create: {
            args: Prisma.DirectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload>
          }
          createMany: {
            args: Prisma.DirectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DirectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload>[]
          }
          delete: {
            args: Prisma.DirectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload>
          }
          update: {
            args: Prisma.DirectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload>
          }
          deleteMany: {
            args: Prisma.DirectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DirectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DirectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload>[]
          }
          upsert: {
            args: Prisma.DirectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectionPayload>
          }
          aggregate: {
            args: Prisma.DirectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirection>
          }
          groupBy: {
            args: Prisma.DirectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DirectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DirectionCountArgs<ExtArgs>
            result: $Utils.Optional<DirectionCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Personnel: {
        payload: Prisma.$PersonnelPayload<ExtArgs>
        fields: Prisma.PersonnelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonnelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonnelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload>
          }
          findFirst: {
            args: Prisma.PersonnelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonnelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload>
          }
          findMany: {
            args: Prisma.PersonnelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload>[]
          }
          create: {
            args: Prisma.PersonnelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload>
          }
          createMany: {
            args: Prisma.PersonnelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonnelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload>[]
          }
          delete: {
            args: Prisma.PersonnelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload>
          }
          update: {
            args: Prisma.PersonnelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload>
          }
          deleteMany: {
            args: Prisma.PersonnelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonnelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonnelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload>[]
          }
          upsert: {
            args: Prisma.PersonnelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonnelPayload>
          }
          aggregate: {
            args: Prisma.PersonnelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonnel>
          }
          groupBy: {
            args: Prisma.PersonnelGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonnelGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonnelCountArgs<ExtArgs>
            result: $Utils.Optional<PersonnelCountAggregateOutputType> | number
          }
        }
      }
      TypeConge: {
        payload: Prisma.$TypeCongePayload<ExtArgs>
        fields: Prisma.TypeCongeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeCongeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCongePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeCongeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCongePayload>
          }
          findFirst: {
            args: Prisma.TypeCongeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCongePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeCongeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCongePayload>
          }
          findMany: {
            args: Prisma.TypeCongeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCongePayload>[]
          }
          create: {
            args: Prisma.TypeCongeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCongePayload>
          }
          createMany: {
            args: Prisma.TypeCongeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TypeCongeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCongePayload>[]
          }
          delete: {
            args: Prisma.TypeCongeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCongePayload>
          }
          update: {
            args: Prisma.TypeCongeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCongePayload>
          }
          deleteMany: {
            args: Prisma.TypeCongeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypeCongeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TypeCongeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCongePayload>[]
          }
          upsert: {
            args: Prisma.TypeCongeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypeCongePayload>
          }
          aggregate: {
            args: Prisma.TypeCongeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTypeConge>
          }
          groupBy: {
            args: Prisma.TypeCongeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeCongeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeCongeCountArgs<ExtArgs>
            result: $Utils.Optional<TypeCongeCountAggregateOutputType> | number
          }
        }
      }
      PeriodeConge: {
        payload: Prisma.$PeriodeCongePayload<ExtArgs>
        fields: Prisma.PeriodeCongeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeriodeCongeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeCongePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeriodeCongeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeCongePayload>
          }
          findFirst: {
            args: Prisma.PeriodeCongeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeCongePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeriodeCongeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeCongePayload>
          }
          findMany: {
            args: Prisma.PeriodeCongeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeCongePayload>[]
          }
          create: {
            args: Prisma.PeriodeCongeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeCongePayload>
          }
          createMany: {
            args: Prisma.PeriodeCongeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeriodeCongeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeCongePayload>[]
          }
          delete: {
            args: Prisma.PeriodeCongeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeCongePayload>
          }
          update: {
            args: Prisma.PeriodeCongeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeCongePayload>
          }
          deleteMany: {
            args: Prisma.PeriodeCongeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeriodeCongeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeriodeCongeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeCongePayload>[]
          }
          upsert: {
            args: Prisma.PeriodeCongeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodeCongePayload>
          }
          aggregate: {
            args: Prisma.PeriodeCongeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeriodeConge>
          }
          groupBy: {
            args: Prisma.PeriodeCongeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeriodeCongeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeriodeCongeCountArgs<ExtArgs>
            result: $Utils.Optional<PeriodeCongeCountAggregateOutputType> | number
          }
        }
      }
      Demande: {
        payload: Prisma.$DemandePayload<ExtArgs>
        fields: Prisma.DemandeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemandeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemandeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          findFirst: {
            args: Prisma.DemandeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemandeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          findMany: {
            args: Prisma.DemandeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>[]
          }
          create: {
            args: Prisma.DemandeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          createMany: {
            args: Prisma.DemandeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DemandeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>[]
          }
          delete: {
            args: Prisma.DemandeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          update: {
            args: Prisma.DemandeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          deleteMany: {
            args: Prisma.DemandeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DemandeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DemandeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>[]
          }
          upsert: {
            args: Prisma.DemandeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          aggregate: {
            args: Prisma.DemandeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDemande>
          }
          groupBy: {
            args: Prisma.DemandeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DemandeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DemandeCountArgs<ExtArgs>
            result: $Utils.Optional<DemandeCountAggregateOutputType> | number
          }
        }
      }
      Discussion: {
        payload: Prisma.$DiscussionPayload<ExtArgs>
        fields: Prisma.DiscussionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscussionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscussionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          findFirst: {
            args: Prisma.DiscussionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscussionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          findMany: {
            args: Prisma.DiscussionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>[]
          }
          create: {
            args: Prisma.DiscussionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          createMany: {
            args: Prisma.DiscussionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscussionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>[]
          }
          delete: {
            args: Prisma.DiscussionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          update: {
            args: Prisma.DiscussionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          deleteMany: {
            args: Prisma.DiscussionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscussionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscussionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>[]
          }
          upsert: {
            args: Prisma.DiscussionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscussionPayload>
          }
          aggregate: {
            args: Prisma.DiscussionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscussion>
          }
          groupBy: {
            args: Prisma.DiscussionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscussionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscussionCountArgs<ExtArgs>
            result: $Utils.Optional<DiscussionCountAggregateOutputType> | number
          }
        }
      }
      FicheDeConge: {
        payload: Prisma.$FicheDeCongePayload<ExtArgs>
        fields: Prisma.FicheDeCongeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FicheDeCongeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FicheDeCongePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FicheDeCongeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FicheDeCongePayload>
          }
          findFirst: {
            args: Prisma.FicheDeCongeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FicheDeCongePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FicheDeCongeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FicheDeCongePayload>
          }
          findMany: {
            args: Prisma.FicheDeCongeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FicheDeCongePayload>[]
          }
          create: {
            args: Prisma.FicheDeCongeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FicheDeCongePayload>
          }
          createMany: {
            args: Prisma.FicheDeCongeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FicheDeCongeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FicheDeCongePayload>[]
          }
          delete: {
            args: Prisma.FicheDeCongeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FicheDeCongePayload>
          }
          update: {
            args: Prisma.FicheDeCongeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FicheDeCongePayload>
          }
          deleteMany: {
            args: Prisma.FicheDeCongeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FicheDeCongeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FicheDeCongeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FicheDeCongePayload>[]
          }
          upsert: {
            args: Prisma.FicheDeCongeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FicheDeCongePayload>
          }
          aggregate: {
            args: Prisma.FicheDeCongeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFicheDeConge>
          }
          groupBy: {
            args: Prisma.FicheDeCongeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FicheDeCongeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FicheDeCongeCountArgs<ExtArgs>
            result: $Utils.Optional<FicheDeCongeCountAggregateOutputType> | number
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
    direction?: DirectionOmit
    service?: ServiceOmit
    personnel?: PersonnelOmit
    typeConge?: TypeCongeOmit
    periodeConge?: PeriodeCongeOmit
    demande?: DemandeOmit
    discussion?: DiscussionOmit
    ficheDeConge?: FicheDeCongeOmit
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
   * Count Type DirectionCountOutputType
   */

  export type DirectionCountOutputType = {
    services: number
  }

  export type DirectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | DirectionCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * DirectionCountOutputType without action
   */
  export type DirectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectionCountOutputType
     */
    select?: DirectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DirectionCountOutputType without action
   */
  export type DirectionCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    personnels: number
    demandes: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personnels?: boolean | ServiceCountOutputTypeCountPersonnelsArgs
    demandes?: boolean | ServiceCountOutputTypeCountDemandesArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountPersonnelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonnelWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountDemandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeWhereInput
  }


  /**
   * Count Type PersonnelCountOutputType
   */

  export type PersonnelCountOutputType = {
    demandes: number
    fichesConge: number
    demandesEnCoursChef: number
  }

  export type PersonnelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandes?: boolean | PersonnelCountOutputTypeCountDemandesArgs
    fichesConge?: boolean | PersonnelCountOutputTypeCountFichesCongeArgs
    demandesEnCoursChef?: boolean | PersonnelCountOutputTypeCountDemandesEnCoursChefArgs
  }

  // Custom InputTypes
  /**
   * PersonnelCountOutputType without action
   */
  export type PersonnelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonnelCountOutputType
     */
    select?: PersonnelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonnelCountOutputType without action
   */
  export type PersonnelCountOutputTypeCountDemandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeWhereInput
  }

  /**
   * PersonnelCountOutputType without action
   */
  export type PersonnelCountOutputTypeCountFichesCongeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FicheDeCongeWhereInput
  }

  /**
   * PersonnelCountOutputType without action
   */
  export type PersonnelCountOutputTypeCountDemandesEnCoursChefArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeWhereInput
  }


  /**
   * Count Type TypeCongeCountOutputType
   */

  export type TypeCongeCountOutputType = {
    periodesConge: number
  }

  export type TypeCongeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    periodesConge?: boolean | TypeCongeCountOutputTypeCountPeriodesCongeArgs
  }

  // Custom InputTypes
  /**
   * TypeCongeCountOutputType without action
   */
  export type TypeCongeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCongeCountOutputType
     */
    select?: TypeCongeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeCongeCountOutputType without action
   */
  export type TypeCongeCountOutputTypeCountPeriodesCongeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeriodeCongeWhereInput
  }


  /**
   * Count Type PeriodeCongeCountOutputType
   */

  export type PeriodeCongeCountOutputType = {
    demandes: number
  }

  export type PeriodeCongeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demandes?: boolean | PeriodeCongeCountOutputTypeCountDemandesArgs
  }

  // Custom InputTypes
  /**
   * PeriodeCongeCountOutputType without action
   */
  export type PeriodeCongeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeCongeCountOutputType
     */
    select?: PeriodeCongeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeriodeCongeCountOutputType without action
   */
  export type PeriodeCongeCountOutputTypeCountDemandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeWhereInput
  }


  /**
   * Count Type DemandeCountOutputType
   */

  export type DemandeCountOutputType = {
    discussions: number
  }

  export type DemandeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discussions?: boolean | DemandeCountOutputTypeCountDiscussionsArgs
  }

  // Custom InputTypes
  /**
   * DemandeCountOutputType without action
   */
  export type DemandeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeCountOutputType
     */
    select?: DemandeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DemandeCountOutputType without action
   */
  export type DemandeCountOutputTypeCountDiscussionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Direction
   */

  export type AggregateDirection = {
    _count: DirectionCountAggregateOutputType | null
    _avg: DirectionAvgAggregateOutputType | null
    _sum: DirectionSumAggregateOutputType | null
    _min: DirectionMinAggregateOutputType | null
    _max: DirectionMaxAggregateOutputType | null
  }

  export type DirectionAvgAggregateOutputType = {
    nb_personnel: number | null
  }

  export type DirectionSumAggregateOutputType = {
    nb_personnel: number | null
  }

  export type DirectionMinAggregateOutputType = {
    id_direction: string | null
    code_direction: string | null
    nom_direction: string | null
    nb_personnel: number | null
    nom_directeur: string | null
    email_direction: string | null
    statut: string | null
    date_creation: Date | null
  }

  export type DirectionMaxAggregateOutputType = {
    id_direction: string | null
    code_direction: string | null
    nom_direction: string | null
    nb_personnel: number | null
    nom_directeur: string | null
    email_direction: string | null
    statut: string | null
    date_creation: Date | null
  }

  export type DirectionCountAggregateOutputType = {
    id_direction: number
    code_direction: number
    nom_direction: number
    nb_personnel: number
    nom_directeur: number
    email_direction: number
    statut: number
    date_creation: number
    _all: number
  }


  export type DirectionAvgAggregateInputType = {
    nb_personnel?: true
  }

  export type DirectionSumAggregateInputType = {
    nb_personnel?: true
  }

  export type DirectionMinAggregateInputType = {
    id_direction?: true
    code_direction?: true
    nom_direction?: true
    nb_personnel?: true
    nom_directeur?: true
    email_direction?: true
    statut?: true
    date_creation?: true
  }

  export type DirectionMaxAggregateInputType = {
    id_direction?: true
    code_direction?: true
    nom_direction?: true
    nb_personnel?: true
    nom_directeur?: true
    email_direction?: true
    statut?: true
    date_creation?: true
  }

  export type DirectionCountAggregateInputType = {
    id_direction?: true
    code_direction?: true
    nom_direction?: true
    nb_personnel?: true
    nom_directeur?: true
    email_direction?: true
    statut?: true
    date_creation?: true
    _all?: true
  }

  export type DirectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Direction to aggregate.
     */
    where?: DirectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directions to fetch.
     */
    orderBy?: DirectionOrderByWithRelationInput | DirectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Directions
    **/
    _count?: true | DirectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DirectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DirectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectionMaxAggregateInputType
  }

  export type GetDirectionAggregateType<T extends DirectionAggregateArgs> = {
        [P in keyof T & keyof AggregateDirection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirection[P]>
      : GetScalarType<T[P], AggregateDirection[P]>
  }




  export type DirectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectionWhereInput
    orderBy?: DirectionOrderByWithAggregationInput | DirectionOrderByWithAggregationInput[]
    by: DirectionScalarFieldEnum[] | DirectionScalarFieldEnum
    having?: DirectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectionCountAggregateInputType | true
    _avg?: DirectionAvgAggregateInputType
    _sum?: DirectionSumAggregateInputType
    _min?: DirectionMinAggregateInputType
    _max?: DirectionMaxAggregateInputType
  }

  export type DirectionGroupByOutputType = {
    id_direction: string
    code_direction: string
    nom_direction: string
    nb_personnel: number | null
    nom_directeur: string
    email_direction: string | null
    statut: string | null
    date_creation: Date
    _count: DirectionCountAggregateOutputType | null
    _avg: DirectionAvgAggregateOutputType | null
    _sum: DirectionSumAggregateOutputType | null
    _min: DirectionMinAggregateOutputType | null
    _max: DirectionMaxAggregateOutputType | null
  }

  type GetDirectionGroupByPayload<T extends DirectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectionGroupByOutputType[P]>
            : GetScalarType<T[P], DirectionGroupByOutputType[P]>
        }
      >
    >


  export type DirectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_direction?: boolean
    code_direction?: boolean
    nom_direction?: boolean
    nb_personnel?: boolean
    nom_directeur?: boolean
    email_direction?: boolean
    statut?: boolean
    date_creation?: boolean
    services?: boolean | Direction$servicesArgs<ExtArgs>
    _count?: boolean | DirectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["direction"]>

  export type DirectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_direction?: boolean
    code_direction?: boolean
    nom_direction?: boolean
    nb_personnel?: boolean
    nom_directeur?: boolean
    email_direction?: boolean
    statut?: boolean
    date_creation?: boolean
  }, ExtArgs["result"]["direction"]>

  export type DirectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_direction?: boolean
    code_direction?: boolean
    nom_direction?: boolean
    nb_personnel?: boolean
    nom_directeur?: boolean
    email_direction?: boolean
    statut?: boolean
    date_creation?: boolean
  }, ExtArgs["result"]["direction"]>

  export type DirectionSelectScalar = {
    id_direction?: boolean
    code_direction?: boolean
    nom_direction?: boolean
    nb_personnel?: boolean
    nom_directeur?: boolean
    email_direction?: boolean
    statut?: boolean
    date_creation?: boolean
  }

  export type DirectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_direction" | "code_direction" | "nom_direction" | "nb_personnel" | "nom_directeur" | "email_direction" | "statut" | "date_creation", ExtArgs["result"]["direction"]>
  export type DirectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Direction$servicesArgs<ExtArgs>
    _count?: boolean | DirectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DirectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DirectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DirectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Direction"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_direction: string
      code_direction: string
      nom_direction: string
      nb_personnel: number | null
      nom_directeur: string
      email_direction: string | null
      statut: string | null
      date_creation: Date
    }, ExtArgs["result"]["direction"]>
    composites: {}
  }

  type DirectionGetPayload<S extends boolean | null | undefined | DirectionDefaultArgs> = $Result.GetResult<Prisma.$DirectionPayload, S>

  type DirectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DirectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DirectionCountAggregateInputType | true
    }

  export interface DirectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Direction'], meta: { name: 'Direction' } }
    /**
     * Find zero or one Direction that matches the filter.
     * @param {DirectionFindUniqueArgs} args - Arguments to find a Direction
     * @example
     * // Get one Direction
     * const direction = await prisma.direction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DirectionFindUniqueArgs>(args: SelectSubset<T, DirectionFindUniqueArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Direction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DirectionFindUniqueOrThrowArgs} args - Arguments to find a Direction
     * @example
     * // Get one Direction
     * const direction = await prisma.direction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DirectionFindUniqueOrThrowArgs>(args: SelectSubset<T, DirectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionFindFirstArgs} args - Arguments to find a Direction
     * @example
     * // Get one Direction
     * const direction = await prisma.direction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DirectionFindFirstArgs>(args?: SelectSubset<T, DirectionFindFirstArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionFindFirstOrThrowArgs} args - Arguments to find a Direction
     * @example
     * // Get one Direction
     * const direction = await prisma.direction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DirectionFindFirstOrThrowArgs>(args?: SelectSubset<T, DirectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Directions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Directions
     * const directions = await prisma.direction.findMany()
     * 
     * // Get first 10 Directions
     * const directions = await prisma.direction.findMany({ take: 10 })
     * 
     * // Only select the `id_direction`
     * const directionWithId_directionOnly = await prisma.direction.findMany({ select: { id_direction: true } })
     * 
     */
    findMany<T extends DirectionFindManyArgs>(args?: SelectSubset<T, DirectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Direction.
     * @param {DirectionCreateArgs} args - Arguments to create a Direction.
     * @example
     * // Create one Direction
     * const Direction = await prisma.direction.create({
     *   data: {
     *     // ... data to create a Direction
     *   }
     * })
     * 
     */
    create<T extends DirectionCreateArgs>(args: SelectSubset<T, DirectionCreateArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Directions.
     * @param {DirectionCreateManyArgs} args - Arguments to create many Directions.
     * @example
     * // Create many Directions
     * const direction = await prisma.direction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DirectionCreateManyArgs>(args?: SelectSubset<T, DirectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Directions and returns the data saved in the database.
     * @param {DirectionCreateManyAndReturnArgs} args - Arguments to create many Directions.
     * @example
     * // Create many Directions
     * const direction = await prisma.direction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Directions and only return the `id_direction`
     * const directionWithId_directionOnly = await prisma.direction.createManyAndReturn({
     *   select: { id_direction: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DirectionCreateManyAndReturnArgs>(args?: SelectSubset<T, DirectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Direction.
     * @param {DirectionDeleteArgs} args - Arguments to delete one Direction.
     * @example
     * // Delete one Direction
     * const Direction = await prisma.direction.delete({
     *   where: {
     *     // ... filter to delete one Direction
     *   }
     * })
     * 
     */
    delete<T extends DirectionDeleteArgs>(args: SelectSubset<T, DirectionDeleteArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Direction.
     * @param {DirectionUpdateArgs} args - Arguments to update one Direction.
     * @example
     * // Update one Direction
     * const direction = await prisma.direction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DirectionUpdateArgs>(args: SelectSubset<T, DirectionUpdateArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Directions.
     * @param {DirectionDeleteManyArgs} args - Arguments to filter Directions to delete.
     * @example
     * // Delete a few Directions
     * const { count } = await prisma.direction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DirectionDeleteManyArgs>(args?: SelectSubset<T, DirectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Directions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Directions
     * const direction = await prisma.direction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DirectionUpdateManyArgs>(args: SelectSubset<T, DirectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Directions and returns the data updated in the database.
     * @param {DirectionUpdateManyAndReturnArgs} args - Arguments to update many Directions.
     * @example
     * // Update many Directions
     * const direction = await prisma.direction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Directions and only return the `id_direction`
     * const directionWithId_directionOnly = await prisma.direction.updateManyAndReturn({
     *   select: { id_direction: true },
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
    updateManyAndReturn<T extends DirectionUpdateManyAndReturnArgs>(args: SelectSubset<T, DirectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Direction.
     * @param {DirectionUpsertArgs} args - Arguments to update or create a Direction.
     * @example
     * // Update or create a Direction
     * const direction = await prisma.direction.upsert({
     *   create: {
     *     // ... data to create a Direction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Direction we want to update
     *   }
     * })
     */
    upsert<T extends DirectionUpsertArgs>(args: SelectSubset<T, DirectionUpsertArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Directions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionCountArgs} args - Arguments to filter Directions to count.
     * @example
     * // Count the number of Directions
     * const count = await prisma.direction.count({
     *   where: {
     *     // ... the filter for the Directions we want to count
     *   }
     * })
    **/
    count<T extends DirectionCountArgs>(
      args?: Subset<T, DirectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Direction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DirectionAggregateArgs>(args: Subset<T, DirectionAggregateArgs>): Prisma.PrismaPromise<GetDirectionAggregateType<T>>

    /**
     * Group by Direction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectionGroupByArgs} args - Group by arguments.
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
      T extends DirectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectionGroupByArgs['orderBy'] }
        : { orderBy?: DirectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DirectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Direction model
   */
  readonly fields: DirectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Direction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DirectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends Direction$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Direction$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Direction model
   */
  interface DirectionFieldRefs {
    readonly id_direction: FieldRef<"Direction", 'String'>
    readonly code_direction: FieldRef<"Direction", 'String'>
    readonly nom_direction: FieldRef<"Direction", 'String'>
    readonly nb_personnel: FieldRef<"Direction", 'Int'>
    readonly nom_directeur: FieldRef<"Direction", 'String'>
    readonly email_direction: FieldRef<"Direction", 'String'>
    readonly statut: FieldRef<"Direction", 'String'>
    readonly date_creation: FieldRef<"Direction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Direction findUnique
   */
  export type DirectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
    /**
     * Filter, which Direction to fetch.
     */
    where: DirectionWhereUniqueInput
  }

  /**
   * Direction findUniqueOrThrow
   */
  export type DirectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
    /**
     * Filter, which Direction to fetch.
     */
    where: DirectionWhereUniqueInput
  }

  /**
   * Direction findFirst
   */
  export type DirectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
    /**
     * Filter, which Direction to fetch.
     */
    where?: DirectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directions to fetch.
     */
    orderBy?: DirectionOrderByWithRelationInput | DirectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directions.
     */
    cursor?: DirectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directions.
     */
    distinct?: DirectionScalarFieldEnum | DirectionScalarFieldEnum[]
  }

  /**
   * Direction findFirstOrThrow
   */
  export type DirectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
    /**
     * Filter, which Direction to fetch.
     */
    where?: DirectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directions to fetch.
     */
    orderBy?: DirectionOrderByWithRelationInput | DirectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directions.
     */
    cursor?: DirectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directions.
     */
    distinct?: DirectionScalarFieldEnum | DirectionScalarFieldEnum[]
  }

  /**
   * Direction findMany
   */
  export type DirectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
    /**
     * Filter, which Directions to fetch.
     */
    where?: DirectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directions to fetch.
     */
    orderBy?: DirectionOrderByWithRelationInput | DirectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Directions.
     */
    cursor?: DirectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directions.
     */
    skip?: number
    distinct?: DirectionScalarFieldEnum | DirectionScalarFieldEnum[]
  }

  /**
   * Direction create
   */
  export type DirectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Direction.
     */
    data: XOR<DirectionCreateInput, DirectionUncheckedCreateInput>
  }

  /**
   * Direction createMany
   */
  export type DirectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Directions.
     */
    data: DirectionCreateManyInput | DirectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Direction createManyAndReturn
   */
  export type DirectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * The data used to create many Directions.
     */
    data: DirectionCreateManyInput | DirectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Direction update
   */
  export type DirectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Direction.
     */
    data: XOR<DirectionUpdateInput, DirectionUncheckedUpdateInput>
    /**
     * Choose, which Direction to update.
     */
    where: DirectionWhereUniqueInput
  }

  /**
   * Direction updateMany
   */
  export type DirectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Directions.
     */
    data: XOR<DirectionUpdateManyMutationInput, DirectionUncheckedUpdateManyInput>
    /**
     * Filter which Directions to update
     */
    where?: DirectionWhereInput
    /**
     * Limit how many Directions to update.
     */
    limit?: number
  }

  /**
   * Direction updateManyAndReturn
   */
  export type DirectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * The data used to update Directions.
     */
    data: XOR<DirectionUpdateManyMutationInput, DirectionUncheckedUpdateManyInput>
    /**
     * Filter which Directions to update
     */
    where?: DirectionWhereInput
    /**
     * Limit how many Directions to update.
     */
    limit?: number
  }

  /**
   * Direction upsert
   */
  export type DirectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Direction to update in case it exists.
     */
    where: DirectionWhereUniqueInput
    /**
     * In case the Direction found by the `where` argument doesn't exist, create a new Direction with this data.
     */
    create: XOR<DirectionCreateInput, DirectionUncheckedCreateInput>
    /**
     * In case the Direction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectionUpdateInput, DirectionUncheckedUpdateInput>
  }

  /**
   * Direction delete
   */
  export type DirectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
    /**
     * Filter which Direction to delete.
     */
    where: DirectionWhereUniqueInput
  }

  /**
   * Direction deleteMany
   */
  export type DirectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Directions to delete
     */
    where?: DirectionWhereInput
    /**
     * Limit how many Directions to delete.
     */
    limit?: number
  }

  /**
   * Direction.services
   */
  export type Direction$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Direction without action
   */
  export type DirectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direction
     */
    select?: DirectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direction
     */
    omit?: DirectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DirectionInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    nb_personnel: number | null
  }

  export type ServiceSumAggregateOutputType = {
    nb_personnel: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id_service: string | null
    code_service: string | null
    nom_service: string | null
    nb_personnel: number | null
    date_creation: Date | null
    id_direction: string | null
  }

  export type ServiceMaxAggregateOutputType = {
    id_service: string | null
    code_service: string | null
    nom_service: string | null
    nb_personnel: number | null
    date_creation: Date | null
    id_direction: string | null
  }

  export type ServiceCountAggregateOutputType = {
    id_service: number
    code_service: number
    nom_service: number
    nb_personnel: number
    date_creation: number
    id_direction: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    nb_personnel?: true
  }

  export type ServiceSumAggregateInputType = {
    nb_personnel?: true
  }

  export type ServiceMinAggregateInputType = {
    id_service?: true
    code_service?: true
    nom_service?: true
    nb_personnel?: true
    date_creation?: true
    id_direction?: true
  }

  export type ServiceMaxAggregateInputType = {
    id_service?: true
    code_service?: true
    nom_service?: true
    nb_personnel?: true
    date_creation?: true
    id_direction?: true
  }

  export type ServiceCountAggregateInputType = {
    id_service?: true
    code_service?: true
    nom_service?: true
    nb_personnel?: true
    date_creation?: true
    id_direction?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id_service: string
    code_service: string
    nom_service: string
    nb_personnel: number | null
    date_creation: Date
    id_direction: string
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_service?: boolean
    code_service?: boolean
    nom_service?: boolean
    nb_personnel?: boolean
    date_creation?: boolean
    id_direction?: boolean
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
    personnels?: boolean | Service$personnelsArgs<ExtArgs>
    demandes?: boolean | Service$demandesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_service?: boolean
    code_service?: boolean
    nom_service?: boolean
    nb_personnel?: boolean
    date_creation?: boolean
    id_direction?: boolean
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_service?: boolean
    code_service?: boolean
    nom_service?: boolean
    nb_personnel?: boolean
    date_creation?: boolean
    id_direction?: boolean
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id_service?: boolean
    code_service?: boolean
    nom_service?: boolean
    nb_personnel?: boolean
    date_creation?: boolean
    id_direction?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_service" | "code_service" | "nom_service" | "nb_personnel" | "date_creation" | "id_direction", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
    personnels?: boolean | Service$personnelsArgs<ExtArgs>
    demandes?: boolean | Service$demandesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direction?: boolean | DirectionDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      direction: Prisma.$DirectionPayload<ExtArgs>
      personnels: Prisma.$PersonnelPayload<ExtArgs>[]
      demandes: Prisma.$DemandePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_service: string
      code_service: string
      nom_service: string
      nb_personnel: number | null
      date_creation: Date
      id_direction: string
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id_service`
     * const serviceWithId_serviceOnly = await prisma.service.findMany({ select: { id_service: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id_service`
     * const serviceWithId_serviceOnly = await prisma.service.createManyAndReturn({
     *   select: { id_service: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id_service`
     * const serviceWithId_serviceOnly = await prisma.service.updateManyAndReturn({
     *   select: { id_service: true },
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
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    direction<T extends DirectionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectionDefaultArgs<ExtArgs>>): Prisma__DirectionClient<$Result.GetResult<Prisma.$DirectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    personnels<T extends Service$personnelsArgs<ExtArgs> = {}>(args?: Subset<T, Service$personnelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    demandes<T extends Service$demandesArgs<ExtArgs> = {}>(args?: Subset<T, Service$demandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id_service: FieldRef<"Service", 'String'>
    readonly code_service: FieldRef<"Service", 'String'>
    readonly nom_service: FieldRef<"Service", 'String'>
    readonly nb_personnel: FieldRef<"Service", 'Int'>
    readonly date_creation: FieldRef<"Service", 'DateTime'>
    readonly id_direction: FieldRef<"Service", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.personnels
   */
  export type Service$personnelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    where?: PersonnelWhereInput
    orderBy?: PersonnelOrderByWithRelationInput | PersonnelOrderByWithRelationInput[]
    cursor?: PersonnelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonnelScalarFieldEnum | PersonnelScalarFieldEnum[]
  }

  /**
   * Service.demandes
   */
  export type Service$demandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    where?: DemandeWhereInput
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    cursor?: DemandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Personnel
   */

  export type AggregatePersonnel = {
    _count: PersonnelCountAggregateOutputType | null
    _min: PersonnelMinAggregateOutputType | null
    _max: PersonnelMaxAggregateOutputType | null
  }

  export type PersonnelMinAggregateOutputType = {
    id_personnel: string | null
    nom_personnel: string | null
    prenom_personnel: string | null
    email_personnel: string | null
    email_travail: string | null
    password: string | null
    date_naissance: Date | null
    matricule_personnel: string | null
    telephone_travail: string | null
    telephone_personnel: string | null
    ville_personnel: string | null
    adresse_personnel: string | null
    codepostal: string | null
    pays_personnel: string | null
    telephone_contact_urgence: string | null
    nom_contact_urgence: string | null
    role_personnel: $Enums.RolePersonnel | null
    type_personnel: $Enums.TypePersonnel | null
    date_creation: Date | null
    id_service: string | null
    is_active: boolean | null
  }

  export type PersonnelMaxAggregateOutputType = {
    id_personnel: string | null
    nom_personnel: string | null
    prenom_personnel: string | null
    email_personnel: string | null
    email_travail: string | null
    password: string | null
    date_naissance: Date | null
    matricule_personnel: string | null
    telephone_travail: string | null
    telephone_personnel: string | null
    ville_personnel: string | null
    adresse_personnel: string | null
    codepostal: string | null
    pays_personnel: string | null
    telephone_contact_urgence: string | null
    nom_contact_urgence: string | null
    role_personnel: $Enums.RolePersonnel | null
    type_personnel: $Enums.TypePersonnel | null
    date_creation: Date | null
    id_service: string | null
    is_active: boolean | null
  }

  export type PersonnelCountAggregateOutputType = {
    id_personnel: number
    nom_personnel: number
    prenom_personnel: number
    email_personnel: number
    email_travail: number
    password: number
    date_naissance: number
    matricule_personnel: number
    telephone_travail: number
    telephone_personnel: number
    ville_personnel: number
    adresse_personnel: number
    codepostal: number
    pays_personnel: number
    telephone_contact_urgence: number
    nom_contact_urgence: number
    role_personnel: number
    type_personnel: number
    date_creation: number
    id_service: number
    is_active: number
    _all: number
  }


  export type PersonnelMinAggregateInputType = {
    id_personnel?: true
    nom_personnel?: true
    prenom_personnel?: true
    email_personnel?: true
    email_travail?: true
    password?: true
    date_naissance?: true
    matricule_personnel?: true
    telephone_travail?: true
    telephone_personnel?: true
    ville_personnel?: true
    adresse_personnel?: true
    codepostal?: true
    pays_personnel?: true
    telephone_contact_urgence?: true
    nom_contact_urgence?: true
    role_personnel?: true
    type_personnel?: true
    date_creation?: true
    id_service?: true
    is_active?: true
  }

  export type PersonnelMaxAggregateInputType = {
    id_personnel?: true
    nom_personnel?: true
    prenom_personnel?: true
    email_personnel?: true
    email_travail?: true
    password?: true
    date_naissance?: true
    matricule_personnel?: true
    telephone_travail?: true
    telephone_personnel?: true
    ville_personnel?: true
    adresse_personnel?: true
    codepostal?: true
    pays_personnel?: true
    telephone_contact_urgence?: true
    nom_contact_urgence?: true
    role_personnel?: true
    type_personnel?: true
    date_creation?: true
    id_service?: true
    is_active?: true
  }

  export type PersonnelCountAggregateInputType = {
    id_personnel?: true
    nom_personnel?: true
    prenom_personnel?: true
    email_personnel?: true
    email_travail?: true
    password?: true
    date_naissance?: true
    matricule_personnel?: true
    telephone_travail?: true
    telephone_personnel?: true
    ville_personnel?: true
    adresse_personnel?: true
    codepostal?: true
    pays_personnel?: true
    telephone_contact_urgence?: true
    nom_contact_urgence?: true
    role_personnel?: true
    type_personnel?: true
    date_creation?: true
    id_service?: true
    is_active?: true
    _all?: true
  }

  export type PersonnelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personnel to aggregate.
     */
    where?: PersonnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personnel to fetch.
     */
    orderBy?: PersonnelOrderByWithRelationInput | PersonnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personnel from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personnel.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Personnel
    **/
    _count?: true | PersonnelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonnelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonnelMaxAggregateInputType
  }

  export type GetPersonnelAggregateType<T extends PersonnelAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonnel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonnel[P]>
      : GetScalarType<T[P], AggregatePersonnel[P]>
  }




  export type PersonnelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonnelWhereInput
    orderBy?: PersonnelOrderByWithAggregationInput | PersonnelOrderByWithAggregationInput[]
    by: PersonnelScalarFieldEnum[] | PersonnelScalarFieldEnum
    having?: PersonnelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonnelCountAggregateInputType | true
    _min?: PersonnelMinAggregateInputType
    _max?: PersonnelMaxAggregateInputType
  }

  export type PersonnelGroupByOutputType = {
    id_personnel: string
    nom_personnel: string
    prenom_personnel: string
    email_personnel: string | null
    email_travail: string | null
    password: string | null
    date_naissance: Date | null
    matricule_personnel: string | null
    telephone_travail: string | null
    telephone_personnel: string | null
    ville_personnel: string | null
    adresse_personnel: string | null
    codepostal: string | null
    pays_personnel: string | null
    telephone_contact_urgence: string | null
    nom_contact_urgence: string | null
    role_personnel: $Enums.RolePersonnel
    type_personnel: $Enums.TypePersonnel
    date_creation: Date
    id_service: string
    is_active: boolean
    _count: PersonnelCountAggregateOutputType | null
    _min: PersonnelMinAggregateOutputType | null
    _max: PersonnelMaxAggregateOutputType | null
  }

  type GetPersonnelGroupByPayload<T extends PersonnelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonnelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonnelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonnelGroupByOutputType[P]>
            : GetScalarType<T[P], PersonnelGroupByOutputType[P]>
        }
      >
    >


  export type PersonnelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_personnel?: boolean
    nom_personnel?: boolean
    prenom_personnel?: boolean
    email_personnel?: boolean
    email_travail?: boolean
    password?: boolean
    date_naissance?: boolean
    matricule_personnel?: boolean
    telephone_travail?: boolean
    telephone_personnel?: boolean
    ville_personnel?: boolean
    adresse_personnel?: boolean
    codepostal?: boolean
    pays_personnel?: boolean
    telephone_contact_urgence?: boolean
    nom_contact_urgence?: boolean
    role_personnel?: boolean
    type_personnel?: boolean
    date_creation?: boolean
    id_service?: boolean
    is_active?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    demandes?: boolean | Personnel$demandesArgs<ExtArgs>
    fichesConge?: boolean | Personnel$fichesCongeArgs<ExtArgs>
    demandesEnCoursChef?: boolean | Personnel$demandesEnCoursChefArgs<ExtArgs>
    _count?: boolean | PersonnelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personnel"]>

  export type PersonnelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_personnel?: boolean
    nom_personnel?: boolean
    prenom_personnel?: boolean
    email_personnel?: boolean
    email_travail?: boolean
    password?: boolean
    date_naissance?: boolean
    matricule_personnel?: boolean
    telephone_travail?: boolean
    telephone_personnel?: boolean
    ville_personnel?: boolean
    adresse_personnel?: boolean
    codepostal?: boolean
    pays_personnel?: boolean
    telephone_contact_urgence?: boolean
    nom_contact_urgence?: boolean
    role_personnel?: boolean
    type_personnel?: boolean
    date_creation?: boolean
    id_service?: boolean
    is_active?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personnel"]>

  export type PersonnelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_personnel?: boolean
    nom_personnel?: boolean
    prenom_personnel?: boolean
    email_personnel?: boolean
    email_travail?: boolean
    password?: boolean
    date_naissance?: boolean
    matricule_personnel?: boolean
    telephone_travail?: boolean
    telephone_personnel?: boolean
    ville_personnel?: boolean
    adresse_personnel?: boolean
    codepostal?: boolean
    pays_personnel?: boolean
    telephone_contact_urgence?: boolean
    nom_contact_urgence?: boolean
    role_personnel?: boolean
    type_personnel?: boolean
    date_creation?: boolean
    id_service?: boolean
    is_active?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personnel"]>

  export type PersonnelSelectScalar = {
    id_personnel?: boolean
    nom_personnel?: boolean
    prenom_personnel?: boolean
    email_personnel?: boolean
    email_travail?: boolean
    password?: boolean
    date_naissance?: boolean
    matricule_personnel?: boolean
    telephone_travail?: boolean
    telephone_personnel?: boolean
    ville_personnel?: boolean
    adresse_personnel?: boolean
    codepostal?: boolean
    pays_personnel?: boolean
    telephone_contact_urgence?: boolean
    nom_contact_urgence?: boolean
    role_personnel?: boolean
    type_personnel?: boolean
    date_creation?: boolean
    id_service?: boolean
    is_active?: boolean
  }

  export type PersonnelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_personnel" | "nom_personnel" | "prenom_personnel" | "email_personnel" | "email_travail" | "password" | "date_naissance" | "matricule_personnel" | "telephone_travail" | "telephone_personnel" | "ville_personnel" | "adresse_personnel" | "codepostal" | "pays_personnel" | "telephone_contact_urgence" | "nom_contact_urgence" | "role_personnel" | "type_personnel" | "date_creation" | "id_service" | "is_active", ExtArgs["result"]["personnel"]>
  export type PersonnelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    demandes?: boolean | Personnel$demandesArgs<ExtArgs>
    fichesConge?: boolean | Personnel$fichesCongeArgs<ExtArgs>
    demandesEnCoursChef?: boolean | Personnel$demandesEnCoursChefArgs<ExtArgs>
    _count?: boolean | PersonnelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonnelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type PersonnelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $PersonnelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Personnel"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      demandes: Prisma.$DemandePayload<ExtArgs>[]
      fichesConge: Prisma.$FicheDeCongePayload<ExtArgs>[]
      demandesEnCoursChef: Prisma.$DemandePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_personnel: string
      nom_personnel: string
      prenom_personnel: string
      email_personnel: string | null
      email_travail: string | null
      password: string | null
      date_naissance: Date | null
      matricule_personnel: string | null
      telephone_travail: string | null
      telephone_personnel: string | null
      ville_personnel: string | null
      adresse_personnel: string | null
      codepostal: string | null
      pays_personnel: string | null
      telephone_contact_urgence: string | null
      nom_contact_urgence: string | null
      role_personnel: $Enums.RolePersonnel
      type_personnel: $Enums.TypePersonnel
      date_creation: Date
      id_service: string
      is_active: boolean
    }, ExtArgs["result"]["personnel"]>
    composites: {}
  }

  type PersonnelGetPayload<S extends boolean | null | undefined | PersonnelDefaultArgs> = $Result.GetResult<Prisma.$PersonnelPayload, S>

  type PersonnelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonnelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonnelCountAggregateInputType | true
    }

  export interface PersonnelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Personnel'], meta: { name: 'Personnel' } }
    /**
     * Find zero or one Personnel that matches the filter.
     * @param {PersonnelFindUniqueArgs} args - Arguments to find a Personnel
     * @example
     * // Get one Personnel
     * const personnel = await prisma.personnel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonnelFindUniqueArgs>(args: SelectSubset<T, PersonnelFindUniqueArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Personnel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonnelFindUniqueOrThrowArgs} args - Arguments to find a Personnel
     * @example
     * // Get one Personnel
     * const personnel = await prisma.personnel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonnelFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonnelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personnel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnelFindFirstArgs} args - Arguments to find a Personnel
     * @example
     * // Get one Personnel
     * const personnel = await prisma.personnel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonnelFindFirstArgs>(args?: SelectSubset<T, PersonnelFindFirstArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Personnel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnelFindFirstOrThrowArgs} args - Arguments to find a Personnel
     * @example
     * // Get one Personnel
     * const personnel = await prisma.personnel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonnelFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonnelFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Personnel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personnel
     * const personnel = await prisma.personnel.findMany()
     * 
     * // Get first 10 Personnel
     * const personnel = await prisma.personnel.findMany({ take: 10 })
     * 
     * // Only select the `id_personnel`
     * const personnelWithId_personnelOnly = await prisma.personnel.findMany({ select: { id_personnel: true } })
     * 
     */
    findMany<T extends PersonnelFindManyArgs>(args?: SelectSubset<T, PersonnelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Personnel.
     * @param {PersonnelCreateArgs} args - Arguments to create a Personnel.
     * @example
     * // Create one Personnel
     * const Personnel = await prisma.personnel.create({
     *   data: {
     *     // ... data to create a Personnel
     *   }
     * })
     * 
     */
    create<T extends PersonnelCreateArgs>(args: SelectSubset<T, PersonnelCreateArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Personnel.
     * @param {PersonnelCreateManyArgs} args - Arguments to create many Personnel.
     * @example
     * // Create many Personnel
     * const personnel = await prisma.personnel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonnelCreateManyArgs>(args?: SelectSubset<T, PersonnelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Personnel and returns the data saved in the database.
     * @param {PersonnelCreateManyAndReturnArgs} args - Arguments to create many Personnel.
     * @example
     * // Create many Personnel
     * const personnel = await prisma.personnel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Personnel and only return the `id_personnel`
     * const personnelWithId_personnelOnly = await prisma.personnel.createManyAndReturn({
     *   select: { id_personnel: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonnelCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonnelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Personnel.
     * @param {PersonnelDeleteArgs} args - Arguments to delete one Personnel.
     * @example
     * // Delete one Personnel
     * const Personnel = await prisma.personnel.delete({
     *   where: {
     *     // ... filter to delete one Personnel
     *   }
     * })
     * 
     */
    delete<T extends PersonnelDeleteArgs>(args: SelectSubset<T, PersonnelDeleteArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Personnel.
     * @param {PersonnelUpdateArgs} args - Arguments to update one Personnel.
     * @example
     * // Update one Personnel
     * const personnel = await prisma.personnel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonnelUpdateArgs>(args: SelectSubset<T, PersonnelUpdateArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Personnel.
     * @param {PersonnelDeleteManyArgs} args - Arguments to filter Personnel to delete.
     * @example
     * // Delete a few Personnel
     * const { count } = await prisma.personnel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonnelDeleteManyArgs>(args?: SelectSubset<T, PersonnelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personnel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personnel
     * const personnel = await prisma.personnel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonnelUpdateManyArgs>(args: SelectSubset<T, PersonnelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Personnel and returns the data updated in the database.
     * @param {PersonnelUpdateManyAndReturnArgs} args - Arguments to update many Personnel.
     * @example
     * // Update many Personnel
     * const personnel = await prisma.personnel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Personnel and only return the `id_personnel`
     * const personnelWithId_personnelOnly = await prisma.personnel.updateManyAndReturn({
     *   select: { id_personnel: true },
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
    updateManyAndReturn<T extends PersonnelUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonnelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Personnel.
     * @param {PersonnelUpsertArgs} args - Arguments to update or create a Personnel.
     * @example
     * // Update or create a Personnel
     * const personnel = await prisma.personnel.upsert({
     *   create: {
     *     // ... data to create a Personnel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personnel we want to update
     *   }
     * })
     */
    upsert<T extends PersonnelUpsertArgs>(args: SelectSubset<T, PersonnelUpsertArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Personnel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnelCountArgs} args - Arguments to filter Personnel to count.
     * @example
     * // Count the number of Personnel
     * const count = await prisma.personnel.count({
     *   where: {
     *     // ... the filter for the Personnel we want to count
     *   }
     * })
    **/
    count<T extends PersonnelCountArgs>(
      args?: Subset<T, PersonnelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonnelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Personnel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonnelAggregateArgs>(args: Subset<T, PersonnelAggregateArgs>): Prisma.PrismaPromise<GetPersonnelAggregateType<T>>

    /**
     * Group by Personnel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonnelGroupByArgs} args - Group by arguments.
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
      T extends PersonnelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonnelGroupByArgs['orderBy'] }
        : { orderBy?: PersonnelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PersonnelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonnelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Personnel model
   */
  readonly fields: PersonnelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Personnel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonnelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    demandes<T extends Personnel$demandesArgs<ExtArgs> = {}>(args?: Subset<T, Personnel$demandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fichesConge<T extends Personnel$fichesCongeArgs<ExtArgs> = {}>(args?: Subset<T, Personnel$fichesCongeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FicheDeCongePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    demandesEnCoursChef<T extends Personnel$demandesEnCoursChefArgs<ExtArgs> = {}>(args?: Subset<T, Personnel$demandesEnCoursChefArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Personnel model
   */
  interface PersonnelFieldRefs {
    readonly id_personnel: FieldRef<"Personnel", 'String'>
    readonly nom_personnel: FieldRef<"Personnel", 'String'>
    readonly prenom_personnel: FieldRef<"Personnel", 'String'>
    readonly email_personnel: FieldRef<"Personnel", 'String'>
    readonly email_travail: FieldRef<"Personnel", 'String'>
    readonly password: FieldRef<"Personnel", 'String'>
    readonly date_naissance: FieldRef<"Personnel", 'DateTime'>
    readonly matricule_personnel: FieldRef<"Personnel", 'String'>
    readonly telephone_travail: FieldRef<"Personnel", 'String'>
    readonly telephone_personnel: FieldRef<"Personnel", 'String'>
    readonly ville_personnel: FieldRef<"Personnel", 'String'>
    readonly adresse_personnel: FieldRef<"Personnel", 'String'>
    readonly codepostal: FieldRef<"Personnel", 'String'>
    readonly pays_personnel: FieldRef<"Personnel", 'String'>
    readonly telephone_contact_urgence: FieldRef<"Personnel", 'String'>
    readonly nom_contact_urgence: FieldRef<"Personnel", 'String'>
    readonly role_personnel: FieldRef<"Personnel", 'RolePersonnel'>
    readonly type_personnel: FieldRef<"Personnel", 'TypePersonnel'>
    readonly date_creation: FieldRef<"Personnel", 'DateTime'>
    readonly id_service: FieldRef<"Personnel", 'String'>
    readonly is_active: FieldRef<"Personnel", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Personnel findUnique
   */
  export type PersonnelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    /**
     * Filter, which Personnel to fetch.
     */
    where: PersonnelWhereUniqueInput
  }

  /**
   * Personnel findUniqueOrThrow
   */
  export type PersonnelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    /**
     * Filter, which Personnel to fetch.
     */
    where: PersonnelWhereUniqueInput
  }

  /**
   * Personnel findFirst
   */
  export type PersonnelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    /**
     * Filter, which Personnel to fetch.
     */
    where?: PersonnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personnel to fetch.
     */
    orderBy?: PersonnelOrderByWithRelationInput | PersonnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personnel.
     */
    cursor?: PersonnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personnel from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personnel.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personnel.
     */
    distinct?: PersonnelScalarFieldEnum | PersonnelScalarFieldEnum[]
  }

  /**
   * Personnel findFirstOrThrow
   */
  export type PersonnelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    /**
     * Filter, which Personnel to fetch.
     */
    where?: PersonnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personnel to fetch.
     */
    orderBy?: PersonnelOrderByWithRelationInput | PersonnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Personnel.
     */
    cursor?: PersonnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personnel from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personnel.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Personnel.
     */
    distinct?: PersonnelScalarFieldEnum | PersonnelScalarFieldEnum[]
  }

  /**
   * Personnel findMany
   */
  export type PersonnelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    /**
     * Filter, which Personnel to fetch.
     */
    where?: PersonnelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Personnel to fetch.
     */
    orderBy?: PersonnelOrderByWithRelationInput | PersonnelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Personnel.
     */
    cursor?: PersonnelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Personnel from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Personnel.
     */
    skip?: number
    distinct?: PersonnelScalarFieldEnum | PersonnelScalarFieldEnum[]
  }

  /**
   * Personnel create
   */
  export type PersonnelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    /**
     * The data needed to create a Personnel.
     */
    data: XOR<PersonnelCreateInput, PersonnelUncheckedCreateInput>
  }

  /**
   * Personnel createMany
   */
  export type PersonnelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Personnel.
     */
    data: PersonnelCreateManyInput | PersonnelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Personnel createManyAndReturn
   */
  export type PersonnelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * The data used to create many Personnel.
     */
    data: PersonnelCreateManyInput | PersonnelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Personnel update
   */
  export type PersonnelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    /**
     * The data needed to update a Personnel.
     */
    data: XOR<PersonnelUpdateInput, PersonnelUncheckedUpdateInput>
    /**
     * Choose, which Personnel to update.
     */
    where: PersonnelWhereUniqueInput
  }

  /**
   * Personnel updateMany
   */
  export type PersonnelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Personnel.
     */
    data: XOR<PersonnelUpdateManyMutationInput, PersonnelUncheckedUpdateManyInput>
    /**
     * Filter which Personnel to update
     */
    where?: PersonnelWhereInput
    /**
     * Limit how many Personnel to update.
     */
    limit?: number
  }

  /**
   * Personnel updateManyAndReturn
   */
  export type PersonnelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * The data used to update Personnel.
     */
    data: XOR<PersonnelUpdateManyMutationInput, PersonnelUncheckedUpdateManyInput>
    /**
     * Filter which Personnel to update
     */
    where?: PersonnelWhereInput
    /**
     * Limit how many Personnel to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Personnel upsert
   */
  export type PersonnelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    /**
     * The filter to search for the Personnel to update in case it exists.
     */
    where: PersonnelWhereUniqueInput
    /**
     * In case the Personnel found by the `where` argument doesn't exist, create a new Personnel with this data.
     */
    create: XOR<PersonnelCreateInput, PersonnelUncheckedCreateInput>
    /**
     * In case the Personnel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonnelUpdateInput, PersonnelUncheckedUpdateInput>
  }

  /**
   * Personnel delete
   */
  export type PersonnelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    /**
     * Filter which Personnel to delete.
     */
    where: PersonnelWhereUniqueInput
  }

  /**
   * Personnel deleteMany
   */
  export type PersonnelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Personnel to delete
     */
    where?: PersonnelWhereInput
    /**
     * Limit how many Personnel to delete.
     */
    limit?: number
  }

  /**
   * Personnel.demandes
   */
  export type Personnel$demandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    where?: DemandeWhereInput
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    cursor?: DemandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Personnel.fichesConge
   */
  export type Personnel$fichesCongeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FicheDeConge
     */
    select?: FicheDeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FicheDeConge
     */
    omit?: FicheDeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FicheDeCongeInclude<ExtArgs> | null
    where?: FicheDeCongeWhereInput
    orderBy?: FicheDeCongeOrderByWithRelationInput | FicheDeCongeOrderByWithRelationInput[]
    cursor?: FicheDeCongeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FicheDeCongeScalarFieldEnum | FicheDeCongeScalarFieldEnum[]
  }

  /**
   * Personnel.demandesEnCoursChef
   */
  export type Personnel$demandesEnCoursChefArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    where?: DemandeWhereInput
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    cursor?: DemandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Personnel without action
   */
  export type PersonnelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
  }


  /**
   * Model TypeConge
   */

  export type AggregateTypeConge = {
    _count: TypeCongeCountAggregateOutputType | null
    _min: TypeCongeMinAggregateOutputType | null
    _max: TypeCongeMaxAggregateOutputType | null
  }

  export type TypeCongeMinAggregateOutputType = {
    id_typeconge: string | null
    libelle_typeconge: string | null
    date_creation: Date | null
    is_active: boolean | null
  }

  export type TypeCongeMaxAggregateOutputType = {
    id_typeconge: string | null
    libelle_typeconge: string | null
    date_creation: Date | null
    is_active: boolean | null
  }

  export type TypeCongeCountAggregateOutputType = {
    id_typeconge: number
    libelle_typeconge: number
    date_creation: number
    is_active: number
    _all: number
  }


  export type TypeCongeMinAggregateInputType = {
    id_typeconge?: true
    libelle_typeconge?: true
    date_creation?: true
    is_active?: true
  }

  export type TypeCongeMaxAggregateInputType = {
    id_typeconge?: true
    libelle_typeconge?: true
    date_creation?: true
    is_active?: true
  }

  export type TypeCongeCountAggregateInputType = {
    id_typeconge?: true
    libelle_typeconge?: true
    date_creation?: true
    is_active?: true
    _all?: true
  }

  export type TypeCongeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeConge to aggregate.
     */
    where?: TypeCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeConges to fetch.
     */
    orderBy?: TypeCongeOrderByWithRelationInput | TypeCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeConges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TypeConges
    **/
    _count?: true | TypeCongeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeCongeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeCongeMaxAggregateInputType
  }

  export type GetTypeCongeAggregateType<T extends TypeCongeAggregateArgs> = {
        [P in keyof T & keyof AggregateTypeConge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypeConge[P]>
      : GetScalarType<T[P], AggregateTypeConge[P]>
  }




  export type TypeCongeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeCongeWhereInput
    orderBy?: TypeCongeOrderByWithAggregationInput | TypeCongeOrderByWithAggregationInput[]
    by: TypeCongeScalarFieldEnum[] | TypeCongeScalarFieldEnum
    having?: TypeCongeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeCongeCountAggregateInputType | true
    _min?: TypeCongeMinAggregateInputType
    _max?: TypeCongeMaxAggregateInputType
  }

  export type TypeCongeGroupByOutputType = {
    id_typeconge: string
    libelle_typeconge: string
    date_creation: Date
    is_active: boolean
    _count: TypeCongeCountAggregateOutputType | null
    _min: TypeCongeMinAggregateOutputType | null
    _max: TypeCongeMaxAggregateOutputType | null
  }

  type GetTypeCongeGroupByPayload<T extends TypeCongeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeCongeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeCongeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeCongeGroupByOutputType[P]>
            : GetScalarType<T[P], TypeCongeGroupByOutputType[P]>
        }
      >
    >


  export type TypeCongeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_typeconge?: boolean
    libelle_typeconge?: boolean
    date_creation?: boolean
    is_active?: boolean
    periodesConge?: boolean | TypeConge$periodesCongeArgs<ExtArgs>
    _count?: boolean | TypeCongeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["typeConge"]>

  export type TypeCongeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_typeconge?: boolean
    libelle_typeconge?: boolean
    date_creation?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["typeConge"]>

  export type TypeCongeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_typeconge?: boolean
    libelle_typeconge?: boolean
    date_creation?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["typeConge"]>

  export type TypeCongeSelectScalar = {
    id_typeconge?: boolean
    libelle_typeconge?: boolean
    date_creation?: boolean
    is_active?: boolean
  }

  export type TypeCongeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_typeconge" | "libelle_typeconge" | "date_creation" | "is_active", ExtArgs["result"]["typeConge"]>
  export type TypeCongeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    periodesConge?: boolean | TypeConge$periodesCongeArgs<ExtArgs>
    _count?: boolean | TypeCongeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TypeCongeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TypeCongeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TypeCongePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TypeConge"
    objects: {
      periodesConge: Prisma.$PeriodeCongePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_typeconge: string
      libelle_typeconge: string
      date_creation: Date
      is_active: boolean
    }, ExtArgs["result"]["typeConge"]>
    composites: {}
  }

  type TypeCongeGetPayload<S extends boolean | null | undefined | TypeCongeDefaultArgs> = $Result.GetResult<Prisma.$TypeCongePayload, S>

  type TypeCongeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TypeCongeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypeCongeCountAggregateInputType | true
    }

  export interface TypeCongeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TypeConge'], meta: { name: 'TypeConge' } }
    /**
     * Find zero or one TypeConge that matches the filter.
     * @param {TypeCongeFindUniqueArgs} args - Arguments to find a TypeConge
     * @example
     * // Get one TypeConge
     * const typeConge = await prisma.typeConge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeCongeFindUniqueArgs>(args: SelectSubset<T, TypeCongeFindUniqueArgs<ExtArgs>>): Prisma__TypeCongeClient<$Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TypeConge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeCongeFindUniqueOrThrowArgs} args - Arguments to find a TypeConge
     * @example
     * // Get one TypeConge
     * const typeConge = await prisma.typeConge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeCongeFindUniqueOrThrowArgs>(args: SelectSubset<T, TypeCongeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypeCongeClient<$Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TypeConge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCongeFindFirstArgs} args - Arguments to find a TypeConge
     * @example
     * // Get one TypeConge
     * const typeConge = await prisma.typeConge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeCongeFindFirstArgs>(args?: SelectSubset<T, TypeCongeFindFirstArgs<ExtArgs>>): Prisma__TypeCongeClient<$Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TypeConge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCongeFindFirstOrThrowArgs} args - Arguments to find a TypeConge
     * @example
     * // Get one TypeConge
     * const typeConge = await prisma.typeConge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeCongeFindFirstOrThrowArgs>(args?: SelectSubset<T, TypeCongeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypeCongeClient<$Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TypeConges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCongeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TypeConges
     * const typeConges = await prisma.typeConge.findMany()
     * 
     * // Get first 10 TypeConges
     * const typeConges = await prisma.typeConge.findMany({ take: 10 })
     * 
     * // Only select the `id_typeconge`
     * const typeCongeWithId_typecongeOnly = await prisma.typeConge.findMany({ select: { id_typeconge: true } })
     * 
     */
    findMany<T extends TypeCongeFindManyArgs>(args?: SelectSubset<T, TypeCongeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TypeConge.
     * @param {TypeCongeCreateArgs} args - Arguments to create a TypeConge.
     * @example
     * // Create one TypeConge
     * const TypeConge = await prisma.typeConge.create({
     *   data: {
     *     // ... data to create a TypeConge
     *   }
     * })
     * 
     */
    create<T extends TypeCongeCreateArgs>(args: SelectSubset<T, TypeCongeCreateArgs<ExtArgs>>): Prisma__TypeCongeClient<$Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TypeConges.
     * @param {TypeCongeCreateManyArgs} args - Arguments to create many TypeConges.
     * @example
     * // Create many TypeConges
     * const typeConge = await prisma.typeConge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypeCongeCreateManyArgs>(args?: SelectSubset<T, TypeCongeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TypeConges and returns the data saved in the database.
     * @param {TypeCongeCreateManyAndReturnArgs} args - Arguments to create many TypeConges.
     * @example
     * // Create many TypeConges
     * const typeConge = await prisma.typeConge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TypeConges and only return the `id_typeconge`
     * const typeCongeWithId_typecongeOnly = await prisma.typeConge.createManyAndReturn({
     *   select: { id_typeconge: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TypeCongeCreateManyAndReturnArgs>(args?: SelectSubset<T, TypeCongeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TypeConge.
     * @param {TypeCongeDeleteArgs} args - Arguments to delete one TypeConge.
     * @example
     * // Delete one TypeConge
     * const TypeConge = await prisma.typeConge.delete({
     *   where: {
     *     // ... filter to delete one TypeConge
     *   }
     * })
     * 
     */
    delete<T extends TypeCongeDeleteArgs>(args: SelectSubset<T, TypeCongeDeleteArgs<ExtArgs>>): Prisma__TypeCongeClient<$Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TypeConge.
     * @param {TypeCongeUpdateArgs} args - Arguments to update one TypeConge.
     * @example
     * // Update one TypeConge
     * const typeConge = await prisma.typeConge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypeCongeUpdateArgs>(args: SelectSubset<T, TypeCongeUpdateArgs<ExtArgs>>): Prisma__TypeCongeClient<$Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TypeConges.
     * @param {TypeCongeDeleteManyArgs} args - Arguments to filter TypeConges to delete.
     * @example
     * // Delete a few TypeConges
     * const { count } = await prisma.typeConge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypeCongeDeleteManyArgs>(args?: SelectSubset<T, TypeCongeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypeConges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCongeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TypeConges
     * const typeConge = await prisma.typeConge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypeCongeUpdateManyArgs>(args: SelectSubset<T, TypeCongeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TypeConges and returns the data updated in the database.
     * @param {TypeCongeUpdateManyAndReturnArgs} args - Arguments to update many TypeConges.
     * @example
     * // Update many TypeConges
     * const typeConge = await prisma.typeConge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TypeConges and only return the `id_typeconge`
     * const typeCongeWithId_typecongeOnly = await prisma.typeConge.updateManyAndReturn({
     *   select: { id_typeconge: true },
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
    updateManyAndReturn<T extends TypeCongeUpdateManyAndReturnArgs>(args: SelectSubset<T, TypeCongeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TypeConge.
     * @param {TypeCongeUpsertArgs} args - Arguments to update or create a TypeConge.
     * @example
     * // Update or create a TypeConge
     * const typeConge = await prisma.typeConge.upsert({
     *   create: {
     *     // ... data to create a TypeConge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TypeConge we want to update
     *   }
     * })
     */
    upsert<T extends TypeCongeUpsertArgs>(args: SelectSubset<T, TypeCongeUpsertArgs<ExtArgs>>): Prisma__TypeCongeClient<$Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TypeConges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCongeCountArgs} args - Arguments to filter TypeConges to count.
     * @example
     * // Count the number of TypeConges
     * const count = await prisma.typeConge.count({
     *   where: {
     *     // ... the filter for the TypeConges we want to count
     *   }
     * })
    **/
    count<T extends TypeCongeCountArgs>(
      args?: Subset<T, TypeCongeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeCongeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TypeConge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCongeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TypeCongeAggregateArgs>(args: Subset<T, TypeCongeAggregateArgs>): Prisma.PrismaPromise<GetTypeCongeAggregateType<T>>

    /**
     * Group by TypeConge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCongeGroupByArgs} args - Group by arguments.
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
      T extends TypeCongeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeCongeGroupByArgs['orderBy'] }
        : { orderBy?: TypeCongeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TypeCongeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeCongeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TypeConge model
   */
  readonly fields: TypeCongeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TypeConge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeCongeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    periodesConge<T extends TypeConge$periodesCongeArgs<ExtArgs> = {}>(args?: Subset<T, TypeConge$periodesCongeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodeCongePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TypeConge model
   */
  interface TypeCongeFieldRefs {
    readonly id_typeconge: FieldRef<"TypeConge", 'String'>
    readonly libelle_typeconge: FieldRef<"TypeConge", 'String'>
    readonly date_creation: FieldRef<"TypeConge", 'DateTime'>
    readonly is_active: FieldRef<"TypeConge", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TypeConge findUnique
   */
  export type TypeCongeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeConge
     */
    select?: TypeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeConge
     */
    omit?: TypeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCongeInclude<ExtArgs> | null
    /**
     * Filter, which TypeConge to fetch.
     */
    where: TypeCongeWhereUniqueInput
  }

  /**
   * TypeConge findUniqueOrThrow
   */
  export type TypeCongeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeConge
     */
    select?: TypeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeConge
     */
    omit?: TypeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCongeInclude<ExtArgs> | null
    /**
     * Filter, which TypeConge to fetch.
     */
    where: TypeCongeWhereUniqueInput
  }

  /**
   * TypeConge findFirst
   */
  export type TypeCongeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeConge
     */
    select?: TypeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeConge
     */
    omit?: TypeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCongeInclude<ExtArgs> | null
    /**
     * Filter, which TypeConge to fetch.
     */
    where?: TypeCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeConges to fetch.
     */
    orderBy?: TypeCongeOrderByWithRelationInput | TypeCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeConges.
     */
    cursor?: TypeCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeConges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeConges.
     */
    distinct?: TypeCongeScalarFieldEnum | TypeCongeScalarFieldEnum[]
  }

  /**
   * TypeConge findFirstOrThrow
   */
  export type TypeCongeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeConge
     */
    select?: TypeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeConge
     */
    omit?: TypeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCongeInclude<ExtArgs> | null
    /**
     * Filter, which TypeConge to fetch.
     */
    where?: TypeCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeConges to fetch.
     */
    orderBy?: TypeCongeOrderByWithRelationInput | TypeCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TypeConges.
     */
    cursor?: TypeCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeConges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TypeConges.
     */
    distinct?: TypeCongeScalarFieldEnum | TypeCongeScalarFieldEnum[]
  }

  /**
   * TypeConge findMany
   */
  export type TypeCongeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeConge
     */
    select?: TypeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeConge
     */
    omit?: TypeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCongeInclude<ExtArgs> | null
    /**
     * Filter, which TypeConges to fetch.
     */
    where?: TypeCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TypeConges to fetch.
     */
    orderBy?: TypeCongeOrderByWithRelationInput | TypeCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TypeConges.
     */
    cursor?: TypeCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TypeConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TypeConges.
     */
    skip?: number
    distinct?: TypeCongeScalarFieldEnum | TypeCongeScalarFieldEnum[]
  }

  /**
   * TypeConge create
   */
  export type TypeCongeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeConge
     */
    select?: TypeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeConge
     */
    omit?: TypeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCongeInclude<ExtArgs> | null
    /**
     * The data needed to create a TypeConge.
     */
    data: XOR<TypeCongeCreateInput, TypeCongeUncheckedCreateInput>
  }

  /**
   * TypeConge createMany
   */
  export type TypeCongeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TypeConges.
     */
    data: TypeCongeCreateManyInput | TypeCongeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TypeConge createManyAndReturn
   */
  export type TypeCongeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeConge
     */
    select?: TypeCongeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TypeConge
     */
    omit?: TypeCongeOmit<ExtArgs> | null
    /**
     * The data used to create many TypeConges.
     */
    data: TypeCongeCreateManyInput | TypeCongeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TypeConge update
   */
  export type TypeCongeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeConge
     */
    select?: TypeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeConge
     */
    omit?: TypeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCongeInclude<ExtArgs> | null
    /**
     * The data needed to update a TypeConge.
     */
    data: XOR<TypeCongeUpdateInput, TypeCongeUncheckedUpdateInput>
    /**
     * Choose, which TypeConge to update.
     */
    where: TypeCongeWhereUniqueInput
  }

  /**
   * TypeConge updateMany
   */
  export type TypeCongeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TypeConges.
     */
    data: XOR<TypeCongeUpdateManyMutationInput, TypeCongeUncheckedUpdateManyInput>
    /**
     * Filter which TypeConges to update
     */
    where?: TypeCongeWhereInput
    /**
     * Limit how many TypeConges to update.
     */
    limit?: number
  }

  /**
   * TypeConge updateManyAndReturn
   */
  export type TypeCongeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeConge
     */
    select?: TypeCongeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TypeConge
     */
    omit?: TypeCongeOmit<ExtArgs> | null
    /**
     * The data used to update TypeConges.
     */
    data: XOR<TypeCongeUpdateManyMutationInput, TypeCongeUncheckedUpdateManyInput>
    /**
     * Filter which TypeConges to update
     */
    where?: TypeCongeWhereInput
    /**
     * Limit how many TypeConges to update.
     */
    limit?: number
  }

  /**
   * TypeConge upsert
   */
  export type TypeCongeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeConge
     */
    select?: TypeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeConge
     */
    omit?: TypeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCongeInclude<ExtArgs> | null
    /**
     * The filter to search for the TypeConge to update in case it exists.
     */
    where: TypeCongeWhereUniqueInput
    /**
     * In case the TypeConge found by the `where` argument doesn't exist, create a new TypeConge with this data.
     */
    create: XOR<TypeCongeCreateInput, TypeCongeUncheckedCreateInput>
    /**
     * In case the TypeConge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeCongeUpdateInput, TypeCongeUncheckedUpdateInput>
  }

  /**
   * TypeConge delete
   */
  export type TypeCongeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeConge
     */
    select?: TypeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeConge
     */
    omit?: TypeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCongeInclude<ExtArgs> | null
    /**
     * Filter which TypeConge to delete.
     */
    where: TypeCongeWhereUniqueInput
  }

  /**
   * TypeConge deleteMany
   */
  export type TypeCongeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TypeConges to delete
     */
    where?: TypeCongeWhereInput
    /**
     * Limit how many TypeConges to delete.
     */
    limit?: number
  }

  /**
   * TypeConge.periodesConge
   */
  export type TypeConge$periodesCongeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeConge
     */
    select?: PeriodeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriodeConge
     */
    omit?: PeriodeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeCongeInclude<ExtArgs> | null
    where?: PeriodeCongeWhereInput
    orderBy?: PeriodeCongeOrderByWithRelationInput | PeriodeCongeOrderByWithRelationInput[]
    cursor?: PeriodeCongeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeriodeCongeScalarFieldEnum | PeriodeCongeScalarFieldEnum[]
  }

  /**
   * TypeConge without action
   */
  export type TypeCongeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeConge
     */
    select?: TypeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TypeConge
     */
    omit?: TypeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeCongeInclude<ExtArgs> | null
  }


  /**
   * Model PeriodeConge
   */

  export type AggregatePeriodeConge = {
    _count: PeriodeCongeCountAggregateOutputType | null
    _avg: PeriodeCongeAvgAggregateOutputType | null
    _sum: PeriodeCongeSumAggregateOutputType | null
    _min: PeriodeCongeMinAggregateOutputType | null
    _max: PeriodeCongeMaxAggregateOutputType | null
  }

  export type PeriodeCongeAvgAggregateOutputType = {
    nb_jour: number | null
  }

  export type PeriodeCongeSumAggregateOutputType = {
    nb_jour: number | null
  }

  export type PeriodeCongeMinAggregateOutputType = {
    id_periodeconge: string | null
    date_debut: Date | null
    date_fin: Date | null
    nb_jour: number | null
    id_typeconge: string | null
  }

  export type PeriodeCongeMaxAggregateOutputType = {
    id_periodeconge: string | null
    date_debut: Date | null
    date_fin: Date | null
    nb_jour: number | null
    id_typeconge: string | null
  }

  export type PeriodeCongeCountAggregateOutputType = {
    id_periodeconge: number
    date_debut: number
    date_fin: number
    nb_jour: number
    id_typeconge: number
    _all: number
  }


  export type PeriodeCongeAvgAggregateInputType = {
    nb_jour?: true
  }

  export type PeriodeCongeSumAggregateInputType = {
    nb_jour?: true
  }

  export type PeriodeCongeMinAggregateInputType = {
    id_periodeconge?: true
    date_debut?: true
    date_fin?: true
    nb_jour?: true
    id_typeconge?: true
  }

  export type PeriodeCongeMaxAggregateInputType = {
    id_periodeconge?: true
    date_debut?: true
    date_fin?: true
    nb_jour?: true
    id_typeconge?: true
  }

  export type PeriodeCongeCountAggregateInputType = {
    id_periodeconge?: true
    date_debut?: true
    date_fin?: true
    nb_jour?: true
    id_typeconge?: true
    _all?: true
  }

  export type PeriodeCongeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeriodeConge to aggregate.
     */
    where?: PeriodeCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeriodeConges to fetch.
     */
    orderBy?: PeriodeCongeOrderByWithRelationInput | PeriodeCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeriodeCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeriodeConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeriodeConges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PeriodeConges
    **/
    _count?: true | PeriodeCongeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeriodeCongeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeriodeCongeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeriodeCongeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeriodeCongeMaxAggregateInputType
  }

  export type GetPeriodeCongeAggregateType<T extends PeriodeCongeAggregateArgs> = {
        [P in keyof T & keyof AggregatePeriodeConge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeriodeConge[P]>
      : GetScalarType<T[P], AggregatePeriodeConge[P]>
  }




  export type PeriodeCongeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeriodeCongeWhereInput
    orderBy?: PeriodeCongeOrderByWithAggregationInput | PeriodeCongeOrderByWithAggregationInput[]
    by: PeriodeCongeScalarFieldEnum[] | PeriodeCongeScalarFieldEnum
    having?: PeriodeCongeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeriodeCongeCountAggregateInputType | true
    _avg?: PeriodeCongeAvgAggregateInputType
    _sum?: PeriodeCongeSumAggregateInputType
    _min?: PeriodeCongeMinAggregateInputType
    _max?: PeriodeCongeMaxAggregateInputType
  }

  export type PeriodeCongeGroupByOutputType = {
    id_periodeconge: string
    date_debut: Date
    date_fin: Date
    nb_jour: number
    id_typeconge: string
    _count: PeriodeCongeCountAggregateOutputType | null
    _avg: PeriodeCongeAvgAggregateOutputType | null
    _sum: PeriodeCongeSumAggregateOutputType | null
    _min: PeriodeCongeMinAggregateOutputType | null
    _max: PeriodeCongeMaxAggregateOutputType | null
  }

  type GetPeriodeCongeGroupByPayload<T extends PeriodeCongeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeriodeCongeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeriodeCongeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeriodeCongeGroupByOutputType[P]>
            : GetScalarType<T[P], PeriodeCongeGroupByOutputType[P]>
        }
      >
    >


  export type PeriodeCongeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_periodeconge?: boolean
    date_debut?: boolean
    date_fin?: boolean
    nb_jour?: boolean
    id_typeconge?: boolean
    typeConge?: boolean | TypeCongeDefaultArgs<ExtArgs>
    demandes?: boolean | PeriodeConge$demandesArgs<ExtArgs>
    _count?: boolean | PeriodeCongeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["periodeConge"]>

  export type PeriodeCongeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_periodeconge?: boolean
    date_debut?: boolean
    date_fin?: boolean
    nb_jour?: boolean
    id_typeconge?: boolean
    typeConge?: boolean | TypeCongeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["periodeConge"]>

  export type PeriodeCongeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_periodeconge?: boolean
    date_debut?: boolean
    date_fin?: boolean
    nb_jour?: boolean
    id_typeconge?: boolean
    typeConge?: boolean | TypeCongeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["periodeConge"]>

  export type PeriodeCongeSelectScalar = {
    id_periodeconge?: boolean
    date_debut?: boolean
    date_fin?: boolean
    nb_jour?: boolean
    id_typeconge?: boolean
  }

  export type PeriodeCongeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_periodeconge" | "date_debut" | "date_fin" | "nb_jour" | "id_typeconge", ExtArgs["result"]["periodeConge"]>
  export type PeriodeCongeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeConge?: boolean | TypeCongeDefaultArgs<ExtArgs>
    demandes?: boolean | PeriodeConge$demandesArgs<ExtArgs>
    _count?: boolean | PeriodeCongeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PeriodeCongeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeConge?: boolean | TypeCongeDefaultArgs<ExtArgs>
  }
  export type PeriodeCongeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    typeConge?: boolean | TypeCongeDefaultArgs<ExtArgs>
  }

  export type $PeriodeCongePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PeriodeConge"
    objects: {
      typeConge: Prisma.$TypeCongePayload<ExtArgs>
      demandes: Prisma.$DemandePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_periodeconge: string
      date_debut: Date
      date_fin: Date
      nb_jour: number
      id_typeconge: string
    }, ExtArgs["result"]["periodeConge"]>
    composites: {}
  }

  type PeriodeCongeGetPayload<S extends boolean | null | undefined | PeriodeCongeDefaultArgs> = $Result.GetResult<Prisma.$PeriodeCongePayload, S>

  type PeriodeCongeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeriodeCongeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeriodeCongeCountAggregateInputType | true
    }

  export interface PeriodeCongeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PeriodeConge'], meta: { name: 'PeriodeConge' } }
    /**
     * Find zero or one PeriodeConge that matches the filter.
     * @param {PeriodeCongeFindUniqueArgs} args - Arguments to find a PeriodeConge
     * @example
     * // Get one PeriodeConge
     * const periodeConge = await prisma.periodeConge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeriodeCongeFindUniqueArgs>(args: SelectSubset<T, PeriodeCongeFindUniqueArgs<ExtArgs>>): Prisma__PeriodeCongeClient<$Result.GetResult<Prisma.$PeriodeCongePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PeriodeConge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeriodeCongeFindUniqueOrThrowArgs} args - Arguments to find a PeriodeConge
     * @example
     * // Get one PeriodeConge
     * const periodeConge = await prisma.periodeConge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeriodeCongeFindUniqueOrThrowArgs>(args: SelectSubset<T, PeriodeCongeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeriodeCongeClient<$Result.GetResult<Prisma.$PeriodeCongePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeriodeConge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeCongeFindFirstArgs} args - Arguments to find a PeriodeConge
     * @example
     * // Get one PeriodeConge
     * const periodeConge = await prisma.periodeConge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeriodeCongeFindFirstArgs>(args?: SelectSubset<T, PeriodeCongeFindFirstArgs<ExtArgs>>): Prisma__PeriodeCongeClient<$Result.GetResult<Prisma.$PeriodeCongePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeriodeConge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeCongeFindFirstOrThrowArgs} args - Arguments to find a PeriodeConge
     * @example
     * // Get one PeriodeConge
     * const periodeConge = await prisma.periodeConge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeriodeCongeFindFirstOrThrowArgs>(args?: SelectSubset<T, PeriodeCongeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeriodeCongeClient<$Result.GetResult<Prisma.$PeriodeCongePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PeriodeConges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeCongeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PeriodeConges
     * const periodeConges = await prisma.periodeConge.findMany()
     * 
     * // Get first 10 PeriodeConges
     * const periodeConges = await prisma.periodeConge.findMany({ take: 10 })
     * 
     * // Only select the `id_periodeconge`
     * const periodeCongeWithId_periodecongeOnly = await prisma.periodeConge.findMany({ select: { id_periodeconge: true } })
     * 
     */
    findMany<T extends PeriodeCongeFindManyArgs>(args?: SelectSubset<T, PeriodeCongeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodeCongePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PeriodeConge.
     * @param {PeriodeCongeCreateArgs} args - Arguments to create a PeriodeConge.
     * @example
     * // Create one PeriodeConge
     * const PeriodeConge = await prisma.periodeConge.create({
     *   data: {
     *     // ... data to create a PeriodeConge
     *   }
     * })
     * 
     */
    create<T extends PeriodeCongeCreateArgs>(args: SelectSubset<T, PeriodeCongeCreateArgs<ExtArgs>>): Prisma__PeriodeCongeClient<$Result.GetResult<Prisma.$PeriodeCongePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PeriodeConges.
     * @param {PeriodeCongeCreateManyArgs} args - Arguments to create many PeriodeConges.
     * @example
     * // Create many PeriodeConges
     * const periodeConge = await prisma.periodeConge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeriodeCongeCreateManyArgs>(args?: SelectSubset<T, PeriodeCongeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PeriodeConges and returns the data saved in the database.
     * @param {PeriodeCongeCreateManyAndReturnArgs} args - Arguments to create many PeriodeConges.
     * @example
     * // Create many PeriodeConges
     * const periodeConge = await prisma.periodeConge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PeriodeConges and only return the `id_periodeconge`
     * const periodeCongeWithId_periodecongeOnly = await prisma.periodeConge.createManyAndReturn({
     *   select: { id_periodeconge: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeriodeCongeCreateManyAndReturnArgs>(args?: SelectSubset<T, PeriodeCongeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodeCongePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PeriodeConge.
     * @param {PeriodeCongeDeleteArgs} args - Arguments to delete one PeriodeConge.
     * @example
     * // Delete one PeriodeConge
     * const PeriodeConge = await prisma.periodeConge.delete({
     *   where: {
     *     // ... filter to delete one PeriodeConge
     *   }
     * })
     * 
     */
    delete<T extends PeriodeCongeDeleteArgs>(args: SelectSubset<T, PeriodeCongeDeleteArgs<ExtArgs>>): Prisma__PeriodeCongeClient<$Result.GetResult<Prisma.$PeriodeCongePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PeriodeConge.
     * @param {PeriodeCongeUpdateArgs} args - Arguments to update one PeriodeConge.
     * @example
     * // Update one PeriodeConge
     * const periodeConge = await prisma.periodeConge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeriodeCongeUpdateArgs>(args: SelectSubset<T, PeriodeCongeUpdateArgs<ExtArgs>>): Prisma__PeriodeCongeClient<$Result.GetResult<Prisma.$PeriodeCongePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PeriodeConges.
     * @param {PeriodeCongeDeleteManyArgs} args - Arguments to filter PeriodeConges to delete.
     * @example
     * // Delete a few PeriodeConges
     * const { count } = await prisma.periodeConge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeriodeCongeDeleteManyArgs>(args?: SelectSubset<T, PeriodeCongeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeriodeConges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeCongeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PeriodeConges
     * const periodeConge = await prisma.periodeConge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeriodeCongeUpdateManyArgs>(args: SelectSubset<T, PeriodeCongeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeriodeConges and returns the data updated in the database.
     * @param {PeriodeCongeUpdateManyAndReturnArgs} args - Arguments to update many PeriodeConges.
     * @example
     * // Update many PeriodeConges
     * const periodeConge = await prisma.periodeConge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PeriodeConges and only return the `id_periodeconge`
     * const periodeCongeWithId_periodecongeOnly = await prisma.periodeConge.updateManyAndReturn({
     *   select: { id_periodeconge: true },
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
    updateManyAndReturn<T extends PeriodeCongeUpdateManyAndReturnArgs>(args: SelectSubset<T, PeriodeCongeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodeCongePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PeriodeConge.
     * @param {PeriodeCongeUpsertArgs} args - Arguments to update or create a PeriodeConge.
     * @example
     * // Update or create a PeriodeConge
     * const periodeConge = await prisma.periodeConge.upsert({
     *   create: {
     *     // ... data to create a PeriodeConge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PeriodeConge we want to update
     *   }
     * })
     */
    upsert<T extends PeriodeCongeUpsertArgs>(args: SelectSubset<T, PeriodeCongeUpsertArgs<ExtArgs>>): Prisma__PeriodeCongeClient<$Result.GetResult<Prisma.$PeriodeCongePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PeriodeConges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeCongeCountArgs} args - Arguments to filter PeriodeConges to count.
     * @example
     * // Count the number of PeriodeConges
     * const count = await prisma.periodeConge.count({
     *   where: {
     *     // ... the filter for the PeriodeConges we want to count
     *   }
     * })
    **/
    count<T extends PeriodeCongeCountArgs>(
      args?: Subset<T, PeriodeCongeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeriodeCongeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PeriodeConge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeCongeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeriodeCongeAggregateArgs>(args: Subset<T, PeriodeCongeAggregateArgs>): Prisma.PrismaPromise<GetPeriodeCongeAggregateType<T>>

    /**
     * Group by PeriodeConge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodeCongeGroupByArgs} args - Group by arguments.
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
      T extends PeriodeCongeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeriodeCongeGroupByArgs['orderBy'] }
        : { orderBy?: PeriodeCongeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PeriodeCongeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeriodeCongeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PeriodeConge model
   */
  readonly fields: PeriodeCongeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PeriodeConge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeriodeCongeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    typeConge<T extends TypeCongeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeCongeDefaultArgs<ExtArgs>>): Prisma__TypeCongeClient<$Result.GetResult<Prisma.$TypeCongePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    demandes<T extends PeriodeConge$demandesArgs<ExtArgs> = {}>(args?: Subset<T, PeriodeConge$demandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PeriodeConge model
   */
  interface PeriodeCongeFieldRefs {
    readonly id_periodeconge: FieldRef<"PeriodeConge", 'String'>
    readonly date_debut: FieldRef<"PeriodeConge", 'DateTime'>
    readonly date_fin: FieldRef<"PeriodeConge", 'DateTime'>
    readonly nb_jour: FieldRef<"PeriodeConge", 'Int'>
    readonly id_typeconge: FieldRef<"PeriodeConge", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PeriodeConge findUnique
   */
  export type PeriodeCongeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeConge
     */
    select?: PeriodeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriodeConge
     */
    omit?: PeriodeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeCongeInclude<ExtArgs> | null
    /**
     * Filter, which PeriodeConge to fetch.
     */
    where: PeriodeCongeWhereUniqueInput
  }

  /**
   * PeriodeConge findUniqueOrThrow
   */
  export type PeriodeCongeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeConge
     */
    select?: PeriodeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriodeConge
     */
    omit?: PeriodeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeCongeInclude<ExtArgs> | null
    /**
     * Filter, which PeriodeConge to fetch.
     */
    where: PeriodeCongeWhereUniqueInput
  }

  /**
   * PeriodeConge findFirst
   */
  export type PeriodeCongeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeConge
     */
    select?: PeriodeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriodeConge
     */
    omit?: PeriodeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeCongeInclude<ExtArgs> | null
    /**
     * Filter, which PeriodeConge to fetch.
     */
    where?: PeriodeCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeriodeConges to fetch.
     */
    orderBy?: PeriodeCongeOrderByWithRelationInput | PeriodeCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeriodeConges.
     */
    cursor?: PeriodeCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeriodeConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeriodeConges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeriodeConges.
     */
    distinct?: PeriodeCongeScalarFieldEnum | PeriodeCongeScalarFieldEnum[]
  }

  /**
   * PeriodeConge findFirstOrThrow
   */
  export type PeriodeCongeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeConge
     */
    select?: PeriodeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriodeConge
     */
    omit?: PeriodeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeCongeInclude<ExtArgs> | null
    /**
     * Filter, which PeriodeConge to fetch.
     */
    where?: PeriodeCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeriodeConges to fetch.
     */
    orderBy?: PeriodeCongeOrderByWithRelationInput | PeriodeCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeriodeConges.
     */
    cursor?: PeriodeCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeriodeConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeriodeConges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeriodeConges.
     */
    distinct?: PeriodeCongeScalarFieldEnum | PeriodeCongeScalarFieldEnum[]
  }

  /**
   * PeriodeConge findMany
   */
  export type PeriodeCongeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeConge
     */
    select?: PeriodeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriodeConge
     */
    omit?: PeriodeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeCongeInclude<ExtArgs> | null
    /**
     * Filter, which PeriodeConges to fetch.
     */
    where?: PeriodeCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeriodeConges to fetch.
     */
    orderBy?: PeriodeCongeOrderByWithRelationInput | PeriodeCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PeriodeConges.
     */
    cursor?: PeriodeCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeriodeConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeriodeConges.
     */
    skip?: number
    distinct?: PeriodeCongeScalarFieldEnum | PeriodeCongeScalarFieldEnum[]
  }

  /**
   * PeriodeConge create
   */
  export type PeriodeCongeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeConge
     */
    select?: PeriodeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriodeConge
     */
    omit?: PeriodeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeCongeInclude<ExtArgs> | null
    /**
     * The data needed to create a PeriodeConge.
     */
    data: XOR<PeriodeCongeCreateInput, PeriodeCongeUncheckedCreateInput>
  }

  /**
   * PeriodeConge createMany
   */
  export type PeriodeCongeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PeriodeConges.
     */
    data: PeriodeCongeCreateManyInput | PeriodeCongeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PeriodeConge createManyAndReturn
   */
  export type PeriodeCongeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeConge
     */
    select?: PeriodeCongeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PeriodeConge
     */
    omit?: PeriodeCongeOmit<ExtArgs> | null
    /**
     * The data used to create many PeriodeConges.
     */
    data: PeriodeCongeCreateManyInput | PeriodeCongeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeCongeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PeriodeConge update
   */
  export type PeriodeCongeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeConge
     */
    select?: PeriodeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriodeConge
     */
    omit?: PeriodeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeCongeInclude<ExtArgs> | null
    /**
     * The data needed to update a PeriodeConge.
     */
    data: XOR<PeriodeCongeUpdateInput, PeriodeCongeUncheckedUpdateInput>
    /**
     * Choose, which PeriodeConge to update.
     */
    where: PeriodeCongeWhereUniqueInput
  }

  /**
   * PeriodeConge updateMany
   */
  export type PeriodeCongeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PeriodeConges.
     */
    data: XOR<PeriodeCongeUpdateManyMutationInput, PeriodeCongeUncheckedUpdateManyInput>
    /**
     * Filter which PeriodeConges to update
     */
    where?: PeriodeCongeWhereInput
    /**
     * Limit how many PeriodeConges to update.
     */
    limit?: number
  }

  /**
   * PeriodeConge updateManyAndReturn
   */
  export type PeriodeCongeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeConge
     */
    select?: PeriodeCongeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PeriodeConge
     */
    omit?: PeriodeCongeOmit<ExtArgs> | null
    /**
     * The data used to update PeriodeConges.
     */
    data: XOR<PeriodeCongeUpdateManyMutationInput, PeriodeCongeUncheckedUpdateManyInput>
    /**
     * Filter which PeriodeConges to update
     */
    where?: PeriodeCongeWhereInput
    /**
     * Limit how many PeriodeConges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeCongeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PeriodeConge upsert
   */
  export type PeriodeCongeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeConge
     */
    select?: PeriodeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriodeConge
     */
    omit?: PeriodeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeCongeInclude<ExtArgs> | null
    /**
     * The filter to search for the PeriodeConge to update in case it exists.
     */
    where: PeriodeCongeWhereUniqueInput
    /**
     * In case the PeriodeConge found by the `where` argument doesn't exist, create a new PeriodeConge with this data.
     */
    create: XOR<PeriodeCongeCreateInput, PeriodeCongeUncheckedCreateInput>
    /**
     * In case the PeriodeConge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeriodeCongeUpdateInput, PeriodeCongeUncheckedUpdateInput>
  }

  /**
   * PeriodeConge delete
   */
  export type PeriodeCongeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeConge
     */
    select?: PeriodeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriodeConge
     */
    omit?: PeriodeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeCongeInclude<ExtArgs> | null
    /**
     * Filter which PeriodeConge to delete.
     */
    where: PeriodeCongeWhereUniqueInput
  }

  /**
   * PeriodeConge deleteMany
   */
  export type PeriodeCongeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeriodeConges to delete
     */
    where?: PeriodeCongeWhereInput
    /**
     * Limit how many PeriodeConges to delete.
     */
    limit?: number
  }

  /**
   * PeriodeConge.demandes
   */
  export type PeriodeConge$demandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    where?: DemandeWhereInput
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    cursor?: DemandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * PeriodeConge without action
   */
  export type PeriodeCongeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeConge
     */
    select?: PeriodeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriodeConge
     */
    omit?: PeriodeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeCongeInclude<ExtArgs> | null
  }


  /**
   * Model Demande
   */

  export type AggregateDemande = {
    _count: DemandeCountAggregateOutputType | null
    _min: DemandeMinAggregateOutputType | null
    _max: DemandeMaxAggregateOutputType | null
  }

  export type DemandeMinAggregateOutputType = {
    id_demande: string | null
    type_demande: string | null
    statut_demande: $Enums.StatutDemande | null
    date_demande: Date | null
    motif: string | null
    id_personnel: string | null
    id_service: string | null
    id_periodeconge: string | null
    id_chef_service: string | null
  }

  export type DemandeMaxAggregateOutputType = {
    id_demande: string | null
    type_demande: string | null
    statut_demande: $Enums.StatutDemande | null
    date_demande: Date | null
    motif: string | null
    id_personnel: string | null
    id_service: string | null
    id_periodeconge: string | null
    id_chef_service: string | null
  }

  export type DemandeCountAggregateOutputType = {
    id_demande: number
    type_demande: number
    statut_demande: number
    date_demande: number
    motif: number
    id_personnel: number
    id_service: number
    id_periodeconge: number
    id_chef_service: number
    _all: number
  }


  export type DemandeMinAggregateInputType = {
    id_demande?: true
    type_demande?: true
    statut_demande?: true
    date_demande?: true
    motif?: true
    id_personnel?: true
    id_service?: true
    id_periodeconge?: true
    id_chef_service?: true
  }

  export type DemandeMaxAggregateInputType = {
    id_demande?: true
    type_demande?: true
    statut_demande?: true
    date_demande?: true
    motif?: true
    id_personnel?: true
    id_service?: true
    id_periodeconge?: true
    id_chef_service?: true
  }

  export type DemandeCountAggregateInputType = {
    id_demande?: true
    type_demande?: true
    statut_demande?: true
    date_demande?: true
    motif?: true
    id_personnel?: true
    id_service?: true
    id_periodeconge?: true
    id_chef_service?: true
    _all?: true
  }

  export type DemandeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demande to aggregate.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Demandes
    **/
    _count?: true | DemandeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemandeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemandeMaxAggregateInputType
  }

  export type GetDemandeAggregateType<T extends DemandeAggregateArgs> = {
        [P in keyof T & keyof AggregateDemande]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemande[P]>
      : GetScalarType<T[P], AggregateDemande[P]>
  }




  export type DemandeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeWhereInput
    orderBy?: DemandeOrderByWithAggregationInput | DemandeOrderByWithAggregationInput[]
    by: DemandeScalarFieldEnum[] | DemandeScalarFieldEnum
    having?: DemandeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemandeCountAggregateInputType | true
    _min?: DemandeMinAggregateInputType
    _max?: DemandeMaxAggregateInputType
  }

  export type DemandeGroupByOutputType = {
    id_demande: string
    type_demande: string
    statut_demande: $Enums.StatutDemande
    date_demande: Date
    motif: string | null
    id_personnel: string
    id_service: string | null
    id_periodeconge: string | null
    id_chef_service: string | null
    _count: DemandeCountAggregateOutputType | null
    _min: DemandeMinAggregateOutputType | null
    _max: DemandeMaxAggregateOutputType | null
  }

  type GetDemandeGroupByPayload<T extends DemandeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemandeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemandeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemandeGroupByOutputType[P]>
            : GetScalarType<T[P], DemandeGroupByOutputType[P]>
        }
      >
    >


  export type DemandeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_demande?: boolean
    type_demande?: boolean
    statut_demande?: boolean
    date_demande?: boolean
    motif?: boolean
    id_personnel?: boolean
    id_service?: boolean
    id_periodeconge?: boolean
    id_chef_service?: boolean
    personnel?: boolean | PersonnelDefaultArgs<ExtArgs>
    service?: boolean | Demande$serviceArgs<ExtArgs>
    periodeConge?: boolean | Demande$periodeCongeArgs<ExtArgs>
    discussions?: boolean | Demande$discussionsArgs<ExtArgs>
    chefService?: boolean | Demande$chefServiceArgs<ExtArgs>
    ficheDeConge?: boolean | Demande$ficheDeCongeArgs<ExtArgs>
    _count?: boolean | DemandeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demande"]>

  export type DemandeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_demande?: boolean
    type_demande?: boolean
    statut_demande?: boolean
    date_demande?: boolean
    motif?: boolean
    id_personnel?: boolean
    id_service?: boolean
    id_periodeconge?: boolean
    id_chef_service?: boolean
    personnel?: boolean | PersonnelDefaultArgs<ExtArgs>
    service?: boolean | Demande$serviceArgs<ExtArgs>
    periodeConge?: boolean | Demande$periodeCongeArgs<ExtArgs>
    chefService?: boolean | Demande$chefServiceArgs<ExtArgs>
  }, ExtArgs["result"]["demande"]>

  export type DemandeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_demande?: boolean
    type_demande?: boolean
    statut_demande?: boolean
    date_demande?: boolean
    motif?: boolean
    id_personnel?: boolean
    id_service?: boolean
    id_periodeconge?: boolean
    id_chef_service?: boolean
    personnel?: boolean | PersonnelDefaultArgs<ExtArgs>
    service?: boolean | Demande$serviceArgs<ExtArgs>
    periodeConge?: boolean | Demande$periodeCongeArgs<ExtArgs>
    chefService?: boolean | Demande$chefServiceArgs<ExtArgs>
  }, ExtArgs["result"]["demande"]>

  export type DemandeSelectScalar = {
    id_demande?: boolean
    type_demande?: boolean
    statut_demande?: boolean
    date_demande?: boolean
    motif?: boolean
    id_personnel?: boolean
    id_service?: boolean
    id_periodeconge?: boolean
    id_chef_service?: boolean
  }

  export type DemandeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_demande" | "type_demande" | "statut_demande" | "date_demande" | "motif" | "id_personnel" | "id_service" | "id_periodeconge" | "id_chef_service", ExtArgs["result"]["demande"]>
  export type DemandeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personnel?: boolean | PersonnelDefaultArgs<ExtArgs>
    service?: boolean | Demande$serviceArgs<ExtArgs>
    periodeConge?: boolean | Demande$periodeCongeArgs<ExtArgs>
    discussions?: boolean | Demande$discussionsArgs<ExtArgs>
    chefService?: boolean | Demande$chefServiceArgs<ExtArgs>
    ficheDeConge?: boolean | Demande$ficheDeCongeArgs<ExtArgs>
    _count?: boolean | DemandeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DemandeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personnel?: boolean | PersonnelDefaultArgs<ExtArgs>
    service?: boolean | Demande$serviceArgs<ExtArgs>
    periodeConge?: boolean | Demande$periodeCongeArgs<ExtArgs>
    chefService?: boolean | Demande$chefServiceArgs<ExtArgs>
  }
  export type DemandeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personnel?: boolean | PersonnelDefaultArgs<ExtArgs>
    service?: boolean | Demande$serviceArgs<ExtArgs>
    periodeConge?: boolean | Demande$periodeCongeArgs<ExtArgs>
    chefService?: boolean | Demande$chefServiceArgs<ExtArgs>
  }

  export type $DemandePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Demande"
    objects: {
      personnel: Prisma.$PersonnelPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs> | null
      periodeConge: Prisma.$PeriodeCongePayload<ExtArgs> | null
      discussions: Prisma.$DiscussionPayload<ExtArgs>[]
      chefService: Prisma.$PersonnelPayload<ExtArgs> | null
      ficheDeConge: Prisma.$FicheDeCongePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_demande: string
      type_demande: string
      statut_demande: $Enums.StatutDemande
      date_demande: Date
      motif: string | null
      id_personnel: string
      id_service: string | null
      id_periodeconge: string | null
      id_chef_service: string | null
    }, ExtArgs["result"]["demande"]>
    composites: {}
  }

  type DemandeGetPayload<S extends boolean | null | undefined | DemandeDefaultArgs> = $Result.GetResult<Prisma.$DemandePayload, S>

  type DemandeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DemandeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DemandeCountAggregateInputType | true
    }

  export interface DemandeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Demande'], meta: { name: 'Demande' } }
    /**
     * Find zero or one Demande that matches the filter.
     * @param {DemandeFindUniqueArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DemandeFindUniqueArgs>(args: SelectSubset<T, DemandeFindUniqueArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Demande that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DemandeFindUniqueOrThrowArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DemandeFindUniqueOrThrowArgs>(args: SelectSubset<T, DemandeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demande that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeFindFirstArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DemandeFindFirstArgs>(args?: SelectSubset<T, DemandeFindFirstArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demande that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeFindFirstOrThrowArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DemandeFindFirstOrThrowArgs>(args?: SelectSubset<T, DemandeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Demandes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Demandes
     * const demandes = await prisma.demande.findMany()
     * 
     * // Get first 10 Demandes
     * const demandes = await prisma.demande.findMany({ take: 10 })
     * 
     * // Only select the `id_demande`
     * const demandeWithId_demandeOnly = await prisma.demande.findMany({ select: { id_demande: true } })
     * 
     */
    findMany<T extends DemandeFindManyArgs>(args?: SelectSubset<T, DemandeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Demande.
     * @param {DemandeCreateArgs} args - Arguments to create a Demande.
     * @example
     * // Create one Demande
     * const Demande = await prisma.demande.create({
     *   data: {
     *     // ... data to create a Demande
     *   }
     * })
     * 
     */
    create<T extends DemandeCreateArgs>(args: SelectSubset<T, DemandeCreateArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Demandes.
     * @param {DemandeCreateManyArgs} args - Arguments to create many Demandes.
     * @example
     * // Create many Demandes
     * const demande = await prisma.demande.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DemandeCreateManyArgs>(args?: SelectSubset<T, DemandeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Demandes and returns the data saved in the database.
     * @param {DemandeCreateManyAndReturnArgs} args - Arguments to create many Demandes.
     * @example
     * // Create many Demandes
     * const demande = await prisma.demande.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Demandes and only return the `id_demande`
     * const demandeWithId_demandeOnly = await prisma.demande.createManyAndReturn({
     *   select: { id_demande: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DemandeCreateManyAndReturnArgs>(args?: SelectSubset<T, DemandeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Demande.
     * @param {DemandeDeleteArgs} args - Arguments to delete one Demande.
     * @example
     * // Delete one Demande
     * const Demande = await prisma.demande.delete({
     *   where: {
     *     // ... filter to delete one Demande
     *   }
     * })
     * 
     */
    delete<T extends DemandeDeleteArgs>(args: SelectSubset<T, DemandeDeleteArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Demande.
     * @param {DemandeUpdateArgs} args - Arguments to update one Demande.
     * @example
     * // Update one Demande
     * const demande = await prisma.demande.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DemandeUpdateArgs>(args: SelectSubset<T, DemandeUpdateArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Demandes.
     * @param {DemandeDeleteManyArgs} args - Arguments to filter Demandes to delete.
     * @example
     * // Delete a few Demandes
     * const { count } = await prisma.demande.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DemandeDeleteManyArgs>(args?: SelectSubset<T, DemandeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Demandes
     * const demande = await prisma.demande.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DemandeUpdateManyArgs>(args: SelectSubset<T, DemandeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demandes and returns the data updated in the database.
     * @param {DemandeUpdateManyAndReturnArgs} args - Arguments to update many Demandes.
     * @example
     * // Update many Demandes
     * const demande = await prisma.demande.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Demandes and only return the `id_demande`
     * const demandeWithId_demandeOnly = await prisma.demande.updateManyAndReturn({
     *   select: { id_demande: true },
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
    updateManyAndReturn<T extends DemandeUpdateManyAndReturnArgs>(args: SelectSubset<T, DemandeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Demande.
     * @param {DemandeUpsertArgs} args - Arguments to update or create a Demande.
     * @example
     * // Update or create a Demande
     * const demande = await prisma.demande.upsert({
     *   create: {
     *     // ... data to create a Demande
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Demande we want to update
     *   }
     * })
     */
    upsert<T extends DemandeUpsertArgs>(args: SelectSubset<T, DemandeUpsertArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Demandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeCountArgs} args - Arguments to filter Demandes to count.
     * @example
     * // Count the number of Demandes
     * const count = await prisma.demande.count({
     *   where: {
     *     // ... the filter for the Demandes we want to count
     *   }
     * })
    **/
    count<T extends DemandeCountArgs>(
      args?: Subset<T, DemandeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemandeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Demande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DemandeAggregateArgs>(args: Subset<T, DemandeAggregateArgs>): Prisma.PrismaPromise<GetDemandeAggregateType<T>>

    /**
     * Group by Demande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeGroupByArgs} args - Group by arguments.
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
      T extends DemandeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemandeGroupByArgs['orderBy'] }
        : { orderBy?: DemandeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DemandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemandeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Demande model
   */
  readonly fields: DemandeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Demande.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemandeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    personnel<T extends PersonnelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonnelDefaultArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends Demande$serviceArgs<ExtArgs> = {}>(args?: Subset<T, Demande$serviceArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    periodeConge<T extends Demande$periodeCongeArgs<ExtArgs> = {}>(args?: Subset<T, Demande$periodeCongeArgs<ExtArgs>>): Prisma__PeriodeCongeClient<$Result.GetResult<Prisma.$PeriodeCongePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    discussions<T extends Demande$discussionsArgs<ExtArgs> = {}>(args?: Subset<T, Demande$discussionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chefService<T extends Demande$chefServiceArgs<ExtArgs> = {}>(args?: Subset<T, Demande$chefServiceArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ficheDeConge<T extends Demande$ficheDeCongeArgs<ExtArgs> = {}>(args?: Subset<T, Demande$ficheDeCongeArgs<ExtArgs>>): Prisma__FicheDeCongeClient<$Result.GetResult<Prisma.$FicheDeCongePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Demande model
   */
  interface DemandeFieldRefs {
    readonly id_demande: FieldRef<"Demande", 'String'>
    readonly type_demande: FieldRef<"Demande", 'String'>
    readonly statut_demande: FieldRef<"Demande", 'StatutDemande'>
    readonly date_demande: FieldRef<"Demande", 'DateTime'>
    readonly motif: FieldRef<"Demande", 'String'>
    readonly id_personnel: FieldRef<"Demande", 'String'>
    readonly id_service: FieldRef<"Demande", 'String'>
    readonly id_periodeconge: FieldRef<"Demande", 'String'>
    readonly id_chef_service: FieldRef<"Demande", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Demande findUnique
   */
  export type DemandeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande findUniqueOrThrow
   */
  export type DemandeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande findFirst
   */
  export type DemandeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demandes.
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demandes.
     */
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Demande findFirstOrThrow
   */
  export type DemandeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demandes.
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demandes.
     */
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Demande findMany
   */
  export type DemandeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demandes to fetch.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Demandes.
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Demande create
   */
  export type DemandeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * The data needed to create a Demande.
     */
    data: XOR<DemandeCreateInput, DemandeUncheckedCreateInput>
  }

  /**
   * Demande createMany
   */
  export type DemandeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Demandes.
     */
    data: DemandeCreateManyInput | DemandeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Demande createManyAndReturn
   */
  export type DemandeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * The data used to create many Demandes.
     */
    data: DemandeCreateManyInput | DemandeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Demande update
   */
  export type DemandeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * The data needed to update a Demande.
     */
    data: XOR<DemandeUpdateInput, DemandeUncheckedUpdateInput>
    /**
     * Choose, which Demande to update.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande updateMany
   */
  export type DemandeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Demandes.
     */
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyInput>
    /**
     * Filter which Demandes to update
     */
    where?: DemandeWhereInput
    /**
     * Limit how many Demandes to update.
     */
    limit?: number
  }

  /**
   * Demande updateManyAndReturn
   */
  export type DemandeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * The data used to update Demandes.
     */
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyInput>
    /**
     * Filter which Demandes to update
     */
    where?: DemandeWhereInput
    /**
     * Limit how many Demandes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Demande upsert
   */
  export type DemandeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * The filter to search for the Demande to update in case it exists.
     */
    where: DemandeWhereUniqueInput
    /**
     * In case the Demande found by the `where` argument doesn't exist, create a new Demande with this data.
     */
    create: XOR<DemandeCreateInput, DemandeUncheckedCreateInput>
    /**
     * In case the Demande was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemandeUpdateInput, DemandeUncheckedUpdateInput>
  }

  /**
   * Demande delete
   */
  export type DemandeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter which Demande to delete.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande deleteMany
   */
  export type DemandeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demandes to delete
     */
    where?: DemandeWhereInput
    /**
     * Limit how many Demandes to delete.
     */
    limit?: number
  }

  /**
   * Demande.service
   */
  export type Demande$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
  }

  /**
   * Demande.periodeConge
   */
  export type Demande$periodeCongeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodeConge
     */
    select?: PeriodeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeriodeConge
     */
    omit?: PeriodeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodeCongeInclude<ExtArgs> | null
    where?: PeriodeCongeWhereInput
  }

  /**
   * Demande.discussions
   */
  export type Demande$discussionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    where?: DiscussionWhereInput
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    cursor?: DiscussionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Demande.chefService
   */
  export type Demande$chefServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Personnel
     */
    select?: PersonnelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Personnel
     */
    omit?: PersonnelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonnelInclude<ExtArgs> | null
    where?: PersonnelWhereInput
  }

  /**
   * Demande.ficheDeConge
   */
  export type Demande$ficheDeCongeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FicheDeConge
     */
    select?: FicheDeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FicheDeConge
     */
    omit?: FicheDeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FicheDeCongeInclude<ExtArgs> | null
    where?: FicheDeCongeWhereInput
  }

  /**
   * Demande without action
   */
  export type DemandeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
  }


  /**
   * Model Discussion
   */

  export type AggregateDiscussion = {
    _count: DiscussionCountAggregateOutputType | null
    _min: DiscussionMinAggregateOutputType | null
    _max: DiscussionMaxAggregateOutputType | null
  }

  export type DiscussionMinAggregateOutputType = {
    id_discussion: string | null
    message: string | null
    date_message: Date | null
    heure_message: string | null
    id_demande: string | null
  }

  export type DiscussionMaxAggregateOutputType = {
    id_discussion: string | null
    message: string | null
    date_message: Date | null
    heure_message: string | null
    id_demande: string | null
  }

  export type DiscussionCountAggregateOutputType = {
    id_discussion: number
    message: number
    date_message: number
    heure_message: number
    id_demande: number
    _all: number
  }


  export type DiscussionMinAggregateInputType = {
    id_discussion?: true
    message?: true
    date_message?: true
    heure_message?: true
    id_demande?: true
  }

  export type DiscussionMaxAggregateInputType = {
    id_discussion?: true
    message?: true
    date_message?: true
    heure_message?: true
    id_demande?: true
  }

  export type DiscussionCountAggregateInputType = {
    id_discussion?: true
    message?: true
    date_message?: true
    heure_message?: true
    id_demande?: true
    _all?: true
  }

  export type DiscussionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discussion to aggregate.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Discussions
    **/
    _count?: true | DiscussionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscussionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscussionMaxAggregateInputType
  }

  export type GetDiscussionAggregateType<T extends DiscussionAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscussion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscussion[P]>
      : GetScalarType<T[P], AggregateDiscussion[P]>
  }




  export type DiscussionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscussionWhereInput
    orderBy?: DiscussionOrderByWithAggregationInput | DiscussionOrderByWithAggregationInput[]
    by: DiscussionScalarFieldEnum[] | DiscussionScalarFieldEnum
    having?: DiscussionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscussionCountAggregateInputType | true
    _min?: DiscussionMinAggregateInputType
    _max?: DiscussionMaxAggregateInputType
  }

  export type DiscussionGroupByOutputType = {
    id_discussion: string
    message: string
    date_message: Date
    heure_message: string | null
    id_demande: string
    _count: DiscussionCountAggregateOutputType | null
    _min: DiscussionMinAggregateOutputType | null
    _max: DiscussionMaxAggregateOutputType | null
  }

  type GetDiscussionGroupByPayload<T extends DiscussionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscussionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscussionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscussionGroupByOutputType[P]>
            : GetScalarType<T[P], DiscussionGroupByOutputType[P]>
        }
      >
    >


  export type DiscussionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_discussion?: boolean
    message?: boolean
    date_message?: boolean
    heure_message?: boolean
    id_demande?: boolean
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussion"]>

  export type DiscussionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_discussion?: boolean
    message?: boolean
    date_message?: boolean
    heure_message?: boolean
    id_demande?: boolean
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussion"]>

  export type DiscussionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_discussion?: boolean
    message?: boolean
    date_message?: boolean
    heure_message?: boolean
    id_demande?: boolean
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discussion"]>

  export type DiscussionSelectScalar = {
    id_discussion?: boolean
    message?: boolean
    date_message?: boolean
    heure_message?: boolean
    id_demande?: boolean
  }

  export type DiscussionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_discussion" | "message" | "date_message" | "heure_message" | "id_demande", ExtArgs["result"]["discussion"]>
  export type DiscussionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
  }
  export type DiscussionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
  }
  export type DiscussionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
  }

  export type $DiscussionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Discussion"
    objects: {
      demande: Prisma.$DemandePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_discussion: string
      message: string
      date_message: Date
      heure_message: string | null
      id_demande: string
    }, ExtArgs["result"]["discussion"]>
    composites: {}
  }

  type DiscussionGetPayload<S extends boolean | null | undefined | DiscussionDefaultArgs> = $Result.GetResult<Prisma.$DiscussionPayload, S>

  type DiscussionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscussionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscussionCountAggregateInputType | true
    }

  export interface DiscussionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Discussion'], meta: { name: 'Discussion' } }
    /**
     * Find zero or one Discussion that matches the filter.
     * @param {DiscussionFindUniqueArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscussionFindUniqueArgs>(args: SelectSubset<T, DiscussionFindUniqueArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discussion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscussionFindUniqueOrThrowArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscussionFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscussionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discussion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionFindFirstArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscussionFindFirstArgs>(args?: SelectSubset<T, DiscussionFindFirstArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discussion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionFindFirstOrThrowArgs} args - Arguments to find a Discussion
     * @example
     * // Get one Discussion
     * const discussion = await prisma.discussion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscussionFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscussionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discussions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discussions
     * const discussions = await prisma.discussion.findMany()
     * 
     * // Get first 10 Discussions
     * const discussions = await prisma.discussion.findMany({ take: 10 })
     * 
     * // Only select the `id_discussion`
     * const discussionWithId_discussionOnly = await prisma.discussion.findMany({ select: { id_discussion: true } })
     * 
     */
    findMany<T extends DiscussionFindManyArgs>(args?: SelectSubset<T, DiscussionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discussion.
     * @param {DiscussionCreateArgs} args - Arguments to create a Discussion.
     * @example
     * // Create one Discussion
     * const Discussion = await prisma.discussion.create({
     *   data: {
     *     // ... data to create a Discussion
     *   }
     * })
     * 
     */
    create<T extends DiscussionCreateArgs>(args: SelectSubset<T, DiscussionCreateArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Discussions.
     * @param {DiscussionCreateManyArgs} args - Arguments to create many Discussions.
     * @example
     * // Create many Discussions
     * const discussion = await prisma.discussion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscussionCreateManyArgs>(args?: SelectSubset<T, DiscussionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Discussions and returns the data saved in the database.
     * @param {DiscussionCreateManyAndReturnArgs} args - Arguments to create many Discussions.
     * @example
     * // Create many Discussions
     * const discussion = await prisma.discussion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Discussions and only return the `id_discussion`
     * const discussionWithId_discussionOnly = await prisma.discussion.createManyAndReturn({
     *   select: { id_discussion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscussionCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscussionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Discussion.
     * @param {DiscussionDeleteArgs} args - Arguments to delete one Discussion.
     * @example
     * // Delete one Discussion
     * const Discussion = await prisma.discussion.delete({
     *   where: {
     *     // ... filter to delete one Discussion
     *   }
     * })
     * 
     */
    delete<T extends DiscussionDeleteArgs>(args: SelectSubset<T, DiscussionDeleteArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discussion.
     * @param {DiscussionUpdateArgs} args - Arguments to update one Discussion.
     * @example
     * // Update one Discussion
     * const discussion = await prisma.discussion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscussionUpdateArgs>(args: SelectSubset<T, DiscussionUpdateArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Discussions.
     * @param {DiscussionDeleteManyArgs} args - Arguments to filter Discussions to delete.
     * @example
     * // Delete a few Discussions
     * const { count } = await prisma.discussion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscussionDeleteManyArgs>(args?: SelectSubset<T, DiscussionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discussions
     * const discussion = await prisma.discussion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscussionUpdateManyArgs>(args: SelectSubset<T, DiscussionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discussions and returns the data updated in the database.
     * @param {DiscussionUpdateManyAndReturnArgs} args - Arguments to update many Discussions.
     * @example
     * // Update many Discussions
     * const discussion = await prisma.discussion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Discussions and only return the `id_discussion`
     * const discussionWithId_discussionOnly = await prisma.discussion.updateManyAndReturn({
     *   select: { id_discussion: true },
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
    updateManyAndReturn<T extends DiscussionUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscussionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Discussion.
     * @param {DiscussionUpsertArgs} args - Arguments to update or create a Discussion.
     * @example
     * // Update or create a Discussion
     * const discussion = await prisma.discussion.upsert({
     *   create: {
     *     // ... data to create a Discussion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discussion we want to update
     *   }
     * })
     */
    upsert<T extends DiscussionUpsertArgs>(args: SelectSubset<T, DiscussionUpsertArgs<ExtArgs>>): Prisma__DiscussionClient<$Result.GetResult<Prisma.$DiscussionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Discussions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionCountArgs} args - Arguments to filter Discussions to count.
     * @example
     * // Count the number of Discussions
     * const count = await prisma.discussion.count({
     *   where: {
     *     // ... the filter for the Discussions we want to count
     *   }
     * })
    **/
    count<T extends DiscussionCountArgs>(
      args?: Subset<T, DiscussionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscussionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discussion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscussionAggregateArgs>(args: Subset<T, DiscussionAggregateArgs>): Prisma.PrismaPromise<GetDiscussionAggregateType<T>>

    /**
     * Group by Discussion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscussionGroupByArgs} args - Group by arguments.
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
      T extends DiscussionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscussionGroupByArgs['orderBy'] }
        : { orderBy?: DiscussionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscussionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscussionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Discussion model
   */
  readonly fields: DiscussionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discussion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscussionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    demande<T extends DemandeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DemandeDefaultArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Discussion model
   */
  interface DiscussionFieldRefs {
    readonly id_discussion: FieldRef<"Discussion", 'String'>
    readonly message: FieldRef<"Discussion", 'String'>
    readonly date_message: FieldRef<"Discussion", 'DateTime'>
    readonly heure_message: FieldRef<"Discussion", 'String'>
    readonly id_demande: FieldRef<"Discussion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Discussion findUnique
   */
  export type DiscussionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion findUniqueOrThrow
   */
  export type DiscussionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion findFirst
   */
  export type DiscussionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discussions.
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discussions.
     */
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Discussion findFirstOrThrow
   */
  export type DiscussionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussion to fetch.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discussions.
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discussions.
     */
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Discussion findMany
   */
  export type DiscussionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter, which Discussions to fetch.
     */
    where?: DiscussionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discussions to fetch.
     */
    orderBy?: DiscussionOrderByWithRelationInput | DiscussionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Discussions.
     */
    cursor?: DiscussionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discussions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discussions.
     */
    skip?: number
    distinct?: DiscussionScalarFieldEnum | DiscussionScalarFieldEnum[]
  }

  /**
   * Discussion create
   */
  export type DiscussionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * The data needed to create a Discussion.
     */
    data: XOR<DiscussionCreateInput, DiscussionUncheckedCreateInput>
  }

  /**
   * Discussion createMany
   */
  export type DiscussionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Discussions.
     */
    data: DiscussionCreateManyInput | DiscussionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discussion createManyAndReturn
   */
  export type DiscussionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * The data used to create many Discussions.
     */
    data: DiscussionCreateManyInput | DiscussionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Discussion update
   */
  export type DiscussionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * The data needed to update a Discussion.
     */
    data: XOR<DiscussionUpdateInput, DiscussionUncheckedUpdateInput>
    /**
     * Choose, which Discussion to update.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion updateMany
   */
  export type DiscussionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Discussions.
     */
    data: XOR<DiscussionUpdateManyMutationInput, DiscussionUncheckedUpdateManyInput>
    /**
     * Filter which Discussions to update
     */
    where?: DiscussionWhereInput
    /**
     * Limit how many Discussions to update.
     */
    limit?: number
  }

  /**
   * Discussion updateManyAndReturn
   */
  export type DiscussionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * The data used to update Discussions.
     */
    data: XOR<DiscussionUpdateManyMutationInput, DiscussionUncheckedUpdateManyInput>
    /**
     * Filter which Discussions to update
     */
    where?: DiscussionWhereInput
    /**
     * Limit how many Discussions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Discussion upsert
   */
  export type DiscussionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * The filter to search for the Discussion to update in case it exists.
     */
    where: DiscussionWhereUniqueInput
    /**
     * In case the Discussion found by the `where` argument doesn't exist, create a new Discussion with this data.
     */
    create: XOR<DiscussionCreateInput, DiscussionUncheckedCreateInput>
    /**
     * In case the Discussion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscussionUpdateInput, DiscussionUncheckedUpdateInput>
  }

  /**
   * Discussion delete
   */
  export type DiscussionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
    /**
     * Filter which Discussion to delete.
     */
    where: DiscussionWhereUniqueInput
  }

  /**
   * Discussion deleteMany
   */
  export type DiscussionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discussions to delete
     */
    where?: DiscussionWhereInput
    /**
     * Limit how many Discussions to delete.
     */
    limit?: number
  }

  /**
   * Discussion without action
   */
  export type DiscussionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discussion
     */
    select?: DiscussionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discussion
     */
    omit?: DiscussionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscussionInclude<ExtArgs> | null
  }


  /**
   * Model FicheDeConge
   */

  export type AggregateFicheDeConge = {
    _count: FicheDeCongeCountAggregateOutputType | null
    _min: FicheDeCongeMinAggregateOutputType | null
    _max: FicheDeCongeMaxAggregateOutputType | null
  }

  export type FicheDeCongeMinAggregateOutputType = {
    id_ficheconge: string | null
    message: string | null
    date_message: Date | null
    heure_message: string | null
    id_demande: string | null
    id_personnel: string | null
  }

  export type FicheDeCongeMaxAggregateOutputType = {
    id_ficheconge: string | null
    message: string | null
    date_message: Date | null
    heure_message: string | null
    id_demande: string | null
    id_personnel: string | null
  }

  export type FicheDeCongeCountAggregateOutputType = {
    id_ficheconge: number
    message: number
    date_message: number
    heure_message: number
    id_demande: number
    id_personnel: number
    _all: number
  }


  export type FicheDeCongeMinAggregateInputType = {
    id_ficheconge?: true
    message?: true
    date_message?: true
    heure_message?: true
    id_demande?: true
    id_personnel?: true
  }

  export type FicheDeCongeMaxAggregateInputType = {
    id_ficheconge?: true
    message?: true
    date_message?: true
    heure_message?: true
    id_demande?: true
    id_personnel?: true
  }

  export type FicheDeCongeCountAggregateInputType = {
    id_ficheconge?: true
    message?: true
    date_message?: true
    heure_message?: true
    id_demande?: true
    id_personnel?: true
    _all?: true
  }

  export type FicheDeCongeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FicheDeConge to aggregate.
     */
    where?: FicheDeCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FicheDeConges to fetch.
     */
    orderBy?: FicheDeCongeOrderByWithRelationInput | FicheDeCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FicheDeCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FicheDeConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FicheDeConges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FicheDeConges
    **/
    _count?: true | FicheDeCongeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FicheDeCongeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FicheDeCongeMaxAggregateInputType
  }

  export type GetFicheDeCongeAggregateType<T extends FicheDeCongeAggregateArgs> = {
        [P in keyof T & keyof AggregateFicheDeConge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFicheDeConge[P]>
      : GetScalarType<T[P], AggregateFicheDeConge[P]>
  }




  export type FicheDeCongeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FicheDeCongeWhereInput
    orderBy?: FicheDeCongeOrderByWithAggregationInput | FicheDeCongeOrderByWithAggregationInput[]
    by: FicheDeCongeScalarFieldEnum[] | FicheDeCongeScalarFieldEnum
    having?: FicheDeCongeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FicheDeCongeCountAggregateInputType | true
    _min?: FicheDeCongeMinAggregateInputType
    _max?: FicheDeCongeMaxAggregateInputType
  }

  export type FicheDeCongeGroupByOutputType = {
    id_ficheconge: string
    message: string | null
    date_message: Date
    heure_message: string | null
    id_demande: string
    id_personnel: string
    _count: FicheDeCongeCountAggregateOutputType | null
    _min: FicheDeCongeMinAggregateOutputType | null
    _max: FicheDeCongeMaxAggregateOutputType | null
  }

  type GetFicheDeCongeGroupByPayload<T extends FicheDeCongeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FicheDeCongeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FicheDeCongeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FicheDeCongeGroupByOutputType[P]>
            : GetScalarType<T[P], FicheDeCongeGroupByOutputType[P]>
        }
      >
    >


  export type FicheDeCongeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ficheconge?: boolean
    message?: boolean
    date_message?: boolean
    heure_message?: boolean
    id_demande?: boolean
    id_personnel?: boolean
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
    personnel?: boolean | PersonnelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ficheDeConge"]>

  export type FicheDeCongeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ficheconge?: boolean
    message?: boolean
    date_message?: boolean
    heure_message?: boolean
    id_demande?: boolean
    id_personnel?: boolean
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
    personnel?: boolean | PersonnelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ficheDeConge"]>

  export type FicheDeCongeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_ficheconge?: boolean
    message?: boolean
    date_message?: boolean
    heure_message?: boolean
    id_demande?: boolean
    id_personnel?: boolean
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
    personnel?: boolean | PersonnelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ficheDeConge"]>

  export type FicheDeCongeSelectScalar = {
    id_ficheconge?: boolean
    message?: boolean
    date_message?: boolean
    heure_message?: boolean
    id_demande?: boolean
    id_personnel?: boolean
  }

  export type FicheDeCongeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_ficheconge" | "message" | "date_message" | "heure_message" | "id_demande" | "id_personnel", ExtArgs["result"]["ficheDeConge"]>
  export type FicheDeCongeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
    personnel?: boolean | PersonnelDefaultArgs<ExtArgs>
  }
  export type FicheDeCongeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
    personnel?: boolean | PersonnelDefaultArgs<ExtArgs>
  }
  export type FicheDeCongeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    demande?: boolean | DemandeDefaultArgs<ExtArgs>
    personnel?: boolean | PersonnelDefaultArgs<ExtArgs>
  }

  export type $FicheDeCongePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FicheDeConge"
    objects: {
      demande: Prisma.$DemandePayload<ExtArgs>
      personnel: Prisma.$PersonnelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_ficheconge: string
      message: string | null
      date_message: Date
      heure_message: string | null
      id_demande: string
      id_personnel: string
    }, ExtArgs["result"]["ficheDeConge"]>
    composites: {}
  }

  type FicheDeCongeGetPayload<S extends boolean | null | undefined | FicheDeCongeDefaultArgs> = $Result.GetResult<Prisma.$FicheDeCongePayload, S>

  type FicheDeCongeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FicheDeCongeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FicheDeCongeCountAggregateInputType | true
    }

  export interface FicheDeCongeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FicheDeConge'], meta: { name: 'FicheDeConge' } }
    /**
     * Find zero or one FicheDeConge that matches the filter.
     * @param {FicheDeCongeFindUniqueArgs} args - Arguments to find a FicheDeConge
     * @example
     * // Get one FicheDeConge
     * const ficheDeConge = await prisma.ficheDeConge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FicheDeCongeFindUniqueArgs>(args: SelectSubset<T, FicheDeCongeFindUniqueArgs<ExtArgs>>): Prisma__FicheDeCongeClient<$Result.GetResult<Prisma.$FicheDeCongePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FicheDeConge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FicheDeCongeFindUniqueOrThrowArgs} args - Arguments to find a FicheDeConge
     * @example
     * // Get one FicheDeConge
     * const ficheDeConge = await prisma.ficheDeConge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FicheDeCongeFindUniqueOrThrowArgs>(args: SelectSubset<T, FicheDeCongeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FicheDeCongeClient<$Result.GetResult<Prisma.$FicheDeCongePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FicheDeConge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FicheDeCongeFindFirstArgs} args - Arguments to find a FicheDeConge
     * @example
     * // Get one FicheDeConge
     * const ficheDeConge = await prisma.ficheDeConge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FicheDeCongeFindFirstArgs>(args?: SelectSubset<T, FicheDeCongeFindFirstArgs<ExtArgs>>): Prisma__FicheDeCongeClient<$Result.GetResult<Prisma.$FicheDeCongePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FicheDeConge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FicheDeCongeFindFirstOrThrowArgs} args - Arguments to find a FicheDeConge
     * @example
     * // Get one FicheDeConge
     * const ficheDeConge = await prisma.ficheDeConge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FicheDeCongeFindFirstOrThrowArgs>(args?: SelectSubset<T, FicheDeCongeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FicheDeCongeClient<$Result.GetResult<Prisma.$FicheDeCongePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FicheDeConges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FicheDeCongeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FicheDeConges
     * const ficheDeConges = await prisma.ficheDeConge.findMany()
     * 
     * // Get first 10 FicheDeConges
     * const ficheDeConges = await prisma.ficheDeConge.findMany({ take: 10 })
     * 
     * // Only select the `id_ficheconge`
     * const ficheDeCongeWithId_fichecongeOnly = await prisma.ficheDeConge.findMany({ select: { id_ficheconge: true } })
     * 
     */
    findMany<T extends FicheDeCongeFindManyArgs>(args?: SelectSubset<T, FicheDeCongeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FicheDeCongePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FicheDeConge.
     * @param {FicheDeCongeCreateArgs} args - Arguments to create a FicheDeConge.
     * @example
     * // Create one FicheDeConge
     * const FicheDeConge = await prisma.ficheDeConge.create({
     *   data: {
     *     // ... data to create a FicheDeConge
     *   }
     * })
     * 
     */
    create<T extends FicheDeCongeCreateArgs>(args: SelectSubset<T, FicheDeCongeCreateArgs<ExtArgs>>): Prisma__FicheDeCongeClient<$Result.GetResult<Prisma.$FicheDeCongePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FicheDeConges.
     * @param {FicheDeCongeCreateManyArgs} args - Arguments to create many FicheDeConges.
     * @example
     * // Create many FicheDeConges
     * const ficheDeConge = await prisma.ficheDeConge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FicheDeCongeCreateManyArgs>(args?: SelectSubset<T, FicheDeCongeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FicheDeConges and returns the data saved in the database.
     * @param {FicheDeCongeCreateManyAndReturnArgs} args - Arguments to create many FicheDeConges.
     * @example
     * // Create many FicheDeConges
     * const ficheDeConge = await prisma.ficheDeConge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FicheDeConges and only return the `id_ficheconge`
     * const ficheDeCongeWithId_fichecongeOnly = await prisma.ficheDeConge.createManyAndReturn({
     *   select: { id_ficheconge: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FicheDeCongeCreateManyAndReturnArgs>(args?: SelectSubset<T, FicheDeCongeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FicheDeCongePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FicheDeConge.
     * @param {FicheDeCongeDeleteArgs} args - Arguments to delete one FicheDeConge.
     * @example
     * // Delete one FicheDeConge
     * const FicheDeConge = await prisma.ficheDeConge.delete({
     *   where: {
     *     // ... filter to delete one FicheDeConge
     *   }
     * })
     * 
     */
    delete<T extends FicheDeCongeDeleteArgs>(args: SelectSubset<T, FicheDeCongeDeleteArgs<ExtArgs>>): Prisma__FicheDeCongeClient<$Result.GetResult<Prisma.$FicheDeCongePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FicheDeConge.
     * @param {FicheDeCongeUpdateArgs} args - Arguments to update one FicheDeConge.
     * @example
     * // Update one FicheDeConge
     * const ficheDeConge = await prisma.ficheDeConge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FicheDeCongeUpdateArgs>(args: SelectSubset<T, FicheDeCongeUpdateArgs<ExtArgs>>): Prisma__FicheDeCongeClient<$Result.GetResult<Prisma.$FicheDeCongePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FicheDeConges.
     * @param {FicheDeCongeDeleteManyArgs} args - Arguments to filter FicheDeConges to delete.
     * @example
     * // Delete a few FicheDeConges
     * const { count } = await prisma.ficheDeConge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FicheDeCongeDeleteManyArgs>(args?: SelectSubset<T, FicheDeCongeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FicheDeConges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FicheDeCongeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FicheDeConges
     * const ficheDeConge = await prisma.ficheDeConge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FicheDeCongeUpdateManyArgs>(args: SelectSubset<T, FicheDeCongeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FicheDeConges and returns the data updated in the database.
     * @param {FicheDeCongeUpdateManyAndReturnArgs} args - Arguments to update many FicheDeConges.
     * @example
     * // Update many FicheDeConges
     * const ficheDeConge = await prisma.ficheDeConge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FicheDeConges and only return the `id_ficheconge`
     * const ficheDeCongeWithId_fichecongeOnly = await prisma.ficheDeConge.updateManyAndReturn({
     *   select: { id_ficheconge: true },
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
    updateManyAndReturn<T extends FicheDeCongeUpdateManyAndReturnArgs>(args: SelectSubset<T, FicheDeCongeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FicheDeCongePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FicheDeConge.
     * @param {FicheDeCongeUpsertArgs} args - Arguments to update or create a FicheDeConge.
     * @example
     * // Update or create a FicheDeConge
     * const ficheDeConge = await prisma.ficheDeConge.upsert({
     *   create: {
     *     // ... data to create a FicheDeConge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FicheDeConge we want to update
     *   }
     * })
     */
    upsert<T extends FicheDeCongeUpsertArgs>(args: SelectSubset<T, FicheDeCongeUpsertArgs<ExtArgs>>): Prisma__FicheDeCongeClient<$Result.GetResult<Prisma.$FicheDeCongePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FicheDeConges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FicheDeCongeCountArgs} args - Arguments to filter FicheDeConges to count.
     * @example
     * // Count the number of FicheDeConges
     * const count = await prisma.ficheDeConge.count({
     *   where: {
     *     // ... the filter for the FicheDeConges we want to count
     *   }
     * })
    **/
    count<T extends FicheDeCongeCountArgs>(
      args?: Subset<T, FicheDeCongeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FicheDeCongeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FicheDeConge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FicheDeCongeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FicheDeCongeAggregateArgs>(args: Subset<T, FicheDeCongeAggregateArgs>): Prisma.PrismaPromise<GetFicheDeCongeAggregateType<T>>

    /**
     * Group by FicheDeConge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FicheDeCongeGroupByArgs} args - Group by arguments.
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
      T extends FicheDeCongeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FicheDeCongeGroupByArgs['orderBy'] }
        : { orderBy?: FicheDeCongeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FicheDeCongeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFicheDeCongeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FicheDeConge model
   */
  readonly fields: FicheDeCongeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FicheDeConge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FicheDeCongeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    demande<T extends DemandeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DemandeDefaultArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    personnel<T extends PersonnelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonnelDefaultArgs<ExtArgs>>): Prisma__PersonnelClient<$Result.GetResult<Prisma.$PersonnelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FicheDeConge model
   */
  interface FicheDeCongeFieldRefs {
    readonly id_ficheconge: FieldRef<"FicheDeConge", 'String'>
    readonly message: FieldRef<"FicheDeConge", 'String'>
    readonly date_message: FieldRef<"FicheDeConge", 'DateTime'>
    readonly heure_message: FieldRef<"FicheDeConge", 'String'>
    readonly id_demande: FieldRef<"FicheDeConge", 'String'>
    readonly id_personnel: FieldRef<"FicheDeConge", 'String'>
  }
    

  // Custom InputTypes
  /**
   * FicheDeConge findUnique
   */
  export type FicheDeCongeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FicheDeConge
     */
    select?: FicheDeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FicheDeConge
     */
    omit?: FicheDeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FicheDeCongeInclude<ExtArgs> | null
    /**
     * Filter, which FicheDeConge to fetch.
     */
    where: FicheDeCongeWhereUniqueInput
  }

  /**
   * FicheDeConge findUniqueOrThrow
   */
  export type FicheDeCongeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FicheDeConge
     */
    select?: FicheDeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FicheDeConge
     */
    omit?: FicheDeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FicheDeCongeInclude<ExtArgs> | null
    /**
     * Filter, which FicheDeConge to fetch.
     */
    where: FicheDeCongeWhereUniqueInput
  }

  /**
   * FicheDeConge findFirst
   */
  export type FicheDeCongeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FicheDeConge
     */
    select?: FicheDeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FicheDeConge
     */
    omit?: FicheDeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FicheDeCongeInclude<ExtArgs> | null
    /**
     * Filter, which FicheDeConge to fetch.
     */
    where?: FicheDeCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FicheDeConges to fetch.
     */
    orderBy?: FicheDeCongeOrderByWithRelationInput | FicheDeCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FicheDeConges.
     */
    cursor?: FicheDeCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FicheDeConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FicheDeConges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FicheDeConges.
     */
    distinct?: FicheDeCongeScalarFieldEnum | FicheDeCongeScalarFieldEnum[]
  }

  /**
   * FicheDeConge findFirstOrThrow
   */
  export type FicheDeCongeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FicheDeConge
     */
    select?: FicheDeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FicheDeConge
     */
    omit?: FicheDeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FicheDeCongeInclude<ExtArgs> | null
    /**
     * Filter, which FicheDeConge to fetch.
     */
    where?: FicheDeCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FicheDeConges to fetch.
     */
    orderBy?: FicheDeCongeOrderByWithRelationInput | FicheDeCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FicheDeConges.
     */
    cursor?: FicheDeCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FicheDeConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FicheDeConges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FicheDeConges.
     */
    distinct?: FicheDeCongeScalarFieldEnum | FicheDeCongeScalarFieldEnum[]
  }

  /**
   * FicheDeConge findMany
   */
  export type FicheDeCongeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FicheDeConge
     */
    select?: FicheDeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FicheDeConge
     */
    omit?: FicheDeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FicheDeCongeInclude<ExtArgs> | null
    /**
     * Filter, which FicheDeConges to fetch.
     */
    where?: FicheDeCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FicheDeConges to fetch.
     */
    orderBy?: FicheDeCongeOrderByWithRelationInput | FicheDeCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FicheDeConges.
     */
    cursor?: FicheDeCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FicheDeConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FicheDeConges.
     */
    skip?: number
    distinct?: FicheDeCongeScalarFieldEnum | FicheDeCongeScalarFieldEnum[]
  }

  /**
   * FicheDeConge create
   */
  export type FicheDeCongeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FicheDeConge
     */
    select?: FicheDeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FicheDeConge
     */
    omit?: FicheDeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FicheDeCongeInclude<ExtArgs> | null
    /**
     * The data needed to create a FicheDeConge.
     */
    data: XOR<FicheDeCongeCreateInput, FicheDeCongeUncheckedCreateInput>
  }

  /**
   * FicheDeConge createMany
   */
  export type FicheDeCongeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FicheDeConges.
     */
    data: FicheDeCongeCreateManyInput | FicheDeCongeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FicheDeConge createManyAndReturn
   */
  export type FicheDeCongeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FicheDeConge
     */
    select?: FicheDeCongeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FicheDeConge
     */
    omit?: FicheDeCongeOmit<ExtArgs> | null
    /**
     * The data used to create many FicheDeConges.
     */
    data: FicheDeCongeCreateManyInput | FicheDeCongeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FicheDeCongeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FicheDeConge update
   */
  export type FicheDeCongeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FicheDeConge
     */
    select?: FicheDeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FicheDeConge
     */
    omit?: FicheDeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FicheDeCongeInclude<ExtArgs> | null
    /**
     * The data needed to update a FicheDeConge.
     */
    data: XOR<FicheDeCongeUpdateInput, FicheDeCongeUncheckedUpdateInput>
    /**
     * Choose, which FicheDeConge to update.
     */
    where: FicheDeCongeWhereUniqueInput
  }

  /**
   * FicheDeConge updateMany
   */
  export type FicheDeCongeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FicheDeConges.
     */
    data: XOR<FicheDeCongeUpdateManyMutationInput, FicheDeCongeUncheckedUpdateManyInput>
    /**
     * Filter which FicheDeConges to update
     */
    where?: FicheDeCongeWhereInput
    /**
     * Limit how many FicheDeConges to update.
     */
    limit?: number
  }

  /**
   * FicheDeConge updateManyAndReturn
   */
  export type FicheDeCongeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FicheDeConge
     */
    select?: FicheDeCongeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FicheDeConge
     */
    omit?: FicheDeCongeOmit<ExtArgs> | null
    /**
     * The data used to update FicheDeConges.
     */
    data: XOR<FicheDeCongeUpdateManyMutationInput, FicheDeCongeUncheckedUpdateManyInput>
    /**
     * Filter which FicheDeConges to update
     */
    where?: FicheDeCongeWhereInput
    /**
     * Limit how many FicheDeConges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FicheDeCongeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FicheDeConge upsert
   */
  export type FicheDeCongeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FicheDeConge
     */
    select?: FicheDeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FicheDeConge
     */
    omit?: FicheDeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FicheDeCongeInclude<ExtArgs> | null
    /**
     * The filter to search for the FicheDeConge to update in case it exists.
     */
    where: FicheDeCongeWhereUniqueInput
    /**
     * In case the FicheDeConge found by the `where` argument doesn't exist, create a new FicheDeConge with this data.
     */
    create: XOR<FicheDeCongeCreateInput, FicheDeCongeUncheckedCreateInput>
    /**
     * In case the FicheDeConge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FicheDeCongeUpdateInput, FicheDeCongeUncheckedUpdateInput>
  }

  /**
   * FicheDeConge delete
   */
  export type FicheDeCongeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FicheDeConge
     */
    select?: FicheDeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FicheDeConge
     */
    omit?: FicheDeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FicheDeCongeInclude<ExtArgs> | null
    /**
     * Filter which FicheDeConge to delete.
     */
    where: FicheDeCongeWhereUniqueInput
  }

  /**
   * FicheDeConge deleteMany
   */
  export type FicheDeCongeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FicheDeConges to delete
     */
    where?: FicheDeCongeWhereInput
    /**
     * Limit how many FicheDeConges to delete.
     */
    limit?: number
  }

  /**
   * FicheDeConge without action
   */
  export type FicheDeCongeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FicheDeConge
     */
    select?: FicheDeCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FicheDeConge
     */
    omit?: FicheDeCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FicheDeCongeInclude<ExtArgs> | null
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


  export const DirectionScalarFieldEnum: {
    id_direction: 'id_direction',
    code_direction: 'code_direction',
    nom_direction: 'nom_direction',
    nb_personnel: 'nb_personnel',
    nom_directeur: 'nom_directeur',
    email_direction: 'email_direction',
    statut: 'statut',
    date_creation: 'date_creation'
  };

  export type DirectionScalarFieldEnum = (typeof DirectionScalarFieldEnum)[keyof typeof DirectionScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id_service: 'id_service',
    code_service: 'code_service',
    nom_service: 'nom_service',
    nb_personnel: 'nb_personnel',
    date_creation: 'date_creation',
    id_direction: 'id_direction'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const PersonnelScalarFieldEnum: {
    id_personnel: 'id_personnel',
    nom_personnel: 'nom_personnel',
    prenom_personnel: 'prenom_personnel',
    email_personnel: 'email_personnel',
    email_travail: 'email_travail',
    password: 'password',
    date_naissance: 'date_naissance',
    matricule_personnel: 'matricule_personnel',
    telephone_travail: 'telephone_travail',
    telephone_personnel: 'telephone_personnel',
    ville_personnel: 'ville_personnel',
    adresse_personnel: 'adresse_personnel',
    codepostal: 'codepostal',
    pays_personnel: 'pays_personnel',
    telephone_contact_urgence: 'telephone_contact_urgence',
    nom_contact_urgence: 'nom_contact_urgence',
    role_personnel: 'role_personnel',
    type_personnel: 'type_personnel',
    date_creation: 'date_creation',
    id_service: 'id_service',
    is_active: 'is_active'
  };

  export type PersonnelScalarFieldEnum = (typeof PersonnelScalarFieldEnum)[keyof typeof PersonnelScalarFieldEnum]


  export const TypeCongeScalarFieldEnum: {
    id_typeconge: 'id_typeconge',
    libelle_typeconge: 'libelle_typeconge',
    date_creation: 'date_creation',
    is_active: 'is_active'
  };

  export type TypeCongeScalarFieldEnum = (typeof TypeCongeScalarFieldEnum)[keyof typeof TypeCongeScalarFieldEnum]


  export const PeriodeCongeScalarFieldEnum: {
    id_periodeconge: 'id_periodeconge',
    date_debut: 'date_debut',
    date_fin: 'date_fin',
    nb_jour: 'nb_jour',
    id_typeconge: 'id_typeconge'
  };

  export type PeriodeCongeScalarFieldEnum = (typeof PeriodeCongeScalarFieldEnum)[keyof typeof PeriodeCongeScalarFieldEnum]


  export const DemandeScalarFieldEnum: {
    id_demande: 'id_demande',
    type_demande: 'type_demande',
    statut_demande: 'statut_demande',
    date_demande: 'date_demande',
    motif: 'motif',
    id_personnel: 'id_personnel',
    id_service: 'id_service',
    id_periodeconge: 'id_periodeconge',
    id_chef_service: 'id_chef_service'
  };

  export type DemandeScalarFieldEnum = (typeof DemandeScalarFieldEnum)[keyof typeof DemandeScalarFieldEnum]


  export const DiscussionScalarFieldEnum: {
    id_discussion: 'id_discussion',
    message: 'message',
    date_message: 'date_message',
    heure_message: 'heure_message',
    id_demande: 'id_demande'
  };

  export type DiscussionScalarFieldEnum = (typeof DiscussionScalarFieldEnum)[keyof typeof DiscussionScalarFieldEnum]


  export const FicheDeCongeScalarFieldEnum: {
    id_ficheconge: 'id_ficheconge',
    message: 'message',
    date_message: 'date_message',
    heure_message: 'heure_message',
    id_demande: 'id_demande',
    id_personnel: 'id_personnel'
  };

  export type FicheDeCongeScalarFieldEnum = (typeof FicheDeCongeScalarFieldEnum)[keyof typeof FicheDeCongeScalarFieldEnum]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RolePersonnel'
   */
  export type EnumRolePersonnelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolePersonnel'>
    


  /**
   * Reference to a field of type 'RolePersonnel[]'
   */
  export type ListEnumRolePersonnelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolePersonnel[]'>
    


  /**
   * Reference to a field of type 'TypePersonnel'
   */
  export type EnumTypePersonnelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypePersonnel'>
    


  /**
   * Reference to a field of type 'TypePersonnel[]'
   */
  export type ListEnumTypePersonnelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypePersonnel[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'StatutDemande'
   */
  export type EnumStatutDemandeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDemande'>
    


  /**
   * Reference to a field of type 'StatutDemande[]'
   */
  export type ListEnumStatutDemandeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDemande[]'>
    


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


  export type DirectionWhereInput = {
    AND?: DirectionWhereInput | DirectionWhereInput[]
    OR?: DirectionWhereInput[]
    NOT?: DirectionWhereInput | DirectionWhereInput[]
    id_direction?: StringFilter<"Direction"> | string
    code_direction?: StringFilter<"Direction"> | string
    nom_direction?: StringFilter<"Direction"> | string
    nb_personnel?: IntNullableFilter<"Direction"> | number | null
    nom_directeur?: StringFilter<"Direction"> | string
    email_direction?: StringNullableFilter<"Direction"> | string | null
    statut?: StringNullableFilter<"Direction"> | string | null
    date_creation?: DateTimeFilter<"Direction"> | Date | string
    services?: ServiceListRelationFilter
  }

  export type DirectionOrderByWithRelationInput = {
    id_direction?: SortOrder
    code_direction?: SortOrder
    nom_direction?: SortOrder
    nb_personnel?: SortOrderInput | SortOrder
    nom_directeur?: SortOrder
    email_direction?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    date_creation?: SortOrder
    services?: ServiceOrderByRelationAggregateInput
  }

  export type DirectionWhereUniqueInput = Prisma.AtLeast<{
    id_direction?: string
    code_direction?: string
    AND?: DirectionWhereInput | DirectionWhereInput[]
    OR?: DirectionWhereInput[]
    NOT?: DirectionWhereInput | DirectionWhereInput[]
    nom_direction?: StringFilter<"Direction"> | string
    nb_personnel?: IntNullableFilter<"Direction"> | number | null
    nom_directeur?: StringFilter<"Direction"> | string
    email_direction?: StringNullableFilter<"Direction"> | string | null
    statut?: StringNullableFilter<"Direction"> | string | null
    date_creation?: DateTimeFilter<"Direction"> | Date | string
    services?: ServiceListRelationFilter
  }, "id_direction" | "code_direction">

  export type DirectionOrderByWithAggregationInput = {
    id_direction?: SortOrder
    code_direction?: SortOrder
    nom_direction?: SortOrder
    nb_personnel?: SortOrderInput | SortOrder
    nom_directeur?: SortOrder
    email_direction?: SortOrderInput | SortOrder
    statut?: SortOrderInput | SortOrder
    date_creation?: SortOrder
    _count?: DirectionCountOrderByAggregateInput
    _avg?: DirectionAvgOrderByAggregateInput
    _max?: DirectionMaxOrderByAggregateInput
    _min?: DirectionMinOrderByAggregateInput
    _sum?: DirectionSumOrderByAggregateInput
  }

  export type DirectionScalarWhereWithAggregatesInput = {
    AND?: DirectionScalarWhereWithAggregatesInput | DirectionScalarWhereWithAggregatesInput[]
    OR?: DirectionScalarWhereWithAggregatesInput[]
    NOT?: DirectionScalarWhereWithAggregatesInput | DirectionScalarWhereWithAggregatesInput[]
    id_direction?: StringWithAggregatesFilter<"Direction"> | string
    code_direction?: StringWithAggregatesFilter<"Direction"> | string
    nom_direction?: StringWithAggregatesFilter<"Direction"> | string
    nb_personnel?: IntNullableWithAggregatesFilter<"Direction"> | number | null
    nom_directeur?: StringWithAggregatesFilter<"Direction"> | string
    email_direction?: StringNullableWithAggregatesFilter<"Direction"> | string | null
    statut?: StringNullableWithAggregatesFilter<"Direction"> | string | null
    date_creation?: DateTimeWithAggregatesFilter<"Direction"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id_service?: StringFilter<"Service"> | string
    code_service?: StringFilter<"Service"> | string
    nom_service?: StringFilter<"Service"> | string
    nb_personnel?: IntNullableFilter<"Service"> | number | null
    date_creation?: DateTimeFilter<"Service"> | Date | string
    id_direction?: StringFilter<"Service"> | string
    direction?: XOR<DirectionScalarRelationFilter, DirectionWhereInput>
    personnels?: PersonnelListRelationFilter
    demandes?: DemandeListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id_service?: SortOrder
    code_service?: SortOrder
    nom_service?: SortOrder
    nb_personnel?: SortOrderInput | SortOrder
    date_creation?: SortOrder
    id_direction?: SortOrder
    direction?: DirectionOrderByWithRelationInput
    personnels?: PersonnelOrderByRelationAggregateInput
    demandes?: DemandeOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id_service?: string
    code_service?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    nom_service?: StringFilter<"Service"> | string
    nb_personnel?: IntNullableFilter<"Service"> | number | null
    date_creation?: DateTimeFilter<"Service"> | Date | string
    id_direction?: StringFilter<"Service"> | string
    direction?: XOR<DirectionScalarRelationFilter, DirectionWhereInput>
    personnels?: PersonnelListRelationFilter
    demandes?: DemandeListRelationFilter
  }, "id_service" | "code_service">

  export type ServiceOrderByWithAggregationInput = {
    id_service?: SortOrder
    code_service?: SortOrder
    nom_service?: SortOrder
    nb_personnel?: SortOrderInput | SortOrder
    date_creation?: SortOrder
    id_direction?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id_service?: StringWithAggregatesFilter<"Service"> | string
    code_service?: StringWithAggregatesFilter<"Service"> | string
    nom_service?: StringWithAggregatesFilter<"Service"> | string
    nb_personnel?: IntNullableWithAggregatesFilter<"Service"> | number | null
    date_creation?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    id_direction?: StringWithAggregatesFilter<"Service"> | string
  }

  export type PersonnelWhereInput = {
    AND?: PersonnelWhereInput | PersonnelWhereInput[]
    OR?: PersonnelWhereInput[]
    NOT?: PersonnelWhereInput | PersonnelWhereInput[]
    id_personnel?: StringFilter<"Personnel"> | string
    nom_personnel?: StringFilter<"Personnel"> | string
    prenom_personnel?: StringFilter<"Personnel"> | string
    email_personnel?: StringNullableFilter<"Personnel"> | string | null
    email_travail?: StringNullableFilter<"Personnel"> | string | null
    password?: StringNullableFilter<"Personnel"> | string | null
    date_naissance?: DateTimeNullableFilter<"Personnel"> | Date | string | null
    matricule_personnel?: StringNullableFilter<"Personnel"> | string | null
    telephone_travail?: StringNullableFilter<"Personnel"> | string | null
    telephone_personnel?: StringNullableFilter<"Personnel"> | string | null
    ville_personnel?: StringNullableFilter<"Personnel"> | string | null
    adresse_personnel?: StringNullableFilter<"Personnel"> | string | null
    codepostal?: StringNullableFilter<"Personnel"> | string | null
    pays_personnel?: StringNullableFilter<"Personnel"> | string | null
    telephone_contact_urgence?: StringNullableFilter<"Personnel"> | string | null
    nom_contact_urgence?: StringNullableFilter<"Personnel"> | string | null
    role_personnel?: EnumRolePersonnelFilter<"Personnel"> | $Enums.RolePersonnel
    type_personnel?: EnumTypePersonnelFilter<"Personnel"> | $Enums.TypePersonnel
    date_creation?: DateTimeFilter<"Personnel"> | Date | string
    id_service?: StringFilter<"Personnel"> | string
    is_active?: BoolFilter<"Personnel"> | boolean
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    demandes?: DemandeListRelationFilter
    fichesConge?: FicheDeCongeListRelationFilter
    demandesEnCoursChef?: DemandeListRelationFilter
  }

  export type PersonnelOrderByWithRelationInput = {
    id_personnel?: SortOrder
    nom_personnel?: SortOrder
    prenom_personnel?: SortOrder
    email_personnel?: SortOrderInput | SortOrder
    email_travail?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    date_naissance?: SortOrderInput | SortOrder
    matricule_personnel?: SortOrderInput | SortOrder
    telephone_travail?: SortOrderInput | SortOrder
    telephone_personnel?: SortOrderInput | SortOrder
    ville_personnel?: SortOrderInput | SortOrder
    adresse_personnel?: SortOrderInput | SortOrder
    codepostal?: SortOrderInput | SortOrder
    pays_personnel?: SortOrderInput | SortOrder
    telephone_contact_urgence?: SortOrderInput | SortOrder
    nom_contact_urgence?: SortOrderInput | SortOrder
    role_personnel?: SortOrder
    type_personnel?: SortOrder
    date_creation?: SortOrder
    id_service?: SortOrder
    is_active?: SortOrder
    service?: ServiceOrderByWithRelationInput
    demandes?: DemandeOrderByRelationAggregateInput
    fichesConge?: FicheDeCongeOrderByRelationAggregateInput
    demandesEnCoursChef?: DemandeOrderByRelationAggregateInput
  }

  export type PersonnelWhereUniqueInput = Prisma.AtLeast<{
    id_personnel?: string
    email_personnel?: string
    email_travail?: string
    matricule_personnel?: string
    AND?: PersonnelWhereInput | PersonnelWhereInput[]
    OR?: PersonnelWhereInput[]
    NOT?: PersonnelWhereInput | PersonnelWhereInput[]
    nom_personnel?: StringFilter<"Personnel"> | string
    prenom_personnel?: StringFilter<"Personnel"> | string
    password?: StringNullableFilter<"Personnel"> | string | null
    date_naissance?: DateTimeNullableFilter<"Personnel"> | Date | string | null
    telephone_travail?: StringNullableFilter<"Personnel"> | string | null
    telephone_personnel?: StringNullableFilter<"Personnel"> | string | null
    ville_personnel?: StringNullableFilter<"Personnel"> | string | null
    adresse_personnel?: StringNullableFilter<"Personnel"> | string | null
    codepostal?: StringNullableFilter<"Personnel"> | string | null
    pays_personnel?: StringNullableFilter<"Personnel"> | string | null
    telephone_contact_urgence?: StringNullableFilter<"Personnel"> | string | null
    nom_contact_urgence?: StringNullableFilter<"Personnel"> | string | null
    role_personnel?: EnumRolePersonnelFilter<"Personnel"> | $Enums.RolePersonnel
    type_personnel?: EnumTypePersonnelFilter<"Personnel"> | $Enums.TypePersonnel
    date_creation?: DateTimeFilter<"Personnel"> | Date | string
    id_service?: StringFilter<"Personnel"> | string
    is_active?: BoolFilter<"Personnel"> | boolean
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    demandes?: DemandeListRelationFilter
    fichesConge?: FicheDeCongeListRelationFilter
    demandesEnCoursChef?: DemandeListRelationFilter
  }, "id_personnel" | "email_personnel" | "email_travail" | "matricule_personnel">

  export type PersonnelOrderByWithAggregationInput = {
    id_personnel?: SortOrder
    nom_personnel?: SortOrder
    prenom_personnel?: SortOrder
    email_personnel?: SortOrderInput | SortOrder
    email_travail?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    date_naissance?: SortOrderInput | SortOrder
    matricule_personnel?: SortOrderInput | SortOrder
    telephone_travail?: SortOrderInput | SortOrder
    telephone_personnel?: SortOrderInput | SortOrder
    ville_personnel?: SortOrderInput | SortOrder
    adresse_personnel?: SortOrderInput | SortOrder
    codepostal?: SortOrderInput | SortOrder
    pays_personnel?: SortOrderInput | SortOrder
    telephone_contact_urgence?: SortOrderInput | SortOrder
    nom_contact_urgence?: SortOrderInput | SortOrder
    role_personnel?: SortOrder
    type_personnel?: SortOrder
    date_creation?: SortOrder
    id_service?: SortOrder
    is_active?: SortOrder
    _count?: PersonnelCountOrderByAggregateInput
    _max?: PersonnelMaxOrderByAggregateInput
    _min?: PersonnelMinOrderByAggregateInput
  }

  export type PersonnelScalarWhereWithAggregatesInput = {
    AND?: PersonnelScalarWhereWithAggregatesInput | PersonnelScalarWhereWithAggregatesInput[]
    OR?: PersonnelScalarWhereWithAggregatesInput[]
    NOT?: PersonnelScalarWhereWithAggregatesInput | PersonnelScalarWhereWithAggregatesInput[]
    id_personnel?: StringWithAggregatesFilter<"Personnel"> | string
    nom_personnel?: StringWithAggregatesFilter<"Personnel"> | string
    prenom_personnel?: StringWithAggregatesFilter<"Personnel"> | string
    email_personnel?: StringNullableWithAggregatesFilter<"Personnel"> | string | null
    email_travail?: StringNullableWithAggregatesFilter<"Personnel"> | string | null
    password?: StringNullableWithAggregatesFilter<"Personnel"> | string | null
    date_naissance?: DateTimeNullableWithAggregatesFilter<"Personnel"> | Date | string | null
    matricule_personnel?: StringNullableWithAggregatesFilter<"Personnel"> | string | null
    telephone_travail?: StringNullableWithAggregatesFilter<"Personnel"> | string | null
    telephone_personnel?: StringNullableWithAggregatesFilter<"Personnel"> | string | null
    ville_personnel?: StringNullableWithAggregatesFilter<"Personnel"> | string | null
    adresse_personnel?: StringNullableWithAggregatesFilter<"Personnel"> | string | null
    codepostal?: StringNullableWithAggregatesFilter<"Personnel"> | string | null
    pays_personnel?: StringNullableWithAggregatesFilter<"Personnel"> | string | null
    telephone_contact_urgence?: StringNullableWithAggregatesFilter<"Personnel"> | string | null
    nom_contact_urgence?: StringNullableWithAggregatesFilter<"Personnel"> | string | null
    role_personnel?: EnumRolePersonnelWithAggregatesFilter<"Personnel"> | $Enums.RolePersonnel
    type_personnel?: EnumTypePersonnelWithAggregatesFilter<"Personnel"> | $Enums.TypePersonnel
    date_creation?: DateTimeWithAggregatesFilter<"Personnel"> | Date | string
    id_service?: StringWithAggregatesFilter<"Personnel"> | string
    is_active?: BoolWithAggregatesFilter<"Personnel"> | boolean
  }

  export type TypeCongeWhereInput = {
    AND?: TypeCongeWhereInput | TypeCongeWhereInput[]
    OR?: TypeCongeWhereInput[]
    NOT?: TypeCongeWhereInput | TypeCongeWhereInput[]
    id_typeconge?: StringFilter<"TypeConge"> | string
    libelle_typeconge?: StringFilter<"TypeConge"> | string
    date_creation?: DateTimeFilter<"TypeConge"> | Date | string
    is_active?: BoolFilter<"TypeConge"> | boolean
    periodesConge?: PeriodeCongeListRelationFilter
  }

  export type TypeCongeOrderByWithRelationInput = {
    id_typeconge?: SortOrder
    libelle_typeconge?: SortOrder
    date_creation?: SortOrder
    is_active?: SortOrder
    periodesConge?: PeriodeCongeOrderByRelationAggregateInput
  }

  export type TypeCongeWhereUniqueInput = Prisma.AtLeast<{
    id_typeconge?: string
    libelle_typeconge?: string
    AND?: TypeCongeWhereInput | TypeCongeWhereInput[]
    OR?: TypeCongeWhereInput[]
    NOT?: TypeCongeWhereInput | TypeCongeWhereInput[]
    date_creation?: DateTimeFilter<"TypeConge"> | Date | string
    is_active?: BoolFilter<"TypeConge"> | boolean
    periodesConge?: PeriodeCongeListRelationFilter
  }, "id_typeconge" | "libelle_typeconge">

  export type TypeCongeOrderByWithAggregationInput = {
    id_typeconge?: SortOrder
    libelle_typeconge?: SortOrder
    date_creation?: SortOrder
    is_active?: SortOrder
    _count?: TypeCongeCountOrderByAggregateInput
    _max?: TypeCongeMaxOrderByAggregateInput
    _min?: TypeCongeMinOrderByAggregateInput
  }

  export type TypeCongeScalarWhereWithAggregatesInput = {
    AND?: TypeCongeScalarWhereWithAggregatesInput | TypeCongeScalarWhereWithAggregatesInput[]
    OR?: TypeCongeScalarWhereWithAggregatesInput[]
    NOT?: TypeCongeScalarWhereWithAggregatesInput | TypeCongeScalarWhereWithAggregatesInput[]
    id_typeconge?: StringWithAggregatesFilter<"TypeConge"> | string
    libelle_typeconge?: StringWithAggregatesFilter<"TypeConge"> | string
    date_creation?: DateTimeWithAggregatesFilter<"TypeConge"> | Date | string
    is_active?: BoolWithAggregatesFilter<"TypeConge"> | boolean
  }

  export type PeriodeCongeWhereInput = {
    AND?: PeriodeCongeWhereInput | PeriodeCongeWhereInput[]
    OR?: PeriodeCongeWhereInput[]
    NOT?: PeriodeCongeWhereInput | PeriodeCongeWhereInput[]
    id_periodeconge?: StringFilter<"PeriodeConge"> | string
    date_debut?: DateTimeFilter<"PeriodeConge"> | Date | string
    date_fin?: DateTimeFilter<"PeriodeConge"> | Date | string
    nb_jour?: IntFilter<"PeriodeConge"> | number
    id_typeconge?: StringFilter<"PeriodeConge"> | string
    typeConge?: XOR<TypeCongeScalarRelationFilter, TypeCongeWhereInput>
    demandes?: DemandeListRelationFilter
  }

  export type PeriodeCongeOrderByWithRelationInput = {
    id_periodeconge?: SortOrder
    date_debut?: SortOrder
    date_fin?: SortOrder
    nb_jour?: SortOrder
    id_typeconge?: SortOrder
    typeConge?: TypeCongeOrderByWithRelationInput
    demandes?: DemandeOrderByRelationAggregateInput
  }

  export type PeriodeCongeWhereUniqueInput = Prisma.AtLeast<{
    id_periodeconge?: string
    AND?: PeriodeCongeWhereInput | PeriodeCongeWhereInput[]
    OR?: PeriodeCongeWhereInput[]
    NOT?: PeriodeCongeWhereInput | PeriodeCongeWhereInput[]
    date_debut?: DateTimeFilter<"PeriodeConge"> | Date | string
    date_fin?: DateTimeFilter<"PeriodeConge"> | Date | string
    nb_jour?: IntFilter<"PeriodeConge"> | number
    id_typeconge?: StringFilter<"PeriodeConge"> | string
    typeConge?: XOR<TypeCongeScalarRelationFilter, TypeCongeWhereInput>
    demandes?: DemandeListRelationFilter
  }, "id_periodeconge">

  export type PeriodeCongeOrderByWithAggregationInput = {
    id_periodeconge?: SortOrder
    date_debut?: SortOrder
    date_fin?: SortOrder
    nb_jour?: SortOrder
    id_typeconge?: SortOrder
    _count?: PeriodeCongeCountOrderByAggregateInput
    _avg?: PeriodeCongeAvgOrderByAggregateInput
    _max?: PeriodeCongeMaxOrderByAggregateInput
    _min?: PeriodeCongeMinOrderByAggregateInput
    _sum?: PeriodeCongeSumOrderByAggregateInput
  }

  export type PeriodeCongeScalarWhereWithAggregatesInput = {
    AND?: PeriodeCongeScalarWhereWithAggregatesInput | PeriodeCongeScalarWhereWithAggregatesInput[]
    OR?: PeriodeCongeScalarWhereWithAggregatesInput[]
    NOT?: PeriodeCongeScalarWhereWithAggregatesInput | PeriodeCongeScalarWhereWithAggregatesInput[]
    id_periodeconge?: StringWithAggregatesFilter<"PeriodeConge"> | string
    date_debut?: DateTimeWithAggregatesFilter<"PeriodeConge"> | Date | string
    date_fin?: DateTimeWithAggregatesFilter<"PeriodeConge"> | Date | string
    nb_jour?: IntWithAggregatesFilter<"PeriodeConge"> | number
    id_typeconge?: StringWithAggregatesFilter<"PeriodeConge"> | string
  }

  export type DemandeWhereInput = {
    AND?: DemandeWhereInput | DemandeWhereInput[]
    OR?: DemandeWhereInput[]
    NOT?: DemandeWhereInput | DemandeWhereInput[]
    id_demande?: StringFilter<"Demande"> | string
    type_demande?: StringFilter<"Demande"> | string
    statut_demande?: EnumStatutDemandeFilter<"Demande"> | $Enums.StatutDemande
    date_demande?: DateTimeFilter<"Demande"> | Date | string
    motif?: StringNullableFilter<"Demande"> | string | null
    id_personnel?: StringFilter<"Demande"> | string
    id_service?: StringNullableFilter<"Demande"> | string | null
    id_periodeconge?: StringNullableFilter<"Demande"> | string | null
    id_chef_service?: StringNullableFilter<"Demande"> | string | null
    personnel?: XOR<PersonnelScalarRelationFilter, PersonnelWhereInput>
    service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
    periodeConge?: XOR<PeriodeCongeNullableScalarRelationFilter, PeriodeCongeWhereInput> | null
    discussions?: DiscussionListRelationFilter
    chefService?: XOR<PersonnelNullableScalarRelationFilter, PersonnelWhereInput> | null
    ficheDeConge?: XOR<FicheDeCongeNullableScalarRelationFilter, FicheDeCongeWhereInput> | null
  }

  export type DemandeOrderByWithRelationInput = {
    id_demande?: SortOrder
    type_demande?: SortOrder
    statut_demande?: SortOrder
    date_demande?: SortOrder
    motif?: SortOrderInput | SortOrder
    id_personnel?: SortOrder
    id_service?: SortOrderInput | SortOrder
    id_periodeconge?: SortOrderInput | SortOrder
    id_chef_service?: SortOrderInput | SortOrder
    personnel?: PersonnelOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    periodeConge?: PeriodeCongeOrderByWithRelationInput
    discussions?: DiscussionOrderByRelationAggregateInput
    chefService?: PersonnelOrderByWithRelationInput
    ficheDeConge?: FicheDeCongeOrderByWithRelationInput
  }

  export type DemandeWhereUniqueInput = Prisma.AtLeast<{
    id_demande?: string
    AND?: DemandeWhereInput | DemandeWhereInput[]
    OR?: DemandeWhereInput[]
    NOT?: DemandeWhereInput | DemandeWhereInput[]
    type_demande?: StringFilter<"Demande"> | string
    statut_demande?: EnumStatutDemandeFilter<"Demande"> | $Enums.StatutDemande
    date_demande?: DateTimeFilter<"Demande"> | Date | string
    motif?: StringNullableFilter<"Demande"> | string | null
    id_personnel?: StringFilter<"Demande"> | string
    id_service?: StringNullableFilter<"Demande"> | string | null
    id_periodeconge?: StringNullableFilter<"Demande"> | string | null
    id_chef_service?: StringNullableFilter<"Demande"> | string | null
    personnel?: XOR<PersonnelScalarRelationFilter, PersonnelWhereInput>
    service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
    periodeConge?: XOR<PeriodeCongeNullableScalarRelationFilter, PeriodeCongeWhereInput> | null
    discussions?: DiscussionListRelationFilter
    chefService?: XOR<PersonnelNullableScalarRelationFilter, PersonnelWhereInput> | null
    ficheDeConge?: XOR<FicheDeCongeNullableScalarRelationFilter, FicheDeCongeWhereInput> | null
  }, "id_demande">

  export type DemandeOrderByWithAggregationInput = {
    id_demande?: SortOrder
    type_demande?: SortOrder
    statut_demande?: SortOrder
    date_demande?: SortOrder
    motif?: SortOrderInput | SortOrder
    id_personnel?: SortOrder
    id_service?: SortOrderInput | SortOrder
    id_periodeconge?: SortOrderInput | SortOrder
    id_chef_service?: SortOrderInput | SortOrder
    _count?: DemandeCountOrderByAggregateInput
    _max?: DemandeMaxOrderByAggregateInput
    _min?: DemandeMinOrderByAggregateInput
  }

  export type DemandeScalarWhereWithAggregatesInput = {
    AND?: DemandeScalarWhereWithAggregatesInput | DemandeScalarWhereWithAggregatesInput[]
    OR?: DemandeScalarWhereWithAggregatesInput[]
    NOT?: DemandeScalarWhereWithAggregatesInput | DemandeScalarWhereWithAggregatesInput[]
    id_demande?: StringWithAggregatesFilter<"Demande"> | string
    type_demande?: StringWithAggregatesFilter<"Demande"> | string
    statut_demande?: EnumStatutDemandeWithAggregatesFilter<"Demande"> | $Enums.StatutDemande
    date_demande?: DateTimeWithAggregatesFilter<"Demande"> | Date | string
    motif?: StringNullableWithAggregatesFilter<"Demande"> | string | null
    id_personnel?: StringWithAggregatesFilter<"Demande"> | string
    id_service?: StringNullableWithAggregatesFilter<"Demande"> | string | null
    id_periodeconge?: StringNullableWithAggregatesFilter<"Demande"> | string | null
    id_chef_service?: StringNullableWithAggregatesFilter<"Demande"> | string | null
  }

  export type DiscussionWhereInput = {
    AND?: DiscussionWhereInput | DiscussionWhereInput[]
    OR?: DiscussionWhereInput[]
    NOT?: DiscussionWhereInput | DiscussionWhereInput[]
    id_discussion?: StringFilter<"Discussion"> | string
    message?: StringFilter<"Discussion"> | string
    date_message?: DateTimeFilter<"Discussion"> | Date | string
    heure_message?: StringNullableFilter<"Discussion"> | string | null
    id_demande?: StringFilter<"Discussion"> | string
    demande?: XOR<DemandeScalarRelationFilter, DemandeWhereInput>
  }

  export type DiscussionOrderByWithRelationInput = {
    id_discussion?: SortOrder
    message?: SortOrder
    date_message?: SortOrder
    heure_message?: SortOrderInput | SortOrder
    id_demande?: SortOrder
    demande?: DemandeOrderByWithRelationInput
  }

  export type DiscussionWhereUniqueInput = Prisma.AtLeast<{
    id_discussion?: string
    AND?: DiscussionWhereInput | DiscussionWhereInput[]
    OR?: DiscussionWhereInput[]
    NOT?: DiscussionWhereInput | DiscussionWhereInput[]
    message?: StringFilter<"Discussion"> | string
    date_message?: DateTimeFilter<"Discussion"> | Date | string
    heure_message?: StringNullableFilter<"Discussion"> | string | null
    id_demande?: StringFilter<"Discussion"> | string
    demande?: XOR<DemandeScalarRelationFilter, DemandeWhereInput>
  }, "id_discussion">

  export type DiscussionOrderByWithAggregationInput = {
    id_discussion?: SortOrder
    message?: SortOrder
    date_message?: SortOrder
    heure_message?: SortOrderInput | SortOrder
    id_demande?: SortOrder
    _count?: DiscussionCountOrderByAggregateInput
    _max?: DiscussionMaxOrderByAggregateInput
    _min?: DiscussionMinOrderByAggregateInput
  }

  export type DiscussionScalarWhereWithAggregatesInput = {
    AND?: DiscussionScalarWhereWithAggregatesInput | DiscussionScalarWhereWithAggregatesInput[]
    OR?: DiscussionScalarWhereWithAggregatesInput[]
    NOT?: DiscussionScalarWhereWithAggregatesInput | DiscussionScalarWhereWithAggregatesInput[]
    id_discussion?: StringWithAggregatesFilter<"Discussion"> | string
    message?: StringWithAggregatesFilter<"Discussion"> | string
    date_message?: DateTimeWithAggregatesFilter<"Discussion"> | Date | string
    heure_message?: StringNullableWithAggregatesFilter<"Discussion"> | string | null
    id_demande?: StringWithAggregatesFilter<"Discussion"> | string
  }

  export type FicheDeCongeWhereInput = {
    AND?: FicheDeCongeWhereInput | FicheDeCongeWhereInput[]
    OR?: FicheDeCongeWhereInput[]
    NOT?: FicheDeCongeWhereInput | FicheDeCongeWhereInput[]
    id_ficheconge?: StringFilter<"FicheDeConge"> | string
    message?: StringNullableFilter<"FicheDeConge"> | string | null
    date_message?: DateTimeFilter<"FicheDeConge"> | Date | string
    heure_message?: StringNullableFilter<"FicheDeConge"> | string | null
    id_demande?: StringFilter<"FicheDeConge"> | string
    id_personnel?: StringFilter<"FicheDeConge"> | string
    demande?: XOR<DemandeScalarRelationFilter, DemandeWhereInput>
    personnel?: XOR<PersonnelScalarRelationFilter, PersonnelWhereInput>
  }

  export type FicheDeCongeOrderByWithRelationInput = {
    id_ficheconge?: SortOrder
    message?: SortOrderInput | SortOrder
    date_message?: SortOrder
    heure_message?: SortOrderInput | SortOrder
    id_demande?: SortOrder
    id_personnel?: SortOrder
    demande?: DemandeOrderByWithRelationInput
    personnel?: PersonnelOrderByWithRelationInput
  }

  export type FicheDeCongeWhereUniqueInput = Prisma.AtLeast<{
    id_ficheconge?: string
    id_demande?: string
    AND?: FicheDeCongeWhereInput | FicheDeCongeWhereInput[]
    OR?: FicheDeCongeWhereInput[]
    NOT?: FicheDeCongeWhereInput | FicheDeCongeWhereInput[]
    message?: StringNullableFilter<"FicheDeConge"> | string | null
    date_message?: DateTimeFilter<"FicheDeConge"> | Date | string
    heure_message?: StringNullableFilter<"FicheDeConge"> | string | null
    id_personnel?: StringFilter<"FicheDeConge"> | string
    demande?: XOR<DemandeScalarRelationFilter, DemandeWhereInput>
    personnel?: XOR<PersonnelScalarRelationFilter, PersonnelWhereInput>
  }, "id_ficheconge" | "id_demande">

  export type FicheDeCongeOrderByWithAggregationInput = {
    id_ficheconge?: SortOrder
    message?: SortOrderInput | SortOrder
    date_message?: SortOrder
    heure_message?: SortOrderInput | SortOrder
    id_demande?: SortOrder
    id_personnel?: SortOrder
    _count?: FicheDeCongeCountOrderByAggregateInput
    _max?: FicheDeCongeMaxOrderByAggregateInput
    _min?: FicheDeCongeMinOrderByAggregateInput
  }

  export type FicheDeCongeScalarWhereWithAggregatesInput = {
    AND?: FicheDeCongeScalarWhereWithAggregatesInput | FicheDeCongeScalarWhereWithAggregatesInput[]
    OR?: FicheDeCongeScalarWhereWithAggregatesInput[]
    NOT?: FicheDeCongeScalarWhereWithAggregatesInput | FicheDeCongeScalarWhereWithAggregatesInput[]
    id_ficheconge?: StringWithAggregatesFilter<"FicheDeConge"> | string
    message?: StringNullableWithAggregatesFilter<"FicheDeConge"> | string | null
    date_message?: DateTimeWithAggregatesFilter<"FicheDeConge"> | Date | string
    heure_message?: StringNullableWithAggregatesFilter<"FicheDeConge"> | string | null
    id_demande?: StringWithAggregatesFilter<"FicheDeConge"> | string
    id_personnel?: StringWithAggregatesFilter<"FicheDeConge"> | string
  }

  export type DirectionCreateInput = {
    id_direction?: string
    code_direction: string
    nom_direction: string
    nb_personnel?: number | null
    nom_directeur: string
    email_direction?: string | null
    statut?: string | null
    date_creation?: Date | string
    services?: ServiceCreateNestedManyWithoutDirectionInput
  }

  export type DirectionUncheckedCreateInput = {
    id_direction?: string
    code_direction: string
    nom_direction: string
    nb_personnel?: number | null
    nom_directeur: string
    email_direction?: string | null
    statut?: string | null
    date_creation?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutDirectionInput
  }

  export type DirectionUpdateInput = {
    id_direction?: StringFieldUpdateOperationsInput | string
    code_direction?: StringFieldUpdateOperationsInput | string
    nom_direction?: StringFieldUpdateOperationsInput | string
    nb_personnel?: NullableIntFieldUpdateOperationsInput | number | null
    nom_directeur?: StringFieldUpdateOperationsInput | string
    email_direction?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutDirectionNestedInput
  }

  export type DirectionUncheckedUpdateInput = {
    id_direction?: StringFieldUpdateOperationsInput | string
    code_direction?: StringFieldUpdateOperationsInput | string
    nom_direction?: StringFieldUpdateOperationsInput | string
    nb_personnel?: NullableIntFieldUpdateOperationsInput | number | null
    nom_directeur?: StringFieldUpdateOperationsInput | string
    email_direction?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutDirectionNestedInput
  }

  export type DirectionCreateManyInput = {
    id_direction?: string
    code_direction: string
    nom_direction: string
    nb_personnel?: number | null
    nom_directeur: string
    email_direction?: string | null
    statut?: string | null
    date_creation?: Date | string
  }

  export type DirectionUpdateManyMutationInput = {
    id_direction?: StringFieldUpdateOperationsInput | string
    code_direction?: StringFieldUpdateOperationsInput | string
    nom_direction?: StringFieldUpdateOperationsInput | string
    nb_personnel?: NullableIntFieldUpdateOperationsInput | number | null
    nom_directeur?: StringFieldUpdateOperationsInput | string
    email_direction?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectionUncheckedUpdateManyInput = {
    id_direction?: StringFieldUpdateOperationsInput | string
    code_direction?: StringFieldUpdateOperationsInput | string
    nom_direction?: StringFieldUpdateOperationsInput | string
    nb_personnel?: NullableIntFieldUpdateOperationsInput | number | null
    nom_directeur?: StringFieldUpdateOperationsInput | string
    email_direction?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id_service?: string
    code_service: string
    nom_service: string
    nb_personnel?: number | null
    date_creation?: Date | string
    direction: DirectionCreateNestedOneWithoutServicesInput
    personnels?: PersonnelCreateNestedManyWithoutServiceInput
    demandes?: DemandeCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id_service?: string
    code_service: string
    nom_service: string
    nb_personnel?: number | null
    date_creation?: Date | string
    id_direction: string
    personnels?: PersonnelUncheckedCreateNestedManyWithoutServiceInput
    demandes?: DemandeUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id_service?: StringFieldUpdateOperationsInput | string
    code_service?: StringFieldUpdateOperationsInput | string
    nom_service?: StringFieldUpdateOperationsInput | string
    nb_personnel?: NullableIntFieldUpdateOperationsInput | number | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    direction?: DirectionUpdateOneRequiredWithoutServicesNestedInput
    personnels?: PersonnelUpdateManyWithoutServiceNestedInput
    demandes?: DemandeUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id_service?: StringFieldUpdateOperationsInput | string
    code_service?: StringFieldUpdateOperationsInput | string
    nom_service?: StringFieldUpdateOperationsInput | string
    nb_personnel?: NullableIntFieldUpdateOperationsInput | number | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_direction?: StringFieldUpdateOperationsInput | string
    personnels?: PersonnelUncheckedUpdateManyWithoutServiceNestedInput
    demandes?: DemandeUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id_service?: string
    code_service: string
    nom_service: string
    nb_personnel?: number | null
    date_creation?: Date | string
    id_direction: string
  }

  export type ServiceUpdateManyMutationInput = {
    id_service?: StringFieldUpdateOperationsInput | string
    code_service?: StringFieldUpdateOperationsInput | string
    nom_service?: StringFieldUpdateOperationsInput | string
    nb_personnel?: NullableIntFieldUpdateOperationsInput | number | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id_service?: StringFieldUpdateOperationsInput | string
    code_service?: StringFieldUpdateOperationsInput | string
    nom_service?: StringFieldUpdateOperationsInput | string
    nb_personnel?: NullableIntFieldUpdateOperationsInput | number | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_direction?: StringFieldUpdateOperationsInput | string
  }

  export type PersonnelCreateInput = {
    id_personnel?: string
    nom_personnel: string
    prenom_personnel: string
    email_personnel?: string | null
    email_travail?: string | null
    password?: string | null
    date_naissance?: Date | string | null
    matricule_personnel?: string | null
    telephone_travail?: string | null
    telephone_personnel?: string | null
    ville_personnel?: string | null
    adresse_personnel?: string | null
    codepostal?: string | null
    pays_personnel?: string | null
    telephone_contact_urgence?: string | null
    nom_contact_urgence?: string | null
    role_personnel?: $Enums.RolePersonnel
    type_personnel?: $Enums.TypePersonnel
    date_creation?: Date | string
    is_active?: boolean
    service: ServiceCreateNestedOneWithoutPersonnelsInput
    demandes?: DemandeCreateNestedManyWithoutPersonnelInput
    fichesConge?: FicheDeCongeCreateNestedManyWithoutPersonnelInput
    demandesEnCoursChef?: DemandeCreateNestedManyWithoutChefServiceInput
  }

  export type PersonnelUncheckedCreateInput = {
    id_personnel?: string
    nom_personnel: string
    prenom_personnel: string
    email_personnel?: string | null
    email_travail?: string | null
    password?: string | null
    date_naissance?: Date | string | null
    matricule_personnel?: string | null
    telephone_travail?: string | null
    telephone_personnel?: string | null
    ville_personnel?: string | null
    adresse_personnel?: string | null
    codepostal?: string | null
    pays_personnel?: string | null
    telephone_contact_urgence?: string | null
    nom_contact_urgence?: string | null
    role_personnel?: $Enums.RolePersonnel
    type_personnel?: $Enums.TypePersonnel
    date_creation?: Date | string
    id_service: string
    is_active?: boolean
    demandes?: DemandeUncheckedCreateNestedManyWithoutPersonnelInput
    fichesConge?: FicheDeCongeUncheckedCreateNestedManyWithoutPersonnelInput
    demandesEnCoursChef?: DemandeUncheckedCreateNestedManyWithoutChefServiceInput
  }

  export type PersonnelUpdateInput = {
    id_personnel?: StringFieldUpdateOperationsInput | string
    nom_personnel?: StringFieldUpdateOperationsInput | string
    prenom_personnel?: StringFieldUpdateOperationsInput | string
    email_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    email_travail?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    date_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matricule_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_travail?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    ville_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    adresse_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    codepostal?: NullableStringFieldUpdateOperationsInput | string | null
    pays_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    nom_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    role_personnel?: EnumRolePersonnelFieldUpdateOperationsInput | $Enums.RolePersonnel
    type_personnel?: EnumTypePersonnelFieldUpdateOperationsInput | $Enums.TypePersonnel
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    service?: ServiceUpdateOneRequiredWithoutPersonnelsNestedInput
    demandes?: DemandeUpdateManyWithoutPersonnelNestedInput
    fichesConge?: FicheDeCongeUpdateManyWithoutPersonnelNestedInput
    demandesEnCoursChef?: DemandeUpdateManyWithoutChefServiceNestedInput
  }

  export type PersonnelUncheckedUpdateInput = {
    id_personnel?: StringFieldUpdateOperationsInput | string
    nom_personnel?: StringFieldUpdateOperationsInput | string
    prenom_personnel?: StringFieldUpdateOperationsInput | string
    email_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    email_travail?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    date_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matricule_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_travail?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    ville_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    adresse_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    codepostal?: NullableStringFieldUpdateOperationsInput | string | null
    pays_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    nom_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    role_personnel?: EnumRolePersonnelFieldUpdateOperationsInput | $Enums.RolePersonnel
    type_personnel?: EnumTypePersonnelFieldUpdateOperationsInput | $Enums.TypePersonnel
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_service?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    demandes?: DemandeUncheckedUpdateManyWithoutPersonnelNestedInput
    fichesConge?: FicheDeCongeUncheckedUpdateManyWithoutPersonnelNestedInput
    demandesEnCoursChef?: DemandeUncheckedUpdateManyWithoutChefServiceNestedInput
  }

  export type PersonnelCreateManyInput = {
    id_personnel?: string
    nom_personnel: string
    prenom_personnel: string
    email_personnel?: string | null
    email_travail?: string | null
    password?: string | null
    date_naissance?: Date | string | null
    matricule_personnel?: string | null
    telephone_travail?: string | null
    telephone_personnel?: string | null
    ville_personnel?: string | null
    adresse_personnel?: string | null
    codepostal?: string | null
    pays_personnel?: string | null
    telephone_contact_urgence?: string | null
    nom_contact_urgence?: string | null
    role_personnel?: $Enums.RolePersonnel
    type_personnel?: $Enums.TypePersonnel
    date_creation?: Date | string
    id_service: string
    is_active?: boolean
  }

  export type PersonnelUpdateManyMutationInput = {
    id_personnel?: StringFieldUpdateOperationsInput | string
    nom_personnel?: StringFieldUpdateOperationsInput | string
    prenom_personnel?: StringFieldUpdateOperationsInput | string
    email_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    email_travail?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    date_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matricule_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_travail?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    ville_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    adresse_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    codepostal?: NullableStringFieldUpdateOperationsInput | string | null
    pays_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    nom_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    role_personnel?: EnumRolePersonnelFieldUpdateOperationsInput | $Enums.RolePersonnel
    type_personnel?: EnumTypePersonnelFieldUpdateOperationsInput | $Enums.TypePersonnel
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PersonnelUncheckedUpdateManyInput = {
    id_personnel?: StringFieldUpdateOperationsInput | string
    nom_personnel?: StringFieldUpdateOperationsInput | string
    prenom_personnel?: StringFieldUpdateOperationsInput | string
    email_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    email_travail?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    date_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matricule_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_travail?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    ville_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    adresse_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    codepostal?: NullableStringFieldUpdateOperationsInput | string | null
    pays_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    nom_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    role_personnel?: EnumRolePersonnelFieldUpdateOperationsInput | $Enums.RolePersonnel
    type_personnel?: EnumTypePersonnelFieldUpdateOperationsInput | $Enums.TypePersonnel
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_service?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TypeCongeCreateInput = {
    id_typeconge?: string
    libelle_typeconge: string
    date_creation?: Date | string
    is_active?: boolean
    periodesConge?: PeriodeCongeCreateNestedManyWithoutTypeCongeInput
  }

  export type TypeCongeUncheckedCreateInput = {
    id_typeconge?: string
    libelle_typeconge: string
    date_creation?: Date | string
    is_active?: boolean
    periodesConge?: PeriodeCongeUncheckedCreateNestedManyWithoutTypeCongeInput
  }

  export type TypeCongeUpdateInput = {
    id_typeconge?: StringFieldUpdateOperationsInput | string
    libelle_typeconge?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    periodesConge?: PeriodeCongeUpdateManyWithoutTypeCongeNestedInput
  }

  export type TypeCongeUncheckedUpdateInput = {
    id_typeconge?: StringFieldUpdateOperationsInput | string
    libelle_typeconge?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    periodesConge?: PeriodeCongeUncheckedUpdateManyWithoutTypeCongeNestedInput
  }

  export type TypeCongeCreateManyInput = {
    id_typeconge?: string
    libelle_typeconge: string
    date_creation?: Date | string
    is_active?: boolean
  }

  export type TypeCongeUpdateManyMutationInput = {
    id_typeconge?: StringFieldUpdateOperationsInput | string
    libelle_typeconge?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TypeCongeUncheckedUpdateManyInput = {
    id_typeconge?: StringFieldUpdateOperationsInput | string
    libelle_typeconge?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PeriodeCongeCreateInput = {
    id_periodeconge?: string
    date_debut: Date | string
    date_fin: Date | string
    nb_jour: number
    typeConge: TypeCongeCreateNestedOneWithoutPeriodesCongeInput
    demandes?: DemandeCreateNestedManyWithoutPeriodeCongeInput
  }

  export type PeriodeCongeUncheckedCreateInput = {
    id_periodeconge?: string
    date_debut: Date | string
    date_fin: Date | string
    nb_jour: number
    id_typeconge: string
    demandes?: DemandeUncheckedCreateNestedManyWithoutPeriodeCongeInput
  }

  export type PeriodeCongeUpdateInput = {
    id_periodeconge?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_jour?: IntFieldUpdateOperationsInput | number
    typeConge?: TypeCongeUpdateOneRequiredWithoutPeriodesCongeNestedInput
    demandes?: DemandeUpdateManyWithoutPeriodeCongeNestedInput
  }

  export type PeriodeCongeUncheckedUpdateInput = {
    id_periodeconge?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_jour?: IntFieldUpdateOperationsInput | number
    id_typeconge?: StringFieldUpdateOperationsInput | string
    demandes?: DemandeUncheckedUpdateManyWithoutPeriodeCongeNestedInput
  }

  export type PeriodeCongeCreateManyInput = {
    id_periodeconge?: string
    date_debut: Date | string
    date_fin: Date | string
    nb_jour: number
    id_typeconge: string
  }

  export type PeriodeCongeUpdateManyMutationInput = {
    id_periodeconge?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_jour?: IntFieldUpdateOperationsInput | number
  }

  export type PeriodeCongeUncheckedUpdateManyInput = {
    id_periodeconge?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_jour?: IntFieldUpdateOperationsInput | number
    id_typeconge?: StringFieldUpdateOperationsInput | string
  }

  export type DemandeCreateInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    personnel: PersonnelCreateNestedOneWithoutDemandesInput
    service?: ServiceCreateNestedOneWithoutDemandesInput
    periodeConge?: PeriodeCongeCreateNestedOneWithoutDemandesInput
    discussions?: DiscussionCreateNestedManyWithoutDemandeInput
    chefService?: PersonnelCreateNestedOneWithoutDemandesEnCoursChefInput
    ficheDeConge?: FicheDeCongeCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUncheckedCreateInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    id_personnel: string
    id_service?: string | null
    id_periodeconge?: string | null
    id_chef_service?: string | null
    discussions?: DiscussionUncheckedCreateNestedManyWithoutDemandeInput
    ficheDeConge?: FicheDeCongeUncheckedCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUpdateInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    personnel?: PersonnelUpdateOneRequiredWithoutDemandesNestedInput
    service?: ServiceUpdateOneWithoutDemandesNestedInput
    periodeConge?: PeriodeCongeUpdateOneWithoutDemandesNestedInput
    discussions?: DiscussionUpdateManyWithoutDemandeNestedInput
    chefService?: PersonnelUpdateOneWithoutDemandesEnCoursChefNestedInput
    ficheDeConge?: FicheDeCongeUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    id_personnel?: StringFieldUpdateOperationsInput | string
    id_service?: NullableStringFieldUpdateOperationsInput | string | null
    id_periodeconge?: NullableStringFieldUpdateOperationsInput | string | null
    id_chef_service?: NullableStringFieldUpdateOperationsInput | string | null
    discussions?: DiscussionUncheckedUpdateManyWithoutDemandeNestedInput
    ficheDeConge?: FicheDeCongeUncheckedUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeCreateManyInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    id_personnel: string
    id_service?: string | null
    id_periodeconge?: string | null
    id_chef_service?: string | null
  }

  export type DemandeUpdateManyMutationInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DemandeUncheckedUpdateManyInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    id_personnel?: StringFieldUpdateOperationsInput | string
    id_service?: NullableStringFieldUpdateOperationsInput | string | null
    id_periodeconge?: NullableStringFieldUpdateOperationsInput | string | null
    id_chef_service?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscussionCreateInput = {
    id_discussion?: string
    message: string
    date_message?: Date | string
    heure_message?: string | null
    demande: DemandeCreateNestedOneWithoutDiscussionsInput
  }

  export type DiscussionUncheckedCreateInput = {
    id_discussion?: string
    message: string
    date_message?: Date | string
    heure_message?: string | null
    id_demande: string
  }

  export type DiscussionUpdateInput = {
    id_discussion?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_message?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_message?: NullableStringFieldUpdateOperationsInput | string | null
    demande?: DemandeUpdateOneRequiredWithoutDiscussionsNestedInput
  }

  export type DiscussionUncheckedUpdateInput = {
    id_discussion?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_message?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_message?: NullableStringFieldUpdateOperationsInput | string | null
    id_demande?: StringFieldUpdateOperationsInput | string
  }

  export type DiscussionCreateManyInput = {
    id_discussion?: string
    message: string
    date_message?: Date | string
    heure_message?: string | null
    id_demande: string
  }

  export type DiscussionUpdateManyMutationInput = {
    id_discussion?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_message?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscussionUncheckedUpdateManyInput = {
    id_discussion?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_message?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_message?: NullableStringFieldUpdateOperationsInput | string | null
    id_demande?: StringFieldUpdateOperationsInput | string
  }

  export type FicheDeCongeCreateInput = {
    id_ficheconge?: string
    message?: string | null
    date_message?: Date | string
    heure_message?: string | null
    demande: DemandeCreateNestedOneWithoutFicheDeCongeInput
    personnel: PersonnelCreateNestedOneWithoutFichesCongeInput
  }

  export type FicheDeCongeUncheckedCreateInput = {
    id_ficheconge?: string
    message?: string | null
    date_message?: Date | string
    heure_message?: string | null
    id_demande: string
    id_personnel: string
  }

  export type FicheDeCongeUpdateInput = {
    id_ficheconge?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    date_message?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_message?: NullableStringFieldUpdateOperationsInput | string | null
    demande?: DemandeUpdateOneRequiredWithoutFicheDeCongeNestedInput
    personnel?: PersonnelUpdateOneRequiredWithoutFichesCongeNestedInput
  }

  export type FicheDeCongeUncheckedUpdateInput = {
    id_ficheconge?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    date_message?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_message?: NullableStringFieldUpdateOperationsInput | string | null
    id_demande?: StringFieldUpdateOperationsInput | string
    id_personnel?: StringFieldUpdateOperationsInput | string
  }

  export type FicheDeCongeCreateManyInput = {
    id_ficheconge?: string
    message?: string | null
    date_message?: Date | string
    heure_message?: string | null
    id_demande: string
    id_personnel: string
  }

  export type FicheDeCongeUpdateManyMutationInput = {
    id_ficheconge?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    date_message?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FicheDeCongeUncheckedUpdateManyInput = {
    id_ficheconge?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    date_message?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_message?: NullableStringFieldUpdateOperationsInput | string | null
    id_demande?: StringFieldUpdateOperationsInput | string
    id_personnel?: StringFieldUpdateOperationsInput | string
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DirectionCountOrderByAggregateInput = {
    id_direction?: SortOrder
    code_direction?: SortOrder
    nom_direction?: SortOrder
    nb_personnel?: SortOrder
    nom_directeur?: SortOrder
    email_direction?: SortOrder
    statut?: SortOrder
    date_creation?: SortOrder
  }

  export type DirectionAvgOrderByAggregateInput = {
    nb_personnel?: SortOrder
  }

  export type DirectionMaxOrderByAggregateInput = {
    id_direction?: SortOrder
    code_direction?: SortOrder
    nom_direction?: SortOrder
    nb_personnel?: SortOrder
    nom_directeur?: SortOrder
    email_direction?: SortOrder
    statut?: SortOrder
    date_creation?: SortOrder
  }

  export type DirectionMinOrderByAggregateInput = {
    id_direction?: SortOrder
    code_direction?: SortOrder
    nom_direction?: SortOrder
    nb_personnel?: SortOrder
    nom_directeur?: SortOrder
    email_direction?: SortOrder
    statut?: SortOrder
    date_creation?: SortOrder
  }

  export type DirectionSumOrderByAggregateInput = {
    nb_personnel?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type DirectionScalarRelationFilter = {
    is?: DirectionWhereInput
    isNot?: DirectionWhereInput
  }

  export type PersonnelListRelationFilter = {
    every?: PersonnelWhereInput
    some?: PersonnelWhereInput
    none?: PersonnelWhereInput
  }

  export type DemandeListRelationFilter = {
    every?: DemandeWhereInput
    some?: DemandeWhereInput
    none?: DemandeWhereInput
  }

  export type PersonnelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DemandeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id_service?: SortOrder
    code_service?: SortOrder
    nom_service?: SortOrder
    nb_personnel?: SortOrder
    date_creation?: SortOrder
    id_direction?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    nb_personnel?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id_service?: SortOrder
    code_service?: SortOrder
    nom_service?: SortOrder
    nb_personnel?: SortOrder
    date_creation?: SortOrder
    id_direction?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id_service?: SortOrder
    code_service?: SortOrder
    nom_service?: SortOrder
    nb_personnel?: SortOrder
    date_creation?: SortOrder
    id_direction?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    nb_personnel?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRolePersonnelFilter<$PrismaModel = never> = {
    equals?: $Enums.RolePersonnel | EnumRolePersonnelFieldRefInput<$PrismaModel>
    in?: $Enums.RolePersonnel[] | ListEnumRolePersonnelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolePersonnel[] | ListEnumRolePersonnelFieldRefInput<$PrismaModel>
    not?: NestedEnumRolePersonnelFilter<$PrismaModel> | $Enums.RolePersonnel
  }

  export type EnumTypePersonnelFilter<$PrismaModel = never> = {
    equals?: $Enums.TypePersonnel | EnumTypePersonnelFieldRefInput<$PrismaModel>
    in?: $Enums.TypePersonnel[] | ListEnumTypePersonnelFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypePersonnel[] | ListEnumTypePersonnelFieldRefInput<$PrismaModel>
    not?: NestedEnumTypePersonnelFilter<$PrismaModel> | $Enums.TypePersonnel
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type FicheDeCongeListRelationFilter = {
    every?: FicheDeCongeWhereInput
    some?: FicheDeCongeWhereInput
    none?: FicheDeCongeWhereInput
  }

  export type FicheDeCongeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonnelCountOrderByAggregateInput = {
    id_personnel?: SortOrder
    nom_personnel?: SortOrder
    prenom_personnel?: SortOrder
    email_personnel?: SortOrder
    email_travail?: SortOrder
    password?: SortOrder
    date_naissance?: SortOrder
    matricule_personnel?: SortOrder
    telephone_travail?: SortOrder
    telephone_personnel?: SortOrder
    ville_personnel?: SortOrder
    adresse_personnel?: SortOrder
    codepostal?: SortOrder
    pays_personnel?: SortOrder
    telephone_contact_urgence?: SortOrder
    nom_contact_urgence?: SortOrder
    role_personnel?: SortOrder
    type_personnel?: SortOrder
    date_creation?: SortOrder
    id_service?: SortOrder
    is_active?: SortOrder
  }

  export type PersonnelMaxOrderByAggregateInput = {
    id_personnel?: SortOrder
    nom_personnel?: SortOrder
    prenom_personnel?: SortOrder
    email_personnel?: SortOrder
    email_travail?: SortOrder
    password?: SortOrder
    date_naissance?: SortOrder
    matricule_personnel?: SortOrder
    telephone_travail?: SortOrder
    telephone_personnel?: SortOrder
    ville_personnel?: SortOrder
    adresse_personnel?: SortOrder
    codepostal?: SortOrder
    pays_personnel?: SortOrder
    telephone_contact_urgence?: SortOrder
    nom_contact_urgence?: SortOrder
    role_personnel?: SortOrder
    type_personnel?: SortOrder
    date_creation?: SortOrder
    id_service?: SortOrder
    is_active?: SortOrder
  }

  export type PersonnelMinOrderByAggregateInput = {
    id_personnel?: SortOrder
    nom_personnel?: SortOrder
    prenom_personnel?: SortOrder
    email_personnel?: SortOrder
    email_travail?: SortOrder
    password?: SortOrder
    date_naissance?: SortOrder
    matricule_personnel?: SortOrder
    telephone_travail?: SortOrder
    telephone_personnel?: SortOrder
    ville_personnel?: SortOrder
    adresse_personnel?: SortOrder
    codepostal?: SortOrder
    pays_personnel?: SortOrder
    telephone_contact_urgence?: SortOrder
    nom_contact_urgence?: SortOrder
    role_personnel?: SortOrder
    type_personnel?: SortOrder
    date_creation?: SortOrder
    id_service?: SortOrder
    is_active?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRolePersonnelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RolePersonnel | EnumRolePersonnelFieldRefInput<$PrismaModel>
    in?: $Enums.RolePersonnel[] | ListEnumRolePersonnelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolePersonnel[] | ListEnumRolePersonnelFieldRefInput<$PrismaModel>
    not?: NestedEnumRolePersonnelWithAggregatesFilter<$PrismaModel> | $Enums.RolePersonnel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolePersonnelFilter<$PrismaModel>
    _max?: NestedEnumRolePersonnelFilter<$PrismaModel>
  }

  export type EnumTypePersonnelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypePersonnel | EnumTypePersonnelFieldRefInput<$PrismaModel>
    in?: $Enums.TypePersonnel[] | ListEnumTypePersonnelFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypePersonnel[] | ListEnumTypePersonnelFieldRefInput<$PrismaModel>
    not?: NestedEnumTypePersonnelWithAggregatesFilter<$PrismaModel> | $Enums.TypePersonnel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypePersonnelFilter<$PrismaModel>
    _max?: NestedEnumTypePersonnelFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PeriodeCongeListRelationFilter = {
    every?: PeriodeCongeWhereInput
    some?: PeriodeCongeWhereInput
    none?: PeriodeCongeWhereInput
  }

  export type PeriodeCongeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TypeCongeCountOrderByAggregateInput = {
    id_typeconge?: SortOrder
    libelle_typeconge?: SortOrder
    date_creation?: SortOrder
    is_active?: SortOrder
  }

  export type TypeCongeMaxOrderByAggregateInput = {
    id_typeconge?: SortOrder
    libelle_typeconge?: SortOrder
    date_creation?: SortOrder
    is_active?: SortOrder
  }

  export type TypeCongeMinOrderByAggregateInput = {
    id_typeconge?: SortOrder
    libelle_typeconge?: SortOrder
    date_creation?: SortOrder
    is_active?: SortOrder
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

  export type TypeCongeScalarRelationFilter = {
    is?: TypeCongeWhereInput
    isNot?: TypeCongeWhereInput
  }

  export type PeriodeCongeCountOrderByAggregateInput = {
    id_periodeconge?: SortOrder
    date_debut?: SortOrder
    date_fin?: SortOrder
    nb_jour?: SortOrder
    id_typeconge?: SortOrder
  }

  export type PeriodeCongeAvgOrderByAggregateInput = {
    nb_jour?: SortOrder
  }

  export type PeriodeCongeMaxOrderByAggregateInput = {
    id_periodeconge?: SortOrder
    date_debut?: SortOrder
    date_fin?: SortOrder
    nb_jour?: SortOrder
    id_typeconge?: SortOrder
  }

  export type PeriodeCongeMinOrderByAggregateInput = {
    id_periodeconge?: SortOrder
    date_debut?: SortOrder
    date_fin?: SortOrder
    nb_jour?: SortOrder
    id_typeconge?: SortOrder
  }

  export type PeriodeCongeSumOrderByAggregateInput = {
    nb_jour?: SortOrder
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

  export type EnumStatutDemandeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeFilter<$PrismaModel> | $Enums.StatutDemande
  }

  export type PersonnelScalarRelationFilter = {
    is?: PersonnelWhereInput
    isNot?: PersonnelWhereInput
  }

  export type ServiceNullableScalarRelationFilter = {
    is?: ServiceWhereInput | null
    isNot?: ServiceWhereInput | null
  }

  export type PeriodeCongeNullableScalarRelationFilter = {
    is?: PeriodeCongeWhereInput | null
    isNot?: PeriodeCongeWhereInput | null
  }

  export type DiscussionListRelationFilter = {
    every?: DiscussionWhereInput
    some?: DiscussionWhereInput
    none?: DiscussionWhereInput
  }

  export type PersonnelNullableScalarRelationFilter = {
    is?: PersonnelWhereInput | null
    isNot?: PersonnelWhereInput | null
  }

  export type FicheDeCongeNullableScalarRelationFilter = {
    is?: FicheDeCongeWhereInput | null
    isNot?: FicheDeCongeWhereInput | null
  }

  export type DiscussionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DemandeCountOrderByAggregateInput = {
    id_demande?: SortOrder
    type_demande?: SortOrder
    statut_demande?: SortOrder
    date_demande?: SortOrder
    motif?: SortOrder
    id_personnel?: SortOrder
    id_service?: SortOrder
    id_periodeconge?: SortOrder
    id_chef_service?: SortOrder
  }

  export type DemandeMaxOrderByAggregateInput = {
    id_demande?: SortOrder
    type_demande?: SortOrder
    statut_demande?: SortOrder
    date_demande?: SortOrder
    motif?: SortOrder
    id_personnel?: SortOrder
    id_service?: SortOrder
    id_periodeconge?: SortOrder
    id_chef_service?: SortOrder
  }

  export type DemandeMinOrderByAggregateInput = {
    id_demande?: SortOrder
    type_demande?: SortOrder
    statut_demande?: SortOrder
    date_demande?: SortOrder
    motif?: SortOrder
    id_personnel?: SortOrder
    id_service?: SortOrder
    id_periodeconge?: SortOrder
    id_chef_service?: SortOrder
  }

  export type EnumStatutDemandeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeWithAggregatesFilter<$PrismaModel> | $Enums.StatutDemande
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDemandeFilter<$PrismaModel>
    _max?: NestedEnumStatutDemandeFilter<$PrismaModel>
  }

  export type DemandeScalarRelationFilter = {
    is?: DemandeWhereInput
    isNot?: DemandeWhereInput
  }

  export type DiscussionCountOrderByAggregateInput = {
    id_discussion?: SortOrder
    message?: SortOrder
    date_message?: SortOrder
    heure_message?: SortOrder
    id_demande?: SortOrder
  }

  export type DiscussionMaxOrderByAggregateInput = {
    id_discussion?: SortOrder
    message?: SortOrder
    date_message?: SortOrder
    heure_message?: SortOrder
    id_demande?: SortOrder
  }

  export type DiscussionMinOrderByAggregateInput = {
    id_discussion?: SortOrder
    message?: SortOrder
    date_message?: SortOrder
    heure_message?: SortOrder
    id_demande?: SortOrder
  }

  export type FicheDeCongeCountOrderByAggregateInput = {
    id_ficheconge?: SortOrder
    message?: SortOrder
    date_message?: SortOrder
    heure_message?: SortOrder
    id_demande?: SortOrder
    id_personnel?: SortOrder
  }

  export type FicheDeCongeMaxOrderByAggregateInput = {
    id_ficheconge?: SortOrder
    message?: SortOrder
    date_message?: SortOrder
    heure_message?: SortOrder
    id_demande?: SortOrder
    id_personnel?: SortOrder
  }

  export type FicheDeCongeMinOrderByAggregateInput = {
    id_ficheconge?: SortOrder
    message?: SortOrder
    date_message?: SortOrder
    heure_message?: SortOrder
    id_demande?: SortOrder
    id_personnel?: SortOrder
  }

  export type ServiceCreateNestedManyWithoutDirectionInput = {
    create?: XOR<ServiceCreateWithoutDirectionInput, ServiceUncheckedCreateWithoutDirectionInput> | ServiceCreateWithoutDirectionInput[] | ServiceUncheckedCreateWithoutDirectionInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutDirectionInput | ServiceCreateOrConnectWithoutDirectionInput[]
    createMany?: ServiceCreateManyDirectionInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutDirectionInput = {
    create?: XOR<ServiceCreateWithoutDirectionInput, ServiceUncheckedCreateWithoutDirectionInput> | ServiceCreateWithoutDirectionInput[] | ServiceUncheckedCreateWithoutDirectionInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutDirectionInput | ServiceCreateOrConnectWithoutDirectionInput[]
    createMany?: ServiceCreateManyDirectionInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ServiceUpdateManyWithoutDirectionNestedInput = {
    create?: XOR<ServiceCreateWithoutDirectionInput, ServiceUncheckedCreateWithoutDirectionInput> | ServiceCreateWithoutDirectionInput[] | ServiceUncheckedCreateWithoutDirectionInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutDirectionInput | ServiceCreateOrConnectWithoutDirectionInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutDirectionInput | ServiceUpsertWithWhereUniqueWithoutDirectionInput[]
    createMany?: ServiceCreateManyDirectionInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutDirectionInput | ServiceUpdateWithWhereUniqueWithoutDirectionInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutDirectionInput | ServiceUpdateManyWithWhereWithoutDirectionInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutDirectionNestedInput = {
    create?: XOR<ServiceCreateWithoutDirectionInput, ServiceUncheckedCreateWithoutDirectionInput> | ServiceCreateWithoutDirectionInput[] | ServiceUncheckedCreateWithoutDirectionInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutDirectionInput | ServiceCreateOrConnectWithoutDirectionInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutDirectionInput | ServiceUpsertWithWhereUniqueWithoutDirectionInput[]
    createMany?: ServiceCreateManyDirectionInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutDirectionInput | ServiceUpdateWithWhereUniqueWithoutDirectionInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutDirectionInput | ServiceUpdateManyWithWhereWithoutDirectionInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type DirectionCreateNestedOneWithoutServicesInput = {
    create?: XOR<DirectionCreateWithoutServicesInput, DirectionUncheckedCreateWithoutServicesInput>
    connectOrCreate?: DirectionCreateOrConnectWithoutServicesInput
    connect?: DirectionWhereUniqueInput
  }

  export type PersonnelCreateNestedManyWithoutServiceInput = {
    create?: XOR<PersonnelCreateWithoutServiceInput, PersonnelUncheckedCreateWithoutServiceInput> | PersonnelCreateWithoutServiceInput[] | PersonnelUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: PersonnelCreateOrConnectWithoutServiceInput | PersonnelCreateOrConnectWithoutServiceInput[]
    createMany?: PersonnelCreateManyServiceInputEnvelope
    connect?: PersonnelWhereUniqueInput | PersonnelWhereUniqueInput[]
  }

  export type DemandeCreateNestedManyWithoutServiceInput = {
    create?: XOR<DemandeCreateWithoutServiceInput, DemandeUncheckedCreateWithoutServiceInput> | DemandeCreateWithoutServiceInput[] | DemandeUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutServiceInput | DemandeCreateOrConnectWithoutServiceInput[]
    createMany?: DemandeCreateManyServiceInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type PersonnelUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<PersonnelCreateWithoutServiceInput, PersonnelUncheckedCreateWithoutServiceInput> | PersonnelCreateWithoutServiceInput[] | PersonnelUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: PersonnelCreateOrConnectWithoutServiceInput | PersonnelCreateOrConnectWithoutServiceInput[]
    createMany?: PersonnelCreateManyServiceInputEnvelope
    connect?: PersonnelWhereUniqueInput | PersonnelWhereUniqueInput[]
  }

  export type DemandeUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<DemandeCreateWithoutServiceInput, DemandeUncheckedCreateWithoutServiceInput> | DemandeCreateWithoutServiceInput[] | DemandeUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutServiceInput | DemandeCreateOrConnectWithoutServiceInput[]
    createMany?: DemandeCreateManyServiceInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type DirectionUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<DirectionCreateWithoutServicesInput, DirectionUncheckedCreateWithoutServicesInput>
    connectOrCreate?: DirectionCreateOrConnectWithoutServicesInput
    upsert?: DirectionUpsertWithoutServicesInput
    connect?: DirectionWhereUniqueInput
    update?: XOR<XOR<DirectionUpdateToOneWithWhereWithoutServicesInput, DirectionUpdateWithoutServicesInput>, DirectionUncheckedUpdateWithoutServicesInput>
  }

  export type PersonnelUpdateManyWithoutServiceNestedInput = {
    create?: XOR<PersonnelCreateWithoutServiceInput, PersonnelUncheckedCreateWithoutServiceInput> | PersonnelCreateWithoutServiceInput[] | PersonnelUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: PersonnelCreateOrConnectWithoutServiceInput | PersonnelCreateOrConnectWithoutServiceInput[]
    upsert?: PersonnelUpsertWithWhereUniqueWithoutServiceInput | PersonnelUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: PersonnelCreateManyServiceInputEnvelope
    set?: PersonnelWhereUniqueInput | PersonnelWhereUniqueInput[]
    disconnect?: PersonnelWhereUniqueInput | PersonnelWhereUniqueInput[]
    delete?: PersonnelWhereUniqueInput | PersonnelWhereUniqueInput[]
    connect?: PersonnelWhereUniqueInput | PersonnelWhereUniqueInput[]
    update?: PersonnelUpdateWithWhereUniqueWithoutServiceInput | PersonnelUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: PersonnelUpdateManyWithWhereWithoutServiceInput | PersonnelUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: PersonnelScalarWhereInput | PersonnelScalarWhereInput[]
  }

  export type DemandeUpdateManyWithoutServiceNestedInput = {
    create?: XOR<DemandeCreateWithoutServiceInput, DemandeUncheckedCreateWithoutServiceInput> | DemandeCreateWithoutServiceInput[] | DemandeUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutServiceInput | DemandeCreateOrConnectWithoutServiceInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutServiceInput | DemandeUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: DemandeCreateManyServiceInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutServiceInput | DemandeUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutServiceInput | DemandeUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type PersonnelUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<PersonnelCreateWithoutServiceInput, PersonnelUncheckedCreateWithoutServiceInput> | PersonnelCreateWithoutServiceInput[] | PersonnelUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: PersonnelCreateOrConnectWithoutServiceInput | PersonnelCreateOrConnectWithoutServiceInput[]
    upsert?: PersonnelUpsertWithWhereUniqueWithoutServiceInput | PersonnelUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: PersonnelCreateManyServiceInputEnvelope
    set?: PersonnelWhereUniqueInput | PersonnelWhereUniqueInput[]
    disconnect?: PersonnelWhereUniqueInput | PersonnelWhereUniqueInput[]
    delete?: PersonnelWhereUniqueInput | PersonnelWhereUniqueInput[]
    connect?: PersonnelWhereUniqueInput | PersonnelWhereUniqueInput[]
    update?: PersonnelUpdateWithWhereUniqueWithoutServiceInput | PersonnelUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: PersonnelUpdateManyWithWhereWithoutServiceInput | PersonnelUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: PersonnelScalarWhereInput | PersonnelScalarWhereInput[]
  }

  export type DemandeUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<DemandeCreateWithoutServiceInput, DemandeUncheckedCreateWithoutServiceInput> | DemandeCreateWithoutServiceInput[] | DemandeUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutServiceInput | DemandeCreateOrConnectWithoutServiceInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutServiceInput | DemandeUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: DemandeCreateManyServiceInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutServiceInput | DemandeUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutServiceInput | DemandeUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type ServiceCreateNestedOneWithoutPersonnelsInput = {
    create?: XOR<ServiceCreateWithoutPersonnelsInput, ServiceUncheckedCreateWithoutPersonnelsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutPersonnelsInput
    connect?: ServiceWhereUniqueInput
  }

  export type DemandeCreateNestedManyWithoutPersonnelInput = {
    create?: XOR<DemandeCreateWithoutPersonnelInput, DemandeUncheckedCreateWithoutPersonnelInput> | DemandeCreateWithoutPersonnelInput[] | DemandeUncheckedCreateWithoutPersonnelInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutPersonnelInput | DemandeCreateOrConnectWithoutPersonnelInput[]
    createMany?: DemandeCreateManyPersonnelInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type FicheDeCongeCreateNestedManyWithoutPersonnelInput = {
    create?: XOR<FicheDeCongeCreateWithoutPersonnelInput, FicheDeCongeUncheckedCreateWithoutPersonnelInput> | FicheDeCongeCreateWithoutPersonnelInput[] | FicheDeCongeUncheckedCreateWithoutPersonnelInput[]
    connectOrCreate?: FicheDeCongeCreateOrConnectWithoutPersonnelInput | FicheDeCongeCreateOrConnectWithoutPersonnelInput[]
    createMany?: FicheDeCongeCreateManyPersonnelInputEnvelope
    connect?: FicheDeCongeWhereUniqueInput | FicheDeCongeWhereUniqueInput[]
  }

  export type DemandeCreateNestedManyWithoutChefServiceInput = {
    create?: XOR<DemandeCreateWithoutChefServiceInput, DemandeUncheckedCreateWithoutChefServiceInput> | DemandeCreateWithoutChefServiceInput[] | DemandeUncheckedCreateWithoutChefServiceInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutChefServiceInput | DemandeCreateOrConnectWithoutChefServiceInput[]
    createMany?: DemandeCreateManyChefServiceInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type DemandeUncheckedCreateNestedManyWithoutPersonnelInput = {
    create?: XOR<DemandeCreateWithoutPersonnelInput, DemandeUncheckedCreateWithoutPersonnelInput> | DemandeCreateWithoutPersonnelInput[] | DemandeUncheckedCreateWithoutPersonnelInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutPersonnelInput | DemandeCreateOrConnectWithoutPersonnelInput[]
    createMany?: DemandeCreateManyPersonnelInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type FicheDeCongeUncheckedCreateNestedManyWithoutPersonnelInput = {
    create?: XOR<FicheDeCongeCreateWithoutPersonnelInput, FicheDeCongeUncheckedCreateWithoutPersonnelInput> | FicheDeCongeCreateWithoutPersonnelInput[] | FicheDeCongeUncheckedCreateWithoutPersonnelInput[]
    connectOrCreate?: FicheDeCongeCreateOrConnectWithoutPersonnelInput | FicheDeCongeCreateOrConnectWithoutPersonnelInput[]
    createMany?: FicheDeCongeCreateManyPersonnelInputEnvelope
    connect?: FicheDeCongeWhereUniqueInput | FicheDeCongeWhereUniqueInput[]
  }

  export type DemandeUncheckedCreateNestedManyWithoutChefServiceInput = {
    create?: XOR<DemandeCreateWithoutChefServiceInput, DemandeUncheckedCreateWithoutChefServiceInput> | DemandeCreateWithoutChefServiceInput[] | DemandeUncheckedCreateWithoutChefServiceInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutChefServiceInput | DemandeCreateOrConnectWithoutChefServiceInput[]
    createMany?: DemandeCreateManyChefServiceInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRolePersonnelFieldUpdateOperationsInput = {
    set?: $Enums.RolePersonnel
  }

  export type EnumTypePersonnelFieldUpdateOperationsInput = {
    set?: $Enums.TypePersonnel
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ServiceUpdateOneRequiredWithoutPersonnelsNestedInput = {
    create?: XOR<ServiceCreateWithoutPersonnelsInput, ServiceUncheckedCreateWithoutPersonnelsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutPersonnelsInput
    upsert?: ServiceUpsertWithoutPersonnelsInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutPersonnelsInput, ServiceUpdateWithoutPersonnelsInput>, ServiceUncheckedUpdateWithoutPersonnelsInput>
  }

  export type DemandeUpdateManyWithoutPersonnelNestedInput = {
    create?: XOR<DemandeCreateWithoutPersonnelInput, DemandeUncheckedCreateWithoutPersonnelInput> | DemandeCreateWithoutPersonnelInput[] | DemandeUncheckedCreateWithoutPersonnelInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutPersonnelInput | DemandeCreateOrConnectWithoutPersonnelInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutPersonnelInput | DemandeUpsertWithWhereUniqueWithoutPersonnelInput[]
    createMany?: DemandeCreateManyPersonnelInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutPersonnelInput | DemandeUpdateWithWhereUniqueWithoutPersonnelInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutPersonnelInput | DemandeUpdateManyWithWhereWithoutPersonnelInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type FicheDeCongeUpdateManyWithoutPersonnelNestedInput = {
    create?: XOR<FicheDeCongeCreateWithoutPersonnelInput, FicheDeCongeUncheckedCreateWithoutPersonnelInput> | FicheDeCongeCreateWithoutPersonnelInput[] | FicheDeCongeUncheckedCreateWithoutPersonnelInput[]
    connectOrCreate?: FicheDeCongeCreateOrConnectWithoutPersonnelInput | FicheDeCongeCreateOrConnectWithoutPersonnelInput[]
    upsert?: FicheDeCongeUpsertWithWhereUniqueWithoutPersonnelInput | FicheDeCongeUpsertWithWhereUniqueWithoutPersonnelInput[]
    createMany?: FicheDeCongeCreateManyPersonnelInputEnvelope
    set?: FicheDeCongeWhereUniqueInput | FicheDeCongeWhereUniqueInput[]
    disconnect?: FicheDeCongeWhereUniqueInput | FicheDeCongeWhereUniqueInput[]
    delete?: FicheDeCongeWhereUniqueInput | FicheDeCongeWhereUniqueInput[]
    connect?: FicheDeCongeWhereUniqueInput | FicheDeCongeWhereUniqueInput[]
    update?: FicheDeCongeUpdateWithWhereUniqueWithoutPersonnelInput | FicheDeCongeUpdateWithWhereUniqueWithoutPersonnelInput[]
    updateMany?: FicheDeCongeUpdateManyWithWhereWithoutPersonnelInput | FicheDeCongeUpdateManyWithWhereWithoutPersonnelInput[]
    deleteMany?: FicheDeCongeScalarWhereInput | FicheDeCongeScalarWhereInput[]
  }

  export type DemandeUpdateManyWithoutChefServiceNestedInput = {
    create?: XOR<DemandeCreateWithoutChefServiceInput, DemandeUncheckedCreateWithoutChefServiceInput> | DemandeCreateWithoutChefServiceInput[] | DemandeUncheckedCreateWithoutChefServiceInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutChefServiceInput | DemandeCreateOrConnectWithoutChefServiceInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutChefServiceInput | DemandeUpsertWithWhereUniqueWithoutChefServiceInput[]
    createMany?: DemandeCreateManyChefServiceInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutChefServiceInput | DemandeUpdateWithWhereUniqueWithoutChefServiceInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutChefServiceInput | DemandeUpdateManyWithWhereWithoutChefServiceInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type DemandeUncheckedUpdateManyWithoutPersonnelNestedInput = {
    create?: XOR<DemandeCreateWithoutPersonnelInput, DemandeUncheckedCreateWithoutPersonnelInput> | DemandeCreateWithoutPersonnelInput[] | DemandeUncheckedCreateWithoutPersonnelInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutPersonnelInput | DemandeCreateOrConnectWithoutPersonnelInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutPersonnelInput | DemandeUpsertWithWhereUniqueWithoutPersonnelInput[]
    createMany?: DemandeCreateManyPersonnelInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutPersonnelInput | DemandeUpdateWithWhereUniqueWithoutPersonnelInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutPersonnelInput | DemandeUpdateManyWithWhereWithoutPersonnelInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type FicheDeCongeUncheckedUpdateManyWithoutPersonnelNestedInput = {
    create?: XOR<FicheDeCongeCreateWithoutPersonnelInput, FicheDeCongeUncheckedCreateWithoutPersonnelInput> | FicheDeCongeCreateWithoutPersonnelInput[] | FicheDeCongeUncheckedCreateWithoutPersonnelInput[]
    connectOrCreate?: FicheDeCongeCreateOrConnectWithoutPersonnelInput | FicheDeCongeCreateOrConnectWithoutPersonnelInput[]
    upsert?: FicheDeCongeUpsertWithWhereUniqueWithoutPersonnelInput | FicheDeCongeUpsertWithWhereUniqueWithoutPersonnelInput[]
    createMany?: FicheDeCongeCreateManyPersonnelInputEnvelope
    set?: FicheDeCongeWhereUniqueInput | FicheDeCongeWhereUniqueInput[]
    disconnect?: FicheDeCongeWhereUniqueInput | FicheDeCongeWhereUniqueInput[]
    delete?: FicheDeCongeWhereUniqueInput | FicheDeCongeWhereUniqueInput[]
    connect?: FicheDeCongeWhereUniqueInput | FicheDeCongeWhereUniqueInput[]
    update?: FicheDeCongeUpdateWithWhereUniqueWithoutPersonnelInput | FicheDeCongeUpdateWithWhereUniqueWithoutPersonnelInput[]
    updateMany?: FicheDeCongeUpdateManyWithWhereWithoutPersonnelInput | FicheDeCongeUpdateManyWithWhereWithoutPersonnelInput[]
    deleteMany?: FicheDeCongeScalarWhereInput | FicheDeCongeScalarWhereInput[]
  }

  export type DemandeUncheckedUpdateManyWithoutChefServiceNestedInput = {
    create?: XOR<DemandeCreateWithoutChefServiceInput, DemandeUncheckedCreateWithoutChefServiceInput> | DemandeCreateWithoutChefServiceInput[] | DemandeUncheckedCreateWithoutChefServiceInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutChefServiceInput | DemandeCreateOrConnectWithoutChefServiceInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutChefServiceInput | DemandeUpsertWithWhereUniqueWithoutChefServiceInput[]
    createMany?: DemandeCreateManyChefServiceInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutChefServiceInput | DemandeUpdateWithWhereUniqueWithoutChefServiceInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutChefServiceInput | DemandeUpdateManyWithWhereWithoutChefServiceInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type PeriodeCongeCreateNestedManyWithoutTypeCongeInput = {
    create?: XOR<PeriodeCongeCreateWithoutTypeCongeInput, PeriodeCongeUncheckedCreateWithoutTypeCongeInput> | PeriodeCongeCreateWithoutTypeCongeInput[] | PeriodeCongeUncheckedCreateWithoutTypeCongeInput[]
    connectOrCreate?: PeriodeCongeCreateOrConnectWithoutTypeCongeInput | PeriodeCongeCreateOrConnectWithoutTypeCongeInput[]
    createMany?: PeriodeCongeCreateManyTypeCongeInputEnvelope
    connect?: PeriodeCongeWhereUniqueInput | PeriodeCongeWhereUniqueInput[]
  }

  export type PeriodeCongeUncheckedCreateNestedManyWithoutTypeCongeInput = {
    create?: XOR<PeriodeCongeCreateWithoutTypeCongeInput, PeriodeCongeUncheckedCreateWithoutTypeCongeInput> | PeriodeCongeCreateWithoutTypeCongeInput[] | PeriodeCongeUncheckedCreateWithoutTypeCongeInput[]
    connectOrCreate?: PeriodeCongeCreateOrConnectWithoutTypeCongeInput | PeriodeCongeCreateOrConnectWithoutTypeCongeInput[]
    createMany?: PeriodeCongeCreateManyTypeCongeInputEnvelope
    connect?: PeriodeCongeWhereUniqueInput | PeriodeCongeWhereUniqueInput[]
  }

  export type PeriodeCongeUpdateManyWithoutTypeCongeNestedInput = {
    create?: XOR<PeriodeCongeCreateWithoutTypeCongeInput, PeriodeCongeUncheckedCreateWithoutTypeCongeInput> | PeriodeCongeCreateWithoutTypeCongeInput[] | PeriodeCongeUncheckedCreateWithoutTypeCongeInput[]
    connectOrCreate?: PeriodeCongeCreateOrConnectWithoutTypeCongeInput | PeriodeCongeCreateOrConnectWithoutTypeCongeInput[]
    upsert?: PeriodeCongeUpsertWithWhereUniqueWithoutTypeCongeInput | PeriodeCongeUpsertWithWhereUniqueWithoutTypeCongeInput[]
    createMany?: PeriodeCongeCreateManyTypeCongeInputEnvelope
    set?: PeriodeCongeWhereUniqueInput | PeriodeCongeWhereUniqueInput[]
    disconnect?: PeriodeCongeWhereUniqueInput | PeriodeCongeWhereUniqueInput[]
    delete?: PeriodeCongeWhereUniqueInput | PeriodeCongeWhereUniqueInput[]
    connect?: PeriodeCongeWhereUniqueInput | PeriodeCongeWhereUniqueInput[]
    update?: PeriodeCongeUpdateWithWhereUniqueWithoutTypeCongeInput | PeriodeCongeUpdateWithWhereUniqueWithoutTypeCongeInput[]
    updateMany?: PeriodeCongeUpdateManyWithWhereWithoutTypeCongeInput | PeriodeCongeUpdateManyWithWhereWithoutTypeCongeInput[]
    deleteMany?: PeriodeCongeScalarWhereInput | PeriodeCongeScalarWhereInput[]
  }

  export type PeriodeCongeUncheckedUpdateManyWithoutTypeCongeNestedInput = {
    create?: XOR<PeriodeCongeCreateWithoutTypeCongeInput, PeriodeCongeUncheckedCreateWithoutTypeCongeInput> | PeriodeCongeCreateWithoutTypeCongeInput[] | PeriodeCongeUncheckedCreateWithoutTypeCongeInput[]
    connectOrCreate?: PeriodeCongeCreateOrConnectWithoutTypeCongeInput | PeriodeCongeCreateOrConnectWithoutTypeCongeInput[]
    upsert?: PeriodeCongeUpsertWithWhereUniqueWithoutTypeCongeInput | PeriodeCongeUpsertWithWhereUniqueWithoutTypeCongeInput[]
    createMany?: PeriodeCongeCreateManyTypeCongeInputEnvelope
    set?: PeriodeCongeWhereUniqueInput | PeriodeCongeWhereUniqueInput[]
    disconnect?: PeriodeCongeWhereUniqueInput | PeriodeCongeWhereUniqueInput[]
    delete?: PeriodeCongeWhereUniqueInput | PeriodeCongeWhereUniqueInput[]
    connect?: PeriodeCongeWhereUniqueInput | PeriodeCongeWhereUniqueInput[]
    update?: PeriodeCongeUpdateWithWhereUniqueWithoutTypeCongeInput | PeriodeCongeUpdateWithWhereUniqueWithoutTypeCongeInput[]
    updateMany?: PeriodeCongeUpdateManyWithWhereWithoutTypeCongeInput | PeriodeCongeUpdateManyWithWhereWithoutTypeCongeInput[]
    deleteMany?: PeriodeCongeScalarWhereInput | PeriodeCongeScalarWhereInput[]
  }

  export type TypeCongeCreateNestedOneWithoutPeriodesCongeInput = {
    create?: XOR<TypeCongeCreateWithoutPeriodesCongeInput, TypeCongeUncheckedCreateWithoutPeriodesCongeInput>
    connectOrCreate?: TypeCongeCreateOrConnectWithoutPeriodesCongeInput
    connect?: TypeCongeWhereUniqueInput
  }

  export type DemandeCreateNestedManyWithoutPeriodeCongeInput = {
    create?: XOR<DemandeCreateWithoutPeriodeCongeInput, DemandeUncheckedCreateWithoutPeriodeCongeInput> | DemandeCreateWithoutPeriodeCongeInput[] | DemandeUncheckedCreateWithoutPeriodeCongeInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutPeriodeCongeInput | DemandeCreateOrConnectWithoutPeriodeCongeInput[]
    createMany?: DemandeCreateManyPeriodeCongeInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type DemandeUncheckedCreateNestedManyWithoutPeriodeCongeInput = {
    create?: XOR<DemandeCreateWithoutPeriodeCongeInput, DemandeUncheckedCreateWithoutPeriodeCongeInput> | DemandeCreateWithoutPeriodeCongeInput[] | DemandeUncheckedCreateWithoutPeriodeCongeInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutPeriodeCongeInput | DemandeCreateOrConnectWithoutPeriodeCongeInput[]
    createMany?: DemandeCreateManyPeriodeCongeInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TypeCongeUpdateOneRequiredWithoutPeriodesCongeNestedInput = {
    create?: XOR<TypeCongeCreateWithoutPeriodesCongeInput, TypeCongeUncheckedCreateWithoutPeriodesCongeInput>
    connectOrCreate?: TypeCongeCreateOrConnectWithoutPeriodesCongeInput
    upsert?: TypeCongeUpsertWithoutPeriodesCongeInput
    connect?: TypeCongeWhereUniqueInput
    update?: XOR<XOR<TypeCongeUpdateToOneWithWhereWithoutPeriodesCongeInput, TypeCongeUpdateWithoutPeriodesCongeInput>, TypeCongeUncheckedUpdateWithoutPeriodesCongeInput>
  }

  export type DemandeUpdateManyWithoutPeriodeCongeNestedInput = {
    create?: XOR<DemandeCreateWithoutPeriodeCongeInput, DemandeUncheckedCreateWithoutPeriodeCongeInput> | DemandeCreateWithoutPeriodeCongeInput[] | DemandeUncheckedCreateWithoutPeriodeCongeInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutPeriodeCongeInput | DemandeCreateOrConnectWithoutPeriodeCongeInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutPeriodeCongeInput | DemandeUpsertWithWhereUniqueWithoutPeriodeCongeInput[]
    createMany?: DemandeCreateManyPeriodeCongeInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutPeriodeCongeInput | DemandeUpdateWithWhereUniqueWithoutPeriodeCongeInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutPeriodeCongeInput | DemandeUpdateManyWithWhereWithoutPeriodeCongeInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type DemandeUncheckedUpdateManyWithoutPeriodeCongeNestedInput = {
    create?: XOR<DemandeCreateWithoutPeriodeCongeInput, DemandeUncheckedCreateWithoutPeriodeCongeInput> | DemandeCreateWithoutPeriodeCongeInput[] | DemandeUncheckedCreateWithoutPeriodeCongeInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutPeriodeCongeInput | DemandeCreateOrConnectWithoutPeriodeCongeInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutPeriodeCongeInput | DemandeUpsertWithWhereUniqueWithoutPeriodeCongeInput[]
    createMany?: DemandeCreateManyPeriodeCongeInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutPeriodeCongeInput | DemandeUpdateWithWhereUniqueWithoutPeriodeCongeInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutPeriodeCongeInput | DemandeUpdateManyWithWhereWithoutPeriodeCongeInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type PersonnelCreateNestedOneWithoutDemandesInput = {
    create?: XOR<PersonnelCreateWithoutDemandesInput, PersonnelUncheckedCreateWithoutDemandesInput>
    connectOrCreate?: PersonnelCreateOrConnectWithoutDemandesInput
    connect?: PersonnelWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutDemandesInput = {
    create?: XOR<ServiceCreateWithoutDemandesInput, ServiceUncheckedCreateWithoutDemandesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutDemandesInput
    connect?: ServiceWhereUniqueInput
  }

  export type PeriodeCongeCreateNestedOneWithoutDemandesInput = {
    create?: XOR<PeriodeCongeCreateWithoutDemandesInput, PeriodeCongeUncheckedCreateWithoutDemandesInput>
    connectOrCreate?: PeriodeCongeCreateOrConnectWithoutDemandesInput
    connect?: PeriodeCongeWhereUniqueInput
  }

  export type DiscussionCreateNestedManyWithoutDemandeInput = {
    create?: XOR<DiscussionCreateWithoutDemandeInput, DiscussionUncheckedCreateWithoutDemandeInput> | DiscussionCreateWithoutDemandeInput[] | DiscussionUncheckedCreateWithoutDemandeInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutDemandeInput | DiscussionCreateOrConnectWithoutDemandeInput[]
    createMany?: DiscussionCreateManyDemandeInputEnvelope
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
  }

  export type PersonnelCreateNestedOneWithoutDemandesEnCoursChefInput = {
    create?: XOR<PersonnelCreateWithoutDemandesEnCoursChefInput, PersonnelUncheckedCreateWithoutDemandesEnCoursChefInput>
    connectOrCreate?: PersonnelCreateOrConnectWithoutDemandesEnCoursChefInput
    connect?: PersonnelWhereUniqueInput
  }

  export type FicheDeCongeCreateNestedOneWithoutDemandeInput = {
    create?: XOR<FicheDeCongeCreateWithoutDemandeInput, FicheDeCongeUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: FicheDeCongeCreateOrConnectWithoutDemandeInput
    connect?: FicheDeCongeWhereUniqueInput
  }

  export type DiscussionUncheckedCreateNestedManyWithoutDemandeInput = {
    create?: XOR<DiscussionCreateWithoutDemandeInput, DiscussionUncheckedCreateWithoutDemandeInput> | DiscussionCreateWithoutDemandeInput[] | DiscussionUncheckedCreateWithoutDemandeInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutDemandeInput | DiscussionCreateOrConnectWithoutDemandeInput[]
    createMany?: DiscussionCreateManyDemandeInputEnvelope
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
  }

  export type FicheDeCongeUncheckedCreateNestedOneWithoutDemandeInput = {
    create?: XOR<FicheDeCongeCreateWithoutDemandeInput, FicheDeCongeUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: FicheDeCongeCreateOrConnectWithoutDemandeInput
    connect?: FicheDeCongeWhereUniqueInput
  }

  export type EnumStatutDemandeFieldUpdateOperationsInput = {
    set?: $Enums.StatutDemande
  }

  export type PersonnelUpdateOneRequiredWithoutDemandesNestedInput = {
    create?: XOR<PersonnelCreateWithoutDemandesInput, PersonnelUncheckedCreateWithoutDemandesInput>
    connectOrCreate?: PersonnelCreateOrConnectWithoutDemandesInput
    upsert?: PersonnelUpsertWithoutDemandesInput
    connect?: PersonnelWhereUniqueInput
    update?: XOR<XOR<PersonnelUpdateToOneWithWhereWithoutDemandesInput, PersonnelUpdateWithoutDemandesInput>, PersonnelUncheckedUpdateWithoutDemandesInput>
  }

  export type ServiceUpdateOneWithoutDemandesNestedInput = {
    create?: XOR<ServiceCreateWithoutDemandesInput, ServiceUncheckedCreateWithoutDemandesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutDemandesInput
    upsert?: ServiceUpsertWithoutDemandesInput
    disconnect?: ServiceWhereInput | boolean
    delete?: ServiceWhereInput | boolean
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutDemandesInput, ServiceUpdateWithoutDemandesInput>, ServiceUncheckedUpdateWithoutDemandesInput>
  }

  export type PeriodeCongeUpdateOneWithoutDemandesNestedInput = {
    create?: XOR<PeriodeCongeCreateWithoutDemandesInput, PeriodeCongeUncheckedCreateWithoutDemandesInput>
    connectOrCreate?: PeriodeCongeCreateOrConnectWithoutDemandesInput
    upsert?: PeriodeCongeUpsertWithoutDemandesInput
    disconnect?: PeriodeCongeWhereInput | boolean
    delete?: PeriodeCongeWhereInput | boolean
    connect?: PeriodeCongeWhereUniqueInput
    update?: XOR<XOR<PeriodeCongeUpdateToOneWithWhereWithoutDemandesInput, PeriodeCongeUpdateWithoutDemandesInput>, PeriodeCongeUncheckedUpdateWithoutDemandesInput>
  }

  export type DiscussionUpdateManyWithoutDemandeNestedInput = {
    create?: XOR<DiscussionCreateWithoutDemandeInput, DiscussionUncheckedCreateWithoutDemandeInput> | DiscussionCreateWithoutDemandeInput[] | DiscussionUncheckedCreateWithoutDemandeInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutDemandeInput | DiscussionCreateOrConnectWithoutDemandeInput[]
    upsert?: DiscussionUpsertWithWhereUniqueWithoutDemandeInput | DiscussionUpsertWithWhereUniqueWithoutDemandeInput[]
    createMany?: DiscussionCreateManyDemandeInputEnvelope
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    update?: DiscussionUpdateWithWhereUniqueWithoutDemandeInput | DiscussionUpdateWithWhereUniqueWithoutDemandeInput[]
    updateMany?: DiscussionUpdateManyWithWhereWithoutDemandeInput | DiscussionUpdateManyWithWhereWithoutDemandeInput[]
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
  }

  export type PersonnelUpdateOneWithoutDemandesEnCoursChefNestedInput = {
    create?: XOR<PersonnelCreateWithoutDemandesEnCoursChefInput, PersonnelUncheckedCreateWithoutDemandesEnCoursChefInput>
    connectOrCreate?: PersonnelCreateOrConnectWithoutDemandesEnCoursChefInput
    upsert?: PersonnelUpsertWithoutDemandesEnCoursChefInput
    disconnect?: PersonnelWhereInput | boolean
    delete?: PersonnelWhereInput | boolean
    connect?: PersonnelWhereUniqueInput
    update?: XOR<XOR<PersonnelUpdateToOneWithWhereWithoutDemandesEnCoursChefInput, PersonnelUpdateWithoutDemandesEnCoursChefInput>, PersonnelUncheckedUpdateWithoutDemandesEnCoursChefInput>
  }

  export type FicheDeCongeUpdateOneWithoutDemandeNestedInput = {
    create?: XOR<FicheDeCongeCreateWithoutDemandeInput, FicheDeCongeUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: FicheDeCongeCreateOrConnectWithoutDemandeInput
    upsert?: FicheDeCongeUpsertWithoutDemandeInput
    disconnect?: FicheDeCongeWhereInput | boolean
    delete?: FicheDeCongeWhereInput | boolean
    connect?: FicheDeCongeWhereUniqueInput
    update?: XOR<XOR<FicheDeCongeUpdateToOneWithWhereWithoutDemandeInput, FicheDeCongeUpdateWithoutDemandeInput>, FicheDeCongeUncheckedUpdateWithoutDemandeInput>
  }

  export type DiscussionUncheckedUpdateManyWithoutDemandeNestedInput = {
    create?: XOR<DiscussionCreateWithoutDemandeInput, DiscussionUncheckedCreateWithoutDemandeInput> | DiscussionCreateWithoutDemandeInput[] | DiscussionUncheckedCreateWithoutDemandeInput[]
    connectOrCreate?: DiscussionCreateOrConnectWithoutDemandeInput | DiscussionCreateOrConnectWithoutDemandeInput[]
    upsert?: DiscussionUpsertWithWhereUniqueWithoutDemandeInput | DiscussionUpsertWithWhereUniqueWithoutDemandeInput[]
    createMany?: DiscussionCreateManyDemandeInputEnvelope
    set?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    disconnect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    delete?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    connect?: DiscussionWhereUniqueInput | DiscussionWhereUniqueInput[]
    update?: DiscussionUpdateWithWhereUniqueWithoutDemandeInput | DiscussionUpdateWithWhereUniqueWithoutDemandeInput[]
    updateMany?: DiscussionUpdateManyWithWhereWithoutDemandeInput | DiscussionUpdateManyWithWhereWithoutDemandeInput[]
    deleteMany?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
  }

  export type FicheDeCongeUncheckedUpdateOneWithoutDemandeNestedInput = {
    create?: XOR<FicheDeCongeCreateWithoutDemandeInput, FicheDeCongeUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: FicheDeCongeCreateOrConnectWithoutDemandeInput
    upsert?: FicheDeCongeUpsertWithoutDemandeInput
    disconnect?: FicheDeCongeWhereInput | boolean
    delete?: FicheDeCongeWhereInput | boolean
    connect?: FicheDeCongeWhereUniqueInput
    update?: XOR<XOR<FicheDeCongeUpdateToOneWithWhereWithoutDemandeInput, FicheDeCongeUpdateWithoutDemandeInput>, FicheDeCongeUncheckedUpdateWithoutDemandeInput>
  }

  export type DemandeCreateNestedOneWithoutDiscussionsInput = {
    create?: XOR<DemandeCreateWithoutDiscussionsInput, DemandeUncheckedCreateWithoutDiscussionsInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutDiscussionsInput
    connect?: DemandeWhereUniqueInput
  }

  export type DemandeUpdateOneRequiredWithoutDiscussionsNestedInput = {
    create?: XOR<DemandeCreateWithoutDiscussionsInput, DemandeUncheckedCreateWithoutDiscussionsInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutDiscussionsInput
    upsert?: DemandeUpsertWithoutDiscussionsInput
    connect?: DemandeWhereUniqueInput
    update?: XOR<XOR<DemandeUpdateToOneWithWhereWithoutDiscussionsInput, DemandeUpdateWithoutDiscussionsInput>, DemandeUncheckedUpdateWithoutDiscussionsInput>
  }

  export type DemandeCreateNestedOneWithoutFicheDeCongeInput = {
    create?: XOR<DemandeCreateWithoutFicheDeCongeInput, DemandeUncheckedCreateWithoutFicheDeCongeInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutFicheDeCongeInput
    connect?: DemandeWhereUniqueInput
  }

  export type PersonnelCreateNestedOneWithoutFichesCongeInput = {
    create?: XOR<PersonnelCreateWithoutFichesCongeInput, PersonnelUncheckedCreateWithoutFichesCongeInput>
    connectOrCreate?: PersonnelCreateOrConnectWithoutFichesCongeInput
    connect?: PersonnelWhereUniqueInput
  }

  export type DemandeUpdateOneRequiredWithoutFicheDeCongeNestedInput = {
    create?: XOR<DemandeCreateWithoutFicheDeCongeInput, DemandeUncheckedCreateWithoutFicheDeCongeInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutFicheDeCongeInput
    upsert?: DemandeUpsertWithoutFicheDeCongeInput
    connect?: DemandeWhereUniqueInput
    update?: XOR<XOR<DemandeUpdateToOneWithWhereWithoutFicheDeCongeInput, DemandeUpdateWithoutFicheDeCongeInput>, DemandeUncheckedUpdateWithoutFicheDeCongeInput>
  }

  export type PersonnelUpdateOneRequiredWithoutFichesCongeNestedInput = {
    create?: XOR<PersonnelCreateWithoutFichesCongeInput, PersonnelUncheckedCreateWithoutFichesCongeInput>
    connectOrCreate?: PersonnelCreateOrConnectWithoutFichesCongeInput
    upsert?: PersonnelUpsertWithoutFichesCongeInput
    connect?: PersonnelWhereUniqueInput
    update?: XOR<XOR<PersonnelUpdateToOneWithWhereWithoutFichesCongeInput, PersonnelUpdateWithoutFichesCongeInput>, PersonnelUncheckedUpdateWithoutFichesCongeInput>
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRolePersonnelFilter<$PrismaModel = never> = {
    equals?: $Enums.RolePersonnel | EnumRolePersonnelFieldRefInput<$PrismaModel>
    in?: $Enums.RolePersonnel[] | ListEnumRolePersonnelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolePersonnel[] | ListEnumRolePersonnelFieldRefInput<$PrismaModel>
    not?: NestedEnumRolePersonnelFilter<$PrismaModel> | $Enums.RolePersonnel
  }

  export type NestedEnumTypePersonnelFilter<$PrismaModel = never> = {
    equals?: $Enums.TypePersonnel | EnumTypePersonnelFieldRefInput<$PrismaModel>
    in?: $Enums.TypePersonnel[] | ListEnumTypePersonnelFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypePersonnel[] | ListEnumTypePersonnelFieldRefInput<$PrismaModel>
    not?: NestedEnumTypePersonnelFilter<$PrismaModel> | $Enums.TypePersonnel
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRolePersonnelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RolePersonnel | EnumRolePersonnelFieldRefInput<$PrismaModel>
    in?: $Enums.RolePersonnel[] | ListEnumRolePersonnelFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolePersonnel[] | ListEnumRolePersonnelFieldRefInput<$PrismaModel>
    not?: NestedEnumRolePersonnelWithAggregatesFilter<$PrismaModel> | $Enums.RolePersonnel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolePersonnelFilter<$PrismaModel>
    _max?: NestedEnumRolePersonnelFilter<$PrismaModel>
  }

  export type NestedEnumTypePersonnelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypePersonnel | EnumTypePersonnelFieldRefInput<$PrismaModel>
    in?: $Enums.TypePersonnel[] | ListEnumTypePersonnelFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypePersonnel[] | ListEnumTypePersonnelFieldRefInput<$PrismaModel>
    not?: NestedEnumTypePersonnelWithAggregatesFilter<$PrismaModel> | $Enums.TypePersonnel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypePersonnelFilter<$PrismaModel>
    _max?: NestedEnumTypePersonnelFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumStatutDemandeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeFilter<$PrismaModel> | $Enums.StatutDemande
  }

  export type NestedEnumStatutDemandeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeWithAggregatesFilter<$PrismaModel> | $Enums.StatutDemande
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDemandeFilter<$PrismaModel>
    _max?: NestedEnumStatutDemandeFilter<$PrismaModel>
  }

  export type ServiceCreateWithoutDirectionInput = {
    id_service?: string
    code_service: string
    nom_service: string
    nb_personnel?: number | null
    date_creation?: Date | string
    personnels?: PersonnelCreateNestedManyWithoutServiceInput
    demandes?: DemandeCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutDirectionInput = {
    id_service?: string
    code_service: string
    nom_service: string
    nb_personnel?: number | null
    date_creation?: Date | string
    personnels?: PersonnelUncheckedCreateNestedManyWithoutServiceInput
    demandes?: DemandeUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutDirectionInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutDirectionInput, ServiceUncheckedCreateWithoutDirectionInput>
  }

  export type ServiceCreateManyDirectionInputEnvelope = {
    data: ServiceCreateManyDirectionInput | ServiceCreateManyDirectionInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithWhereUniqueWithoutDirectionInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutDirectionInput, ServiceUncheckedUpdateWithoutDirectionInput>
    create: XOR<ServiceCreateWithoutDirectionInput, ServiceUncheckedCreateWithoutDirectionInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutDirectionInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutDirectionInput, ServiceUncheckedUpdateWithoutDirectionInput>
  }

  export type ServiceUpdateManyWithWhereWithoutDirectionInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutDirectionInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id_service?: StringFilter<"Service"> | string
    code_service?: StringFilter<"Service"> | string
    nom_service?: StringFilter<"Service"> | string
    nb_personnel?: IntNullableFilter<"Service"> | number | null
    date_creation?: DateTimeFilter<"Service"> | Date | string
    id_direction?: StringFilter<"Service"> | string
  }

  export type DirectionCreateWithoutServicesInput = {
    id_direction?: string
    code_direction: string
    nom_direction: string
    nb_personnel?: number | null
    nom_directeur: string
    email_direction?: string | null
    statut?: string | null
    date_creation?: Date | string
  }

  export type DirectionUncheckedCreateWithoutServicesInput = {
    id_direction?: string
    code_direction: string
    nom_direction: string
    nb_personnel?: number | null
    nom_directeur: string
    email_direction?: string | null
    statut?: string | null
    date_creation?: Date | string
  }

  export type DirectionCreateOrConnectWithoutServicesInput = {
    where: DirectionWhereUniqueInput
    create: XOR<DirectionCreateWithoutServicesInput, DirectionUncheckedCreateWithoutServicesInput>
  }

  export type PersonnelCreateWithoutServiceInput = {
    id_personnel?: string
    nom_personnel: string
    prenom_personnel: string
    email_personnel?: string | null
    email_travail?: string | null
    password?: string | null
    date_naissance?: Date | string | null
    matricule_personnel?: string | null
    telephone_travail?: string | null
    telephone_personnel?: string | null
    ville_personnel?: string | null
    adresse_personnel?: string | null
    codepostal?: string | null
    pays_personnel?: string | null
    telephone_contact_urgence?: string | null
    nom_contact_urgence?: string | null
    role_personnel?: $Enums.RolePersonnel
    type_personnel?: $Enums.TypePersonnel
    date_creation?: Date | string
    is_active?: boolean
    demandes?: DemandeCreateNestedManyWithoutPersonnelInput
    fichesConge?: FicheDeCongeCreateNestedManyWithoutPersonnelInput
    demandesEnCoursChef?: DemandeCreateNestedManyWithoutChefServiceInput
  }

  export type PersonnelUncheckedCreateWithoutServiceInput = {
    id_personnel?: string
    nom_personnel: string
    prenom_personnel: string
    email_personnel?: string | null
    email_travail?: string | null
    password?: string | null
    date_naissance?: Date | string | null
    matricule_personnel?: string | null
    telephone_travail?: string | null
    telephone_personnel?: string | null
    ville_personnel?: string | null
    adresse_personnel?: string | null
    codepostal?: string | null
    pays_personnel?: string | null
    telephone_contact_urgence?: string | null
    nom_contact_urgence?: string | null
    role_personnel?: $Enums.RolePersonnel
    type_personnel?: $Enums.TypePersonnel
    date_creation?: Date | string
    is_active?: boolean
    demandes?: DemandeUncheckedCreateNestedManyWithoutPersonnelInput
    fichesConge?: FicheDeCongeUncheckedCreateNestedManyWithoutPersonnelInput
    demandesEnCoursChef?: DemandeUncheckedCreateNestedManyWithoutChefServiceInput
  }

  export type PersonnelCreateOrConnectWithoutServiceInput = {
    where: PersonnelWhereUniqueInput
    create: XOR<PersonnelCreateWithoutServiceInput, PersonnelUncheckedCreateWithoutServiceInput>
  }

  export type PersonnelCreateManyServiceInputEnvelope = {
    data: PersonnelCreateManyServiceInput | PersonnelCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type DemandeCreateWithoutServiceInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    personnel: PersonnelCreateNestedOneWithoutDemandesInput
    periodeConge?: PeriodeCongeCreateNestedOneWithoutDemandesInput
    discussions?: DiscussionCreateNestedManyWithoutDemandeInput
    chefService?: PersonnelCreateNestedOneWithoutDemandesEnCoursChefInput
    ficheDeConge?: FicheDeCongeCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutServiceInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    id_personnel: string
    id_periodeconge?: string | null
    id_chef_service?: string | null
    discussions?: DiscussionUncheckedCreateNestedManyWithoutDemandeInput
    ficheDeConge?: FicheDeCongeUncheckedCreateNestedOneWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutServiceInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutServiceInput, DemandeUncheckedCreateWithoutServiceInput>
  }

  export type DemandeCreateManyServiceInputEnvelope = {
    data: DemandeCreateManyServiceInput | DemandeCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type DirectionUpsertWithoutServicesInput = {
    update: XOR<DirectionUpdateWithoutServicesInput, DirectionUncheckedUpdateWithoutServicesInput>
    create: XOR<DirectionCreateWithoutServicesInput, DirectionUncheckedCreateWithoutServicesInput>
    where?: DirectionWhereInput
  }

  export type DirectionUpdateToOneWithWhereWithoutServicesInput = {
    where?: DirectionWhereInput
    data: XOR<DirectionUpdateWithoutServicesInput, DirectionUncheckedUpdateWithoutServicesInput>
  }

  export type DirectionUpdateWithoutServicesInput = {
    id_direction?: StringFieldUpdateOperationsInput | string
    code_direction?: StringFieldUpdateOperationsInput | string
    nom_direction?: StringFieldUpdateOperationsInput | string
    nb_personnel?: NullableIntFieldUpdateOperationsInput | number | null
    nom_directeur?: StringFieldUpdateOperationsInput | string
    email_direction?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectionUncheckedUpdateWithoutServicesInput = {
    id_direction?: StringFieldUpdateOperationsInput | string
    code_direction?: StringFieldUpdateOperationsInput | string
    nom_direction?: StringFieldUpdateOperationsInput | string
    nb_personnel?: NullableIntFieldUpdateOperationsInput | number | null
    nom_directeur?: StringFieldUpdateOperationsInput | string
    email_direction?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: NullableStringFieldUpdateOperationsInput | string | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonnelUpsertWithWhereUniqueWithoutServiceInput = {
    where: PersonnelWhereUniqueInput
    update: XOR<PersonnelUpdateWithoutServiceInput, PersonnelUncheckedUpdateWithoutServiceInput>
    create: XOR<PersonnelCreateWithoutServiceInput, PersonnelUncheckedCreateWithoutServiceInput>
  }

  export type PersonnelUpdateWithWhereUniqueWithoutServiceInput = {
    where: PersonnelWhereUniqueInput
    data: XOR<PersonnelUpdateWithoutServiceInput, PersonnelUncheckedUpdateWithoutServiceInput>
  }

  export type PersonnelUpdateManyWithWhereWithoutServiceInput = {
    where: PersonnelScalarWhereInput
    data: XOR<PersonnelUpdateManyMutationInput, PersonnelUncheckedUpdateManyWithoutServiceInput>
  }

  export type PersonnelScalarWhereInput = {
    AND?: PersonnelScalarWhereInput | PersonnelScalarWhereInput[]
    OR?: PersonnelScalarWhereInput[]
    NOT?: PersonnelScalarWhereInput | PersonnelScalarWhereInput[]
    id_personnel?: StringFilter<"Personnel"> | string
    nom_personnel?: StringFilter<"Personnel"> | string
    prenom_personnel?: StringFilter<"Personnel"> | string
    email_personnel?: StringNullableFilter<"Personnel"> | string | null
    email_travail?: StringNullableFilter<"Personnel"> | string | null
    password?: StringNullableFilter<"Personnel"> | string | null
    date_naissance?: DateTimeNullableFilter<"Personnel"> | Date | string | null
    matricule_personnel?: StringNullableFilter<"Personnel"> | string | null
    telephone_travail?: StringNullableFilter<"Personnel"> | string | null
    telephone_personnel?: StringNullableFilter<"Personnel"> | string | null
    ville_personnel?: StringNullableFilter<"Personnel"> | string | null
    adresse_personnel?: StringNullableFilter<"Personnel"> | string | null
    codepostal?: StringNullableFilter<"Personnel"> | string | null
    pays_personnel?: StringNullableFilter<"Personnel"> | string | null
    telephone_contact_urgence?: StringNullableFilter<"Personnel"> | string | null
    nom_contact_urgence?: StringNullableFilter<"Personnel"> | string | null
    role_personnel?: EnumRolePersonnelFilter<"Personnel"> | $Enums.RolePersonnel
    type_personnel?: EnumTypePersonnelFilter<"Personnel"> | $Enums.TypePersonnel
    date_creation?: DateTimeFilter<"Personnel"> | Date | string
    id_service?: StringFilter<"Personnel"> | string
    is_active?: BoolFilter<"Personnel"> | boolean
  }

  export type DemandeUpsertWithWhereUniqueWithoutServiceInput = {
    where: DemandeWhereUniqueInput
    update: XOR<DemandeUpdateWithoutServiceInput, DemandeUncheckedUpdateWithoutServiceInput>
    create: XOR<DemandeCreateWithoutServiceInput, DemandeUncheckedCreateWithoutServiceInput>
  }

  export type DemandeUpdateWithWhereUniqueWithoutServiceInput = {
    where: DemandeWhereUniqueInput
    data: XOR<DemandeUpdateWithoutServiceInput, DemandeUncheckedUpdateWithoutServiceInput>
  }

  export type DemandeUpdateManyWithWhereWithoutServiceInput = {
    where: DemandeScalarWhereInput
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyWithoutServiceInput>
  }

  export type DemandeScalarWhereInput = {
    AND?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
    OR?: DemandeScalarWhereInput[]
    NOT?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
    id_demande?: StringFilter<"Demande"> | string
    type_demande?: StringFilter<"Demande"> | string
    statut_demande?: EnumStatutDemandeFilter<"Demande"> | $Enums.StatutDemande
    date_demande?: DateTimeFilter<"Demande"> | Date | string
    motif?: StringNullableFilter<"Demande"> | string | null
    id_personnel?: StringFilter<"Demande"> | string
    id_service?: StringNullableFilter<"Demande"> | string | null
    id_periodeconge?: StringNullableFilter<"Demande"> | string | null
    id_chef_service?: StringNullableFilter<"Demande"> | string | null
  }

  export type ServiceCreateWithoutPersonnelsInput = {
    id_service?: string
    code_service: string
    nom_service: string
    nb_personnel?: number | null
    date_creation?: Date | string
    direction: DirectionCreateNestedOneWithoutServicesInput
    demandes?: DemandeCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutPersonnelsInput = {
    id_service?: string
    code_service: string
    nom_service: string
    nb_personnel?: number | null
    date_creation?: Date | string
    id_direction: string
    demandes?: DemandeUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutPersonnelsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutPersonnelsInput, ServiceUncheckedCreateWithoutPersonnelsInput>
  }

  export type DemandeCreateWithoutPersonnelInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    service?: ServiceCreateNestedOneWithoutDemandesInput
    periodeConge?: PeriodeCongeCreateNestedOneWithoutDemandesInput
    discussions?: DiscussionCreateNestedManyWithoutDemandeInput
    chefService?: PersonnelCreateNestedOneWithoutDemandesEnCoursChefInput
    ficheDeConge?: FicheDeCongeCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutPersonnelInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    id_service?: string | null
    id_periodeconge?: string | null
    id_chef_service?: string | null
    discussions?: DiscussionUncheckedCreateNestedManyWithoutDemandeInput
    ficheDeConge?: FicheDeCongeUncheckedCreateNestedOneWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutPersonnelInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutPersonnelInput, DemandeUncheckedCreateWithoutPersonnelInput>
  }

  export type DemandeCreateManyPersonnelInputEnvelope = {
    data: DemandeCreateManyPersonnelInput | DemandeCreateManyPersonnelInput[]
    skipDuplicates?: boolean
  }

  export type FicheDeCongeCreateWithoutPersonnelInput = {
    id_ficheconge?: string
    message?: string | null
    date_message?: Date | string
    heure_message?: string | null
    demande: DemandeCreateNestedOneWithoutFicheDeCongeInput
  }

  export type FicheDeCongeUncheckedCreateWithoutPersonnelInput = {
    id_ficheconge?: string
    message?: string | null
    date_message?: Date | string
    heure_message?: string | null
    id_demande: string
  }

  export type FicheDeCongeCreateOrConnectWithoutPersonnelInput = {
    where: FicheDeCongeWhereUniqueInput
    create: XOR<FicheDeCongeCreateWithoutPersonnelInput, FicheDeCongeUncheckedCreateWithoutPersonnelInput>
  }

  export type FicheDeCongeCreateManyPersonnelInputEnvelope = {
    data: FicheDeCongeCreateManyPersonnelInput | FicheDeCongeCreateManyPersonnelInput[]
    skipDuplicates?: boolean
  }

  export type DemandeCreateWithoutChefServiceInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    personnel: PersonnelCreateNestedOneWithoutDemandesInput
    service?: ServiceCreateNestedOneWithoutDemandesInput
    periodeConge?: PeriodeCongeCreateNestedOneWithoutDemandesInput
    discussions?: DiscussionCreateNestedManyWithoutDemandeInput
    ficheDeConge?: FicheDeCongeCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutChefServiceInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    id_personnel: string
    id_service?: string | null
    id_periodeconge?: string | null
    discussions?: DiscussionUncheckedCreateNestedManyWithoutDemandeInput
    ficheDeConge?: FicheDeCongeUncheckedCreateNestedOneWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutChefServiceInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutChefServiceInput, DemandeUncheckedCreateWithoutChefServiceInput>
  }

  export type DemandeCreateManyChefServiceInputEnvelope = {
    data: DemandeCreateManyChefServiceInput | DemandeCreateManyChefServiceInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithoutPersonnelsInput = {
    update: XOR<ServiceUpdateWithoutPersonnelsInput, ServiceUncheckedUpdateWithoutPersonnelsInput>
    create: XOR<ServiceCreateWithoutPersonnelsInput, ServiceUncheckedCreateWithoutPersonnelsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutPersonnelsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutPersonnelsInput, ServiceUncheckedUpdateWithoutPersonnelsInput>
  }

  export type ServiceUpdateWithoutPersonnelsInput = {
    id_service?: StringFieldUpdateOperationsInput | string
    code_service?: StringFieldUpdateOperationsInput | string
    nom_service?: StringFieldUpdateOperationsInput | string
    nb_personnel?: NullableIntFieldUpdateOperationsInput | number | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    direction?: DirectionUpdateOneRequiredWithoutServicesNestedInput
    demandes?: DemandeUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutPersonnelsInput = {
    id_service?: StringFieldUpdateOperationsInput | string
    code_service?: StringFieldUpdateOperationsInput | string
    nom_service?: StringFieldUpdateOperationsInput | string
    nb_personnel?: NullableIntFieldUpdateOperationsInput | number | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_direction?: StringFieldUpdateOperationsInput | string
    demandes?: DemandeUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type DemandeUpsertWithWhereUniqueWithoutPersonnelInput = {
    where: DemandeWhereUniqueInput
    update: XOR<DemandeUpdateWithoutPersonnelInput, DemandeUncheckedUpdateWithoutPersonnelInput>
    create: XOR<DemandeCreateWithoutPersonnelInput, DemandeUncheckedCreateWithoutPersonnelInput>
  }

  export type DemandeUpdateWithWhereUniqueWithoutPersonnelInput = {
    where: DemandeWhereUniqueInput
    data: XOR<DemandeUpdateWithoutPersonnelInput, DemandeUncheckedUpdateWithoutPersonnelInput>
  }

  export type DemandeUpdateManyWithWhereWithoutPersonnelInput = {
    where: DemandeScalarWhereInput
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyWithoutPersonnelInput>
  }

  export type FicheDeCongeUpsertWithWhereUniqueWithoutPersonnelInput = {
    where: FicheDeCongeWhereUniqueInput
    update: XOR<FicheDeCongeUpdateWithoutPersonnelInput, FicheDeCongeUncheckedUpdateWithoutPersonnelInput>
    create: XOR<FicheDeCongeCreateWithoutPersonnelInput, FicheDeCongeUncheckedCreateWithoutPersonnelInput>
  }

  export type FicheDeCongeUpdateWithWhereUniqueWithoutPersonnelInput = {
    where: FicheDeCongeWhereUniqueInput
    data: XOR<FicheDeCongeUpdateWithoutPersonnelInput, FicheDeCongeUncheckedUpdateWithoutPersonnelInput>
  }

  export type FicheDeCongeUpdateManyWithWhereWithoutPersonnelInput = {
    where: FicheDeCongeScalarWhereInput
    data: XOR<FicheDeCongeUpdateManyMutationInput, FicheDeCongeUncheckedUpdateManyWithoutPersonnelInput>
  }

  export type FicheDeCongeScalarWhereInput = {
    AND?: FicheDeCongeScalarWhereInput | FicheDeCongeScalarWhereInput[]
    OR?: FicheDeCongeScalarWhereInput[]
    NOT?: FicheDeCongeScalarWhereInput | FicheDeCongeScalarWhereInput[]
    id_ficheconge?: StringFilter<"FicheDeConge"> | string
    message?: StringNullableFilter<"FicheDeConge"> | string | null
    date_message?: DateTimeFilter<"FicheDeConge"> | Date | string
    heure_message?: StringNullableFilter<"FicheDeConge"> | string | null
    id_demande?: StringFilter<"FicheDeConge"> | string
    id_personnel?: StringFilter<"FicheDeConge"> | string
  }

  export type DemandeUpsertWithWhereUniqueWithoutChefServiceInput = {
    where: DemandeWhereUniqueInput
    update: XOR<DemandeUpdateWithoutChefServiceInput, DemandeUncheckedUpdateWithoutChefServiceInput>
    create: XOR<DemandeCreateWithoutChefServiceInput, DemandeUncheckedCreateWithoutChefServiceInput>
  }

  export type DemandeUpdateWithWhereUniqueWithoutChefServiceInput = {
    where: DemandeWhereUniqueInput
    data: XOR<DemandeUpdateWithoutChefServiceInput, DemandeUncheckedUpdateWithoutChefServiceInput>
  }

  export type DemandeUpdateManyWithWhereWithoutChefServiceInput = {
    where: DemandeScalarWhereInput
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyWithoutChefServiceInput>
  }

  export type PeriodeCongeCreateWithoutTypeCongeInput = {
    id_periodeconge?: string
    date_debut: Date | string
    date_fin: Date | string
    nb_jour: number
    demandes?: DemandeCreateNestedManyWithoutPeriodeCongeInput
  }

  export type PeriodeCongeUncheckedCreateWithoutTypeCongeInput = {
    id_periodeconge?: string
    date_debut: Date | string
    date_fin: Date | string
    nb_jour: number
    demandes?: DemandeUncheckedCreateNestedManyWithoutPeriodeCongeInput
  }

  export type PeriodeCongeCreateOrConnectWithoutTypeCongeInput = {
    where: PeriodeCongeWhereUniqueInput
    create: XOR<PeriodeCongeCreateWithoutTypeCongeInput, PeriodeCongeUncheckedCreateWithoutTypeCongeInput>
  }

  export type PeriodeCongeCreateManyTypeCongeInputEnvelope = {
    data: PeriodeCongeCreateManyTypeCongeInput | PeriodeCongeCreateManyTypeCongeInput[]
    skipDuplicates?: boolean
  }

  export type PeriodeCongeUpsertWithWhereUniqueWithoutTypeCongeInput = {
    where: PeriodeCongeWhereUniqueInput
    update: XOR<PeriodeCongeUpdateWithoutTypeCongeInput, PeriodeCongeUncheckedUpdateWithoutTypeCongeInput>
    create: XOR<PeriodeCongeCreateWithoutTypeCongeInput, PeriodeCongeUncheckedCreateWithoutTypeCongeInput>
  }

  export type PeriodeCongeUpdateWithWhereUniqueWithoutTypeCongeInput = {
    where: PeriodeCongeWhereUniqueInput
    data: XOR<PeriodeCongeUpdateWithoutTypeCongeInput, PeriodeCongeUncheckedUpdateWithoutTypeCongeInput>
  }

  export type PeriodeCongeUpdateManyWithWhereWithoutTypeCongeInput = {
    where: PeriodeCongeScalarWhereInput
    data: XOR<PeriodeCongeUpdateManyMutationInput, PeriodeCongeUncheckedUpdateManyWithoutTypeCongeInput>
  }

  export type PeriodeCongeScalarWhereInput = {
    AND?: PeriodeCongeScalarWhereInput | PeriodeCongeScalarWhereInput[]
    OR?: PeriodeCongeScalarWhereInput[]
    NOT?: PeriodeCongeScalarWhereInput | PeriodeCongeScalarWhereInput[]
    id_periodeconge?: StringFilter<"PeriodeConge"> | string
    date_debut?: DateTimeFilter<"PeriodeConge"> | Date | string
    date_fin?: DateTimeFilter<"PeriodeConge"> | Date | string
    nb_jour?: IntFilter<"PeriodeConge"> | number
    id_typeconge?: StringFilter<"PeriodeConge"> | string
  }

  export type TypeCongeCreateWithoutPeriodesCongeInput = {
    id_typeconge?: string
    libelle_typeconge: string
    date_creation?: Date | string
    is_active?: boolean
  }

  export type TypeCongeUncheckedCreateWithoutPeriodesCongeInput = {
    id_typeconge?: string
    libelle_typeconge: string
    date_creation?: Date | string
    is_active?: boolean
  }

  export type TypeCongeCreateOrConnectWithoutPeriodesCongeInput = {
    where: TypeCongeWhereUniqueInput
    create: XOR<TypeCongeCreateWithoutPeriodesCongeInput, TypeCongeUncheckedCreateWithoutPeriodesCongeInput>
  }

  export type DemandeCreateWithoutPeriodeCongeInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    personnel: PersonnelCreateNestedOneWithoutDemandesInput
    service?: ServiceCreateNestedOneWithoutDemandesInput
    discussions?: DiscussionCreateNestedManyWithoutDemandeInput
    chefService?: PersonnelCreateNestedOneWithoutDemandesEnCoursChefInput
    ficheDeConge?: FicheDeCongeCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutPeriodeCongeInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    id_personnel: string
    id_service?: string | null
    id_chef_service?: string | null
    discussions?: DiscussionUncheckedCreateNestedManyWithoutDemandeInput
    ficheDeConge?: FicheDeCongeUncheckedCreateNestedOneWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutPeriodeCongeInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutPeriodeCongeInput, DemandeUncheckedCreateWithoutPeriodeCongeInput>
  }

  export type DemandeCreateManyPeriodeCongeInputEnvelope = {
    data: DemandeCreateManyPeriodeCongeInput | DemandeCreateManyPeriodeCongeInput[]
    skipDuplicates?: boolean
  }

  export type TypeCongeUpsertWithoutPeriodesCongeInput = {
    update: XOR<TypeCongeUpdateWithoutPeriodesCongeInput, TypeCongeUncheckedUpdateWithoutPeriodesCongeInput>
    create: XOR<TypeCongeCreateWithoutPeriodesCongeInput, TypeCongeUncheckedCreateWithoutPeriodesCongeInput>
    where?: TypeCongeWhereInput
  }

  export type TypeCongeUpdateToOneWithWhereWithoutPeriodesCongeInput = {
    where?: TypeCongeWhereInput
    data: XOR<TypeCongeUpdateWithoutPeriodesCongeInput, TypeCongeUncheckedUpdateWithoutPeriodesCongeInput>
  }

  export type TypeCongeUpdateWithoutPeriodesCongeInput = {
    id_typeconge?: StringFieldUpdateOperationsInput | string
    libelle_typeconge?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TypeCongeUncheckedUpdateWithoutPeriodesCongeInput = {
    id_typeconge?: StringFieldUpdateOperationsInput | string
    libelle_typeconge?: StringFieldUpdateOperationsInput | string
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DemandeUpsertWithWhereUniqueWithoutPeriodeCongeInput = {
    where: DemandeWhereUniqueInput
    update: XOR<DemandeUpdateWithoutPeriodeCongeInput, DemandeUncheckedUpdateWithoutPeriodeCongeInput>
    create: XOR<DemandeCreateWithoutPeriodeCongeInput, DemandeUncheckedCreateWithoutPeriodeCongeInput>
  }

  export type DemandeUpdateWithWhereUniqueWithoutPeriodeCongeInput = {
    where: DemandeWhereUniqueInput
    data: XOR<DemandeUpdateWithoutPeriodeCongeInput, DemandeUncheckedUpdateWithoutPeriodeCongeInput>
  }

  export type DemandeUpdateManyWithWhereWithoutPeriodeCongeInput = {
    where: DemandeScalarWhereInput
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyWithoutPeriodeCongeInput>
  }

  export type PersonnelCreateWithoutDemandesInput = {
    id_personnel?: string
    nom_personnel: string
    prenom_personnel: string
    email_personnel?: string | null
    email_travail?: string | null
    password?: string | null
    date_naissance?: Date | string | null
    matricule_personnel?: string | null
    telephone_travail?: string | null
    telephone_personnel?: string | null
    ville_personnel?: string | null
    adresse_personnel?: string | null
    codepostal?: string | null
    pays_personnel?: string | null
    telephone_contact_urgence?: string | null
    nom_contact_urgence?: string | null
    role_personnel?: $Enums.RolePersonnel
    type_personnel?: $Enums.TypePersonnel
    date_creation?: Date | string
    is_active?: boolean
    service: ServiceCreateNestedOneWithoutPersonnelsInput
    fichesConge?: FicheDeCongeCreateNestedManyWithoutPersonnelInput
    demandesEnCoursChef?: DemandeCreateNestedManyWithoutChefServiceInput
  }

  export type PersonnelUncheckedCreateWithoutDemandesInput = {
    id_personnel?: string
    nom_personnel: string
    prenom_personnel: string
    email_personnel?: string | null
    email_travail?: string | null
    password?: string | null
    date_naissance?: Date | string | null
    matricule_personnel?: string | null
    telephone_travail?: string | null
    telephone_personnel?: string | null
    ville_personnel?: string | null
    adresse_personnel?: string | null
    codepostal?: string | null
    pays_personnel?: string | null
    telephone_contact_urgence?: string | null
    nom_contact_urgence?: string | null
    role_personnel?: $Enums.RolePersonnel
    type_personnel?: $Enums.TypePersonnel
    date_creation?: Date | string
    id_service: string
    is_active?: boolean
    fichesConge?: FicheDeCongeUncheckedCreateNestedManyWithoutPersonnelInput
    demandesEnCoursChef?: DemandeUncheckedCreateNestedManyWithoutChefServiceInput
  }

  export type PersonnelCreateOrConnectWithoutDemandesInput = {
    where: PersonnelWhereUniqueInput
    create: XOR<PersonnelCreateWithoutDemandesInput, PersonnelUncheckedCreateWithoutDemandesInput>
  }

  export type ServiceCreateWithoutDemandesInput = {
    id_service?: string
    code_service: string
    nom_service: string
    nb_personnel?: number | null
    date_creation?: Date | string
    direction: DirectionCreateNestedOneWithoutServicesInput
    personnels?: PersonnelCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutDemandesInput = {
    id_service?: string
    code_service: string
    nom_service: string
    nb_personnel?: number | null
    date_creation?: Date | string
    id_direction: string
    personnels?: PersonnelUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutDemandesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutDemandesInput, ServiceUncheckedCreateWithoutDemandesInput>
  }

  export type PeriodeCongeCreateWithoutDemandesInput = {
    id_periodeconge?: string
    date_debut: Date | string
    date_fin: Date | string
    nb_jour: number
    typeConge: TypeCongeCreateNestedOneWithoutPeriodesCongeInput
  }

  export type PeriodeCongeUncheckedCreateWithoutDemandesInput = {
    id_periodeconge?: string
    date_debut: Date | string
    date_fin: Date | string
    nb_jour: number
    id_typeconge: string
  }

  export type PeriodeCongeCreateOrConnectWithoutDemandesInput = {
    where: PeriodeCongeWhereUniqueInput
    create: XOR<PeriodeCongeCreateWithoutDemandesInput, PeriodeCongeUncheckedCreateWithoutDemandesInput>
  }

  export type DiscussionCreateWithoutDemandeInput = {
    id_discussion?: string
    message: string
    date_message?: Date | string
    heure_message?: string | null
  }

  export type DiscussionUncheckedCreateWithoutDemandeInput = {
    id_discussion?: string
    message: string
    date_message?: Date | string
    heure_message?: string | null
  }

  export type DiscussionCreateOrConnectWithoutDemandeInput = {
    where: DiscussionWhereUniqueInput
    create: XOR<DiscussionCreateWithoutDemandeInput, DiscussionUncheckedCreateWithoutDemandeInput>
  }

  export type DiscussionCreateManyDemandeInputEnvelope = {
    data: DiscussionCreateManyDemandeInput | DiscussionCreateManyDemandeInput[]
    skipDuplicates?: boolean
  }

  export type PersonnelCreateWithoutDemandesEnCoursChefInput = {
    id_personnel?: string
    nom_personnel: string
    prenom_personnel: string
    email_personnel?: string | null
    email_travail?: string | null
    password?: string | null
    date_naissance?: Date | string | null
    matricule_personnel?: string | null
    telephone_travail?: string | null
    telephone_personnel?: string | null
    ville_personnel?: string | null
    adresse_personnel?: string | null
    codepostal?: string | null
    pays_personnel?: string | null
    telephone_contact_urgence?: string | null
    nom_contact_urgence?: string | null
    role_personnel?: $Enums.RolePersonnel
    type_personnel?: $Enums.TypePersonnel
    date_creation?: Date | string
    is_active?: boolean
    service: ServiceCreateNestedOneWithoutPersonnelsInput
    demandes?: DemandeCreateNestedManyWithoutPersonnelInput
    fichesConge?: FicheDeCongeCreateNestedManyWithoutPersonnelInput
  }

  export type PersonnelUncheckedCreateWithoutDemandesEnCoursChefInput = {
    id_personnel?: string
    nom_personnel: string
    prenom_personnel: string
    email_personnel?: string | null
    email_travail?: string | null
    password?: string | null
    date_naissance?: Date | string | null
    matricule_personnel?: string | null
    telephone_travail?: string | null
    telephone_personnel?: string | null
    ville_personnel?: string | null
    adresse_personnel?: string | null
    codepostal?: string | null
    pays_personnel?: string | null
    telephone_contact_urgence?: string | null
    nom_contact_urgence?: string | null
    role_personnel?: $Enums.RolePersonnel
    type_personnel?: $Enums.TypePersonnel
    date_creation?: Date | string
    id_service: string
    is_active?: boolean
    demandes?: DemandeUncheckedCreateNestedManyWithoutPersonnelInput
    fichesConge?: FicheDeCongeUncheckedCreateNestedManyWithoutPersonnelInput
  }

  export type PersonnelCreateOrConnectWithoutDemandesEnCoursChefInput = {
    where: PersonnelWhereUniqueInput
    create: XOR<PersonnelCreateWithoutDemandesEnCoursChefInput, PersonnelUncheckedCreateWithoutDemandesEnCoursChefInput>
  }

  export type FicheDeCongeCreateWithoutDemandeInput = {
    id_ficheconge?: string
    message?: string | null
    date_message?: Date | string
    heure_message?: string | null
    personnel: PersonnelCreateNestedOneWithoutFichesCongeInput
  }

  export type FicheDeCongeUncheckedCreateWithoutDemandeInput = {
    id_ficheconge?: string
    message?: string | null
    date_message?: Date | string
    heure_message?: string | null
    id_personnel: string
  }

  export type FicheDeCongeCreateOrConnectWithoutDemandeInput = {
    where: FicheDeCongeWhereUniqueInput
    create: XOR<FicheDeCongeCreateWithoutDemandeInput, FicheDeCongeUncheckedCreateWithoutDemandeInput>
  }

  export type PersonnelUpsertWithoutDemandesInput = {
    update: XOR<PersonnelUpdateWithoutDemandesInput, PersonnelUncheckedUpdateWithoutDemandesInput>
    create: XOR<PersonnelCreateWithoutDemandesInput, PersonnelUncheckedCreateWithoutDemandesInput>
    where?: PersonnelWhereInput
  }

  export type PersonnelUpdateToOneWithWhereWithoutDemandesInput = {
    where?: PersonnelWhereInput
    data: XOR<PersonnelUpdateWithoutDemandesInput, PersonnelUncheckedUpdateWithoutDemandesInput>
  }

  export type PersonnelUpdateWithoutDemandesInput = {
    id_personnel?: StringFieldUpdateOperationsInput | string
    nom_personnel?: StringFieldUpdateOperationsInput | string
    prenom_personnel?: StringFieldUpdateOperationsInput | string
    email_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    email_travail?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    date_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matricule_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_travail?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    ville_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    adresse_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    codepostal?: NullableStringFieldUpdateOperationsInput | string | null
    pays_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    nom_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    role_personnel?: EnumRolePersonnelFieldUpdateOperationsInput | $Enums.RolePersonnel
    type_personnel?: EnumTypePersonnelFieldUpdateOperationsInput | $Enums.TypePersonnel
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    service?: ServiceUpdateOneRequiredWithoutPersonnelsNestedInput
    fichesConge?: FicheDeCongeUpdateManyWithoutPersonnelNestedInput
    demandesEnCoursChef?: DemandeUpdateManyWithoutChefServiceNestedInput
  }

  export type PersonnelUncheckedUpdateWithoutDemandesInput = {
    id_personnel?: StringFieldUpdateOperationsInput | string
    nom_personnel?: StringFieldUpdateOperationsInput | string
    prenom_personnel?: StringFieldUpdateOperationsInput | string
    email_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    email_travail?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    date_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matricule_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_travail?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    ville_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    adresse_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    codepostal?: NullableStringFieldUpdateOperationsInput | string | null
    pays_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    nom_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    role_personnel?: EnumRolePersonnelFieldUpdateOperationsInput | $Enums.RolePersonnel
    type_personnel?: EnumTypePersonnelFieldUpdateOperationsInput | $Enums.TypePersonnel
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_service?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    fichesConge?: FicheDeCongeUncheckedUpdateManyWithoutPersonnelNestedInput
    demandesEnCoursChef?: DemandeUncheckedUpdateManyWithoutChefServiceNestedInput
  }

  export type ServiceUpsertWithoutDemandesInput = {
    update: XOR<ServiceUpdateWithoutDemandesInput, ServiceUncheckedUpdateWithoutDemandesInput>
    create: XOR<ServiceCreateWithoutDemandesInput, ServiceUncheckedCreateWithoutDemandesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutDemandesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutDemandesInput, ServiceUncheckedUpdateWithoutDemandesInput>
  }

  export type ServiceUpdateWithoutDemandesInput = {
    id_service?: StringFieldUpdateOperationsInput | string
    code_service?: StringFieldUpdateOperationsInput | string
    nom_service?: StringFieldUpdateOperationsInput | string
    nb_personnel?: NullableIntFieldUpdateOperationsInput | number | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    direction?: DirectionUpdateOneRequiredWithoutServicesNestedInput
    personnels?: PersonnelUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutDemandesInput = {
    id_service?: StringFieldUpdateOperationsInput | string
    code_service?: StringFieldUpdateOperationsInput | string
    nom_service?: StringFieldUpdateOperationsInput | string
    nb_personnel?: NullableIntFieldUpdateOperationsInput | number | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_direction?: StringFieldUpdateOperationsInput | string
    personnels?: PersonnelUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type PeriodeCongeUpsertWithoutDemandesInput = {
    update: XOR<PeriodeCongeUpdateWithoutDemandesInput, PeriodeCongeUncheckedUpdateWithoutDemandesInput>
    create: XOR<PeriodeCongeCreateWithoutDemandesInput, PeriodeCongeUncheckedCreateWithoutDemandesInput>
    where?: PeriodeCongeWhereInput
  }

  export type PeriodeCongeUpdateToOneWithWhereWithoutDemandesInput = {
    where?: PeriodeCongeWhereInput
    data: XOR<PeriodeCongeUpdateWithoutDemandesInput, PeriodeCongeUncheckedUpdateWithoutDemandesInput>
  }

  export type PeriodeCongeUpdateWithoutDemandesInput = {
    id_periodeconge?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_jour?: IntFieldUpdateOperationsInput | number
    typeConge?: TypeCongeUpdateOneRequiredWithoutPeriodesCongeNestedInput
  }

  export type PeriodeCongeUncheckedUpdateWithoutDemandesInput = {
    id_periodeconge?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_jour?: IntFieldUpdateOperationsInput | number
    id_typeconge?: StringFieldUpdateOperationsInput | string
  }

  export type DiscussionUpsertWithWhereUniqueWithoutDemandeInput = {
    where: DiscussionWhereUniqueInput
    update: XOR<DiscussionUpdateWithoutDemandeInput, DiscussionUncheckedUpdateWithoutDemandeInput>
    create: XOR<DiscussionCreateWithoutDemandeInput, DiscussionUncheckedCreateWithoutDemandeInput>
  }

  export type DiscussionUpdateWithWhereUniqueWithoutDemandeInput = {
    where: DiscussionWhereUniqueInput
    data: XOR<DiscussionUpdateWithoutDemandeInput, DiscussionUncheckedUpdateWithoutDemandeInput>
  }

  export type DiscussionUpdateManyWithWhereWithoutDemandeInput = {
    where: DiscussionScalarWhereInput
    data: XOR<DiscussionUpdateManyMutationInput, DiscussionUncheckedUpdateManyWithoutDemandeInput>
  }

  export type DiscussionScalarWhereInput = {
    AND?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
    OR?: DiscussionScalarWhereInput[]
    NOT?: DiscussionScalarWhereInput | DiscussionScalarWhereInput[]
    id_discussion?: StringFilter<"Discussion"> | string
    message?: StringFilter<"Discussion"> | string
    date_message?: DateTimeFilter<"Discussion"> | Date | string
    heure_message?: StringNullableFilter<"Discussion"> | string | null
    id_demande?: StringFilter<"Discussion"> | string
  }

  export type PersonnelUpsertWithoutDemandesEnCoursChefInput = {
    update: XOR<PersonnelUpdateWithoutDemandesEnCoursChefInput, PersonnelUncheckedUpdateWithoutDemandesEnCoursChefInput>
    create: XOR<PersonnelCreateWithoutDemandesEnCoursChefInput, PersonnelUncheckedCreateWithoutDemandesEnCoursChefInput>
    where?: PersonnelWhereInput
  }

  export type PersonnelUpdateToOneWithWhereWithoutDemandesEnCoursChefInput = {
    where?: PersonnelWhereInput
    data: XOR<PersonnelUpdateWithoutDemandesEnCoursChefInput, PersonnelUncheckedUpdateWithoutDemandesEnCoursChefInput>
  }

  export type PersonnelUpdateWithoutDemandesEnCoursChefInput = {
    id_personnel?: StringFieldUpdateOperationsInput | string
    nom_personnel?: StringFieldUpdateOperationsInput | string
    prenom_personnel?: StringFieldUpdateOperationsInput | string
    email_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    email_travail?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    date_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matricule_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_travail?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    ville_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    adresse_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    codepostal?: NullableStringFieldUpdateOperationsInput | string | null
    pays_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    nom_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    role_personnel?: EnumRolePersonnelFieldUpdateOperationsInput | $Enums.RolePersonnel
    type_personnel?: EnumTypePersonnelFieldUpdateOperationsInput | $Enums.TypePersonnel
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    service?: ServiceUpdateOneRequiredWithoutPersonnelsNestedInput
    demandes?: DemandeUpdateManyWithoutPersonnelNestedInput
    fichesConge?: FicheDeCongeUpdateManyWithoutPersonnelNestedInput
  }

  export type PersonnelUncheckedUpdateWithoutDemandesEnCoursChefInput = {
    id_personnel?: StringFieldUpdateOperationsInput | string
    nom_personnel?: StringFieldUpdateOperationsInput | string
    prenom_personnel?: StringFieldUpdateOperationsInput | string
    email_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    email_travail?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    date_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matricule_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_travail?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    ville_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    adresse_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    codepostal?: NullableStringFieldUpdateOperationsInput | string | null
    pays_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    nom_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    role_personnel?: EnumRolePersonnelFieldUpdateOperationsInput | $Enums.RolePersonnel
    type_personnel?: EnumTypePersonnelFieldUpdateOperationsInput | $Enums.TypePersonnel
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_service?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    demandes?: DemandeUncheckedUpdateManyWithoutPersonnelNestedInput
    fichesConge?: FicheDeCongeUncheckedUpdateManyWithoutPersonnelNestedInput
  }

  export type FicheDeCongeUpsertWithoutDemandeInput = {
    update: XOR<FicheDeCongeUpdateWithoutDemandeInput, FicheDeCongeUncheckedUpdateWithoutDemandeInput>
    create: XOR<FicheDeCongeCreateWithoutDemandeInput, FicheDeCongeUncheckedCreateWithoutDemandeInput>
    where?: FicheDeCongeWhereInput
  }

  export type FicheDeCongeUpdateToOneWithWhereWithoutDemandeInput = {
    where?: FicheDeCongeWhereInput
    data: XOR<FicheDeCongeUpdateWithoutDemandeInput, FicheDeCongeUncheckedUpdateWithoutDemandeInput>
  }

  export type FicheDeCongeUpdateWithoutDemandeInput = {
    id_ficheconge?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    date_message?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_message?: NullableStringFieldUpdateOperationsInput | string | null
    personnel?: PersonnelUpdateOneRequiredWithoutFichesCongeNestedInput
  }

  export type FicheDeCongeUncheckedUpdateWithoutDemandeInput = {
    id_ficheconge?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    date_message?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_message?: NullableStringFieldUpdateOperationsInput | string | null
    id_personnel?: StringFieldUpdateOperationsInput | string
  }

  export type DemandeCreateWithoutDiscussionsInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    personnel: PersonnelCreateNestedOneWithoutDemandesInput
    service?: ServiceCreateNestedOneWithoutDemandesInput
    periodeConge?: PeriodeCongeCreateNestedOneWithoutDemandesInput
    chefService?: PersonnelCreateNestedOneWithoutDemandesEnCoursChefInput
    ficheDeConge?: FicheDeCongeCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutDiscussionsInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    id_personnel: string
    id_service?: string | null
    id_periodeconge?: string | null
    id_chef_service?: string | null
    ficheDeConge?: FicheDeCongeUncheckedCreateNestedOneWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutDiscussionsInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutDiscussionsInput, DemandeUncheckedCreateWithoutDiscussionsInput>
  }

  export type DemandeUpsertWithoutDiscussionsInput = {
    update: XOR<DemandeUpdateWithoutDiscussionsInput, DemandeUncheckedUpdateWithoutDiscussionsInput>
    create: XOR<DemandeCreateWithoutDiscussionsInput, DemandeUncheckedCreateWithoutDiscussionsInput>
    where?: DemandeWhereInput
  }

  export type DemandeUpdateToOneWithWhereWithoutDiscussionsInput = {
    where?: DemandeWhereInput
    data: XOR<DemandeUpdateWithoutDiscussionsInput, DemandeUncheckedUpdateWithoutDiscussionsInput>
  }

  export type DemandeUpdateWithoutDiscussionsInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    personnel?: PersonnelUpdateOneRequiredWithoutDemandesNestedInput
    service?: ServiceUpdateOneWithoutDemandesNestedInput
    periodeConge?: PeriodeCongeUpdateOneWithoutDemandesNestedInput
    chefService?: PersonnelUpdateOneWithoutDemandesEnCoursChefNestedInput
    ficheDeConge?: FicheDeCongeUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutDiscussionsInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    id_personnel?: StringFieldUpdateOperationsInput | string
    id_service?: NullableStringFieldUpdateOperationsInput | string | null
    id_periodeconge?: NullableStringFieldUpdateOperationsInput | string | null
    id_chef_service?: NullableStringFieldUpdateOperationsInput | string | null
    ficheDeConge?: FicheDeCongeUncheckedUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeCreateWithoutFicheDeCongeInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    personnel: PersonnelCreateNestedOneWithoutDemandesInput
    service?: ServiceCreateNestedOneWithoutDemandesInput
    periodeConge?: PeriodeCongeCreateNestedOneWithoutDemandesInput
    discussions?: DiscussionCreateNestedManyWithoutDemandeInput
    chefService?: PersonnelCreateNestedOneWithoutDemandesEnCoursChefInput
  }

  export type DemandeUncheckedCreateWithoutFicheDeCongeInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    id_personnel: string
    id_service?: string | null
    id_periodeconge?: string | null
    id_chef_service?: string | null
    discussions?: DiscussionUncheckedCreateNestedManyWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutFicheDeCongeInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutFicheDeCongeInput, DemandeUncheckedCreateWithoutFicheDeCongeInput>
  }

  export type PersonnelCreateWithoutFichesCongeInput = {
    id_personnel?: string
    nom_personnel: string
    prenom_personnel: string
    email_personnel?: string | null
    email_travail?: string | null
    password?: string | null
    date_naissance?: Date | string | null
    matricule_personnel?: string | null
    telephone_travail?: string | null
    telephone_personnel?: string | null
    ville_personnel?: string | null
    adresse_personnel?: string | null
    codepostal?: string | null
    pays_personnel?: string | null
    telephone_contact_urgence?: string | null
    nom_contact_urgence?: string | null
    role_personnel?: $Enums.RolePersonnel
    type_personnel?: $Enums.TypePersonnel
    date_creation?: Date | string
    is_active?: boolean
    service: ServiceCreateNestedOneWithoutPersonnelsInput
    demandes?: DemandeCreateNestedManyWithoutPersonnelInput
    demandesEnCoursChef?: DemandeCreateNestedManyWithoutChefServiceInput
  }

  export type PersonnelUncheckedCreateWithoutFichesCongeInput = {
    id_personnel?: string
    nom_personnel: string
    prenom_personnel: string
    email_personnel?: string | null
    email_travail?: string | null
    password?: string | null
    date_naissance?: Date | string | null
    matricule_personnel?: string | null
    telephone_travail?: string | null
    telephone_personnel?: string | null
    ville_personnel?: string | null
    adresse_personnel?: string | null
    codepostal?: string | null
    pays_personnel?: string | null
    telephone_contact_urgence?: string | null
    nom_contact_urgence?: string | null
    role_personnel?: $Enums.RolePersonnel
    type_personnel?: $Enums.TypePersonnel
    date_creation?: Date | string
    id_service: string
    is_active?: boolean
    demandes?: DemandeUncheckedCreateNestedManyWithoutPersonnelInput
    demandesEnCoursChef?: DemandeUncheckedCreateNestedManyWithoutChefServiceInput
  }

  export type PersonnelCreateOrConnectWithoutFichesCongeInput = {
    where: PersonnelWhereUniqueInput
    create: XOR<PersonnelCreateWithoutFichesCongeInput, PersonnelUncheckedCreateWithoutFichesCongeInput>
  }

  export type DemandeUpsertWithoutFicheDeCongeInput = {
    update: XOR<DemandeUpdateWithoutFicheDeCongeInput, DemandeUncheckedUpdateWithoutFicheDeCongeInput>
    create: XOR<DemandeCreateWithoutFicheDeCongeInput, DemandeUncheckedCreateWithoutFicheDeCongeInput>
    where?: DemandeWhereInput
  }

  export type DemandeUpdateToOneWithWhereWithoutFicheDeCongeInput = {
    where?: DemandeWhereInput
    data: XOR<DemandeUpdateWithoutFicheDeCongeInput, DemandeUncheckedUpdateWithoutFicheDeCongeInput>
  }

  export type DemandeUpdateWithoutFicheDeCongeInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    personnel?: PersonnelUpdateOneRequiredWithoutDemandesNestedInput
    service?: ServiceUpdateOneWithoutDemandesNestedInput
    periodeConge?: PeriodeCongeUpdateOneWithoutDemandesNestedInput
    discussions?: DiscussionUpdateManyWithoutDemandeNestedInput
    chefService?: PersonnelUpdateOneWithoutDemandesEnCoursChefNestedInput
  }

  export type DemandeUncheckedUpdateWithoutFicheDeCongeInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    id_personnel?: StringFieldUpdateOperationsInput | string
    id_service?: NullableStringFieldUpdateOperationsInput | string | null
    id_periodeconge?: NullableStringFieldUpdateOperationsInput | string | null
    id_chef_service?: NullableStringFieldUpdateOperationsInput | string | null
    discussions?: DiscussionUncheckedUpdateManyWithoutDemandeNestedInput
  }

  export type PersonnelUpsertWithoutFichesCongeInput = {
    update: XOR<PersonnelUpdateWithoutFichesCongeInput, PersonnelUncheckedUpdateWithoutFichesCongeInput>
    create: XOR<PersonnelCreateWithoutFichesCongeInput, PersonnelUncheckedCreateWithoutFichesCongeInput>
    where?: PersonnelWhereInput
  }

  export type PersonnelUpdateToOneWithWhereWithoutFichesCongeInput = {
    where?: PersonnelWhereInput
    data: XOR<PersonnelUpdateWithoutFichesCongeInput, PersonnelUncheckedUpdateWithoutFichesCongeInput>
  }

  export type PersonnelUpdateWithoutFichesCongeInput = {
    id_personnel?: StringFieldUpdateOperationsInput | string
    nom_personnel?: StringFieldUpdateOperationsInput | string
    prenom_personnel?: StringFieldUpdateOperationsInput | string
    email_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    email_travail?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    date_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matricule_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_travail?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    ville_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    adresse_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    codepostal?: NullableStringFieldUpdateOperationsInput | string | null
    pays_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    nom_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    role_personnel?: EnumRolePersonnelFieldUpdateOperationsInput | $Enums.RolePersonnel
    type_personnel?: EnumTypePersonnelFieldUpdateOperationsInput | $Enums.TypePersonnel
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    service?: ServiceUpdateOneRequiredWithoutPersonnelsNestedInput
    demandes?: DemandeUpdateManyWithoutPersonnelNestedInput
    demandesEnCoursChef?: DemandeUpdateManyWithoutChefServiceNestedInput
  }

  export type PersonnelUncheckedUpdateWithoutFichesCongeInput = {
    id_personnel?: StringFieldUpdateOperationsInput | string
    nom_personnel?: StringFieldUpdateOperationsInput | string
    prenom_personnel?: StringFieldUpdateOperationsInput | string
    email_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    email_travail?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    date_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matricule_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_travail?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    ville_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    adresse_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    codepostal?: NullableStringFieldUpdateOperationsInput | string | null
    pays_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    nom_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    role_personnel?: EnumRolePersonnelFieldUpdateOperationsInput | $Enums.RolePersonnel
    type_personnel?: EnumTypePersonnelFieldUpdateOperationsInput | $Enums.TypePersonnel
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    id_service?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    demandes?: DemandeUncheckedUpdateManyWithoutPersonnelNestedInput
    demandesEnCoursChef?: DemandeUncheckedUpdateManyWithoutChefServiceNestedInput
  }

  export type ServiceCreateManyDirectionInput = {
    id_service?: string
    code_service: string
    nom_service: string
    nb_personnel?: number | null
    date_creation?: Date | string
  }

  export type ServiceUpdateWithoutDirectionInput = {
    id_service?: StringFieldUpdateOperationsInput | string
    code_service?: StringFieldUpdateOperationsInput | string
    nom_service?: StringFieldUpdateOperationsInput | string
    nb_personnel?: NullableIntFieldUpdateOperationsInput | number | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    personnels?: PersonnelUpdateManyWithoutServiceNestedInput
    demandes?: DemandeUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutDirectionInput = {
    id_service?: StringFieldUpdateOperationsInput | string
    code_service?: StringFieldUpdateOperationsInput | string
    nom_service?: StringFieldUpdateOperationsInput | string
    nb_personnel?: NullableIntFieldUpdateOperationsInput | number | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    personnels?: PersonnelUncheckedUpdateManyWithoutServiceNestedInput
    demandes?: DemandeUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutDirectionInput = {
    id_service?: StringFieldUpdateOperationsInput | string
    code_service?: StringFieldUpdateOperationsInput | string
    nom_service?: StringFieldUpdateOperationsInput | string
    nb_personnel?: NullableIntFieldUpdateOperationsInput | number | null
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonnelCreateManyServiceInput = {
    id_personnel?: string
    nom_personnel: string
    prenom_personnel: string
    email_personnel?: string | null
    email_travail?: string | null
    password?: string | null
    date_naissance?: Date | string | null
    matricule_personnel?: string | null
    telephone_travail?: string | null
    telephone_personnel?: string | null
    ville_personnel?: string | null
    adresse_personnel?: string | null
    codepostal?: string | null
    pays_personnel?: string | null
    telephone_contact_urgence?: string | null
    nom_contact_urgence?: string | null
    role_personnel?: $Enums.RolePersonnel
    type_personnel?: $Enums.TypePersonnel
    date_creation?: Date | string
    is_active?: boolean
  }

  export type DemandeCreateManyServiceInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    id_personnel: string
    id_periodeconge?: string | null
    id_chef_service?: string | null
  }

  export type PersonnelUpdateWithoutServiceInput = {
    id_personnel?: StringFieldUpdateOperationsInput | string
    nom_personnel?: StringFieldUpdateOperationsInput | string
    prenom_personnel?: StringFieldUpdateOperationsInput | string
    email_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    email_travail?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    date_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matricule_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_travail?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    ville_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    adresse_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    codepostal?: NullableStringFieldUpdateOperationsInput | string | null
    pays_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    nom_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    role_personnel?: EnumRolePersonnelFieldUpdateOperationsInput | $Enums.RolePersonnel
    type_personnel?: EnumTypePersonnelFieldUpdateOperationsInput | $Enums.TypePersonnel
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    demandes?: DemandeUpdateManyWithoutPersonnelNestedInput
    fichesConge?: FicheDeCongeUpdateManyWithoutPersonnelNestedInput
    demandesEnCoursChef?: DemandeUpdateManyWithoutChefServiceNestedInput
  }

  export type PersonnelUncheckedUpdateWithoutServiceInput = {
    id_personnel?: StringFieldUpdateOperationsInput | string
    nom_personnel?: StringFieldUpdateOperationsInput | string
    prenom_personnel?: StringFieldUpdateOperationsInput | string
    email_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    email_travail?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    date_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matricule_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_travail?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    ville_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    adresse_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    codepostal?: NullableStringFieldUpdateOperationsInput | string | null
    pays_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    nom_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    role_personnel?: EnumRolePersonnelFieldUpdateOperationsInput | $Enums.RolePersonnel
    type_personnel?: EnumTypePersonnelFieldUpdateOperationsInput | $Enums.TypePersonnel
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    demandes?: DemandeUncheckedUpdateManyWithoutPersonnelNestedInput
    fichesConge?: FicheDeCongeUncheckedUpdateManyWithoutPersonnelNestedInput
    demandesEnCoursChef?: DemandeUncheckedUpdateManyWithoutChefServiceNestedInput
  }

  export type PersonnelUncheckedUpdateManyWithoutServiceInput = {
    id_personnel?: StringFieldUpdateOperationsInput | string
    nom_personnel?: StringFieldUpdateOperationsInput | string
    prenom_personnel?: StringFieldUpdateOperationsInput | string
    email_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    email_travail?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    date_naissance?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matricule_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_travail?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    ville_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    adresse_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    codepostal?: NullableStringFieldUpdateOperationsInput | string | null
    pays_personnel?: NullableStringFieldUpdateOperationsInput | string | null
    telephone_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    nom_contact_urgence?: NullableStringFieldUpdateOperationsInput | string | null
    role_personnel?: EnumRolePersonnelFieldUpdateOperationsInput | $Enums.RolePersonnel
    type_personnel?: EnumTypePersonnelFieldUpdateOperationsInput | $Enums.TypePersonnel
    date_creation?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DemandeUpdateWithoutServiceInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    personnel?: PersonnelUpdateOneRequiredWithoutDemandesNestedInput
    periodeConge?: PeriodeCongeUpdateOneWithoutDemandesNestedInput
    discussions?: DiscussionUpdateManyWithoutDemandeNestedInput
    chefService?: PersonnelUpdateOneWithoutDemandesEnCoursChefNestedInput
    ficheDeConge?: FicheDeCongeUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutServiceInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    id_personnel?: StringFieldUpdateOperationsInput | string
    id_periodeconge?: NullableStringFieldUpdateOperationsInput | string | null
    id_chef_service?: NullableStringFieldUpdateOperationsInput | string | null
    discussions?: DiscussionUncheckedUpdateManyWithoutDemandeNestedInput
    ficheDeConge?: FicheDeCongeUncheckedUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateManyWithoutServiceInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    id_personnel?: StringFieldUpdateOperationsInput | string
    id_periodeconge?: NullableStringFieldUpdateOperationsInput | string | null
    id_chef_service?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DemandeCreateManyPersonnelInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    id_service?: string | null
    id_periodeconge?: string | null
    id_chef_service?: string | null
  }

  export type FicheDeCongeCreateManyPersonnelInput = {
    id_ficheconge?: string
    message?: string | null
    date_message?: Date | string
    heure_message?: string | null
    id_demande: string
  }

  export type DemandeCreateManyChefServiceInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    id_personnel: string
    id_service?: string | null
    id_periodeconge?: string | null
  }

  export type DemandeUpdateWithoutPersonnelInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    service?: ServiceUpdateOneWithoutDemandesNestedInput
    periodeConge?: PeriodeCongeUpdateOneWithoutDemandesNestedInput
    discussions?: DiscussionUpdateManyWithoutDemandeNestedInput
    chefService?: PersonnelUpdateOneWithoutDemandesEnCoursChefNestedInput
    ficheDeConge?: FicheDeCongeUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutPersonnelInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    id_service?: NullableStringFieldUpdateOperationsInput | string | null
    id_periodeconge?: NullableStringFieldUpdateOperationsInput | string | null
    id_chef_service?: NullableStringFieldUpdateOperationsInput | string | null
    discussions?: DiscussionUncheckedUpdateManyWithoutDemandeNestedInput
    ficheDeConge?: FicheDeCongeUncheckedUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateManyWithoutPersonnelInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    id_service?: NullableStringFieldUpdateOperationsInput | string | null
    id_periodeconge?: NullableStringFieldUpdateOperationsInput | string | null
    id_chef_service?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FicheDeCongeUpdateWithoutPersonnelInput = {
    id_ficheconge?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    date_message?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_message?: NullableStringFieldUpdateOperationsInput | string | null
    demande?: DemandeUpdateOneRequiredWithoutFicheDeCongeNestedInput
  }

  export type FicheDeCongeUncheckedUpdateWithoutPersonnelInput = {
    id_ficheconge?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    date_message?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_message?: NullableStringFieldUpdateOperationsInput | string | null
    id_demande?: StringFieldUpdateOperationsInput | string
  }

  export type FicheDeCongeUncheckedUpdateManyWithoutPersonnelInput = {
    id_ficheconge?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    date_message?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_message?: NullableStringFieldUpdateOperationsInput | string | null
    id_demande?: StringFieldUpdateOperationsInput | string
  }

  export type DemandeUpdateWithoutChefServiceInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    personnel?: PersonnelUpdateOneRequiredWithoutDemandesNestedInput
    service?: ServiceUpdateOneWithoutDemandesNestedInput
    periodeConge?: PeriodeCongeUpdateOneWithoutDemandesNestedInput
    discussions?: DiscussionUpdateManyWithoutDemandeNestedInput
    ficheDeConge?: FicheDeCongeUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutChefServiceInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    id_personnel?: StringFieldUpdateOperationsInput | string
    id_service?: NullableStringFieldUpdateOperationsInput | string | null
    id_periodeconge?: NullableStringFieldUpdateOperationsInput | string | null
    discussions?: DiscussionUncheckedUpdateManyWithoutDemandeNestedInput
    ficheDeConge?: FicheDeCongeUncheckedUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateManyWithoutChefServiceInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    id_personnel?: StringFieldUpdateOperationsInput | string
    id_service?: NullableStringFieldUpdateOperationsInput | string | null
    id_periodeconge?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PeriodeCongeCreateManyTypeCongeInput = {
    id_periodeconge?: string
    date_debut: Date | string
    date_fin: Date | string
    nb_jour: number
  }

  export type PeriodeCongeUpdateWithoutTypeCongeInput = {
    id_periodeconge?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_jour?: IntFieldUpdateOperationsInput | number
    demandes?: DemandeUpdateManyWithoutPeriodeCongeNestedInput
  }

  export type PeriodeCongeUncheckedUpdateWithoutTypeCongeInput = {
    id_periodeconge?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_jour?: IntFieldUpdateOperationsInput | number
    demandes?: DemandeUncheckedUpdateManyWithoutPeriodeCongeNestedInput
  }

  export type PeriodeCongeUncheckedUpdateManyWithoutTypeCongeInput = {
    id_periodeconge?: StringFieldUpdateOperationsInput | string
    date_debut?: DateTimeFieldUpdateOperationsInput | Date | string
    date_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    nb_jour?: IntFieldUpdateOperationsInput | number
  }

  export type DemandeCreateManyPeriodeCongeInput = {
    id_demande?: string
    type_demande: string
    statut_demande?: $Enums.StatutDemande
    date_demande?: Date | string
    motif?: string | null
    id_personnel: string
    id_service?: string | null
    id_chef_service?: string | null
  }

  export type DemandeUpdateWithoutPeriodeCongeInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    personnel?: PersonnelUpdateOneRequiredWithoutDemandesNestedInput
    service?: ServiceUpdateOneWithoutDemandesNestedInput
    discussions?: DiscussionUpdateManyWithoutDemandeNestedInput
    chefService?: PersonnelUpdateOneWithoutDemandesEnCoursChefNestedInput
    ficheDeConge?: FicheDeCongeUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutPeriodeCongeInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    id_personnel?: StringFieldUpdateOperationsInput | string
    id_service?: NullableStringFieldUpdateOperationsInput | string | null
    id_chef_service?: NullableStringFieldUpdateOperationsInput | string | null
    discussions?: DiscussionUncheckedUpdateManyWithoutDemandeNestedInput
    ficheDeConge?: FicheDeCongeUncheckedUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateManyWithoutPeriodeCongeInput = {
    id_demande?: StringFieldUpdateOperationsInput | string
    type_demande?: StringFieldUpdateOperationsInput | string
    statut_demande?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    date_demande?: DateTimeFieldUpdateOperationsInput | Date | string
    motif?: NullableStringFieldUpdateOperationsInput | string | null
    id_personnel?: StringFieldUpdateOperationsInput | string
    id_service?: NullableStringFieldUpdateOperationsInput | string | null
    id_chef_service?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscussionCreateManyDemandeInput = {
    id_discussion?: string
    message: string
    date_message?: Date | string
    heure_message?: string | null
  }

  export type DiscussionUpdateWithoutDemandeInput = {
    id_discussion?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_message?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscussionUncheckedUpdateWithoutDemandeInput = {
    id_discussion?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_message?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DiscussionUncheckedUpdateManyWithoutDemandeInput = {
    id_discussion?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_message?: DateTimeFieldUpdateOperationsInput | Date | string
    heure_message?: NullableStringFieldUpdateOperationsInput | string | null
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