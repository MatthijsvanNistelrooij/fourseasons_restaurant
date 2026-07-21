# Four Seasons Restaurant

Restaurant website built with Next.js and Supabase featuring:

- Public reservation form
- Staff authentication
- Reservation management dashboard

## Tech Stack

- Next.js 15
- Supabase
- Tailwind CSS
- shadcn/ui

## Getting Started

### Install

```bash
npm install
## Staff access

Reservation data is protected by Supabase RLS. Only users whose `app_metadata.role` is `staff` can read, update, or delete reservations. Guests can submit reservations without an account.

After applying the latest migration, create staff users in the Supabase Auth dashboard, then run this in the Supabase SQL Editor for each staff member (substitute their email):

```sql
update auth.users
set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role":"staff"}'::jsonb
where email = 'staff@example.com';
```

The staff member must sign out and back in after their role is assigned, so their JWT receives the new role. The service-role key is not needed by this application and must not be exposed to the browser.