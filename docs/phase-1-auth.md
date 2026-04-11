04/10/2026
## goals for phase 1:
1. email/password login
2. session continuity 
3. authorization context 
4. risk containment 

this translates to bcrypt for password hashing, 15 min jwt access token, 7 day refresh token stored in httponly cookie, strict query scoping
_httponly cookie protects against js injection attacks!_

# changes
- added refreshTokenHash to users table
to add new:
```npx prisma migrate dev --name add_refresh_token```


standardized json bodies:
# register
{
  "email": "user@example.com",
  "password": "supersecurepassword",
  "name": "Trishana"
}
# success
{
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "name": "Trishana"
    },
    "accessToken": "jwt"
  },
  "error": null
}
# login
{
  "email": "user@example.com",
  "password": "supersecurepassword"
}
# success
{
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "name": "Trishana"
    },
    "accessToken": "jwt"
  },
  "error": null
}

# refresh success (needs refresh cookie)

{
  "data": {
    "accessToken": "new-jwt"
  },
  "error": null
}

# logout success
{
  "data": {
    "loggedOut": true
  },
  "error": null
}