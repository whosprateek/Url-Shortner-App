<h1>URL Shortener</h1>

<p>A full-stack URL shortener application built with <strong>React</strong> (frontend), <strong>Node.js + Express</strong> (backend), and <strong>MongoDB</strong>.</p>

<h2>📂 Project Structure</h2>
<pre>
URL-SHORTENER/
│
├── backend/
│   ├── models/
│   │   └── url.js
│   ├── routes/
│   │   └── urls.js
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── UrlForm.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── package-lock.json
</pre>

<h2>🚀 Features</h2>
<ul>
  <li>Shorten any long URL</li>
  <li>Redirect to original URL using short code</li>
  <li>Admin page to list all shortened URLs</li>
  <li>Track number of visits for each short link</li>
</ul>

<h2>⚙️ Backend API Routes</h2>
<ul>
  <li><code>POST /api/shorten</code> – Accepts long URL, returns short code</li>
  <li><code>GET /:shortcode</code> – Redirects to original URL</li>
</ul>

<h2>📦 Installation</h2>

<h3>1️⃣ Clone the repository</h3>
<pre>
git clone &lt;your-repo-url&gt;
cd URL-SHORTENER
</pre>

<h3>2️⃣ Backend Setup</h3>
<pre>
cd backend
npm install
</pre>

<h3>3️⃣ Create .env file in backend folder</h3>
<pre>
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:3000
PORT=5000
</pre>

<h3>4️⃣ Start Backend (Nodemon)</h3>
<pre>
npx nodemon server.js
</pre>

<h3>5️⃣ Frontend Setup</h3>
<pre>
cd ../frontend
npm install
</pre>

<h3>6️⃣ Start Frontend</h3>
<pre>
npm start
</pre>

<h2>🖥 Usage</h2>
<ol>
  <li>Enter a long URL in the input field</li>
  <li>Click "Shorten"</li>
  <li>Copy and use the generated short link</li>
  <li>Visiting the short link will redirect you to the original URL</li>
</ol>


