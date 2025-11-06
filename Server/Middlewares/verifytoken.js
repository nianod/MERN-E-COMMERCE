import jwt from 'jsonwebtoken';
import user from '../Models/user.js';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized, no token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = { id: decoded.id };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized, token invalid' });
  }
};
