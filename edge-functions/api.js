// Zoblox EdgeOne API diagnostic endpoint.
// This does not claim the legacy game backend is online.
// The legacy API needs a bound KV namespace or a full Supabase migration.
export async function onRequest({request}) {
  const route = new URL(request.url).searchParams.get('r');
  const headers = {'content-type':'application/json; charset=utf-8','cache-control':'no-store'};
  if (route !== '/ping') return new Response(JSON.stringify({error:'Legacy game API is not installed. Use Supabase authentication preview while backend migration is in progress.'}),{status:503,headers});
  let bound = false;
  try { bound = typeof zoblox_kv !== 'undefined' && !!zoblox_kv; } catch (_) {}
  return new Response(JSON.stringify({error:bound?'LEGACY_API_NOT_INSTALLED':'KV_NOT_BOUND',message:bound?'KV is bound but the legacy API has not been migrated.':'Bind the zoblox_kv namespace or complete the Supabase backend migration.'}),{status:503,headers});
}
