const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  const queryText = `
  SELECT  * FROM "gallery"
  `

  pool.query(queryText)
  .then((response)=>{
    console.log("response from get router", response.rows)
    res.send(response.rows)

  })
  . catch((error)=>{
    console.error("error in get router", error )
  })
});

module.exports = router;
