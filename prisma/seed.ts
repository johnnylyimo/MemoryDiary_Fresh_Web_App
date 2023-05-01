import {Prisma, PrismaClient} from '../generated/client/deno/edge.ts'
import { load } from "https://deno.land/std/dotenv/mod.ts";

const env = await load();

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: env["DATABASE_URL"]
        }
    }
})


const newUser = await prisma.user.create({
    data: {
        name: 'John', 
        username: 'Linus',
        email: 'john@gmail.com'
    },
});

console.log(`User has been created with id: ${newUser.id}`);
await prisma.$disconnect()