Library Management System

Live Deployment
URL: (will add after deployment)

API Endpoints
    Authors
- GET /authors
- GET /authors/{id}
- POST /authors
- PUT /authors/{id}
- DELETE /authors/{id}
- GET /authors/{id}/books

  Books
- GET /books
- GET /books/{id}
- POST /books
- PUT /books/{id}
- DELETE /books/{id}

      Local Setup

./gradlew bootRun

Access at: http://localhost:8080

H2 Console: http://localhost:8080/h2-console
- JDBC URL: jdbc:h2:mem:librarydb
- Username: sa
- Password: (blank)

   Features
- Full CRUD for Authors and Books
- Validation on create/update
- Exception handling
- 12 authors, 15 books seeded
- H2 database
