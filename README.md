# Four Seasons Restaurant

Next.js website for Four Seasons Restaurant, with online reservations and a staff admin panel.

## Stack

- **Next.js 15** (App Router)
- **Supabase** — Postgres database + email/password auth
- **Tailwind CSS** + shadcn/ui

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Create a Supabase project

1. Go to [https://supabase.com](https://supabase.com) and create a free project.
2. Open **Project Settings → API** and copy:
   - Project URL
   - `anon` public key

### 3. Environment variables

Copy `.env.example` to `.env` and fill in your values:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Create the database table

In the Supabase dashboard, open **SQL → New query**, paste the contents of [`supabase/schema.sql`](./supabase/schema.sql), and run it.

This creates the `reservations` table and RLS policies:

| Who | Can |
|---|---|
| Anyone (public site) | Create reservations |
| Signed-in staff | Read, update, delete reservations |

### 5. Auth settings

In **Authentication → Providers**, ensure **Email** is enabled.

Optional:

- Disable **Confirm email** under Authentication → Providers → Email if you want staff accounts to work immediately after sign-up (handy during development).
- Create staff accounts via the app’s `/sign-up` page, or invite users from the Supabase dashboard.

### 6. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

- Public site: book via **Reserveren**
- Staff panel: [http://localhost:3000/reservations](http://localhost:3000/reservations) (requires sign-in)

## Reservation fields

| Field | Type | Notes |
|---|---|---|
| `name` | text | Guest name |
| `slot` | timestamptz | Date/time of reservation |
| `email` | text | Guest email |
| `phone` | text | Guest phone |
| `size` | integer | Party size |
| `notes` | text | Optional |
| `status` | text | `pending` \| `confirmed` \| `cancelled` |

## Deploy

Deploy on Vercel (or similar) and set the same `NEXT_PUBLIC_SUPABASE_*` environment variables in the hosting dashboard.
