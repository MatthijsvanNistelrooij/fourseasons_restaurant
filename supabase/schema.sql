-- Run this in the Supabase SQL Editor (Dashboard → SQL → New query)

-- Reservations table
create table if not exists public.reservations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slot timestamptz not null,
  email text not null,
  phone text not null,
  size integer not null check (size > 0),
  notes text,
  status text not null default 'pending'
    check (status in ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists reservations_slot_idx on public.reservations (slot desc);
create index if not exists reservations_status_idx on public.reservations (status);

-- Auto-update updated_at
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists reservations_set_updated_at on public.reservations;
create trigger reservations_set_updated_at
  before update on public.reservations
  for each row
  execute function public.set_updated_at();

-- Row Level Security
alter table public.reservations enable row level security;

-- Public can create reservations (booking form on the website)
drop policy if exists "Anyone can create reservations" on public.reservations;
create policy "Anyone can create reservations"
  on public.reservations
  for insert
  to anon, authenticated
  with check (true);

-- Only signed-in staff can read reservations
drop policy if exists "Authenticated users can read reservations" on public.reservations;
drop policy if exists "Staff can read reservations" on public.reservations;
create policy "Staff can read reservations"
  on public.reservations
  for select
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'staff');

-- Only signed-in staff can update reservations
drop policy if exists "Authenticated users can update reservations" on public.reservations;
drop policy if exists "Staff can update reservations" on public.reservations;
create policy "Staff can update reservations"
  on public.reservations
  for update
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'staff')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'staff');

-- Only signed-in staff can delete reservations
drop policy if exists "Authenticated users can delete reservations" on public.reservations;
drop policy if exists "Staff can delete reservations" on public.reservations;
create policy "Staff can delete reservations"
  on public.reservations
  for delete
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'staff');
