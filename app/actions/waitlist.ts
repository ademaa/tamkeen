"use server"

import { createClient } from "@/lib/supabase/server"

export async function addToWaitlist(email: string) {
  const supabase = await createClient()

  const { data, error } = await supabase.from("waitlist").insert({ email }).select().single()

  if (error) {
    // Check if it's a duplicate email error
    if (error.code === "23505") {
      return { success: false, message: "This email is already on the waitlist!" }
    }
    return { success: false, message: error.message }
  }

  return { success: true, data }
}
