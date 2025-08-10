const router = require('express').Router();
const shortid = require('shortid');
const Url = require('../models/url');

// POST /api/shorten - Create a short URL
router.post('/api/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = process.env.BASE_URL || 'http://localhost:5000';

  // Basic validation
  if (!longUrl) {
    return res.status(400).json('Invalid URL');
  }

  try {
    // Check if the long URL already exists in the database
    let url = await Url.findOne({ longUrl });

    if (url) {
      res.json(url);
    } else {
      // If it doesn't exist, create a new short code
      const shortCode = shortid.generate();
      const shortUrl = `${baseUrl}/${shortCode}`;

      url = new Url({
        longUrl,
        shortCode,
        shortUrl,
        date: new Date(),
      });

      await url.save();
      res.json(url);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

// GET /:shortcode - Redirect to the original URL
router.get('/:shortcode', async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.shortcode });

    if (url) {
      url.clicks++;
      await url.save();
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json('No URL found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
});

// GET /api/admin/urls - Get all URLs for the admin page
router.get('/api/admin/urls', async (req, res) => {
    try {
        const urls = await Url.find().sort({ date: -1 }); // Sort by most recent
        res.json(urls);
    } catch (err) {
        console.error(err);
        res.status(500).json('Server error');
    }
});


module.exports = router;