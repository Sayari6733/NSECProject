// import jwt from 'jsonwebtoken';

// const userAuth = async (req, res, next) => {
//   try {
//     // Extract token from cookies
//     const { token } = req.cookies;

//     // If token is not present, return unauthorized response
//     if (!token) {
//       return res.status(401).json({ success: false, message: 'Not authorized. Please log in again.' });
//     }

//     // Verify the token with the secret key
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // If decoded token is invalid or doesn't contain the user ID, return unauthorized response
//     if (!decoded || !decoded.id) {
//       console.log('Decoded user:', decoded);

//       return res.status(401).json({ success: false, message: 'Invalid token. Please log in again.' });
//     }

//     // Attach user ID from token to the request object for further use
//     req.user = { id: decoded.id };

//     // Proceed to the next middleware or route handler
//     next();
//   } catch (error) {
//     // Log error for debugging
//     console.error('🔐 Auth Middleware Error:', error.message);

//     // Return authentication failure response
//     return res.status(401).json({ success: false, message: 'Authentication failed: ' + error.message });
//   }
// };

// export default userAuth;


import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
  try {
    let token;

    // Check for token in cookies or in the Authorization header
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    } else if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer ')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    // If no token found
    if (!token) {
      return res.status(401).json({ success: false, message: 'Not authorized. Please log in again.' });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || !decoded.id) {
      return res.status(401).json({ success: false, message: 'Invalid token. Please log in again.' });
    }

    req.user = { id: decoded.id };
    next();
  } catch (error) {
    console.error('🔐 Auth Middleware Error:', error.message);
    return res.status(401).json({ success: false, message: 'Authentication failed: ' + error.message });
  }
};

export default userAuth;
