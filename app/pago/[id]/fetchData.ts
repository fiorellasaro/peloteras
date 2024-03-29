import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function fetchData(id: any) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // Fetch the event data
  const { data: event, error: eventError } = await supabase
    .from("event")
    .select("*")
    .eq("id", id)
    .single();

  if (eventError || !event) {
    throw new Error("Event not found");
  }

  let { data: paymentMethod, error: paymentError } = await supabase
    .from("paymentMethod")
    .select("*")
    .eq("event", event.id)
    .single();

  if (paymentError || !paymentMethod) {
    throw new Error("Payment method not found");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { event, paymentMethod, user };
}
