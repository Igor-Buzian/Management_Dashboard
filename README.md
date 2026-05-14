# 📊 Management Dashboard

User management dashboard built with Angular and Spring Boot.

Focuses on dynamic filtering, centralized state management,
and clear separation between UI, state, and API layers.

---

## 🚀 Tech Stack

- Frontend: Angular, TypeScript, RxJS, SCSS  
- State: Angular Signals + Facade pattern  
- Backend: Spring Boot, REST API  
- Database: H2 (in-memory)

---
## 🏗 Architecture

Frontend structure:

Components → Facade → Store → API Service

- Components contain only UI logic
- Facade coordinates actions and API calls
- Store holds reactive state (signals)
- API services handle HTTP
- no direct API calls inside components

  ````md
  UI → Facade → API → Store → UI update
  ````
  
---

Backend filtering is implemented using Spring Data JPA Specifications.

- filters are applied dynamically based on input
- each query parameter adds a condition
- all conditions are combined with AND logic

This approach avoids hardcoded query combinations
and keeps filtering logic scalable.

---

## ✨ Features

### 👥 User Management

- Full CRUD operations
- DTO-based communication
- Immediate UI updates after changes (store sync)

---

### 🔍 Filtering

Supports dynamic multi-field filtering:

- city, profession, status  
- text search (`query`)  
- age range (`ageFrom`, `ageTo`)  
- experience range (`experienceFrom`, `experienceTo`)  

Behavior:
- all filters are optional  
- empty values are excluded from request  
- filters are combined with AND logic  
- backend uses JPA Specifications for dynamic filtering

Example:

````md
GET /api/users?city=Berlin&ageFrom=25
````

------

### 🧠 State Management

Frontend uses facade + store pattern:

- `UsersFacade` — orchestrates API calls
- `UsersStore` — manages state via Angular signals
- `UserService` — handles HTTP requests

---

### 📱 UI

- Responsive layout  
- Sidebar with burger menu  
- Navigation via sidebar actions  
- Global + component-level SCSS  

---

## ⚠️ Error Handling

Backend uses centralized exception handling via `@ControllerAdvice`.

- all errors return a consistent JSON structure  
- custom exceptions for validation and not found cases  
- HTTP status codes reflect error type  
- No exception handling logic inside controllers
  
Example:

```json
{
  "field": "email",
  "code": "EMAIL_NOT_UNIQUE",
  "message": "Email already exists"
}
```

---

## 🧩 Data Model

User:

- id: number  
- name: string  
- email: string (unique)  
- city?: string  
- profession?: string  
- age?: number  
- experienceYears?: number  
- status: ACTIVE | INACTIVE | SUSPENDED  
- avatarUrl?: string  
- createdAt: timestamp  

---

## 🗄 Initial Data

Application is preloaded with 20 users (H2 in-memory database).

Data includes:
- multiple cities
- different professions
- various experience levels  

Used to demonstrate filtering behavior.

---

## ▶️ How to Run

### Requirements
- Node.js v20.20.2
- Java 17
- Maven

### Backend

```bash
mvn spring-boot:run
```
### Frontend
```bash
 cd frontend/user-management
npm install
ng serve
```
## Open:
``` 
http://localhost:4200
```
