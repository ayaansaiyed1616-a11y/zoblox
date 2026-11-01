# Zoblox → Supabase migration (work in progress)

## Current status
The live `index.html` still uses its existing EdgeOne `/api` backend and local/offline fallback. Creating Supabase tables does **not** switch it to Supabase. Do not remove the offline warning until real authentication and data operations are working.

## Supabase connection (public client settings)
- Project URL: `https://vaxmbrdgitemezgmrbfw.supabase.co`
- Publishable key: use the `sb_publishable_` key from Supabase settings in the browser client only.
- Never put the database password, secret key, or service-role key into the browser or GitHub repository.

## Requested behavior
1. Sign-up: username, **required email**, password, email confirmation.
2. Sign-in: **username + password** (no email field).
3. Shared profiles, progress and global leaderboard.
4. Multiplayer rooms and realtime presence, followed by authoritative game-event validation.

## Security and implementation requirements
- Supabase Auth supports email/password, not native username/password. Implement username-to-auth lookup through a rate-limited trusted server endpoint; never expose user email mappings to the public browser or reveal whether a username exists in error messages.
- The `profiles` table needs a **unique, case-insensitive username** constraint and a safe registration flow. Ensure profiles are created only for authenticated users; account for email-confirmation flow.
- Existing SQL intentionally has no client write policies for `leaderboard`, progress updates, or room membership. Implement validated server-side operations rather than broad INSERT/UPDATE policies.
- Enforce room capacity and membership atomically; use Supabase Realtime only for presence and low-trust messages. Competitive movement/scoring needs authoritative validation.
- Preserve existing Zobux, XP, shop, friends, games and admin features during migration, or explicitly mark features unsupported before switching backend.
- Add tests for registration, confirmation, username login, duplicate usernames, score tampering, progress persistence, room capacity and offline/reconnect.
- Set Supabase Auth Site URL to `https://zoblox.edgeone.dev` and allow redirect `https://zoblox.edgeone.dev/**`.

## Deployment
Keep this branch separate from `main`. Test on an EdgeOne preview before merging; connecting GitHub to EdgeOne Pages is a separate deployment configuration step.
