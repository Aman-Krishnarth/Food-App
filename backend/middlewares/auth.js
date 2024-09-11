import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({
      success: false,
      message: "Not Authorized. Login",
    });
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);

    req.body.userId = data.id;
    next();
  } catch (error) {
    console.log("AUTH.JS error");
    res.json({
      success: false,
      message: "ERROR",
    });
  }
};

export default authMiddleware;
