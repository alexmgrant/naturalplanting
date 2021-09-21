import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

interface NodeJSGlobale extends NodeJS.Global {
  prisma: any;
}

declare const global: NodeJSGlobale;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
