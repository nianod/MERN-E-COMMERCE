# 🛒 E-Commerce Platform 

A full-stack **E-Commerce web application** built with the **MERN stack + TypeScript (TSX)**, featuring **passwordless authentication using Email OTP**, **JWT-based sessions**, and a powerful **admin dashboard**.

**Secure. Modern. Scalable.** 

---

##  Features & Security

This application uses a **passwordless authentication flow** secured with **OTP verification** and **JWT tokens**.

### 🔐 Authentication (Passwordless)
- Email-based login (no passwords)
- One-Time Password (OTP) verification
- JWT-based session management
- Automatic user creation on first login
- OTP expiration & replay protection


### 🔑 Authentication Flow

1. User enters **email**
2. System checks if user exists
3. If new user → collect **basic credentials**
4. **OTP is sent**
5. User verifies OTP
6. JWT issued → access dashboard

---

### 🚦 Rate Limiting (Security)

To prevent abuse and brute-force attacks, **rate limiting is enforced at critical auth points**:

#### OTP Request Limiting
- Limits how often a user can request a new OTP
- Prevents spam and email flooding

#### OTP Verification Limiting
- Limits OTP verification attempts
- Protects against brute-force attacks on 6-digit codes
- Automatically blocks excessive attempts

```text
Max OTP verification attempts: 5
Time window: 10 minutes
```

### 👤 User Management
- User roles (customer / admin)
- Profile completion after first login
- Secure protected routes

### 🛍️ E-Commerce Core
- Product catalog
- Cart & checkout flow
- Order placement & tracking
- Order history

### 🛠️ Admin Dashboard
- Manage users
- CRUD products & categories
- View orders & sales analytics
- Role-based access control

### ⚡ Developer Experience
- RESTful CRUD APIs
- Type-safe frontend (TSX)
- Tailwind CSS UI
- Clean backend architecture

---

## 🛠️ Tech Stack

### Frontend
- React (TypeScript / TSX)
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Crypto (OTP hashing)
- nodemailer of otp sendings

---

 
---

## 🔑 Admin Capabilities

- View & manage all users
- Create, update & delete products
- Manage orders
- Access protected analytics endpoints

---

## 🔒 Security Highlights

- Hashed OTPs (never stored in plain text)
- OTP expiry enforcement
- JWT-protected routes
- Role-based authorization middleware

---

## 🤝 Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss improvements.

