const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
  res.json({
    points: [
      {
        "id": 1,
        "date": "13/17/2020",
        "hour": "08:00",
        "type": "in",
        "user_id": 1,
        "description": ""
      },
      {
        "id": 1,
        "date": "13/17/2020",
        "hour": "12:00",
        "type": "out",
        "user_id": 1,
        "description": ""
      }
    ]
  });
});

module.exports = router;
