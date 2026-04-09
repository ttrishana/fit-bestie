import { PrismaClient, Difficulty } from "../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set.");
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.exercise.createMany({
    data: [
      {
        name: "Barbell Bench Press",
        muscleGroups: ["chest", "triceps", "front delts"],
        difficulty: Difficulty.BEGINNER,
        defaultSets: 3,
        defaultReps: "8-10",
        demoUrl: null,
        isSystem: true,
      },
      {
        name: "Lat Pulldown",
        muscleGroups: ["lats", "biceps"],
        difficulty: Difficulty.BEGINNER,
        defaultSets: 3,
        defaultReps: "10-12",
        demoUrl: null,
        isSystem: true,
      },
      {
        name: "Barbell Squat",
        muscleGroups: ["quads", "glutes", "core"],
        difficulty: Difficulty.BEGINNER,
        defaultSets: 3,
        defaultReps: "6-8",
        demoUrl: null,
        isSystem: true,
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });