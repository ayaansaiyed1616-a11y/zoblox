-- Apply in Supabase SQL Editor before enabling production registration.
-- Case-insensitive unique usernames and server-side profile creation.
create unique index if not exists profiles_username_lower_unique
  on public.profiles (lower(username));

create or replace function public.create_profile_for_new_user()
returns trigger language plpgsql security definer
set search_path = ''
as $$
declare
  chosen_username text;
begin
  chosen_username := nullif(trim(new.raw_user_meta_data ->> 'username'), '');
  if chosen_username is null or chosen_username !~ '^[A-Za-z0-9_]{3,20}$' then
    raise exception 'Invalid username';
  end if;
  insert into public.profiles (id, username)
  values (new.id, chosen_username);
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_zoblox on auth.users;
create trigger on_auth_user_created_zoblox
after insert on auth.users for each row
execute function public.create_profile_for_new_user();

-- IMPORTANT: do not enable username login by exposing users' emails through
-- a public profiles view. A rate-limited trusted server-side login endpoint
-- with abuse protections is required. Supabase Auth does not natively support
-- signInWithPassword({username,password}).
