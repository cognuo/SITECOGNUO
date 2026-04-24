export const prerender = false;
import type { APIRoute } from 'astro';

const PIXEL_ID = '1340251530928356';
const ACCESS_TOKEN =
  'EAAUs8I3Fjp4BRdYgu2ycvMdLRsxi1KegSnCPinu4aUrLy1PqQUBFsDi5DlhehlkqZAIcomFG1fAxoYrkLyhJn7n8UYEUrIThExCjyCZBs1RXprUGliE0RdaS1wxtKHRLV7t4uZB8Ob8S8imkqwQJ4E0TlUHZBjgFhOhPxCGOKLnGL8RWAcBHvHXnIWtZCMgZDZD';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const userData: Record<string, string> = {};
    if (body.client_user_agent) userData.client_user_agent = body.client_user_agent;
    if (body.fbc) userData.fbc = body.fbc;
    if (body.fbp) userData.fbp = body.fbp;
    if (body.client_ip_address) userData.client_ip_address = body.client_ip_address;

    const eventData = {
      event_name: body.event_name || 'Lead',
      event_time: Math.floor(Date.now() / 1000),
      event_id: body.event_id,
      event_source_url: body.event_source_url,
      action_source: 'website',
      user_data: userData,
    };

    const res = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [eventData] }),
      },
    );

    const result = await res.json();
    return new Response(JSON.stringify(result), {
      status: res.ok ? 200 : 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Internal error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
