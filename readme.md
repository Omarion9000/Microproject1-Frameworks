# 🛒 Online Shop Project

This is a **simple online shop** built using **Express.js** and a front-end interface. The project includes multiple pages (Home, About, Contact, and Products) and features a JSON-based API to display a list of Apple products.

## 🚀 Features
- **Dynamic Product List**: Fetches and displays products from a JSON file.
- **Neon Gradient UI**: A visually appealing gradient background with smooth animations.
- **Contact Form**: Users can send messages via a form.
- **Navigation Menu**: Smooth navigation between pages.
- **Responsive Design**: Adapts to different screen sizes.

---

## 📂 Project Structure
/Online-Shop-Project │── /public │ ├── /images # Folder for images │ ├── index.html # Home Page │ ├── about.html # About Page │ ├── contact.html # Contact Page │ ├── demo.html # Product Display Page │── /css │ ├── style.css # Main stylesheet │── /data │ ├── items.json # Product data (JSON format) │── /js │ ├── script.js # Handles fetching and displaying product data │── index.js # Main Express.js server │── package.json # Project dependencies and scripts │── README.md # Project documentation

yaml
Copy
Edit

---

## 🛠 Installation & Setup

### 1️⃣ **Clone the repository**
```sh
git clone https://github.com/your-username/Online-Shop-Project.git
cd Online-Shop-Project
2️⃣ Install dependencies
sh
Copy
Edit
npm install
3️⃣ Run the server
sh
Copy
Edit
npm run dev
The server will start at http://localhost:3000.

📌 Usage Instructions
1️⃣ Open http://localhost:3000 in your browser to view the homepage.
2️⃣ Navigate to different pages using the menu:

Home (index.html)

About (about.html)

Contact (contact.html)

Products (demo.html)
3️⃣ Click the "Load Items" button in the Products page to fetch and display product details from items.json.

🛡 Security Approaches
This project follows basic IT security practices, including:

Data validation: Ensuring only valid requests are processed.

Secure JSON handling: No direct user manipulation of product data.

Restricted API access: The backend serves only predefined JSON data.

🛠 Technologies Used
Frontend: HTML, CSS (Neon Gradient UI), JavaScript

Backend: Node.js, Express.js

Data Storage: JSON file