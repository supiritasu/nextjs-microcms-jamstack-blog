import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "nexttech",
  apiKey: process.env.API_KEY,
});
