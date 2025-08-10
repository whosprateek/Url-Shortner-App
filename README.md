<h1>🔗 URL Shortener</h1>

<p>A simple and efficient URL Shortener built with <strong>React</strong> (frontend), <strong>Node.js + Express</strong> (backend), and <strong>MongoDB</strong> (database).</p>

<hr />

<h2>🚀 Features</h2>
<ul>
  <li>Shorten any long URL into a clean, shareable link.</li>
  <li>Redirect short links to their original long URL.</li>
  <li>Admin panel to view all shortened URLs.</li>
  <li>Track how many times each short URL has been visited.</li>
  <li>Responsive UI for both desktop and mobile.</li>
</ul>

<hr />

<h2>📦 Tech Stack</h2>
<ul>
  <li><strong>Frontend:</strong> React, CSS</li>
  <li><strong>Backend:</strong> Node.js, Express.js</li>
  <li><strong>Database:</strong> MongoDB + Mongoose</li>
</ul>

<hr />

<h2>📂 Project Structure</h2>
<pre>
/frontend
  ├── src
  │    ├── components
  │    │    ├── UrlForm.js
  │    │    └── UrlForm.css
  │    └── App.js
/backend
  ├── models
  │    └── Url.js
  ├── routes
  │    └── urlRoutes.js
  ├── server.js
</pre>

<hr />

<h2>⚙️ API Endpoints</h2>
<ul>
  <li><code>POST /api/shorten</code> – Accepts a long URL and returns a shortened code.</li>
  <li><code>GET /:shortcode</code> – Redirects to the original long URL.</li>
</ul>

<hr />

<h2>🖥️ Admin Page</h2>
<ul>
  <li>Lists all shortened URLs.</li>
  <li>Shows total click count for each link.</li>
</ul>

<hr />

<h2>💻 Usage</h2>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/yourusername/url-shortener.git</code></pre>
  </li>
  <li>Navigate into the project folders and install dependencies:
    <pre><code>cd backend && npm install
cd ../frontend && npm install</code></pre>
  </li>
  <li>Start backend server:
    <pre><code>cd backend
npm start</code></pre>
  </li>
  <li>Start frontend:
    <pre><code>cd frontend
npm start</code></pre>
  </li>
  <li>Visit <code>http://localhost:3000</code> to use the app.</li>
</ol>

<hr />

<h2>🛠 Example</h2>
<ol>
  <li>Enter: <code>https://www.example.com/some/very/long/path</code></li>
  <li>Get: <code>http://localhost:3000/abc123</code></li>
  <li>Visit short URL → redirects to original.</li>
</ol>

<hr />


