const logger = (req, res, next) => {
    console.log('MIDDLEWARE REQUEST LOGGER WORKING');
  console.log(`${req.method} ${req.url}`);
  next();
};

module.exports = logger;