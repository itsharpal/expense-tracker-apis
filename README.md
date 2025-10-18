⸻


# 💰 Expense Tracker API

A simple RESTful API for managing personal expenses.  
Built with **Node.js**, **Express**, and **MongoDB**, this project allows users to create, update, delete, and filter expenses efficiently.

---

## 🚀 Features

- Add new expenses with category, amount, and description  
- Update or delete existing expenses  
- View all expenses for the logged-in user  
- Filter expenses by:
  - Past Week
  - Past Month
  - Last 3 Months
  - Custom Date Range  
- Pagination support for large datasets  
- User authentication using JWT

---

## 🧩 Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Auth:** JWT (JSON Web Token)  
- **Environment Management:** dotenv  

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/itsharpal/expense-tracker-apis.git

2.	Install dependencies
    ```bash
    npm install

3.	Create .env file in the root directory and add:
    ```bash
    MONGO_URI=your_mongodb_connection_string
    SECRET_KEY=your_secret_key
    PORT=5000

4.	Start the server
    ```bash
    npm start

The server will run on http://localhost:5000.

⸻

📚 API Endpoints

🔐 Auth

Method	Endpoint	Description
POST	/api/user/register	Register new user
POST	/api/user/login	Login and get token

💸 Expenses

Method	Endpoint	Description
POST	/api/expenses	Create a new expense
GET	/api/expenses	Get all user expenses (with filters)
PUT	/api/expenses/:id	Update expense by ID
DELETE	/api/expenses/:id	Delete expense by ID


⸻

🧮 Filtering Examples

Use Case	Example
Past Week	/api/expenses?filter=week
Past Month	/api/expenses?filter=month
Last 3 Months	/api/expenses?filter=3months
Custom Range	/api/expenses?startDate=2025-07-01&endDate=2025-07-31
Pagination	/api/expenses?filter=month&page=2&limit=5


⸻

🏷️ Categories

Supported categories:
	•	Groceries
	•	Leisure
	•	Electronics
	•	Utilities
	•	Clothing
	•	Health
	•	Others

⸻

👨‍💻 Author

Developed by [Your Name]
📧 [harpal.chapatwala.official@example.com]
⭐ Feel free to star this repo if you found it useful!


Part of the Roadmap projects:
https://roadmap.sh/projects/expense-tracker-api
⸻
