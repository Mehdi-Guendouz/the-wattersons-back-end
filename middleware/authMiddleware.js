const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET } = require('../.env');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
    req.user = {
      userId: decoded.userId,
    };

    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};


module.exports = authMiddleware;