# Emaar_Assignment

# Project Name

Multi-Tenant Workflow System. Designed to track multiple workflows.
Developed with React, tailwind for frontend and Node.js, Express, Prisma, and PostgreSQL for the backend

---

## 🚀 Tech Stack

* Node.js
* Express.js
* Prisma ORM
* PostgreSQL



---

## 📦 Setup Instructions

### 1. Clone repository

```bash
git clone <repo-url>
cd <project-folder>
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Configure environment variables

Create `.env`

Frontend : 

VITE_SERVER_URL = 

Backend : 
```env
USER_SERVICE_PORT =
JWT_SECRET =
TENANT_JWT_SECRET= 

SERVICE_DATABASE_URL="postgresql://postgres:password@1K@localhost:5432/mydb?schema=public"

COMPANY_DATABASE_URL="postgresql://postgres:password@1K@localhost:5432/companyDB?schema=public"

COMPANYBDB_DATABASE_URL = "postgresql://postgres:password@1K@localhost:5432/CompanyBDB?schema=public"


```

---

### 4. Run Prisma migration

Two Seed files in backend folder : MasterSeed.js & TenantSeed.js 

```bash
npx prisma migrate dev
```

or

```bash
npx prisma db push
```

---

### 5. Generate Prisma client

```bash
npx prisma generate
```

---

### 6. Start server

```bash
npm run dev
```

---

### 6. Start client

```bash
npm run dev
```
---

##  Architectural Decisions

###  MVC architecture

* View → Routes → Controllers → Database

* To keeps business logic separate 

---

### Multi-tenant Architecture

* Each tenant operates with an isolated database that stores its own Workflow data, ensuring strong data separation and improved security.

* A centralized master database is maintained to manage global user accounts and store metadata about all connected tenants. This master database enables efficient tenant identification and supports dynamic switching between tenant databases during runtime.

* This approach provides scalability, data isolation, and flexibility when onboarding new tenants or expanding the system. 
---


###  Middleware

* A JWT-based authentication middleware is implemented to enable secure and efficient user authorization across protected routes.

* A centralized error-handling middleware is used to capture and process application errors consistently, ensuring cleaner controllers and standardized API responses.


###  Prisma as ORM

* Type safety
* Prevents SQL injection
* Supports relational queries and transactions


---

###  Concurrency & Idempotency

* A dedicated workflow rules table defines all valid state transitions, ensuring updates are applied only when a "from_state → to_state" transition is permitted.

* Each transition request is validated by comparing the current state with the target state against the allowed transition matrix before performing any update.


---

###  Relation eager loading to avoid N+1

Used `select` wherever possible to fetch related workflow and task data efficiently.

---



##  Known Limitations

* Role table needs manual update at the moment, can be achieved in future
* Audit Logging is not implemented yet
* WebSocket scaling requires Redis pub/sub
* No caching layer implemented yet
* Missing optimistic locking for concurrent updates
* Pagination not implemented for required endpoints, can be added in future.
* Certain workflow transition validations are currently implemented with simplified checks and may require further refinement to support more complex branching and conditional  transitions.
* Authorization can be strengthened using dedicated schema for Each Roles.




---

##  Future Improvements

* Add Redis caching
* Implement optimistic concurrency control
* Enhance role-based authorization
* Improve logging & observability


---

##  Author

Abhishek Kumar

---


