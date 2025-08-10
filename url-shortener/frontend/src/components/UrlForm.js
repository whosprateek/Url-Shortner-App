import React, { useState } from 'react';
import axios from 'axios';

const UrlForm = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setShortUrl('');

    try {
      const res = await axios.post('http://localhost:5000/api/shorten', { longUrl });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>URL Shortener ✂️</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter a long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          required
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && (
        <div className="result">
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default UrlForm;