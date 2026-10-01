
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
 * Prisma Client JS version: 6.4.1
 * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
 */
Prisma.prismaVersion = {
  client: "6.4.1",
  engine: "a9055b89e58b4b5bfb59600785423b1db3d0e75d"
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
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ShopScalarFieldEnum = {
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

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.CustomerScalarFieldEnum = {
  id: 'id',
  shopId: 'shopId',
  phone: 'phone',
  fullName: 'fullName',
  email: 'email',
  createdAt: 'createdAt'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  orderNumber: 'orderNumber',
  shopId: 'shopId',
  customerId: 'customerId',
  status: 'status',
  totalDocuments: 'totalDocuments',
  totalPages: 'totalPages',
  estimatedAmount: 'estimatedAmount',
  finalAmount: 'finalAmount',
  customerNotes: 'customerNotes',
  rejectionReason: 'rejectionReason',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrderDocumentScalarFieldEnum = {
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

exports.Prisma.DocumentPrintSpecScalarFieldEnum = {
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
  finishingNotes: 'finishingNotes',
  priceDetails: 'priceDetails',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PrintAgentScalarFieldEnum = {
  id: 'id',
  shopId: 'shopId',
  agentName: 'agentName',
  machineHostname: 'machineHostname',
  osVersion: 'osVersion',
  authTokenHash: 'authTokenHash',
  isConnected: 'isConnected',
  lastHeartbeatAt: 'lastHeartbeatAt',
  createdAt: 'createdAt'
};

exports.Prisma.PrinterScalarFieldEnum = {
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

exports.Prisma.PrintJobScalarFieldEnum = {
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

exports.Prisma.PricingRuleScalarFieldEnum = {
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

exports.Prisma.SubscriptionPlanScalarFieldEnum = {
  id: 'id',
  name: 'name',
  monthlyPrice: 'monthlyPrice',
  yearlyPrice: 'yearlyPrice',
  maxPrinters: 'maxPrinters',
  maxMonthlyOrders: 'maxMonthlyOrders',
  featuresJson: 'featuresJson',
  createdAt: 'createdAt'
};

exports.Prisma.SubscriptionScalarFieldEnum = {
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

exports.Prisma.AuditLogScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.ShopOrderByRelevanceFieldEnum = {
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

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  id: 'id',
  shopId: 'shopId',
  email: 'email',
  passwordHash: 'passwordHash',
  fullName: 'fullName',
  phone: 'phone',
  role: 'role'
};

exports.Prisma.CustomerOrderByRelevanceFieldEnum = {
  id: 'id',
  shopId: 'shopId',
  phone: 'phone',
  fullName: 'fullName',
  email: 'email'
};

exports.Prisma.OrderOrderByRelevanceFieldEnum = {
  id: 'id',
  orderNumber: 'orderNumber',
  shopId: 'shopId',
  customerId: 'customerId',
  status: 'status',
  customerNotes: 'customerNotes',
  rejectionReason: 'rejectionReason'
};

exports.Prisma.OrderDocumentOrderByRelevanceFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  originalFilename: 'originalFilename',
  storageKey: 'storageKey',
  mimeType: 'mimeType',
  sha256Checksum: 'sha256Checksum',
  previewImageKey: 'previewImageKey'
};

exports.Prisma.DocumentPrintSpecOrderByRelevanceFieldEnum = {
  id: 'id',
  documentId: 'documentId',
  color: 'color',
  duplex: 'duplex',
  paperSize: 'paperSize',
  orientation: 'orientation',
  pageRange: 'pageRange',
  stapling: 'stapling',
  finishingNotes: 'finishingNotes',
  priceDetails: 'priceDetails'
};

exports.Prisma.PrintAgentOrderByRelevanceFieldEnum = {
  id: 'id',
  shopId: 'shopId',
  agentName: 'agentName',
  machineHostname: 'machineHostname',
  osVersion: 'osVersion',
  authTokenHash: 'authTokenHash'
};

exports.Prisma.PrinterOrderByRelevanceFieldEnum = {
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

exports.Prisma.PrintJobOrderByRelevanceFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  documentId: 'documentId',
  printerId: 'printerId',
  agentId: 'agentId',
  status: 'status',
  errorMessage: 'errorMessage'
};

exports.Prisma.PricingRuleOrderByRelevanceFieldEnum = {
  id: 'id',
  shopId: 'shopId',
  paperSize: 'paperSize'
};

exports.Prisma.SubscriptionPlanOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  featuresJson: 'featuresJson'
};

exports.Prisma.SubscriptionOrderByRelevanceFieldEnum = {
  id: 'id',
  shopId: 'shopId',
  planId: 'planId',
  status: 'status'
};

exports.Prisma.AuditLogOrderByRelevanceFieldEnum = {
  id: 'id',
  shopId: 'shopId',
  userId: 'userId',
  action: 'action',
  entityType: 'entityType',
  entityId: 'entityId',
  details: 'details',
  ipAddress: 'ipAddress'
};


exports.Prisma.ModelName = {
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
  AuditLog: 'AuditLog'
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
