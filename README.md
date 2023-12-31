<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>

  <h1>Megablog - MERN Stack Blog Website</h1>

  <p>Megablog is a full-stack blog website built using the MERN (MongoDB, Express.js, React, Node.js) stack.</p>

  <h2>Features</h2>
  <ul>
    <li>User authentication (register, login, logout)</li>
    <li>Create, edit, and delete blog posts</li>
    <li>View and comment on blog posts</li>
    <li>Responsive design for various devices</li>
  </ul>

  <h2>Prerequisites</h2>
  <p>Before running the project, ensure you have the following installed:</p>
  <ul>
    <li>Node.js</li>
    <li>npm</li>
    <li>MongoDB (Make sure your MongoDB server is running)</li>
  </ul>

  <h2>Installation</h2>

  <h3>Clone the Repository:</h3>
  <pre>
    <code>
      git clone https://github.com/yourusername/megablog.git
      cd megablog
    </code>
  </pre>

  <h3>Install Dependencies:</h3>
  <pre>
      # Navigate to the backend folder and install dependencies
          <code>
      cd backend
      npm install    </code>

      # Navigate to the frontend folder and install dependencies
    <code>
      cd ../frontend
      npm install
    </code>

  </pre>

  <h3>Configure Environment Variables:</h3>
  <p>Create a <code>.env</code> file in the backend folder and set your MongoDB connection string and other environment variables.</p>
  <p>Example <code>.env</code> file:</p>
  <pre>
    <code>
      PORT=5000
      NODE_ENV=development
      MONGO_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database-name
      JWT_SECRET=your-secret-key
    </code>
  </pre>

  <h3>Run the Application:</h3>
  <pre>
    <code>
      # In the backend folder, start the Node.js server
      cd backend
      npm start
    </code>

      # In the frontend folder, start the React development server
    <code>

      cd ../frontend
      npm start
    </code>

  </pre>
  <p>The frontend will be accessible at <a href="http://localhost:3000">http://localhost:3000</a>, and the backend will run at <a href="http://localhost:5000">http://localhost:5000</a>.</p>

  <h2>Usage</h2>
  <p>Open your browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a> to access the Megablog website.</p>

</body>

</html>
