
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.13.0
 * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
 */
Prisma.prismaVersion = {
  client: "4.13.0",
  engine: "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


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


const dirname = '/'

/**
 * Enums
 */

exports.Prisma.MemoryScalarFieldEnum = {
  id: 'id',
  title: 'title',
  content: 'content',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  username: 'username',
  email: 'email',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};


exports.Prisma.ModelName = {
  User: 'User',
  Memory: 'Memory'
};

const compressedDMMF = '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'
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/johnnylyimo/Documents/Projects/WebDevelopment/Fresh/memorydiary/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.13.0",
  "engineVersion": "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "cockroachdb",
  "dataProxy": true,
  "postinstall": false
}
config.dirname = dirname
config.document = dmmf

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBwcmV2aWV3RmVhdHVyZXMgPVsiZGVubyJdCiAgb3V0cHV0ID0iLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAiY29ja3JvYWNoZGIiCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpCn0KCgptb2RlbCBVc2VyIHsKICBpZCBJbnQgQGlkIEBkZWZhdWx0KHNlcXVlbmNlKCkgKQogIG5hbWUgU3RyaW5nIAogIHVzZXJuYW1lIFN0cmluZyAKICBlbWFpbCBTdHJpbmcgQHVuaXF1ZSAKICBtZW1vcnkgTWVtb3J5W10KICBjcmVhdGVkQXQgRGF0ZVRpbWUgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0IERhdGVUaW1lIEB1cGRhdGVkQXQKfQoKCm1vZGVsIE1lbW9yeSB7CiAgaWQgSW50IEBpZCBAZGVmYXVsdChzZXF1ZW5jZSgpICkKICB0aXRsZSBTdHJpbmcgCiAgY29udGVudCBTdHJpbmcgCiAgdXNlcklkIEludAogIHVzZXIgVXNlciBAcmVsYXRpb24oZmllbGRzOiBbdXNlcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQoJdXBkYXRlZEF0IERhdGVUaW1lIEB1cGRhdGVkQXQKfQ=='
config.inlineSchemaHash = '6825351dcded4846792bff8bef6fd4d4fa9e20774d18f104cfcceebcb8b2db21'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

config.edgeClientProtocol = "graphql";
if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

