const router = require('express').Router();
module.exports = router;

// Mounts players api calls from api file on /api/players
router.use('/item', require('./items'));
router.use('/userdata', require('./userData'));
router.use('/auth', require('./auth'))

//Anythingn not found gets a 404
router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

//Export our api so we can use it on our server index file(main exit point for server)
