-- Guests can submit reservations, but only staff can access reservation data.
-- Staff membership is assigned in auth.users.raw_app_meta_data as { "role": "staff" }.

drop policy if exists "Authenticated users can read reservations" on public.reservations;
drop policy if exists "Authenticated users can update reservations" on public.reservations;
drop policy if exists "Authenticated users can delete reservations" on public.reservations;

create policy "Staff can read reservations"
  on public.reservations
  for select
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'staff');

create policy "Staff can update reservations"
  on public.reservations
  for update
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'staff')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'staff');

create policy "Staff can delete reservations"
  on public.reservations
  for delete
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'staff');