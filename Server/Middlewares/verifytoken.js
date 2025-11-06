import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = header.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded; 
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
