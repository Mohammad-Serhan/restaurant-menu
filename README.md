
# Recipe Management System

## Overview
This project is a full-stack recipe management system that allows an admin to manage recipes and users to browse them. Only logged-in admins can perform actions like adding, editing, or deleting recipes. The system provides a responsive UI with filtering options for a seamless user experience.

---

## Features

### **User Authentication**
- Admin can log in with a secure login system.
- Non-admin users cannot edit or update recipes.
- The header dynamically updates based on the user's login state:
  - Displays **Home** and **Login** links when not logged in.
  - Displays the admin’s profile picture with a hidden dropdown menu for logout when logged in.

### **Recipe Management**
- Admin can:
  - Add new recipes.
  - Edit existing recipes.
  - Delete recipes.

### **Recipe Details**
Each recipe includes:
- Picture
- Name
- Category
- Ingredients
- Price

### **Filtering**
- Filter recipes by category or view all recipes under "All."

---

## Technologies Used

### **Frontend**
- **React**: For building the user interface.
- **TailwindCSS**: For styling and responsive design.
- **Axios**: For making HTTP requests to the backend.
- **dotenv**: For environment variable management.

### **Backend**
- **Node.js**: For server-side JavaScript.
- **Express.js**: For creating APIs and handling routes.
- **bcryptjs**: For hashing passwords and ensuring secure authentication.
- **body-parser**: For parsing incoming request bodies.
- **cors**: For handling Cross-Origin Resource Sharing.
- **jsonwebtoken (JWT)**: For secure user authentication and authorization.
- **mongoose**: For MongoDB database interaction.
- **multer**: For handling image uploads.

---

## Installation and Setup

### **Backend**
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   PORT=8080
   MONGO_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```
4. Start the server:
   ```bash
   npm start
   ```

### **Frontend**
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   REACT_APP_API_URL=http://localhost:3000
   ```
4. Start the development server:
   ```bash
   npm start
   ```

---

## API Endpoints

### **Authentication**
1. **POST /api/auth/login**  
   Authenticate admin users and return a JWT token.

### **Recipes**
1. **GET /getMenuItems**  
   Fetch all recipes.
2. **POST /addItem**  
   Add a new recipe (Admin only).
3. **PUT /editItem/:item_id**  
   Edit a recipe by ID (Admin only).
4. **DELETE /deleteItem/:item_id**  
   Delete a recipe by ID (Admin only).

---

## Usage
1. **Login as Admin**: Use the admin credentials to log in.
2. **Add Recipes**: Upload recipe details, including a picture, ingredients, category, and price.
3. **Filter Recipes**: Browse recipes by category or view all.
4. **Manage Recipes**: Edit or delete recipes directly from the admin dashboard.

---

## Future Enhancements
- Add user roles for basic users and viewers.
- Implement recipe rating and reviews.
- Enhance search and filter functionality with additional criteria.
