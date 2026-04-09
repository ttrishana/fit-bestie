import { PrismaClient } from "@prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';


const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL!,
  });
  
const prisma = new PrismaClient({
      adapter
});

export async function GET() {
  const exercises = await prisma.exercise.findMany({
    take: 10,
  });

  return Response.json({ data: exercises });
}