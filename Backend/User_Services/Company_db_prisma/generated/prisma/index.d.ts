
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
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Tasks
 * 
 */
export type Tasks = $Result.DefaultSelection<Prisma.$TasksPayload>
/**
 * Model Workflow
 * 
 */
export type Workflow = $Result.DefaultSelection<Prisma.$WorkflowPayload>
/**
 * Model Workflow_Rules
 * 
 */
export type Workflow_Rules = $Result.DefaultSelection<Prisma.$Workflow_RulesPayload>

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
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tasks`: Exposes CRUD operations for the **Tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.tasks.findMany()
    * ```
    */
  get tasks(): Prisma.TasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflow`: Exposes CRUD operations for the **Workflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflows
    * const workflows = await prisma.workflow.findMany()
    * ```
    */
  get workflow(): Prisma.WorkflowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflow_Rules`: Exposes CRUD operations for the **Workflow_Rules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflow_Rules
    * const workflow_Rules = await prisma.workflow_Rules.findMany()
    * ```
    */
  get workflow_Rules(): Prisma.Workflow_RulesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
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
    Role: 'Role',
    Tasks: 'Tasks',
    Workflow: 'Workflow',
    Workflow_Rules: 'Workflow_Rules'
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
      modelProps: "user" | "role" | "tasks" | "workflow" | "workflow_Rules"
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
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Tasks: {
        payload: Prisma.$TasksPayload<ExtArgs>
        fields: Prisma.TasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          findFirst: {
            args: Prisma.TasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          findMany: {
            args: Prisma.TasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>[]
          }
          create: {
            args: Prisma.TasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          createMany: {
            args: Prisma.TasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>[]
          }
          delete: {
            args: Prisma.TasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          update: {
            args: Prisma.TasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          deleteMany: {
            args: Prisma.TasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>[]
          }
          upsert: {
            args: Prisma.TasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          aggregate: {
            args: Prisma.TasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasks>
          }
          groupBy: {
            args: Prisma.TasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.TasksCountArgs<ExtArgs>
            result: $Utils.Optional<TasksCountAggregateOutputType> | number
          }
        }
      }
      Workflow: {
        payload: Prisma.$WorkflowPayload<ExtArgs>
        fields: Prisma.WorkflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findFirst: {
            args: Prisma.WorkflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findMany: {
            args: Prisma.WorkflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          create: {
            args: Prisma.WorkflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          createMany: {
            args: Prisma.WorkflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          delete: {
            args: Prisma.WorkflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          update: {
            args: Prisma.WorkflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          upsert: {
            args: Prisma.WorkflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          aggregate: {
            args: Prisma.WorkflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflow>
          }
          groupBy: {
            args: Prisma.WorkflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowCountAggregateOutputType> | number
          }
        }
      }
      Workflow_Rules: {
        payload: Prisma.$Workflow_RulesPayload<ExtArgs>
        fields: Prisma.Workflow_RulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Workflow_RulesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Workflow_RulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Workflow_RulesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Workflow_RulesPayload>
          }
          findFirst: {
            args: Prisma.Workflow_RulesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Workflow_RulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Workflow_RulesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Workflow_RulesPayload>
          }
          findMany: {
            args: Prisma.Workflow_RulesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Workflow_RulesPayload>[]
          }
          create: {
            args: Prisma.Workflow_RulesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Workflow_RulesPayload>
          }
          createMany: {
            args: Prisma.Workflow_RulesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Workflow_RulesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Workflow_RulesPayload>[]
          }
          delete: {
            args: Prisma.Workflow_RulesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Workflow_RulesPayload>
          }
          update: {
            args: Prisma.Workflow_RulesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Workflow_RulesPayload>
          }
          deleteMany: {
            args: Prisma.Workflow_RulesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Workflow_RulesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Workflow_RulesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Workflow_RulesPayload>[]
          }
          upsert: {
            args: Prisma.Workflow_RulesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Workflow_RulesPayload>
          }
          aggregate: {
            args: Prisma.Workflow_RulesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflow_Rules>
          }
          groupBy: {
            args: Prisma.Workflow_RulesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Workflow_RulesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Workflow_RulesCountArgs<ExtArgs>
            result: $Utils.Optional<Workflow_RulesCountAggregateOutputType> | number
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
    role?: RoleOmit
    tasks?: TasksOmit
    workflow?: WorkflowOmit
    workflow_Rules?: Workflow_RulesOmit
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
    task: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | UserCountOutputTypeCountTaskArgs
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
  export type UserCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    task: number
    user: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | RoleCountOutputTypeCountTaskArgs
    user?: boolean | RoleCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type WorkflowCountOutputType
   */

  export type WorkflowCountOutputType = {
    task: number
    rules: number
  }

  export type WorkflowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | WorkflowCountOutputTypeCountTaskArgs
    rules?: boolean | WorkflowCountOutputTypeCountRulesArgs
  }

  // Custom InputTypes
  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowCountOutputType
     */
    select?: WorkflowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Workflow_RulesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    empId: number | null
    role_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    empId: number | null
    role_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    empId: number | null
    role_id: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
    empId: number | null
    role_id: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    empId: number
    role_id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    empId?: true
    role_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    empId?: true
    role_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    empId?: true
    role_id?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    empId?: true
    role_id?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    empId?: true
    role_id?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstname: string
    lastname: string | null
    email: string
    empId: number
    role_id: number | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    empId?: boolean
    role_id?: boolean
    role?: boolean | User$roleArgs<ExtArgs>
    task?: boolean | User$taskArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    empId?: boolean
    role_id?: boolean
    role?: boolean | User$roleArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    empId?: boolean
    role_id?: boolean
    role?: boolean | User$roleArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    empId?: boolean
    role_id?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "empId" | "role_id", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | User$roleArgs<ExtArgs>
    task?: boolean | User$taskArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | User$roleArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | User$roleArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs> | null
      task: Prisma.$TasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstname: string
      lastname: string | null
      email: string
      empId: number
      role_id: number | null
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
    role<T extends User$roleArgs<ExtArgs> = {}>(args?: Subset<T, User$roleArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    task<T extends User$taskArgs<ExtArgs> = {}>(args?: Subset<T, User$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly empId: FieldRef<"User", 'Int'>
    readonly role_id: FieldRef<"User", 'Int'>
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
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.role
   */
  export type User$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
  }

  /**
   * User.task
   */
  export type User$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    where?: TasksWhereInput
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    cursor?: TasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
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
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    role_id: number | null
  }

  export type RoleSumAggregateOutputType = {
    role_id: number | null
  }

  export type RoleMinAggregateOutputType = {
    role_id: number | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    role_id: number | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    role_id: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    role_id?: true
  }

  export type RoleSumAggregateInputType = {
    role_id?: true
  }

  export type RoleMinAggregateInputType = {
    role_id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    role_id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    role_id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    role_id: number
    name: string | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    name?: boolean
    task?: boolean | Role$taskArgs<ExtArgs>
    user?: boolean | Role$userArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    role_id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    role_id?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"role_id" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | Role$taskArgs<ExtArgs>
    user?: boolean | Role$userArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      task: Prisma.$TasksPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      role_id: number
      name: string | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `role_id`
     * const roleWithRole_idOnly = await prisma.role.findMany({ select: { role_id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `role_id`
     * const roleWithRole_idOnly = await prisma.role.createManyAndReturn({
     *   select: { role_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `role_id`
     * const roleWithRole_idOnly = await prisma.role.updateManyAndReturn({
     *   select: { role_id: true },
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends Role$taskArgs<ExtArgs> = {}>(args?: Subset<T, Role$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Role$userArgs<ExtArgs> = {}>(args?: Subset<T, Role$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly role_id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.task
   */
  export type Role$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    where?: TasksWhereInput
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    cursor?: TasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Role.user
   */
  export type Role$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Tasks
   */

  export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  export type TasksAvgAggregateOutputType = {
    task_id: number | null
    workflow_id: number | null
    assigned_to: number | null
    created_by: number | null
    role_id: number | null
  }

  export type TasksSumAggregateOutputType = {
    task_id: number | null
    workflow_id: number | null
    assigned_to: number | null
    created_by: number | null
    role_id: number | null
  }

  export type TasksMinAggregateOutputType = {
    task_id: number | null
    workflow_id: number | null
    state_name: string | null
    assigned_to: number | null
    created_by: number | null
    role_id: number | null
  }

  export type TasksMaxAggregateOutputType = {
    task_id: number | null
    workflow_id: number | null
    state_name: string | null
    assigned_to: number | null
    created_by: number | null
    role_id: number | null
  }

  export type TasksCountAggregateOutputType = {
    task_id: number
    workflow_id: number
    state_name: number
    assigned_to: number
    created_by: number
    role_id: number
    _all: number
  }


  export type TasksAvgAggregateInputType = {
    task_id?: true
    workflow_id?: true
    assigned_to?: true
    created_by?: true
    role_id?: true
  }

  export type TasksSumAggregateInputType = {
    task_id?: true
    workflow_id?: true
    assigned_to?: true
    created_by?: true
    role_id?: true
  }

  export type TasksMinAggregateInputType = {
    task_id?: true
    workflow_id?: true
    state_name?: true
    assigned_to?: true
    created_by?: true
    role_id?: true
  }

  export type TasksMaxAggregateInputType = {
    task_id?: true
    workflow_id?: true
    state_name?: true
    assigned_to?: true
    created_by?: true
    role_id?: true
  }

  export type TasksCountAggregateInputType = {
    task_id?: true
    workflow_id?: true
    state_name?: true
    assigned_to?: true
    created_by?: true
    role_id?: true
    _all?: true
  }

  export type TasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to aggregate.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TasksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksMaxAggregateInputType
  }

  export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks[P]>
      : GetScalarType<T[P], AggregateTasks[P]>
  }




  export type TasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksWhereInput
    orderBy?: TasksOrderByWithAggregationInput | TasksOrderByWithAggregationInput[]
    by: TasksScalarFieldEnum[] | TasksScalarFieldEnum
    having?: TasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksCountAggregateInputType | true
    _avg?: TasksAvgAggregateInputType
    _sum?: TasksSumAggregateInputType
    _min?: TasksMinAggregateInputType
    _max?: TasksMaxAggregateInputType
  }

  export type TasksGroupByOutputType = {
    task_id: number
    workflow_id: number
    state_name: string | null
    assigned_to: number
    created_by: number | null
    role_id: number
    _count: TasksCountAggregateOutputType | null
    _avg: TasksAvgAggregateOutputType | null
    _sum: TasksSumAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  type GetTasksGroupByPayload<T extends TasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksGroupByOutputType[P]>
            : GetScalarType<T[P], TasksGroupByOutputType[P]>
        }
      >
    >


  export type TasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    task_id?: boolean
    workflow_id?: boolean
    state_name?: boolean
    assigned_to?: boolean
    created_by?: boolean
    role_id?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    user?: boolean | Tasks$userArgs<ExtArgs>
    role?: boolean | Tasks$roleArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type TasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    task_id?: boolean
    workflow_id?: boolean
    state_name?: boolean
    assigned_to?: boolean
    created_by?: boolean
    role_id?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    user?: boolean | Tasks$userArgs<ExtArgs>
    role?: boolean | Tasks$roleArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type TasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    task_id?: boolean
    workflow_id?: boolean
    state_name?: boolean
    assigned_to?: boolean
    created_by?: boolean
    role_id?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    user?: boolean | Tasks$userArgs<ExtArgs>
    role?: boolean | Tasks$roleArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type TasksSelectScalar = {
    task_id?: boolean
    workflow_id?: boolean
    state_name?: boolean
    assigned_to?: boolean
    created_by?: boolean
    role_id?: boolean
  }

  export type TasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"task_id" | "workflow_id" | "state_name" | "assigned_to" | "created_by" | "role_id", ExtArgs["result"]["tasks"]>
  export type TasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    user?: boolean | Tasks$userArgs<ExtArgs>
    role?: boolean | Tasks$roleArgs<ExtArgs>
  }
  export type TasksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    user?: boolean | Tasks$userArgs<ExtArgs>
    role?: boolean | Tasks$roleArgs<ExtArgs>
  }
  export type TasksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    user?: boolean | Tasks$userArgs<ExtArgs>
    role?: boolean | Tasks$roleArgs<ExtArgs>
  }

  export type $TasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tasks"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      role: Prisma.$RolePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      task_id: number
      workflow_id: number
      state_name: string | null
      assigned_to: number
      created_by: number | null
      role_id: number
    }, ExtArgs["result"]["tasks"]>
    composites: {}
  }

  type TasksGetPayload<S extends boolean | null | undefined | TasksDefaultArgs> = $Result.GetResult<Prisma.$TasksPayload, S>

  type TasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasksCountAggregateInputType | true
    }

  export interface TasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tasks'], meta: { name: 'Tasks' } }
    /**
     * Find zero or one Tasks that matches the filter.
     * @param {TasksFindUniqueArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TasksFindUniqueArgs>(args: SelectSubset<T, TasksFindUniqueArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TasksFindUniqueOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TasksFindUniqueOrThrowArgs>(args: SelectSubset<T, TasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksFindFirstArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TasksFindFirstArgs>(args?: SelectSubset<T, TasksFindFirstArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksFindFirstOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TasksFindFirstOrThrowArgs>(args?: SelectSubset<T, TasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.tasks.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.tasks.findMany({ take: 10 })
     * 
     * // Only select the `task_id`
     * const tasksWithTask_idOnly = await prisma.tasks.findMany({ select: { task_id: true } })
     * 
     */
    findMany<T extends TasksFindManyArgs>(args?: SelectSubset<T, TasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tasks.
     * @param {TasksCreateArgs} args - Arguments to create a Tasks.
     * @example
     * // Create one Tasks
     * const Tasks = await prisma.tasks.create({
     *   data: {
     *     // ... data to create a Tasks
     *   }
     * })
     * 
     */
    create<T extends TasksCreateArgs>(args: SelectSubset<T, TasksCreateArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TasksCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TasksCreateManyArgs>(args?: SelectSubset<T, TasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TasksCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `task_id`
     * const tasksWithTask_idOnly = await prisma.tasks.createManyAndReturn({
     *   select: { task_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TasksCreateManyAndReturnArgs>(args?: SelectSubset<T, TasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tasks.
     * @param {TasksDeleteArgs} args - Arguments to delete one Tasks.
     * @example
     * // Delete one Tasks
     * const Tasks = await prisma.tasks.delete({
     *   where: {
     *     // ... filter to delete one Tasks
     *   }
     * })
     * 
     */
    delete<T extends TasksDeleteArgs>(args: SelectSubset<T, TasksDeleteArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tasks.
     * @param {TasksUpdateArgs} args - Arguments to update one Tasks.
     * @example
     * // Update one Tasks
     * const tasks = await prisma.tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TasksUpdateArgs>(args: SelectSubset<T, TasksUpdateArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TasksDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TasksDeleteManyArgs>(args?: SelectSubset<T, TasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TasksUpdateManyArgs>(args: SelectSubset<T, TasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TasksUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `task_id`
     * const tasksWithTask_idOnly = await prisma.tasks.updateManyAndReturn({
     *   select: { task_id: true },
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
    updateManyAndReturn<T extends TasksUpdateManyAndReturnArgs>(args: SelectSubset<T, TasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tasks.
     * @param {TasksUpsertArgs} args - Arguments to update or create a Tasks.
     * @example
     * // Update or create a Tasks
     * const tasks = await prisma.tasks.upsert({
     *   create: {
     *     // ... data to create a Tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks we want to update
     *   }
     * })
     */
    upsert<T extends TasksUpsertArgs>(args: SelectSubset<T, TasksUpsertArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.tasks.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TasksCountArgs>(
      args?: Subset<T, TasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TasksAggregateArgs>(args: Subset<T, TasksAggregateArgs>): Prisma.PrismaPromise<GetTasksAggregateType<T>>

    /**
     * Group by Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksGroupByArgs} args - Group by arguments.
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
      T extends TasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TasksGroupByArgs['orderBy'] }
        : { orderBy?: TasksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tasks model
   */
  readonly fields: TasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Tasks$userArgs<ExtArgs> = {}>(args?: Subset<T, Tasks$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    role<T extends Tasks$roleArgs<ExtArgs> = {}>(args?: Subset<T, Tasks$roleArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tasks model
   */
  interface TasksFieldRefs {
    readonly task_id: FieldRef<"Tasks", 'Int'>
    readonly workflow_id: FieldRef<"Tasks", 'Int'>
    readonly state_name: FieldRef<"Tasks", 'String'>
    readonly assigned_to: FieldRef<"Tasks", 'Int'>
    readonly created_by: FieldRef<"Tasks", 'Int'>
    readonly role_id: FieldRef<"Tasks", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tasks findUnique
   */
  export type TasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks findUniqueOrThrow
   */
  export type TasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks findFirst
   */
  export type TasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Tasks findFirstOrThrow
   */
  export type TasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Tasks findMany
   */
  export type TasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Tasks create
   */
  export type TasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * The data needed to create a Tasks.
     */
    data: XOR<TasksCreateInput, TasksUncheckedCreateInput>
  }

  /**
   * Tasks createMany
   */
  export type TasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TasksCreateManyInput | TasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tasks createManyAndReturn
   */
  export type TasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TasksCreateManyInput | TasksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tasks update
   */
  export type TasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * The data needed to update a Tasks.
     */
    data: XOR<TasksUpdateInput, TasksUncheckedUpdateInput>
    /**
     * Choose, which Tasks to update.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks updateMany
   */
  export type TasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TasksWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Tasks updateManyAndReturn
   */
  export type TasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TasksWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tasks upsert
   */
  export type TasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * The filter to search for the Tasks to update in case it exists.
     */
    where: TasksWhereUniqueInput
    /**
     * In case the Tasks found by the `where` argument doesn't exist, create a new Tasks with this data.
     */
    create: XOR<TasksCreateInput, TasksUncheckedCreateInput>
    /**
     * In case the Tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TasksUpdateInput, TasksUncheckedUpdateInput>
  }

  /**
   * Tasks delete
   */
  export type TasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter which Tasks to delete.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks deleteMany
   */
  export type TasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TasksWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Tasks.user
   */
  export type Tasks$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Tasks.role
   */
  export type Tasks$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
  }

  /**
   * Tasks without action
   */
  export type TasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
  }


  /**
   * Model Workflow
   */

  export type AggregateWorkflow = {
    _count: WorkflowCountAggregateOutputType | null
    _avg: WorkflowAvgAggregateOutputType | null
    _sum: WorkflowSumAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  export type WorkflowAvgAggregateOutputType = {
    id: number | null
  }

  export type WorkflowSumAggregateOutputType = {
    id: number | null
  }

  export type WorkflowMinAggregateOutputType = {
    id: number | null
    workflow_name: string | null
  }

  export type WorkflowMaxAggregateOutputType = {
    id: number | null
    workflow_name: string | null
  }

  export type WorkflowCountAggregateOutputType = {
    id: number
    workflow_name: number
    _all: number
  }


  export type WorkflowAvgAggregateInputType = {
    id?: true
  }

  export type WorkflowSumAggregateInputType = {
    id?: true
  }

  export type WorkflowMinAggregateInputType = {
    id?: true
    workflow_name?: true
  }

  export type WorkflowMaxAggregateInputType = {
    id?: true
    workflow_name?: true
  }

  export type WorkflowCountAggregateInputType = {
    id?: true
    workflow_name?: true
    _all?: true
  }

  export type WorkflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflow to aggregate.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workflows
    **/
    _count?: true | WorkflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowMaxAggregateInputType
  }

  export type GetWorkflowAggregateType<T extends WorkflowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflow[P]>
      : GetScalarType<T[P], AggregateWorkflow[P]>
  }




  export type WorkflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithAggregationInput | WorkflowOrderByWithAggregationInput[]
    by: WorkflowScalarFieldEnum[] | WorkflowScalarFieldEnum
    having?: WorkflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowCountAggregateInputType | true
    _avg?: WorkflowAvgAggregateInputType
    _sum?: WorkflowSumAggregateInputType
    _min?: WorkflowMinAggregateInputType
    _max?: WorkflowMaxAggregateInputType
  }

  export type WorkflowGroupByOutputType = {
    id: number
    workflow_name: string | null
    _count: WorkflowCountAggregateOutputType | null
    _avg: WorkflowAvgAggregateOutputType | null
    _sum: WorkflowSumAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  type GetWorkflowGroupByPayload<T extends WorkflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflow_name?: boolean
    task?: boolean | Workflow$taskArgs<ExtArgs>
    rules?: boolean | Workflow$rulesArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflow_name?: boolean
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflow_name?: boolean
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectScalar = {
    id?: boolean
    workflow_name?: boolean
  }

  export type WorkflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflow_name", ExtArgs["result"]["workflow"]>
  export type WorkflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | Workflow$taskArgs<ExtArgs>
    rules?: boolean | Workflow$rulesArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorkflowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workflow"
    objects: {
      task: Prisma.$TasksPayload<ExtArgs>[]
      rules: Prisma.$Workflow_RulesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      workflow_name: string | null
    }, ExtArgs["result"]["workflow"]>
    composites: {}
  }

  type WorkflowGetPayload<S extends boolean | null | undefined | WorkflowDefaultArgs> = $Result.GetResult<Prisma.$WorkflowPayload, S>

  type WorkflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowCountAggregateInputType | true
    }

  export interface WorkflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workflow'], meta: { name: 'Workflow' } }
    /**
     * Find zero or one Workflow that matches the filter.
     * @param {WorkflowFindUniqueArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowFindUniqueArgs>(args: SelectSubset<T, WorkflowFindUniqueArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workflow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowFindUniqueOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowFindFirstArgs>(args?: SelectSubset<T, WorkflowFindFirstArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workflows
     * const workflows = await prisma.workflow.findMany()
     * 
     * // Get first 10 Workflows
     * const workflows = await prisma.workflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowWithIdOnly = await prisma.workflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowFindManyArgs>(args?: SelectSubset<T, WorkflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workflow.
     * @param {WorkflowCreateArgs} args - Arguments to create a Workflow.
     * @example
     * // Create one Workflow
     * const Workflow = await prisma.workflow.create({
     *   data: {
     *     // ... data to create a Workflow
     *   }
     * })
     * 
     */
    create<T extends WorkflowCreateArgs>(args: SelectSubset<T, WorkflowCreateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workflows.
     * @param {WorkflowCreateManyArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowCreateManyArgs>(args?: SelectSubset<T, WorkflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workflows and returns the data saved in the database.
     * @param {WorkflowCreateManyAndReturnArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workflow.
     * @param {WorkflowDeleteArgs} args - Arguments to delete one Workflow.
     * @example
     * // Delete one Workflow
     * const Workflow = await prisma.workflow.delete({
     *   where: {
     *     // ... filter to delete one Workflow
     *   }
     * })
     * 
     */
    delete<T extends WorkflowDeleteArgs>(args: SelectSubset<T, WorkflowDeleteArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workflow.
     * @param {WorkflowUpdateArgs} args - Arguments to update one Workflow.
     * @example
     * // Update one Workflow
     * const workflow = await prisma.workflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowUpdateArgs>(args: SelectSubset<T, WorkflowUpdateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workflows.
     * @param {WorkflowDeleteManyArgs} args - Arguments to filter Workflows to delete.
     * @example
     * // Delete a few Workflows
     * const { count } = await prisma.workflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowDeleteManyArgs>(args?: SelectSubset<T, WorkflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowUpdateManyArgs>(args: SelectSubset<T, WorkflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows and returns the data updated in the database.
     * @param {WorkflowUpdateManyAndReturnArgs} args - Arguments to update many Workflows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkflowUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workflow.
     * @param {WorkflowUpsertArgs} args - Arguments to update or create a Workflow.
     * @example
     * // Update or create a Workflow
     * const workflow = await prisma.workflow.upsert({
     *   create: {
     *     // ... data to create a Workflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workflow we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowUpsertArgs>(args: SelectSubset<T, WorkflowUpsertArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowCountArgs} args - Arguments to filter Workflows to count.
     * @example
     * // Count the number of Workflows
     * const count = await prisma.workflow.count({
     *   where: {
     *     // ... the filter for the Workflows we want to count
     *   }
     * })
    **/
    count<T extends WorkflowCountArgs>(
      args?: Subset<T, WorkflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowAggregateArgs>(args: Subset<T, WorkflowAggregateArgs>): Prisma.PrismaPromise<GetWorkflowAggregateType<T>>

    /**
     * Group by Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowGroupByArgs} args - Group by arguments.
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
      T extends WorkflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workflow model
   */
  readonly fields: WorkflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends Workflow$taskArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$taskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rules<T extends Workflow$rulesArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Workflow_RulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workflow model
   */
  interface WorkflowFieldRefs {
    readonly id: FieldRef<"Workflow", 'Int'>
    readonly workflow_name: FieldRef<"Workflow", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Workflow findUnique
   */
  export type WorkflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findUniqueOrThrow
   */
  export type WorkflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findFirst
   */
  export type WorkflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findFirstOrThrow
   */
  export type WorkflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findMany
   */
  export type WorkflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflows to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow create
   */
  export type WorkflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to create a Workflow.
     */
    data?: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
  }

  /**
   * Workflow createMany
   */
  export type WorkflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workflow createManyAndReturn
   */
  export type WorkflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workflow update
   */
  export type WorkflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to update a Workflow.
     */
    data: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
    /**
     * Choose, which Workflow to update.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow updateMany
   */
  export type WorkflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
  }

  /**
   * Workflow updateManyAndReturn
   */
  export type WorkflowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
  }

  /**
   * Workflow upsert
   */
  export type WorkflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The filter to search for the Workflow to update in case it exists.
     */
    where: WorkflowWhereUniqueInput
    /**
     * In case the Workflow found by the `where` argument doesn't exist, create a new Workflow with this data.
     */
    create: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
    /**
     * In case the Workflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
  }

  /**
   * Workflow delete
   */
  export type WorkflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter which Workflow to delete.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow deleteMany
   */
  export type WorkflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflows to delete
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to delete.
     */
    limit?: number
  }

  /**
   * Workflow.task
   */
  export type Workflow$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    where?: TasksWhereInput
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    cursor?: TasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Workflow.rules
   */
  export type Workflow$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow_Rules
     */
    select?: Workflow_RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow_Rules
     */
    omit?: Workflow_RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Workflow_RulesInclude<ExtArgs> | null
    where?: Workflow_RulesWhereInput
    orderBy?: Workflow_RulesOrderByWithRelationInput | Workflow_RulesOrderByWithRelationInput[]
    cursor?: Workflow_RulesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Workflow_RulesScalarFieldEnum | Workflow_RulesScalarFieldEnum[]
  }

  /**
   * Workflow without action
   */
  export type WorkflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
  }


  /**
   * Model Workflow_Rules
   */

  export type AggregateWorkflow_Rules = {
    _count: Workflow_RulesCountAggregateOutputType | null
    _avg: Workflow_RulesAvgAggregateOutputType | null
    _sum: Workflow_RulesSumAggregateOutputType | null
    _min: Workflow_RulesMinAggregateOutputType | null
    _max: Workflow_RulesMaxAggregateOutputType | null
  }

  export type Workflow_RulesAvgAggregateOutputType = {
    id: number | null
    workflow_id: number | null
    role_id: number | null
  }

  export type Workflow_RulesSumAggregateOutputType = {
    id: number | null
    workflow_id: number | null
    role_id: number | null
  }

  export type Workflow_RulesMinAggregateOutputType = {
    id: number | null
    workflow_id: number | null
    state_1: string | null
    state_2: string | null
    role_id: number | null
  }

  export type Workflow_RulesMaxAggregateOutputType = {
    id: number | null
    workflow_id: number | null
    state_1: string | null
    state_2: string | null
    role_id: number | null
  }

  export type Workflow_RulesCountAggregateOutputType = {
    id: number
    workflow_id: number
    state_1: number
    state_2: number
    role_id: number
    _all: number
  }


  export type Workflow_RulesAvgAggregateInputType = {
    id?: true
    workflow_id?: true
    role_id?: true
  }

  export type Workflow_RulesSumAggregateInputType = {
    id?: true
    workflow_id?: true
    role_id?: true
  }

  export type Workflow_RulesMinAggregateInputType = {
    id?: true
    workflow_id?: true
    state_1?: true
    state_2?: true
    role_id?: true
  }

  export type Workflow_RulesMaxAggregateInputType = {
    id?: true
    workflow_id?: true
    state_1?: true
    state_2?: true
    role_id?: true
  }

  export type Workflow_RulesCountAggregateInputType = {
    id?: true
    workflow_id?: true
    state_1?: true
    state_2?: true
    role_id?: true
    _all?: true
  }

  export type Workflow_RulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflow_Rules to aggregate.
     */
    where?: Workflow_RulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflow_Rules to fetch.
     */
    orderBy?: Workflow_RulesOrderByWithRelationInput | Workflow_RulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Workflow_RulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflow_Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflow_Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workflow_Rules
    **/
    _count?: true | Workflow_RulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Workflow_RulesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Workflow_RulesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Workflow_RulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Workflow_RulesMaxAggregateInputType
  }

  export type GetWorkflow_RulesAggregateType<T extends Workflow_RulesAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflow_Rules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflow_Rules[P]>
      : GetScalarType<T[P], AggregateWorkflow_Rules[P]>
  }




  export type Workflow_RulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Workflow_RulesWhereInput
    orderBy?: Workflow_RulesOrderByWithAggregationInput | Workflow_RulesOrderByWithAggregationInput[]
    by: Workflow_RulesScalarFieldEnum[] | Workflow_RulesScalarFieldEnum
    having?: Workflow_RulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Workflow_RulesCountAggregateInputType | true
    _avg?: Workflow_RulesAvgAggregateInputType
    _sum?: Workflow_RulesSumAggregateInputType
    _min?: Workflow_RulesMinAggregateInputType
    _max?: Workflow_RulesMaxAggregateInputType
  }

  export type Workflow_RulesGroupByOutputType = {
    id: number
    workflow_id: number
    state_1: string | null
    state_2: string | null
    role_id: number
    _count: Workflow_RulesCountAggregateOutputType | null
    _avg: Workflow_RulesAvgAggregateOutputType | null
    _sum: Workflow_RulesSumAggregateOutputType | null
    _min: Workflow_RulesMinAggregateOutputType | null
    _max: Workflow_RulesMaxAggregateOutputType | null
  }

  type GetWorkflow_RulesGroupByPayload<T extends Workflow_RulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Workflow_RulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Workflow_RulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Workflow_RulesGroupByOutputType[P]>
            : GetScalarType<T[P], Workflow_RulesGroupByOutputType[P]>
        }
      >
    >


  export type Workflow_RulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflow_id?: boolean
    state_1?: boolean
    state_2?: boolean
    role_id?: boolean
    workflow?: boolean | Workflow_Rules$workflowArgs<ExtArgs>
  }, ExtArgs["result"]["workflow_Rules"]>

  export type Workflow_RulesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflow_id?: boolean
    state_1?: boolean
    state_2?: boolean
    role_id?: boolean
    workflow?: boolean | Workflow_Rules$workflowArgs<ExtArgs>
  }, ExtArgs["result"]["workflow_Rules"]>

  export type Workflow_RulesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflow_id?: boolean
    state_1?: boolean
    state_2?: boolean
    role_id?: boolean
    workflow?: boolean | Workflow_Rules$workflowArgs<ExtArgs>
  }, ExtArgs["result"]["workflow_Rules"]>

  export type Workflow_RulesSelectScalar = {
    id?: boolean
    workflow_id?: boolean
    state_1?: boolean
    state_2?: boolean
    role_id?: boolean
  }

  export type Workflow_RulesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflow_id" | "state_1" | "state_2" | "role_id", ExtArgs["result"]["workflow_Rules"]>
  export type Workflow_RulesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | Workflow_Rules$workflowArgs<ExtArgs>
  }
  export type Workflow_RulesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | Workflow_Rules$workflowArgs<ExtArgs>
  }
  export type Workflow_RulesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | Workflow_Rules$workflowArgs<ExtArgs>
  }

  export type $Workflow_RulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workflow_Rules"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      workflow_id: number
      state_1: string | null
      state_2: string | null
      role_id: number
    }, ExtArgs["result"]["workflow_Rules"]>
    composites: {}
  }

  type Workflow_RulesGetPayload<S extends boolean | null | undefined | Workflow_RulesDefaultArgs> = $Result.GetResult<Prisma.$Workflow_RulesPayload, S>

  type Workflow_RulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Workflow_RulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Workflow_RulesCountAggregateInputType | true
    }

  export interface Workflow_RulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workflow_Rules'], meta: { name: 'Workflow_Rules' } }
    /**
     * Find zero or one Workflow_Rules that matches the filter.
     * @param {Workflow_RulesFindUniqueArgs} args - Arguments to find a Workflow_Rules
     * @example
     * // Get one Workflow_Rules
     * const workflow_Rules = await prisma.workflow_Rules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Workflow_RulesFindUniqueArgs>(args: SelectSubset<T, Workflow_RulesFindUniqueArgs<ExtArgs>>): Prisma__Workflow_RulesClient<$Result.GetResult<Prisma.$Workflow_RulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workflow_Rules that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Workflow_RulesFindUniqueOrThrowArgs} args - Arguments to find a Workflow_Rules
     * @example
     * // Get one Workflow_Rules
     * const workflow_Rules = await prisma.workflow_Rules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Workflow_RulesFindUniqueOrThrowArgs>(args: SelectSubset<T, Workflow_RulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Workflow_RulesClient<$Result.GetResult<Prisma.$Workflow_RulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow_Rules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Workflow_RulesFindFirstArgs} args - Arguments to find a Workflow_Rules
     * @example
     * // Get one Workflow_Rules
     * const workflow_Rules = await prisma.workflow_Rules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Workflow_RulesFindFirstArgs>(args?: SelectSubset<T, Workflow_RulesFindFirstArgs<ExtArgs>>): Prisma__Workflow_RulesClient<$Result.GetResult<Prisma.$Workflow_RulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow_Rules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Workflow_RulesFindFirstOrThrowArgs} args - Arguments to find a Workflow_Rules
     * @example
     * // Get one Workflow_Rules
     * const workflow_Rules = await prisma.workflow_Rules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Workflow_RulesFindFirstOrThrowArgs>(args?: SelectSubset<T, Workflow_RulesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Workflow_RulesClient<$Result.GetResult<Prisma.$Workflow_RulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workflow_Rules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Workflow_RulesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workflow_Rules
     * const workflow_Rules = await prisma.workflow_Rules.findMany()
     * 
     * // Get first 10 Workflow_Rules
     * const workflow_Rules = await prisma.workflow_Rules.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflow_RulesWithIdOnly = await prisma.workflow_Rules.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Workflow_RulesFindManyArgs>(args?: SelectSubset<T, Workflow_RulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Workflow_RulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workflow_Rules.
     * @param {Workflow_RulesCreateArgs} args - Arguments to create a Workflow_Rules.
     * @example
     * // Create one Workflow_Rules
     * const Workflow_Rules = await prisma.workflow_Rules.create({
     *   data: {
     *     // ... data to create a Workflow_Rules
     *   }
     * })
     * 
     */
    create<T extends Workflow_RulesCreateArgs>(args: SelectSubset<T, Workflow_RulesCreateArgs<ExtArgs>>): Prisma__Workflow_RulesClient<$Result.GetResult<Prisma.$Workflow_RulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workflow_Rules.
     * @param {Workflow_RulesCreateManyArgs} args - Arguments to create many Workflow_Rules.
     * @example
     * // Create many Workflow_Rules
     * const workflow_Rules = await prisma.workflow_Rules.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Workflow_RulesCreateManyArgs>(args?: SelectSubset<T, Workflow_RulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workflow_Rules and returns the data saved in the database.
     * @param {Workflow_RulesCreateManyAndReturnArgs} args - Arguments to create many Workflow_Rules.
     * @example
     * // Create many Workflow_Rules
     * const workflow_Rules = await prisma.workflow_Rules.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workflow_Rules and only return the `id`
     * const workflow_RulesWithIdOnly = await prisma.workflow_Rules.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Workflow_RulesCreateManyAndReturnArgs>(args?: SelectSubset<T, Workflow_RulesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Workflow_RulesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workflow_Rules.
     * @param {Workflow_RulesDeleteArgs} args - Arguments to delete one Workflow_Rules.
     * @example
     * // Delete one Workflow_Rules
     * const Workflow_Rules = await prisma.workflow_Rules.delete({
     *   where: {
     *     // ... filter to delete one Workflow_Rules
     *   }
     * })
     * 
     */
    delete<T extends Workflow_RulesDeleteArgs>(args: SelectSubset<T, Workflow_RulesDeleteArgs<ExtArgs>>): Prisma__Workflow_RulesClient<$Result.GetResult<Prisma.$Workflow_RulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workflow_Rules.
     * @param {Workflow_RulesUpdateArgs} args - Arguments to update one Workflow_Rules.
     * @example
     * // Update one Workflow_Rules
     * const workflow_Rules = await prisma.workflow_Rules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Workflow_RulesUpdateArgs>(args: SelectSubset<T, Workflow_RulesUpdateArgs<ExtArgs>>): Prisma__Workflow_RulesClient<$Result.GetResult<Prisma.$Workflow_RulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workflow_Rules.
     * @param {Workflow_RulesDeleteManyArgs} args - Arguments to filter Workflow_Rules to delete.
     * @example
     * // Delete a few Workflow_Rules
     * const { count } = await prisma.workflow_Rules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Workflow_RulesDeleteManyArgs>(args?: SelectSubset<T, Workflow_RulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflow_Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Workflow_RulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workflow_Rules
     * const workflow_Rules = await prisma.workflow_Rules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Workflow_RulesUpdateManyArgs>(args: SelectSubset<T, Workflow_RulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflow_Rules and returns the data updated in the database.
     * @param {Workflow_RulesUpdateManyAndReturnArgs} args - Arguments to update many Workflow_Rules.
     * @example
     * // Update many Workflow_Rules
     * const workflow_Rules = await prisma.workflow_Rules.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workflow_Rules and only return the `id`
     * const workflow_RulesWithIdOnly = await prisma.workflow_Rules.updateManyAndReturn({
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
    updateManyAndReturn<T extends Workflow_RulesUpdateManyAndReturnArgs>(args: SelectSubset<T, Workflow_RulesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Workflow_RulesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workflow_Rules.
     * @param {Workflow_RulesUpsertArgs} args - Arguments to update or create a Workflow_Rules.
     * @example
     * // Update or create a Workflow_Rules
     * const workflow_Rules = await prisma.workflow_Rules.upsert({
     *   create: {
     *     // ... data to create a Workflow_Rules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workflow_Rules we want to update
     *   }
     * })
     */
    upsert<T extends Workflow_RulesUpsertArgs>(args: SelectSubset<T, Workflow_RulesUpsertArgs<ExtArgs>>): Prisma__Workflow_RulesClient<$Result.GetResult<Prisma.$Workflow_RulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workflow_Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Workflow_RulesCountArgs} args - Arguments to filter Workflow_Rules to count.
     * @example
     * // Count the number of Workflow_Rules
     * const count = await prisma.workflow_Rules.count({
     *   where: {
     *     // ... the filter for the Workflow_Rules we want to count
     *   }
     * })
    **/
    count<T extends Workflow_RulesCountArgs>(
      args?: Subset<T, Workflow_RulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Workflow_RulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workflow_Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Workflow_RulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Workflow_RulesAggregateArgs>(args: Subset<T, Workflow_RulesAggregateArgs>): Prisma.PrismaPromise<GetWorkflow_RulesAggregateType<T>>

    /**
     * Group by Workflow_Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Workflow_RulesGroupByArgs} args - Group by arguments.
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
      T extends Workflow_RulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Workflow_RulesGroupByArgs['orderBy'] }
        : { orderBy?: Workflow_RulesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Workflow_RulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflow_RulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workflow_Rules model
   */
  readonly fields: Workflow_RulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workflow_Rules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Workflow_RulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends Workflow_Rules$workflowArgs<ExtArgs> = {}>(args?: Subset<T, Workflow_Rules$workflowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Workflow_Rules model
   */
  interface Workflow_RulesFieldRefs {
    readonly id: FieldRef<"Workflow_Rules", 'Int'>
    readonly workflow_id: FieldRef<"Workflow_Rules", 'Int'>
    readonly state_1: FieldRef<"Workflow_Rules", 'String'>
    readonly state_2: FieldRef<"Workflow_Rules", 'String'>
    readonly role_id: FieldRef<"Workflow_Rules", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Workflow_Rules findUnique
   */
  export type Workflow_RulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow_Rules
     */
    select?: Workflow_RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow_Rules
     */
    omit?: Workflow_RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Workflow_RulesInclude<ExtArgs> | null
    /**
     * Filter, which Workflow_Rules to fetch.
     */
    where: Workflow_RulesWhereUniqueInput
  }

  /**
   * Workflow_Rules findUniqueOrThrow
   */
  export type Workflow_RulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow_Rules
     */
    select?: Workflow_RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow_Rules
     */
    omit?: Workflow_RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Workflow_RulesInclude<ExtArgs> | null
    /**
     * Filter, which Workflow_Rules to fetch.
     */
    where: Workflow_RulesWhereUniqueInput
  }

  /**
   * Workflow_Rules findFirst
   */
  export type Workflow_RulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow_Rules
     */
    select?: Workflow_RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow_Rules
     */
    omit?: Workflow_RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Workflow_RulesInclude<ExtArgs> | null
    /**
     * Filter, which Workflow_Rules to fetch.
     */
    where?: Workflow_RulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflow_Rules to fetch.
     */
    orderBy?: Workflow_RulesOrderByWithRelationInput | Workflow_RulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflow_Rules.
     */
    cursor?: Workflow_RulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflow_Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflow_Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflow_Rules.
     */
    distinct?: Workflow_RulesScalarFieldEnum | Workflow_RulesScalarFieldEnum[]
  }

  /**
   * Workflow_Rules findFirstOrThrow
   */
  export type Workflow_RulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow_Rules
     */
    select?: Workflow_RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow_Rules
     */
    omit?: Workflow_RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Workflow_RulesInclude<ExtArgs> | null
    /**
     * Filter, which Workflow_Rules to fetch.
     */
    where?: Workflow_RulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflow_Rules to fetch.
     */
    orderBy?: Workflow_RulesOrderByWithRelationInput | Workflow_RulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflow_Rules.
     */
    cursor?: Workflow_RulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflow_Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflow_Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflow_Rules.
     */
    distinct?: Workflow_RulesScalarFieldEnum | Workflow_RulesScalarFieldEnum[]
  }

  /**
   * Workflow_Rules findMany
   */
  export type Workflow_RulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow_Rules
     */
    select?: Workflow_RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow_Rules
     */
    omit?: Workflow_RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Workflow_RulesInclude<ExtArgs> | null
    /**
     * Filter, which Workflow_Rules to fetch.
     */
    where?: Workflow_RulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflow_Rules to fetch.
     */
    orderBy?: Workflow_RulesOrderByWithRelationInput | Workflow_RulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workflow_Rules.
     */
    cursor?: Workflow_RulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflow_Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflow_Rules.
     */
    skip?: number
    distinct?: Workflow_RulesScalarFieldEnum | Workflow_RulesScalarFieldEnum[]
  }

  /**
   * Workflow_Rules create
   */
  export type Workflow_RulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow_Rules
     */
    select?: Workflow_RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow_Rules
     */
    omit?: Workflow_RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Workflow_RulesInclude<ExtArgs> | null
    /**
     * The data needed to create a Workflow_Rules.
     */
    data: XOR<Workflow_RulesCreateInput, Workflow_RulesUncheckedCreateInput>
  }

  /**
   * Workflow_Rules createMany
   */
  export type Workflow_RulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workflow_Rules.
     */
    data: Workflow_RulesCreateManyInput | Workflow_RulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workflow_Rules createManyAndReturn
   */
  export type Workflow_RulesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow_Rules
     */
    select?: Workflow_RulesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow_Rules
     */
    omit?: Workflow_RulesOmit<ExtArgs> | null
    /**
     * The data used to create many Workflow_Rules.
     */
    data: Workflow_RulesCreateManyInput | Workflow_RulesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Workflow_RulesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflow_Rules update
   */
  export type Workflow_RulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow_Rules
     */
    select?: Workflow_RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow_Rules
     */
    omit?: Workflow_RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Workflow_RulesInclude<ExtArgs> | null
    /**
     * The data needed to update a Workflow_Rules.
     */
    data: XOR<Workflow_RulesUpdateInput, Workflow_RulesUncheckedUpdateInput>
    /**
     * Choose, which Workflow_Rules to update.
     */
    where: Workflow_RulesWhereUniqueInput
  }

  /**
   * Workflow_Rules updateMany
   */
  export type Workflow_RulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workflow_Rules.
     */
    data: XOR<Workflow_RulesUpdateManyMutationInput, Workflow_RulesUncheckedUpdateManyInput>
    /**
     * Filter which Workflow_Rules to update
     */
    where?: Workflow_RulesWhereInput
    /**
     * Limit how many Workflow_Rules to update.
     */
    limit?: number
  }

  /**
   * Workflow_Rules updateManyAndReturn
   */
  export type Workflow_RulesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow_Rules
     */
    select?: Workflow_RulesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow_Rules
     */
    omit?: Workflow_RulesOmit<ExtArgs> | null
    /**
     * The data used to update Workflow_Rules.
     */
    data: XOR<Workflow_RulesUpdateManyMutationInput, Workflow_RulesUncheckedUpdateManyInput>
    /**
     * Filter which Workflow_Rules to update
     */
    where?: Workflow_RulesWhereInput
    /**
     * Limit how many Workflow_Rules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Workflow_RulesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflow_Rules upsert
   */
  export type Workflow_RulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow_Rules
     */
    select?: Workflow_RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow_Rules
     */
    omit?: Workflow_RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Workflow_RulesInclude<ExtArgs> | null
    /**
     * The filter to search for the Workflow_Rules to update in case it exists.
     */
    where: Workflow_RulesWhereUniqueInput
    /**
     * In case the Workflow_Rules found by the `where` argument doesn't exist, create a new Workflow_Rules with this data.
     */
    create: XOR<Workflow_RulesCreateInput, Workflow_RulesUncheckedCreateInput>
    /**
     * In case the Workflow_Rules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Workflow_RulesUpdateInput, Workflow_RulesUncheckedUpdateInput>
  }

  /**
   * Workflow_Rules delete
   */
  export type Workflow_RulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow_Rules
     */
    select?: Workflow_RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow_Rules
     */
    omit?: Workflow_RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Workflow_RulesInclude<ExtArgs> | null
    /**
     * Filter which Workflow_Rules to delete.
     */
    where: Workflow_RulesWhereUniqueInput
  }

  /**
   * Workflow_Rules deleteMany
   */
  export type Workflow_RulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflow_Rules to delete
     */
    where?: Workflow_RulesWhereInput
    /**
     * Limit how many Workflow_Rules to delete.
     */
    limit?: number
  }

  /**
   * Workflow_Rules.workflow
   */
  export type Workflow_Rules$workflowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    where?: WorkflowWhereInput
  }

  /**
   * Workflow_Rules without action
   */
  export type Workflow_RulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow_Rules
     */
    select?: Workflow_RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow_Rules
     */
    omit?: Workflow_RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Workflow_RulesInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    empId: 'empId',
    role_id: 'role_id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    role_id: 'role_id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const TasksScalarFieldEnum: {
    task_id: 'task_id',
    workflow_id: 'workflow_id',
    state_name: 'state_name',
    assigned_to: 'assigned_to',
    created_by: 'created_by',
    role_id: 'role_id'
  };

  export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum]


  export const WorkflowScalarFieldEnum: {
    id: 'id',
    workflow_name: 'workflow_name'
  };

  export type WorkflowScalarFieldEnum = (typeof WorkflowScalarFieldEnum)[keyof typeof WorkflowScalarFieldEnum]


  export const Workflow_RulesScalarFieldEnum: {
    id: 'id',
    workflow_id: 'workflow_id',
    state_1: 'state_1',
    state_2: 'state_2',
    role_id: 'role_id'
  };

  export type Workflow_RulesScalarFieldEnum = (typeof Workflow_RulesScalarFieldEnum)[keyof typeof Workflow_RulesScalarFieldEnum]


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstname?: StringFilter<"User"> | string
    lastname?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    empId?: IntFilter<"User"> | number
    role_id?: IntNullableFilter<"User"> | number | null
    role?: XOR<RoleNullableScalarRelationFilter, RoleWhereInput> | null
    task?: TasksListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrder
    empId?: SortOrder
    role_id?: SortOrderInput | SortOrder
    role?: RoleOrderByWithRelationInput
    task?: TasksOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    empId?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    lastname?: StringNullableFilter<"User"> | string | null
    role_id?: IntNullableFilter<"User"> | number | null
    role?: XOR<RoleNullableScalarRelationFilter, RoleWhereInput> | null
    task?: TasksListRelationFilter
  }, "id" | "email" | "empId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrder
    empId?: SortOrder
    role_id?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    empId?: IntWithAggregatesFilter<"User"> | number
    role_id?: IntNullableWithAggregatesFilter<"User"> | number | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    role_id?: IntFilter<"Role"> | number
    name?: StringNullableFilter<"Role"> | string | null
    task?: TasksListRelationFilter
    user?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    role_id?: SortOrder
    name?: SortOrderInput | SortOrder
    task?: TasksOrderByRelationAggregateInput
    user?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    role_id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    task?: TasksListRelationFilter
    user?: UserListRelationFilter
  }, "role_id" | "name">

  export type RoleOrderByWithAggregationInput = {
    role_id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    role_id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringNullableWithAggregatesFilter<"Role"> | string | null
  }

  export type TasksWhereInput = {
    AND?: TasksWhereInput | TasksWhereInput[]
    OR?: TasksWhereInput[]
    NOT?: TasksWhereInput | TasksWhereInput[]
    task_id?: IntFilter<"Tasks"> | number
    workflow_id?: IntFilter<"Tasks"> | number
    state_name?: StringNullableFilter<"Tasks"> | string | null
    assigned_to?: IntFilter<"Tasks"> | number
    created_by?: IntNullableFilter<"Tasks"> | number | null
    role_id?: IntFilter<"Tasks"> | number
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    role?: XOR<RoleNullableScalarRelationFilter, RoleWhereInput> | null
  }

  export type TasksOrderByWithRelationInput = {
    task_id?: SortOrder
    workflow_id?: SortOrder
    state_name?: SortOrderInput | SortOrder
    assigned_to?: SortOrder
    created_by?: SortOrderInput | SortOrder
    role_id?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type TasksWhereUniqueInput = Prisma.AtLeast<{
    task_id?: number
    AND?: TasksWhereInput | TasksWhereInput[]
    OR?: TasksWhereInput[]
    NOT?: TasksWhereInput | TasksWhereInput[]
    workflow_id?: IntFilter<"Tasks"> | number
    state_name?: StringNullableFilter<"Tasks"> | string | null
    assigned_to?: IntFilter<"Tasks"> | number
    created_by?: IntNullableFilter<"Tasks"> | number | null
    role_id?: IntFilter<"Tasks"> | number
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    role?: XOR<RoleNullableScalarRelationFilter, RoleWhereInput> | null
  }, "task_id">

  export type TasksOrderByWithAggregationInput = {
    task_id?: SortOrder
    workflow_id?: SortOrder
    state_name?: SortOrderInput | SortOrder
    assigned_to?: SortOrder
    created_by?: SortOrderInput | SortOrder
    role_id?: SortOrder
    _count?: TasksCountOrderByAggregateInput
    _avg?: TasksAvgOrderByAggregateInput
    _max?: TasksMaxOrderByAggregateInput
    _min?: TasksMinOrderByAggregateInput
    _sum?: TasksSumOrderByAggregateInput
  }

  export type TasksScalarWhereWithAggregatesInput = {
    AND?: TasksScalarWhereWithAggregatesInput | TasksScalarWhereWithAggregatesInput[]
    OR?: TasksScalarWhereWithAggregatesInput[]
    NOT?: TasksScalarWhereWithAggregatesInput | TasksScalarWhereWithAggregatesInput[]
    task_id?: IntWithAggregatesFilter<"Tasks"> | number
    workflow_id?: IntWithAggregatesFilter<"Tasks"> | number
    state_name?: StringNullableWithAggregatesFilter<"Tasks"> | string | null
    assigned_to?: IntWithAggregatesFilter<"Tasks"> | number
    created_by?: IntNullableWithAggregatesFilter<"Tasks"> | number | null
    role_id?: IntWithAggregatesFilter<"Tasks"> | number
  }

  export type WorkflowWhereInput = {
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    id?: IntFilter<"Workflow"> | number
    workflow_name?: StringNullableFilter<"Workflow"> | string | null
    task?: TasksListRelationFilter
    rules?: Workflow_RulesListRelationFilter
  }

  export type WorkflowOrderByWithRelationInput = {
    id?: SortOrder
    workflow_name?: SortOrderInput | SortOrder
    task?: TasksOrderByRelationAggregateInput
    rules?: Workflow_RulesOrderByRelationAggregateInput
  }

  export type WorkflowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    workflow_name?: string
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    task?: TasksListRelationFilter
    rules?: Workflow_RulesListRelationFilter
  }, "id" | "workflow_name">

  export type WorkflowOrderByWithAggregationInput = {
    id?: SortOrder
    workflow_name?: SortOrderInput | SortOrder
    _count?: WorkflowCountOrderByAggregateInput
    _avg?: WorkflowAvgOrderByAggregateInput
    _max?: WorkflowMaxOrderByAggregateInput
    _min?: WorkflowMinOrderByAggregateInput
    _sum?: WorkflowSumOrderByAggregateInput
  }

  export type WorkflowScalarWhereWithAggregatesInput = {
    AND?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    OR?: WorkflowScalarWhereWithAggregatesInput[]
    NOT?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Workflow"> | number
    workflow_name?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
  }

  export type Workflow_RulesWhereInput = {
    AND?: Workflow_RulesWhereInput | Workflow_RulesWhereInput[]
    OR?: Workflow_RulesWhereInput[]
    NOT?: Workflow_RulesWhereInput | Workflow_RulesWhereInput[]
    id?: IntFilter<"Workflow_Rules"> | number
    workflow_id?: IntFilter<"Workflow_Rules"> | number
    state_1?: StringNullableFilter<"Workflow_Rules"> | string | null
    state_2?: StringNullableFilter<"Workflow_Rules"> | string | null
    role_id?: IntFilter<"Workflow_Rules"> | number
    workflow?: XOR<WorkflowNullableScalarRelationFilter, WorkflowWhereInput> | null
  }

  export type Workflow_RulesOrderByWithRelationInput = {
    id?: SortOrder
    workflow_id?: SortOrder
    state_1?: SortOrderInput | SortOrder
    state_2?: SortOrderInput | SortOrder
    role_id?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
  }

  export type Workflow_RulesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Workflow_RulesWhereInput | Workflow_RulesWhereInput[]
    OR?: Workflow_RulesWhereInput[]
    NOT?: Workflow_RulesWhereInput | Workflow_RulesWhereInput[]
    workflow_id?: IntFilter<"Workflow_Rules"> | number
    state_1?: StringNullableFilter<"Workflow_Rules"> | string | null
    state_2?: StringNullableFilter<"Workflow_Rules"> | string | null
    role_id?: IntFilter<"Workflow_Rules"> | number
    workflow?: XOR<WorkflowNullableScalarRelationFilter, WorkflowWhereInput> | null
  }, "id">

  export type Workflow_RulesOrderByWithAggregationInput = {
    id?: SortOrder
    workflow_id?: SortOrder
    state_1?: SortOrderInput | SortOrder
    state_2?: SortOrderInput | SortOrder
    role_id?: SortOrder
    _count?: Workflow_RulesCountOrderByAggregateInput
    _avg?: Workflow_RulesAvgOrderByAggregateInput
    _max?: Workflow_RulesMaxOrderByAggregateInput
    _min?: Workflow_RulesMinOrderByAggregateInput
    _sum?: Workflow_RulesSumOrderByAggregateInput
  }

  export type Workflow_RulesScalarWhereWithAggregatesInput = {
    AND?: Workflow_RulesScalarWhereWithAggregatesInput | Workflow_RulesScalarWhereWithAggregatesInput[]
    OR?: Workflow_RulesScalarWhereWithAggregatesInput[]
    NOT?: Workflow_RulesScalarWhereWithAggregatesInput | Workflow_RulesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Workflow_Rules"> | number
    workflow_id?: IntWithAggregatesFilter<"Workflow_Rules"> | number
    state_1?: StringNullableWithAggregatesFilter<"Workflow_Rules"> | string | null
    state_2?: StringNullableWithAggregatesFilter<"Workflow_Rules"> | string | null
    role_id?: IntWithAggregatesFilter<"Workflow_Rules"> | number
  }

  export type UserCreateInput = {
    firstname: string
    lastname?: string | null
    email: string
    empId: number
    role?: RoleCreateNestedOneWithoutUserInput
    task?: TasksCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstname: string
    lastname?: string | null
    email: string
    empId: number
    role_id?: number | null
    task?: TasksUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    empId?: IntFieldUpdateOperationsInput | number
    role?: RoleUpdateOneWithoutUserNestedInput
    task?: TasksUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    empId?: IntFieldUpdateOperationsInput | number
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    task?: TasksUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstname: string
    lastname?: string | null
    email: string
    empId: number
    role_id?: number | null
  }

  export type UserUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    empId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    empId?: IntFieldUpdateOperationsInput | number
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoleCreateInput = {
    role_id: number
    name?: string | null
    task?: TasksCreateNestedManyWithoutRoleInput
    user?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    role_id: number
    name?: string | null
    task?: TasksUncheckedCreateNestedManyWithoutRoleInput
    user?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TasksUpdateManyWithoutRoleNestedInput
    user?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TasksUncheckedUpdateManyWithoutRoleNestedInput
    user?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    role_id: number
    name?: string | null
  }

  export type RoleUpdateManyMutationInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TasksCreateInput = {
    state_name?: string | null
    created_by?: number | null
    workflow: WorkflowCreateNestedOneWithoutTaskInput
    user?: UserCreateNestedOneWithoutTaskInput
    role?: RoleCreateNestedOneWithoutTaskInput
  }

  export type TasksUncheckedCreateInput = {
    task_id?: number
    workflow_id: number
    state_name?: string | null
    assigned_to: number
    created_by?: number | null
    role_id: number
  }

  export type TasksUpdateInput = {
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    workflow?: WorkflowUpdateOneRequiredWithoutTaskNestedInput
    user?: UserUpdateOneWithoutTaskNestedInput
    role?: RoleUpdateOneWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_to?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type TasksCreateManyInput = {
    task_id?: number
    workflow_id: number
    state_name?: string | null
    assigned_to: number
    created_by?: number | null
    role_id: number
  }

  export type TasksUpdateManyMutationInput = {
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TasksUncheckedUpdateManyInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_to?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type WorkflowCreateInput = {
    workflow_name?: string | null
    task?: TasksCreateNestedManyWithoutWorkflowInput
    rules?: Workflow_RulesCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateInput = {
    id?: number
    workflow_name?: string | null
    task?: TasksUncheckedCreateNestedManyWithoutWorkflowInput
    rules?: Workflow_RulesUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUpdateInput = {
    workflow_name?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TasksUpdateManyWithoutWorkflowNestedInput
    rules?: Workflow_RulesUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    workflow_name?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TasksUncheckedUpdateManyWithoutWorkflowNestedInput
    rules?: Workflow_RulesUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateManyInput = {
    id?: number
    workflow_name?: string | null
  }

  export type WorkflowUpdateManyMutationInput = {
    workflow_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorkflowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    workflow_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Workflow_RulesCreateInput = {
    state_1?: string | null
    state_2?: string | null
    role_id: number
    workflow?: WorkflowCreateNestedOneWithoutRulesInput
  }

  export type Workflow_RulesUncheckedCreateInput = {
    id?: number
    workflow_id: number
    state_1?: string | null
    state_2?: string | null
    role_id: number
  }

  export type Workflow_RulesUpdateInput = {
    state_1?: NullableStringFieldUpdateOperationsInput | string | null
    state_2?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
    workflow?: WorkflowUpdateOneWithoutRulesNestedInput
  }

  export type Workflow_RulesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    state_1?: NullableStringFieldUpdateOperationsInput | string | null
    state_2?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type Workflow_RulesCreateManyInput = {
    id?: number
    workflow_id: number
    state_1?: string | null
    state_2?: string | null
    role_id: number
  }

  export type Workflow_RulesUpdateManyMutationInput = {
    state_1?: NullableStringFieldUpdateOperationsInput | string | null
    state_2?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type Workflow_RulesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    state_1?: NullableStringFieldUpdateOperationsInput | string | null
    state_2?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
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

  export type RoleNullableScalarRelationFilter = {
    is?: RoleWhereInput | null
    isNot?: RoleWhereInput | null
  }

  export type TasksListRelationFilter = {
    every?: TasksWhereInput
    some?: TasksWhereInput
    none?: TasksWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    empId?: SortOrder
    role_id?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    empId?: SortOrder
    role_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    empId?: SortOrder
    role_id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    empId?: SortOrder
    role_id?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    empId?: SortOrder
    role_id?: SortOrder
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    role_id?: SortOrder
    name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    role_id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    role_id?: SortOrder
    name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    role_id?: SortOrder
  }

  export type WorkflowScalarRelationFilter = {
    is?: WorkflowWhereInput
    isNot?: WorkflowWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TasksCountOrderByAggregateInput = {
    task_id?: SortOrder
    workflow_id?: SortOrder
    state_name?: SortOrder
    assigned_to?: SortOrder
    created_by?: SortOrder
    role_id?: SortOrder
  }

  export type TasksAvgOrderByAggregateInput = {
    task_id?: SortOrder
    workflow_id?: SortOrder
    assigned_to?: SortOrder
    created_by?: SortOrder
    role_id?: SortOrder
  }

  export type TasksMaxOrderByAggregateInput = {
    task_id?: SortOrder
    workflow_id?: SortOrder
    state_name?: SortOrder
    assigned_to?: SortOrder
    created_by?: SortOrder
    role_id?: SortOrder
  }

  export type TasksMinOrderByAggregateInput = {
    task_id?: SortOrder
    workflow_id?: SortOrder
    state_name?: SortOrder
    assigned_to?: SortOrder
    created_by?: SortOrder
    role_id?: SortOrder
  }

  export type TasksSumOrderByAggregateInput = {
    task_id?: SortOrder
    workflow_id?: SortOrder
    assigned_to?: SortOrder
    created_by?: SortOrder
    role_id?: SortOrder
  }

  export type Workflow_RulesListRelationFilter = {
    every?: Workflow_RulesWhereInput
    some?: Workflow_RulesWhereInput
    none?: Workflow_RulesWhereInput
  }

  export type Workflow_RulesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowCountOrderByAggregateInput = {
    id?: SortOrder
    workflow_name?: SortOrder
  }

  export type WorkflowAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkflowMaxOrderByAggregateInput = {
    id?: SortOrder
    workflow_name?: SortOrder
  }

  export type WorkflowMinOrderByAggregateInput = {
    id?: SortOrder
    workflow_name?: SortOrder
  }

  export type WorkflowSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkflowNullableScalarRelationFilter = {
    is?: WorkflowWhereInput | null
    isNot?: WorkflowWhereInput | null
  }

  export type Workflow_RulesCountOrderByAggregateInput = {
    id?: SortOrder
    workflow_id?: SortOrder
    state_1?: SortOrder
    state_2?: SortOrder
    role_id?: SortOrder
  }

  export type Workflow_RulesAvgOrderByAggregateInput = {
    id?: SortOrder
    workflow_id?: SortOrder
    role_id?: SortOrder
  }

  export type Workflow_RulesMaxOrderByAggregateInput = {
    id?: SortOrder
    workflow_id?: SortOrder
    state_1?: SortOrder
    state_2?: SortOrder
    role_id?: SortOrder
  }

  export type Workflow_RulesMinOrderByAggregateInput = {
    id?: SortOrder
    workflow_id?: SortOrder
    state_1?: SortOrder
    state_2?: SortOrder
    role_id?: SortOrder
  }

  export type Workflow_RulesSumOrderByAggregateInput = {
    id?: SortOrder
    workflow_id?: SortOrder
    role_id?: SortOrder
  }

  export type RoleCreateNestedOneWithoutUserInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput
    connect?: RoleWhereUniqueInput
  }

  export type TasksCreateNestedManyWithoutUserInput = {
    create?: XOR<TasksCreateWithoutUserInput, TasksUncheckedCreateWithoutUserInput> | TasksCreateWithoutUserInput[] | TasksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutUserInput | TasksCreateOrConnectWithoutUserInput[]
    createMany?: TasksCreateManyUserInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type TasksUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TasksCreateWithoutUserInput, TasksUncheckedCreateWithoutUserInput> | TasksCreateWithoutUserInput[] | TasksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutUserInput | TasksCreateOrConnectWithoutUserInput[]
    createMany?: TasksCreateManyUserInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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

  export type RoleUpdateOneWithoutUserNestedInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput
    upsert?: RoleUpsertWithoutUserInput
    disconnect?: RoleWhereInput | boolean
    delete?: RoleWhereInput | boolean
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserInput, RoleUpdateWithoutUserInput>, RoleUncheckedUpdateWithoutUserInput>
  }

  export type TasksUpdateManyWithoutUserNestedInput = {
    create?: XOR<TasksCreateWithoutUserInput, TasksUncheckedCreateWithoutUserInput> | TasksCreateWithoutUserInput[] | TasksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutUserInput | TasksCreateOrConnectWithoutUserInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutUserInput | TasksUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TasksCreateManyUserInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutUserInput | TasksUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutUserInput | TasksUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TasksUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TasksCreateWithoutUserInput, TasksUncheckedCreateWithoutUserInput> | TasksCreateWithoutUserInput[] | TasksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutUserInput | TasksCreateOrConnectWithoutUserInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutUserInput | TasksUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TasksCreateManyUserInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutUserInput | TasksUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutUserInput | TasksUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type TasksCreateNestedManyWithoutRoleInput = {
    create?: XOR<TasksCreateWithoutRoleInput, TasksUncheckedCreateWithoutRoleInput> | TasksCreateWithoutRoleInput[] | TasksUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutRoleInput | TasksCreateOrConnectWithoutRoleInput[]
    createMany?: TasksCreateManyRoleInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TasksUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<TasksCreateWithoutRoleInput, TasksUncheckedCreateWithoutRoleInput> | TasksCreateWithoutRoleInput[] | TasksUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutRoleInput | TasksCreateOrConnectWithoutRoleInput[]
    createMany?: TasksCreateManyRoleInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TasksUpdateManyWithoutRoleNestedInput = {
    create?: XOR<TasksCreateWithoutRoleInput, TasksUncheckedCreateWithoutRoleInput> | TasksCreateWithoutRoleInput[] | TasksUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutRoleInput | TasksCreateOrConnectWithoutRoleInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutRoleInput | TasksUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: TasksCreateManyRoleInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutRoleInput | TasksUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutRoleInput | TasksUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TasksUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<TasksCreateWithoutRoleInput, TasksUncheckedCreateWithoutRoleInput> | TasksCreateWithoutRoleInput[] | TasksUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutRoleInput | TasksCreateOrConnectWithoutRoleInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutRoleInput | TasksUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: TasksCreateManyRoleInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutRoleInput | TasksUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutRoleInput | TasksUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type WorkflowCreateNestedOneWithoutTaskInput = {
    create?: XOR<WorkflowCreateWithoutTaskInput, WorkflowUncheckedCreateWithoutTaskInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutTaskInput
    connect?: WorkflowWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTaskInput = {
    create?: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutTaskInput = {
    create?: XOR<RoleCreateWithoutTaskInput, RoleUncheckedCreateWithoutTaskInput>
    connectOrCreate?: RoleCreateOrConnectWithoutTaskInput
    connect?: RoleWhereUniqueInput
  }

  export type WorkflowUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<WorkflowCreateWithoutTaskInput, WorkflowUncheckedCreateWithoutTaskInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutTaskInput
    upsert?: WorkflowUpsertWithoutTaskInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutTaskInput, WorkflowUpdateWithoutTaskInput>, WorkflowUncheckedUpdateWithoutTaskInput>
  }

  export type UserUpdateOneWithoutTaskNestedInput = {
    create?: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput>
    connectOrCreate?: UserCreateOrConnectWithoutTaskInput
    upsert?: UserUpsertWithoutTaskInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTaskInput, UserUpdateWithoutTaskInput>, UserUncheckedUpdateWithoutTaskInput>
  }

  export type RoleUpdateOneWithoutTaskNestedInput = {
    create?: XOR<RoleCreateWithoutTaskInput, RoleUncheckedCreateWithoutTaskInput>
    connectOrCreate?: RoleCreateOrConnectWithoutTaskInput
    upsert?: RoleUpsertWithoutTaskInput
    disconnect?: RoleWhereInput | boolean
    delete?: RoleWhereInput | boolean
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutTaskInput, RoleUpdateWithoutTaskInput>, RoleUncheckedUpdateWithoutTaskInput>
  }

  export type TasksCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<TasksCreateWithoutWorkflowInput, TasksUncheckedCreateWithoutWorkflowInput> | TasksCreateWithoutWorkflowInput[] | TasksUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutWorkflowInput | TasksCreateOrConnectWithoutWorkflowInput[]
    createMany?: TasksCreateManyWorkflowInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type Workflow_RulesCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<Workflow_RulesCreateWithoutWorkflowInput, Workflow_RulesUncheckedCreateWithoutWorkflowInput> | Workflow_RulesCreateWithoutWorkflowInput[] | Workflow_RulesUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: Workflow_RulesCreateOrConnectWithoutWorkflowInput | Workflow_RulesCreateOrConnectWithoutWorkflowInput[]
    createMany?: Workflow_RulesCreateManyWorkflowInputEnvelope
    connect?: Workflow_RulesWhereUniqueInput | Workflow_RulesWhereUniqueInput[]
  }

  export type TasksUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<TasksCreateWithoutWorkflowInput, TasksUncheckedCreateWithoutWorkflowInput> | TasksCreateWithoutWorkflowInput[] | TasksUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutWorkflowInput | TasksCreateOrConnectWithoutWorkflowInput[]
    createMany?: TasksCreateManyWorkflowInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type Workflow_RulesUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<Workflow_RulesCreateWithoutWorkflowInput, Workflow_RulesUncheckedCreateWithoutWorkflowInput> | Workflow_RulesCreateWithoutWorkflowInput[] | Workflow_RulesUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: Workflow_RulesCreateOrConnectWithoutWorkflowInput | Workflow_RulesCreateOrConnectWithoutWorkflowInput[]
    createMany?: Workflow_RulesCreateManyWorkflowInputEnvelope
    connect?: Workflow_RulesWhereUniqueInput | Workflow_RulesWhereUniqueInput[]
  }

  export type TasksUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<TasksCreateWithoutWorkflowInput, TasksUncheckedCreateWithoutWorkflowInput> | TasksCreateWithoutWorkflowInput[] | TasksUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutWorkflowInput | TasksCreateOrConnectWithoutWorkflowInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutWorkflowInput | TasksUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: TasksCreateManyWorkflowInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutWorkflowInput | TasksUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutWorkflowInput | TasksUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type Workflow_RulesUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<Workflow_RulesCreateWithoutWorkflowInput, Workflow_RulesUncheckedCreateWithoutWorkflowInput> | Workflow_RulesCreateWithoutWorkflowInput[] | Workflow_RulesUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: Workflow_RulesCreateOrConnectWithoutWorkflowInput | Workflow_RulesCreateOrConnectWithoutWorkflowInput[]
    upsert?: Workflow_RulesUpsertWithWhereUniqueWithoutWorkflowInput | Workflow_RulesUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: Workflow_RulesCreateManyWorkflowInputEnvelope
    set?: Workflow_RulesWhereUniqueInput | Workflow_RulesWhereUniqueInput[]
    disconnect?: Workflow_RulesWhereUniqueInput | Workflow_RulesWhereUniqueInput[]
    delete?: Workflow_RulesWhereUniqueInput | Workflow_RulesWhereUniqueInput[]
    connect?: Workflow_RulesWhereUniqueInput | Workflow_RulesWhereUniqueInput[]
    update?: Workflow_RulesUpdateWithWhereUniqueWithoutWorkflowInput | Workflow_RulesUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: Workflow_RulesUpdateManyWithWhereWithoutWorkflowInput | Workflow_RulesUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: Workflow_RulesScalarWhereInput | Workflow_RulesScalarWhereInput[]
  }

  export type TasksUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<TasksCreateWithoutWorkflowInput, TasksUncheckedCreateWithoutWorkflowInput> | TasksCreateWithoutWorkflowInput[] | TasksUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutWorkflowInput | TasksCreateOrConnectWithoutWorkflowInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutWorkflowInput | TasksUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: TasksCreateManyWorkflowInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutWorkflowInput | TasksUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutWorkflowInput | TasksUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type Workflow_RulesUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<Workflow_RulesCreateWithoutWorkflowInput, Workflow_RulesUncheckedCreateWithoutWorkflowInput> | Workflow_RulesCreateWithoutWorkflowInput[] | Workflow_RulesUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: Workflow_RulesCreateOrConnectWithoutWorkflowInput | Workflow_RulesCreateOrConnectWithoutWorkflowInput[]
    upsert?: Workflow_RulesUpsertWithWhereUniqueWithoutWorkflowInput | Workflow_RulesUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: Workflow_RulesCreateManyWorkflowInputEnvelope
    set?: Workflow_RulesWhereUniqueInput | Workflow_RulesWhereUniqueInput[]
    disconnect?: Workflow_RulesWhereUniqueInput | Workflow_RulesWhereUniqueInput[]
    delete?: Workflow_RulesWhereUniqueInput | Workflow_RulesWhereUniqueInput[]
    connect?: Workflow_RulesWhereUniqueInput | Workflow_RulesWhereUniqueInput[]
    update?: Workflow_RulesUpdateWithWhereUniqueWithoutWorkflowInput | Workflow_RulesUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: Workflow_RulesUpdateManyWithWhereWithoutWorkflowInput | Workflow_RulesUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: Workflow_RulesScalarWhereInput | Workflow_RulesScalarWhereInput[]
  }

  export type WorkflowCreateNestedOneWithoutRulesInput = {
    create?: XOR<WorkflowCreateWithoutRulesInput, WorkflowUncheckedCreateWithoutRulesInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutRulesInput
    connect?: WorkflowWhereUniqueInput
  }

  export type WorkflowUpdateOneWithoutRulesNestedInput = {
    create?: XOR<WorkflowCreateWithoutRulesInput, WorkflowUncheckedCreateWithoutRulesInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutRulesInput
    upsert?: WorkflowUpsertWithoutRulesInput
    disconnect?: WorkflowWhereInput | boolean
    delete?: WorkflowWhereInput | boolean
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutRulesInput, WorkflowUpdateWithoutRulesInput>, WorkflowUncheckedUpdateWithoutRulesInput>
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

  export type RoleCreateWithoutUserInput = {
    role_id: number
    name?: string | null
    task?: TasksCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUserInput = {
    role_id: number
    name?: string | null
    task?: TasksUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
  }

  export type TasksCreateWithoutUserInput = {
    state_name?: string | null
    created_by?: number | null
    workflow: WorkflowCreateNestedOneWithoutTaskInput
    role?: RoleCreateNestedOneWithoutTaskInput
  }

  export type TasksUncheckedCreateWithoutUserInput = {
    task_id?: number
    workflow_id: number
    state_name?: string | null
    created_by?: number | null
    role_id: number
  }

  export type TasksCreateOrConnectWithoutUserInput = {
    where: TasksWhereUniqueInput
    create: XOR<TasksCreateWithoutUserInput, TasksUncheckedCreateWithoutUserInput>
  }

  export type TasksCreateManyUserInputEnvelope = {
    data: TasksCreateManyUserInput | TasksCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUserInput = {
    update: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
  }

  export type RoleUpdateWithoutUserInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TasksUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUserInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TasksUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type TasksUpsertWithWhereUniqueWithoutUserInput = {
    where: TasksWhereUniqueInput
    update: XOR<TasksUpdateWithoutUserInput, TasksUncheckedUpdateWithoutUserInput>
    create: XOR<TasksCreateWithoutUserInput, TasksUncheckedCreateWithoutUserInput>
  }

  export type TasksUpdateWithWhereUniqueWithoutUserInput = {
    where: TasksWhereUniqueInput
    data: XOR<TasksUpdateWithoutUserInput, TasksUncheckedUpdateWithoutUserInput>
  }

  export type TasksUpdateManyWithWhereWithoutUserInput = {
    where: TasksScalarWhereInput
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyWithoutUserInput>
  }

  export type TasksScalarWhereInput = {
    AND?: TasksScalarWhereInput | TasksScalarWhereInput[]
    OR?: TasksScalarWhereInput[]
    NOT?: TasksScalarWhereInput | TasksScalarWhereInput[]
    task_id?: IntFilter<"Tasks"> | number
    workflow_id?: IntFilter<"Tasks"> | number
    state_name?: StringNullableFilter<"Tasks"> | string | null
    assigned_to?: IntFilter<"Tasks"> | number
    created_by?: IntNullableFilter<"Tasks"> | number | null
    role_id?: IntFilter<"Tasks"> | number
  }

  export type TasksCreateWithoutRoleInput = {
    state_name?: string | null
    created_by?: number | null
    workflow: WorkflowCreateNestedOneWithoutTaskInput
    user?: UserCreateNestedOneWithoutTaskInput
  }

  export type TasksUncheckedCreateWithoutRoleInput = {
    task_id?: number
    workflow_id: number
    state_name?: string | null
    assigned_to: number
    created_by?: number | null
  }

  export type TasksCreateOrConnectWithoutRoleInput = {
    where: TasksWhereUniqueInput
    create: XOR<TasksCreateWithoutRoleInput, TasksUncheckedCreateWithoutRoleInput>
  }

  export type TasksCreateManyRoleInputEnvelope = {
    data: TasksCreateManyRoleInput | TasksCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutRoleInput = {
    firstname: string
    lastname?: string | null
    email: string
    empId: number
    task?: TasksCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    firstname: string
    lastname?: string | null
    email: string
    empId: number
    task?: TasksUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type TasksUpsertWithWhereUniqueWithoutRoleInput = {
    where: TasksWhereUniqueInput
    update: XOR<TasksUpdateWithoutRoleInput, TasksUncheckedUpdateWithoutRoleInput>
    create: XOR<TasksCreateWithoutRoleInput, TasksUncheckedCreateWithoutRoleInput>
  }

  export type TasksUpdateWithWhereUniqueWithoutRoleInput = {
    where: TasksWhereUniqueInput
    data: XOR<TasksUpdateWithoutRoleInput, TasksUncheckedUpdateWithoutRoleInput>
  }

  export type TasksUpdateManyWithWhereWithoutRoleInput = {
    where: TasksScalarWhereInput
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    firstname?: StringFilter<"User"> | string
    lastname?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    empId?: IntFilter<"User"> | number
    role_id?: IntNullableFilter<"User"> | number | null
  }

  export type WorkflowCreateWithoutTaskInput = {
    workflow_name?: string | null
    rules?: Workflow_RulesCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutTaskInput = {
    id?: number
    workflow_name?: string | null
    rules?: Workflow_RulesUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutTaskInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutTaskInput, WorkflowUncheckedCreateWithoutTaskInput>
  }

  export type UserCreateWithoutTaskInput = {
    firstname: string
    lastname?: string | null
    email: string
    empId: number
    role?: RoleCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTaskInput = {
    id?: number
    firstname: string
    lastname?: string | null
    email: string
    empId: number
    role_id?: number | null
  }

  export type UserCreateOrConnectWithoutTaskInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput>
  }

  export type RoleCreateWithoutTaskInput = {
    role_id: number
    name?: string | null
    user?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutTaskInput = {
    role_id: number
    name?: string | null
    user?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutTaskInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutTaskInput, RoleUncheckedCreateWithoutTaskInput>
  }

  export type WorkflowUpsertWithoutTaskInput = {
    update: XOR<WorkflowUpdateWithoutTaskInput, WorkflowUncheckedUpdateWithoutTaskInput>
    create: XOR<WorkflowCreateWithoutTaskInput, WorkflowUncheckedCreateWithoutTaskInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutTaskInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutTaskInput, WorkflowUncheckedUpdateWithoutTaskInput>
  }

  export type WorkflowUpdateWithoutTaskInput = {
    workflow_name?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: Workflow_RulesUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    workflow_name?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: Workflow_RulesUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type UserUpsertWithoutTaskInput = {
    update: XOR<UserUpdateWithoutTaskInput, UserUncheckedUpdateWithoutTaskInput>
    create: XOR<UserCreateWithoutTaskInput, UserUncheckedCreateWithoutTaskInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTaskInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTaskInput, UserUncheckedUpdateWithoutTaskInput>
  }

  export type UserUpdateWithoutTaskInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    empId?: IntFieldUpdateOperationsInput | number
    role?: RoleUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    empId?: IntFieldUpdateOperationsInput | number
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoleUpsertWithoutTaskInput = {
    update: XOR<RoleUpdateWithoutTaskInput, RoleUncheckedUpdateWithoutTaskInput>
    create: XOR<RoleCreateWithoutTaskInput, RoleUncheckedCreateWithoutTaskInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutTaskInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutTaskInput, RoleUncheckedUpdateWithoutTaskInput>
  }

  export type RoleUpdateWithoutTaskInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutTaskInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type TasksCreateWithoutWorkflowInput = {
    state_name?: string | null
    created_by?: number | null
    user?: UserCreateNestedOneWithoutTaskInput
    role?: RoleCreateNestedOneWithoutTaskInput
  }

  export type TasksUncheckedCreateWithoutWorkflowInput = {
    task_id?: number
    state_name?: string | null
    assigned_to: number
    created_by?: number | null
    role_id: number
  }

  export type TasksCreateOrConnectWithoutWorkflowInput = {
    where: TasksWhereUniqueInput
    create: XOR<TasksCreateWithoutWorkflowInput, TasksUncheckedCreateWithoutWorkflowInput>
  }

  export type TasksCreateManyWorkflowInputEnvelope = {
    data: TasksCreateManyWorkflowInput | TasksCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type Workflow_RulesCreateWithoutWorkflowInput = {
    state_1?: string | null
    state_2?: string | null
    role_id: number
  }

  export type Workflow_RulesUncheckedCreateWithoutWorkflowInput = {
    id?: number
    state_1?: string | null
    state_2?: string | null
    role_id: number
  }

  export type Workflow_RulesCreateOrConnectWithoutWorkflowInput = {
    where: Workflow_RulesWhereUniqueInput
    create: XOR<Workflow_RulesCreateWithoutWorkflowInput, Workflow_RulesUncheckedCreateWithoutWorkflowInput>
  }

  export type Workflow_RulesCreateManyWorkflowInputEnvelope = {
    data: Workflow_RulesCreateManyWorkflowInput | Workflow_RulesCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type TasksUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: TasksWhereUniqueInput
    update: XOR<TasksUpdateWithoutWorkflowInput, TasksUncheckedUpdateWithoutWorkflowInput>
    create: XOR<TasksCreateWithoutWorkflowInput, TasksUncheckedCreateWithoutWorkflowInput>
  }

  export type TasksUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: TasksWhereUniqueInput
    data: XOR<TasksUpdateWithoutWorkflowInput, TasksUncheckedUpdateWithoutWorkflowInput>
  }

  export type TasksUpdateManyWithWhereWithoutWorkflowInput = {
    where: TasksScalarWhereInput
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type Workflow_RulesUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: Workflow_RulesWhereUniqueInput
    update: XOR<Workflow_RulesUpdateWithoutWorkflowInput, Workflow_RulesUncheckedUpdateWithoutWorkflowInput>
    create: XOR<Workflow_RulesCreateWithoutWorkflowInput, Workflow_RulesUncheckedCreateWithoutWorkflowInput>
  }

  export type Workflow_RulesUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: Workflow_RulesWhereUniqueInput
    data: XOR<Workflow_RulesUpdateWithoutWorkflowInput, Workflow_RulesUncheckedUpdateWithoutWorkflowInput>
  }

  export type Workflow_RulesUpdateManyWithWhereWithoutWorkflowInput = {
    where: Workflow_RulesScalarWhereInput
    data: XOR<Workflow_RulesUpdateManyMutationInput, Workflow_RulesUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type Workflow_RulesScalarWhereInput = {
    AND?: Workflow_RulesScalarWhereInput | Workflow_RulesScalarWhereInput[]
    OR?: Workflow_RulesScalarWhereInput[]
    NOT?: Workflow_RulesScalarWhereInput | Workflow_RulesScalarWhereInput[]
    id?: IntFilter<"Workflow_Rules"> | number
    workflow_id?: IntFilter<"Workflow_Rules"> | number
    state_1?: StringNullableFilter<"Workflow_Rules"> | string | null
    state_2?: StringNullableFilter<"Workflow_Rules"> | string | null
    role_id?: IntFilter<"Workflow_Rules"> | number
  }

  export type WorkflowCreateWithoutRulesInput = {
    workflow_name?: string | null
    task?: TasksCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutRulesInput = {
    id?: number
    workflow_name?: string | null
    task?: TasksUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutRulesInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutRulesInput, WorkflowUncheckedCreateWithoutRulesInput>
  }

  export type WorkflowUpsertWithoutRulesInput = {
    update: XOR<WorkflowUpdateWithoutRulesInput, WorkflowUncheckedUpdateWithoutRulesInput>
    create: XOR<WorkflowCreateWithoutRulesInput, WorkflowUncheckedCreateWithoutRulesInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutRulesInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutRulesInput, WorkflowUncheckedUpdateWithoutRulesInput>
  }

  export type WorkflowUpdateWithoutRulesInput = {
    workflow_name?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TasksUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutRulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    workflow_name?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TasksUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type TasksCreateManyUserInput = {
    task_id?: number
    workflow_id: number
    state_name?: string | null
    created_by?: number | null
    role_id: number
  }

  export type TasksUpdateWithoutUserInput = {
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    workflow?: WorkflowUpdateOneRequiredWithoutTaskNestedInput
    role?: RoleUpdateOneWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateWithoutUserInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type TasksUncheckedUpdateManyWithoutUserInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type TasksCreateManyRoleInput = {
    task_id?: number
    workflow_id: number
    state_name?: string | null
    assigned_to: number
    created_by?: number | null
  }

  export type UserCreateManyRoleInput = {
    id?: number
    firstname: string
    lastname?: string | null
    email: string
    empId: number
  }

  export type TasksUpdateWithoutRoleInput = {
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    workflow?: WorkflowUpdateOneRequiredWithoutTaskNestedInput
    user?: UserUpdateOneWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateWithoutRoleInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_to?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TasksUncheckedUpdateManyWithoutRoleInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    workflow_id?: IntFieldUpdateOperationsInput | number
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_to?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpdateWithoutRoleInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    empId?: IntFieldUpdateOperationsInput | number
    task?: TasksUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    empId?: IntFieldUpdateOperationsInput | number
    task?: TasksUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    empId?: IntFieldUpdateOperationsInput | number
  }

  export type TasksCreateManyWorkflowInput = {
    task_id?: number
    state_name?: string | null
    assigned_to: number
    created_by?: number | null
    role_id: number
  }

  export type Workflow_RulesCreateManyWorkflowInput = {
    id?: number
    state_1?: string | null
    state_2?: string | null
    role_id: number
  }

  export type TasksUpdateWithoutWorkflowInput = {
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneWithoutTaskNestedInput
    role?: RoleUpdateOneWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateWithoutWorkflowInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_to?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type TasksUncheckedUpdateManyWithoutWorkflowInput = {
    task_id?: IntFieldUpdateOperationsInput | number
    state_name?: NullableStringFieldUpdateOperationsInput | string | null
    assigned_to?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type Workflow_RulesUpdateWithoutWorkflowInput = {
    state_1?: NullableStringFieldUpdateOperationsInput | string | null
    state_2?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type Workflow_RulesUncheckedUpdateWithoutWorkflowInput = {
    id?: IntFieldUpdateOperationsInput | number
    state_1?: NullableStringFieldUpdateOperationsInput | string | null
    state_2?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type Workflow_RulesUncheckedUpdateManyWithoutWorkflowInput = {
    id?: IntFieldUpdateOperationsInput | number
    state_1?: NullableStringFieldUpdateOperationsInput | string | null
    state_2?: NullableStringFieldUpdateOperationsInput | string | null
    role_id?: IntFieldUpdateOperationsInput | number
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