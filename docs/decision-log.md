## chose Supabase + Prisma
why:
- managed Postgres is easier than self-hosting
- prisma gives type-safe queries and migration support
- good fit for a one woman dev team building quickly!

tradeoff:
- another hosted dependency
- i need to grasp connection URLs and migration flow better for debugging!

## single refresh tokens > table of refresh sessions
why:
- more simple to implement for MVP!
- easy logout and refresh verification

tradeoffs:
- only one active login per user, can't login on two devices (which is fine since i don't have an app yet)
