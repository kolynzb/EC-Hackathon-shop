const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');

const {
  JWT_SECRET,
  JWT_EXPIRES_IN,
  JWT_COOKIE_EXPIRES_IN,
  JWT_REFRESH_SECRET,
  JWT_REFRESH_EXPIRES_IN,
} = process.env;

//TODO: refresh token
const createToken = (payload) =>
  jwt.sign({ id: payload }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

const createRefreshToken = async (payload) => {
  const refreshToken = jwt.sign({ id: payload }, JWT_REFRESH_SECRET, {
    expiresIn: JWT_REFRESH_EXPIRES_IN,
  });
  await userModel.findByIdAndUpdate(payload, { refreshToken });
  return refreshToken;
};

const isTokenValid = (token) => jwt.verify(token, JWT_SECRET);
const isRefreshTokenValid = (token) => jwt.verify(token, JWT_REFRESH_SECRET);

const createSendToken = (user, statusCode, req, res) => {
  const token = createToken(user._id);
  const RefreshToken = createRefreshToken(user._id);
  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
  };

  if (process.env.NODE_ENV === 'production') {
    cookieOptions.secure =
      req.secure || req.headers['x-forwarded-proto'] === 'https';
  }

  res.cookie('jwt', RefreshToken, { ...cookieOptions });
  req.user = user;

  res.status(statusCode).json({
    status: 'success',
    accessToken: token,
    refreshToken: RefreshToken,
  });
};

module.exports = {
  createToken,
  createSendToken,
  isTokenValid,
  createRefreshToken,
};
