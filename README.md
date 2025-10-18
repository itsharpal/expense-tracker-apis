# 💰 Expense Tracker API

A simple and efficient **RESTful API** for managing personal expenses.\
Built with **Node.js**, **Express**, and **MongoDB**, this project allows users to **create**, **update**, **delete**, and **filter** their expenses with ease.

---

## 🚀 Features

- ➕ Add new expenses with category, amount, and description
- ✏️ Update or delete existing expenses
- 👤 View all expenses for the logged-in user
- 🧮 Filter expenses by:
  - Past Week
  - Past Month
  - Last 3 Months
  - Custom Date Range
- 📄 Pagination for large datasets
- 🔐 User authentication using JWT

---

## 🧩 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Auth:** JWT (JSON Web Token)
- **Environment Management:** dotenv

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/itsharpal/expense-tracker-apis.git
cd expense-tracker-apis
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

```bash
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key
PORT=5000
```

### 4️⃣ Start the server

```bash
npm start
```

Server runs at 👉 [**http://localhost:5000**](http://localhost:5000)

---

## 📚 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint             | Description                   |
| ------ | -------------------- | ----------------------------- |
| POST   | `/api/user/register` | Register a new user           |
| POST   | `/api/user/login`    | Login and receive a JWT token |

### 💸 Expense Routes

| Method | Endpoint            | Description                          |
| ------ | ------------------- | ------------------------------------ |
| POST   | `/api/expenses`     | Create a new expense                 |
| GET    | `/api/expenses`     | Get all user expenses (with filters) |
| PUT    | `/api/expenses/:id` | Update an expense by ID              |
| DELETE | `/api/expenses/:id` | Delete an expense by ID              |

---

## 🧮 Filtering Examples

| Filter Type       | Example Endpoint                                        |
| ----------------- | ------------------------------------------------------- |
| Past Week         | `/api/expenses?filter=week`                             |
| Past Month        | `/api/expenses?filter=month`                            |
| Last 3 Months     | `/api/expenses?filter=3months`                          |
| Custom Date Range | `/api/expenses?startDate=2025-07-01&endDate=2025-07-31` |
| Pagination        | `/api/expenses?filter=month&page=2&limit=5`             |

---

## 🏷️ Expense Categories

Supported categories:

> Groceries • Leisure • Electronics • Utilities • Clothing • Health • Others

---

## 👨‍💻 Author

Developed by **Harpal Chapatwala**\
📧 [harpal.chapatwala.official@example.com](mailto\:harpal.chapatwala.official@example.com)\
⭐ Star this repo if you found it useful!

🗺️ Inspired by [Expense Tracker API Project on roadmap.sh](https://roadmap.sh/projects/expense-tracker-api)

