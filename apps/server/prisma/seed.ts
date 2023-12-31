// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    // create two dummy task
    const task1 = await prisma.task.upsert({
        where: { title: 'Prisma Adds Support for MongoDB' },
        update: {},
        create: {
            title: 'Prisma Adds Support for MongoDB',
            description:
                "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
            status: false,
        },
    });

    const task2 = await prisma.task.upsert({
        where: { title: "What's new in Prisma? (Q1/22)" },
        update: {},
        create: {
            title: "What's new in Prisma? (Q1/22)",
            description:
                'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
            status: true,
        },
    });

    console.log({ task1, task2 });
}

// execute the main function
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });
