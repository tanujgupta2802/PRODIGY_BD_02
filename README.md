# Task 02 – Persistent Storage with MongoDB

This project is a RESTful API built using **Node.js**, **Express.js**, and **MongoDB**. It performs CRUD operations on a `User` resource with persistent storage using **Mongoose (ODM)**.

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

---

## 📁 User Model

- `name` (String)
- `email` (String, validated)
- `age` (Number)

---

## 🚀 How to Run

1. Install dependencies  
   `npm install`

2. Configure `.env` file  

---


3. Start server  
`npm run start`

---

## 🔗 API Endpoints

| Method | Endpoint       | Description        |
|--------|----------------|--------------------|
| POST   | `/users`       | Create user        |
| GET    | `/users`       | Get all users      |
| GET    | `/users/:id`   | Get user by ID     |
| PUT    | `/users/:id`   | Update user        |
| DELETE | `/users/:id`   | Delete user        |

---

## 📚 Internship Info

This task was completed as part of my **Backend Development Internship** at **Prodigy InfoTech**.

