"use server";

import { db } from "@/db/db";
import { users } from "@/db/schema";

export async function getMessagesFromDatabase() {
  const response = await db.select().from(users);

  return response;
}
