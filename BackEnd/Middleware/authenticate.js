const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded; // { _id: '...', iat: ..., exp: ... }
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
