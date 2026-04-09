import { prisma } from "@/lib/prisma";

export async function GET() {
  const exercises = await prisma.exercise.findMany({
    take: 10,
  });

  return Response.json({ data: exercises });
}