
# Player Management System (PMS) - Full Stack Application

This application is a simple **Player Management System** where you can create, update, view, and delete players using a **React frontend** and a **Flask backend**. It includes a **MySQL** database to store player data.

## Prerequisites

Before running the application, ensure you have the following installed:

### Backend:
- Python 3.x
- MySQL Database

### Frontend:
- Node.js
- npm (Node Package Manager) or Yarn (optional)

---

## Backend Setup (Flask + MySQL)

### 1. Install Dependencies

Navigate to the backend folder and install the necessary Python packages:

```bash
cd backend
pip install -r requirements.txt
```

#### Backend Dependencies:
- Flask
- Flask-Cors
- Flask-MySQLdb
- MySQL connector (for Python)

### 2. Configure MySQL Database

1. **Create a MySQL database** for the app:
   
   ```sql
   CREATE DATABASE pms;
   ```

2. **Update the database configuration** in the `app.py` or a config file:
   
   ```python
   app.config['MYSQL_HOST'] = 'localhost'
   app.config['MYSQL_USER'] = 'root'
   app.config['MYSQL_PASSWORD'] = 'yourpassword'
   app.config['MYSQL_DB'] = 'pms'
   ```

3. **Create the required table:**

   Run this SQL query to create the `Players` table:

   ```sql
   CREATE TABLE Players (
     Id INT PRIMARY KEY AUTO_INCREMENT,
     name VARCHAR(100),
     country VARCHAR(100),
     gender VARCHAR(20),
     sport VARCHAR(50)
   );
   ```

### 3. Run the Backend

Start the Flask server on port 5000:

```bash
python app.py
```

---

## Frontend Setup (React)

### 1. Install Dependencies

Navigate to the `client` folder (frontend folder) and install the required packages using npm or yarn:

```bash
cd client
npm install
```

#### Frontend Dependencies:
- React
- Axios
- React-Router-Dom
- Bootstrap (optional but used for styling)

### 2. Run the Frontend

To start the React development server on port 3000:

```bash
npm start
```

---

## Full Setup and Execution

### Step-by-Step Guide for Smooth Execution:

1. **Clone the repository** to your local machine.
   
   ```bash
   git clone https://github.com/your-repo/pms-fullstack.git
   cd pms-fullstack
   ```

2. **Backend Setup:**

   - Navigate to the backend folder.
   - Install backend dependencies:
     
     ```bash
     pip install -r requirements.txt
     ```
   - Configure MySQL database settings in `app.py`.
   - Run the Flask app on port 5000:
     
     ```bash
     python app.py
     ```

3. **Frontend Setup:**

   - Open a new terminal.
   - Navigate to the frontend folder (client).
   - Install frontend dependencies:
     
     ```bash
     npm install
     ```
   - Start the React app on port 3000:
     
     ```bash
     npm start
     ```

4. **Access the Application:**

   - The frontend will be accessible at: [http://localhost:3000](http://localhost:3000)
   - The backend API can be accessed at: [http://localhost:5000](http://localhost:5000)

---

## Commands for Running and Checking the Application:

### To Run the Backend:

```bash
python app.py
```

### To Run the Frontend:

```bash
npm start
```

### To Check Frontend (React):
- Make sure you are in the `client` directory.
- Run the following:

```bash
npm start
```

### To Check Backend (Flask):
- Make sure you are in the `backend` directory.
- Run the following:

```bash
python app.py
```

---

## Additional Information

- **API Endpoints:**
  - `GET /api/players`: Fetch all players.
  - `POST /api/players`: Create a new player.
  - `PUT /api/players/:id`: Update a player.
  - `DELETE /api/players/:id`: Delete a player.

- **Frontend Pages:**
  - `/players`: View all players.
  - `/create`: Create a new player.
  - `/update/:id`: Update a player.
  - `/delete/:id`: Delete a player.

---

### Notes:
- Ensure MySQL is running before starting the backend.
- Ensure you are running the frontend and backend on separate terminals.

---

Feel free to contact for any additional issues or support related to this setup!
