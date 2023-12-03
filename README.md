Megablog - MERN Stack Blog Website
Megablog is a full-stack blog website built using the MERN (MongoDB, Express.js, React, Node.js) stack.

Features
User authentication (register, login, logout)
Create, edit, and delete blog posts
View and comment on blog posts
Responsive design for various devices
Prerequisites
Before running the project, ensure you have the following installed:

Node.js
npm
MongoDB (Make sure your MongoDB server is running)
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/megablog.git
cd megablog
Install Dependencies:

bash
Copy code

# Navigate to the backend folder and install dependencies

cd backend
npm install

# Navigate to the frontend folder and install dependencies

cd ../frontend
npm install
Configure Environment Variables:

Create a .env file in the backend folder and set your MongoDB connection string and other environment variables.

Example .env file:

env
Copy code
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database-name
JWT_SECRET=your-secret-key
Run the Application:

bash
Copy code

# In the backend folder, start the Node.js server

cd backend
npm start

# In the frontend folder, start the React development server

cd ../frontend
npm start
The frontend will be accessible at http://localhost:3000, and the backend will run at http://localhost:5000.

Usage
Open your browser and navigate to http://localhost:3000 to access the Megablog website.
