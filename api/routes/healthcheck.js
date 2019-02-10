const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res, next) => {
    const message = 'Example App';
    res.send({ data: message });
  });

module.exports = router;
