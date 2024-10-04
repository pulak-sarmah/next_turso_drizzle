"use server";

import { db } from "@/db/db";
import { users } from "@/db/schema";
import { revalidatePath } from "next/cache";

export async function addNameToDatabase(name: string) {
  console.log(`Adding name to database: ${name}`);

  try {
    await db.insert(users).values({ name }).execute();
    revalidatePath("/");
  } catch (error) {
    console.error(`Error adding name to database: ${error}`);
    return { ok: false };
  }
  return { ok: true };
}
