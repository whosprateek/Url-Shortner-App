import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/admin/urls');
        setUrls(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching URLs:', err);
        setLoading(false);
      }
    };

    fetchUrls();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Admin - All URLs 📊</h2>
      <table>
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url._id}>
              <td>
                <a href={url.longUrl} target="_blank" rel="noopener noreferrer">
                  {url.longUrl.substring(0, 50)}...
                </a>
              </td>
              <td>
                <a href={url.shortUrl} target="_blank" rel="noopener noreferrer">
                  {url.shortUrl}
                </a>
              </td>
              <td>{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;