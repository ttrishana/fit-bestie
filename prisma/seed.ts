import { PrismaClient, Difficulty } from "@prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
    adapter
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
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });