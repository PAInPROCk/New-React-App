import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Intern Assignment</h1>

      <div className="signup-form">
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="text" placeholder="Phone Number" />
          <button type="submit">Signup</button>
        </form>
      </div>

      <div className="login-form">
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>

      <div className="orders-list">
        <h2>Orders List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Status</th>
              <th>Payment Type</th>
            </tr>
          </thead>
          <tbody>
            {/* Add rows here dynamically */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
