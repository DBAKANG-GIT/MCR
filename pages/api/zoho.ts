const DC = process.env.ZOHO_DC || "com";

// Map DC → base hosts
function accountsHost(dc: string) {
  return `https://accounts.zoho.${dc}`;
}
function apiHost(dc: string) {
  return `https://www.zohoapis.${dc}`;
}

export async function getZohoAccessToken(): Promise<string> {
  const res = await fetch(`${accountsHost(DC)}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      refresh_token: process.env.ZOHO_REFRESH_TOKEN!,
      client_id: process.env.ZOHO_CLIENT_ID!,
      client_secret: process.env.ZOHO_CLIENT_SECRET!,
      grant_type: "refresh_token",
    }),
    // Avoid Next.js caching
    cache: "no-store",
  });

  const data = await res.json();
  if (!res.ok || !data.access_token) {
    throw new Error(`Zoho OAuth failed: ${res.status} ${JSON.stringify(data)}`);
  }
  return data.access_token;
}

export function zohoApiBase() {
  return `${apiHost(DC)}/crm/v2`;
}
