/* Zoblox Supabase client initialization. Public client credentials only. */
(function () {
  'use strict';
  var url = 'https://vaxmbrdgitemezgmrbfw.supabase.co';
  var key = 'sb_publishable_zTqgXWJdjFHtqKmqQ6DyRA_G6bVKH3b';
  if (!window.supabase || typeof window.supabase.createClient !== 'function') {
    console.error('[Zoblox] Supabase library failed to load.');
    return;
  }
  window.zobloxSupabase = window.supabase.createClient(url, key, {
    auth: { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true }
  });
})();
