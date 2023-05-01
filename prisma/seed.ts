import {Prisma, PrismaClient} from '../generated/client/deno/edge.ts'
import { load } from "https://deno.land/std/dotenv/mod.ts";

const env = await load();

const prisma = new PrismaClient({
    datasources: {}
})