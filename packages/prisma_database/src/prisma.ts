// Import the PrismaClient class from the generated Prisma client
import { PrismaClient } from '@prisma/client';
import { PrismaClient as TokenVaultPrismaClient } from '../generated/tokenVault-client';

// Create a function that returns a new instance of PrismaClient
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Create a function that returns a new instance of TokenVaultPrismaClient
const tokenVaultPrismaSingleton = () => {
  return new TokenVaultPrismaClient();
};

// Declare global variables to store the PrismaClient instances
declare global {
  var prismaGlobal: ReturnType<typeof prismaClientSingleton> | undefined;
  var tokenVaultPrismaGlobal: ReturnType<typeof tokenVaultPrismaSingleton> | undefined;
}

// Initialize the Prisma instance or use the existing one if already initialized
const prisma: ReturnType<typeof prismaClientSingleton> =
  globalThis.prismaGlobal ?? prismaClientSingleton();

const tokenVaultPrisma: ReturnType<typeof tokenVaultPrismaSingleton> =
  globalThis.tokenVaultPrismaGlobal ?? tokenVaultPrismaSingleton();

// If not in production, set the global variable to store the Prisma instances
// This prevents creating multiple instances in development mode, where hot-reloading can cause issues.
if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma;
  globalThis.tokenVaultPrismaGlobal = tokenVaultPrisma;
}

// Export the Prisma instances for use in other parts of the app
export { prisma, tokenVaultPrisma };


