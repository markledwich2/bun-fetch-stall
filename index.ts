import { createPrompt } from "bun-promptx";

export const testFetchIp = async () => {
  console.log("testFetchIp start");
  const ip = await fetch("https://api.ipify.org?format=json")
    .then(async (r) => {
      if (!r.ok)
        throw new Error(
          `Supabase admin API error (${r.status}). url: https://api.ipify.org?format=json`
        );
      console.log("my ip response ", r.status);
      return await r.json();
    })
    .then((r) => r.ip as string | undefined);
  console.log("my ip", ip);
};

if (false) createPrompt("test");
await testFetchIp();
