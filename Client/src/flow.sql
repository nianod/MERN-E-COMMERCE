--Flow Diagram for User Authentication Process(PASSWORDLESS AUTHENTICATION)

User enters email
        ↓
Check if email exists
        ↓
IF EXISTS → send OTP → OTP page → dashboard
IF NOT EXISTS → credentials page → create user → send OTP → OTP page → dashboard

Signin Page
   ↓
check-user API
   ↓
 ┌───────────────┐
 │ User Exists   │
 └──────┬────────┘
        ↓
   request-otp
        ↓
      OTP Page
        ↓
    Dashboard


Signin Page
   ↓
check-user API
   ↓
 ┌───────────────┐
 │ User NOT exist│
 └──────┬────────┘
        ↓
 Credentials Page
        ↓
  create-user API
        ↓
   request-otp
        ↓
      OTP Page
        ↓
    Dashboard
