Library Management System

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

Website at: https://java-library-app.vercel.app/
Access springboot at: https://javalibraryapp.onrender.com

- Postgre URL: jdbc:postgresql://dpg-d4m7nr7diees739t3iv0-a.oregon-postgres.render.com:5432/library_database_mhvm
- Username: library_database_mhvm_user
- Password: GT1Dm7w0qJr7R3kDfCawMo4F38cZ9JzX

   Features
- Full CRUD for Authors and Books
- Validation on create/update
- Exception handling
- 12 authors, 15 books seeded
- H2 database
