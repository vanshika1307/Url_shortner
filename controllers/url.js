const shortid = require('shortid');
const URL = require('../models/url');

async function GenerateShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: 'url is needed' });

  const shortId = shortid.generate();
  await URL.create({
    shortId,
    redirectUrl: body.url,
    totalClicks: [],
  });
  return res.json({ id: shortId });
}

module.exports = {
  GenerateShortUrl,
};